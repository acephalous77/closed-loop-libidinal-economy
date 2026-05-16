import { SvgM } from "@/components/ui/Math";

/**
 * Front-page orientation: a brief framing paragraph + a small SVG of the
 * closed loop + a visual map of the document's parts. Sits above the
 * existing navigation on the homepage and gives a first-time visitor
 * what-this-is and where-to-start in one screen.
 *
 * Restrained on purpose — the site's voice is austere. The visual is
 * the icon-form of the closed loop architecture the document specifies;
 * the map shows the three paths through the material (prose, math,
 * dynamics) without committing the reader to any one.
 */
export function FrameworkOrientation() {
  return (
    <section
      aria-labelledby="orientation-heading"
      className="mt-xl max-w-[var(--container-prose)] text-center"
    >
      <h2
        id="orientation-heading"
        className="font-mono text-xs text-ink-50 uppercase tracking-[0.25em]"
      >
        what this is
      </h2>

      <p className="mt-sm font-serif text-base text-ink-90 leading-[1.55] text-balance">
        Platforms that learn from your engagement and adjust what they deliver
        in response form a closed loop. This document specifies the loop&apos;s
        architecture, what it forecloses, and what kinds of intervention remain
        formally distinct under it — coupled to a mathematical exposition that
        states the structure refusably and a set of interactive visualizations
        that make the structure legible.
      </p>

      <div className="mt-md mx-auto" style={{ maxWidth: "26rem" }}>
        <ClosedLoopGlyph />
      </div>

      <DocumentMap />
    </section>
  );
}

/* ── The closed loop, miniature ────────────────────────────────────── */

function ClosedLoopGlyph() {
  const W = 320;
  const H = 180;
  const cx = W / 2;
  const cy = H / 2;
  const r = 56;
  const stroke = "var(--color-ink-70)";

  return (
    <figure>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-auto"
        role="img"
        aria-label="A closed loop diagram: user state and platform exchange engagement and stimulus, with no exogenous channel."
      >
        <defs>
          <marker
            id="orient-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" fill={stroke} />
          </marker>
        </defs>

        {/* Two nodes: user (left), platform (right) */}
        <circle cx={cx - r} cy={cy} r={26} fill="var(--color-paper-95)" stroke={stroke} strokeWidth="1" />
        <circle cx={cx + r} cy={cy} r={26} fill="var(--color-paper-95)" stroke={stroke} strokeWidth="1" />

        <SvgM x={cx - r - 30} y={cy - 8} w={60} h={16} align="center" color="var(--color-ink-90)" size="13px">
          {String.raw`u_t`}
        </SvgM>
        <SvgM x={cx + r - 30} y={cy - 8} w={60} h={16} align="center" color="var(--color-ink-90)" size="13px">
          {String.raw`\pi`}
        </SvgM>

        <SvgM x={cx - r - 32} y={cy + 22} w={64} h={12} align="center" color="var(--color-ink-50)" size="9px">
          <span style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.5px" }}>user</span>
        </SvgM>
        <SvgM x={cx + r - 32} y={cy + 22} w={64} h={12} align="center" color="var(--color-ink-50)" size="9px">
          <span style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.5px" }}>platform</span>
        </SvgM>

        {/* Top arc: user → platform (engagement) */}
        <path
          d={`M ${cx - r + 22} ${cy - 14} Q ${cx} ${cy - 50} ${cx + r - 22} ${cy - 14}`}
          fill="none"
          stroke={stroke}
          strokeWidth="1.2"
          markerEnd="url(#orient-arrow)"
        />
        <SvgM x={cx - 70} y={cy - 70} w={140} h={14} align="center" color="var(--color-ink-70)" size="10.5px">
          <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>engagement</span>
        </SvgM>

        {/* Bottom arc: platform → user (stimulus) */}
        <path
          d={`M ${cx + r - 22} ${cy + 14} Q ${cx} ${cy + 50} ${cx - r + 22} ${cy + 14}`}
          fill="none"
          stroke={stroke}
          strokeWidth="1.2"
          markerEnd="url(#orient-arrow)"
        />
        <SvgM x={cx - 70} y={cy + 56} w={140} h={14} align="center" color="var(--color-ink-70)" size="10.5px">
          <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>stimulus</span>
        </SvgM>

        {/* "no exogenous channel" marker outside the loop */}
        <line
          x1={20}
          y1={cy}
          x2={cx - r - 32}
          y2={cy}
          stroke="var(--color-ink-50)"
          strokeWidth="0.8"
          strokeDasharray="2 3"
        />
        <SvgM x={20} y={cy - 18} w={70} h={12} align="left" color="var(--color-ink-50)" size="9px">
          <span style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.5px" }}>no exogenous</span>
        </SvgM>
        <SvgM x={20} y={cy - 6} w={70} h={12} align="left" color="var(--color-ink-50)" size="9px">
          <span style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.5px" }}>channel</span>
        </SvgM>
      </svg>
      <figcaption className="mt-xs font-mono text-xs text-ink-50 tracking-wider">
        the central image
      </figcaption>
    </figure>
  );
}

/* ── Document map: three paths through the material ──────────────────── */

function DocumentMap() {
  const paths: { href: string; label: string; sub: string }[] = [
    {
      href: "/the-argument",
      label: "the argument",
      sub: "four prose pieces and a coda — the body of the work, traversing cohort time forward",
    },
    {
      href: "/the-mathematics",
      label: "the mathematics",
      sub: "the formal apparatus — the spine, what makes the prose refusable",
    },
    {
      href: "/the-dynamics",
      label: "the dynamics",
      sub: "interactive plates and the live simulator — the mechanisms made operable",
    },
  ];

  return (
    <div className="mt-xl">
      <h2 className="font-mono text-xs text-ink-50 uppercase tracking-[0.25em]">
        three paths through the material
      </h2>
      <ol className="mt-md flex flex-col gap-md sm:grid sm:grid-cols-3 sm:gap-sm text-left">
        {paths.map((p, i) => (
          <li key={p.href} className="border-t border-paper-85 pt-sm">
            <span className="font-mono text-xs text-ink-50">
              0{i + 1}.
            </span>
            <a
              href={p.href}
              className="block mt-xs font-mono text-md text-ink-90 hover:text-oxblood transition-colors duration-100"
            >
              {p.label}
            </a>
            <p className="mt-xs font-serif italic text-sm text-ink-70 leading-snug">
              {p.sub}
            </p>
          </li>
        ))}
      </ol>
      <p className="mt-md font-serif italic text-sm text-ink-50 leading-snug">
        First-time reader? Start with{" "}
        <a
          href="/the-argument/the-loop"
          className="text-ink-70 underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
        >
          the loop
        </a>{" "}
        — the framework laid out in prose. The mathematics is for readers who
        want the proofs; the dynamics for those who want the mechanisms running.
      </p>
    </div>
  );
}
