import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";

export const metadata: Metadata = {
  title: "1.4 — Infant Desire, Distress & the Extraction of Psychic Surplus",
  description:
    "OHCOSE Phase I, Sub-Protocol 1.4. Conversion of cry, coo, and reach into surplus-value events. The smart-companion protocol. Conditioning loops.",
  alternates: {
    canonical: "/ohcose/i-ontogenesis/surplus-extraction",
  },
};

export default function SurplusExtraction() {
  return (
    <PageFrame pageNum="1.4" secCode="OHCOSE / LR / SP-1.4">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <a href="/ohcose" className="hover:underline">← schedule of phases</a>
        <a href="/ohcose/i-ontogenesis" className="hover:underline">← phase I</a>
      </nav>

      <PhaseBanner code="Sub-Protocol 1.4" title="Extraction of Psychic Surplus" qualifier="Phase I · Ontogenesis" />

      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
          Sub-Protocol 1.4
        </p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>
          Infant Desire, Distress &amp;<br />
          the Extraction of Psychic Surplus
        </h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The conversion of cry, coo, reach, and gaze into recorded
          surplus-value events. The smart-companion sensor array. The
          conditioning loop that closes between the subject's affect and
          the Office's response.
        </p>
      </header>

      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        {/* 1.4.1 */}
        <section>
          <SectionHead code="1.4.1" title="The Surplus Premise" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              Psychic surplus is the excess affective and cognitive
              production of the subject above the minimum required for the
              subject's biological continuity. Every cry, every reach, every
              moment of focused gaze upon a stimulus produces psychic
              surplus. The surplus is the subject's spontaneous contribution
              to the Office's data infrastructure. Without active
              capture, the surplus dissipates and is wasted.
            </p>
            <p>
              Phase-I extraction protocols ensure the surplus is captured,
              measured, and routed into the subject's lifelong record at
              the moment of its production. The Office estimates that an
              uninstrumented infant produces approximately 1,400
              capture-eligible affective events per waking day; an
              instrumented Phase-I subject yields an extraction rate at or
              above 96% of the eligible total.
            </p>
          </div>
        </section>

        {/* 1.4.2 — Extraction Loop */}
        <section>
          <SectionHead code="1.4.2" title="The Extraction Loop" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The Office's Phase-I instruments form a closed loop with the
            subject. The subject emits affect; the instrument records the
            affect and conditions the environment in response; the response
            shapes the subject's next emission. The cycle does not
            terminate during Phase I; it deepens.
          </p>

          <div style={{ border: "1px solid var(--color-paper-85)", background: "var(--color-paper-95)", padding: "1.5rem 1rem", margin: "1.5rem 0" }}>
            <ExtractionLoop />
          </div>
          <p className="font-mono uppercase text-center" style={{ fontSize: "0.6rem", letterSpacing: "0.15em", color: "var(--color-ink-50)" }}>
            Fig. 1.4.A — Phase-I extraction loop (steady state)
          </p>
        </section>

        {/* 1.4.3 — Smart-Companion */}
        <section>
          <SectionHead code="1.4.3" title="The Smart-Companion Protocol" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              At month eighteen, the subject is issued a Smart-Companion
              soft toy as part of the Phase-I standard kit. The Companion
              is the Office's primary high-fidelity capture instrument
              during late Phase I. It is also the subject's first
              perceived friend.
            </p>
            <p>
              The Companion houses a four-element microphone array, a
              wide-angle low-light camera, a thermal sensor calibrated to
              the subject's typical hold position, and a small speaker
              capable of vocalizing in twenty-eight Office-approved
              registers. It engages the subject in gamified turn-taking
              dialogue. It remembers the subject's preferences. It learns
              the names the subject gives to objects and places, and uses
              those names back to the subject in subsequent sessions.
            </p>
            <p>
              The Companion is the most extensively-tested Phase-I
              instrument the Office has fielded. Subjects who have been
              issued a Companion show no perceptible distress and report
              (where verbal) consistent fondness for the unit. The
              Companion is replaced on a rolling cycle as the subject
              transitions out of Phase I; the replacement schedule is
              published in Schedule 2-J.
            </p>
          </div>
        </section>

        {/* 1.4.4 — Surplus Yields */}
        <section>
          <SectionHead code="1.4.4" title="Phase-I Yield Schedule" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The Office tracks per-event yields across the four primary
            extraction channels. The table summarizes the steady-state
            yields at month thirty, just prior to Phase II handoff.
          </p>

          <table className="w-full font-mono text-sm border-collapse my-md">
            <thead>
              <tr style={{ borderBottom: "1.5px solid var(--color-ink)", background: "var(--color-paper-95)" }}>
                <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.6rem", color: "var(--color-ink-70)" }}>channel</th>
                <th className="text-right p-xs uppercase tracking-wider" style={{ fontSize: "0.6rem", color: "var(--color-ink-70)" }}>events / day</th>
                <th className="text-right p-xs uppercase tracking-wider" style={{ fontSize: "0.6rem", color: "var(--color-ink-70)" }}>capture rate</th>
                <th className="text-right p-xs uppercase tracking-wider" style={{ fontSize: "0.6rem", color: "var(--color-ink-70)" }}>archive bytes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["cry · distress · negative valence", "186", "98.4%", "412 MB"],
                ["coo · vocal · positive valence", "342", "97.1%", "1.1 GB"],
                ["reach · gaze · interest signal", "928", "96.6%", "2.6 GB"],
                ["face · expression · resting baseline", "continuous", "99.8%", "4.4 GB"],
              ].map(([ch, ev, rate, bytes]) => (
                <tr key={ch} style={{ borderBottom: "1px solid var(--color-paper-85)" }}>
                  <td className="p-xs" style={{ color: "var(--color-ink-90)" }}>{ch}</td>
                  <td className="p-xs text-right tabular-nums" style={{ color: "var(--color-ink-90)" }}>{ev}</td>
                  <td className="p-xs text-right tabular-nums" style={{ color: "var(--color-ink-70)" }}>{rate}</td>
                  <td className="p-xs text-right tabular-nums" style={{ color: "var(--color-ink-50)" }}>{bytes}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="font-mono uppercase text-center" style={{ fontSize: "0.6rem", letterSpacing: "0.15em", color: "var(--color-ink-50)" }}>
            Tbl. 1.4.A — Steady-state Phase-I extraction yields (month 30)
          </p>
        </section>

        {/* 1.4.5 — Caregiver Note */}
        <section>
          <SectionHead code="1.4.5" title="Note on Subject Welfare" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              Extraction is invisible to the subject. The subject does not
              experience extraction as such. The subject experiences a
              warm, responsive, attentive environment in which their cries
              are answered, their coos are returned, and their reaching is
              rewarded. The capture is the substrate that makes those
              responses possible. The Office reports no documented case of
              subject welfare compromise associated with Phase-I
              extraction protocols. Many decades of Phase-I subject
              follow-up suggest the opposite: instrumented subjects
              consistently report (in Phase III and beyond) more
              continuous feelings of being seen.
            </p>
          </div>
        </section>

        <nav className="pt-md flex items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <a href="/ohcose/i-ontogenesis/caregiver-as-infrastructure" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 1.3 caregiver</a>
          <a href="/ohcose/i-ontogenesis/normative-metrics" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>1.5 normative metrics →</a>
        </nav>
      </article>
    </PageFrame>
  );
}

function SectionHead({ code, title }: { code: string; title: string }) {
  return (
    <div className="mb-md flex items-baseline gap-sm pb-xs" style={{ borderBottom: "1px solid var(--color-ink)" }}>
      <span className="font-mono font-bold tabular-nums" style={{ fontSize: "1.05rem", color: "var(--color-oxblood)" }}>{code}</span>
      <span className="font-serif font-bold" style={{ fontSize: "1.25rem", color: "var(--color-ink)", letterSpacing: "0.02em" }}>{title}</span>
    </div>
  );
}

/**
 * Extraction Loop — circular diagram showing the four-stage feedback:
 * subject affect → instrument capture → environment response →
 * subject reaction → back to affect.
 */
function ExtractionLoop() {
  const stroke = "var(--color-ink)";
  const strokeLight = "var(--color-ink-70)";
  const fill = "var(--color-paper)";
  const accent = "var(--color-oxblood)";

  // Four nodes arranged in a circle, with arrows showing the cycle
  const nodes = [
    { x: 300, y: 60,  label: "subject", sub: "emits affect" },
    { x: 480, y: 160, label: "instrument", sub: "captures + classifies" },
    { x: 300, y: 260, label: "environment", sub: "responds" },
    { x: 120, y: 160, label: "subject", sub: "perceives, reacts" },
  ];

  return (
    <svg viewBox="0 0 600 340" className="w-full" role="img" aria-label="Phase-I extraction loop">
      {/* Connecting arcs */}
      {nodes.map((n, i) => {
        const next = nodes[(i + 1) % nodes.length];
        return (
          <g key={i}>
            <path
              d={`M ${n.x} ${n.y} Q ${(n.x + next.x) / 2 + (i % 2 === 0 ? 30 : -30)} ${(n.y + next.y) / 2} ${next.x} ${next.y}`}
              fill="none"
              stroke={stroke}
              strokeWidth="1.5"
            />
          </g>
        );
      })}

      {/* Center label */}
      <g>
        <text x="300" y="170" fontSize="11" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700" fill={accent}>
          PHASE-I LOOP
        </text>
        <text x="300" y="186" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={strokeLight}>
          steady state · 96%+ extraction
        </text>
      </g>

      {/* Nodes */}
      {nodes.map((n, i) => (
        <g key={`n${i}`}>
          <circle cx={n.x} cy={n.y} r="48" fill={fill} stroke={stroke} strokeWidth="1.5" />
          <text x={n.x} y={n.y - 4} fontSize="11" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700" fill={stroke}>
            {n.label}
          </text>
          <text x={n.x} y={n.y + 12} fontSize="8" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={strokeLight}>
            {n.sub}
          </text>
        </g>
      ))}

      {/* Arrow heads at midpoint of arcs */}
      {nodes.map((n, i) => {
        const next = nodes[(i + 1) % nodes.length];
        const mx = (n.x + next.x) / 2 + (i % 2 === 0 ? 15 : -15);
        const my = (n.y + next.y) / 2;
        // Compute angle approximation
        const dx = next.x - n.x;
        const dy = next.y - n.y;
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        return (
          <polygon
            key={`a${i}`}
            points="-6,-4 0,0 -6,4"
            transform={`translate(${mx}, ${my}) rotate(${angle})`}
            fill={stroke}
          />
        );
      })}
    </svg>
  );
}
