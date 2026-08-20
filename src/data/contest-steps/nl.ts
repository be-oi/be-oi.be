import commonAudienceDetails from '../contest-step-details/nl/common-audience.html?raw';
import stepInitialDetails from '../contest-step-details/nl/step-initial.html?raw';
import stepQualifDetails from '../contest-step-details/nl/step-qualif.html?raw';
import stepQuarterDetails from '../contest-step-details/nl/step-quarter.html?raw';
import stepSemiDetails from '../contest-step-details/nl/step-semi.html?raw';
import stepFinalDetails from '../contest-step-details/nl/step-final.html?raw';
import stepInternDetails from '../contest-step-details/nl/step-intern.html?raw';
import { stepImages } from './images';
import type { ContestStep } from './types';

function withAudience(detailsHtml: string) {
  return `${commonAudienceDetails}\n${detailsHtml}`;
}

/** Wedstrijdfases voor de Nederlandse 2027-structuurpagina (Vlaams). */
export const contestStepsNl: ContestStep[] = [
  {
    id: 'step-initial',
    image: stepImages.initial,
    imageAlt: 'Pixel-art avonturier op een kampplaats met een kat, rugzak en houten zwaard',
    title: 'Hersenkraker',
    shortTitle: 'Hersenkraker',
    teaser: ['Logica-raadsels.', 'Nog geen code.'],
    canvasTop: '19.625%',
    canvasWidth: '100%',
    gridColumn: 1,
    tagline: 'Nog geen programmeren — volledig optioneel',
    description:
      'Dit is de voormalige kwalificatieronde (vóór 2027), zonder programmeeropgaven. Een luchtige eerste kennismaking met computationeel denken via logica-raadsels — geen programmeren, enkel hersenkracht. Volledig optioneel: je mag deze ronde overslaan; scores bepalen nooit wie doorgaat. Ideaal voor jongere leerlingen en iedereen die nieuwsgierig is naar probleemoplossen.',
    tags: [
      { kind: 'duration', label: 'Duur', value: '45 min' },
      { kind: 'timing', label: 'Timing', value: 'eind nov.' },
      { kind: 'location', label: 'Locatie', value: 'School / thuis' },
      { kind: 'code', label: 'Code', value: 'Geen' },
      { kind: 'status', label: 'Status', value: 'Optioneel' },
    ],
    detailsHtml: withAudience(stepInitialDetails),
    accent: 'primary',
  },
  {
    id: 'step-qualif',
    image: stepImages.qualif,
    imageAlt: 'Pixel-art avonturier die een grasrijk pad met wegwijzers volgt',
    title: 'Kwalificatierondes',
    shortTitle: 'Kwalificatierondes',
    teaser: ['Basis programmeren.', 'Korte online rondes.'],
    canvasTop: '22.625%',
    canvasWidth: '100%',
    gridColumn: 3,
    tagline: 'Drie rondes, één keer slagen — leer onderweg',
    description:
      'Drie onafhankelijke online rondes die je wanneer je wilt kan afleggen, één per maand. Elke ronde toetst eenvoudig de basisconcepten voor jouw leeftijdscategorie — kennis die je nodig hebt in de volgende fases. Slagen in één enkele ronde volstaat om te kwalificeren. Gebruik elke ronde als leerkans. Er is geen rangschikking: je hebt een doelscore nodig om door te gaan.',
    tags: [
      { kind: 'duration', label: 'Duur', value: '40 min per ronde' },
      { kind: 'timing', label: 'Timing', value: 'dec, jan, feb' },
      { kind: 'location', label: 'Locatie', value: 'School of thuis' },
      { kind: 'code', label: 'Code', value: 'Blockly, Python' },
    ],
    detailsHtml: withAudience(stepQualifDetails),
    accent: 'secondary',
  },
  {
    id: 'step-quarter',
    image: stepImages.quarter,
    imageAlt: 'Pixel-art avonturier met pithhelm die een rotsachtige open plek verkent',
    title: 'Kwartfinale',
    shortTitle: 'Kwartfinale',
    teaser: ['Eerste programmeeropgaven.'],
    canvasTop: '11.875%',
    canvasWidth: '100%',
    gridColumn: 5,
    tagline: 'Waar programmeren echt telt',
    description:
      'Eerste echte wedstrijd met basis programmeeropgaven. Hier begint programmeren echt te tellen. Een eerste echte kennismaking met competitive programming.',
    tags: [
      { kind: 'duration', label: 'Duur', value: '2 uur' },
      { kind: 'timing', label: 'Timing', value: 'maart' },
      { kind: 'location', label: 'Locatie', value: 'School / regionale centra' },
      { kind: 'code', label: 'Code', value: 'Blockly, Python, Java, C++' },
    ],
    detailsHtml: stepQuarterDetails,
    accent: 'secondary',
  },
  {
    id: 'step-semi',
    image: stepImages.semi,
    imageAlt: 'Pixel-art ridder in harnas met zwaard op een rotsachtig eiland',
    title: 'Halve finale',
    shortTitle: 'Halve finale',
    teaser: ['Geavanceerdere opgaven.'],
    canvasTop: '4%',
    canvasWidth: '100%',
    gridColumn: 6,
    tagline: 'Geavanceerdere opgaven',
    description:
      'Een wedstrijd op locatie in regionale centra door heel België. Moeilijkere opgaven testen datastructuren, algoritmen en zorgvuldige implementatie onder tijdsdruk. Val op met jouw probleemoplossend en programmeervaardigheden.',
    tags: [
      { kind: 'duration', label: 'Duur', value: '3 uur' },
      { kind: 'timing', label: 'Timing', value: 'april' },
      { kind: 'location', label: 'Locatie', value: 'Regionale centra' },
      { kind: 'code', label: 'Code', value: 'Blockly, Python, Java, C++' },
    ],
    detailsHtml: stepSemiDetails,
    accent: 'tertiary',
  },
  {
    id: 'step-final',
    image: stepImages.final,
    imageAlt: 'Pixel-art ridder met lichtgevend zwaard op een vulkanisch lava-eiland',
    title: 'Finale',
    shortTitle: 'Finale',
    teaser: ['Nationale wedstrijd.', 'Zwaarste opgaven.'],
    canvasTop: '22%',
    canvasWidth: '100%',
    gridColumn: 7,
    tagline: 'Strijd om de nationale titel',
    description:
      'De ultieme nationale wedstrijd met opgaven van gemiddeld tot zeer moeilijk niveau. Concurreer met de beste Belgische deelnemers om de nationale titel in jouw leeftijdscategorie en maak kans op de nationale pool met als doel België te vertegenwoordigen op internationale wedstrijden.',
    tags: [
      { kind: 'duration', label: 'Duur', value: '2× 3 uur' },
      { kind: 'timing', label: 'Timing', value: 'mei' },
      { kind: 'location', label: 'Locatie', value: 'Nationale locatie' },
      { kind: 'code', label: 'Code', value: 'Python, C++' },
    ],
    detailsHtml: stepFinalDetails,
    accent: 'tertiary',
  },
  {
    id: 'step-intern',
    image: stepImages.intern,
    imageAlt: 'Pixel-art raket die van de aarde lanceert richting internationale wedstrijden',
    title: 'Internationale wedstrijden',
    shortTitle: 'Internationale wedstrijden',
    teaser: ['België vertegenwoordigen in de wereld'],
    canvasTop: '25%',
    canvasWidth: '80%',
    gridColumn: 9,
    tagline: 'België vertegenwoordigen op het wereldtoneel',
    description:
      'Topdeelnemers kunnen, op basis van meerdere wedstrijden en training over meerdere jaren, geselecteerd worden om België te vertegenwoordigen op internationale olympiades zoals WEOI, EJOI, EGOI en IOI.',
    tags: [
      { kind: 'timing', label: 'Timing', value: 'Zomerperiode' },
      { kind: 'location', label: 'Locatie', value: 'Overal ter wereld' },
      { kind: 'code', label: 'Code', value: 'C++' },
    ],
    detailsHtml: stepInternDetails,
    accent: 'primary',
  },
];
