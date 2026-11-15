# Varma / Dev

A frontend-only portfolio and interactive project showcase for Siruvuru Venkatapathi Varma. Portfolio content, API examples and dashboard interactions are local TypeScript data and React state. No backend, database, external API calls or live project services are used.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Local development

```bash
npm install
npm run dev
```

Vite prints a local URL (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The static site is generated in `dist/`. Deploy that directory to any static hosting provider (for example GitHub Pages, Netlify, Vercel or an object-storage static website). Configure the host to serve `index.html` for client-side routes.

## Frontend demonstrations

- Project dashboards use mock values from `src/data/mockDashboard.ts`.
- API explorer content in `src/data/apis.ts` is illustrative documentation only. Copy actions copy sample text; no endpoint requests are made.
- Project architecture diagrams and PhonePe, Razorpay, Standard Chartered and DBS references are illustrative industry-alignment examples only; they do not represent live services, integrations or affiliations.
- RoleReady file selection is local-only; selected documents are not uploaded or transmitted.
- Interview timer, question selection and feedback preview are client-side interactions with sample content.
- Theme choice is stored in browser local storage.
- Downloadable résumé is served as a static file from `public/resume.pdf`.

## Stack

React, TypeScript, Vite, Tailwind CSS, Framer Motion, React Router DOM, Lucide React, Recharts and React Syntax Highlighter.
