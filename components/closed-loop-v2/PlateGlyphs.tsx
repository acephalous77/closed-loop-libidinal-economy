/**
 * Authored marks for the twelve dynamics plates — one per mechanism,
 * drawn in a single stroke weight on a 28×28 grid, inheriting
 * currentColor. Signposts, not icons: each mark is the plate's
 * mechanism in its minimal geometry.
 */
const S = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function PlateGlyph({ slug }: { slug: string }) {
  switch (slug) {
    case "foreclosure-clock":
      return (
        <svg viewBox="0 0 28 28" width="28" height="28" aria-hidden {...S}>
          <circle cx="14" cy="14" r="10" />
          <path d="M14 14 V7" />
          <path d="M14 14 L19 17" />
          <path d="M14 4v2 M24 14h-2 M14 24v-2 M4 14h2" />
        </svg>
      );
    case "chrono-debt-spectrum":
      return (
        <svg viewBox="0 0 28 28" width="28" height="28" aria-hidden {...S}>
          <path d="M4 22 H24" />
          <path d="M7 22 V13" />
          <path d="M11 22 V16" />
          <path d="M15 22 V18.5" />
          <path d="M19 22 V20" />
          <path d="M7 10 Q16 12 24 21" />
        </svg>
      );
    case "dividual-posterior":
      return (
        <svg viewBox="0 0 28 28" width="28" height="28" aria-hidden {...S}>
          <circle cx="10" cy="14" r="6" />
          <circle cx="15.5" cy="14" r="6" />
          <circle cx="23" cy="14" r="1.4" />
        </svg>
      );
    case "metric-superego":
      return (
        <svg viewBox="0 0 28 28" width="28" height="28" aria-hidden {...S}>
          <path d="M14 5 L24 22 H4 Z" />
          <circle cx="14" cy="17" r="1.7" />
          <path d="M20 4 L16.2 9.4" />
        </svg>
      );
    case "captured-resonance":
      return (
        <svg viewBox="0 0 28 28" width="28" height="28" aria-hidden {...S}>
          <circle cx="7" cy="14" r="4.5" />
          <circle cx="21" cy="14" r="4.5" />
          <path d="M7 14 L9.5 11.5" />
          <path d="M21 14 L18.5 16.5" />
          <path d="M11.5 12.5 Q14 9 16.5 12.5" />
        </svg>
      );
    case "libidinal-routing":
      return (
        <svg viewBox="0 0 28 28" width="28" height="28" aria-hidden {...S}>
          <circle cx="5" cy="6" r="1.6" />
          <circle cx="5" cy="12" r="1.6" />
          <circle cx="5" cy="18" r="1.6" />
          <circle cx="5" cy="24" r="1.6" />
          <path d="M6.6 6 Q18 12 23 14" />
          <path d="M6.6 12 Q18 13 23 14" />
          <path d="M6.6 18 Q18 15 23 14" />
          <path d="M6.6 24 Q18 16 23 14" />
          <circle cx="23.5" cy="14" r="2" />
        </svg>
      );
    case "somatic-hawkes":
      return (
        <svg viewBox="0 0 28 28" width="28" height="28" aria-hidden {...S}>
          <path d="M4 14 H24" />
          <path d="M7 9v10" strokeDasharray="2 3" />
          <path d="M11 7v14" />
          <path d="M13 6v16" />
          <path d="M14.8 6v16" />
          <path d="M17 7.5v13" />
          <path d="M21 10v8" strokeDasharray="2 3" />
        </svg>
      );
    case "cohort-gradient":
      return (
        <svg viewBox="0 0 28 28" width="28" height="28" aria-hidden {...S}>
          <path d="M5 22 H23" />
          <path d="M5 22 L23 15" />
          <path d="M5 22 L20 9" />
          <path d="M5 22 L17 4" />
        </svg>
      );
    case "intervention-asymmetry":
      return (
        <svg viewBox="0 0 28 28" width="28" height="28" aria-hidden {...S}>
          <path d="M6 22 L22 7" strokeWidth={2.4} />
          <path d="M6 22 L20 11" strokeWidth={1.5} />
          <path d="M6 22 L16 15" strokeWidth={0.8} />
        </svg>
      );
    case "reclamation-trajectories":
      return (
        <svg viewBox="0 0 28 28" width="28" height="28" aria-hidden {...S}>
          <path d="M4 12 H24" strokeDasharray="3 2" />
          <path d="M5 5 Q12 15 20 22" />
          <path d="M10 4 Q15 15 22 21" />
          <path d="M4 21 Q13 17 24 8" />
        </svg>
      );
    case "crisis-boundary":
      return (
        <svg viewBox="0 0 28 28" width="28" height="28" aria-hidden {...S}>
          <path d="M6 24 Q12 19 12 14" />
          <path d="M12 14 Q12 9 18 5" />
          <path d="M12 14 Q12 9 6 5" />
        </svg>
      );
    case "network-coupling":
      return (
        <svg viewBox="0 0 28 28" width="28" height="28" aria-hidden {...S}>
          <circle cx="14" cy="7" r="2.2" />
          <circle cx="6" cy="21" r="2.2" />
          <circle cx="22" cy="21" r="2.2" />
          <path d="M13 9 L7 19" />
          <path d="M15 9 L21 19" />
          <path d="M8.2 21 H19.8" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 28 28" width="28" height="28" aria-hidden {...S}>
          <circle cx="14" cy="14" r="9" />
        </svg>
      );
  }
}
