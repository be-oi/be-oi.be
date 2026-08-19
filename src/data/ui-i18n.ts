/** Shared chrome/UI strings for components that take a `lang` prop. */

export type Locale = 'en' | 'fr' | 'nl';

export function resolveLocale(lang: string | undefined): Locale {
  if (lang === 'fr' || lang === 'nl' || lang === 'en') return lang;
  return 'en';
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
  },
};

export function navStrings(lang: string | undefined): NavStrings {
  return navByLocale[resolveLocale(lang)];
}

export function mailingListStrings(lang: string | undefined): MailingListStrings {
  return mailingListByLocale[resolveLocale(lang)];
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
