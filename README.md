# be-oi.be — Belgian Olympiad in Informatics website

This repository contains the public website for **beOI** (Belgian Olympiad in Informatics / Olympiade belge d'informatique / Belgische olympiade in de informatica).

The site is **static**: pages are written as files, then built into plain HTML that is hosted on Amazon S3 (served via CloudFront at <https://www.be-oi.be>). No server-side code runs in production.

Locales are configured for French, Dutch, and English (`/fr/`, `/nl/`, `/en/`). **All three locales ship real page content.** Root `/` is a language picker; browsers whose language list includes `fr` or `nl` are redirected to the matching locale (append `?choose` to force the picker).

Built with [Astro](https://astro.build/).

## Prerequisites

You only need **Node.js** (version 22 or newer recommended).

1. Download and install Node.js from <https://nodejs.org/> (the LTS version is fine).
2. Open a terminal and check that it works:

```bash
node --version
npm --version
```

Both commands should print a version number.

## First-time setup

In a terminal, go to this project folder, then install dependencies:

```bash
cd be-oi.be
npm install
```

This downloads the tools the project needs into a local `node_modules/` folder (you do not need to commit that folder).

## Preview the site locally

Start the development server:

```bash
npm run dev
```

Then open <http://localhost:4321/> in your browser.

Astro will reload the page when you save changes to source files.

To stop the server, press `Ctrl+C` in the terminal.

## Where to edit content

| What | Path |
|------|------|
| Shared HTML layout (head, body shell) | `src/layouts/BaseLayout.astro` |
| Root page (language picker) | `src/pages/index.astro` |
| French pages | `src/pages/fr/` |
| Dutch (Flemish) pages | `src/pages/nl/` |
| English pages | `src/pages/en/` |
| Contest step images (on the site) | `public/img/steps/` |
| Contest step image masters (not deployed) | `image-sources/steps/` |

Edit content under `src/pages/{fr,nl,en}/` — keep parallel paths in sync across locales. Shared UI strings live in `src/data/ui-i18n.ts`.

Install [EditorConfig](https://editorconfig.org/) in your editor if you can — it applies the formatting rules from `.editorconfig` automatically.

## Build the site

To generate the static files that will be published:

```bash
npm run build
```

Output goes into the `dist/` folder. You can preview that build locally with:

```bash
npm run preview
```

## Deployment

### Automatic (recommended)

On every push to the `main` branch, GitHub Actions builds the site, syncs `dist/` to the S3 bucket **`be-oi.be`** (region `eu-central-1`), and invalidates CloudFront distribution **`E1HFWB6I0WMJ8D`** so visitors see the new files.

Required repository secrets:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

See [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### Manual

If you have the [AWS CLI](https://aws.amazon.com/cli/) configured with credentials that can write to the bucket and invalidate CloudFront:

```bash
npm run build
aws s3 sync dist/ s3://be-oi.be/ --delete --region eu-central-1
aws cloudfront create-invalidation --distribution-id E1HFWB6I0WMJ8D --paths "/*"
```

`--delete` removes files on S3 that are no longer in `dist/`.

## Useful commands

| Command | What it does |
|---------|----------------|
| `npm install` | Install project dependencies |
| `npm run dev` | Start local preview with live reload |
| `npm run build` | Build static site into `dist/` |
| `npm run preview` | Serve the contents of `dist/` locally |

## License

MIT — see [LICENSE](LICENSE).
