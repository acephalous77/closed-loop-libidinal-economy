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
      className="mt-lg max-w-[var(--container-prose)] text-center"
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
  // Generous bounding box so every label has clearance. The diagram
  // sits centered with margin on every side; nothing bleeds into
  // anything else, and the "no exogenous channel" claim is a
  // figcaption below rather than a cramped sideline marker.
  const W = 360;
  const H = 220;
  const cx = W / 2;
  const cy = H / 2 - 6; // slight upward shift to leave room for bottom labels
  const r = 70;          // distance from center to each node center
  const nodeR = 28;      // node radius
  const stroke = "var(--color-ink-70)";

  return (
    <figure>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-auto"
        role="img"
        aria-label="Two nodes (user and platform) connected by two arcs (engagement upward, stimulus downward) — a closed loop."
        style={{ maxWidth: "26rem" }}
      >
        <defs>
          <marker
            id="orient-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" fill={stroke} />
          </marker>
        </defs>

        {/* Top arc: user → platform (engagement) */}
        <path
          d={`M ${cx - r + nodeR + 4} ${cy - 10} Q ${cx} ${cy - r + 4} ${cx + r - nodeR - 4} ${cy - 10}`}
          fill="none"
          stroke={stroke}
          strokeWidth="1.2"
          markerEnd="url(#orient-arrow)"
        />
        <SvgM
          x={cx - 80}
          y={cy - r - 8}
          w={160}
          h={16}
          align="center"
          color="var(--color-ink-70)"
          size="12px"
        >
          <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
            engagement
          </span>
        </SvgM>

        {/* Bottom arc: platform → user (stimulus) */}
        <path
          d={`M ${cx + r - nodeR - 4} ${cy + 10} Q ${cx} ${cy + r - 4} ${cx - r + nodeR + 4} ${cy + 10}`}
          fill="none"
          stroke={stroke}
          strokeWidth="1.2"
          markerEnd="url(#orient-arrow)"
        />
        <SvgM
          x={cx - 80}
          y={cy + r - 6}
          w={160}
          h={16}
          align="center"
          color="var(--color-ink-70)"
          size="12px"
        >
          <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
            stimulus
          </span>
        </SvgM>

        {/* Nodes — drawn after arcs so they sit on top */}
        <circle cx={cx - r} cy={cy} r={nodeR} fill="var(--color-paper)" stroke={stroke} strokeWidth="1.2" />
        <circle cx={cx + r} cy={cy} r={nodeR} fill="var(--color-paper)" stroke={stroke} strokeWidth="1.2" />

        {/* Symbol inside each node */}
        <SvgM
          x={cx - r - nodeR}
          y={cy - 10}
          w={nodeR * 2}
          h={20}
          align="center"
          color="var(--color-ink-90)"
          size="15px"
        >
          {String.raw`u_t`}
        </SvgM>
        <SvgM
          x={cx + r - nodeR}
          y={cy - 10}
          w={nodeR * 2}
          h={20}
          align="center"
          color="var(--color-ink-90)"
          size="15px"
        >
          {String.raw`\pi`}
        </SvgM>

        {/* Label below each node — well clear of the bottom arc's label */}
        <SvgM
          x={cx - r - nodeR}
          y={cy + nodeR + 6}
          w={nodeR * 2}
          h={14}
          align="center"
          color="var(--color-ink-50)"
          size="10px"
        >
          <span style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.5px" }}>
            user
          </span>
        </SvgM>
        <SvgM
          x={cx + r - nodeR}
          y={cy + nodeR + 6}
          w={nodeR * 2}
          h={14}
          align="center"
          color="var(--color-ink-50)"
          size="10px"
        >
          <span style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.5px" }}>
            platform
          </span>
        </SvgM>
      </svg>
      <figcaption className="mt-xs font-mono text-xs text-ink-50 tracking-wider text-center">
        the central image · no exogenous channel
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
    <div className="mt-lg">
      <h2 className="font-mono text-xs text-ink-50 uppercase tracking-[0.25em] text-center">
        three paths through the material
      </h2>
      <p className="mt-sm font-serif italic text-sm text-ink-50 leading-snug text-center max-w-[36rem] mx-auto">
        First-time reader: start with{" "}
        <a
          href="/the-argument/the-loop"
          className="text-ink-70 underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
        >
          the loop
        </a>{" "}
        — the framework laid out in prose. The mathematics is for readers who
        want the proofs; the dynamics for those who want the mechanisms
        running.
      </p>
      <ol className="mt-md grid grid-cols-1 sm:grid-cols-3 gap-sm text-left">
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
    </div>
  );
}
