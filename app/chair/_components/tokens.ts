// Shared palette + font tokens for /chair.
//
// The master register is warm cream + sepia-brick. Three "register
// inversions" reuse the chrome with their own paper-and-ink:
//   · brochure  — clinical showroom (white + blueprint navy)
//   · zine      — riso protest      (black + cream + riso red)
//   · archive   — scholarly slate   (cream + slate-blue)
//
// Each surface imports the relevant Tokens record and passes it into
// the chrome components. Don't add new tokens here without confirming
// they're used by ≥ 2 surfaces.

export type Tokens = {
  paper: string;
  paper2: string;
  ink: string;
  inkDim: string;
  inkMute: string;
  inkFaint: string;
  rule: string;
  ruleSoft: string;
  accent: string;
  accentDim: string;
  accentBg: string;
};

// Master register — the essay & companions.
export const MASTER: Tokens = {
  paper:     "#ece2c8",
  paper2:    "#e3d8ba",
  ink:       "#1a1610",
  inkDim:    "#514538",
  inkMute:   "#5e5244",
  inkFaint:  "#675b49",
  rule:      "rgba(26,22,16,0.18)",
  ruleSoft:  "rgba(26,22,16,0.10)",
  accent:    "#7a2818",
  accentDim: "#a04a30",
  accentBg:  "rgba(122,40,24,0.06)",
};

// Brochure — clinical showroom inversion.
export const BROCHURE: Tokens = {
  paper:     "#fafaf7",
  paper2:    "#ffffff",
  ink:       "#0d0d10",
  inkDim:    "#3a3a3e",
  inkMute:   "#68686f",
  inkFaint:  "#6d6d75",
  rule:      "rgba(13,13,16,0.10)",
  ruleSoft:  "rgba(13,13,16,0.05)",
  accent:    "#15356c",
  accentDim: "#3a5b96",
  accentBg:  "#f0f3f9",
};

// Zine — riso protest inversion.
export const ZINE: Tokens = {
  paper:     "#1a1a1a",
  paper2:    "#0d0d0d",
  ink:       "#f3e7c8",
  inkDim:    "rgba(243,231,200,0.72)",
  inkMute:   "rgba(243,231,200,0.65)",
  inkFaint:  "rgba(243,231,200,0.55)",
  rule:      "rgba(243,231,200,0.18)",
  ruleSoft:  "rgba(243,231,200,0.10)",
  accent:    "#e84a2b",
  accentDim: "#b8341c",
  accentBg:  "rgba(232,74,43,0.10)",
};

// Archive — scholarly slate inversion (future-historian voice).
export const ARCHIVE: Tokens = {
  paper:     "#e7e0d0",
  paper2:    "#ddd6c5",
  ink:       "#1c1e26",
  inkDim:    "#3e4250",
  inkMute:   "#5f626e",
  inkFaint:  "#5e6067",  // raised to AA on #e7e0d0 (2026-10-10 program)
  rule:      "rgba(28,30,38,0.18)",
  ruleSoft:  "rgba(28,30,38,0.10)",
  accent:    "#3a4a5e",
  accentDim: "#5e7088",
  accentBg:  "rgba(58,74,94,0.05)",
};

// Type — referenced through CSS variables defined in layout.tsx.
export const FONT = {
  serif:    "var(--font-spectral)",
  mono:     "var(--font-plex-mono)",
  manrope:  "var(--font-manrope)",
  italic:   "var(--font-source-serif)",
} as const;
