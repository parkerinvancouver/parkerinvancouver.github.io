export const profile = {
  name: 'Parker',
  title: 'Ask Parker',
  tagline: "Ask me anything about Parker's BA work, projects, and background.",
  inputPlaceholder: 'What would you like to know about Parker?',
  assistant: {
    name: "Parker's Resume Assistant",
    initials: 'PR',
    status: 'Online',
    greeting:
      "Hi! I'm Parker's resume assistant. Ask me about BA experience, work in Canada, tools and skills, or education.",
  },
  sidebarTitle: "Parker's tools and skills",
  sidebarItems: [
    'New Conversation',
  ],
  quickQuestions: [
    "What is Parker's BA experience?",
    "Tell me about Parker's educational and work experience in Canada.",
    'What tools and skill does Parker have?',
    "What's Parker's educational background?",
  ],
  resumeActionLabel: 'See full resume',
  answers: [
    {
      question: "What is Parker's BA experience?",
      response: {
        title: 'Business Analyst Experience',
        summary:
          'Business analyst and systems roles across healthcare and telecom, plus Scrum Master leadership in Agile delivery.',
        sections: [
          {
            heading: 'Canada (Providence Health Care)',
            items: [
              'Business Support Analyst (May 2023 - Oct 2024): CST timekeeping support, payroll accuracy, and staffing data quality improvements.',
              'HRIS Systems & Business Analyst (Oct 2022 - May 2023): Kronos to Infor WFM transition and iCIMS post go-live support.',
              'Coordinator, Clinical Staffing (Oct 2022 - Present): real-time scheduling, staffing coverage, and leave tracking.',
            ],
          },
          {
            heading: 'Thailand (dtac, NTT Data)',
            items: [
              'Scrum Master (Nov 2019 - Dec 2020): led Agile transformation and sprint delivery for B2B squads.',
              'IT Business Analyst (Jul 2018 - Nov 2019): feasibility studies, SIT/UAT, and app feature delivery.',
              'IT Business Analyst, NTT Data (Nov 2017 - Jul 2018): payment gateway implementation and requirements documentation.',
            ],
          },
        ],
      },
    },
    {
      question: "Tell me about Parker's educational and work experience in Canada.",
      response: {
        title: 'Education & Work in Canada',
        summary:
          'Based in Vancouver with healthcare and retail operations experience, plus a Business IT diploma from BCIT.',
        sections: [
          {
            heading: 'Education',
            items: [
              'BCIT - Diploma in Business IT Management (Sep 2020 - May 2022, Graduated with Distinction)',
            ],
          },
          {
            heading: 'Work Experience',
            items: [
              "Arc'teryx - Guest Services Representative (Oct 2025 - Present), supporting guest service operations via Salesforce and SAP.",
              'Providence Health Care - Business Support Analyst / HRIS Systems & BA / Clinical Staffing Coordinator (Oct 2022 - Present).',
            ],
          },
          {
            heading: 'Community & Leadership',
            items: [
              'Marketing Executive, IIBA Vancouver Chapter (Jun 2025 - Present)',
              'Tech Coach, West End Seniors Network (Jun 2023 - Present)',
              'VP Partnerships & Marketing, BCIT BITMAN Association (May 2021 - May 2022)',
            ],
          },
        ],
      },
    },
    {
      question: 'What tools and skill does Parker have?',
      response: {
        title: 'Tools & Skills',
        summary:
          'Business analysis, data analytics, and HRIS tools across Agile and Waterfall delivery.',
        sections: [
          {
            heading: 'Data Analytics',
            items: ['Data Analysis', 'Tableau', 'Power BI', 'SQL'],
          },
          {
            heading: 'Business Analysis',
            items: ['Requirements Gathering', 'Test Case Development'],
          },
          {
            heading: 'Frameworks',
            items: ['Waterfall', 'Scrum'],
          },
          {
            heading: 'Systems',
            items: [
              'System Integration (APIs, Web Services, Middleware Integration Tools)',
            ],
          },
          {
            heading: 'Tools',
            items: [
              'Excel PivotTable',
              'Merinio',
              'Visio',
              'Jira',
              'Confluence',
              'Trello',
              'SAP',
              'Salesforce',
            ],
          },
          {
            heading: 'HRIS Tools',
            items: ['Kronos ESP', 'Infor WFM', 'iCIMS', 'Workday'],
          },
        ],
      },
    },
    {
      question: "What's Parker's educational background?",
      response: {
        title: 'Educational Background',
        summary: 'Business IT diploma in Canada and an engineering degree in Thailand.',
        sections: [
          {
            heading: 'Canada',
            items: [
              'BCIT - Diploma in Business IT Management (Sep 2020 - May 2022, Graduated with Distinction)',
            ],
          },
          {
            heading: 'Thailand',
            items: [
              'Chulalongkorn University - Bachelor of Engineering (Sep 2011 - May 2015)',
            ],
          },
        ],
      },
    },
  ],
  defaultResponse: {
    title: 'Ask Parker',
    summary:
      'I can share details about BA experience, Canada education/work history, tools and skills, and academic background.',
    sections: [
      {
        heading: 'Try asking',
        items: [
          "What is Parker's BA experience?",
          "Tell me about Parker's educational and work experience in Canada.",
          'What tools and skill does Parker have?',
          "What's Parker's educational background?",
        ],
      },
    ],
  },
  fullResume: {
    title: 'Full Resume',
    summary:
      'Business Analyst and Scrum Master with healthcare and telecom experience across Canada and Thailand.',
    sections: [
      {
        heading: 'Experience',
        items: [
          "Arc'teryx — Guest Services Representative (Oct 2025 - Present): Diagnose order/payment/shipping/repair issues in Salesforce; process manual orders in SAP; document recurring issues.",
          'Providence Health Care — Coordinator, Clinical Staffing (Oct 2022 - Present): Schedule staffing using Kronos ESP and Infor WFM; resolve discrepancies within 0-48 hours; process leave requests per union guidelines.',
          'Providence Health Care — Business Support Analyst (May 2023 - Oct 2024): Improved payroll data quality using PivotTables; analyzed 2,000+ monthly staffing records; reduced errors by 25%; reduced overtime budget using Merinio.',
          'Providence Health Care — HRIS Systems & Business Analyst (Oct 2022 - May 2023): Gathered requirements for Kronos to Infor WFM; created SOPs; supported iCIMS post go-live and Jira ticketing; mapped workflow bottlenecks in Visio.',
          'dtac — Scrum Master (Nov 2019 - Dec 2020): Led Agile transformation; facilitated 54 sprints; improved delivery speed by 150%; increased team satisfaction by 60%.',
          'dtac — IT Business Analyst (Jul 2018 - Nov 2019): Feasibility studies; test cases; SIT/UAT; improved app adoption by 20%.',
          'NTT Data — IT Business Analyst (Nov 2017 - Jul 2018): Payment gateway for 7-Eleven (12,000 stores); documented FRD/BRD; post-launch support.',
        ],
      },
      {
        heading: 'Projects',
        items: [
          'Clinical Systems Transformation (CST): Timekeeping and payroll accuracy support during go-live.',
          'Infor WFM & iCIMS: Scheduling modernization and ATS improvements.',
          'dtac Agile Transformation: B2B cloud and IoT squads moving from Waterfall to Scrum.',
          'dtac Mobile App Enhancements: Gamification, VRBT, API gateway integrations.',
          'Mastercard/Thai Smart Card: Payment gateway implementation for cashless transactions.',
        ],
      },
      {
        heading: 'Education',
        items: [
          'BCIT - Diploma in Business IT Management (Sep 2020 - May 2022, Graduated with Distinction)',
          'Chulalongkorn University - Bachelor of Engineering (Sep 2011 - May 2015)',
        ],
      },
      {
        heading: 'Skills',
        items: [
          'Data Analytics: Data Analysis, Tableau, Power BI, SQL',
          'Business Analysis: Requirements Gathering, Test Case Development',
          'Frameworks: Waterfall, Scrum',
          'Systems: APIs, Web Services, Middleware Integration Tools',
          'Tools: Excel PivotTable, Merinio, Visio, Jira, Confluence, Trello, SAP, Salesforce',
          'HRIS: Kronos ESP, Infor WFM, iCIMS, Workday',
        ],
      },
      {
        heading: 'Extracurriculars',
        items: [
          'Marketing Executive, IIBA Vancouver Chapter (Jun 2025 - Present)',
          'Tech Coach, West End Seniors Network (Jun 2023 - Present)',
          'VP Partnerships & Marketing, BCIT BITMAN Association (May 2021 - May 2022)',
        ],
      },
    ],
  },
}
