export type LogoLink = {
  name: string;
  href: string;
  image: string;
};

/** Institutional support shown on the About page (not the full legacy sponsor list). */
export const supporters: LogoLink[] = [
  {
    name: 'Flemish Government',
    href: 'https://onderwijs.vlaanderen.be/',
    image: 'vlaams-overheid-logo.png',
  },
  {
    name: 'Fédération Wallonie-Bruxelles',
    href: 'https://www.federation-wallonie-bruxelles.be/',
    image: 'cfwb.jpg',
  },
];

export const members: LogoLink[] = [
  { name: 'UNamur', href: 'https://www.unamur.be/', image: 'unamur-logo.png' },
  { name: 'UCLouvain', href: 'https://uclouvain.be/', image: 'uclouvain-logo.png' },
  { name: 'VUB', href: 'https://www.vub.be/', image: 'vub-logo.jpg' },
  { name: 'ULB', href: 'https://www.ulb.be/', image: 'ulb-logo.png' },
  { name: 'UAntwerpen', href: 'https://www.uantwerpen.be/', image: 'ua-logo.jpg' },
  { name: 'UGent', href: 'https://www.ugent.be/', image: 'ugent-logo.jpg' },
  { name: 'UHasselt', href: 'https://www.uhasselt.be/', image: 'uhasselt-logo.png' },
  { name: 'ULiège', href: 'https://www.uliege.be/', image: 'uliege-logo.jpg' },
  { name: 'HERS', href: 'https://www.hers.be/', image: 'hers-logo.jpg' },
  {
    name: 'KU Leuven',
    href: 'https://wms.cs.kuleuven.be/cs',
    image: 'kuleuven-cw-logo.png',
  },
  { name: 'UMons', href: 'https://web.umons.ac.be/', image: 'umons-logo.png' },
  {
    name: 'UGent Faculteit Wetenschappen',
    href: 'https://www.ugent.be/we/',
    image: 'ugent-facwet.png',
  },
  { name: 'HELMo', href: 'https://www.helmo.be/', image: 'helmo-logo.png' },
  { name: 'Thomas More', href: 'https://www.thomasmore.be/', image: 'thomasmore-logo.svg' },
  { name: 'HE2B-ESI', href: 'https://www.heb.be/esi/', image: 'heb-esi-logo.png' },
  {
    name: 'HELB Ilya Prigogine',
    href: 'https://www.helb-prigogine.be/',
    image: 'helb-prigogine-logo.jpg',
  },
];

export const administrators = [
  'Damien Leroy',
  'Bart Jacobs',
  'Bas Ketsman',
  'Ludovic Galant',
] as const;

export function logoSrc(image: string): string {
  return `/img/ext-logos/${image}`;
}
