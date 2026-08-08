import type { Locale } from '../i18n';
import en from './en.html?raw';
import fr from './fr.html?raw';
import nl from './nl.html?raw';

/**
 * FAQ body HTML per language.
 * Edit the matching file under `src/data/faq/` (en.html, fr.html, nl.html).
 *
 * Optional year tokens (filled at build time from the current beOI edition):
 *   {{contestYear}}       e.g. 2027 — edition end calendar year (1 Jul previous … 30 Jun this)
 *   {{schoolYearStart}}   e.g. 2026 — Sept–Dec of first contest semester
 *   {{contestYearShort}}  e.g. 27
 *   {{birthCutoffYear}}   e.g. 2007 — born on/after 1 July of this year if under 20 on 30 June of contest year
 */
export const faqHtmlByLocale: Record<Locale, string> = {
  en,
  fr,
  nl,
};

/**
 * A beOI edition Y runs from 1 July (Y−1) through 30 June Y.
 * Example: beOI 2027 = 1 July 2026 … 30 June 2027.
 */
export function getContestYear(now = new Date()): number {
  const calendarYear = now.getFullYear();
  // Jan–June: still edition `calendarYear`; from 1 July: next edition.
  return now.getMonth() <= 5 ? calendarYear : calendarYear + 1;
}

export function expandFaqTokens(html: string, now = new Date()): string {
  const contestYear = getContestYear(now);
  const tokens: Record<string, string> = {
    contestYear: String(contestYear),
    schoolYearStart: String(contestYear - 1),
    contestYearShort: String(contestYear).slice(-2),
    birthCutoffYear: String(contestYear - 20),
  };
  return html.replace(/\{\{(\w+)\}\}/g, (match, key: string) =>
    Object.hasOwn(tokens, key) ? tokens[key]! : match,
  );
}

export function getFaqHtml(locale: Locale, now = new Date()): string {
  return expandFaqTokens(faqHtmlByLocale[locale], now);
}
