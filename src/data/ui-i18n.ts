/** Shared chrome/UI strings for components that take a `lang` prop. */

import { defaultLocale } from './i18n';
import type { Locale as SiteLocale } from './i18n';

export type Locale = SiteLocale;

export function resolveLocale(lang: string | undefined): Locale {
  if (lang === 'fr' || lang === 'nl' || lang === 'en') return lang;
  return defaultLocale;
}

export interface NavStrings {
  contest: string;
  internationalContests: string;
  faq: string;
  about: string;
  changeLanguage: string;
  openMenu: string;
  closeMenu: string;
}

export interface MailingListStrings {
  sectionAria: string;
  heading: string;
  intro: string;
  emailLabel: string;
  emailPlaceholder: string;
  submit: string;
  already: string;
  success: string;
  failure: string;
  /** Shown under the form; `{link}` is replaced by the privacy-page anchor. */
  privacyNotice: string;
  privacyLinkLabel: string;
  /**
   * Shown inside `<noscript>` when the fetch-based form cannot run.
   * `{email}` is replaced by a mailto link to the contact address.
   */
  noscriptFallback: string;
}

export interface FooterStrings {
  dataProtection: string;
  facebook: string;
  instagram: string;
}

const navByLocale: Record<Locale, NavStrings> = {
  en: {
    contest: 'The beOI Contest',
    internationalContests: 'National team',
    faq: 'FAQ',
    about: 'About us',
    changeLanguage: 'Change language',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  fr: {
    contest: 'Le concours beOI',
    internationalContests: 'Équipe nationale',
    faq: 'FAQ',
    about: 'À propos',
    changeLanguage: 'Changer de langue',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
  },
  nl: {
    contest: 'De beOI-wedstrijd',
    internationalContests: 'Nationaal team',
    faq: 'FAQ',
    about: 'Over ons',
    changeLanguage: 'Taal wijzigen',
    openMenu: 'Menu openen',
    closeMenu: 'Menu sluiten',
  },
};

const mailingListByLocale: Record<Locale, MailingListStrings> = {
  en: {
    sectionAria: 'Mailing list signup',
    heading: 'Stay informed about the next olympiad',
    intro: 'Get an email when registration opens.',
    emailLabel: 'Email address',
    emailPlaceholder: 'Email address',
    submit: 'Keep me informed',
    already: "It looks like you're already subscribed.",
    success: "Thanks. We'll let you know when registration opens.",
    failure: "Couldn't add you to the list. If this persists, contact us (info@be-oi.be).",
    privacyNotice:
      'By subscribing, you agree that we store your email to send olympiad updates. Subscription is immediate (no confirmation email). See our {link}.',
    privacyLinkLabel: 'data protection notice',
    noscriptFallback:
      'Subscribing requires JavaScript. You can also email {email} to join the mailing list.',
  },
  fr: {
    sectionAria: 'Inscription à la liste de diffusion',
    heading: 'Restez informé de la prochaine olympiade',
    intro: "Recevez un e-mail à l'ouverture des inscriptions.",
    emailLabel: 'Adresse e-mail',
    emailPlaceholder: 'Adresse e-mail',
    submit: 'Tenez-moi informé',
    already: 'Il semble que vous soyez déjà inscrit.',
    success: "Merci. Nous vous préviendrons lorsque les inscriptions ouvriront.",
    failure:
      "Impossible de vous ajouter à la liste. Si le problème persiste, contactez-nous (info@be-oi.be).",
    privacyNotice:
      'En vous inscrivant, vous acceptez que nous conservions votre e-mail pour vous envoyer des informations sur l’olympiade. L’inscription est immédiate (pas d’e-mail de confirmation). Voir notre {link}.',
    privacyLinkLabel: 'notice de protection des données',
    noscriptFallback:
      'L’inscription nécessite JavaScript. Vous pouvez aussi écrire à {email} pour rejoindre la liste de diffusion.',
  },
  nl: {
    sectionAria: 'Aanmelding mailinglijst',
    heading: 'Blijf op de hoogte van de volgende olympiade',
    intro: 'Ontvang een e-mail wanneer de inschrijvingen openen.',
    emailLabel: 'E-mailadres',
    emailPlaceholder: 'E-mailadres',
    submit: 'Houd mij op de hoogte',
    already: 'Het lijkt erop dat je al bent ingeschreven.',
    success: 'Bedankt. We laten je weten wanneer de inschrijvingen openen.',
    failure:
      'We konden je niet aan de lijst toevoegen. Als dit aanhoudt, neem contact op (info@be-oi.be).',
    privacyNotice:
      'Door je in te schrijven ga je akkoord dat we je e-mail bewaren om olympiade-updates te sturen. Inschrijving is onmiddellijk (geen bevestigingsmail). Zie onze {link}.',
    privacyLinkLabel: 'databeschermingsverklaring',
    noscriptFallback:
      'Inschrijven vereist JavaScript. Je kunt ook mailen naar {email} om je aan te melden voor de mailinglijst.',
  },
};

const footerByLocale: Record<Locale, FooterStrings> = {
  en: {
    dataProtection: 'Data protection',
    facebook: 'beOI on Facebook',
    instagram: 'beOI on Instagram',
  },
  fr: {
    dataProtection: 'Protection des données',
    facebook: 'beOI sur Facebook',
    instagram: 'beOI sur Instagram',
  },
  nl: {
    dataProtection: 'Databescherming',
    facebook: 'beOI op Facebook',
    instagram: 'beOI op Instagram',
  },
};

export function navStrings(lang: string | undefined): NavStrings {
  return navByLocale[resolveLocale(lang)];
}

/** Native language names for the nav language picker (same in every locale). */
export const languagePickerLabels: Record<Locale, string> = {
  fr: 'Français',
  nl: 'Nederlands',
  en: 'English',
};

export interface LanguageChooserStrings {
  tagline: string;
  cta: string;
}

/** Copy for the root `/` language chooser cards (one entry per locale). */
export const languageChooserByLocale: Record<Locale, LanguageChooserStrings> = {
  nl: {
    tagline:
      'Belgische wedstrijden logica en programmeren voor leerlingen uit het lager en secundair onderwijs',
    cta: 'Ga verder in het Nederlands',
  },
  fr: {
    tagline:
      'Concours belges de logique et de programmation pour élèves du primaire et du secondaire',
    cta: 'Continuer en français',
  },
  en: {
    tagline:
      'Belgian logic and programming contests for primary and secondary school pupils',
    cta: 'Continue in English',
  },
};

export function mailingListStrings(lang: string | undefined): MailingListStrings {
  return mailingListByLocale[resolveLocale(lang)];
}

export function footerStrings(lang: string | undefined): FooterStrings {
  return footerByLocale[resolveLocale(lang)];
}

export interface StepSectionStrings {
  showMore: string;
  hideDetails: string;
}

const stepSectionByLocale: Record<Locale, StepSectionStrings> = {
  en: {
    showMore: 'Show more details',
    hideDetails: 'Hide details',
  },
  fr: {
    showMore: 'Plus de détails',
    hideDetails: 'Masquer les détails',
  },
  nl: {
    showMore: 'Meer details',
    hideDetails: 'Details verbergen',
  },
};

export function stepSectionStrings(lang: string | undefined): StepSectionStrings {
  return stepSectionByLocale[resolveLocale(lang)];
}
