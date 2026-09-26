# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary:** pupils (roughly ages 10–18 / from the 4th year of primary through the end of secondary) and their teachers who need to understand what the Belgian Olympiad in Informatics is and how to join.

**Secondary:** parents checking the programme and practicalities.

**Tertiary:** potential partners, institutions, and sponsors who want to learn more about beOI before engaging.

## Product Purpose

Public informational website for **beOI** (Belgian Olympiad in Informatics). It explains the contest — including the 2027 multi-stage structure — and how to participate, so teachers and pupils can decide to take part.

**Success:** a teacher or pupil decides to participate.

## Positioning

Belgium’s free national olympiad path in computational reasoning and programming: from optional logic puzzles through progressive programming rounds to representing Belgium at international contests. Neighbour products do not offer this official Belgian school-to-olympiad pipeline under the beOI ASBL/VZW identity.

## Operating Context

- Contested by pupils in Belgian primary and secondary education, within age categories.
- Organised by the non-profit **beOI ASBL/VZW**, with universities, public supporters, sponsors, and volunteers.
- Practice and training also point to **beOI Lab** (external).
- Site is consulted before and during the school year for structure, dates, FAQ, and contact — not as an in-contest platform.

## Capabilities and Constraints

**Capabilities (site):**
- Locale-prefixed content in French, Dutch, English, and German (`/fr/`, `/nl/`, `/en/`, `/de/`); root `/` is a language picker (with client redirect for `fr`/`nl`/`de` browser languages).
- Contest journey overview (home), FAQ, competitive-programming / international path, about (members & support), data-protection, mailing-list signup.
- Links out to beOI Lab and social channels.

**Constraints:**
- Static site only (Astro build → S3 + CloudFront). No SSR, server runtime, or CMS unless explicitly requested later.
- All four locales must stay in sync for user-facing content and routes.
- Do not invent or alter official names per locale, legal entity details, or contest rules / age bands.
- Participation in the contest itself is free (optional costs may apply only for some trainings/camps — as stated in FAQ).

**Stack (incumbent):** Astro, Tailwind CSS v4, Node 22+, deploy via GitHub Actions to `s3://be-oi.be/` behind CloudFront (`https://www.be-oi.be`).

## Brand Commitments

- Short name: **beOI**.
- Official full names:
  - **en:** Belgian Olympiad in Informatics
  - **fr (fr_BE):** Olympiade belge d'Informatique
  - **nl (nl_BE / Flemish):** Belgische Informatica-olympiade
  - **de (de_BE):** Belgische Informatik-Olympiade
- Legal entity wording (footer / privacy): *Belgische Informatica-olympiade - Olympiade belge d’Informatique (beOI) ASBL/VZW*; address Celestijnenlaan 200A bus 4078, 3001 Leuven; BTW/TVA BE 0849.738.707; contact `info@be-oi.be`.
- Existing logos under `public/img/` and contest-step mascot illustrations under `src/assets/steps/` are binding brand assets — do not replace without explicit request.

## Evidence on Hand

- Live product copy and structure in `src/pages/{fr,nl,en,de}/`, `src/data/contest-steps/`, `src/data/contest-step-details/`, `src/data/faq/`, `src/data/data-protection/`, `src/data/ui-i18n.ts`.
- About-page member and supporter logos via `src/data/about/`.
- No testimonials, rankings, or sponsor claims beyond what the repo currently states (About currently notes no private sponsors). Future work must not fabricate social proof, results, or partnerships.

## Product Principles

1. **Clarity to join** — A pupil or teacher should leave knowing what beOI is and the next step to participate.
2. **Locale truth** — French, Dutch, English, and German are first-class; names and wording follow Belgian French / Flemish / English / German conventions already in the product (German translates from English, with Flemish as tie-break).
3. **Factual restraint** — Contest rules, age bands, legal identity, and free participation stay accurate; never invent claims.
4. **Static and durable** — Prefer content and UX that ship as a static site and stay maintainable across four locales.
5. **Audience ladder** — Serve joiners first; keep parents and partners informed without crowding the primary path.

## Accessibility & Inclusion

No product-specific WCAG target was set in init. The audience includes younger pupils and educators; keep copy and structure understandable across that range. Treat accessibility as a standing quality bar for future work rather than an undecided aesthetic choice.
