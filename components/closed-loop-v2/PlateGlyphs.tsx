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

export function PlateGlyph({
  slug,
  size = 28,
  strokeWidth = 1.3,
  className,
}: {
  slug: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  switch (slug) {
    case "foreclosure-clock":
      return (
        <svg
        viewBox="0 0 28 28"
        width={size}
        height={size}
        aria-hidden
        className={className}
        fill={S.fill}
        stroke={S.stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={S.strokeLinecap}
        strokeLinejoin={S.strokeLinejoin}
      >
          <circle pathLength={1} cx="14" cy="14" r="10" />
          <path pathLength={1} d="M14 14 V7" />
          <path pathLength={1} d="M14 14 L19 17" />
          <path pathLength={1} d="M14 4v2 M24 14h-2 M14 24v-2 M4 14h2" />
        </svg>
      );
    case "chrono-debt-spectrum":
      return (
        <svg
        viewBox="0 0 28 28"
        width={size}
        height={size}
        aria-hidden
        className={className}
        fill={S.fill}
        stroke={S.stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={S.strokeLinecap}
        strokeLinejoin={S.strokeLinejoin}
      >
          <path pathLength={1} d="M4 22 H24" />
          <path pathLength={1} d="M7 22 V13" />
          <path pathLength={1} d="M11 22 V16" />
          <path pathLength={1} d="M15 22 V18.5" />
          <path pathLength={1} d="M19 22 V20" />
          <path pathLength={1} d="M7 10 Q16 12 24 21" />
        </svg>
      );
    case "dividual-posterior":
      return (
        <svg
        viewBox="0 0 28 28"
        width={size}
        height={size}
        aria-hidden
        className={className}
        fill={S.fill}
        stroke={S.stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={S.strokeLinecap}
        strokeLinejoin={S.strokeLinejoin}
      >
          <circle pathLength={1} cx="10" cy="14" r="6" />
          <circle pathLength={1} cx="15.5" cy="14" r="6" />
          <circle pathLength={1} cx="23" cy="14" r="1.4" />
        </svg>
      );
    case "metric-superego":
      return (
        <svg
        viewBox="0 0 28 28"
        width={size}
        height={size}
        aria-hidden
        className={className}
        fill={S.fill}
        stroke={S.stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={S.strokeLinecap}
        strokeLinejoin={S.strokeLinejoin}
      >
          <path pathLength={1} d="M14 5 L24 22 H4 Z" />
          <circle pathLength={1} cx="14" cy="17" r="1.7" />
          <path pathLength={1} d="M20 4 L16.2 9.4" />
        </svg>
      );
    case "captured-resonance":
      return (
        <svg
        viewBox="0 0 28 28"
        width={size}
        height={size}
        aria-hidden
        className={className}
        fill={S.fill}
        stroke={S.stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={S.strokeLinecap}
        strokeLinejoin={S.strokeLinejoin}
      >
          <circle pathLength={1} cx="7" cy="14" r="4.5" />
          <circle pathLength={1} cx="21" cy="14" r="4.5" />
          <path pathLength={1} d="M7 14 L9.5 11.5" />
          <path pathLength={1} d="M21 14 L18.5 16.5" />
          <path pathLength={1} d="M11.5 12.5 Q14 9 16.5 12.5" />
        </svg>
      );
    case "libidinal-routing":
      return (
        <svg
        viewBox="0 0 28 28"
        width={size}
        height={size}
        aria-hidden
        className={className}
        fill={S.fill}
        stroke={S.stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={S.strokeLinecap}
        strokeLinejoin={S.strokeLinejoin}
      >
          <circle pathLength={1} cx="5" cy="6" r="1.6" />
          <circle pathLength={1} cx="5" cy="12" r="1.6" />
          <circle pathLength={1} cx="5" cy="18" r="1.6" />
          <circle pathLength={1} cx="5" cy="24" r="1.6" />
          <path pathLength={1} d="M6.6 6 Q18 12 23 14" />
          <path pathLength={1} d="M6.6 12 Q18 13 23 14" />
          <path pathLength={1} d="M6.6 18 Q18 15 23 14" />
          <path pathLength={1} d="M6.6 24 Q18 16 23 14" />
          <circle pathLength={1} cx="23.5" cy="14" r="2" />
        </svg>
      );
    case "somatic-hawkes":
      return (
        <svg
        viewBox="0 0 28 28"
        width={size}
        height={size}
        aria-hidden
        className={className}
        fill={S.fill}
        stroke={S.stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={S.strokeLinecap}
        strokeLinejoin={S.strokeLinejoin}
      >
          <path pathLength={1} d="M4 14 H24" />
          <path pathLength={1} d="M7 9v10" strokeDasharray="2 3" />
          <path pathLength={1} d="M11 7v14" />
          <path pathLength={1} d="M13 6v16" />
          <path pathLength={1} d="M14.8 6v16" />
          <path pathLength={1} d="M17 7.5v13" />
          <path pathLength={1} d="M21 10v8" strokeDasharray="2 3" />
        </svg>
      );
    case "cohort-gradient":
      return (
        <svg
        viewBox="0 0 28 28"
        width={size}
        height={size}
        aria-hidden
        className={className}
        fill={S.fill}
        stroke={S.stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={S.strokeLinecap}
        strokeLinejoin={S.strokeLinejoin}
      >
          <path pathLength={1} d="M5 22 H23" />
          <path pathLength={1} d="M5 22 L23 15" />
          <path pathLength={1} d="M5 22 L20 9" />
          <path pathLength={1} d="M5 22 L17 4" />
        </svg>
      );
    case "intervention-asymmetry":
      return (
        <svg
        viewBox="0 0 28 28"
        width={size}
        height={size}
        aria-hidden
        className={className}
        fill={S.fill}
        stroke={S.stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={S.strokeLinecap}
        strokeLinejoin={S.strokeLinejoin}
      >
          <path pathLength={1} d="M6 22 L22 7" strokeWidth={2.4} />
          <path pathLength={1} d="M6 22 L20 11" strokeWidth={1.5} />
          <path pathLength={1} d="M6 22 L16 15" strokeWidth={0.8} />
        </svg>
      );
    case "reclamation-trajectories":
      return (
        <svg
        viewBox="0 0 28 28"
        width={size}
        height={size}
        aria-hidden
        className={className}
        fill={S.fill}
        stroke={S.stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={S.strokeLinecap}
        strokeLinejoin={S.strokeLinejoin}
      >
          <path pathLength={1} d="M4 12 H24" strokeDasharray="3 2" />
          <path pathLength={1} d="M5 5 Q12 15 20 22" />
          <path pathLength={1} d="M10 4 Q15 15 22 21" />
          <path pathLength={1} d="M4 21 Q13 17 24 8" />
        </svg>
      );
    case "crisis-boundary":
      return (
        <svg
        viewBox="0 0 28 28"
        width={size}
        height={size}
        aria-hidden
        className={className}
        fill={S.fill}
        stroke={S.stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={S.strokeLinecap}
        strokeLinejoin={S.strokeLinejoin}
      >
          <path pathLength={1} d="M6 24 Q12 19 12 14" />
          <path pathLength={1} d="M12 14 Q12 9 18 5" />
          <path pathLength={1} d="M12 14 Q12 9 6 5" />
        </svg>
      );
    case "network-coupling":
      return (
        <svg
        viewBox="0 0 28 28"
        width={size}
        height={size}
        aria-hidden
        className={className}
        fill={S.fill}
        stroke={S.stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={S.strokeLinecap}
        strokeLinejoin={S.strokeLinejoin}
      >
          <circle pathLength={1} cx="14" cy="7" r="2.2" />
          <circle pathLength={1} cx="6" cy="21" r="2.2" />
          <circle pathLength={1} cx="22" cy="21" r="2.2" />
          <path pathLength={1} d="M13 9 L7 19" />
          <path pathLength={1} d="M15 9 L21 19" />
          <path pathLength={1} d="M8.2 21 H19.8" />
        </svg>
      );
    default:
      return (
        <svg
        viewBox="0 0 28 28"
        width={size}
        height={size}
        aria-hidden
        className={className}
        fill={S.fill}
        stroke={S.stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={S.strokeLinecap}
        strokeLinejoin={S.strokeLinejoin}
      >
          <circle pathLength={1} cx="14" cy="14" r="9" />
        </svg>
      );
  }
}
