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
    fontWeight: 800
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
    padding: "8px 16px"
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
    padding: "0.35rem 0.85rem"
    typography: "{typography.label}"
---

# Design System: beOI

## Overview

**Creative North Star: "The Olympiad Sketchbook"**

beOI’s public site should feel like a well-kept contest sketchbook for ages 10–18: playful enough to invite curiosity, clear enough that a pupil or teacher can see how to join. Cool grey craft-paper pages carry the story; Contest Blue chrome frames navigation and footer like a notebook cover; step illustrations and light hand-drawn wobble supply personality without tipping into cartoon chaos.

Density stays open and readable — generous page margins, alternating white and craft-paper bands, one job per section. Interaction is lightly kinetic (hover lift, Lab flask tilt) but always gated behind `prefers-reduced-motion`. The system rejects corporate SaaS chrome, paid-product urgency, dark “cyber olympiad” tropes, and anything that talks down to teenagers.

**Key Characteristics:**
- Contest Blue brand + cool craft-paper surfaces
- Three-type pairing: bold headlines, calm body, characterful labels
- Flat-by-default depth (tone, borders, texture over shadows)
- Full-pill CTAs and meta chips; thick quiet borders
- Mascot step art as the visual signature of the journey

## Colors

A reduced Material-like palette: one brand blue shared with the illustrations, cool neutral surfaces, green for progress/success accents, amber for warm callouts, red only for failure.

### Primary
- **Contest Blue** (`#3a54a4`): Brand ink for links, primary CTAs, step accents, and the fixed nav/footer **chrome** (same hex as `chrome` / `on-chrome` white). Drawn from the step-illustration blue so UI and artwork stay one voice.
- **Primary container** (`#c5cdea` / on `#1e2d5c`): Soft blue washes and decorative craft shapes — never the main text color.

### Secondary
- **Advance Green** (`#3d6841`): Progress, success, and step accents that mean “moving forward.” Container `#bbecba` for soft fills.
- Use for positive status and secondary step accents — not as a second brand competing with Contest Blue.

### Tertiary
- **Callout Amber** (`#8d4f11`): Warm “new / notice” moments (hero badge, optional highlights). Container `#f0a15d`.
- Keep rare so callouts stay loud when they appear.

### Neutral
- **Craft Paper** (`#ececec`): Page background with the dotted craft-paper texture.
- **Page White** (`#ffffff` / `surface-container-lowest`): Alternating full-bleed bands and elevated form fields.
- **Cool Elevators** (`#f4f6f7` → `#dde2e6`): Nested surfaces and chip fills on white bands.
- **Ink** (`#232323`) / **Muted ink** (`#41484e`): Primary and secondary text.
- **Quiet borders** (`#b8c4cb` outline-variant, `#5f717c` outline): Separators — never brand-blue rules for structure.

### Named Rules
**The One Ink Rule.** Contest Blue is the only brand accent that may dominate a viewport (chrome, primary CTAs, key links). Green and amber are supporting voices.

**The Error Is Failure Rule.** `#ba1a1a` appears only for destructive or form-failure states — never as decoration.

**The Quiet Border Rule.** Structural lines use outline neutrals, not primary blue.

## Typography

**Display/Headline Font:** Plus Jakarta Sans (ui-sans-serif, system-ui)
**Body Font:** Be Vietnam Pro (ui-sans-serif, system-ui)
**Label Font:** Bricolage Grotesque (ui-sans-serif, system-ui)

**Character:** Confident rounded sans for titles, readable workhorse for explanation, slightly quirky label face for nav and controls — sketchbook energy without novelty fonts.

### Hierarchy
- **Headline XL** (800, 40px, 1.2, −0.02em): Page heroes.
- **Headline LG** (700, 32px, 1.2): Section titles (step names, about blocks).
- **Headline MD** (700, 24px, 1.3): Subsections and newsletter heading.
- **Body LG** (400, 18px, 1.6): Lead paragraphs under heroes and steps.
- **Body MD** (400, 16px, 1.6): Default reading measure; keep lines comfortable (~65ch max where constrained).
- **Label MD** (600, 14px, 1.4, 0.05em): Nav, buttons, chips, Lab link — the UI voice.

Self-hosted via Fontsource (latin + latin-ext). Do not load Google Fonts or other third-party font CDNs.

### Named Rules
**The Three-Face Rule.** Headlines → Plus Jakarta; reading → Be Vietnam Pro; chrome/UI → Bricolage. Do not invent a fourth family for decoration.

## Layout

Content lives in a centered column (`max-w-7xl`) with horizontal page margin (`32px` / `px-margin`). Vertical rhythm uses the spacing scale (`sm` 12 → `xl` 80). Home and long pages alternate **craft-paper** and **white** full-bleed bands; step sections use a 1-col → 2-col (image/body) grid from `lg` (1024px), with optional reverse columns.

Fixed chrome nav (`z-50`) requires generous top padding on `<main>` (`pt-32`) and `scroll-mt-*` on in-page targets. Timeline on home may horizontal-scroll on small viewports; prefer equal step columns over card grids.

Breakpoints in use: `sm` 640px, `md` 768px, `lg` 1024px.

### Named Rules
**The Band Alternation Rule.** Long pages breathe by alternating craft-paper and white full-bleed bands — not by stacking cards.

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
- **Primary (outline wash):** Primary text on `primary/5` fill, `border-2 border-primary/30`, label type, padding ~`8px 16px`. Hover → `primary/10`. Used for step CTAs and “Show more”.
- **Filled:** Primary fill, on-primary text (newsletter submit). Hover slightly darkens.
- **Focus:** Prefer visible `:focus-visible` rings (Contest Blue or Lab mint on chrome). Do not strip outlines without a replacement.

### Chips
- **Style:** Pill, `border border-outline-variant`, tonal fill (`surface-container-lowest` or `low` on white bands), icon in primary + value in on-surface; kind label in `sr-only`.
- **State:** Informational meta only (duration, timing, location) — not filters.

### Cards / Containers
- Default: **no cards**. Prefer bands, grids, and open sections.
- When a bordered panel appears (language menu, FAQ patterns elsewhere), use surface-container-lowest + outline-variant border — not heavy shadow stacks.

### Inputs / Fields
- **Style:** Full-pill email field, white fill, `border-2` outline-variant, body type.
- **Focus:** Border shifts to primary; keep a clear focus ring.
- **Error / success:** Error and secondary/tertiary text in the live region under the form — not colored field chrome by default.

### Navigation
- Fixed Contest Blue chrome bar, white logo wordmark, label-md links.
- Active desktop link: bottom border on chrome; mobile: left border + panel.
- Language and menu toggles: icon buttons on chrome; menus escape to light surface panels.
- **Lab link (chrome):** Pill with translucent white border; mint flask accent (`#7dffc4`); external target.

### Signature: Contest step section
Image + title + accent tagline + body + meta chips + optional details `<details>`. Illustrations from `src/assets/steps/` are mandatory journey markers — do not replace with generic stock.

### Signature: Craft-paper body
`.craft-paper` dotted + faint line texture on the page background; white bands interrupt it for resting the eye.

## Do's and Don'ts

### Do:
- **Do** keep Contest Blue as the sole dominant brand accent and match illustration blue.
- **Do** alternate craft-paper and white bands on long pages.
- **Do** use full-pill CTAs/inputs and quiet 2px borders.
- **Do** gate motion behind `prefers-reduced-motion: no-preference`.
- **Do** preserve mascot step art and beOI logos as identity assets.

### Don't:
- **Don't** make it feel like corporate SaaS, a paid product funnel, or dark cyber UI.
- **Don't** tip into toddler-cartoon chaos (overuse of wobble, stickers, or rainbow accents).
- **Don't** invent a fourth font family or load remote font CDNs.
- **Don't** use error red or Lab mint as general decoration.
- **Don't** default to card grids with layered shadows for content that belongs in open bands.
