import type { Locale } from './i18n';
import brochureEn from '../assets/sponsoring/beoi-sponsoring-2027-en.jpg';
import brochureFr from '../assets/sponsoring/beoi-sponsoring-2027-fr.jpg';
import brochureNl from '../assets/sponsoring/beoi-sponsoring-2027-nl.jpg';

export const sponsorsEmail = 'sponsors@be-oi.be';

type BrochureLocale = 'en' | 'fr' | 'nl';

const brochures: Record<BrochureLocale, { href: string; image: ImageMetadata }> = {
  en: {
    href: '/docs/beoi-sponsoring-2027-en.pdf',
    image: brochureEn,
  },
  fr: {
    href: '/docs/beoi-sponsoring-2027-fr.pdf',
    image: brochureFr,
  },
  nl: {
    href: '/docs/beoi-sponsoring-2027-nl.pdf',
    image: brochureNl,
  },
};

/** Locale → brochure file. German has no dedicated PDF yet; use French. */
const brochureLocaleBySite: Record<Locale, BrochureLocale> = {
  en: 'en',
  fr: 'fr',
  nl: 'nl',
  de: 'fr',
};

export function sponsoringBrochure(lang: Locale) {
  return brochures[brochureLocaleBySite[lang]];
}
