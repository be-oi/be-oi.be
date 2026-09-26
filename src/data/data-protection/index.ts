import type { Locale } from '../i18n';
import de from './de.html?raw';
import en from './en.html?raw';
import fr from './fr.html?raw';
import nl from './nl.html?raw';

/**
 * Data-protection / privacy body HTML per language.
 * Edit the matching file under `src/data/data-protection/` (en.html, fr.html, nl.html, de.html).
 */
export const dataProtectionHtmlByLocale: Record<Locale, string> = {
  de,
  en,
  fr,
  nl,
};

export function getDataProtectionHtml(locale: Locale): string {
  return dataProtectionHtmlByLocale[locale];
}
