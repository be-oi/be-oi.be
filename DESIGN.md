---
name: beOI
description: Playful olympiad sketchbook for Belgium’s free informatics contest site
colors:
  primary: "#3a54a4"
  on-primary: "#ffffff"
  primary-container: "#c5cdea"
  on-primary-container: "#1e2d5c"
  chrome: "#3a54a4"
  on-chrome: "#ffffff"
  secondary: "#3d6841"
  on-secondary: "#ffffff"
  secondary-container: "#bbecba"
  on-secondary-container: "#2a4a2e"
  tertiary: "#8d4f11"
  on-tertiary: "#ffffff"
  tertiary-container: "#f0a15d"
  on-tertiary-container: "#6b3800"
  background: "#ececec"
  surface: "#ececec"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f4f6f7"
  surface-container: "#e8ecf0"
  surface-container-high: "#dde2e6"
  on-surface: "#232323"
  on-surface-variant: "#41484e"
  outline: "#5f717c"
  outline-variant: "#b8c4cb"
  error: "#ba1a1a"
  on-error: "#ffffff"
  lab-mint: "#7dffc4"
  lab-mint-deep: "#1aa86a"
typography:
  headline:
    fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "40px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  headline-lg:
    fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 1.2
  headline-md:
    fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Be Vietnam Pro, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  body-lg:
    fontFamily: "Be Vietnam Pro, ui-sans-serif, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.05em"
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
rounded:
  DEFAULT: "1rem"
  lg: "2rem"
  xl: "3rem"
  full: "9999px"
spacing:
  xs: "4px"
  base: "8px"
  sm: "12px"
  md: "24px"
  gutter: "24px"
  margin: "32px"
  lg: "48px"
  xl: "80px"
components:
  button-primary:
    backgroundColor: "color-mix(in srgb, {colors.primary} 5%, transparent)"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: "0 20px"
    minHeight: "2.75rem"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "color-mix(in srgb, {colors.primary} 10%, transparent)"
    textColor: "{colors.primary}"
  button-filled:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
    typography: "{typography.label}"
  button-filled-hover:
    backgroundColor: "color-mix(in srgb, {colors.primary} 90%, black)"
    textColor: "{colors.on-primary}"
  input-email:
    backgroundColor: "{colors.surface-container-lowest}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.full}"
    padding: "10px 16px"
    typography: "{typography.body}"
  chip-meta:
    backgroundColor: "{colors.surface-container-lowest}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.full}"
    padding: "6px 12px"
  nav-chrome:
    backgroundColor: "{colors.chrome}"
    textColor: "{colors.on-chrome}"
  lab-link-chrome:
    backgroundColor: "color-mix(in srgb, {colors.on-chrome} 12%, transparent)"
    textColor: "{colors.on-chrome}"
    rounded: "{rounded.full}"
    padding: "0 1rem"
    minHeight: "2.75rem"
    typography: "{typography.label}"
---

# Design System: beOI

## Overview

**Creative North Star: "The Olympiad Sketchbook"**

beOI’s public site should feel like a well-kept contest sketchbook for ages 10–18: playful enough to invite curiosity, clear enough that a pupil or teacher can see how to join. Cool grey craft-paper pages carry the story; Contest Blue chrome frames navigation and footer like a notebook cover; step illustrations and light hand-drawn wobble supply personality without tipping into cartoon chaos.

Density stays open and readable — generous page margins, alternating white and craft-paper bands, one job per section. Interaction is lightly kinetic (hover lift, Lab flask tilt) but always gated behind `prefers-reduced-motion`. The system rejects corporate SaaS chrome, paid-product urgency, dark “cyber olympiad” tropes, and anything that talks down to teenagers.

**Key Characteristics:**
- Contest Blue brand + cool craft-paper surfaces
- Three UI type faces (headline / body / label) plus system mono for code only
- Flat-by-default depth (tone, borders, texture over shadows)
- Full-pill CTAs and meta chips; thick quiet borders
- Mascot step art as the visual signature of the journey

## Colors

A reduced Material-like palette: one brand blue shared with the illustrations, cool neutral surfaces, green for progress/success accents, amber for warm callouts, Lab mint for the Lab link only, red only for failure.

### Primary
- **Contest Blue** (`#3a54a4`): Brand ink for links, primary CTAs, step accents, and the fixed nav/footer **chrome** (same hex as `chrome` / `on-chrome` white). Drawn from the step-illustration blue so UI and artwork stay one voice.
- **Primary container** (`#c5cdea` / on `#1e2d5c`): Soft blue washes and decorative craft shapes — never the main text color.

### Secondary
- **Advance Green** (`#3d6841`): Progress, success, and step accents that mean “moving forward.” Container `#bbecba` for soft fills.
- Use for positive status and secondary step accents — not as a second brand competing with Contest Blue.

### Tertiary
- **Callout Amber** (`#8d4f11`): Warm “new / notice” moments (hero badge, optional highlights). Container `#f0a15d`.
- Keep rare so callouts stay loud when they appear.

### Lab accent
- **Lab Mint** (`#7dffc4` / `--color-lab-mint`): Flask glow, chrome Lab-link focus ring, and mint hover halo on Contest Blue chrome. Declared in `global.css` `@theme`.
- **Lab Mint Deep** (`#1aa86a` / `--color-lab-mint-deep`): Flask on light page surfaces (surface Lab-link variant) so mint stays vivid on Page White. Declared in `global.css` `@theme`.

**Token contract:** treat Lab mint as named color tokens *and* as the CSS custom properties `--color-lab-mint` / `--color-lab-mint-deep` in `@theme`. Prefer `var(--color-lab-mint)` / `var(--color-lab-mint-deep)` in styles — do not introduce fresh hex literals. Lab mint is never general decoration.

### Neutral
- **Craft Paper** (`#ececec` / `background` + `surface`): Page background with the dotted craft-paper texture. Do **not** rename this craft-paper surface to “white.”
- **Page White** (`#ffffff` / `surface-container-lowest`): Alternating full-bleed bands and elevated form fields. The tokenized equivalent of white page bands — use `bg-surface-container-lowest` / `var(--color-surface-container-lowest)`, **not** raw Tailwind `bg-white`.
- **Cool Elevators** (`#f4f6f7` → `#dde2e6`): Nested surfaces and chip fills on white bands.
- **Ink** (`#232323`) / **Muted ink** (`#41484e`): Primary and secondary text.
- **Quiet borders** (`#b8c4cb` outline-variant, `#5f717c` outline): Separators — never brand-blue rules for structure.

### Named Rules
**The One Ink Rule.** Contest Blue is the only brand accent that may dominate a viewport (chrome, primary CTAs, key links). Green and amber are supporting voices.

**The Error Is Failure Rule.** `#ba1a1a` appears only for destructive or form-failure states — never as decoration.

**The Quiet Border Rule.** Structural lines use outline neutrals, not primary blue.

**The Lab Mint Contract Rule.** Lab mint exists only for the Lab link accent. Use `--color-lab-mint` / `--color-lab-mint-deep` (or the named tokens), never as a general brand or decorative fill.

## Typography

**Display/Headline Font:** Plus Jakarta Sans (ui-sans-serif, system-ui)
**Body Font:** Be Vietnam Pro (ui-sans-serif, system-ui)
**Label Font:** Bricolage Grotesque (ui-sans-serif, system-ui)
**Mono Font:** System mono stack — `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace` (code only)

**Character:** Confident rounded sans for titles, readable workhorse for explanation, slightly quirky label face for nav and controls — sketchbook energy without novelty fonts. Inline code on competitive-programming pages uses the system mono stack so algorithms stay scannable without importing a decorative monospace face.

### Hierarchy
- **Headline XL** (700, 40px, 1.2, −0.02em): Page heroes.
- **Headline LG** (700, 32px, 1.2): Section titles (step names, about blocks).
- **Headline MD** (700, 24px, 1.3): Subsections and newsletter heading.
- **Body LG** (400, 18px, 1.6): Lead paragraphs under heroes and steps.
- **Body MD** (400, 16px, 1.6): Default reading measure; keep lines comfortable (~65ch max where constrained).
- **Label MD** (600, 14px, 1.4, 0.05em): Nav, buttons, chips, Lab link — the UI voice.
- **Mono** (system stack, ~0.92em relative to body on competitive-programming pages): Inline `<code>` only — not UI chrome, not headlines.

Self-hosted via Fontsource **latin** subsets only (one file per used weight) for the three UI faces — Belgian French/Dutch accents are in the latin range, and latin-ext subset CSS omits `unicode-range` which would force duplicate downloads. Weights: Jakarta 700; Be Vietnam Pro 400 + 600; Bricolage 600. Critical body + headline woff2s are preloaded from `BaseLayout`. Do not load Google Fonts or other third-party font CDNs. Mono stays on the platform stack (no remote mono CDN).

### Named Rules
**The Three-Face (+ Code Mono) Rule.** Three UI faces remain: Headlines → Plus Jakarta; reading → Be Vietnam Pro; chrome/UI → Bricolage. Mono is a fourth specialized role for code only (system `ui-monospace` stack on competitive-programming pages). Do not invent additional families for decoration — and do use mono for code.

## Layout

Content lives in a centered column (`max-w-7xl`) with horizontal page margin (`32px` / `px-margin`). Vertical rhythm uses the spacing scale (`sm` 12 → `xl` 80). Home and long pages alternate **craft-paper** and **Page White** full-bleed bands; step sections use a 1-col → 2-col (image/body) grid from `lg` (1024px), with optional reverse columns.

**Reading measure:** body and lead copy on home and competitive-programming use `max-w-2xl` (~62ch at body-md / ~55ch at body-lg). Page shells, timeline, and multi-column grids stay wider; only the reading column tightens.

Fixed chrome nav (`z-50`) requires generous top padding on `<main>` (`pt-32`) and `scroll-mt-*` on in-page targets. Timeline on home may horizontal-scroll on small viewports; prefer equal step columns over card grids.

Breakpoints in use: `sm` 640px, `md` 768px, `lg` 1024px.

### Named Rules
**The Band Alternation Rule.** Long pages breathe by alternating craft-paper (`background` / `surface` `#ececec`) and Page White (`surface-container-lowest` `#ffffff`) full-bleed bands — not by stacking cards. White bands use the surface-system white token (`bg-surface-container-lowest` / `var(--color-surface-container-lowest)`), not raw Tailwind `bg-white`. Craft-paper `surface` stays `#ececec`; do not rename it to white.

**The Reading Measure Rule.** Constrain continuous body and lead text to `max-w-2xl` on home and competitive-programming so line length stays near ~65ch at body size on wide viewports. Do not stretch reading columns to `max-w-3xl` / `max-w-4xl` for comfort.

## Elevation & Depth

**Flat-by-default.** Depth comes from tonal surface steps, craft-paper texture, and 2px quiet borders. Shadows are rare and situational (language menu `shadow-lg`, stamp-like `drop-shadow` on illustrated accents) — never a resting card stack.

### Shadow Vocabulary
- **Menu lift** (`box-shadow` via Tailwind `shadow-lg`): Language dropdown only.
- **Stamp** (`filter: drop-shadow(4px 4px 0px … primary 18%)`): Occasional illustration accent, not UI chrome.

### Named Rules
**The Flat-By-Default Rule.** Surfaces stay flat at rest. Shadows appear only for transient UI (menus) or intentional stamp effects — not for every container.

## Shapes

Corners are soft and pill-forward: default radius `1rem`, large `2rem`/`3rem`, and **full pills** (`9999px`) for CTAs, inputs, chips, and the Lab chrome control. Hand-drawn organic borders (`hand-drawn-border`) and tiny rotations (`wobbly-rotation-*`) appear as craft accents on badges and decorative blots — sparingly, never on dense text blocks.

Borders are typically `border-2` with outline-variant or primary at low opacity.

### Named Rules
**The Pill CTA Rule.** Primary actions and email fields are full pills. Rectangular sharp cards are not the default container language.

## Components

Playful and clear: full pills, thick quiet borders, wobble kept light.

### Buttons
- **Shape:** Full pill (`9999px`)
- **Primary (outline wash):** Primary text on `primary/5` fill, `border-2 border-primary/30`, label type, min-height `2.75rem` (44px) with horizontal padding ~`20px`. Hover → `primary/10`. Used for step CTAs and “Show more”.
- **Filled:** Primary fill, on-primary text (newsletter submit). Hover slightly darkens.
- **Focus:** Prefer visible `:focus-visible` rings (Contest Blue or Lab mint on chrome). Do not strip outlines without a replacement.

### Chips
- **Style:** Pill, `border border-outline-variant`, tonal fill (`surface-container-lowest` or `low` on white bands), icon in primary + value in on-surface; kind label in `sr-only`.
- **State:** Informational meta only (duration, timing, location) — not filters.

### Cards / Containers
- Default: **no cards**. Prefer bands, grids, and open sections.
- When a bordered panel appears (language menu, FAQ patterns elsewhere), use surface-container-lowest + outline-variant border — not heavy shadow stacks.

### Inputs / Fields
- **Style:** Full-pill email field, Page White fill (`surface-container-lowest`), `border-2` outline-variant, body type.
- **Focus:** Border shifts to primary; keep a clear focus ring.
- **Error / success:** Error and secondary/tertiary text in the live region under the form — not colored field chrome by default.

### Navigation
- Fixed Contest Blue chrome bar, white logo wordmark, label-md links.
- Active desktop link: bottom border on chrome; mobile: left border + panel.
- Desktop main links: at least 24×24 CSS px hit area (WCAG 2.5.8); language/menu icon buttons and Lab chrome control prefer 44×44.
- Language and menu toggles: icon buttons on chrome; menus escape to light surface panels.
- **Lab link (chrome):** Pill with translucent white border, min-height 44px; Lab Mint flask accent via `--color-lab-mint`; external target. Surface variant uses `--color-lab-mint-deep` for the flask on Page White (inline text link — not enlarged as a chrome control).

### Signature: Contest step section
Image + title + accent tagline + body + meta chips + optional details `<details>`. Illustrations from `src/assets/steps/` are mandatory journey markers — do not replace with generic stock. Optional `whiteBand` should paint Page White via `surface-container-lowest`, not raw `bg-white`.

### Signature: Craft-paper body
`.craft-paper` dotted + faint line texture on the page background; Page White bands (`surface-container-lowest`) interrupt it for resting the eye.

### Signature: Inline code (competitive programming)
Body copy may include `<code>` set in the `mono` stack at ~0.92em. Do not style code with label or headline faces.

## Do's and Don'ts

### Do:
- **Do** keep Contest Blue as the sole dominant brand accent and match illustration blue.
- **Do** alternate craft-paper (`background`/`surface`) and Page White (`surface-container-lowest`) bands on long pages — use the surface token, not raw `bg-white`.
- **Do** use full-pill CTAs/inputs and quiet 2px borders.
- **Do** gate motion behind `prefers-reduced-motion: no-preference`.
- **Do** preserve mascot step art and beOI logos as identity assets.
- **Do** use `var(--color-lab-mint)` / `var(--color-lab-mint-deep)` for Lab accents, and the system `mono` stack for code.

### Don't:
- **Don't** make it feel like corporate SaaS, a paid product funnel, or dark cyber UI.
- **Don't** tip into toddler-cartoon chaos (overuse of wobble, stickers, or rainbow accents).
- **Don't** invent an extra decorative UI font family or load remote font CDNs (mono for code is the only specialized exception).
- **Don't** use error red or Lab mint as general decoration.
- **Don't** default to card grids with layered shadows for content that belongs in open bands.
- **Don't** paint white bands with raw `bg-white` when `bg-surface-container-lowest` is the tokenized Page White.
