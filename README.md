# Soulaymane Kacem — React Portfolio

Modular React + Vite portfolio.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Structure

- `src/components/` — reusable UI sections and animation helpers
- `src/data/siteData.js` — profile, experience, education, certifications, skills and interests
- `src/styles.css` — responsive design for desktop, tablet and phone
- `src/App.jsx` — page composition

The projects section fetches the latest public repositories from GitHub and falls back to selected static projects if the API is unavailable.
