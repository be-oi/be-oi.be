import step0Initial from '../../assets/steps/step0-initial.svg?url';
import step1Qualif from '../../assets/steps/step1-qualif.svg?url';
import step2Quarter from '../../assets/steps/step2-quarter.svg?url';
import step3Semi from '../../assets/steps/step3-semi.svg?url';
import step4Final from '../../assets/steps/step4-final.svg?url';
import step5Intern from '../../assets/steps/step5-intern.svg?url';

/** Raster-independent step artwork (SVG URLs + intrinsic size from viewBox). */
export interface StepImage {
  src: string;
  width: number;
  height: number;
}

/** Shared step artwork, imported once so every locale points at the same assets. */
export const stepImages = {
  initial: { src: step0Initial, width: 137, height: 180 } satisfies StepImage,
  qualif: { src: step1Qualif, width: 334, height: 315 } satisfies StepImage,
  quarter: { src: step2Quarter, width: 300, height: 298 } satisfies StepImage,
  semi: { src: step3Semi, width: 218, height: 242 } satisfies StepImage,
  final: { src: step4Final, width: 268, height: 301 } satisfies StepImage,
  intern: { src: step5Intern, width: 1183, height: 843 } satisfies StepImage,
} as const;
