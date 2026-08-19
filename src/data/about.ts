import cfwbLogo from '../assets/ext-logos/cfwb.jpg';
import hebEsiLogo from '../assets/ext-logos/heb-esi-logo.png';
import helbPrigogineLogo from '../assets/ext-logos/helb-prigogine-logo.jpg';
import helmoLogo from '../assets/ext-logos/helmo-logo.png';
import hersLogo from '../assets/ext-logos/hers-logo.jpg';
import kuleuvenCwLogo from '../assets/ext-logos/kuleuven-cw-logo.png';
import thomasmoreLogo from '../assets/ext-logos/thomasmore-logo.svg';
import uaLogo from '../assets/ext-logos/ua-logo.jpg';
import uclouvainLogo from '../assets/ext-logos/uclouvain-logo.png';
import ugentFacwetLogo from '../assets/ext-logos/ugent-facwet.png';
import ugentLogo from '../assets/ext-logos/ugent-logo.jpg';
import uhasseltLogo from '../assets/ext-logos/uhasselt-logo.png';
import ulbLogo from '../assets/ext-logos/ulb-logo.png';
import uliegeLogo from '../assets/ext-logos/uliege-logo.jpg';
import umonsLogo from '../assets/ext-logos/umons-logo.png';
import unamurLogo from '../assets/ext-logos/unamur-logo.png';
import vlaamsOverheidLogo from '../assets/ext-logos/vlaams-overheid-logo.png';
import vubLogo from '../assets/ext-logos/vub-logo.jpg';

export type LogoLink = {
  name: string;
  href: string;
  image: ImageMetadata;
};

/** Institutional support shown on the About page (not the full legacy sponsor list). */
export const supporters: LogoLink[] = [
  {
    name: 'Flemish Government',
    href: 'https://onderwijs.vlaanderen.be/',
    image: vlaamsOverheidLogo,
  },
  {
    name: 'Fédération Wallonie-Bruxelles',
    href: 'https://www.federation-wallonie-bruxelles.be/',
    image: cfwbLogo,
  },
];

export const members: LogoLink[] = [
  { name: 'UNamur', href: 'https://www.unamur.be/', image: unamurLogo },
  { name: 'UCLouvain', href: 'https://uclouvain.be/', image: uclouvainLogo },
  { name: 'VUB', href: 'https://www.vub.be/', image: vubLogo },
  { name: 'ULB', href: 'https://www.ulb.be/', image: ulbLogo },
  { name: 'UAntwerpen', href: 'https://www.uantwerpen.be/', image: uaLogo },
  { name: 'UGent', href: 'https://www.ugent.be/', image: ugentLogo },
  { name: 'UHasselt', href: 'https://www.uhasselt.be/', image: uhasseltLogo },
  { name: 'ULiège', href: 'https://www.uliege.be/', image: uliegeLogo },
  { name: 'HERS', href: 'https://www.hers.be/', image: hersLogo },
  {
    name: 'KU Leuven',
    href: 'https://wms.cs.kuleuven.be/cs',
    image: kuleuvenCwLogo,
  },
  { name: 'UMons', href: 'https://web.umons.ac.be/', image: umonsLogo },
  {
    name: 'UGent Faculteit Wetenschappen',
    href: 'https://www.ugent.be/we/',
    image: ugentFacwetLogo,
  },
  { name: 'HELMo', href: 'https://www.helmo.be/', image: helmoLogo },
  { name: 'Thomas More', href: 'https://www.thomasmore.be/', image: thomasmoreLogo },
  { name: 'HE2B-ESI', href: 'https://www.heb.be/esi/', image: hebEsiLogo },
  {
    name: 'HELB Ilya Prigogine',
    href: 'https://www.helb-prigogine.be/',
    image: helbPrigogineLogo,
  },
];

/**
 * Upper bound (px) on the emitted logo height: twice the rendered height, so
 * high-DPI screens stay sharp. Sources shorter than this are kept as-is rather
 * than upscaled — several logos are already only a few dozen pixels tall.
 */
const supporterLogoMaxHeight = 128;
const memberLogoMaxHeight = 112;

export function supporterLogoHeight(image: ImageMetadata): number {
  return Math.min(image.height, supporterLogoMaxHeight);
}

export function memberLogoHeight(image: ImageMetadata): number {
  return Math.min(image.height, memberLogoMaxHeight);
}
