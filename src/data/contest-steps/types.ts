export type StepAccent = 'primary' | 'secondary' | 'tertiary';

export type StepTagKind =
  | 'duration'
  | 'timing'
  | 'location'
  | 'code'
  | 'format'
  | 'goal'
  | 'rounds'
  | 'focus'
  | 'status';

export interface StepTag {
  kind: StepTagKind;
  label: string;
  value: string;
}

export interface ContestStep {
  id: string;
  image: ImageMetadata;
  imageAlt: string;
  title: string;
  shortTitle: string;
  teaser: string[];
  canvasTop: string;
  canvasWidth: string;
  /** 1-based column index in the contest page timeline’s 9-track CSS grid. */
  gridColumn: number;
  tagline: string;
  description: string;
  tags: StepTag[];
  /** Expanded “show more details” panel — edit the matching HTML file under contest-step-details/. */
  detailsHtml: string;
  accent: StepAccent;
}
