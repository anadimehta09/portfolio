import { useEffect, useState } from 'react'
import { profile, systemPrompt, heroResponse } from '../data/content.js'

export default function Hero() {
  const [typed, setTyped] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTyped(heroResponse)
      setDone(true)
      return
    }
    let i = 0
    const id = setInterval(() => {
      i += 2
      setTyped(heroResponse.slice(0, i))
      if (i >= heroResponse.length) {
        clearInterval(id)
        setDone(true)
      }
    }, 18)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="shell">
        <div className="console">
          <div className="console-bar">
            <span className="console-dot" />
            inference — model: portfolio-v3
          </div>
          <div className="console-body">
            <div className="console-row">
              <span className="role">system</span>
              <br />
              <span className="content">{systemPrompt}</span>
            </div>
            <div className="console-row">
              <span className="role">user</span>
              <br />
              <span className="content">Who is {profile.name}?</span>
            </div>
            <h1 className="hero-name">{profile.role}</h1>
            <p className="hero-response">
              {typed}
              {!done && <span className="cursor">&nbsp;</span>}
            </p>
            <div className="hero-actions">
              <button
                className="btn btn-primary"
                onClick={() => document.getElementById('experiments')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See experiments
              </button>
              <button
                className="btn"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Send a prompt
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
