import type { Locale } from '../i18n';
import type { ContestStep } from './types';
import { contestStepsEn } from './en';
import { contestStepsNl } from './nl';

const contestStepsByLocale: Record<Locale, ContestStep[]> = {
  en: contestStepsEn,
  fr: contestStepsEn, // French pages not shipped yet — fallback for type completeness
  nl: contestStepsNl,
};

export type { ContestStep, StepAccent, StepTag, StepTagKind } from './types';

/** Contest journey stages for the 2027 structure page. */
export function getContestSteps(locale: Locale): ContestStep[] {
  return contestStepsByLocale[locale] ?? contestStepsEn;
}

/** @deprecated Use getContestSteps('en') — kept for existing imports during migration. */
export const contestSteps = contestStepsEn;
