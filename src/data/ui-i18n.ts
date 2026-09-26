/** Shared chrome/UI strings for components that take a `lang` prop. */

import { defaultLocale } from './i18n';
import type { Locale as SiteLocale } from './i18n';

export type Locale = SiteLocale;

export function resolveLocale(lang: string | undefined): Locale {
  if (lang === 'fr' || lang === 'nl' || lang === 'en' || lang === 'de') return lang;
  return defaultLocale;
}

export interface NavStrings {
  contest: string;
  internationalContests: string;
  faq: string;
  about: string;
  /** Brand label for the external training platform link. */
  lab: string;
  /** Accessible name; should mention that the link opens externally. */
  labAria: string;
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
  /** Button label while the request is in flight. */
  pending: string;
  /** Empty field, after submit. */
  empty: string;
  /** Client-side or HTTP 400: the address was rejected. */
  invalid: string;
  already: string;
  success: string;
  /** HTTP 429. */
  rateLimit: string;
  /** Browser reports no network. */
  offline: string;
  /**
   * Request aborted after the client timeout.
   * `{email}` is replaced by a mailto link to the contact address.
   */
  timeout: string;
  /**
   * Any other failure.
   * `{email}` is replaced by a mailto link to the contact address.
   */
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
  /** Prefix for the build stamp, e.g. "Built". */
  built: string;
}

const navByLocale: Record<Locale, NavStrings> = {
  en: {
    contest: 'The beOI Contest',
    internationalContests: 'National Team',
    faq: 'FAQ',
    about: 'About Us',
    lab: 'beOI Lab',
    labAria: 'beOI Lab (opens in a new tab)',
    changeLanguage: 'Change language',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  fr: {
    contest: 'Le concours beOI',
    internationalContests: 'Équipe nationale',
    faq: 'FAQ',
    about: 'À propos',
    lab: 'beOI Lab',
    labAria: 'beOI Lab (s’ouvre dans un nouvel onglet)',
    changeLanguage: 'Changer de langue',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
  },
  nl: {
    contest: 'De beOI-wedstrijd',
    internationalContests: 'Nationaal team',
    faq: 'FAQ',
    about: 'Over ons',
    lab: 'beOI Lab',
    labAria: 'beOI Lab (opent in een nieuw tabblad)',
    changeLanguage: 'Taal wijzigen',
    openMenu: 'Menu openen',
    closeMenu: 'Menu sluiten',
  },
  de: {
    contest: 'Der beOI-Wettbewerb',
    internationalContests: 'Nationalmannschaft',
    faq: 'FAQ',
    about: 'Über uns',
    lab: 'beOI Lab',
    labAria: 'beOI Lab (öffnet in einem neuen Tab)',
    changeLanguage: 'Sprache ändern',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
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
    pending: 'Sending…',
    empty: 'Enter your email address.',
    invalid: "That doesn't look like an email address. Check it and try again.",
    already: "It looks like you're already subscribed.",
    success: "Thanks. We'll let you know when registration opens.",
    rateLimit: 'Too many attempts. Wait a moment, then try again.',
    offline: 'You seem to be offline. Check your connection and try again.',
    timeout: 'That took too long. Try again, or email {email}.',
    failure: "Couldn't add you to the list. If this persists, contact us ({email}).",
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
    pending: 'Envoi en cours…',
    empty: 'Indiquez votre adresse e-mail.',
    invalid: 'Cette adresse e-mail ne semble pas valide. Vérifiez-la et réessayez.',
    already: 'Il semble que vous soyez déjà inscrit.',
    success: "Merci. Nous vous préviendrons lorsque les inscriptions ouvriront.",
    rateLimit: 'Trop de tentatives. Patientez un instant, puis réessayez.',
    offline: 'Vous semblez hors ligne. Vérifiez votre connexion, puis réessayez.',
    timeout: 'La demande a pris trop de temps. Réessayez, ou écrivez à {email}.',
    failure:
      'Impossible de vous ajouter à la liste. Si le problème persiste, contactez-nous ({email}).',
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
    pending: 'Bezig met versturen…',
    empty: 'Geef je e-mailadres op.',
    invalid: 'Dit lijkt geen geldig e-mailadres. Controleer het en probeer opnieuw.',
    already: 'Het lijkt erop dat je al bent ingeschreven.',
    success: 'Bedankt. We laten je weten wanneer de inschrijvingen openen.',
    rateLimit: 'Te veel pogingen. Wacht even en probeer het opnieuw.',
    offline: 'Je lijkt offline te zijn. Controleer je verbinding en probeer opnieuw.',
    timeout: 'Het duurde te lang. Probeer opnieuw, of mail naar {email}.',
    failure:
      'We konden je niet aan de lijst toevoegen. Als dit aanhoudt, neem contact op ({email}).',
    privacyNotice:
      'Door je in te schrijven ga je akkoord dat we je e-mail bewaren om olympiade-updates te sturen. Inschrijving is onmiddellijk (geen bevestigingsmail). Zie onze {link}.',
    privacyLinkLabel: 'databeschermingsverklaring',
    noscriptFallback:
      'Inschrijven vereist JavaScript. Je kunt ook mailen naar {email} om je aan te melden voor de mailinglijst.',
  },
  de: {
    sectionAria: 'Anmeldung zur Mailingliste',
    heading: 'Bleib über die nächste Olympiade informiert',
    intro: 'Erhalte eine E-Mail, wenn die Anmeldung öffnet.',
    emailLabel: 'E-Mail-Adresse',
    emailPlaceholder: 'E-Mail-Adresse',
    submit: 'Halte mich auf dem Laufenden',
    pending: 'Wird gesendet…',
    empty: 'Gib deine E-Mail-Adresse ein.',
    invalid: 'Das sieht nicht wie eine E-Mail-Adresse aus. Prüfe sie und versuche es erneut.',
    already: 'Es sieht so aus, als wärst du bereits angemeldet.',
    success: 'Danke. Wir melden uns, wenn die Anmeldung öffnet.',
    rateLimit: 'Zu viele Versuche. Warte kurz und versuche es erneut.',
    offline: 'Du scheinst offline zu sein. Prüfe deine Verbindung und versuche es erneut.',
    timeout: 'Das hat zu lange gedauert. Versuche es erneut oder schreib an {email}.',
    failure:
      'Wir konnten dich nicht zur Liste hinzufügen. Wenn das anhält, kontaktiere uns ({email}).',
    privacyNotice:
      'Mit der Anmeldung stimmst du zu, dass wir deine E-Mail speichern, um Olympiade-Updates zu senden. Die Anmeldung ist sofort (keine Bestätigungs-E-Mail). Siehe unsere {link}.',
    privacyLinkLabel: 'Datenschutzerklärung',
    noscriptFallback:
      'Die Anmeldung erfordert JavaScript. Du kannst auch an {email} schreiben, um dich für die Mailingliste anzumelden.',
  },
};

const footerByLocale: Record<Locale, FooterStrings> = {
  en: {
    dataProtection: 'Data protection',
    facebook: 'beOI on Facebook',
    instagram: 'beOI on Instagram',
    built: 'Built',
  },
  fr: {
    dataProtection: 'Protection des données',
    facebook: 'beOI sur Facebook',
    instagram: 'beOI sur Instagram',
    built: 'Généré',
  },
  nl: {
    dataProtection: 'Databescherming',
    facebook: 'beOI op Facebook',
    instagram: 'beOI op Instagram',
    built: 'Gebouwd',
  },
  de: {
    dataProtection: 'Datenschutz',
    facebook: 'beOI auf Facebook',
    instagram: 'beOI auf Instagram',
    built: 'Erstellt',
  },
};

const skipToContentByLocale: Record<Locale, string> = {
  en: 'Skip to content',
  fr: 'Aller au contenu',
  nl: 'Ga naar de inhoud',
  de: 'Zum Inhalt springen',
};

export function skipToContentLabel(lang: string | undefined): string {
  return skipToContentByLocale[resolveLocale(lang)];
}

export function navStrings(lang: string | undefined): NavStrings {
  return navByLocale[resolveLocale(lang)];
}

/** Native language names for the nav language picker (same in every locale). */
export const languagePickerLabels: Record<Locale, string> = {
  fr: 'Français',
  nl: 'Nederlands',
  en: 'English',
  de: 'Deutsch',
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
  de: {
    tagline:
      'Belgische Wettbewerbe in Logik und Programmieren für Schülerinnen und Schüler der Primar- und Sekundarschule',
    cta: 'Auf Deutsch weiter',
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
  de: {
    showMore: 'Mehr Details',
    hideDetails: 'Details ausblenden',
  },
};

export function stepSectionStrings(lang: string | undefined): StepSectionStrings {
  return stepSectionByLocale[resolveLocale(lang)];
}
