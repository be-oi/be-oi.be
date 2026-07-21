import stepInitialDetails from './contest-step-details/step-initial.html?raw';
import stepQualifDetails from './contest-step-details/step-qualif.html?raw';
import stepQuarterDetails from './contest-step-details/step-quarter.html?raw';
import stepSemiDetails from './contest-step-details/step-semi.html?raw';
import stepFinalDetails from './contest-step-details/step-final.html?raw';
import stepInternDetails from './contest-step-details/step-intern.html?raw';

export type StepAccent = 'primary' | 'secondary' | 'tertiary' | 'error';

export interface StepTag {
  label: string;
  value: string;
}

export interface ContestStep {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  shortTitle: string;
  teaser: string[];
  canvasTop: string;
  canvasWidth: string;
  tagline: string;
  description: string;
  tags: StepTag[];
  /** Expanded “show more details” panel — edit the matching HTML file under contest-step-details/. */
  detailsHtml: string;
  accent: StepAccent;
}

/** Contest journey stages for the English 2027 structure page. */
export const contestSteps: ContestStep[] = [
  {
    id: 'step-initial',
    image: '/img/steps/step0-initial.png',
    imageAlt: 'Pixel-art adventurer at a campsite with a cat, backpack, and wooden sword',
    title: 'Logic Challenge',
    shortTitle: 'Logic Challenge',
    teaser: ['Logic puzzles', 'No coding yet'],
    canvasTop: '15.625%',
    canvasWidth: '100%',
    tagline: 'No coding yet — just logic',
    description:
      'This is the former qualification round (before 2027), without the programming tasks. A light-hearted first touch with computational thinking through logic puzzles. No programming required yet — just brain power! It is just for fun and does not count toward qualifying. Perfect for younger students and anyone curious about problem-solving.',
    tags: [
      { label: 'Duration', value: '45 min' },
      { label: 'Timing', value: 'end-Nov' },
      { label: 'Location', value: 'School / Home' },
      { label: 'Code', value: 'None' },
    ],
    detailsHtml: stepInitialDetails,
    accent: 'primary',
  },
  {
    id: 'step-qualif',
    image: '/img/steps/step1-qualif.png',
    imageAlt: 'Pixel-art adventurer progressing along a grassy path with signposts',
    title: 'Qualification Rounds',
    shortTitle: 'Qualification Rounds',
    teaser: ['Basic programming.', 'Short online rounds.'],
    canvasTop: '15.625%',
    canvasWidth: '100%',
    tagline: 'Three rounds, one pass — learn as you go',
    description:
      'Three independent online rounds you can take whenever you want. Each one simply checks basic concepts for your age group — knowledge you will need in the next stages. Passing a single round is enough to qualify. Use every round as a chance to learn.',
    tags: [
      { label: 'Duration', value: '40 min each' },
      { label: 'Timing', value: 'Dec, Jan, Feb' },
      { label: 'Location', value: 'School / Home' },
      { label: 'Code', value: 'Blockly, Scratch, Python' },
    ],
    detailsHtml: stepQualifDetails,
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
    tagline: 'Where coding starts to matter',
    description:
      'First actual contest on basic programming challenges. This is where coding really starts to matter.',
    tags: [
      { label: 'Duration', value: '2 hours' },
      { label: 'Timing', value: 'March' },
      { label: 'Location', value: 'School / Home' },
      { label: 'Code', value: 'Blockly, Scratch, Python, Java, C++' },
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
    tagline: 'Be among the best in your age group',
    description:
      'An in-person contest in a trusted school or at regional centers across Belgium. Advanced problems test data structures, algorithms, and careful implementation under time pressure. Just be among the best in your age group.',
    tags: [
      { label: 'Duration', value: '3 hours' },
      { label: 'Timing', value: 'April' },
      { label: 'Location', value: 'School / Regional centers' },
      { label: 'Code', value: 'Blockly, Scratch, Python, Java, C++' },
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
    tagline: 'Compete for the national title',
    description:
      'The ultimate national contest with mid-level to very hard problems. Compete with the best Belgian competitors for the national title in your age group.',
    tags: [
      { label: 'Duration', value: '2x 3 hours' },
      { label: 'Timing', value: 'May' },
      { label: 'Location', value: 'National venue' },
      { label: 'Code', value: 'Python, C++' },
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
    tagline: 'Represent Belgium on the world stage',
    description:
      'Top contestants, based on several contests and training over several years, may be selected to represent Belgium at international olympiads such as WEOI, EJOI, EGOI, and IOI.',
    tags: [
      { label: 'Timing', value: 'Around the Summer' },
      { label: 'Location', value: 'Around the world' },
      { label: 'Code', value: 'C++' },
    ],
    detailsHtml: stepInternDetails,
    accent: 'error',
  },
];
