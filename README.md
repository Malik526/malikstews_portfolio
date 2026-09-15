# Malik Stewart Portfolio

Clean local rebuild of Malik Stewart's engineering portfolio.

Positioning:

> Full-Stack Engineer | GTM Systems | Applied AI & Automation

This project is intentionally local-only for now. No GitHub remote or deployment has been configured.

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
