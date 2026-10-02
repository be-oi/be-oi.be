import type { PosterExplainerCopy } from './types';

export const posterExplainerNl: PosterExplainerCopy = {
  lang: 'nl',

  meta: {
    title: 'De zeven bruggen van Königsberg – de beOI-affiche uitgelegd',
    description:
      'De puzzel op de beOI-affiche 2026–2027: kun je elk van de zeven bruggen van Königsberg precies één keer oversteken en eindigen waar je begon? Probeer het en ontdek hoe Leonhard Euler er in 1736 over nadacht.',
  },

  homeHref: '/nl/',
  competitiveProgrammingHref: '/nl/competitive-programming/',
  labHref: 'https://lab.be-oi.be/nl/',
  labOpensNewTab: ' (opent in een nieuw tabblad)',

  header: {
    eyebrow: 'De affichepuzzel 2026–2027',
    title: 'De zeven bruggen van Königsberg',
    introHtml:
      'Kun je een ononderbroken lus tekenen die elk van de 7 bruggen precies één keer oversteekt, zonder ooit op je stappen terug te keren? De inwoners van Königsberg probeerden het jarenlang. In 1736 bekeek Leonhard Euler de zaak van dichterbij — en vond een verrassend korte manier om de vraag te beslechten.',
  },

  poster: {
    label: 'Download de beOI-affiche 2026–2027 (PDF)',
    cta: 'Download de affiche',
    caption: 'A2-formaat · drukklare pdf',
    alsoIn: 'Andere talen:',
  },

  landNames: {
    A: 'Noordoever',
    B: 'Centraal eiland',
    C: 'Oost-eiland',
    D: 'Zuidoever',
  },

  problem: {
    heading: 'Het probleem',
    introHtml:
      'Königsberg, in wat toen Pruisen was (vandaag Kaliningrad, Rusland), lag aan weerszijden van de rivier de Pregel. In het midden van de stad splitste de rivier zich rond twee eilanden: een centraal eiland, de Kneiphof, en een tweede eiland in het oosten. Zeven bruggen verbonden deze vier stukken land:',
    bridgeList: [
      'twee bruggen tussen de noordoever en het centrale eiland;',
      'twee bruggen tussen het centrale eiland en de zuidoever;',
      'één brug tussen de twee eilanden;',
      'één brug van het oostelijke eiland naar elke oever.',
    ],
    figure: {
      label: 'Figuur 1.',
      captionHtml:
        'Königsberg in 1736: vier stukken land verbonden door zeven bruggen. Probeer de wandeling zelf, of bekijk een voorbeeldpoging die vastloopt.',
    },
    outroHtml:
      'Probeer het hierboven: de inwoners zochten naar verluidt een wandeling die elke brug precies één keer oversteekt en, in de versie op onze affiche, eindigt waar ze begon. Niemand vond er een. Geen route vinden bewijst niet dat er geen bestaat, en daar kwam Euler om de hoek kijken.',
  },

  answer: {
    heading: 'Dus… kan het?',
    noHtml:
      '<strong>Nee!</strong> En je hoeft niet elke route te proberen om het zeker te weten. Dit is de truc.',
    ruleHtml:
      '<strong>De in-en-uit-regel.</strong> Telkens je <em>door</em> een stuk land wandelt, kom je aan via de ene brug en vertrek je via een andere. De bruggen van dat stuk land worden dus in paren gebruikt: één om binnen te komen, één om weer te vertrekken.',
    evenHtml:
      'Als je moet eindigen waar je begon, heeft <em>elk</em> stuk land een even aantal bruggen nodig (2, 4, 6…).',
    countHtml: '<strong>Tel ze maar:</strong>',
    landCardsAria: 'Aantal bruggen per stuk land',
    landCards: [
      { id: 'A', name: 'Noordoever', bridges: 3, leftover: '1 paar + 1 over' },
      { id: 'B', name: 'Kneiphof', bridges: 5, leftover: '2 paren + 1 over' },
      { id: 'C', name: 'Oost-eiland', bridges: 3, leftover: '1 paar + 1 over' },
      { id: 'D', name: 'Zuidoever', bridges: 3, leftover: '1 paar + 1 over' },
    ],
    bridgesWord: 'bruggen',
    oddLabel: 'oneven',
    conclusionHtml:
      'Alle vier hebben een oneven aantal. Er blijft altijd één brug over, dus de lus is onmogelijk. Leonhard Euler vond deze truc in 1736.',
    olympiadNoteHtml:
      'Zo denken — een eenvoudige regel vinden in plaats van alles uit te proberen — is precies waar de Belgische Informatica-olympiade over gaat.',
  },

  dangerZone: {
    label: 'Gevarenzone',
    title: 'Ik wil alles weten over dit probleem met grafentheorie',
    subtitle: 'Bewijzen, stellingen en algoritmen in het verschiet.',
    warningTitle: 'Let op — buiten de leerstof',
    warningText:
      'Dit valt volledig buiten de leerstof voor de kwalificatierondes, de kwartfinale en de halve finale van de Belgische Informatica-olympiade. Je hebt er niets van nodig om goed te scoren.',
    cpBefore: 'Als je dit soort onderwerpen leuk vindt, neem dan een kijkje bij',
    cpLink: 'competitive programming',
    cpAfter: '.',
  },

  modelling: {
    heading: 'Modelleren: van kaart naar graaf',
    introHtml:
      'Euler merkte op dat bijna alles op de kaart irrelevant is. De vorm van de eilanden, de lengte van de bruggen en de ligging van de straten kunnen het antwoord niet beïnvloeden. Slechts één ding telt: welke stukken land elke brug met elkaar verbindt.',
    graphHtml:
      'Laat de kaart dus vallen. Vervang elk stuk land door een punt, een <strong>hoekpunt</strong> genoemd, en elke brug door een lijn tussen twee hoekpunten, een <strong>kant</strong> genoemd. Het resultaat is een <strong>graaf</strong> <span class="nowrap"><var>G</var> = (<var>V</var>, <var>E</var>)</span> met vier hoekpunten en zeven kanten.',
    graphFigure: {
      svgTitle: 'De bruggen van Königsberg als multigraaf',
      svgDesc:
        'Vier hoekpunten: A de noordoever bovenaan, B het centrale eiland links, C het oostelijke eiland rechts, D de zuidoever onderaan. Zeven kanten: 1 en 2 verbinden A en B, 3 en 4 verbinden B en D, 5 verbindt A en C, 6 verbindt B en C, 7 verbindt C en D.',
      label: 'Figuur 2.',
      captionHtml:
        'Königsberg als graaf. Hoekpunten: A noordoever, B centraal eiland, C oostelijk eiland, D zuidoever. Kanten 1–2 verbinden A en B, 3–4 verbinden B en D, 5 verbindt A en C, 6 verbindt B en C, 7 verbindt C en D. Vergelijk met de kaart in Figuur&nbsp;1: dezelfde letters, dezelfde brugnummers.',
    },
    multigraphHtml:
      'Sommige paren hoekpunten zijn verbonden door twee kanten: A–B en B–D. Een graaf die zulke parallelle kanten toelaat, heet een <strong>multigraaf</strong>. In dit model wordt de puzzel een zuivere vraag over <var>G</var>: bestaat er een gesloten wandeling die elke kant precies één keer gebruikt? Zo’n wandeling heet een <strong>Eulercircuit</strong>. Een <strong>Eulerpad</strong> gebruikt ook elke kant precies één keer, maar mag eindigen in een ander hoekpunt dan waar het begon.',
  },

  degrees: {
    heading: 'Graden',
    introHtml:
      'De <strong>graad</strong> deg(<var>v</var>) van een hoekpunt <var>v</var> is het aantal kanteinden dat het raakt. Anders gezegd: het is het aantal bruggen dat dat stuk land verlaat.',
    caption: 'Graad van elk hoekpunt in Figuur 2',
    headers: {
      vertex: 'Hoekpunt',
      landmass: 'Stuk land',
      bridges: 'Bruggen',
      degree: 'Graad',
    },
    oddLabel: '(oneven)',
    sumLabel: 'Som van de graden',
    handshakeHtml:
      'Als controle gebruiken we het <strong>handdruklemma</strong>. Elke kant heeft precies twee uiteinden, en elk uiteinde telt 1 bij de graad van één hoekpunt. Dus voor elke graaf geldt:',
    handshakeMathHtml:
      '<span class="nowrap">∑<sub><var>v</var> ∈ <var>V</var></sub> deg(<var>v</var>) = 2 |<var>E</var>|</span>,<br />en hier <span class="nowrap">3 + 5 + 3 + 3 = 14 = 2 × 7.</span>',
    consequenceHtml:
      'Een gevolg: de som van alle graden is even, dus elke graaf heeft een even aantal hoekpunten met oneven graad.',
  },

  invariant: {
    heading: 'De invariant',
    walkHtml:
      'Stel dat een wandeling elke kant precies één keer gebruikt. Kijk naar een hoekpunt <var>v</var> dat noch het begin noch het einde is. Telkens de wandeling via een kant in <var>v</var> aankomt, moet ze via een andere, nog ongebruikte kant vertrekken. De kanten in <var>v</var> worden dus in paren gebruikt, één erin en één eruit. Omdat elke kant gebruikt wordt, zijn alle kanten in <var>v</var> gepaard, en is deg(<var>v</var>) even.',
    endpointsHtml:
      'Enkel de twee eindpunten van de wandeling hebben elk één ongepaarde kant: de eerste kant uit het beginpunt en de laatste kant naar het eindpunt. Als de wandeling gesloten is, zijn begin en einde hetzelfde hoekpunt, en vormen die twee kanten ook een paar. De pariteit van de graad is een invariant die geen slimme route kan ontwijken.',
    theorem: {
      title: 'Stelling van Euler',
      introHtml:
        'Zij <var>G</var> een samenhangende multigraaf (hoekpunten zonder kanten buiten beschouwing gelaten).',
      circuitHtml:
        '<var>G</var> heeft een <strong>Eulercircuit</strong> als en slechts als elk hoekpunt een even graad heeft.',
      pathHtml:
        '<var>G</var> heeft een <strong>Eulerpad</strong> als en slechts als het 0 of 2 hoekpunten van oneven graad heeft. Bij 2 begint elk zo’n pad in het ene oneven hoekpunt en eindigt het in het andere.',
    },
    converseHtml:
      'Het bovenstaande argument bewijst de richting “enkel als”, en dat is alles wat de puzzel nodig heeft. Euler formuleerde het omgekeerde zonder bewijs. Carl Hierholzer bewees het in 1873 door een constructie te geven.',
    konigsbergHtml:
      'Königsberg heeft <strong>vier</strong> hoekpunten van oneven graad. Dat sluit een Eulercircuit uit, dat nul oneven hoekpunten vereist. Het sluit ook een Eulerpad uit, dat er hoogstens twee toelaat. De lus waar de affiche om vraagt bestaat dus niet, en evenmin een route, gesloten of open, die elke brug precies één keer oversteekt.',
  },

  informatics: {
    heading: 'Waarom het ertoe doet in de informatica',
    introHtml:
      'De stelling van Euler vervangt zoeken door tellen. Je hoeft geen routes uit te proberen, alleen graden te tellen:',
    complexityHtml:
      'Dit draait in <span class="nowrap"><var>O</var>(<var>V</var> + <var>E</var>)</span> tijd: één keer over de kanten, dan één keer over de hoekpunten. Een volledige controle gaat ook na of alle kanten tot één samenhangende component behoren, met één keer breedte-eerst of diepte-eerst zoeken, wat eveneens <span class="nowrap"><var>O</var>(<var>V</var> + <var>E</var>)</span> kost. Een naïeve zoektocht die elke volgorde van de kanten uitprobeert, kan tot <var>E</var>! reeksen onderzoeken. Dat is 7! = 5.040 voor Königsberg, maar <span class="nowrap">20! ≈ 2,4 × 10<sup>18</sup></span> voor een graaf met slechts 20 kanten.',
    listIntroHtml: 'Hetzelfde idee komt overal in de informatica terug:',
    items: [
      'Het <strong>algoritme van Hierholzer</strong> bouwt een Eulercircuit in <var>O</var>(<var>E</var>) tijd. Volg ongebruikte kanten tot je terug bij het begin bent. Bouw daarna, vanuit een willekeurig hoekpunt van dat circuit dat nog ongebruikte kanten heeft, een nieuw circuit en voeg het erin in.',
      'Het <strong>Chinese-postbodeprobleem</strong> vraagt naar de kortste gesloten wandeling die elke kant <em>minstens</em> één keer gebruikt, zoals bij postbedeling, sneeuwploegen of veegwagens. Op ongerichte grafen is het in polynomiale tijd op te lossen. Koppel de oneven hoekpunten via een perfecte matching met minimaal gewicht, gewogen volgens de afstand van het kortste pad. Loop daarna het kortste pad tussen elk gekoppeld paar een tweede keer.',
      '<strong>De-Bruijngrafen bij genoomassemblage</strong>: DNA-sequencers lezen miljoenen korte fragmenten, die in overlappende deelstrings van lengte <var>k</var> worden geknipt. Elke deelstring wordt een gerichte kant van zijn eerste <var>k</var>&nbsp;−&nbsp;1 letters naar zijn laatste <var>k</var>&nbsp;−&nbsp;1 letters. Het genoom herbouwen wordt dan een zoektocht naar een Eulerpad. In gerichte grafen is de voorwaarde dat de ingraad gelijk is aan de uitgraad in elk hoekpunt, behalve dat het begin één extra uitgaande kant heeft en het einde één extra inkomende kant.',
      '<strong>Het Hamilton-contrast</strong>: verander “elke kant precies één keer” in “elk hoekpunt precies één keer” en geen eenvoudige graadtest werkt nog. Beslissen of een graaf een Hamiltonpad heeft, is NP-volledig. Er is geen polynomiaal algoritme bekend, en er een vinden zou P = NP bewijzen.',
    ],
  },

  exercise: {
    heading: 'Oefening',
    mainHtml:
      'De stad bouwt een achtste brug. Tussen welke twee stukken land kan ze komen zodat er een Eulerpad bestaat? Som elk paar op dat werkt, en zeg in elk geval waar de wandeling moet beginnen en eindigen.',
    followUpHtml:
      'Vervolgvraag: kan één enkele nieuwe brug ooit een Eulercircuit mogelijk maken? Wat is het minimale aantal nieuwe bruggen dat daarvoor nodig is?',
  },

  olympiad: {
    heading: 'Hier draait de olympiade om',
    reasoningHtml:
      'Euler loste de puzzel niet op door meer routes te proberen. Hij vond het juiste model en de juiste invariant. De Belgische Informatica-olympiade vraagt hetzelfde soort redeneren, en daarna een programma dat het toepast.',
    datesHtml:
      'De online kwalificatierondes lopen van <strong class="nowrap">1 december 2026</strong> tot <strong class="nowrap">28 februari 2027</strong>. Je kunt ze op school of thuis afleggen, in Blockly of Python.',
    homeCta: 'Ontdek de beOI-wedstrijd',
    labCta: 'Oefen op het beOI Lab',
  },
};
