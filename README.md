# JEG Remodeling Concepts — Website

Marketing website for **JEG Remodeling Concepts Corp.**, a family-owned remodeling and
renovation company serving Greater Orlando, Florida.

Single-page site built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com):
a photographic hero, a services grid, a draggable before/after slider, a rotating project
gallery with a lightbox, customer reviews, and a quote form.

## Tech stack

- **Astro 5** — static site generation, zero JavaScript by default
- **Tailwind CSS 4** (via `@tailwindcss/vite`) — design tokens in OKLCH
- **Vanilla JS** — small progressive-enhancement layer for the carousel, before/after
  slider, lightbox, scroll reveals and count-up stats (all respect `prefers-reduced-motion`)
- Fonts: Archivo + Heebo + Shadows Into Light (Google Fonts)

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:4321
npm run build    # build the static site into dist/
npm run preview  # preview the production build locally
```

Requires Node 18+.

## Project structure

```
├── public/
│   ├── img/            # optimized site imagery (webp + jpg) and logos
│   ├── favicon.png
│   └── robots.txt
├── src/
│   ├── components/
│   │   └── Icon.astro  # inline SVG icons
│   ├── layouts/
│   │   └── Base.astro  # HTML shell, meta/SEO, structured data, client scripts
│   ├── pages/
│   │   └── index.astro # the page (content data lives at the top)
│   └── styles/
│       └── global.css  # design tokens + component styles
├── astro.config.mjs
└── package.json
```

## Editing content

All copy and data live at the top of [`src/pages/index.astro`](src/pages/index.astro) in
plain arrays — `services`, `gallery`, `steps`, `reasons`, `stats`, `testimonials` — and the
contact details (`phone`, `email`). Update those to change what the page shows.

Images live in `public/img/`. To swap the before/after photos, replace
`ba-before.*` and `ba-after.*` with a matching pair shot from the same camera position.

## SEO

The page ships a `GeneralContractor` JSON-LD block, Open Graph tags, a canonical URL and a
`robots.txt`. Update the business details in [`src/layouts/Base.astro`](src/layouts/Base.astro).

## Deployment

The build is fully static. Run `npm run build` and upload the contents of `dist/` to any
static host or web server document root.

Set the `SITE_BASE` environment variable if the site is served from a sub-path, e.g.
`SITE_BASE=/preview/ npm run build`.

## License

© JEG Remodeling Concepts Corp. All rights reserved.
