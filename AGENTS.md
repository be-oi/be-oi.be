# AGENTS.md — guidance for AI agents and contributors

This file describes how to work on the be-oi.be website so automated agents and human contributors stay consistent.

## Project summary

- **What**: Public static website for beOI (Belgian Olympiad in Informatics).
- **Stack**: [Astro](https://astro.build/) (static site generator), npm, Node.js 22+.
- **Hosting**: Amazon S3 bucket `www.be-oi.be`, region `eu-central-1`.
- **Languages**: French (`/fr/`) and Dutch (`/nl/`). Root `/` is a language picker with optional browser-language redirect.

Do **not** introduce a server runtime, SSR adapters, or a CMS unless explicitly requested. Keep the site statically buildable with `npm run build`.

## Commands

```bash
npm install          # install dependencies
npm run dev          # local dev server (http://localhost:4321)
npm run check        # Astro + TypeScript diagnostics
npm run build        # write static output to dist/
npm run preview      # preview dist/ locally
```

CI deploy (on push to `main`): install → check → build → `aws s3 sync dist/ s3://www.be-oi.be --delete`.

## Directory layout

```
astro.config.mjs          # site URL + i18n routing
package.json              # scripts and dependencies
src/
  layouts/
    BaseLayout.astro      # shared HTML document shell
  pages/
    index.astro           # language picker (/)
    fr/                   # French routes (/fr/...)
    nl/                   # Dutch routes (/nl/...)
public/                   # static assets copied as-is into dist/ (served as-is)
  favicon.ico             # browser tab icon (+ PNG sizes, apple-touch-icon)
  robots.txt              # crawl policy + sitemap pointer
  img/steps/              # web-sized contest roadmap illustrations
image-sources/            # high-res / masters for assets (not deployed)
  steps/                  # sources for public/img/steps/ (regenerate site PNGs from these)
dist/                     # build output (gitignored); also sitemap-*.xml from @astrojs/sitemap
.github/workflows/
  deploy.yml              # build + S3 sync
```

### Contest step images

- **Deployed files**: `public/img/steps/stepN-*.png` (paths referenced from `src/data/contest-steps.ts`).
- **Masters**: `image-sources/steps/` — keep higher-resolution or pre-export sources here so web-sized variants can be regenerated later. Do **not** put masters under `public/` (they would ship with the site).

## i18n conventions

- Astro i18n is configured in `astro.config.mjs` with `locales: ['fr', 'nl', 'en']` and `prefixDefaultLocale: true`.
- Locale pages live under `src/pages/fr/`, `src/pages/nl/`, and `src/pages/en/`.
- When adding or renaming a page, update **all** content locales so URLs stay parallel (e.g. `/fr/faq/` and `/nl/faq/`).
- Set `lang` on `BaseLayout` to `"fr"`, `"nl"`, or `"en"` for locale pages; pass a page-specific `description` for SEO.
- Head metadata (description, Open Graph, Twitter, canonical, hreflang, favicon) is emitted by `BaseLayout`. Hreflang only lists locales in `contentLocales` (`src/data/i18n.ts`) until translations ship — add a locale there and in the sitemap filter when real pages exist.
- Prefer keeping copy in the page files (or future shared content modules) rather than hard-coding only one language.

## Coding conventions

- Indentation: 2 spaces (see `.editorconfig`).
- Prefer simple Astro components and plain HTML/CSS unless a library is justified.
- Do not commit `node_modules/`, `dist/`, or `.astro/`.
- Do not commit AWS credentials or `.env` files with secrets.
- Keep the README beginner-friendly when documenting new workflows.

## Deployment notes for agents

- Production deploy is via GitHub Actions using secrets `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`.
- Manual equivalent: `npm run build && aws s3 sync dist/ s3://www.be-oi.be --delete --region eu-central-1`.
- Never print or invent credentials. Assume secrets are already configured in GitHub / the local AWS CLI profile.

## Out of scope (for now)

- Porting content from the legacy Middleman site (`beoi.be-oi.be`) unless asked.
- Styling frameworks, analytics, or contest-state logic unless requested.
