import type { CSSProperties, ReactNode } from "react";
import { MASTER, type Tokens, FONT } from "./tokens";

// ──────────────────────────────────────────────────────────────────
// PlateHeader — the top marginal strip every page wears.
// Format: PLATE NN · ROUTE · DOSSIER CODE · — — · YEAR
// ──────────────────────────────────────────────────────────────────

interface PlateHeaderProps {
  plate: string;
  route: string;
  code: string;
  year?: string;
  tokens?: Tokens;
}

// Inline top nav — same three groups as the footer route grid.
// Compact mono strip; wraps on narrow viewports. Inverts colors
// when the page passes its own tokens (archive, brochure).
const NAV_GROUPS: { label: string; items: [string, string][] }[] = [
  {
    label: "Essay",
    items: [
      ["/chair/essay", "Essay"],
      ["/chair/subsystems", "Subsystems"],
      ["/chair/precedents", "Precedents"],
      ["/chair/lineage", "Lineage"],
      ["/chair/refusal", "Refusal"],
      ["/chair/concepts", "Concepts"],
    ],
  },
  {
    label: "Artifacts",
    items: [
      ["/chair", "Brochure"],
      ["/chair/zine", "Zine"],
      ["/chair/archive", "Archive"],
    ],
  },
  {
    label: "End",
    items: [
      ["/chair/colophon", "Colophon"],
    ],
  },
];

export function PlateHeader({
  plate, route, code, year = "MMXXVI", tokens = MASTER,
}: PlateHeaderProps) {
  return (
    <div>
      {/* Plate identification strip — original */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "14px 24px", borderBottom: `0.75px solid ${tokens.rule}`,
        fontFamily: FONT.mono, fontSize: 10.5, letterSpacing: "0.22em",
        textTransform: "uppercase", color: tokens.inkMute,
      }}>
        <div style={{ display: "flex", gap: 22, alignItems: "center" }}>
          <a href="/chair/essay" style={{
            color: tokens.accent, fontWeight: 600, textDecoration: "none",
            display: "flex", alignItems: "center", gap: 8,
          }}>
            <ChairGlyph size={14} stroke={tokens.accent} />
            <span>On the Chair</span>
          </a>
          <span style={{ color: tokens.inkFaint }}>·</span>
          <span style={{ color: tokens.accent, fontWeight: 600 }}>plate {plate}</span>
          <span style={{ color: tokens.inkDim }}>{route}</span>
        </div>
        <div style={{ display: "flex", gap: 22, alignItems: "center" }}>
          <span>{code}</span>
          <span style={{ color: tokens.inkFaint }}>— — —</span>
          <span>{year}</span>
        </div>
      </div>

      {/* Route nav strip — same set as the footer route grid so a
          reader on any page is one click from any other. */}
      <nav
        aria-label="Routes"
        style={{
          display: "flex", justifyContent: "center", alignItems: "center",
          gap: "0.9rem", flexWrap: "wrap",
          padding: "10px 24px",
          borderBottom: `0.75px solid ${tokens.rule}`,
          fontFamily: FONT.mono, fontSize: 9.5, letterSpacing: "0.18em",
          textTransform: "uppercase", color: tokens.inkMute,
        }}
        className="plate-nav"
      >
        {NAV_GROUPS.map((group, gi) => (
          <span key={group.label} style={{
            display: "inline-flex", alignItems: "center",
            gap: "0.9rem", flexWrap: "wrap",
          }}>
            {gi > 0 && <span style={{ color: tokens.inkFaint, opacity: 0.6 }}>‖</span>}
            {group.items.map((item, ii) => (
              <span key={item[0]} style={{
                display: "inline-flex", alignItems: "center", gap: "0.9rem",
              }}>
                {ii > 0 && <span style={{ color: tokens.inkFaint }}>·</span>}
                <a href={item[0]} style={{
                  color: "inherit", textDecoration: "none",
                }}>{item[1]}</a>
              </span>
            ))}
          </span>
        ))}
      </nav>
      <style>{`
        @media (max-width: 700px) {
          .plate-nav { font-size: 8.5px !important; gap: 0.6rem !important; padding: 8px 12px !important; }
        }
      `}</style>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
// PlateFooter — companion to the header. Folio left, mark center,
// route signature right.
// ──────────────────────────────────────────────────────────────────

interface PlateFooterProps {
  folio: string;
  total?: string;
  section: string;
  tokens?: Tokens;
}

export function PlateFooter({
  folio, total = "XLII", section, tokens = MASTER,
}: PlateFooterProps) {
  return (
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "14px 24px", borderTop: `0.75px solid ${tokens.rule}`,
      fontFamily: FONT.mono, fontSize: 10.5, letterSpacing: "0.22em",
      textTransform: "uppercase", color: tokens.inkMute,
    }}>
      <span>{folio} / {total}</span>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <ChairGlyph size={16} stroke={tokens.accent} />
        <span style={{ color: tokens.inkDim }}>{section}</span>
      </div>
      <span style={{ color: tokens.inkFaint }}>autostimulus · /chair</span>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
// ChairGlyph — the project's recurring mark.
// A schematic ring-with-occupant inscribed in a square. Used at small
// sizes (16–32 px) in chrome and at larger sizes (60–120 px) as a
// section ornament on detail pages.
// ──────────────────────────────────────────────────────────────────

interface ChairGlyphProps {
  size?: number;
  stroke?: string;
  fill?: string;
  phase?: string | null;
}

export function ChairGlyph({
  size = 24, stroke = MASTER.accent, fill = "none", phase = null,
}: ChairGlyphProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="13" stroke={stroke} strokeWidth="1.1" fill={fill} />
      <path d="M 7 19 L 7 15 Q 7 13.6 8.4 13.4 L 14 12.5 L 21 10.5 Q 22.4 10.1 22.8 11.6 L 23.6 14.4 Q 23.6 15.2 23 15.4 L 9.2 21 Q 8 21.4 7.4 20.6 Z"
            stroke={stroke} strokeWidth="0.9" fill="none" />
      <path d="M 5 14 Q 8 15.4 13 15.6" stroke={stroke} strokeWidth="0.6" fill="none" opacity="0.65" />
      <path d="M 5 17 Q 8 18.4 13 17.4" stroke={stroke} strokeWidth="0.6" fill="none" opacity="0.65" />
      {phase && (
        <text x="16" y="30" textAnchor="middle" fontFamily={FONT.mono}
              fontSize="3.6" fill={stroke} letterSpacing="0.2em"
              style={{ textTransform: "uppercase" }}>{phase}</text>
      )}
    </svg>
  );
}

// ──────────────────────────────────────────────────────────────────
// SectionMark — section header used throughout the essay.
// ──────────────────────────────────────────────────────────────────

interface SectionMarkProps {
  n: string;
  title: string;
  tokens?: Tokens;
}

export function SectionMark({ n, title, tokens = MASTER }: SectionMarkProps) {
  const id = `section-${n.toLowerCase()}`;
  return (
    <div
      id={id}
      style={{
        display: "grid", gridTemplateColumns: "74px 1fr",
        gap: 16, alignItems: "baseline",
        paddingTop: 18, marginBottom: 18,
        borderTop: `1px solid ${tokens.rule}`,
        scrollMarginTop: "5rem",
      }}
    >
      <span style={{
        fontFamily: FONT.mono, fontSize: 11, color: tokens.accent,
        fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase",
      }}>§ {n}</span>
      <span style={{
        fontFamily: FONT.serif, fontSize: 26, fontStyle: "italic",
        fontWeight: 500, color: tokens.ink,
        letterSpacing: "-0.01em", lineHeight: 1.1,
      }}>{title}</span>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
// Marginalia — small inline annotation pinned to the page's gutter
// rule. Used for footnote text, figure references, dossier codes.
// ──────────────────────────────────────────────────────────────────

interface MarginaliaProps {
  side?: "left" | "right";
  top?: number;
  tokens?: Tokens;
  children: ReactNode;
}

export function Marginalia({
  side = "left", top = 0, tokens = MASTER, children,
}: MarginaliaProps) {
  const isLeft = side === "left";
  const style: CSSProperties = {
    position: "absolute",
    top,
    [isLeft ? "right" : "left"]: "calc(100% + 18px)",
    width: 150,
    fontFamily: FONT.mono,
    fontSize: 9.5,
    lineHeight: 1.5,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    color: tokens.inkMute,
    textAlign: isLeft ? "right" : "left",
  };
  return <aside style={style}>{children}</aside>;
}
