import type { Locale } from './i18n';

/** Edition label shown in contest-registration copy. */
export const editionLabel = '2026–2027';

/** First moment contest registration is closed (Brussels / CET). */
export const registrationClosesAt = '2027-03-01T00:00:00+01:00';

const closesAtMs = Date.parse(registrationClosesAt);

const dateLocales: Record<Locale, string> = {
  en: 'en-GB',
  fr: 'fr-BE',
  nl: 'nl-BE',
  de: 'de-BE',
};

export interface RegistrationWindow {
  isOpen: boolean;
  contestPlatformUrl: string;
  editionLabel: string;
  /** Calendar day before the close, formatted for the locale. */
  endDateLabel: string;
}

export function isRegistrationOpen(now = new Date()): boolean {
  return now.getTime() < closesAtMs;
}

export function contestPlatformUrl(locale: Locale): string {
  return `https://contest.be-oi.be/${locale}/`;
}

function formatEndDate(locale: Locale): string {
  // One millisecond before the close is still the previous Brussels calendar day.
  const endInstant = new Date(closesAtMs - 1);
  return new Intl.DateTimeFormat(dateLocales[locale], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Europe/Brussels',
  }).format(endInstant);
}

/**
 * Contest-registration window for a locale at a given clock.
 * Callers pass the visitor’s clock; the close instant lives only here.
 */
export function getRegistrationWindow(locale: Locale, now = new Date()): RegistrationWindow {
  return {
    isOpen: isRegistrationOpen(now),
    contestPlatformUrl: contestPlatformUrl(locale),
    editionLabel,
    endDateLabel: formatEndDate(locale),
  };
}

const tokenPattern = /\{\{(contestPlatformUrl|registrationEndDate)\}\}/g;

/** Fill contest-platform URL and localized end-date tokens from this module. */
export function expandRegistrationTokens(html: string, locale: Locale): string {
  const values = {
    contestPlatformUrl: contestPlatformUrl(locale),
    registrationEndDate: formatEndDate(locale),
  } as const;
  return html.replace(tokenPattern, (match, key: keyof typeof values) =>
    Object.hasOwn(values, key) ? values[key] : match,
  );
}
