# Accounting Standards Academy

Interactive web learning portal for **Accounting Standards & Financial Reporting Skills** — built for finance professionals (Finance Managers, Controllers, Accounting Managers, FP&A, Senior Accountants, Auditors, CFO-track).

## Stack

- Vite + React 18 + JavaScript
- React Router 6, Lucide icons
- No backend — all progress in `localStorage`

## Content

- **40 modules** across 9 levels: Accounting Foundations → IFRS Framework → Operating Accounting → Liabilities → Financial Instruments → Group Accounting → Reporting Operations → Financial Analysis → Practical Reporting
- **350+ quiz questions** (4 options, 1 correct, explanations, 3 difficulty levels)
- Journal Entry Lab, Financial Statement Impact Lab
- 5 practical case studies incl. a CFO month-end capstone
- Month-End Close simulator, error-detection game
- 24 interview questions + 10-minute rapid interview mode
- 60-question final assessment with mastery bands
- Searchable glossary (45+ terms), weak-area review, skill mastery tracking
- Light / dark mode, fully responsive

## Run locally

```bash
npm install
npm run dev
```

## Deploy on Vercel

```bash
npm run build   # or let Vercel build it
```

`vercel.json` rewrites all routes to `index.html` so client-side routing works. Import the repo in Vercel with framework preset "Vite".

## Data model

All learning content lives in `src/data/`:

- `src/data/modules/level1.js … level9.js` — the 40 modules (theory, journal entries, FS impact, mistakes, interview Q&A, quizzes)
- `src/data/extras.js` — glossary, journal lab, impact lab, case studies, interview bank, month-end simulator
- `src/data/index.js` — aggregation: module list, levels, derived 350+ question bank, skill helpers
