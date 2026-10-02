import type { Locale } from '../i18n';
import type { KoenigsbergMapUi } from './types';

/**
 * Replace `{name}` tokens in a template. Unknown tokens are left untouched.
 * Used by the interactive map for every message that embeds a number or place.
 */
export function formatTemplate(
  template: string,
  vars: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    Object.hasOwn(vars, key) ? String(vars[key]) : match,
  );
}

const en: KoenigsbergMapUi = {
  svgTitle: 'The seven bridges of Königsberg',
  svgDesc:
    'A map of Königsberg: the river Pregel with a north bank (A), a south bank (D), a central island called Kneiphof (B), and an eastern island (C). Seven numbered bridges join them: 1 and 2 join A and B, 3 and 4 join B and D, 5 joins A and C, 6 joins B and C, and 7 joins C and D.',
  lands: {
    A: { label: 'North bank', spoken: 'the north bank', on: 'on the north bank' },
    B: { label: 'Kneiphof', spoken: 'the Kneiphof', on: 'on the Kneiphof' },
    C: { label: 'Eastern island', spoken: 'the eastern island', on: 'on the eastern island' },
    D: { label: 'South bank', spoken: 'the south bank', on: 'on the south bank' },
  },
  bridgeAria: {
    1: 'Bridge 1: north bank to central island',
    2: 'Bridge 2: north bank to central island',
    3: 'Bridge 3: central island to south bank',
    4: 'Bridge 4: central island to south bank',
    5: 'Bridge 5: north bank to eastern island',
    6: 'Bridge 6: central island to eastern island',
    7: 'Bridge 7: eastern island to south bank',
  },
  rules: {
    heading: 'Your goal — meet all three:',
    aria: 'Goals of the stroll',
    items: [
      { icon: '7', title: 'Cross all 7 bridges' },
      { icon: '1×', title: 'Each one exactly once' },
      { icon: '↻', title: 'Finish where you started' },
    ],
    note: 'No swimming, no boats — only the bridges.',
  },
  panel: {
    bridgesCrossed: 'Bridges crossed: {n} / {total}',
    pickStart: 'Pick a landmass to start your stroll.',
    undo: 'Undo',
    reset: 'Reset',
    watchAttempt: 'Watch an attempt',
    watching: 'Watching…',
    teaser: 'Not finding a route doesn’t prove there is none. The next section shows why.',
  },
  messages: {
    clickBridge: 'Click a red bridge to cross it.',
    onLand: 'You are {on}.',
    backOnLand: 'Back {on}.',
    crossedBridge: 'Crossed bridge {n}. Now {on}.',
    undid: 'Undid bridge {n}. Now {on}.',
    startingOn: 'Starting {on}.',
    watchingSample: 'Watching a sample stroll…',
    stuck: 'Stuck {on}: no unused bridge left. {leftover}',
    leftoverOne: 'Bridge {bridge} was never crossed.',
    leftoverMany: 'Bridges {bridges} were never crossed.',
    allCrossedWrongEnd: 'All bridges crossed, but you finished {on}, not where you started.',
    impossibleSuccess:
      'You crossed every bridge and returned home — but Euler proved this is impossible. Try again?',
    startAria: 'Start {on}',
  },
};

const fr: KoenigsbergMapUi = {
  svgTitle: 'Les sept ponts de Königsberg',
  svgDesc:
    'Plan de Königsberg\u00a0: la rivière Pregel avec une rive nord (A), une rive sud (D), une île centrale appelée Kneiphof (B) et une île orientale (C). Sept ponts numérotés les relient\u00a0: les ponts 1 et 2 relient A et B, les ponts 3 et 4 relient B et D, le pont 5 relie A et C, le pont 6 relie B et C, et le pont 7 relie C et D.',
  lands: {
    A: { label: 'Rive nord', spoken: 'la rive nord', on: 'sur la rive nord' },
    B: { label: 'Kneiphof', spoken: 'le Kneiphof', on: 'sur le Kneiphof' },
    C: { label: 'Île orientale', spoken: 'l’île orientale', on: 'sur l’île orientale' },
    D: { label: 'Rive sud', spoken: 'la rive sud', on: 'sur la rive sud' },
  },
  bridgeAria: {
    1: 'Pont 1\u00a0: de la rive nord à l’île centrale',
    2: 'Pont 2\u00a0: de la rive nord à l’île centrale',
    3: 'Pont 3\u00a0: de l’île centrale à la rive sud',
    4: 'Pont 4\u00a0: de l’île centrale à la rive sud',
    5: 'Pont 5\u00a0: de la rive nord à l’île orientale',
    6: 'Pont 6\u00a0: de l’île centrale à l’île orientale',
    7: 'Pont 7\u00a0: de l’île orientale à la rive sud',
  },
  rules: {
    heading: 'Votre objectif — les trois à la fois\u00a0:',
    aria: 'Objectifs de la promenade',
    items: [
      { icon: '7', title: 'Traversez les 7 ponts' },
      { icon: '1×', title: 'Chacun exactement une fois' },
      { icon: '↻', title: 'Terminez là où vous avez commencé' },
    ],
    note: 'Pas de nage, pas de bateau\u00a0: uniquement les ponts.',
  },
  panel: {
    bridgesCrossed: 'Ponts traversés\u00a0: {n} / {total}',
    pickStart: 'Choisissez un endroit pour commencer votre promenade.',
    undo: 'Annuler',
    reset: 'Recommencer',
    watchAttempt: 'Voir un essai',
    watching: 'Essai en cours…',
    teaser:
      'Ne pas trouver de parcours ne prouve pas qu’il n’en existe pas. La section suivante explique pourquoi.',
  },
  messages: {
    clickBridge: 'Cliquez sur un pont rouge pour le traverser.',
    onLand: 'Vous êtes {on}.',
    backOnLand: 'Vous revoilà {on}.',
    crossedBridge: 'Pont {n} traversé. Vous êtes maintenant {on}.',
    undid: 'Pont {n} annulé. Vous êtes maintenant {on}.',
    startingOn: 'Départ {on}.',
    watchingSample: 'Voici un exemple de promenade…',
    stuck: 'Bloqué {on}\u00a0: plus aucun pont non traversé. {leftover}',
    leftoverOne: 'Le pont {bridge} n’a jamais été traversé.',
    leftoverMany: 'Les ponts {bridges} n’ont jamais été traversés.',
    allCrossedWrongEnd:
      'Tous les ponts sont traversés, mais vous avez terminé {on}, pas à votre point de départ.',
    impossibleSuccess:
      'Vous avez traversé tous les ponts et vous êtes de retour au départ — mais Euler a prouvé que c’est impossible. Un autre essai\u00a0?',
    startAria: 'Commencer {on}',
  },
};

const nl: KoenigsbergMapUi = {
  svgTitle: 'De zeven bruggen van Königsberg',
  svgDesc:
    'Een kaart van Königsberg: de rivier de Pregel met een noordoever (A), een zuidoever (D), een centraal eiland genaamd Kneiphof (B) en een oostelijk eiland (C). Zeven genummerde bruggen verbinden ze: 1 en 2 verbinden A en B, 3 en 4 verbinden B en D, 5 verbindt A en C, 6 verbindt B en C, en 7 verbindt C en D.',
  lands: {
    A: { label: 'Noordoever', spoken: 'de noordoever', on: 'op de noordoever' },
    B: { label: 'Kneiphof', spoken: 'de Kneiphof', on: 'op de Kneiphof' },
    C: { label: 'Oost-eiland', spoken: 'het oostelijke eiland', on: 'op het oostelijke eiland' },
    D: { label: 'Zuidoever', spoken: 'de zuidoever', on: 'op de zuidoever' },
  },
  bridgeAria: {
    1: 'Brug 1: van de noordoever naar het centrale eiland',
    2: 'Brug 2: van de noordoever naar het centrale eiland',
    3: 'Brug 3: van het centrale eiland naar de zuidoever',
    4: 'Brug 4: van het centrale eiland naar de zuidoever',
    5: 'Brug 5: van de noordoever naar het oostelijke eiland',
    6: 'Brug 6: van het centrale eiland naar het oostelijke eiland',
    7: 'Brug 7: van het oostelijke eiland naar de zuidoever',
  },
  rules: {
    heading: 'Jouw doel — alle drie tegelijk:',
    aria: 'Doelen van de wandeling',
    items: [
      { icon: '7', title: 'Steek alle 7 bruggen over' },
      { icon: '1×', title: 'Elk precies één keer' },
      { icon: '↻', title: 'Eindig waar je begon' },
    ],
    note: 'Niet zwemmen, geen boten — alleen de bruggen.',
  },
  panel: {
    bridgesCrossed: 'Bruggen overgestoken: {n} / {total}',
    pickStart: 'Kies een stuk land om je wandeling te starten.',
    undo: 'Ongedaan maken',
    reset: 'Opnieuw beginnen',
    watchAttempt: 'Bekijk een poging',
    watching: 'Poging bekijken…',
    teaser:
      'Geen route vinden bewijst niet dat er geen bestaat. De volgende sectie legt uit waarom.',
  },
  messages: {
    clickBridge: 'Klik op een rode brug om ze over te steken.',
    onLand: 'Je bent {on}.',
    backOnLand: 'Terug {on}.',
    crossedBridge: 'Brug {n} overgestoken. Nu {on}.',
    undid: 'Brug {n} ongedaan gemaakt. Nu {on}.',
    startingOn: 'Start {on}.',
    watchingSample: 'Een voorbeeldwandeling bekijken…',
    stuck: 'Vast {on}: geen onbenutte brug meer. {leftover}',
    leftoverOne: 'Brug {bridge} werd nooit overgestoken.',
    leftoverMany: 'Bruggen {bridges} werden nooit overgestoken.',
    allCrossedWrongEnd:
      'Alle bruggen overgestoken, maar je eindigde {on}, niet waar je begon.',
    impossibleSuccess:
      'Je stak alle bruggen over en kwam terug waar je begon — maar Euler bewees dat dit onmogelijk is. Nog eens proberen?',
    startAria: 'Start {on}',
  },
};

const de: KoenigsbergMapUi = {
  svgTitle: 'Die sieben Brücken von Königsberg',
  svgDesc:
    'Eine Karte von Königsberg: der Fluss Pregel mit einem Nordufer (A), einem Südufer (D), einer zentralen Insel namens Kneiphof (B) und einer Ostinsel (C). Sieben nummerierte Brücken verbinden sie: 1 und 2 verbinden A und B, 3 und 4 verbinden B und D, 5 verbindet A und C, 6 verbindet B und C, und 7 verbindet C und D.',
  lands: {
    A: { label: 'Nordufer', spoken: 'das Nordufer', on: 'am Nordufer' },
    B: { label: 'Kneiphof', spoken: 'der Kneiphof', on: 'auf dem Kneiphof' },
    C: { label: 'Ostinsel', spoken: 'die Ostinsel', on: 'auf der Ostinsel' },
    D: { label: 'Südufer', spoken: 'das Südufer', on: 'am Südufer' },
  },
  bridgeAria: {
    1: 'Brücke 1: vom Nordufer zur zentralen Insel',
    2: 'Brücke 2: vom Nordufer zur zentralen Insel',
    3: 'Brücke 3: von der zentralen Insel zum Südufer',
    4: 'Brücke 4: von der zentralen Insel zum Südufer',
    5: 'Brücke 5: vom Nordufer zur Ostinsel',
    6: 'Brücke 6: von der zentralen Insel zur Ostinsel',
    7: 'Brücke 7: von der Ostinsel zum Südufer',
  },
  rules: {
    heading: 'Dein Ziel — alle drei erfüllen:',
    aria: 'Ziele des Spaziergangs',
    items: [
      { icon: '7', title: 'Überquere alle 7 Brücken' },
      { icon: '1×', title: 'Jede genau einmal' },
      { icon: '↻', title: 'Ende dort, wo du gestartet bist' },
    ],
    note: 'Kein Schwimmen, keine Boote — nur die Brücken.',
  },
  panel: {
    bridgesCrossed: 'Überquerte Brücken: {n} / {total}',
    pickStart: 'Wähle ein Landstück, um deinen Spaziergang zu starten.',
    undo: 'Rückgängig',
    reset: 'Zurücksetzen',
    watchAttempt: 'Einen Versuch ansehen',
    watching: 'Versuch läuft…',
    teaser:
      'Keinen Weg zu finden beweist nicht, dass es keinen gibt. Der nächste Abschnitt zeigt, warum.',
  },
  messages: {
    clickBridge: 'Klicke auf eine rote Brücke, um sie zu überqueren.',
    onLand: 'Du bist {on}.',
    backOnLand: 'Zurück {on}.',
    crossedBridge: 'Brücke {n} überquert. Jetzt {on}.',
    undid: 'Brücke {n} rückgängig gemacht. Jetzt {on}.',
    startingOn: 'Start {on}.',
    watchingSample: 'Ein Beispielspaziergang läuft…',
    stuck: 'Festgefahren {on}: keine unbenutzte Brücke mehr. {leftover}',
    leftoverOne: 'Brücke {bridge} wurde nie überquert.',
    leftoverMany: 'Die Brücken {bridges} wurden nie überquert.',
    allCrossedWrongEnd:
      'Alle Brücken überquert, aber du bist {on} angekommen, nicht dort, wo du gestartet bist.',
    impossibleSuccess:
      'Du hast alle Brücken überquert und bist zurück am Start — aber Euler hat bewiesen, dass das unmöglich ist. Nochmal versuchen?',
    startAria: 'Start {on}',
  },
};

const mapUiByLocale: Record<Locale, KoenigsbergMapUi> = { fr, nl, en, de };

export function getKoenigsbergMapUi(lang: Locale): KoenigsbergMapUi {
  return mapUiByLocale[lang] ?? en;
}

export { en as koenigsbergMapUiEn, fr as koenigsbergMapUiFr, nl as koenigsbergMapUiNl, de as koenigsbergMapUiDe };
