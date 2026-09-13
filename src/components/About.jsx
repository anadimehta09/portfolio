import { about, profile } from '../data/content.js'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="shell section-inner">
        <div className="section-head">
          <span className="tag">01</span>
          <h2>About</h2>
          <span className="rule" />
        </div>
        <div className="about-grid">
          <div className="about-text">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="model-card">
            <div className="model-card-title">model card</div>
            <div className="model-row">
              <span className="k">location</span>
              <span className="v">{profile.location}</span>
            </div>
            <div className="model-row">
              <span className="k">focus</span>
              <span className="v">{profile.focus}</span>
            </div>
            <div className="model-row">
              <span className="k">status</span>
              <span className="v">{profile.status}</span>
            </div>
            <div className="model-row">
              <span className="k">license</span>
              <span className="v">open to collab</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
