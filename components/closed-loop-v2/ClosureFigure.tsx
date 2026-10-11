/**
 * The closure figure — the argument's opening plate. The platform's
 * policy selects stimuli; the population's responses update the policy;
 * the update runs against the distribution the policy itself produced.
 * The barred stub marks the absent exogenous channel.
 *
 * Drawn at full width (viewBox 760×360); strokes ink in via DrawOnView
 * (pathLength=1 on every shape). Text does not animate.
 */
const MONO = "var(--font-jetbrains-mono), ui-monospace, Menlo, monospace";
const SERIF = 'var(--font-eb-garamond-full), Georgia, "Times New Roman", serif';
const INK = "var(--color-ink-70)";
const FAINT = "var(--color-ink-50)";
const ACCENT = "var(--color-oxblood)";

export function ClosureFigure() {
  return (
    <svg
      viewBox="0 0 760 360"
      width="100%"
      role="img"
      aria-labelledby="closure-fig-title"
      aria-describedby="closure-fig-desc"
      style={{ display: "block", maxWidth: "48rem", margin: "0 auto" }}
    >
      <title id="closure-fig-title">The closed loop</title>
      <desc id="closure-fig-desc">
        The platform&apos;s policy selects stimuli; the population&apos;s
        responses update the policy the platform then re-derives — the update
        runs against the distribution the policy itself produced. A barred
        stub marks the absent exogenous channel.
      </desc>

      <g fill="none" stroke={INK} strokeWidth={1.2} strokeLinecap="round">
        {/* nodes */}
        <rect x="64" y="150" width="170" height="84" pathLength={1} />
        <rect x="526" y="150" width="170" height="84" pathLength={1} />

        {/* delivery arc — platform to population */}
        <path pathLength={1} d="M 149 150 C 149 56, 611 56, 611 150" />
        <path pathLength={1} d="M 611 150 L 603 131" />
        <path pathLength={1} d="M 611 150 L 619 131" />

        {/* the closure — population back to platform (the loop itself) */}
        <path
          pathLength={1}
          stroke={ACCENT}
          d="M 611 234 C 611 322, 149 322, 149 234"
        />
        <path pathLength={1} stroke={ACCENT} d="M 149 234 L 141 253" />
        <path pathLength={1} stroke={ACCENT} d="M 149 234 L 157 253" />

        {/* no exogenous channel — barred stub */}
        <path pathLength={1} d="M 20 250 L 64 250" />
        <path pathLength={1} d="M 32 240 L 42 260" />
      </g>

      {/* the stable point on the closure */}
      <circle cx="380" cy="301" r="3.6" fill={ACCENT} stroke="none" />

      <g fontFamily={MONO} fontSize="12.5" letterSpacing="0.04em" fill={INK}>
        <text x="149" y="40" textAnchor="middle">
          the policy selects stimuli
        </text>
        <text x="380" y="212" textAnchor="middle">
          the update runs against the world it produced
        </text>
        <text x="30" y="272" fill={FAINT} fontSize="12">
          no exogenous channel
        </text>
        <text x="397" y="305" fill={ACCENT} fontSize="12.5">
          θ* the stable point
        </text>
      </g>

      <g fontFamily={MONO} fontSize="11.5" letterSpacing="0.14em" fill={INK}>
        <text x="149" y="184" textAnchor="middle">
          THE PLATFORM
        </text>
        <text x="611" y="184" textAnchor="middle">
          THE POPULATION
        </text>
      </g>

      <g fontFamily={SERIF} fontStyle="italic" fontSize="19" fill={INK}>
        <text x="149" y="213" textAnchor="middle">
          policy θ
          <tspan fontSize="12" dy="4">
            t
          </tspan>
        </text>
        <text x="611" y="213" textAnchor="middle">
          responses x
          <tspan fontSize="12" dy="4">
            i
          </tspan>
        </text>
      </g>
    </svg>
  );
}
