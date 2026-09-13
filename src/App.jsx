import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Capabilities from './components/Capabilities.jsx'
import Experiments from './components/Experiments.jsx'
import TrainingLog from './components/TrainingLog.jsx'
import Contact from './components/Contact.jsx'
import { profile } from './data/content.js'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Experiments />
        <TrainingLog />
        <Contact />
      </main>
      <footer className="footer">
        <div className="shell">
          {'// ' + profile.name + ' — last updated ' + new Date().getFullYear()}
        </div>
      </footer>
    </>
  )
}
