// Edit everything here to make the site yours — no component code
// needs to change for content updates.

export const profile = {
  name: 'Anadi Mehta',
  role: 'Python Backend & ML Developer',
  tagline:
    'I build practical backend and machine learning applications using Python, FastAPI, and modern AI tools while exploring Generative AI, LLMs, RAG, and Agentic AI.',
  location: 'Ujjain, India',
  focus: 'Python, FastAPI, Machine Learning & Generative AI',
  status: 'Building & Learning',
  email: 'anadimehta9@gmail.com',
  github: 'https://github.com/anadimehta09',
  linkedin: 'https://www.linkedin.com/in/anadi-mehta-121a64396/',
}

export const systemPrompt =
  "You are Anadi's portfolio. Introduce them warmly to a visitor in 2 sentences, then stop."

export const heroResponse =
  "Hi, I'm Anadi — I build practical applications with Python, FastAPI, and Machine Learning while exploring Generative AI, LLMs, RAG, and Agentic AI. This site is a showcase of what I'm building, learning, and experimenting with along the way."

export const about = {
  paragraphs: [
    "I got into AI through Python and Machine Learning, which sparked my interest in building systems that can solve real-world problems. I've been developing backend applications with FastAPI and exploring how machine learning can be integrated into practical products.",
    
    "I'm currently expanding into Generative AI, LLMs, RAG, and Agentic AI, experimenting with AI-powered applications, retrieval systems, and intelligent workflows. I enjoy learning by building projects and turning new concepts into something practical.",
  ],
}

export const capabilities = [
  {
    category: 'programming & backend',
    items: ['Python', 'FastAPI', 'REST APIs', 'SQL', 'SQLite'],
  },
  {
    category: 'machine learning',
    items: ['Machine Learning', 'Model Integration', 'Data Processing', 'Scikit-learn'],
  },
  {
    category: 'currently exploring',
    items: ['Agentic AI', 'AI Agents', 'LLM Applications', 'Vector Databases', 'AI Workflows'],
  },
]

export const experiments = [
  {
    name: 'ujjain-samachar',
    summary: 'AI-powered Ujjain news platform',
    description:
      'A news application focused on Ujjain that brings local news into a simple, searchable platform with a Python backend and AI-powered features for processing and presenting relevant information.',
    stack: ['Python', 'FastAPI', 'React', 'Machine Learning'],
    metric: { label: 'focus', value: 'Local News' },
    link: 'https://ujjain-samachar-1.onrender.com/',
    repo: 'https://github.com/anadimehta09/ujjain-samachar',
  },
  {
    name: 'movie-recommender',
    summary: 'Personalized movie recommendation system',
    description:
      'A movie recommendation application that uses machine learning and user preferences to suggest relevant movies, providing a simple way to discover films based on similarity and interests.',
    stack: ['Python', 'Machine Learning', 'FastAPI', 'React'],
    metric: { label: 'type', value: 'Recommendation System' },
    link: 'https://ai-movie-recommender-82qif7stgo3war8nj78tsc.streamlit.app/',
    repo: 'https://github.com/anadimehta09/AI-Movie-Recommender',
  },
]
export const trainingLog = [
  {
    checkpoint: 'v2',
    role: 'Python Backend Developer Intern',
    company: 'Affimintus',
    period: '2025 — 2025',
    points: [
      'Completed a 6-month internship focused on Python backend development',
      'Worked with FastAPI to build and develop backend APIs',
      'Gained hands-on experience with backend development, databases, and API integration',
    ],
  },

  {
    checkpoint: 'v1',
    role: 'Freelance Web Developer',
    company: 'Ujjain Samachar',
    period: '2025 — Present',
    points: [
      'Designed and developed the official website for Ujjain Samachar, a local news organization',
      'Developed the website frontend and backend functionality based on the organization’s requirements',
      'Implemented responsive web pages and integrated the required content and data management functionality',
      'Used AI-assisted development to accelerate implementation while reviewing and understanding the generated code',
    ],
  },
]
export const nav = [
  { id: 'home', label: 'overview' },
  { id: 'about', label: 'about' },
  { id: 'capabilities', label: 'capabilities' },
  { id: 'experiments', label: 'experiments' },
  { id: 'training', label: 'training-log' },
  { id: 'contact', label: 'prompt' },
]
