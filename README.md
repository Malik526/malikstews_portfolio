# Malik Stewart Portfolio

Clean local rebuild of Malik Stewart's engineering portfolio.

Positioning:

> Full-Stack Engineer | GTM Systems | Applied AI & Automation

Deployed as a static SPA on Netlify. `public/_redirects` provides the SPA
fallback rewrite (`/*  /index.html  200`) so client-side routes like
`/free-stuff/ai-harness` resolve correctly on direct load and refresh.

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS

## Scripts

```bash
npm install
npm run dev
npm run build
npm run build:ai-harness   # regenerates free-stuff/ai-harness from ~/.agents — see free-stuff/ai-harness/README.md
```

## Environment variables

Copy `.env.example` to `.env` and set `VITE_APPS_SCRIPT_URL` to enable the
`/free-stuff` forms (see `free-stuff/google-apps-script/README.md` for setup).
