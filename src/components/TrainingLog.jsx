import { trainingLog } from '../data/content.js'

export default function TrainingLog() {
  return (
    <section id="training" className="section">
      <div className="shell section-inner">
        <div className="section-head">
          <span className="tag">04</span>
          <h2>Training log</h2>
          <span className="rule" />
        </div>
        <div className="timeline">
          {trainingLog.map((job) => (
            <div className="timeline-item" data-checkpoint={job.checkpoint} key={job.role + job.company}>
              <div className="timeline-period">{job.period}</div>
              <div className="timeline-role">{job.role}</div>
              <div className="timeline-company">{job.company}</div>
              <ul className="timeline-points">
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
