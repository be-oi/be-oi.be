import type { PosterExplainerCopy } from './types';

export const posterExplainerDe: PosterExplainerCopy = {
  lang: 'de',

  meta: {
    title: 'Die sieben Brücken von Königsberg – das beOI-Poster erklärt',
    description:
      'Das Rätsel auf dem beOI-Poster 2026–2027: Kannst du jede der sieben Brücken von Königsberg genau einmal überqueren und dort enden, wo du gestartet bist? Probier es aus und sieh dann, wie Leonhard Euler 1736 darüber nachgedacht hat.',
  },

  homeHref: '/de/',
  competitiveProgrammingHref: '/de/competitive-programming/',
  labHref: 'https://lab.be-oi.be/de/',
  labOpensNewTab: ' (öffnet in einem neuen Tab)',

  header: {
    eyebrow: 'Das Poster-Rätsel 2026–2027',
    title: 'Die sieben Brücken von Königsberg',
    introHtml:
      'Kannst du eine durchgehende Runde zeichnen, die jede der 7 Brücken genau einmal überquert, ohne jemals denselben Weg zurückzugehen? Die Menschen in Königsberg haben es jahrelang versucht. 1736 sah sich Leonhard Euler die Sache genauer an — und fand einen überraschend kurzen Weg, die Frage zu klären.',
  },

  poster: {
    label: 'Das beOI-Poster 2026–2027 herunterladen (PDF)',
    cta: 'Poster herunterladen',
    caption: 'A2-Format · druckfertiges PDF',
    alsoIn: 'Weitere Sprachen:',
  },

  landNames: {
    A: 'Nordufer',
    B: 'Zentrale Insel',
    C: 'Ostinsel',
    D: 'Südufer',
  },

  problem: {
    heading: 'Das Problem',
    introHtml:
      'Königsberg, im damaligen Preußen gelegen (heute Kaliningrad, Russland), war an beiden Ufern des Flusses Pregel erbaut. In der Mitte der Stadt teilte sich der Fluss um zwei Inseln: eine zentrale Insel, den Kneiphof, und eine zweite Insel im Osten. Sieben Brücken verbanden diese vier Landstücke:',
    bridgeList: [
      'zwei Brücken zwischen dem Nordufer und der zentralen Insel;',
      'zwei Brücken zwischen der zentralen Insel und dem Südufer;',
      'eine Brücke zwischen den beiden Inseln;',
      'eine Brücke von der Ostinsel zu jedem Ufer.',
    ],
    figure: {
      label: 'Abbildung 1.',
      captionHtml:
        'Königsberg im Jahr 1736: vier Landstücke, verbunden durch sieben Brücken. Probiere den Spaziergang selbst aus oder sieh dir einen Beispielversuch an, der stecken bleibt.',
    },
    outroHtml:
      'Probier es oben aus: Die Einwohner suchten angeblich einen Spaziergang, der jede Brücke genau einmal überquert und — in der Version auf unserem Poster — dort endet, wo er begonnen hat. Niemand fand einen. Keinen Weg zu finden beweist nicht, dass es keinen gibt, und hier kam Euler ins Spiel.',
  },

  answer: {
    heading: 'Also… ist es möglich?',
    noHtml:
      '<strong>Nein!</strong> Und du musst nicht jeden Weg ausprobieren, um sicher zu sein. Hier ist der Trick.',
    ruleHtml:
      '<strong>Die Rein-und-raus-Regel.</strong> Jedes Mal, wenn du <em>durch</em> ein Landstück gehst, kommst du über eine Brücke an und verlässt es über eine andere. Die Brücken dieses Landstücks werden also paarweise benutzt: eine hinein, eine hinaus.',
    evenHtml:
      'Wenn du dort enden musst, wo du gestartet bist, braucht <em>jedes</em> Landstück eine gerade Anzahl von Brücken (2, 4, 6…).',
    countHtml: '<strong>Zähl sie nach:</strong>',
    landCardsAria: 'Anzahl der Brücken pro Landstück',
    landCards: [
      { id: 'A', name: 'Nordufer', bridges: 3, leftover: '1 Paar + 1 übrig' },
      { id: 'B', name: 'Kneiphof', bridges: 5, leftover: '2 Paare + 1 übrig' },
      { id: 'C', name: 'Ostinsel', bridges: 3, leftover: '1 Paar + 1 übrig' },
      { id: 'D', name: 'Südufer', bridges: 3, leftover: '1 Paar + 1 übrig' },
    ],
    bridgesWord: 'Brücken',
    oddLabel: 'ungerade',
    conclusionHtml:
      'Alle vier haben eine ungerade Anzahl. Es bleibt immer eine Brücke übrig, also ist die Runde unmöglich. Leonhard Euler hat diesen Trick 1736 gefunden.',
    olympiadNoteHtml:
      'So zu denken — eine einfache Regel zu finden, statt alles auszuprobieren — ist genau das, worum es bei der Belgischen Informatik-Olympiade geht.',
  },

  dangerZone: {
    label: 'Gefahrenzone',
    title: 'Ich will alles über dieses Problem mit Graphentheorie wissen',
    subtitle: 'Beweise, Sätze und Algorithmen voraus.',
    warningTitle: 'Achtung — nicht Teil des Stoffs',
    warningText:
      'Das gehört überhaupt nicht zum Stoff der Qualifikationsrunden, des Viertelfinales und des Halbfinales der Belgischen Informatik-Olympiade. Du brauchst nichts davon, um gut abzuschneiden.',
    cpBefore: 'Wenn dir solche Themen Spaß machen, schau dir',
    cpLink: 'Competitive Programming',
    cpAfter: 'an.',
  },

  modelling: {
    heading: 'Modellieren: von der Karte zum Graphen',
    introHtml:
      'Euler bemerkte, dass fast alles auf der Karte unwichtig ist. Die Form der Inseln, die Länge der Brücken und der Verlauf der Straßen können die Antwort nicht beeinflussen. Nur eines zählt: welche Landstücke jede Brücke verbindet.',
    graphHtml:
      'Wir werfen die Karte also weg. Ersetze jedes Landstück durch einen Punkt, einen <strong>Knoten</strong>, und jede Brücke durch eine Linie zwischen zwei Knoten, eine <strong>Kante</strong>. Das Ergebnis ist ein <strong>Graph</strong> <span class="nowrap"><var>G</var> = (<var>V</var>, <var>E</var>)</span> mit vier Knoten und sieben Kanten.',
    graphFigure: {
      svgTitle: 'Die Brücken von Königsberg als Multigraph',
      svgDesc:
        'Vier Knoten: A das Nordufer oben, B die zentrale Insel links, C die Ostinsel rechts, D das Südufer unten. Sieben Kanten: 1 und 2 verbinden A und B, 3 und 4 verbinden B und D, 5 verbindet A und C, 6 verbindet B und C, 7 verbindet C und D.',
      label: 'Abbildung 2.',
      captionHtml:
        'Königsberg als Graph. Knoten: A Nordufer, B zentrale Insel, C Ostinsel, D Südufer. Die Kanten 1–2 verbinden A und B, 3–4 verbinden B und D, 5 verbindet A und C, 6 verbindet B und C, 7 verbindet C und D. Vergleiche mit der Karte in Abbildung&nbsp;1: dieselben Buchstaben, dieselben Brückennummern.',
    },
    multigraphHtml:
      'Manche Knotenpaare sind durch zwei Kanten verbunden: A–B und B–D. Ein Graph, der solche parallelen Kanten erlaubt, heißt <strong>Multigraph</strong>. In diesem Modell wird das Rätsel zu einer reinen Frage über <var>G</var>: Gibt es einen geschlossenen Kantenzug, der jede Kante genau einmal benutzt? Ein solcher Kantenzug heißt <strong>Eulerkreis</strong>. Ein <strong>Eulerweg</strong> benutzt ebenfalls jede Kante genau einmal, darf aber in einem anderen Knoten enden als dem, in dem er begonnen hat.',
  },

  degrees: {
    heading: 'Grade',
    introHtml:
      'Der <strong>Grad</strong> deg(<var>v</var>) eines Knotens <var>v</var> ist die Anzahl der Kantenenden, die ihn berühren. Gleichbedeutend ist es die Anzahl der Brücken, die von diesem Landstück abgehen.',
    caption: 'Grad jedes Knotens in Abbildung 2',
    headers: {
      vertex: 'Knoten',
      landmass: 'Landstück',
      bridges: 'Brücken',
      degree: 'Grad',
    },
    oddLabel: '(ungerade)',
    sumLabel: 'Summe der Grade',
    handshakeHtml:
      'Zur Kontrolle nutzen wir das <strong>Handschlag-Lemma</strong>. Jede Kante hat genau zwei Enden, und jedes Ende erhöht den Grad eines Knotens um 1. Für jeden Graphen gilt also:',
    handshakeMathHtml:
      '<span class="nowrap">∑<sub><var>v</var> ∈ <var>V</var></sub> deg(<var>v</var>) = 2 |<var>E</var>|</span>,<br />und hier <span class="nowrap">3 + 5 + 3 + 3 = 14 = 2 × 7.</span>',
    consequenceHtml:
      'Eine Folgerung: Die Summe aller Grade ist gerade, also hat jeder Graph eine gerade Anzahl von Knoten mit ungeradem Grad.',
  },

  invariant: {
    heading: 'Die Invariante',
    walkHtml:
      'Angenommen, ein Kantenzug benutzt jede Kante genau einmal. Betrachte einen Knoten <var>v</var>, der weder Start noch Ende ist. Jedes Mal, wenn der Kantenzug über eine Kante in <var>v</var> ankommt, muss er über eine andere, noch unbenutzte Kante wieder wegführen. Die Kanten an <var>v</var> werden also paarweise benutzt, eine hinein und eine hinaus. Weil jede Kante benutzt wird, sind alle Kanten an <var>v</var> gepaart, und deg(<var>v</var>) ist gerade.',
    endpointsHtml:
      'Nur die beiden Endpunkte des Kantenzugs haben je eine ungepaarte Kante: die erste Kante, die vom Start wegführt, und die letzte Kante, die am Ende ankommt. Ist der Kantenzug geschlossen, sind Start und Ende derselbe Knoten, und diese beiden Kanten bilden ebenfalls ein Paar. Die Parität des Grades ist eine Invariante, die keine clevere Route umgehen kann.',
    theorem: {
      title: 'Satz von Euler',
      introHtml:
        'Sei <var>G</var> ein zusammenhängender Multigraph (Knoten ohne Kanten werden ignoriert).',
      circuitHtml:
        '<var>G</var> hat genau dann einen <strong>Eulerkreis</strong>, wenn jeder Knoten geraden Grad hat.',
      pathHtml:
        '<var>G</var> hat genau dann einen <strong>Eulerweg</strong>, wenn er 0 oder 2 Knoten mit ungeradem Grad hat. Bei 2 beginnt jeder solche Weg an einem ungeraden Knoten und endet am anderen.',
    },
    converseHtml:
      'Das obige Argument beweist die Richtung „nur wenn“, und das ist alles, was das Rätsel braucht. Euler stellte die Umkehrung ohne Beweis auf. Carl Hierholzer bewies sie 1873, indem er eine Konstruktion angab.',
    konigsbergHtml:
      'Königsberg hat <strong>vier</strong> Knoten mit ungeradem Grad. Das schließt einen Eulerkreis aus, der keinen ungeraden Knoten erlaubt. Es schließt auch einen Eulerweg aus, der höchstens zwei zulässt. Die Runde, die das Poster verlangt, gibt es also nicht, und ebenso wenig irgendeine Route, geschlossen oder offen, die jede Brücke genau einmal überquert.',
  },

  informatics: {
    heading: 'Warum das in der Informatik wichtig ist',
    introHtml:
      'Eulers Satz ersetzt eine Suche durch eine Zählung. Du musst keine Routen ausprobieren, sondern nur Grade zählen:',
    complexityHtml:
      'Das läuft in <span class="nowrap"><var>O</var>(<var>V</var> + <var>E</var>)</span> Zeit: ein Durchlauf über die Kanten, dann einer über die Knoten. Eine vollständige Prüfung kontrolliert außerdem, dass alle Kanten zu einer einzigen Zusammenhangskomponente gehören, mit einer Breiten- oder Tiefensuche, die ebenfalls <span class="nowrap"><var>O</var>(<var>V</var> + <var>E</var>)</span> kostet. Eine naive Suche, die jede Reihenfolge der Kanten ausprobiert, kann bis zu <var>E</var>! Folgen untersuchen. Das sind 7! = 5.040 für Königsberg, aber <span class="nowrap">20! ≈ 2,4 × 10<sup>18</sup></span> für einen Graphen mit nur 20 Kanten.',
    listIntroHtml: 'Dieselbe Idee taucht überall in der Informatik auf:',
    items: [
      'Der <strong>Algorithmus von Hierholzer</strong> baut einen Eulerkreis in <var>O</var>(<var>E</var>) Zeit. Folge unbenutzten Kanten, bis du wieder am Start bist. Baue dann von einem beliebigen Knoten dieses Kreises, der noch unbenutzte Kanten hat, einen weiteren Kreis und füge ihn ein.',
      'Das <strong>Problem des chinesischen Briefträgers</strong> fragt nach dem kürzesten geschlossenen Kantenzug, der jede Kante <em>mindestens</em> einmal benutzt, etwa bei der Postzustellung, bei Schneepflügen oder Straßenkehrmaschinen. Auf ungerichteten Graphen lässt es sich in Polynomialzeit lösen. Man paart die Knoten mit ungeradem Grad über ein perfektes Matching mit minimalem Gewicht, gewichtet nach der Länge des kürzesten Weges. Dann geht man den kürzesten Weg zwischen jedem gepaarten Knotenpaar ein zweites Mal.',
      '<strong>De-Bruijn-Graphen bei der Genomassemblierung</strong>: DNA-Sequenzierer lesen Millionen kurzer Fragmente, die in überlappende Teilstrings der Länge <var>k</var> zerlegt werden. Jeder Teilstring wird zu einer gerichteten Kante von seinen ersten <var>k</var>&nbsp;−&nbsp;1 Buchstaben zu seinen letzten <var>k</var>&nbsp;−&nbsp;1 Buchstaben. Das Genom wieder zusammenzusetzen wird dann zur Suche nach einem Eulerweg. In gerichteten Graphen lautet die Bedingung, dass an jedem Knoten der Eingangsgrad gleich dem Ausgangsgrad ist, außer dass der Start eine ausgehende Kante mehr und das Ende eine eingehende Kante mehr hat.',
      '<strong>Der hamiltonsche Kontrast</strong>: Ersetze „jede Kante genau einmal“ durch „jeden Knoten genau einmal“, und kein einfacher Gradtest funktioniert mehr. Zu entscheiden, ob ein Graph einen Hamiltonweg hat, ist NP-vollständig. Es ist kein Polynomialzeit-Algorithmus bekannt, und einen zu finden würde P = NP beweisen.',
    ],
  },

  exercise: {
    heading: 'Übung',
    mainHtml:
      'Die Stadt baut eine achte Brücke. Zwischen welchen beiden Landstücken könnte sie liegen, damit ein Eulerweg existiert? Nenne alle Paare, die funktionieren, und gib jeweils an, wo der Kantenzug beginnen und enden muss.',
    followUpHtml:
      'Zusatzfrage: Kann eine einzige neue Brücke jemals einen Eulerkreis möglich machen? Wie viele neue Brücken sind dafür mindestens nötig?',
  },

  olympiad: {
    heading: 'Darum geht es bei der Olympiade',
    reasoningHtml:
      'Euler hat das Rätsel nicht gelöst, indem er mehr Routen ausprobierte. Er fand das richtige Modell und die richtige Invariante. Die Belgische Informatik-Olympiade verlangt dieselbe Art des Denkens und anschließend ein Programm, das es anwendet.',
    datesHtml:
      'Die Online-Qualifikationsrunden laufen vom <strong class="nowrap">1. Dezember 2026</strong> bis zum <strong class="nowrap">28. Februar 2027</strong>. Du kannst sie in der Schule oder zu Hause machen, mit Blockly oder Python.',
    homeCta: 'Den beOI-Wettbewerb entdecken',
    labCta: 'Im beOI Lab trainieren',
  },
};
