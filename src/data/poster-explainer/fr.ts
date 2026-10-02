import type { PosterExplainerCopy } from './types';

export const posterExplainerFr: PosterExplainerCopy = {
  lang: 'fr',

  meta: {
    title: 'Les sept ponts de Königsberg – l’affiche beOI expliquée',
    description:
      'L’énigme de l’affiche beOI 2026–2027\u00a0: pouvez-vous traverser une seule fois chacun des sept ponts de Königsberg et terminer là où vous avez commencé\u00a0? Essayez, puis découvrez comment Leonhard Euler a raisonné en 1736.',
  },

  homeHref: '/fr/',
  competitiveProgrammingHref: '/fr/competitive-programming/',
  labHref: 'https://lab.be-oi.be/fr/',
  labOpensNewTab: ' (s’ouvre dans un nouvel onglet)',

  header: {
    eyebrow: 'L’énigme de l’affiche 2026–2027',
    title: 'Les sept ponts de Königsberg',
    introHtml:
      'Pouvez-vous tracer une boucle continue qui traverse chacun des 7 ponts exactement une fois, sans jamais revenir sur vos pas&nbsp;? Les habitants de Königsberg ont essayé pendant des années. En 1736, Leonhard Euler s’y est penché de plus près — et a trouvé une manière étonnamment courte de trancher la question.',
  },

  poster: {
    label: 'Télécharger l’affiche beOI 2026–2027 (PDF)',
    cta: 'Télécharger l’affiche',
    caption: 'Format A2 · PDF prêt à imprimer',
    alsoIn: 'Autres langues\u00a0:',
  },

  landNames: {
    A: 'Rive nord',
    B: 'Île centrale',
    C: 'Île orientale',
    D: 'Rive sud',
  },

  problem: {
    heading: 'Le problème',
    introHtml:
      'Königsberg, dans ce qui était alors la Prusse (aujourd’hui Kaliningrad, en Russie), était bâtie sur les deux rives de la rivière Pregel. Au centre de la ville, la rivière se divisait autour de deux îles&nbsp;: une île centrale, le Kneiphof, et une seconde île à l’est. Sept ponts reliaient ces quatre morceaux de terre&nbsp;:',
    bridgeList: [
      'deux ponts entre la rive nord et l’île centrale\u00a0;',
      'deux ponts entre l’île centrale et la rive sud\u00a0;',
      'un pont entre les deux îles\u00a0;',
      'un pont entre l’île orientale et chacune des rives.',
    ],
    figure: {
      label: 'Figure 1.',
      captionHtml:
        'Königsberg en 1736&nbsp;: quatre morceaux de terre reliés par sept ponts. Essayez la promenade vous-même, ou regardez un essai qui se retrouve bloqué.',
    },
    outroHtml:
      'Essayez ci-dessus&nbsp;: les habitants auraient cherché une promenade qui traverse chaque pont exactement une fois et, dans la version de notre affiche, se termine là où elle a commencé. Personne n’en a trouvé. Ne pas trouver de parcours ne prouve pas qu’il n’en existe pas, et c’est là qu’Euler est intervenu.',
  },

  answer: {
    heading: 'Alors… est-ce possible\u00a0?',
    noHtml:
      '<strong>Non&nbsp;!</strong> Et il n’est pas nécessaire d’essayer tous les parcours pour en être sûr. Voici l’astuce.',
    ruleHtml:
      '<strong>La règle de l’entrée et de la sortie.</strong> Chaque fois que vous passez <em>par</em> un morceau de terre, vous y arrivez par un pont et vous en repartez par un autre. Les ponts de ce morceau de terre sont donc utilisés par paires&nbsp;: un pour entrer, un pour sortir.',
    evenHtml:
      'Si vous devez terminer là où vous avez commencé, <em>chaque</em> morceau de terre doit avoir un nombre pair de ponts (2, 4, 6…).',
    countHtml: '<strong>Comptez-les&nbsp;:</strong>',
    landCardsAria: 'Nombre de ponts pour chaque morceau de terre',
    landCards: [
      { id: 'A', name: 'Rive nord', bridges: 3, leftover: '1 paire + 1 en trop' },
      { id: 'B', name: 'Kneiphof', bridges: 5, leftover: '2 paires + 1 en trop' },
      { id: 'C', name: 'Île orientale', bridges: 3, leftover: '1 paire + 1 en trop' },
      { id: 'D', name: 'Rive sud', bridges: 3, leftover: '1 paire + 1 en trop' },
    ],
    bridgesWord: 'ponts',
    oddLabel: 'impair',
    conclusionHtml:
      'Les quatre ont un nombre impair. Il reste toujours un pont en trop, donc la boucle est impossible. Leonhard Euler a trouvé cette astuce en 1736.',
    olympiadNoteHtml:
      'Raisonner ainsi — trouver une règle simple plutôt que tout essayer — c’est exactement l’esprit de l’Olympiade belge d’Informatique.',
  },

  dangerZone: {
    label: 'Zone dangereuse',
    title: 'Je veux tout savoir sur ce problème grâce à la théorie des graphes',
    subtitle: 'Preuves, théorèmes et algorithmes en vue.',
    warningTitle: 'Attention — hors programme',
    warningText:
      'Ceci est entièrement hors programme pour les épreuves de qualification, le quart de finale et la demi-finale de l’Olympiade belge d’Informatique. Vous n’en avez pas besoin pour bien réussir.',
    cpBefore: 'Si ce genre de sujet vous plaît, jetez un œil à la',
    cpLink: 'programmation compétitive',
    cpAfter: '.',
  },

  modelling: {
    heading: 'Modélisation\u00a0: de la carte au graphe',
    introHtml:
      'Euler a remarqué que presque tout ce qui figure sur la carte est sans importance. La forme des îles, la longueur des ponts et le tracé des rues ne peuvent pas influencer la réponse. Une seule chose compte&nbsp;: quels morceaux de terre chaque pont relie.',
    graphHtml:
      'Écartons donc la carte. Remplaçons chaque morceau de terre par un point, appelé <strong>sommet</strong>, et chaque pont par un trait entre deux sommets, appelé <strong>arête</strong>. On obtient un <strong>graphe</strong> <span class="nowrap"><var>G</var> = (<var>V</var>, <var>E</var>)</span> à quatre sommets et sept arêtes.',
    graphFigure: {
      svgTitle: 'Les ponts de Königsberg sous forme de multigraphe',
      svgDesc:
        'Quatre sommets\u00a0: A la rive nord en haut, B l’île centrale à gauche, C l’île orientale à droite, D la rive sud en bas. Sept arêtes\u00a0: 1 et 2 relient A et B, 3 et 4 relient B et D, 5 relie A et C, 6 relie B et C, 7 relie C et D.',
      label: 'Figure 2.',
      captionHtml:
        'Königsberg sous forme de graphe. Sommets&nbsp;: A la rive nord, B l’île centrale, C l’île orientale, D la rive sud. Les arêtes 1–2 relient A et B, 3–4 relient B et D, 5 relie A et C, 6 relie B et C, 7 relie C et D. Comparez avec la carte de la Figure&nbsp;1&nbsp;: mêmes lettres, mêmes numéros de ponts.',
    },
    multigraphHtml:
      'Certaines paires de sommets sont reliées par deux arêtes&nbsp;: A–B et B–D. Un graphe qui autorise de telles arêtes parallèles s’appelle un <strong>multigraphe</strong>. Dans ce modèle, l’énigme devient une question purement sur <var>G</var>&nbsp;: existe-t-il une marche fermée qui utilise chaque arête exactement une fois&nbsp;? Une telle marche s’appelle un <strong>cycle eulérien</strong>. Un <strong>chemin eulérien</strong> utilise lui aussi chaque arête exactement une fois, mais peut se terminer en un sommet différent de celui de départ.',
  },

  degrees: {
    heading: 'Les degrés',
    introHtml:
      'Le <strong>degré</strong> deg(<var>v</var>) d’un sommet <var>v</var> est le nombre d’extrémités d’arêtes qui le touchent. De façon équivalente, c’est le nombre de ponts qui partent de ce morceau de terre.',
    caption: 'Degré de chaque sommet de la Figure 2',
    headers: {
      vertex: 'Sommet',
      landmass: 'Morceau de terre',
      bridges: 'Ponts',
      degree: 'Degré',
    },
    oddLabel: '(impair)',
    sumLabel: 'Somme des degrés',
    handshakeHtml:
      'Pour vérifier, utilisons le <strong>lemme des poignées de main</strong>. Chaque arête a exactement deux extrémités, et chaque extrémité ajoute 1 au degré d’un sommet. Donc, pour tout graphe,',
    handshakeMathHtml:
      '<span class="nowrap">∑<sub><var>v</var> ∈ <var>V</var></sub> deg(<var>v</var>) = 2 |<var>E</var>|</span>,<br />et ici <span class="nowrap">3 + 5 + 3 + 3 = 14 = 2 × 7.</span>',
    consequenceHtml:
      'Une conséquence&nbsp;: la somme de tous les degrés est paire, donc tout graphe a un nombre pair de sommets de degré impair.',
  },

  invariant: {
    heading: 'L’invariant',
    walkHtml:
      'Supposons qu’une marche utilise chaque arête exactement une fois. Considérons un sommet <var>v</var> qui n’est ni son départ ni son arrivée. Chaque fois que la marche arrive en <var>v</var> par une arête, elle doit repartir par une autre arête, non utilisée. Les arêtes en <var>v</var> sont donc utilisées par paires, une qui entre et une qui sort. Comme toutes les arêtes sont utilisées, toutes les arêtes en <var>v</var> sont appariées, et deg(<var>v</var>) est pair.',
    endpointsHtml:
      'Seules les deux extrémités de la marche ont chacune une arête non appariée&nbsp;: la première arête qui quitte le départ et la dernière qui arrive à l’arrivée. Si la marche est fermée, le départ et l’arrivée sont le même sommet, et ces deux arêtes forment elles aussi une paire. La parité du degré est un invariant qu’aucun parcours astucieux ne peut contourner.',
    theorem: {
      title: 'Théorème d’Euler',
      introHtml:
        'Soit <var>G</var> un multigraphe connexe (en ignorant les sommets sans arêtes).',
      circuitHtml:
        '<var>G</var> possède un <strong>cycle eulérien</strong> si et seulement si tous ses sommets sont de degré pair.',
      pathHtml:
        '<var>G</var> possède un <strong>chemin eulérien</strong> si et seulement s’il a 0 ou 2 sommets de degré impair. Avec 2, tout chemin de ce type commence à l’un des sommets impairs et se termine à l’autre.',
    },
    converseHtml:
      'L’argument ci-dessus démontre le sens «&nbsp;seulement si&nbsp;», ce qui suffit pour l’énigme. Euler a énoncé la réciproque sans preuve. Carl Hierholzer l’a démontrée en 1873 en donnant une construction.',
    konigsbergHtml:
      'Königsberg a <strong>quatre</strong> sommets de degré impair. Cela exclut un cycle eulérien, qui n’en admet aucun. Cela exclut aussi un chemin eulérien, qui en admet au plus deux. La boucle demandée sur l’affiche n’existe donc pas, pas plus que n’importe quel parcours, fermé ou ouvert, qui traverse chaque pont exactement une fois.',
  },

  informatics: {
    heading: 'Pourquoi c’est important en informatique',
    introHtml:
      'Le théorème d’Euler remplace une recherche par un comptage. Inutile d’essayer des parcours&nbsp;: il suffit de compter les degrés&nbsp;:',
    complexityHtml:
      'Cela s’exécute en temps <span class="nowrap"><var>O</var>(<var>V</var> + <var>E</var>)</span>&nbsp;: un passage sur les arêtes, puis un sur les sommets. Une vérification complète contrôle aussi que toutes les arêtes appartiennent à une seule composante connexe, avec un parcours en largeur ou en profondeur, lui aussi en <span class="nowrap"><var>O</var>(<var>V</var> + <var>E</var>)</span>. Une recherche naïve qui essaie tous les ordres possibles des arêtes peut examiner jusqu’à <var>E</var>&nbsp;! séquences. Cela fait 7&nbsp;! = 5&nbsp;040 pour Königsberg, mais <span class="nowrap">20&nbsp;! ≈ 2,4 × 10<sup>18</sup></span> pour un graphe de seulement 20 arêtes.',
    listIntroHtml: 'La même idée apparaît partout en informatique&nbsp;:',
    items: [
      'L’<strong>algorithme de Hierholzer</strong> construit un cycle eulérien en temps <var>O</var>(<var>E</var>). On suit des arêtes inutilisées jusqu’à revenir au départ. Ensuite, depuis n’importe quel sommet de ce cycle qui a encore des arêtes inutilisées, on construit un autre cycle et on l’insère.',
      'Le <strong>problème du postier chinois</strong> cherche la plus courte marche fermée qui utilise chaque arête <em>au moins</em> une fois, comme pour la distribution du courrier, les chasse-neige ou les balayeuses de rue. Sur les graphes non orientés, il se résout en temps polynomial. On apparie les sommets de degré impair par un couplage parfait de poids minimum, pondéré par la distance du plus court chemin. Puis on parcourt une seconde fois le plus court chemin entre chaque paire appariée.',
      '<strong>Les graphes de de Bruijn en assemblage de génomes</strong>&nbsp;: les séquenceurs d’ADN lisent des millions de courts fragments, découpés en sous-chaînes qui se chevauchent, de longueur <var>k</var>. Chaque sous-chaîne devient une arête orientée allant de ses <var>k</var>&nbsp;−&nbsp;1 premières lettres à ses <var>k</var>&nbsp;−&nbsp;1 dernières lettres. Reconstruire le génome revient alors à chercher un chemin eulérien. Dans les graphes orientés, la condition est que le degré entrant soit égal au degré sortant en chaque sommet, sauf que le départ a une arête sortante de plus et l’arrivée une arête entrante de plus.',
      '<strong>Le contraste hamiltonien</strong>&nbsp;: remplacez «&nbsp;chaque arête exactement une fois&nbsp;» par «&nbsp;chaque sommet exactement une fois&nbsp;» et aucun simple test de degrés ne fonctionne plus. Décider si un graphe possède un chemin hamiltonien est NP-complet. Aucun algorithme polynomial n’est connu, et en trouver un prouverait que P = NP.',
    ],
  },

  exercise: {
    heading: 'Exercice',
    mainHtml:
      'La ville construit un huitième pont. Entre quels deux morceaux de terre pourrait-il se trouver pour qu’un chemin eulérien existe&nbsp;? Listez toutes les paires qui conviennent et indiquez, dans chaque cas, où la marche doit commencer et se terminer.',
    followUpHtml:
      'Pour aller plus loin&nbsp;: un seul nouveau pont peut-il jamais rendre un cycle eulérien possible&nbsp;? Quel est le nombre minimal de nouveaux ponts nécessaires pour cela&nbsp;?',
  },

  olympiad: {
    heading: 'Voilà l’esprit de l’olympiade',
    reasoningHtml:
      'Euler n’a pas résolu l’énigme en essayant plus de parcours. Il a trouvé le bon modèle et le bon invariant. L’Olympiade belge d’Informatique demande le même type de raisonnement, puis un programme qui l’applique.',
    datesHtml:
      'Les épreuves de qualification en ligne se déroulent du <strong class="nowrap">1<sup>er</sup> décembre 2026</strong> au <strong class="nowrap">28 février 2027</strong>. Vous pouvez les passer à l’école ou à la maison, en Blockly ou en Python.',
    homeCta: 'Découvrir le concours beOI',
    labCta: 'S’entraîner sur le beOI Lab',
  },
};
