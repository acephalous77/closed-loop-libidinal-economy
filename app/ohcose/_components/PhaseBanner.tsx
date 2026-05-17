/**
 * Phase header banner — solid red horizontal strip with white text,
 * matches the published-report's Phase divider pages
 * ("PHASE III — ADOLESCENT INTEGRATION (13–18)" style).
 *
 * Use at the top of phase parent pages and sub-protocol pages so
 * readers always know which phase they're inside.
 */

interface PhaseBannerProps {
  /** "PHASE III" or "SUB-PROTOCOL 1.1" */
  code: string;
  /** "Adolescent Integration" */
  title: string;
  /** "13–18" — age range or other qualifier */
  qualifier?: string;
}

export function PhaseBanner({ code, title, qualifier }: PhaseBannerProps) {
  return (
    <div
      style={{
        background: "var(--color-oxblood)",
        color: "var(--color-paper)",
        padding: "0.65rem 1rem",
        fontFamily: "var(--font-serif)",
        fontWeight: 700,
        fontSize: "0.95rem",
        letterSpacing: "0.05em",
        lineHeight: 1.3,
      }}
    >
      <span style={{ textTransform: "uppercase" }}>{code} — {title}</span>
      {qualifier && (
        <span style={{ opacity: 0.85, marginLeft: "0.4rem" }}>
          ({qualifier})
        </span>
      )}
    </div>
  );
}
