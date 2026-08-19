import commonAudienceDetails from '../contest-step-details/en/common-audience.html?raw';
import stepInitialDetails from '../contest-step-details/en/step-initial.html?raw';
import stepQualifDetails from '../contest-step-details/en/step-qualif.html?raw';
import stepQuarterDetails from '../contest-step-details/en/step-quarter.html?raw';
import stepSemiDetails from '../contest-step-details/en/step-semi.html?raw';
import stepFinalDetails from '../contest-step-details/en/step-final.html?raw';
import stepInternDetails from '../contest-step-details/en/step-intern.html?raw';
import type { ContestStep } from './types';

function withAudience(detailsHtml: string) {
  return `${commonAudienceDetails}\n${detailsHtml}`;
}

/** Contest journey stages for the English 2027 structure page. */
export const contestStepsEn: ContestStep[] = [
  {
    id: 'step-initial',
    image: '/img/steps/step0-initial.png',
    imageAlt: 'Pixel-art adventurer at a campsite with a cat, backpack, and wooden sword',
    title: 'Brain Teaser Round',
    shortTitle: 'Brain Teaser Round',
    teaser: ['Logic puzzles', 'No coding yet'],
    canvasTop: '19.625%',
    canvasWidth: '100%',
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
    image: '/img/steps/step1-qualif.png',
    imageAlt: 'Pixel-art adventurer progressing along a grassy path with signposts',
    title: 'Qualification Rounds',
    shortTitle: 'Qualification Rounds',
    teaser: ['Basic programming.', 'Short online rounds.'],
    canvasTop: '22.625%',
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
    image: '/img/steps/step2-quarter.png',
    imageAlt: 'Pixel-art adventurer with pith helmet exploring a rocky clearing',
    title: 'Quarter-final',
    shortTitle: 'Quarter-final',
    teaser: ['First coding stage.'],
    canvasTop: '11.875%',
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
    image: '/img/steps/step3-semi.png',
    imageAlt: 'Pixel-art armored knight with sword on a rocky island',
    title: 'Semi-final',
    shortTitle: 'Semi-final',
    teaser: ['On-site contest.'],
    canvasTop: '4%',
    canvasWidth: '100%',
    gridColumn: 6,
    tagline: 'Be among the best in your age group',
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
    image: '/img/steps/step4-final.png',
    imageAlt: 'Pixel-art knight with glowing sword on a volcanic lava island',
    title: 'Final',
    shortTitle: 'Final',
    teaser: ['National contest.', 'Hardest problems.'],
    canvasTop: '22%',
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
    image: '/img/steps/step5-intern.png',
    imageAlt: 'Pixel-art rocket launching from Earth toward international contests',
    title: 'International Contests',
    shortTitle: 'International Contests',
    teaser: ['Represent Belgium in the world'],
    canvasTop: '25%',
    canvasWidth: '80%',
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
