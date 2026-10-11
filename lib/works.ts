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
  coverNote: string;
  cover: { bg: string; ink: string; accent: string };
}

export const WORKS: Work[] = [
  {
    stamp: "FOLLOW THE WIRES.",
    plain: "an atlas of the socialization apparatus — what the crowd makes of you",
    title: "The Psychopolitics of Socialization",
    coverNote: "relational atlas",
    cover: { bg: "#333e4a", ink: "#e7e3d9", accent: "#7fa3b8" },
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
    coverNote: "framework",
    cover: { bg: "#f1f2ef", ink: "#191b1e", accent: "#174a77" },
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
    coverNote: "coloring book",
    cover: { bg: "#f2ead8", ink: "#221d16", accent: "#b8222a" },
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
    coverNote: "agency manual",
    cover: { bg: "#efede5", ink: "#20242a", accent: "#9c1818" },
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
    coverNote: "brochure & zine",
    cover: { bg: "#ece1cd", ink: "#3a2f22", accent: "#8c4a32" },
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
    coverNote: "specimen atlas",
    cover: { bg: "#e9e4d6", ink: "#2c2a26", accent: "#8a6a28" },
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
    coverNote: "essay descent",
    cover: { bg: "#151412", ink: "#ddd6c8", accent: "#ff2e00" },
    mark: "■",
    year: "2015",
    register: "essay · interactive descent · crib → deathbed",
    href: "/manufacture-of-the-subject",
    status: "live",
  },
];
