import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";

export const metadata: Metadata = {
  title: "1.2 — Algorithmic Nurseries & Early Brand Entrainment",
  description:
    "OHCOSE Phase I, Sub-Protocol 1.2. Smart-crib instrumentation. Brand-primer mobile rotation. Algorithmic conditioning of the infant sensorium across the standard 24-hour cycle.",
  alternates: {
    canonical: "/ohcose/i-ontogenesis/algorithmic-nurseries",
  },
};

export default function AlgorithmicNurseries() {
  return (
    <PageFrame pageNum="1.2" secCode="OHCOSE / LR / SP-1.2">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/i-ontogenesis" className="hover:underline">← phase I</Link>
      </nav>

      <PhaseBanner code="Sub-Protocol 1.2" title="Algorithmic Nurseries" qualifier="Phase I · Ontogenesis" />

      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
          Sub-Protocol 1.2
        </p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>
          Algorithmic Nurseries<br />
          &amp; Early Brand Entrainment
        </h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          Specification of the smart-crib environment. Rotation of brand-primer
          stimuli across the 24-hour cycle. Algorithmic conditioning of the
          infant sensorium during the first three years of life.
        </p>
      </header>

      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        {/* 1.2.1 */}
        <section>
          <SectionHead code="1.2.1" title="Environment Specification" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The Phase-I environment consists of a smart-crib unit (any
              Office-certified manufacturer; see Schedule of Approved Vendors,
              Appendix C), an ambient-stimulus mobile, a soft-toy companion
              with embedded sensor array, an interactive feeding apparatus,
              and a wall-mounted display calibrated to the subject's
              line-of-sight from supine position. Caregivers operating
              outside a certified Office facility may instead provision an
              equivalent IoT package under the Home Cradle Equivalence
              program. The Office does not certify substitute equipment.
            </p>
            <p>
              All units in the environment report continuously to the
              Phase-I Regional Aggregator. The subject's behavioral and
              physiological signals are sampled at 4 Hz from week one and
              up-sampled to 12 Hz once neural-response coherence has
              stabilized (typically by month four).
            </p>
          </div>
        </section>

        {/* 1.2.2 — Daily Stimulus Schedule */}
        <section>
          <SectionHead code="1.2.2" title="Daily Stimulus Schedule" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The standard 24-hour cycle rotates four primary stimulus
            categories. Brand-primer exposure is sequenced into the
            high-receptivity windows; soothing and motor stimuli occupy the
            remainder. The Office's longitudinal analysis indicates that
            stimulus order is materially more determinative of long-run
            recognition outcomes than stimulus volume.
          </p>

          <DailyStimulusTimeline />

          <p className="font-mono uppercase text-center mt-sm" style={{ fontSize: "0.6rem", letterSpacing: "0.15em", color: "var(--color-ink-50)" }}>
            Fig. 1.2.A — Sample 24-hr stimulus rotation for a subject at month 9
          </p>
        </section>

        {/* 1.2.3 — Brand-Primer Catalog */}
        <section>
          <SectionHead code="1.2.3" title="Brand-Primer Catalog" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The mobile rotates slow-turning visual primers in soft pastel
            registers; the feeding apparatus interleaves audio motifs into
            the suckling rhythm; the wall display projects abstract figural
            primitives during pre-sleep windows. The full catalog is
            classified at intake; the table below lists the high-frequency
            stimulus families authorized for Phase-I subjects.
          </p>

          <table className="w-full font-mono text-sm border-collapse my-md">
            <thead>
              <tr style={{ borderBottom: "1.5px solid var(--color-ink)", background: "var(--color-paper-95)" }}>
                <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.6rem", color: "var(--color-ink-70)" }}>family</th>
                <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.6rem", color: "var(--color-ink-70)" }}>channel</th>
                <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.6rem", color: "var(--color-ink-70)" }}>onset</th>
                <th className="text-right p-xs uppercase tracking-wider" style={{ fontSize: "0.6rem", color: "var(--color-ink-70)" }}>cycles / day</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["BP-A · pastel-figural", "visual · mobile", "wk 1", "18"],
                ["BP-B · melodic-motif", "audio · feed", "wk 1", "12"],
                ["BP-C · soft-haptic", "tactile · soft toy", "wk 3", "9"],
                ["BP-D · figural-primitive", "visual · wall", "wk 8", "6"],
                ["BP-E · jingle-fragment", "audio · ambient", "mo 4", "8"],
                ["BP-F · character-form", "visual · mobile", "mo 6", "11"],
              ].map(([fam, ch, ons, cyc]) => (
                <tr key={fam} style={{ borderBottom: "1px solid var(--color-paper-85)" }}>
                  <td className="p-xs" style={{ color: "var(--color-ink-90)" }}>{fam}</td>
                  <td className="p-xs" style={{ color: "var(--color-ink-70)" }}>{ch}</td>
                  <td className="p-xs" style={{ color: "var(--color-ink-50)" }}>{ons}</td>
                  <td className="p-xs text-right tabular-nums" style={{ color: "var(--color-ink-90)" }}>{cyc}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="font-mono uppercase text-center" style={{ fontSize: "0.6rem", letterSpacing: "0.15em", color: "var(--color-ink-50)" }}>
            Tbl. 1.2.A — High-frequency Phase-I primer families (extract)
          </p>
        </section>

        {/* 1.2.4 — Adaptive Response */}
        <section>
          <SectionHead code="1.2.4" title="Adaptive Response Loop" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The Phase-I environment responds in real time to the subject's
              behavioral signal. A delayed reach toward the mobile elicits
              brightening of the figural primer at the reached-toward
              quadrant. A coo during feed-time elicits volume increase of
              the audio motif. A cry elicits substitution to the soothing
              register and a logged event for the Regional Aggregator. The
              subject is thereby trained, during the first six months, that
              the environment is responsive to engagement and unresponsive
              to disengagement.
            </p>
            <p>
              Subjects who fail to develop a stable engagement-response
              binding by month seven are flagged for review by the Phase-I
              Affective Calibration Team. Most flagged subjects respond to
              a single calibration session.
            </p>
          </div>
        </section>

        {/* 1.2.5 — Caregiver Note */}
        <section>
          <SectionHead code="1.2.5" title="Note to the Caregiver" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              Caregivers occasionally report concern that the brand-primer
              schedule may interfere with the subject's developmental
              spontaneity. The Office wishes to confirm that primer
              exposure is calibrated to fall well below the perceptual
              attention threshold of the caregiver in routine observation;
              caregivers will not notice the rotation and the subject will
              not appear "advertised to." The exposure is ambient and
              continuous, in the same register as a parent's natural choice
              of nursery décor — produced according to the Office's
              longitudinal evidence. The caregiver's individual taste does
              not enter the rotation.
            </p>
            <p>
              Caregivers seeking additional reassurance are referred to
              Pamphlet 4-G (The Algorithmic Nursery: A Parent's Guide).
            </p>
          </div>
        </section>

        <nav className="pt-md flex items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose/i-ontogenesis/cradle-anchoring" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 1.1 cradle anchoring</Link>
          <Link href="/ohcose/i-ontogenesis/caregiver-as-infrastructure" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>1.3 caregiver →</Link>
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
 * Daily Stimulus Timeline — 24-hour horizontal bar showing brand-primer
 * exposures over the day, segmented into morning/feeding/midday/nap/etc.
 * Each block labeled with primer family code.
 */
function DailyStimulusTimeline() {
  const stroke = "var(--color-ink)";
  const strokeLight = "var(--color-ink-70)";
  const accent = "var(--color-oxblood)";
  const paper = "var(--color-paper)";
  const paper95 = "var(--color-paper-95)";

  // Hourly blocks: each is an object with hour, primer code, category
  // category: "soothe" | "brand" | "motor" | "rest"
  const HOURS = [
    { h: 0,  cat: "rest",   label: "" },
    { h: 1,  cat: "rest",   label: "" },
    { h: 2,  cat: "rest",   label: "" },
    { h: 3,  cat: "rest",   label: "" },
    { h: 4,  cat: "rest",   label: "" },
    { h: 5,  cat: "soothe", label: "BP-C" },
    { h: 6,  cat: "brand",  label: "BP-A" },
    { h: 7,  cat: "brand",  label: "BP-B" },
    { h: 8,  cat: "motor",  label: "" },
    { h: 9,  cat: "brand",  label: "BP-D" },
    { h: 10, cat: "brand",  label: "BP-A" },
    { h: 11, cat: "rest",   label: "" },
    { h: 12, cat: "soothe", label: "BP-C" },
    { h: 13, cat: "brand",  label: "BP-B" },
    { h: 14, cat: "rest",   label: "" },
    { h: 15, cat: "brand",  label: "BP-F" },
    { h: 16, cat: "motor",  label: "" },
    { h: 17, cat: "brand",  label: "BP-A" },
    { h: 18, cat: "brand",  label: "BP-B" },
    { h: 19, cat: "brand",  label: "BP-E" },
    { h: 20, cat: "soothe", label: "BP-C" },
    { h: 21, cat: "brand",  label: "BP-D" },
    { h: 22, cat: "rest",   label: "" },
    { h: 23, cat: "rest",   label: "" },
  ];

  const W = 720;
  const cellW = W / 24;
  const cellH = 36;

  const fillForCat = (cat: string) => {
    switch (cat) {
      case "brand": return accent;
      case "soothe": return strokeLight;
      case "motor": return paper95;
      default: return paper;
    }
  };

  const textColorForCat = (cat: string) => {
    return cat === "brand" || cat === "soothe" ? paper : stroke;
  };

  // Boosted dimensions: bar 56 → 64, with breathing room top/bottom.
  const CELL_H = 64;
  const BAR_Y = 30;
  const LEGEND_Y = BAR_Y + CELL_H + 28;
  const VB_H = LEGEND_Y + 36;

  return (
    <svg viewBox={`0 0 ${W} ${VB_H}`} className="w-full" role="img" aria-label="Daily stimulus timeline">
      {/* Hour cells */}
      {HOURS.map((b) => (
        <g key={b.h}>
          <rect x={b.h * cellW} y={BAR_Y} width={cellW} height={CELL_H} fill={fillForCat(b.cat)} stroke={stroke} strokeWidth="0.5" />
          {b.label && (
            <text x={b.h * cellW + cellW / 2} y={BAR_Y + CELL_H / 2 + 5} fontSize="13" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700" fill={textColorForCat(b.cat)}>
              {b.label}
            </text>
          )}
        </g>
      ))}

      {/* Hour labels at top */}
      {[0, 6, 12, 18, 24].map((h) => (
        <g key={h}>
          <line x1={h * cellW} y1={BAR_Y - 8} x2={h * cellW} y2={BAR_Y} stroke={stroke} strokeWidth="0.5" />
          <text x={h * cellW} y={BAR_Y - 12} fontSize="13" fontFamily="ui-monospace, monospace" textAnchor={h === 0 ? "start" : h === 24 ? "end" : "middle"} fill={strokeLight}>
            {h.toString().padStart(2, "0")}:00
          </text>
        </g>
      ))}

      {/* Legend */}
      <g transform={`translate(0, ${LEGEND_Y})`}>
        {[
          { cat: "brand", label: "brand-primer" },
          { cat: "soothe", label: "soothe" },
          { cat: "motor", label: "motor" },
          { cat: "rest", label: "rest / sleep" },
        ].map((item, i) => (
          <g key={item.cat} transform={`translate(${i * 165}, 0)`}>
            <rect x={0} y={0} width={20} height={20} fill={fillForCat(item.cat)} stroke={stroke} strokeWidth="0.5" />
            <text x={28} y={15} fontSize="14" fontFamily="ui-monospace, monospace" fill={stroke}>
              {item.label}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}
