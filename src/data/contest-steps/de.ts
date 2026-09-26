import commonAudienceDetails from '../contest-step-details/de/common-audience.html?raw';
import stepInitialDetails from '../contest-step-details/de/step-initial.html?raw';
import stepQualifDetails from '../contest-step-details/de/step-qualif.html?raw';
import stepQuarterDetails from '../contest-step-details/de/step-quarter.html?raw';
import stepSemiDetails from '../contest-step-details/de/step-semi.html?raw';
import stepFinalDetails from '../contest-step-details/de/step-final.html?raw';
import { stepImages } from './images';
import type { ContestStep } from './types';

function withAudience(detailsHtml: string) {
  return `${commonAudienceDetails}\n${detailsHtml}`;
}

/** Contest journey stages for the German 2027 structure page. */
export const contestStepsDe: ContestStep[] = [
  {
    id: 'step-initial',
    image: stepImages.initial,
    imageAlt: 'Halb Roboter halb Mensch-Maskottchen mit einem Puzzleteil und orangem Bauteil',
    title: 'Denksport-Runde',
    shortTitle: 'Denksport-Runde',
    teaser: ['Logikrätsel.', 'Noch kein Code.'],
    canvasTop: '6%',
    canvasWidth: '80%',
    gridColumn: 1,
    tagline: 'Noch kein Programmieren — völlig optional',
    description:
      'Das ist die frühere Qualifikationsrunde (vor 2027), ohne Programmieraufgaben. Eine lockere erste Berührung mit computationalem Denken durch Logikrätsel — kein Programmieren, nur Denkvermögen. Völlig optional: du darfst sie überspringen; Ergebnisse entscheiden nie, wer weiterkommt. Ideal für jüngere Schülerinnen und Schüler und alle, die neugierig auf Problemlösen sind.',
    tags: [
      { kind: 'duration', label: 'Dauer', value: '45 Min.' },
      { kind: 'timing', label: 'Zeitpunkt', value: 'Ende Nov.' },
      { kind: 'location', label: 'Ort', value: 'Schule / Zuhause' },
      { kind: 'code', label: 'Code', value: 'Keiner' },
      { kind: 'status', label: 'Status', value: 'Optional' },
    ],
    detailsHtml: withAudience(stepInitialDetails),
    accent: 'primary',
  },
  {
    id: 'step-qualif',
    image: stepImages.qualif,
    imageAlt: 'Halb Roboter halb Mensch-Maskottchen neben Wegweisern Round 1, 2 und 3',
    title: 'Qualifikationsrunden',
    shortTitle: 'Qualifikationsrunden',
    teaser: ['Basisprogrammieren.', 'Kurze Online-Runden.'],
    canvasTop: '18%',
    canvasWidth: '100%',
    gridColumn: 3,
    tagline: 'Drei Runden, ein Bestehen — unterwegs lernen',
    description:
      'Drei unabhängige Online-Runden, die du nehmen kannst, wann du willst, eine pro Monat. Jede prüft einfach Grundkonzepte für deine Altersgruppe — Wissen, das du in den nächsten Phasen brauchst. Eine bestandene Runde reicht zur Qualifikation. Nutze jede Runde als Lernchance. Es gibt keine Rangliste: du brauchst eine Zielpunktzahl, um weiterzukommen.',
    tags: [
      { kind: 'duration', label: 'Dauer', value: 'je 40 Min.' },
      { kind: 'timing', label: 'Zeitpunkt', value: 'Dez., Jan., Feb.' },
      { kind: 'location', label: 'Ort', value: 'Schule oder Zuhause' },
      { kind: 'code', label: 'Code', value: 'Blockly, Python' },
    ],
    detailsHtml: withAudience(stepQualifDetails),
    accent: 'secondary',
  },
  {
    id: 'step-quarter',
    image: stepImages.quarter,
    imageAlt: 'Halb Roboter halb Mensch-Maskottchen denkt an einem beOI-Laptop',
    title: 'Viertelfinale',
    shortTitle: 'Viertelfinale',
    teaser: ['Erste Programmieraufgaben.'],
    canvasTop: '17%',
    canvasWidth: '100%',
    gridColumn: 5,
    tagline: 'Wo Programmieren zählt',
    description:
      'Erster echter Wettbewerb mit grundlegenden Programmieraufgaben. Hier beginnt Programmieren wirklich zu zählen. Ein erster echter Vorgeschmack auf Wettbewerbsprogrammieren.',
    tags: [
      { kind: 'duration', label: 'Dauer', value: '2 Stunden' },
      { kind: 'timing', label: 'Zeitpunkt', value: 'März' },
      { kind: 'location', label: 'Ort', value: 'Schule / regionale Zentren' },
      { kind: 'code', label: 'Code', value: 'Blockly, Python, Java, C++' },
    ],
    detailsHtml: stepQuarterDetails,
    accent: 'secondary',
  },
  {
    id: 'step-semi',
    image: stepImages.semi,
    imageAlt: 'Halb Roboter halb Mensch-Maskottchen mit Brille hinter einem beOI-Laptop',
    title: 'Halbfinale',
    shortTitle: 'Halbfinale',
    teaser: ['Anspruchsvollere Aufgaben.'],
    canvasTop: '15%',
    canvasWidth: '86%',
    gridColumn: 6,
    tagline: 'Anspruchsvollere Aufgaben',
    description:
      'Ein Präsenzwettbewerb in regionalen Zentren in ganz Belgien. Fortgeschrittene Aufgaben prüfen Datenstrukturen, Algorithmen und sorgfältige Implementierung unter Zeitdruck. Zeige dich mit deinen Problemlöse- und Programmierfähigkeiten.',
    tags: [
      { kind: 'duration', label: 'Dauer', value: '3 Stunden' },
      { kind: 'timing', label: 'Zeitpunkt', value: 'April' },
      { kind: 'location', label: 'Ort', value: 'Regionale Zentren' },
      { kind: 'code', label: 'Code', value: 'Blockly, Python, Java, C++' },
    ],
    detailsHtml: stepSemiDetails,
    accent: 'tertiary',
  },
  {
    id: 'step-final',
    image: stepImages.final,
    imageAlt: 'Blauer und grauer Roboter hält eine Trophäe hoch',
    title: 'Finale',
    shortTitle: 'Finale',
    teaser: ['Nationaler Wettbewerb.', 'Schwerste Aufgaben.'],
    canvasTop: '0%',
    canvasWidth: '100%',
    gridColumn: 7,
    tagline: 'Um den nationalen Titel kämpfen',
    description:
      'Der ultimative nationale Wettbewerb mit mittelschweren bis sehr schweren Aufgaben. Miss dich mit den besten belgischen Teilnehmenden um den nationalen Titel in deiner Altersgruppe.',
    tags: [
      { kind: 'duration', label: 'Dauer', value: '2× 3 Stunden' },
      { kind: 'timing', label: 'Zeitpunkt', value: 'Mai' },
      { kind: 'location', label: 'Ort', value: 'Nationaler Austragungsort' },
      { kind: 'code', label: 'Code', value: 'Python, C++' },
    ],
    detailsHtml: stepFinalDetails,
    accent: 'tertiary',
  },
  {
    id: 'step-intern',
    image: stepImages.intern,
    imageAlt: 'Roboter reitet auf einer Rakete über der Erde',
    title: 'Internationale Wettbewerbe',
    shortTitle: 'Internationale Wettbewerbe',
    teaser: ['Belgien in der Welt vertreten'],
    canvasTop: '15%',
    canvasWidth: '120%',
    gridColumn: 9,
    tagline: 'Belgien auf der Weltbühne vertreten',
    description:
      'Top-Teilnehmende können aufgrund mehrerer Wettbewerbe und mehrjährigen Trainings ausgewählt werden, Belgien bei internationalen Olympiaden wie WEOI, EJOI, EGOI und IOI zu vertreten.',
    tags: [
      { kind: 'timing', label: 'Zeitpunkt', value: 'Um den Sommer' },
      { kind: 'location', label: 'Ort', value: 'Weltweit' },
      { kind: 'code', label: 'Code', value: 'C++' },
    ],
    cta: {
      href: '/de/competitive-programming/',
      label: 'Mehr zur Nationalmannschaft',
    },
    accent: 'primary',
  },
];
