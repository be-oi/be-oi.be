/** Locales configured in astro.config.mjs i18n. */
export const locales = ['fr', 'nl', 'en'] as const;
export type Locale = (typeof locales)[number];

/** Locales that currently ship real page content (not redirect stubs). */
export const contentLocales: readonly Locale[] = ['fr', 'nl', 'en'];

export const defaultLocale: Locale = 'fr';

/**
 * hreflang `x-default` target for localized content pages (same as site default).
 * The language picker at `/` is special-cased in BaseLayout to point at itself.
 */
export const xDefaultLocale: Locale = defaultLocale;

const localePrefix = new RegExp(`^/(${locales.join('|')})(?=/|$)`);

/** Strip a leading `/{locale}` segment from a pathname. */
export function stripLocalePrefix(pathname: string): string {
  const stripped = pathname.replace(localePrefix, '') || '/';
  return stripped.startsWith('/') ? stripped : `/${stripped}`;
}

/** Build a locale-prefixed path, always with a trailing slash for directory-style URLs. */
export function localizePath(locale: string, pathWithoutLocale: string): string {
  let path = pathWithoutLocale.startsWith('/') ? pathWithoutLocale : `/${pathWithoutLocale}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  if (path === '/') return `/${locale}/`;
  return `/${locale}${path}`;
}
