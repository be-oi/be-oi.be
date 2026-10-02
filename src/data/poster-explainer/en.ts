import type { PosterExplainerCopy } from './types';

export const posterExplainerEn: PosterExplainerCopy = {
  lang: 'en',

  meta: {
    title: 'The Seven Bridges of Königsberg – beOI poster explained',
    description:
      'The puzzle on the beOI 2026–2027 poster: can you cross each of the seven bridges of Königsberg exactly once and end where you started? Try it, then see how Leonhard Euler thought about it in 1736.',
  },

  homeHref: '/en/',
  competitiveProgrammingHref: '/en/competitive-programming/',
  labHref: 'https://lab.be-oi.be/en/',
  labOpensNewTab: ' (opens in a new tab)',

  header: {
    eyebrow: 'The 2026–2027 poster puzzle',
    title: 'The Seven Bridges of Königsberg',
    introHtml:
      'Can you draw a continuous loop that crosses each of the 7 bridges exactly once, without ever retracing your steps? People in Königsberg tried for years. In 1736, Leonhard Euler took a closer look — and found a surprisingly short way to settle the question.',
  },

  poster: {
    label: 'Download the beOI 2026–2027 poster (PDF)',
    cta: 'Download the poster',
    caption: 'A2 format · print-ready PDF',
    alsoIn: 'Also in',
  },

  landNames: {
    A: 'North bank',
    B: 'Central island',
    C: 'Eastern island',
    D: 'South bank',
  },

  problem: {
    heading: 'The problem',
    introHtml:
      'Königsberg, in what was then Prussia (today Kaliningrad, Russia), was built on both banks of the river Pregel. In the middle of the city the river split around two islands: a central island, the Kneiphof, and a second island to the east. Seven bridges joined these four pieces of land:',
    bridgeList: [
      'two bridges between the north bank and the central island;',
      'two bridges between the central island and the south bank;',
      'one bridge between the two islands;',
      'one bridge from the eastern island to each bank.',
    ],
    figure: {
      label: 'Figure 1.',
      captionHtml:
        'Königsberg in 1736: four landmasses joined by seven bridges. Try the stroll yourself, or watch a sample attempt that gets stuck.',
    },
    outroHtml:
      'Try it above: residents reportedly searched for a stroll that crosses every bridge exactly once and, for the version on our poster, ends where it started. Nobody found one. Not finding a route does not prove that none exists, and this is where Euler came in.',
  },

  answer: {
    heading: 'So… is it possible?',
    noHtml:
      '<strong>No!</strong> And you don’t need to try every route to be sure. Here is the trick.',
    ruleHtml:
      '<strong>The in-and-out rule.</strong> Every time you walk <em>through</em> a piece of land, you arrive on one bridge and leave on another. So the bridges of that land are used in pairs: one in, one out.',
    evenHtml:
      'If you must end where you started, <em>every</em> piece of land needs an even number of bridges (2, 4, 6…).',
    countHtml: '<strong>Count them:</strong>',
    landCardsAria: 'Bridge count for each landmass',
    landCards: [
      { id: 'A', name: 'North bank', bridges: 3, leftover: '1 pair + 1 left over' },
      { id: 'B', name: 'Kneiphof', bridges: 5, leftover: '2 pairs + 1 left over' },
      { id: 'C', name: 'Eastern island', bridges: 3, leftover: '1 pair + 1 left over' },
      { id: 'D', name: 'South bank', bridges: 3, leftover: '1 pair + 1 left over' },
    ],
    bridgesWord: 'bridges',
    oddLabel: 'odd',
    conclusionHtml:
      'All four have an odd number. One bridge is always left over, so the loop is impossible. Leonhard Euler found this trick in 1736.',
    olympiadNoteHtml:
      'Thinking like this — finding a simple rule instead of trying everything — is exactly what the beOI is about.',
  },

  dangerZone: {
    label: 'Danger zone',
    title: 'I want to know everything about this problem with graph theory',
    subtitle: 'Proofs, theorems and algorithms ahead.',
    warningTitle: 'Heads-up — out of scope',
    warningText:
      'This is completely out of scope for the beOI qualification rounds, the quarter-final and the semi-final. You do not need any of it to do well.',
    cpBefore: 'If you enjoy this kind of topic, have a look at',
    cpLink: 'competitive programming',
    cpAfter: '.',
  },

  modelling: {
    heading: 'Modelling: from map to graph',
    introHtml:
      'Euler noticed that almost everything on the map is irrelevant. The shape of the islands, the length of the bridges and the layout of the streets cannot affect the answer. Only one thing matters: which pieces of land each bridge connects.',
    graphHtml:
      'So discard the map. Replace each landmass by a point, called a <strong>vertex</strong>, and each bridge by a line between two vertices, called an <strong>edge</strong>. The result is a <strong>graph</strong> <span class="nowrap"><var>G</var> = (<var>V</var>, <var>E</var>)</span> with four vertices and seven edges.',
    graphFigure: {
      svgTitle: 'The Königsberg bridges as a multigraph',
      svgDesc:
        'Four vertices: A north bank at the top, B central island on the left, C eastern island on the right, D south bank at the bottom. Seven edges: 1 and 2 join A and B, 3 and 4 join B and D, 5 joins A and C, 6 joins B and C, 7 joins C and D.',
      label: 'Figure 2.',
      captionHtml:
        'Königsberg as a graph. Vertices: A north bank, B central island, C eastern island, D south bank. Edges 1–2 join A and B, 3–4 join B and D, 5 joins A and C, 6 joins B and C, 7 joins C and D. Compare with the map in Figure&nbsp;1: same letters, same bridge numbers.',
    },
    multigraphHtml:
      'Some pairs of vertices are joined by two edges: A–B and B–D. A graph that allows such parallel edges is called a <strong>multigraph</strong>. In this model the puzzle becomes a pure question about <var>G</var>: is there a closed walk that uses every edge exactly once? Such a walk is called an <strong>Eulerian circuit</strong>. An <strong>Eulerian path</strong> also uses every edge exactly once, but may end at a different vertex from where it started.',
  },

  degrees: {
    heading: 'Degrees',
    introHtml:
      'The <strong>degree</strong> deg(<var>v</var>) of a vertex <var>v</var> is the number of edge ends that touch it. Equivalently, it is the number of bridges leaving that landmass.',
    caption: 'Degree of each vertex in Figure 2',
    headers: {
      vertex: 'Vertex',
      landmass: 'Landmass',
      bridges: 'Bridges',
      degree: 'Degree',
    },
    oddLabel: '(odd)',
    sumLabel: 'Sum of degrees',
    handshakeHtml:
      'As a check, use the <strong>handshake lemma</strong>. Each edge has exactly two ends, and each end adds 1 to the degree of one vertex. So for every graph,',
    handshakeMathHtml:
      '<span class="nowrap">∑<sub><var>v</var> ∈ <var>V</var></sub> deg(<var>v</var>) = 2 |<var>E</var>|</span>,<br />and here <span class="nowrap">3 + 5 + 3 + 3 = 14 = 2 × 7.</span>',
    consequenceHtml:
      'One consequence: the sum of all degrees is even, so every graph has an even number of odd-degree vertices.',
  },

  invariant: {
    heading: 'The invariant',
    walkHtml:
      'Suppose a walk uses every edge exactly once. Look at a vertex <var>v</var> that is neither its start nor its end. Each time the walk arrives at <var>v</var> along one edge, it must leave along a different, unused edge. The edges at <var>v</var> are therefore used in pairs, one in and one out. Because every edge is used, all edges at <var>v</var> are paired, and deg(<var>v</var>) is even.',
    endpointsHtml:
      'Only the two endpoints of the walk get one unpaired edge each: the first edge out of the start and the last edge into the end. If the walk is closed, the start and the end are the same vertex, and those two edges also form a pair. The parity of the degree is an invariant that no clever route can avoid.',
    theorem: {
      title: 'Euler’s theorem',
      introHtml: 'Let <var>G</var> be a connected multigraph (ignoring vertices with no edges).',
      circuitHtml:
        '<var>G</var> has an <strong>Eulerian circuit</strong> if and only if every vertex has even degree.',
      pathHtml:
        '<var>G</var> has an <strong>Eulerian path</strong> if and only if it has 0 or 2 vertices of odd degree. With 2, every such path starts at one odd vertex and ends at the other.',
    },
    converseHtml:
      'The argument above proves the “only if” direction, which is all the puzzle needs. Euler stated the converse without proof. Carl Hierholzer proved it in 1873 by giving a construction.',
    konigsbergHtml:
      'Königsberg has <strong>four</strong> vertices of odd degree. That rules out an Eulerian circuit, which needs zero odd vertices. It also rules out an Eulerian path, which allows at most two. So the loop asked for on the poster does not exist, and neither does any route, closed or open, that crosses each bridge exactly once.',
  },

  informatics: {
    heading: 'Why it matters in informatics',
    introHtml:
      'Euler’s theorem replaces a search with a count. You do not need to try any routes, only to count degrees:',
    complexityHtml:
      'This runs in <span class="nowrap"><var>O</var>(<var>V</var> + <var>E</var>)</span> time: one pass over the edges, then one over the vertices. A complete check also verifies that all edges belong to a single connected component, using one breadth-first or depth-first search, which is also <span class="nowrap"><var>O</var>(<var>V</var> + <var>E</var>)</span>. A naive search that tries every order of the edges can examine up to <var>E</var>! sequences. That is 7! = 5,040 for Königsberg, but <span class="nowrap">20! ≈ 2.4 × 10<sup>18</sup></span> for a graph with only 20 edges.',
    listIntroHtml: 'The same idea appears throughout computer science:',
    items: [
      '<strong>Hierholzer’s algorithm</strong> builds an Eulerian circuit in <var>O</var>(<var>E</var>) time. Follow unused edges until you return to the start. Then, from any vertex on that circuit that still has unused edges, build another circuit and splice it in.',
      'The <strong>Chinese postman problem</strong> asks for the shortest closed walk that uses every edge <em>at least</em> once, as for mail delivery, snow ploughs or street sweepers. On undirected graphs, it is solved in polynomial time. Pair up the odd vertices with a minimum-weight perfect matching, weighted by shortest-path distance. Then walk the shortest path between each matched pair a second time.',
      '<strong>De Bruijn graphs in genome assembly</strong>: DNA sequencers read millions of short fragments, which are cut into overlapping substrings of length <var>k</var>. Each substring becomes a directed edge from its first <var>k</var>&nbsp;−&nbsp;1 letters to its last <var>k</var>&nbsp;−&nbsp;1 letters. Rebuilding the genome then becomes a search for an Eulerian path. In directed graphs, the condition is that in-degree equals out-degree at every vertex, except that the start has one extra outgoing edge and the end has one extra incoming edge.',
      '<strong>The Hamiltonian contrast</strong>: change “every edge exactly once” to “every vertex exactly once” and no simple degree test works anymore. Deciding whether a graph has a Hamiltonian path is NP-complete. No polynomial-time algorithm is known, and finding one would prove P = NP.',
    ],
  },

  exercise: {
    heading: 'Exercise',
    mainHtml:
      'The city builds an eighth bridge. Between which two landmasses could it go so that an Eulerian path exists? List every pair that works, and say where the walk must start and end in each case.',
    followUpHtml:
      'Follow-up: can a single new bridge ever make an Eulerian circuit possible? What is the minimum number of new bridges needed for that?',
  },

  olympiad: {
    heading: 'This is what the olympiad is about',
    reasoningHtml:
      'Euler did not solve the puzzle by trying more routes. He found the right model and the right invariant. The Belgian Olympiad in Informatics asks for the same kind of reasoning, then for a program that applies it.',
    datesHtml:
      'The online qualification rounds run from <strong class="nowrap">1 December 2026</strong> to <strong class="nowrap">28 February 2027</strong>. You can take them at school or at home, in Blockly or Python.',
    homeCta: 'Discover the beOI contest',
    labCta: 'Train on the beOI Lab',
  },
};
