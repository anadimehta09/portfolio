# AI Enthusiast Portfolio

A dark portfolio themed around LLM interfaces — the hero is an inference
console with a streaming response, "skills" are framed as model
capabilities, projects are "experiments" with headline metrics, and
experience is a training log with checkpoint markers (v1, v2, v3).
Contact is a small interactive prompt console (simulated replies — a real
email link sits right below it for actual messages).

## Folder structure

```
ai-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css              # design tokens + all styles
│   ├── data/
│   │   └── content.js         # ALL your text/info lives here
│   └── components/
│       ├── Nav.jsx            # pill-tab nav with scroll-spy
│       ├── Hero.jsx           # inference console + streaming text
│       ├── About.jsx          # model-card style bio
│       ├── Capabilities.jsx   # skills, grouped
│       ├── Experiments.jsx    # expandable project cards + metrics
│       ├── TrainingLog.jsx    # experience timeline w/ checkpoints
│       └── Contact.jsx        # interactive prompt console
```

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build into dist/
npm run preview
```

## Making it yours

1. Edit `src/data/content.js` — name, bio, capabilities, experiments,
   training log, and the hero's system prompt / response text.
2. Colors and fonts are CSS variables at the top of `src/index.css`
   (`--accent`, `--bg`, `--display`, `--mono`).
3. The contact console gives canned replies client-side (no backend, no
   API key needed). If you want it to call a real model, swap the
   `handleSubmit` logic in `src/components/Contact.jsx` for a fetch to
   your own endpoint — just don't call a model API with a key exposed
   in frontend code.
4. Real contact happens through the `mailto:` link and social links
   below the console — update those in `content.js`.

## Deploying

`npm run build` outputs a static `dist/` folder that deploys as-is to
Vercel, Netlify, GitHub Pages, or any static host.
