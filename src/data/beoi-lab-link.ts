import { resolveLocale, navStrings, type Locale } from './ui-i18n';

/**
 * Marker replaced in contest-step-details HTML with the branded Lab link.
 * Optional key: `{{beoi-lab}}` (home) or `{{beoi-lab:brain-teaser}}` / `{{beoi-lab:qualif}}`.
 */
export const BEOI_LAB_PLACEHOLDER_RE = /\{\{beoi-lab(?::([a-z0-9-]+))?\}\}/g;

/** Locale-independent Lab path after `/{locale}/`. */
const labDeepPaths = {
  'brain-teaser': 'a/4429983549991579600;p=1,7122528748040789673',
  qualif: 'a/5876258403877279036;p=1,7122528748040789673',
} as const;

export type BeoiLabDeepLink = keyof typeof labDeepPaths;
export type BeoiLabLinkVariant = 'chrome' | 'surface';

const flaskSvg = `<svg
  class="beoi-lab-link__flask shrink-0"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="1.15em"
  height="1.15em"
  fill="none"
  aria-hidden="true"
>
  <path
    stroke="currentColor"
    stroke-width="1.7"
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M9 2.75h6M10.25 2.75v5.1L5.1 17.55A2.15 2.15 0 0 0 6.95 20.75h10.1a2.15 2.15 0 0 0 1.85-3.2L13.75 7.85v-5.1"
  />
  <path
    class="beoi-lab-link__liquid"
    stroke="currentColor"
    stroke-width="1.7"
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M7.15 15.05c1.15-.95 2.05.85 3.25-.15s2.05.85 3.2-.15 2-.75 2.85-.1"
  />
</svg>`;

const arrowSvg = `<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 -960 960 960"
  width="1em"
  height="1em"
  fill="currentColor"
  class="beoi-lab-link__arrow shrink-0"
  aria-hidden="true"
>
  <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
</svg>`;

export function beoiLabHref(
  lang: string | undefined,
  deepLink?: BeoiLabDeepLink,
): string {
  const locale = resolveLocale(lang);
  if (deepLink) {
    return `https://lab.be-oi.be/${locale}/${labDeepPaths[deepLink]}`;
  }
  return `https://lab.be-oi.be/${locale}/`;
}

/**
 * Branded Lab CTA markup (flask icon + label), safe to inject into set:html content.
 */
export function beoiLabLinkHtml(
  lang: string | undefined,
  variant: BeoiLabLinkVariant = 'chrome',
  options: {
    className?: string;
    showLabelAlways?: boolean;
    href?: string;
    deepLink?: BeoiLabDeepLink;
  } = {},
): string {
  const locale: Locale = resolveLocale(lang);
  const t = navStrings(locale);
  const className = ['beoi-lab-link', `beoi-lab-link--${variant}`, 'inline-flex', options.className]
    .filter(Boolean)
    .join(' ');
  const labelSpan = options.showLabelAlways
    ? `<span>${escapeHtml(t.lab)}</span>`
    : `<span class="hidden sm:inline">${escapeHtml(t.lab)}</span><span class="sm:hidden">Lab</span>`;
  const href = options.href ?? beoiLabHref(locale, options.deepLink);

  return `<a
  href="${escapeAttr(href)}"
  class="${className}"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="${escapeAttr(t.labAria)}"
>${flaskSvg}${labelSpan}${arrowSvg}</a>`;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function escapeAttr(value: string): string {
  return escapeHtml(value).replaceAll("'", '&#39;');
}

function isDeepLink(key: string | undefined): key is BeoiLabDeepLink {
  return key !== undefined && Object.hasOwn(labDeepPaths, key);
}

export function injectBeoiLabLinks(
  html: string,
  lang: string | undefined,
  variant: BeoiLabLinkVariant = 'surface',
): string {
  return html.replaceAll(BEOI_LAB_PLACEHOLDER_RE, (_match, key: string | undefined) => {
    const deepLink = isDeepLink(key) ? key : undefined;
    return beoiLabLinkHtml(lang, variant, { showLabelAlways: true, deepLink });
  });
}
