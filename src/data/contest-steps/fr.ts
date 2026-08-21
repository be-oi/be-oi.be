import commonAudienceDetails from '../contest-step-details/fr/common-audience.html?raw';
import stepInitialDetails from '../contest-step-details/fr/step-initial.html?raw';
import stepQualifDetails from '../contest-step-details/fr/step-qualif.html?raw';
import stepQuarterDetails from '../contest-step-details/fr/step-quarter.html?raw';
import stepSemiDetails from '../contest-step-details/fr/step-semi.html?raw';
import stepFinalDetails from '../contest-step-details/fr/step-final.html?raw';
import stepInternDetails from '../contest-step-details/fr/step-intern.html?raw';
import { stepImages } from './images';
import type { ContestStep } from './types';

function withAudience(detailsHtml: string) {
  return `${commonAudienceDetails}\n${detailsHtml}`;
}

/** Étapes du parcours pour la page structure 2027 (français). */
export const contestStepsFr: ContestStep[] = [
  {
    id: 'step-initial',
    image: stepImages.initial,
    imageAlt: 'Mascotte mi-robot mi-humain tenant une pièce de puzzle et un composant orange',
    title: 'Épreuve logique',
    shortTitle: 'Épreuve logique',
    teaser: ['Énigmes de logique.', 'Aucun code.'],
    canvasTop: '6%',
    canvasWidth: '80%',
    gridColumn: 1,
    tagline: 'Pas encore de programmation — entièrement facultatif',
    description:
      'Il s’agit de l’ancienne épreuve de qualification (avant 2027), sans les tâches de programmation. Une première approche ludique de la pensée computationnelle à travers des énigmes logiques — pas de programmation, juste la réflexion. Entièrement facultatif\u00A0: vous pouvez la passer ; les scores ne déterminent jamais qui passe à l’étape suivante. Idéal pour les plus jeunes et toute personne curieuse de la résolution de problèmes.',
    tags: [
      { kind: 'duration', label: 'Durée', value: '45 min' },
      { kind: 'timing', label: 'Calendrier', value: 'fin nov.' },
      { kind: 'location', label: 'Lieu', value: 'École / domicile' },
      { kind: 'code', label: 'Code', value: 'Aucun' },
      { kind: 'status', label: 'Statut', value: 'Facultatif' },
    ],
    detailsHtml: withAudience(stepInitialDetails),
    accent: 'primary',
  },
  {
    id: 'step-qualif',
    image: stepImages.qualif,
    imageAlt: 'Mascotte mi-robot mi-humain à côté de panneaux Round 1, 2 et 3',
    title: 'Qualifications',
    shortTitle: 'Qualifications',
    teaser: ['Programmation de base.', 'Courtes épreuves en ligne.'],
    canvasTop: '18%',
    canvasWidth: '100%',
    gridColumn: 3,
    tagline: 'Trois épreuves, une qualification — apprenez en chemin',
    description:
      'Trois épreuves en ligne indépendantes que vous pouvez passer quand vous le souhaitez, une par mois. Chacune vérifie simplement les notions de base pour votre catégorie d’âge — des connaissances dont vous aurez besoin aux étapes suivantes. Réussir une seule épreuve suffit pour se qualifier. Profitez de chaque épreuve pour apprendre. Il n’y a pas de classement\u00A0: il faut atteindre un score cible pour avancer.',
    tags: [
      { kind: 'duration', label: 'Durée', value: '40 min chacune' },
      { kind: 'timing', label: 'Calendrier', value: 'déc, janv, fév' },
      { kind: 'location', label: 'Lieu', value: 'École ou domicile' },
      { kind: 'code', label: 'Code', value: 'Blockly, Python' },
    ],
    detailsHtml: withAudience(stepQualifDetails),
    accent: 'secondary',
  },
  {
    id: 'step-quarter',
    image: stepImages.quarter,
    imageAlt: 'Mascotte mi-robot mi-humain pensant devant un ordinateur portable beOI',
    title: 'Quart de finale',
    shortTitle: 'Quart de finale',
    teaser: ['Premiers problèmes de programmation.'],
    canvasTop: '17%',
    canvasWidth: '100%',
    gridColumn: 5,
    tagline: 'Là où la programmation commence à compter',
    description:
      'Premier vrai concours sur des défis de programmation de base. C’est ici que le code commence vraiment à compter. Une première véritable découverte de la programmation compétitive.',
    tags: [
      { kind: 'duration', label: 'Durée', value: '2 h' },
      { kind: 'timing', label: 'Calendrier', value: 'mars' },
      { kind: 'location', label: 'Lieu', value: 'École / centres régionaux' },
      { kind: 'code', label: 'Code', value: 'Blockly, Python, Java, C++' },
    ],
    detailsHtml: stepQuarterDetails,
    accent: 'secondary',
  },
  {
    id: 'step-semi',
    image: stepImages.semi,
    imageAlt: 'Mascotte mi-robot mi-humain avec des lunettes derrière un ordinateur portable beOI',
    title: 'Demi-finale',
    shortTitle: 'Demi-finale',
    teaser: ['Problèmes plus avancés.'],
    canvasTop: '15%',
    canvasWidth: '86%',
    gridColumn: 6,
    tagline: 'Problèmes plus avancés',
    description:
      'Un concours sur place dans des centres régionaux à travers la Belgique. Des problèmes avancés testent les structures de données, les algorithmes et une implémentation soignée sous pression. Distinguez-vous par vos compétences en résolution de problèmes et en programmation.',
    tags: [
      { kind: 'duration', label: 'Durée', value: '3 h' },
      { kind: 'timing', label: 'Calendrier', value: 'avril' },
      { kind: 'location', label: 'Lieu', value: 'Centres régionaux' },
      { kind: 'code', label: 'Code', value: 'Blockly, Python, Java, C++' },
    ],
    detailsHtml: stepSemiDetails,
    accent: 'tertiary',
  },
  {
    id: 'step-final',
    image: stepImages.final,
    imageAlt: 'Robot bleu et gris brandissant un trophée',
    title: 'Finale',
    shortTitle: 'Finale',
    teaser: ['Concours national.', 'Problèmes les plus difficiles.'],
    canvasTop: '0%',
    canvasWidth: '100%',
    gridColumn: 7,
    tagline: 'Disputez le titre national',
    description:
      'Le concours national ultime avec des problèmes de niveau intermédiaire à très difficile. Affrontez les meilleurs concurrents belges pour le titre national dans votre catégorie d’âge et intégrez le pool national en vue de représenter la Belgique lors de compétitions internationales.',
    tags: [
      { kind: 'duration', label: 'Durée', value: '2× 3 h' },
      { kind: 'timing', label: 'Calendrier', value: 'mai' },
      { kind: 'location', label: 'Lieu', value: 'Lieu national' },
      { kind: 'code', label: 'Code', value: 'Python, C++' },
    ],
    detailsHtml: stepFinalDetails,
    accent: 'tertiary',
  },
  {
    id: 'step-intern',
    image: stepImages.intern,
    imageAlt: 'Robot chevauchant une fusée au-dessus de la Terre',
    title: 'Concours internationaux',
    shortTitle: 'Concours internationaux',
    teaser: ['Représenter la Belgique dans le monde'],
    canvasTop: '15%',
    canvasWidth: '120%',
    gridColumn: 9,
    tagline: 'Représenter la Belgique sur la scène mondiale',
    description:
      'Les meilleurs participants, sur la base de plusieurs concours et d’une formation sur plusieurs années, peuvent être sélectionnés pour représenter la Belgique lors d’olympiades internationales telles que WEOI, EJOI, EGOI et IOI.',
    tags: [
      { kind: 'timing', label: 'Calendrier', value: 'Période estivale' },
      { kind: 'location', label: 'Lieu', value: 'Partout dans le monde' },
      { kind: 'code', label: 'Code', value: 'C++' },
    ],
    detailsHtml: stepInternDetails,
    accent: 'primary',
  },
];
