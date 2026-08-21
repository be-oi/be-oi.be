import commonAudienceDetails from '../contest-step-details/en/common-audience.html?raw';
import stepInitialDetails from '../contest-step-details/en/step-initial.html?raw';
import stepQualifDetails from '../contest-step-details/en/step-qualif.html?raw';
import stepQuarterDetails from '../contest-step-details/en/step-quarter.html?raw';
import stepSemiDetails from '../contest-step-details/en/step-semi.html?raw';
import stepFinalDetails from '../contest-step-details/en/step-final.html?raw';
import stepInternDetails from '../contest-step-details/en/step-intern.html?raw';
import { stepImages } from './images';
import type { ContestStep } from './types';

function withAudience(detailsHtml: string) {
  return `${commonAudienceDetails}\n${detailsHtml}`;
}

/** Contest journey stages for the English 2027 structure page. */
export const contestStepsEn: ContestStep[] = [
  {
    id: 'step-initial',
    image: stepImages.initial,
    imageAlt: 'Half-robot half-human mascot holding a puzzle piece and an orange component',
    title: 'Brain Teaser Round',
    shortTitle: 'Brain Teaser Round',
    teaser: ['Logic puzzles.', 'No coding yet.'],
    canvasTop: '6%',
    canvasWidth: '80%',
    gridColumn: 1,
    tagline: 'No coding yet — entirely optional',
    description:
      'This is the former qualification round (before 2027), without the programming tasks. A light-hearted first touch with computational thinking through logic puzzles — no programming, just brain power. Entirely optional: you may skip it; scores never decide who advances. Perfect for younger students and anyone curious about problem-solving.',
    tags: [
      { kind: 'duration', label: 'Duration', value: '45 min' },
      { kind: 'timing', label: 'Timing', value: 'end-Nov' },
      { kind: 'location', label: 'Location', value: 'School / Home' },
      { kind: 'code', label: 'Code', value: 'None' },
      { kind: 'status', label: 'Status', value: 'Optional' },
    ],
    detailsHtml: withAudience(stepInitialDetails),
    accent: 'primary',
  },
  {
    id: 'step-qualif',
    image: stepImages.qualif,
    imageAlt: 'Half-robot half-human mascot beside Round 1, 2 and 3 signposts',
    title: 'Qualification Rounds',
    shortTitle: 'Qualification Rounds',
    teaser: ['Basic programming.', 'Short online rounds.'],
    canvasTop: '18%',
    canvasWidth: '100%',
    gridColumn: 3,
    tagline: 'Three rounds, one pass — learn as you go',
    description:
      'Three independent online rounds you can take whenever you want, one per month. Each one simply checks basic concepts for your age group — knowledge you will need in the next stages. Passing a single round is enough to qualify. Use every round as a chance to learn. There is no ranking: you need a target score to advance.',
    tags: [
      { kind: 'duration', label: 'Duration', value: '40 min each' },
      { kind: 'timing', label: 'Timing', value: 'Dec, Jan, Feb' },
      { kind: 'location', label: 'Location', value: 'School or Home' },
      { kind: 'code', label: 'Code', value: 'Blockly, Python' },
    ],
    detailsHtml: withAudience(stepQualifDetails),
    accent: 'secondary',
  },
  {
    id: 'step-quarter',
    image: stepImages.quarter,
    imageAlt: 'Half-robot half-human mascot thinking at a beOI laptop',
    title: 'Quarter-final',
    shortTitle: 'Quarter-final',
    teaser: ['First Programming Tasks.'],
    canvasTop: '17%',
    canvasWidth: '100%',
    gridColumn: 5,
    tagline: 'Where coding starts to matter',
    description:
      'First actual contest on basic programming challenges. This is where coding really starts to matter. A first real taste of competitive programming.',
    tags: [
      { kind: 'duration', label: 'Duration', value: '2 hours' },
      { kind: 'timing', label: 'Timing', value: 'March' },
      { kind: 'location', label: 'Location', value: 'School / Regional centers' },
      { kind: 'code', label: 'Code', value: 'Blockly, Python, Java, C++' },
    ],
    detailsHtml: stepQuarterDetails,
    accent: 'secondary',
  },
  {
    id: 'step-semi',
    image: stepImages.semi,
    imageAlt: 'Half-robot half-human mascot with glasses behind a beOI laptop',
    title: 'Semi-final',
    shortTitle: 'Semi-final',
    teaser: ['More advanced tasks.'],
    canvasTop: '15%',
    canvasWidth: '86%',
    gridColumn: 6,
    tagline: 'More advanced tasks',
    description:
      'An in-person contest at regional centers across Belgium. Advanced problems test data structures, algorithms, and careful implementation under time pressure. Stand out with your problem-solving and programming skills.',
    tags: [
      { kind: 'duration', label: 'Duration', value: '3 hours' },
      { kind: 'timing', label: 'Timing', value: 'April' },
      { kind: 'location', label: 'Location', value: 'Regional centers' },
      { kind: 'code', label: 'Code', value: 'Blockly, Python, Java, C++' },
    ],
    detailsHtml: stepSemiDetails,
    accent: 'tertiary',
  },
  {
    id: 'step-final',
    image: stepImages.final,
    imageAlt: 'Blue and grey robot holding up a trophy',
    title: 'Final',
    shortTitle: 'Final',
    teaser: ['National contest.', 'Hardest problems.'],
    canvasTop: '0%',
    canvasWidth: '100%',
    gridColumn: 7,
    tagline: 'Compete for the national title',
    description:
      'The ultimate national contest with mid-level to very hard problems. Compete with the best Belgian competitors for the national title in your age group and make your way to the national pool with the aim of representing Belgium in international competitions.',
    tags: [
      { kind: 'duration', label: 'Duration', value: '2x 3 hours' },
      { kind: 'timing', label: 'Timing', value: 'May' },
      { kind: 'location', label: 'Location', value: 'National venue' },
      { kind: 'code', label: 'Code', value: 'Python, C++' },
    ],
    detailsHtml: stepFinalDetails,
    accent: 'tertiary',
  },
  {
    id: 'step-intern',
    image: stepImages.intern,
    imageAlt: 'Robot riding a rocket above Earth',
    title: 'International Contests',
    shortTitle: 'International Contests',
    teaser: ['Represent Belgium in the world'],
    canvasTop: '15%',
    canvasWidth: '120%',
    gridColumn: 9,
    tagline: 'Represent Belgium on the world stage',
    description:
      'Top contestants, based on several contests and training over several years, may be selected to represent Belgium at international olympiads such as WEOI, EJOI, EGOI, and IOI.',
    tags: [
      { kind: 'timing', label: 'Timing', value: 'Around summer' },
      { kind: 'location', label: 'Location', value: 'Around the world' },
      { kind: 'code', label: 'Code', value: 'C++' },
    ],
    detailsHtml: stepInternDetails,
    accent: 'primary',
  },
];
