# be-oi.be — Belgian Olympiad in Informatics website

This repository contains the public website for **beOI** (Belgian Olympiad in Informatics / Olympiade belge d'informatique / Belgische olympiade in de informatica).

The site is **static**: pages are written as files, then built into plain HTML that is hosted on Amazon S3. No server-side code runs in production.

The site is bilingual:

- French: `/fr/`
- Dutch: `/nl/`
- The root `/` is a language picker (and auto-redirects based on browser language when possible).

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
| Language picker (root page) | `src/pages/index.astro` |
| French pages | `src/pages/fr/` |
| Dutch pages | `src/pages/nl/` |
| Contest step images (on the site) | `public/img/steps/` |
| Contest step image masters (not deployed) | `image-sources/steps/` |

When you add a new page, create it in **both** `fr/` and `nl/` so the two languages stay in sync (for example `src/pages/fr/about.astro` and `src/pages/nl/about.astro`).

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

On every push to the `main` branch, GitHub Actions builds the site and uploads `dist/` to the S3 bucket `www.be-oi.be` (region `eu-central-1`).

Required repository secrets:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

See [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### Manual

If you have the [AWS CLI](https://aws.amazon.com/cli/) configured with credentials that can write to the bucket:

```bash
npm run build
aws s3 sync dist/ s3://www.be-oi.be --delete --region eu-central-1
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
