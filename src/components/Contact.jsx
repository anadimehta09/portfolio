import { useState } from 'react'
import { profile } from '../data/content.js'

const canned = [
  "Got it — that's noted. For a reply that actually reaches me, use the email link below.",
  "Thanks for the message. I read everything that comes in through email, linked below.",
  "Logged. If you want an actual response from me (not this demo), email is the fastest way.",
]

export default function Contact() {
  const [log, setLog] = useState([])
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    const reply = canned[Math.floor(Math.random() * canned.length)]
    setLog((prev) => [...prev, { role: 'user', body: input }, { role: 'assistant', body: reply }])
    setInput('')
  }

  return (
    <section id="contact" className="section">
      <div className="shell section-inner">
        <div className="section-head">
          <span className="tag">05</span>
          <h2>Prompt</h2>
          <span className="rule" />
        </div>

        <div className="console prompt-console">
          <div className="console-bar">
            <span className="console-dot" />
            live demo — replies are simulated, not sent anywhere
          </div>
          <div className="console-body">
            <div className="chat-log">
              {log.length === 0 && (
                <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--mono)', fontSize: '0.85rem' }}>
                  Type something below — it's a small interactive demo, not a live connection to me.
                </p>
              )}
              {log.map((msg, i) => (
                <div className={'chat-msg ' + msg.role} key={i}>
                  <span className="role">{msg.role}</span>
                  <span className="body">{msg.body}</span>
                </div>
              ))}
            </div>
            <form className="prompt-form" onSubmit={handleSubmit}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Say hi, ask a question..."
              />
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
          </div>
        </div>

        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>email</a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            github
          </a>
          
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            linkedin
          </a>
        </div>
      </div>
    </section>
  )
}
