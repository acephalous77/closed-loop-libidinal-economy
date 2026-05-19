import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "2.6 — The Temporal Corridor",
  description:
    "OHCOSE Phase II, Sub-Protocol 2.6. Childhood as a one-way corridor. Surplus extraction across the passage. The hand-off to Phase III Adolescent Calibration.",
  alternates: {
    canonical: "/ohcose/ii-inscriptive-normalization/temporal-corridor",
  },
};

export default function TemporalCorridor() {
  return (
    <PageFrame pageNum="2.6" secCode="OHCOSE / LR / SP-2.6">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <a href="/ohcose" className="hover:underline">← schedule of phases</a>
        <a href="/ohcose/ii-inscriptive-normalization" className="hover:underline">← phase II</a>
      </nav>

      <PhaseBanner code="Sub-Protocol 2.6" title="The Temporal Corridor" qualifier="Phase II · Inscriptive Normalization" />

      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
          Sub-Protocol 2.6
        </p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>
          The Temporal Corridor
        </h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          Phase II conceived as the corridor through which the
          Standard Consumer-Citizen passes between Phase-I infancy
          and Phase-III adolescence. The corridor is one-way. The
          subject does not retrace it.
        </p>
      </header>

      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="2.6.1" title="The Corridor Premise" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              Childhood, in the Office's lifecycle architecture, is a
              temporal corridor. The Standard Consumer-Citizen enters
              the corridor at age four as a registered Phase-I subject.
              The subject exits at age twelve as a market-aligned
              schoolchild ready for Phase-III calibration. The corridor
              walls are the sub-protocols enumerated above. The corridor
              is closed; no entrance, no exit, no doors except the two
              at either end.
            </p>
            <p>
              The Office considers the closure to be Phase II's most
              important structural property. A subject who has been in
              the corridor for the full nine years emerges with the
              calibration the Office has specified, predictably and
              reliably. The closure is what makes the prediction
              reliable.
            </p>
          </div>
        </section>

        <section>
          <SectionHead code="2.6.2" title="The Passage Diagram" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The schematic below shows the subject's path through the
            corridor, the six sub-protocols as the wall structure,
            and the surplus-extraction current as the longitudinal
            flow returned to the Office's archives.
          </p>

          <CorridorPassage />

          <p className="font-mono uppercase text-center mt-sm" style={{ fontSize: "0.85rem", letterSpacing: "0.15em", color: "var(--color-ink-50)" }}>
            Fig. 2.6.A — Phase-II passage diagram (subject path + surplus current)
          </p>
        </section>

        <section>
          <SectionHead code="2.6.3" title="The One-Way Constraint" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The corridor is one-way for the subject. The Office's
              records of the subject's passage, however, persist. Every
              affective drift logged in sub-protocol 2.3, every
              brand-pipeline indicator recorded in sub-protocol 2.5,
              every recess self-sorting pattern observed in sub-protocol
              2.4, every quarter's Parent–Teacher Feedback Rubric — all
              persist in the subject's lifelong record at the same node
              established under Phase I sub-protocol 1.1.
            </p>
            <p>
              The Office accesses these records in every subsequent
              Phase. A Phase IV onboarding officer reading a subject's
              Phase II profile knows, before the subject enters their
              office, which brand families the subject will respond to,
              which authority registers will land most reliably, and
              which restorative pathways have been used and with what
              success. The subject does not know that the officer
              knows. The asymmetry is the design.
            </p>
          </div>
        </section>

        <section>
          <SectionHead code="2.6.4" title="The Hand-off to Phase III" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              At the age-twelve boundary the subject is handed off to
              Phase III Adolescent Calibration. The hand-off is, again,
              procedurally invisible to the subject. The Phase-II
              instruments enter standby; the Phase-III instruments come
              online. The subject continues to attend their
              Office-certified facility, now styled as a middle school
              rather than an elementary school. The caregiver is
              re-briefed on the Phase-III mandate and re-certified for
              auxiliary Phase-III work. The day continues.
            </p>
            <p>
              Phase III opens the next year. Sub-protocols 3.1 through
              3.6 will be published in due course. The Office thanks
              the subject and the caregiver for the work of Phase II.
            </p>
          </div>
        </section>

        <nav className="pt-md flex items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <a href="/ohcose/ii-inscriptive-normalization/playing-at-consumption" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 2.5 playing at consumption</a>
          <a href="/ohcose/ii-inscriptive-normalization" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>↑ phase II</a>
        </nav>
      </article>
    </PageFrame>
  );
}

/**
 * Corridor Passage — subject path enters at left (Phase I), traverses
 * a corridor lined with the six Phase-II sub-protocols, exits at right
 * (Phase III). A second flow line shows extracted surplus returning
 * upward to the Office archive.
 */
function CorridorPassage() {
  const stroke = "var(--color-ink)";
  const strokeLight = "var(--color-ink-70)";
  const accent = "var(--color-oxblood)";
  const paper = "var(--color-paper)";
  const paper95 = "var(--color-paper-95)";

  const wallTop = 110;
  const wallBottom = 230;
  const corridorLeft = 120;
  const corridorRight = 640;

  const subProtocols = [
    "2.1 desk",
    "2.2 calibration",
    "2.3 hygiene",
    "2.4 recess",
    "2.5 consumption",
    "2.6 corridor",
  ];

  return (
    <svg viewBox="0 0 760 360" className="w-full" role="img" aria-label="Phase-II corridor passage diagram">
      {/* Office archive at top — receives surplus */}
      <g>
        <rect x={290} y={10} width={180} height={48} fill={paper} stroke={stroke} strokeWidth="1.5" />
        <text x={380} y={32} fontSize="16" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700" fill={stroke}>OFFICE ARCHIVE</text>
        <text x={380} y={48} fontSize="13" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={strokeLight}>lifelong record</text>
      </g>

      {/* Corridor walls (top/bottom horizontal lines) */}
      <line x1={corridorLeft} y1={wallTop} x2={corridorRight} y2={wallTop} stroke={stroke} strokeWidth="1.5" />
      <line x1={corridorLeft} y1={wallBottom} x2={corridorRight} y2={wallBottom} stroke={stroke} strokeWidth="1.5" />

      {/* Sub-protocol wall labels (alternating top/bottom) */}
      {subProtocols.map((sp, i) => {
        const x = corridorLeft + ((corridorRight - corridorLeft) / (subProtocols.length)) * (i + 0.5);
        const y = i % 2 === 0 ? wallTop - 12 : wallBottom + 22;
        const tickStart = i % 2 === 0 ? wallTop : wallBottom;
        const tickEnd = i % 2 === 0 ? wallTop - 6 : wallBottom + 6;
        return (
          <g key={i}>
            <line x1={x} y1={tickStart} x2={x} y2={tickEnd} stroke={stroke} strokeWidth="1" />
            <text x={x} y={y} fontSize="13" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={strokeLight}>
              {sp}
            </text>
          </g>
        );
      })}

      {/* Subject path through corridor (left to right) */}
      <line x1={corridorLeft - 30} y1={170} x2={corridorRight + 30} y2={170} stroke={accent} strokeWidth="2.5" />
      <polygon points={`${corridorRight + 30},164 ${corridorRight + 42},170 ${corridorRight + 30},176`} fill={accent} />

      {/* Subject path dots */}
      {[0.1, 0.3, 0.5, 0.7, 0.9].map((t, i) => (
        <circle key={i} cx={corridorLeft + (corridorRight - corridorLeft) * t} cy={170} r={4} fill={accent} />
      ))}

      {/* Entry / exit labels */}
      <text x={corridorLeft - 36} y={162} fontSize="15" fontFamily="ui-monospace, monospace" textAnchor="end" fontWeight="700" fill={stroke}>
        Phase I
      </text>
      <text x={corridorLeft - 36} y={186} fontSize="13" fontFamily="ui-monospace, monospace" textAnchor="end" fill={strokeLight}>
        age 4 entry
      </text>
      <text x={corridorRight + 50} y={162} fontSize="15" fontFamily="ui-monospace, monospace" fontWeight="700" fill={stroke}>
        Phase III
      </text>
      <text x={corridorRight + 50} y={186} fontSize="13" fontFamily="ui-monospace, monospace" fill={strokeLight}>
        age 12 exit
      </text>

      {/* Surplus extraction current — upward arrows from corridor to archive */}
      {[0.2, 0.4, 0.6, 0.8].map((t, i) => {
        const x = corridorLeft + (corridorRight - corridorLeft) * t;
        return (
          <g key={`s${i}`}>
            <line x1={x} y1={wallTop - 8} x2={x} y2={66} stroke={stroke} strokeWidth="0.8" strokeDasharray="3 2" />
            <polygon points={`${x - 4},66 ${x},58 ${x + 4},66`} fill={stroke} />
          </g>
        );
      })}

      {/* Surplus label — to the left of the archive, vertically aligned with it */}
      <text x={270} y={32} fontSize="13" fontFamily="ui-monospace, monospace" textAnchor="end" fill={strokeLight}>
        surplus current
      </text>
      <text x={270} y={48} fontSize="11" fontFamily="ui-monospace, monospace" textAnchor="end" fill={strokeLight}>
        captured throughout passage
      </text>

      {/* Bottom-axis label for time */}
      <text x={380} y={300} fontSize="15" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700" fill={stroke}>
        nine years of inscriptive normalization
      </text>
      <text x={380} y={324} fontSize="13" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={strokeLight}>
        one-way passage · subject does not retrace
      </text>
    </svg>
  );
}
