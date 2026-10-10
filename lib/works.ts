/**
 * The works — the atelier's shelf. One record per work: its cut-out
 * mark (riso press-mark glyph), the terse stamped hit, the plain
 * description line (what it is · what it asks — P2 of the 2026-10-10
 * critique), the real title as identifier, year, register box, and
 * destination.
 *
 * Shared by the flyer (app/page.tsx) and the atelier door
 * (components/navigation/WorksDoor) so the shelf cannot drift.
 */
export interface Work {
  mark: string;
  stamp: string;
  plain: string;
  title: string;
  year: string;
  register: string;
  href: string;
  status: "live" | "in production";
}

export const WORKS: Work[] = [
  {
    stamp: "FOLLOW THE WIRES.",
    plain: "an atlas of the socialization apparatus — what the crowd makes of you",
    title: "The Psychopolitics of Socialization",
    mark: "◉",
    year: "2026",
    register: "relational atlas · ~600 nodes · crowding science → the population present",
    href: "/psychopolitics-atlas/index.html",
    status: "live",
  },
  {
    stamp: "THE LOOP, ON THE RECORD.",
    plain: "a framework for attention under platform capture — prose, mathematics, operable plates",
    title: "The Closed-Loop Libidinal Economy",
    mark: "◆",
    year: "2026",
    register: "framework · essays · mathematics · interactive plates",
    href: "/closed-loop",
    status: "live",
  },
  {
    stamp: "COLOR THE COLLAPSE.",
    plain: "a coloring book of the national security state — 63 plates",
    title: "Patriotic Times",
    mark: "✱",
    year: "2025—2026",
    register: "coloring book · state failure · interactive plates",
    href: "/patriotic-times",
    status: "live",
  },
  {
    stamp: "YOUR LIFE, ON FILE.",
    plain: "a bureaucratic manual for the life course, filed as a case",
    title: "OHCOSE",
    mark: "▣",
    year: "2025",
    register: "office of human continuity & social equilibrium",
    href: "/ohcose",
    status: "live",
  },
  {
    stamp: "SIT. BE HELD. BE HARVESTED.",
    plain: "a product brochure and zine for a chair that harvests its sitter",
    title: "The Ouroboros Life System",
    mark: "●",
    year: "2021",
    register: "essay · brochure · speculative-design artifact",
    href: "/chair",
    status: "live",
  },
  {
    stamp: "WHAT SURVIVES CAPTURE?",
    plain: "an atlas of psychic surplus — what survives capture, and what it costs",
    title: "The Ouroboric Condition",
    mark: "○",
    year: "2018",
    register: "atlas · psychic surplus · interactive specimen plates",
    href: "/ouroboric-condition",
    status: "live",
  },
  {
    stamp: "A LIFE, ON THE METER.",
    plain: "an essay descent from crib to deathbed — the meter runs on you",
    title: "The Manufacture of the Subject",
    mark: "■",
    year: "2015",
    register: "essay · interactive descent · crib → deathbed",
    href: "/manufacture-of-the-subject",
    status: "live",
  },
];
