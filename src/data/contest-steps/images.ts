import type { ImageMetadata } from 'astro';
import step0Initial from '../../assets/steps/step0-initial.svg';
import step1Qualif from '../../assets/steps/step1-qualif.svg';
import step2Quarter from '../../assets/steps/step2-quarter.svg';
import step3Semi from '../../assets/steps/step3-semi.svg';
import step4Final from '../../assets/steps/step4-final.svg';
import step5Intern from '../../assets/steps/step5-intern.svg';

/** Shared step artwork metadata (SVG imports usable with astro:assets Image). */
export type StepImage = ImageMetadata;

/** Shared step artwork, imported once so every locale points at the same assets. */
export const stepImages = {
  initial: step0Initial,
  qualif: step1Qualif,
  quarter: step2Quarter,
  semi: step3Semi,
  final: step4Final,
  intern: step5Intern,
} as const;
