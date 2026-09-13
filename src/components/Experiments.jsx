import { useState } from 'react'
import { experiments } from '../data/content.js'

export default function Experiments() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="experiments" className="section">
      <div className="shell section-inner">
        <div className="section-head">
          <span className="tag">03</span>
          <h2>Experiments</h2>
          <span className="rule" />
        </div>
        <div className="exp-list">
          {experiments.map((exp, i) => {
            const open = openIndex === i
            return (
              <div className={'exp-card' + (open ? ' open' : '')} key={exp.name}>
                <button
                  className="exp-head"
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  aria-expanded={open}
                >
                  <div className="exp-head-left">
                    <span className="exp-name">{exp.name}</span>
                    <span className="exp-summary">{exp.summary}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="exp-metric">
                      <span className="val">{exp.metric.value}</span>
                      <span className="label">{exp.metric.label}</span>
                    </div>
                    <span className="exp-toggle">+</span>
                  </div>
                </button>
                <div className="exp-body">
                  <p>{exp.description}</p>
                  <div className="exp-stack">
                    {exp.stack.map((tech) => (
                      <span className="chip" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="exp-links">
                    <a href={exp.link}>demo</a>
                    <a href={exp.repo}>source</a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
