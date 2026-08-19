# AGENTS.md — guidance for AI agents and contributors

This file describes how to work on the be-oi.be website so automated agents and human contributors stay consistent.

## Project summary

- **What**: Public static website for beOI (Belgian Olympiad in Informatics).
- **Stack**: [Astro](https://astro.build/) (static site generator), npm, Node.js 22+.
- **Hosting**: S3 bucket `be-oi.be` (region `eu-central-1`) behind CloudFront distribution `E1HFWB6I0WMJ8D`. Public URL: `https://www.be-oi.be` (`site` in `astro.config.mjs`).
- **Languages**: Astro locales `fr`, `nl`, `en` (all URL-prefixed). **All three locales ship real page content** under `src/pages/fr/`, `src/pages/nl/`, and `src/pages/en/`. Root `/` redirects to `/fr/` (Astro `defaultLocale`) until a language picker returns.

Do **not** introduce a server runtime, SSR adapters, or a CMS unless explicitly requested. Keep the site statically buildable with `npm run build`.

## Commands

```bash
npm install          # install dependencies
npm run dev          # local dev server (http://localhost:4321)
npm run check        # Astro + TypeScript diagnostics
npm run build        # write static output to dist/
npm run preview      # preview dist/ locally
```

CI deploy (on push to `main`): install → check → build → `aws s3 sync dist/ s3://be-oi.be/ --delete` → CloudFront invalidation of `/*` on distribution `E1HFWB6I0WMJ8D`.

## Directory layout

```
astro.config.mjs          # site URL + i18n routing
package.json              # scripts and dependencies
src/
  layouts/
    BaseLayout.astro      # shared HTML document shell
  pages/
    index.astro           # redirects to /fr/ (until language picker returns)
    en/                   # English routes (/en/...)
    fr/                   # French routes (/fr/...) — mirrors en/ page structure
    nl/                   # Dutch (Flemish) routes (/nl/...) — mirrors en/ page structure
public/                   # static assets copied as-is into dist/ (served as-is)
  favicon.ico             # browser tab icon (+ PNG sizes, apple-touch-icon)
  robots.txt              # crawl policy + sitemap pointer
  img/steps/              # web-sized contest roadmap illustrations
image-sources/            # high-res / masters for assets (not deployed)
  steps/                  # sources for public/img/steps/ (regenerate site PNGs from these)
dist/                     # build output (gitignored); also sitemap-*.xml from @astrojs/sitemap
.github/workflows/
  deploy.yml              # build + S3 sync + CloudFront invalidation
```

### Contest step images

- **Deployed files**: `public/img/steps/stepN-*.png` (paths referenced from `src/data/contest-steps/`).
- **Masters**: `image-sources/steps/` — keep higher-resolution or pre-export sources here so web-sized variants can be regenerated later. Do **not** put masters under `public/` (they would ship with the site).

## i18n conventions

- Astro i18n is configured in `astro.config.mjs` with `locales: ['fr', 'nl', 'en']` and `prefixDefaultLocale: true` (`defaultLocale: 'fr'`).
- **Primary content**: edit pages under `src/pages/fr/`, `src/pages/nl/`, and `src/pages/en/`. Keep URL paths parallel across locales (e.g. `/fr/contest/faq/`, `/nl/contest/faq/`, `/en/contest/faq/`).
- **French copy**: use Belgian French (`fr_BE`) wording. The full name is *Olympiade belge d'Informatique*. FAQ body in `src/data/faq/fr.html`; contest step copy in `src/data/contest-steps/fr.ts` and `src/data/contest-step-details/fr/`.
- **Dutch copy**: use **Flemish** (`nl_BE`) wording. The full name is *Belgische Informatica-olympiade* (not a literal translation of “Belgian Olympiad in Informatics”). Shared UI strings live in `src/data/ui-i18n.ts`; FAQ bodies in `src/data/faq/nl.html`; contest step copy in `src/data/contest-steps/nl.ts` and `src/data/contest-step-details/nl/`.
- When shipping a locale, keep URL paths parallel across locales that have content (e.g. `/en/faq/` and later `/fr/faq/`). Update every **content** locale listed in `contentLocales` (`src/data/i18n.ts`), not redirect-only stubs.
- Set `lang` on `BaseLayout` to `"fr"`, `"nl"`, or `"en"` for locale pages; pass a page-specific `description` for SEO.
- Head metadata (description, Open Graph, Twitter, canonical, hreflang, favicon) is emitted by `BaseLayout`. Hreflang and the sitemap only include locales in `contentLocales` until translations ship — add a locale there and enable it in the `astro.config.mjs` sitemap filter/`i18n.locales` when real pages exist.
- Prefer keeping copy in the page files (or future shared content modules) rather than hard-coding only one language.

## Coding conventions

- Indentation: 2 spaces (see `.editorconfig`).
- Prefer simple Astro components and plain HTML/CSS unless a library is justified.
- Do not commit `node_modules/`, `dist/`, or `.astro/`.
- Do not commit AWS credentials or `.env` files with secrets.
- Keep the README beginner-friendly when documenting new workflows.

## Deployment notes for agents

- Production deploy is via GitHub Actions (see [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) using secrets `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`.
- Deploy targets **`s3://be-oi.be/`** (not `www.be-oi.be`), then invalidates CloudFront so CDN edge caches refresh.
- Manual equivalent:

```bash
npm run build
aws s3 sync dist/ s3://be-oi.be/ --delete --region eu-central-1
aws cloudfront create-invalidation --distribution-id E1HFWB6I0WMJ8D --paths "/*"
```

- Never print or invent credentials. Assume secrets are already configured in GitHub / the local AWS CLI profile.

## Out of scope (for now)

- Porting content from the legacy Middleman site (`beoi.be-oi.be`) unless asked.
- Styling frameworks, analytics, or contest-state logic unless requested.
