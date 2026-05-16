/**
 * The four prose pieces + coda that make up "the argument".
 *
 * The order here is the sequence's reading order. Each piece's `slug`
 * is its URL segment under `/the-argument/`.
 */

export interface PieceTocEntry {
  number: string;
  title: string;
  slug: string;
}

export interface ArgumentPiece {
  /** URL segment under `/the-argument/`. */
  slug: string;
  /** Short ordinal shown in the index (e.g. "I.", "II.", "Coda"). */
  numeral: string;
  /** Display title — used in breadcrumbs, page titles, and the index. */
  title: string;
  /** One-line teaser shown on the index. */
  teaser: string;
  /** Compact subtitle / version line shown on the index card. */
  meta: string;
  /** Section TOC for the piece. */
  toc: PieceTocEntry[];
}

export const PIECES: ArgumentPiece[] = [
  {
    slug: "the-loop",
    numeral: "I.",
    title: "The Closed-Loop Libidinal Economy",
    teaser:
      "the framework laid out in prose: closure, foreclosure, the three modes",
    meta: "the loop · v 0.6",
    toc: [
      { number: "§1.", title: "What we're trying to name", slug: "what-were-trying-to-name" },
      { number: "§2.", title: "The loop, and why it is closed", slug: "the-loop-and-why-it-is-closed" },
      { number: "§3.", title: "What the loop produces", slug: "what-the-loop-produces" },
      { number: "§4.", title: "The reclamation theorem", slug: "the-reclamation-theorem" },
      { number: "§5.", title: "Three modes of intervention", slug: "three-modes-of-intervention" },
      { number: "§6.", title: "The asymmetry, and the timescale alignment", slug: "the-asymmetry-and-the-timescale-alignment" },
      { number: "§7.", title: "What the framework does not claim", slug: "what-the-framework-does-not-claim" },
      { number: "§8.", title: "What the argument adds up to", slug: "what-the-argument-adds-up-to" },
    ],
  },
  {
    slug: "citizen-after-the-pause",
    numeral: "II.",
    title: "The Citizen After the Pause",
    teaser:
      "adolescence-as-class, the foreclosure of democratic substrate, the political form already present",
    meta: "the citizen · v 0.2",
    toc: [
      { number: "§1.", title: "What democracy required", slug: "what-democracy-required" },
      { number: "§2.", title: "Adolescence-as-class, on the framework's prediction", slug: "adolescence-as-class-on-the-frameworks-prediction" },
      { number: "§3.", title: "The political form already present", slug: "the-political-form-already-present" },
      { number: "§4.", title: "Why deliberative repair fails", slug: "why-deliberative-repair-fails" },
      { number: "§5.", title: "The architectural ask, made concrete", slug: "the-architectural-ask-made-concrete" },
      { number: "§6.", title: "The pedagogical question", slug: "the-pedagogical-question" },
      { number: "§7.", title: "The formation-window applied to children", slug: "the-formation-window-applied-to-children" },
      { number: "§8.", title: "What cannot be saved", slug: "what-cannot-be-saved" },
    ],
  },
  {
    slug: "adolescence-without-outside",
    numeral: "III.",
    title: "Adolescence Without Outside",
    teaser:
      "the native cohort, the inheritance that vanished, the open question of Mode C",
    meta: "the cohort · v 0.2",
    toc: [
      { number: "I.", title: "The Native Cohort", slug: "i-the-native-cohort" },
      { number: "II.", title: "The Inheritance That Vanished", slug: "ii-the-inheritance-that-vanished" },
      { number: "III.", title: "Adolescence as Operating System", slug: "iii-adolescence-as-operating-system" },
      { number: "IV.", title: "The Politics That Look Like Politics", slug: "iv-the-politics-that-look-like-politics" },
      { number: "V.", title: "The Therapeutic Vernacular", slug: "v-the-therapeutic-vernacular" },
      { number: "VI.", title: "The Activism and the Exhaustion", slug: "vi-the-activism-and-the-exhaustion" },
      { number: "VII.", title: "The Loneliness That Cannot Find Its Object", slug: "vii-the-loneliness-that-cannot-find-its-object" },
      { number: "VIII.", title: "The Open Question of Mode C", slug: "viii-the-open-question-of-mode-c" },
      { number: "IX.", title: "Where the Outside Could Be", slug: "ix-where-the-outside-could-be" },
    ],
  },
  {
    slug: "sincere-captives",
    numeral: "IV.",
    title: "The Sincere Captives",
    teaser:
      "the LinkedIn fanatic, the post-cynical professional, the foreclosure of Mode C at the limit",
    meta: "the captive · v 0.2",
    toc: [
      { number: "I.", title: "The Genre", slug: "i-the-genre" },
      { number: "II.", title: "The Cynical Population and Its Remainder", slug: "ii-the-cynical-population-and-its-remainder" },
      { number: "III.", title: "The Threshold", slug: "iii-the-threshold" },
      { number: "IV.", title: "The Weiner Pivot", slug: "iv-the-weiner-pivot" },
      { number: "V.", title: "The Mechanism of Capture", slug: "v-the-mechanism-of-capture" },
      { number: "VI.", title: "The Inversion", slug: "vi-the-inversion" },
      { number: "VII.", title: "The Foreclosure of Mode C", slug: "vii-the-foreclosure-of-mode-c" },
      { number: "VIII.", title: "What the Body Knows", slug: "viii-what-the-body-knows" },
    ],
  },
  {
    slug: "note",
    numeral: "Coda.",
    title: "A Note on What This Document Is",
    teaser:
      "the document as Mode-B artifact; the open questions, named; the closing position",
    meta: "the coda · v 0.1",
    toc: [
      { number: "§1.", title: "The coupled object", slug: "the-coupled-object" },
      { number: "§2.", title: "The document as Mode-B artifact", slug: "the-document-as-mode-b-artifact" },
      { number: "§3.", title: "The arc and the load-bearing progression", slug: "the-arc-and-the-load-bearing-progression" },
      { number: "§4.", title: "The open questions, named", slug: "the-open-questions-named" },
      { number: "§5.", title: "What this document is not", slug: "what-this-document-is-not" },
      { number: "§6.", title: "The document's relation to its own future", slug: "the-documents-relation-to-its-own-future" },
      { number: "§7.", title: "The closing position", slug: "the-closing-position" },
    ],
  },
];

export function getPieceBySlug(slug: string): ArgumentPiece | undefined {
  return PIECES.find((p) => p.slug === slug);
}

export function getNeighbors(slug: string): {
  prev: ArgumentPiece | undefined;
  next: ArgumentPiece | undefined;
} {
  const idx = PIECES.findIndex((p) => p.slug === slug);
  if (idx === -1) return { prev: undefined, next: undefined };
  return {
    prev: idx > 0 ? PIECES[idx - 1] : undefined,
    next: idx < PIECES.length - 1 ? PIECES[idx + 1] : undefined,
  };
}
