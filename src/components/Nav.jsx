import { useEffect, useState } from 'react'
import { nav, profile } from '../data/content.js'

export default function Nav() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="nav">
      <div className="nav-inner">
        <span className="nav-brand">
          <span className="dot">●</span> {profile.name}
        </span>
        {nav.map((item) => (
          <button
            key={item.id}
            className={'nav-tab' + (active === item.id ? ' active' : '')}
            onClick={() => scrollTo(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
