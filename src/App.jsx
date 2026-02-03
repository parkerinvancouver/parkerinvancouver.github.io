import { useEffect, useRef, useState } from 'react'
import { profile } from './data'

const formatTime = (date = new Date()) =>
  date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })

const createUserMessage = (content) => ({
  role: 'user',
  type: 'text',
  content,
  time: formatTime(),
})

const createAssistantTextMessage = (content) => ({
  role: 'assistant',
  type: 'text',
  content,
  time: formatTime(),
})

const createAssistantCardMessage = (response) => ({
  role: 'assistant',
  type: 'card',
  ...response,
  time: formatTime(),
})

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState(() => [
    createAssistantTextMessage(profile.assistant.greeting),
  ])
  const [isTyping, setIsTyping] = useState(false)
  const typingTimerRef = useRef(null)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    return () => {
      if (typingTimerRef.current) {
        clearTimeout(typingTimerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const handleAsk = (question, overrideResponse = null) => {
    if (isTyping) return

    const trimmed = question.trim()
    if (!trimmed) return

    setMessages((prev) => [...prev, createUserMessage(trimmed)])
    setInput('')
    setIsTyping(true)

    const normalized = trimmed.toLowerCase()
    const match = profile.answers.find(
      (item) => item.question.toLowerCase() === normalized
    )
    const response = overrideResponse ?? (match ? match.response : profile.defaultResponse)
    const delay = Math.min(1600, 600 + trimmed.length * 18)

    typingTimerRef.current = setTimeout(() => {
      setMessages((prev) => [...prev, createAssistantCardMessage(response)])
      setIsTyping(false)
    }, delay)
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar-header">
          <IconPanel />
          <IconSearch />
          <IconEdit />
        </div>

        <div>
          <p className="sidebar-title">{profile.sidebarTitle}</p>
          <ul className="sidebar-list">
            {profile.sidebarItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="sidebar-footer">
          <IconArchive />
          <span>Archived Chats</span>
          <IconChevron />
        </div>
      </aside>

      <main className="main">
        <div className="hero">
          <LogoMark />
          <h1 className="title">{profile.title}</h1>
          <p className="subtitle">{profile.tagline}</p>
        </div>

        <form
          className="input-card"
          onSubmit={(event) => {
            event.preventDefault()
            handleAsk(input)
          }}
        >
          <input
            className="input-field"
            type="text"
            placeholder={isTyping ? 'Assistant is typing…' : profile.inputPlaceholder}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            disabled={isTyping}
          />
          <div className="input-actions">
            <button
              className="send-btn"
              type="submit"
              aria-label="Send"
              disabled={isTyping || !input.trim()}
            >
              <IconArrow />
            </button>
          </div>
        </form>

        <div className="messages">
          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={`message message-${message.role}`}
            >
              {message.role === 'assistant' && (
                <div className="assistant-avatar">
                  {profile.assistant.initials}
                </div>
              )}
              <div className="message-body">
                {message.role === 'assistant' && (
                  <div className="message-meta">
                    <span className="message-author">
                      {profile.assistant.name}
                    </span>
                    <span className="message-time">{message.time}</span>
                  </div>
                )}

                {message.role === 'user' && (
                  <div className="message-bubble">{message.content}</div>
                )}

                {message.role === 'assistant' && message.type === 'text' && (
                  <div className="assistant-bubble">{message.content}</div>
                )}

                {message.role === 'assistant' && message.type === 'card' && (
                  <div className="message-card">
                    <p className="message-title">{message.title}</p>
                    {message.summary && (
                      <p className="message-text">{message.summary}</p>
                    )}
                    {message.sections?.map((section) => (
                      <div className="message-section" key={section.heading}>
                        <p className="message-heading">{section.heading}</p>
                        <ul className="message-list">
                          {section.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {message.role === 'user' && (
                  <div className="message-time message-time-user">
                    {message.time}
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="message message-assistant">
              <div className="assistant-avatar">{profile.assistant.initials}</div>
              <div className="message-body">
                <div className="message-meta">
                  <span className="message-author">
                    {profile.assistant.name}
                  </span>
                  <span className="message-time">typing…</span>
                </div>
                <div className="typing-bubble" aria-hidden="true">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="actions">
          <button
            className="action-btn"
            type="button"
            onClick={() => handleAsk(profile.resumeActionLabel, profile.fullResume)}
            disabled={isTyping}
          >
            <IconDocument />
            <span>{profile.resumeActionLabel}</span>
          </button>
        </div>

        <div className="chips">
          {profile.quickQuestions.map((question) => (
            <button
              className="chip"
              key={question}
              type="button"
              onClick={() => handleAsk(question)}
              disabled={isTyping}
            >
              <IconArrowUpSmall />
              <span>{question}</span>
            </button>
          ))}
        </div>
      </main>
    </div>
  )
}

function LogoMark() {
  return (
    <div className="logo" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  )
}

function IconPanel() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="5" width="6" height="14" rx="1.5" />
      <rect x="11" y="5" width="9" height="14" rx="1.5" />
    </svg>
  )
}

function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="6" />
      <path d="M16.2 16.2l3.6 3.6" />
    </svg>
  )
}

function IconEdit() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 16.5V20h3.5L19 8.5l-3.5-3.5L4 16.5z" />
      <path d="M14.5 5L19 9.5" />
    </svg>
  )
}

function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 19V7" />
      <path d="M6 13l6-6 6 6" />
    </svg>
  )
}

function IconArrowUpSmall() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 6l6 6H6l6-6z" />
    </svg>
  )
}

function IconArchive() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="5" width="16" height="4" rx="1" />
      <path d="M6 9v10h12V9" />
      <path d="M9 13h6" />
    </svg>
  )
}

function IconChevron() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 10l5 5 5-5" />
    </svg>
  )
}

function IconDocument() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
    </svg>
  )
}

export default App
