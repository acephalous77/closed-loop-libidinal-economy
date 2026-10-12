import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "8.1 — Closure of the Cycle",
  description: "OHCOSE Phase VIII, Sub-Protocol 8.1. The structural account: harvested surplus returns as the substrate that pre-shapes the next cohort.",
  alternates: { canonical: "/ohcose/viii-ouroboros/closure-of-the-cycle" },
};

export default function ClosureOfTheCycle() {
  return (
    <PageFrame pageNum="8.1" secCode="OHCOSE / LR / SP-8.1">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/viii-ouroboros" className="hover:underline">← phase VIII</Link>
      </nav>
      <PhaseBanner code="Sub-Protocol 8.1" title="Closure of the Cycle" qualifier="Phase VIII · Ouroboros Machine" />
      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>Sub-Protocol 8.1</p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>Closure of the Cycle</h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The structural account. The surplus harvested across one
          subject's eighty-year arc returns, in aggregate, as the
          substrate against which the next cohort is calibrated. The
          loop closes. Mouth meets tail.
        </p>
      </header>
      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="8.1.1" title="The Cycle Diagram" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The schematic below presents the seven Phases as one closed
            loop. The harvested surplus current that ran through every
            preceding sub-protocol returns at Phase VIII to the Office's
            modeling apparatus, which uses the aggregate to re-tune the
            calibration parameters that meet the next cohort at Phase I.
          </p>
          <OuroborosDiagram />
          <p
              className="font-mono uppercase text-center mt-sm"
              style={{
                fontSize: "0.85rem",
                letterSpacing: "0.15em",
                color: "var(--color-ink-50)",
                borderTop: "1px solid var(--color-paper-85)",
                paddingTop: "0.45rem",
                maxWidth: "var(--measure)",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <span style={{ color: "var(--color-oxblood)", fontWeight: 700 }}>Fig. 8.1.A</span> — The Ouroboros Machine (closed-loop schematic)
            </p>
        </section>
        <section>
          <SectionHead code="8.1.2" title="Why the Cycle is Closed" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The cycle is closed because no exogenous channel remains
              intact. Every alternative source of calibration — the
              extra-institutional, the contemplative, the unmeasured —
              has, across the Phase progression, been routed back into
              an Office-administered channel. The recursive limit
              identified in the closed-loop libidinal-economy framework
              is the Office's structural achievement, recognized here
              as such.
            </p>
            <p>
              The subject does not, in the conventional sense, exit the
              loop. The loop continues to operate on the subject's
              archive across the ninety-nine post-mortem fiscal years,
              and the archive continues to inform the modeling. The
              subject's contribution to the apparatus is measured in
              the persistence of the apparatus's accuracy over the
              cohorts that follow.
            </p>
          </div>
        </section>
        <nav className="pt-md flex flex-wrap items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose/viii-ouroboros" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>↑ phase VIII</Link>
          <Link href="/ohcose/viii-ouroboros/sovereign-interface" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>8.2 sovereign interface →</Link>
        </nav>
      </article>
    </PageFrame>
  );
}

function OuroborosDiagram() {
  const stroke = "var(--color-ink)";
  const strokeLight = "var(--color-ink-70)";
  const accent = "var(--color-oxblood)";
  const fill = "var(--color-paper)";
  // Seven phases distributed around a circle.
  const cx = 360, cy = 240, R = 175;
  const phases = ["I", "II", "III", "IV", "V", "VI", "VII"];
  const names = ["Ontogenesis", "Inscriptive", "Adolescent", "Economic", "Productive", "Consolidation", "Exit"];
  // Distribute over 300° (leave gap for the closing arrow)
  const arcSpan = 300;
  const startAngle = -150;
  return (
    <svg viewBox="0 0 720 480" className="w-full" role="img" aria-label="Ouroboros Machine closed-loop schematic">
      {/* Central Office node */}
      <g>
        <circle cx={cx} cy={cy} r={68} fill={fill} stroke={accent} strokeWidth="2" />
        <text x={cx} y={cy - 8} fontSize="14" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700" fill={accent}>OFFICE</text>
        <text x={cx} y={cy + 10} fontSize="12" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={stroke}>MODELING</text>
        <text x={cx} y={cy + 26} fontSize="11" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={strokeLight}>re-tunes next cohort</text>
      </g>
      {/* Phase nodes around the circle */}
      {phases.map((label, i) => {
        const angle = (startAngle + (arcSpan / (phases.length - 1)) * i) * (Math.PI / 180);
        const x = cx + R * Math.cos(angle);
        const y = cy + R * Math.sin(angle);
        return (
          <g key={i}>
            <circle cx={x} cy={y} r={32} fill={fill} stroke={stroke} strokeWidth="1.5" />
            <text x={x} y={y - 2} fontSize="13" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700" fill={stroke}>{label}</text>
            <text x={x} y={y + 12} fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={strokeLight}>{names[i]}</text>
            {/* Surplus arrow toward Office (inward) */}
            <line x1={x + 0} y1={y + 0} x2={cx + 70 * Math.cos(angle + Math.PI)} y2={cy + 70 * Math.sin(angle + Math.PI)} stroke={strokeLight} strokeWidth="0.6" strokeDasharray="3 3" />
          </g>
        );
      })}
      {/* Outer arc — the cohort flow connecting I→II→...→VII */}
      {phases.slice(0, -1).map((_, i) => {
        const a1 = (startAngle + (arcSpan / (phases.length - 1)) * i) * (Math.PI / 180);
        const a2 = (startAngle + (arcSpan / (phases.length - 1)) * (i + 1)) * (Math.PI / 180);
        const x1 = cx + (R + 14) * Math.cos(a1);
        const y1 = cy + (R + 14) * Math.sin(a1);
        const x2 = cx + (R + 14) * Math.cos(a2);
        const y2 = cy + (R + 14) * Math.sin(a2);
        return <path key={i} d={`M ${x1} ${y1} A ${R + 14} ${R + 14} 0 0 1 ${x2} ${y2}`} fill="none" stroke={stroke} strokeWidth="1.3" />;
      })}
      {/* Return arc — VII back to I, the closure */}
      {(() => {
        const aLast = (startAngle + arcSpan) * (Math.PI / 180);
        const aFirst = startAngle * (Math.PI / 180);
        const xL = cx + (R + 14) * Math.cos(aLast);
        const yL = cy + (R + 14) * Math.sin(aLast);
        const xF = cx + (R + 14) * Math.cos(aFirst);
        const yF = cy + (R + 14) * Math.sin(aFirst);
        return (
          <g>
            <path d={`M ${xL} ${yL} A ${R + 60} ${R + 60} 0 0 0 ${xF} ${yF}`} fill="none" stroke={accent} strokeWidth="2" strokeDasharray="5 3" />
            <polygon points={`${xF - 5},${yF - 8} ${xF + 6},${yF - 2} ${xF - 1},${yF + 6}`} fill={accent} />
            <text x={cx} y={cy + R + 90} fontSize="13" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700" fill={accent}>VII → I · NEXT COHORT</text>
            <text x={cx} y={cy + R + 108} fontSize="11" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={strokeLight}>aggregate substrate fed back into Phase I calibration</text>
          </g>
        );
      })()}
      <text x={360} y={30} fontSize="15" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700" fill={stroke}>THE OUROBOROS MACHINE</text>
      <text x={360} y={50} fontSize="12" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={strokeLight}>seven phases · closed loop · perpetual recalibration</text>
    </svg>
  );
}
