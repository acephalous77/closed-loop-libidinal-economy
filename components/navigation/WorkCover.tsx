import type { Work } from "@/lib/works";

const SERIF =
  'var(--font-eb-garamond-full), Georgia, "Times New Roman", serif';
const MONO =
  'var(--font-jetbrains-mono), ui-monospace, "SF Mono", Menlo, monospace';

/**
 * The work's press sheet — a tiny typographic cover composed from its
 * own register (ground, ink, accent) and its riso mark. Used in the
 * shelf (WorksDoor) and on the flyer's hover layer. Pure code: a
 * specimen, not an image.
 */
export function WorkCover({
  work,
  w = 64,
  h = 84,
}: {
  work: Work;
  w?: number;
  h?: number;
}) {
  const { bg, ink, accent } = work.cover;
  return (
    <span
      aria-hidden="true"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: w,
        height: h,
        background: bg,
        color: ink,
        border: `1px solid ${accent}`,
        padding: "0.4rem 0.45rem",
        flexShrink: 0,
        lineHeight: 1.1,
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <span
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          fontFamily: MONO,
          fontSize: Math.max(9, Math.round(h * 0.095)),
          letterSpacing: work.year.length > 6 ? "0.05em" : "0.12em",
          whiteSpace: "nowrap",
          textTransform: "uppercase",
          color: ink,
          opacity: 0.72,
        }}
      >
        <span>{work.year}</span>
        <span style={{ color: accent, opacity: 1 }}>{work.mark}</span>
      </span>

      <span style={{ color: accent, fontSize: h * 0.26, lineHeight: 1 }}>
        {work.mark}
      </span>

      <span>
        <span
          style={{
            display: "block",
            fontFamily: SERIF,
            fontStyle: "italic",
            fontSize: Math.max(10, Math.round(h * 0.105)),
            lineHeight: 1.2,
            textWrap: "balance",
          }}
        >
          {work.short}
        </span>
        <span
          style={{
            display: "block",
            marginTop: "0.3rem",
            fontFamily: MONO,
            fontSize: Math.max(7.5, Math.round(h * 0.08)),
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: ink,
        }}
      >
          {work.coverNote}
        </span>
      </span>
    </span>
  );
}
