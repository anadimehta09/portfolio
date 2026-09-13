import { capabilities } from '../data/content.js'

export default function Capabilities() {
  return (
    <section id="capabilities" className="section">
      <div className="shell section-inner">
        <div className="section-head">
          <span className="tag">02</span>
          <h2>Capabilities</h2>
          <span className="rule" />
        </div>
        <div className="cap-grid">
          {capabilities.map((group) => (
            <div className="cap-group" key={group.category}>
              <div className="cap-label">{group.category}</div>
              <div className="cap-chips">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
