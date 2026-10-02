import type { Locale } from '../i18n';
import { posterExplainerDe } from './de';
import { posterExplainerEn } from './en';
import { posterExplainerFr } from './fr';
import { posterExplainerNl } from './nl';
import type { PosterExplainerCopy } from './types';

const copyByLocale: Record<Locale, PosterExplainerCopy> = {
  fr: posterExplainerFr,
  nl: posterExplainerNl,
  en: posterExplainerEn,
  de: posterExplainerDe,
};

/** Page copy for the "Seven Bridges of Königsberg" poster explainer. */
export function getPosterExplainerCopy(lang: Locale): PosterExplainerCopy {
  return copyByLocale[lang] ?? posterExplainerEn;
}

export { getKoenigsbergMapUi, formatTemplate } from './map-ui';
export { eulerCode } from './euler-code';
export {
  degreeRows,
  degreeSum,
  demoWalk,
  graphEdges,
  graphVertices,
  landCardWobble,
  mapBridges,
  mapLandmasses,
  totalBridges,
} from './geometry';
export type {
  BridgeNumber,
  FigureCaption,
  KoenigsbergMapUi,
  LandCardCopy,
  LandId,
  PosterExplainerCopy,
} from './types';
