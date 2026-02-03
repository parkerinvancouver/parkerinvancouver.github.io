import { useState } from 'react'
import { profile } from './data'

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])

  const handleAsk = (question) => {
    const trimmed = question.trim()
    if (!trimmed) return

    const normalized = trimmed.toLowerCase()
    const match = profile.answers.find(
      (item) => item.question.toLowerCase() === normalized
    )
    const response = match ? match.response : profile.defaultResponse

    setMessages((prev) => [
      ...prev,
      { role: 'user', content: trimmed },
      { role: 'assistant', ...response },
    ])
    setInput('')
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
            placeholder={profile.inputPlaceholder}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <div className="input-actions">
            <button className="icon-btn" type="button" aria-label="Voice">
              <IconMic />
            </button>
            <button className="send-btn" type="submit" aria-label="Send">
              <IconArrow />
            </button>
          </div>
        </form>

        {messages.length > 0 && (
          <div className="messages">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`message message-${message.role}`}
              >
                {message.role === 'user' ? (
                  <div className="message-bubble">{message.content}</div>
                ) : (
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
              </div>
            ))}
          </div>
        )}

        <div className="chips">
          {profile.quickQuestions.map((question) => (
            <button
              className="chip"
              key={question}
              type="button"
              onClick={() => handleAsk(question)}
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

function IconMic() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="9" y="4" width="6" height="10" rx="3" />
      <path d="M6 11a6 6 0 0 0 12 0" />
      <path d="M12 17v3" />
      <path d="M9 20h6" />
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

export default App
