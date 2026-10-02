import type { Locale } from './i18n';
import posterDe from '../assets/posters/beoi-poster-2027-de.jpg';
import posterEn from '../assets/posters/beoi-poster-2027-en.jpg';
import posterFr from '../assets/posters/beoi-poster-2027-fr.jpg';
import posterNl from '../assets/posters/beoi-poster-2027-nl.jpg';

const posters: Record<Locale, { href: string; image: ImageMetadata }> = {
  fr: {
    href: '/docs/beoi-poster-2027-fr.pdf',
    image: posterFr,
  },
  nl: {
    href: '/docs/beoi-poster-2027-nl.pdf',
    image: posterNl,
  },
  en: {
    href: '/docs/beoi-poster-2027-en.pdf',
    image: posterEn,
  },
  de: {
    href: '/docs/beoi-poster-2027-de.pdf',
    image: posterDe,
  },
};

export function contestPoster(lang: Locale) {
  return posters[lang];
}
