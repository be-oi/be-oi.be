import type { Locale } from '../i18n';
import type { ContestStep } from './types';
import { contestStepsEn } from './en';
import { contestStepsFr } from './fr';
import { contestStepsNl } from './nl';

const contestStepsByLocale: Record<Locale, ContestStep[]> = {
  en: contestStepsEn,
  fr: contestStepsFr,
  nl: contestStepsNl,
};

export type { ContestStep, StepAccent, StepTag, StepTagKind } from './types';

/** Contest journey stages for the 2027 structure page. */
export function getContestSteps(locale: Locale): ContestStep[] {
  return contestStepsByLocale[locale] ?? contestStepsEn;
}
