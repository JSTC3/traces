# Traces

A student web journal about digital footprints. Four entries written over one week exploring what data gets left behind through everyday phone and internet use — and small, practical steps to manage it.

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Home — entry listing with dates and summaries |
| `pages/journal.html` | All four journal entries on one page |
| `pages/about.html` | Project background, a "day of traces" timeline, sources, and a contact form |

### Journal entries

1. **Two kinds of footprint** — active vs. passive data collection
2. **The photo that knew where I was** — EXIF metadata and location tagging
3. **The accounts I forgot** — old sign-ups, data breaches, and Have I Been Pwned
4. **Small steps** — a short, actionable privacy checklist

## Structure

```
traces/
├── index.html
├── pages/
│   ├── journal.html
│   └── about.html
├── css/
│   └── style.css
└── js/
    └── script.js
```

## Features

- **Dark / light mode** — toggle in the nav bar; choice is saved to `localStorage` and persists across pages
- **Reading progress bar** — a thin bar at the top of the viewport tracks scroll position
- **Contact form** — on the About page; includes a live character counter and client-side validation; no server, so submissions are acknowledged but not sent

## How to run

Open `index.html` in any browser. No build step, no dependencies.

## Built with

Plain HTML, CSS, and vanilla JavaScript — no frameworks or libraries.
