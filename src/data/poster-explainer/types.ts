import type { Locale } from '../i18n';

export type LandId = 'A' | 'B' | 'C' | 'D';
export type BridgeNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7;

/**
 * Conventions used by every copy string in this folder:
 *
 * - Fields ending in `Html` contain trusted inline HTML (`<strong>`, `<em>`, `<var>`,
 *   `<sub>`, `<sup>`, `<span class="nowrap">`, `&nbsp;`, `<br />`). Render them with `set:html`.
 *   All other strings are plain text (render with normal `{expression}` interpolation).
 * - Math notation (G, V, E, deg, O(...), ∑) is identical in every locale.
 */

/* -------------------------------------------------------------------------- */
/* Interactive map                                                            */
/* -------------------------------------------------------------------------- */

/**
 * Message templates use `{placeholder}` tokens, replaced by `formatTemplate()`
 * (see `map-ui.ts`). Available placeholders:
 *
 * - `{n}`        bridge number, or number of crossed bridges (`bridgesCrossed`)
 * - `{total}`    total number of bridges (7)
 * - `{on}`       locative phrase for a landmass: `lands[id].on` ("on the north bank")
 * - `{land}`     bare spoken name of a landmass: `lands[id].spoken` ("the north bank")
 * - `{bridge}`   a single leftover bridge number (`leftoverOne`)
 * - `{bridges}`  comma-separated leftover bridge numbers (`leftoverMany`)
 * - `{leftover}` the already-formatted leftover sentence (`stuck`)
 */
export interface KoenigsbergMapUi {
  svgTitle: string;
  svgDesc: string;

  /** Per-landmass wording. */
  lands: Record<
    LandId,
    {
      /** Short label drawn on the map (keep it short: it must fit next to the island). */
      label: string;
      /** Bare name with article, for sentences: "the north bank". */
      spoken: string;
      /** Locative phrase ("on the north bank", "sur la rive nord", "am Nordufer"). */
      on: string;
    }
  >;

  /** Accessible names of the seven bridges. */
  bridgeAria: Record<BridgeNumber, string>;

  rules: {
    /** Visible heading above the three goal tiles. */
    heading: string;
    /** `aria-label` of the rules list. */
    aria: string;
    /** Icons are language-independent, titles are not. */
    items: readonly [
      { icon: string; title: string },
      { icon: string; title: string },
      { icon: string; title: string },
    ];
    note: string;
  };

  panel: {
    /** Template: `{n}`, `{total}`. */
    bridgesCrossed: string;
    pickStart: string;
    undo: string;
    reset: string;
    watchAttempt: string;
    watching: string;
    teaser: string;
  };

  messages: {
    /** Appended (after a space) to `onLand` / `backOnLand`. */
    clickBridge: string;
    /** `{on}` */
    onLand: string;
    /** `{on}` */
    backOnLand: string;
    /** `{n}`, `{on}` */
    crossedBridge: string;
    /** `{n}`, `{on}` */
    undid: string;
    /** `{on}` */
    startingOn: string;
    /** Status message while the sample attempt plays. */
    watchingSample: string;
    /** `{on}`, `{leftover}` */
    stuck: string;
    /** `{bridge}` — exactly one bridge left uncrossed. */
    leftoverOne: string;
    /** `{bridges}` — several bridges left uncrossed. */
    leftoverMany: string;
    /** `{on}` — all 7 bridges crossed, but not back at the start. */
    allCrossedWrongEnd: string;
    /** The joke message: all bridges crossed AND back home. */
    impossibleSuccess: string;
    /** `aria-label` of a landmass while picking a start: `{on}`. */
    startAria: string;
  };
}

/* -------------------------------------------------------------------------- */
/* Page copy                                                                  */
/* -------------------------------------------------------------------------- */

export interface FigureCaption {
  /** "Figure 1." / "Figure 2." — rendered in `<strong>`. */
  label: string;
  /** Caption body (HTML, may contain `&nbsp;`). */
  captionHtml: string;
}

export interface LandCardCopy {
  id: LandId;
  /** Name shown on the card ("Kneiphof" for B). */
  name: string;
  bridges: number;
  /** "1 pair + 1 left over". Page renders `{bridges} = {leftover}`. */
  leftover: string;
}

export interface PosterExplainerCopy {
  lang: Locale;

  meta: {
    title: string;
    description: string;
  };

  /** Locale-prefixed internal/external links. */
  homeHref: string;
  competitiveProgrammingHref: string;
  labHref: string;
  /** sr-only suffix on the Lab link, includes the leading space. */
  labOpensNewTab: string;

  header: {
    eyebrow: string;
    title: string;
    introHtml: string;
  };

  poster: {
    /** Accessible name of the poster download link. */
    label: string;
    cta: string;
    caption: string;
    /** "Also in" — followed by the other-language links. */
    alsoIn: string;
  };

  /** Short names used in the graph figure and in the degrees table. */
  landNames: Record<LandId, string>;

  problem: {
    heading: string;
    introHtml: string;
    bridgeList: readonly string[];
    figure: FigureCaption;
    outroHtml: string;
  };

  answer: {
    heading: string;
    noHtml: string;
    ruleHtml: string;
    evenHtml: string;
    countHtml: string;
    landCardsAria: string;
    landCards: readonly LandCardCopy[];
    /** Word after the count: "bridges". */
    bridgesWord: string;
    /** Badge on odd counts: "odd". */
    oddLabel: string;
    conclusionHtml: string;
    olympiadNoteHtml: string;
  };

  dangerZone: {
    label: string;
    title: string;
    subtitle: string;
    warningTitle: string;
    warningText: string;
    /** "…have a look at" + link + "." — link target is `competitiveProgrammingHref`. */
    cpBefore: string;
    cpLink: string;
    cpAfter: string;
  };

  modelling: {
    heading: string;
    introHtml: string;
    graphHtml: string;
    graphFigure: FigureCaption & {
      svgTitle: string;
      svgDesc: string;
    };
    multigraphHtml: string;
  };

  degrees: {
    heading: string;
    introHtml: string;
    caption: string;
    headers: {
      vertex: string;
      landmass: string;
      bridges: string;
      degree: string;
    };
    /** "(odd)" next to each degree. */
    oddLabel: string;
    sumLabel: string;
    handshakeHtml: string;
    /** Display math block (HTML, includes `<br />`). */
    handshakeMathHtml: string;
    consequenceHtml: string;
  };

  invariant: {
    heading: string;
    walkHtml: string;
    endpointsHtml: string;
    theorem: {
      title: string;
      introHtml: string;
      circuitHtml: string;
      pathHtml: string;
    };
    converseHtml: string;
    konigsbergHtml: string;
  };

  informatics: {
    heading: string;
    introHtml: string;
    complexityHtml: string;
    listIntroHtml: string;
    items: readonly string[];
  };

  exercise: {
    heading: string;
    mainHtml: string;
    followUpHtml: string;
  };

  olympiad: {
    heading: string;
    reasoningHtml: string;
    datesHtml: string;
    homeCta: string;
    labCta: string;
  };
}
