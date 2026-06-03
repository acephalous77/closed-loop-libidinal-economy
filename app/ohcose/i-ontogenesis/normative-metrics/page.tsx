import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";

export const metadata: Metadata = {
  title: "1.5 — Metrics of Normative Development & Proto-Brand Loyalty",
  description:
    "OHCOSE Phase I, Sub-Protocol 1.5. Trust-Attachment Index (TAI). Brand Recognition & Affect (BR-A) score. Phase-I Growth & Compliance reporting.",
  alternates: {
    canonical: "/ohcose/i-ontogenesis/normative-metrics",
  },
};

export default function NormativeMetrics() {
  return (
    <PageFrame pageNum="1.5" secCode="OHCOSE / LR / SP-1.5">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/i-ontogenesis" className="hover:underline">← phase I</Link>
      </nav>

      <PhaseBanner code="Sub-Protocol 1.5" title="Normative Metrics" qualifier="Phase I · Ontogenesis" />

      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
          Sub-Protocol 1.5
        </p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>
          Metrics of Normative Development<br />
          &amp; Proto-Brand Loyalty
        </h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The Trust-Attachment Index. The Brand Recognition &amp; Affect
          score. The Weekly Growth &amp; Compliance Report. The Office's
          quantification of the Phase-I subject's progress against the
          age-three boundary.
        </p>
      </header>

      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        {/* 1.5.1 */}
        <section>
          <SectionHead code="1.5.1" title="The Reporting Cycle" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              A Growth &amp; Compliance Report is generated for each
              Phase-I subject every seven calendar days. The Report
              consolidates the prior week's instrumented capture into a
              standard set of indicators, each scored on a 100-point scale
              and benchmarked against the cohort percentile. Caregivers
              receive the Report by Office-certified channel within
              forty-eight hours of issue.
            </p>
            <p>
              Reports outside the age-three boundary are archived; the
              Office retains the full longitudinal series for the
              subject's lifetime and ninety-nine standard fiscal years
              thereafter.
            </p>
          </div>
        </section>

        {/* 1.5.2 — Trust-Attachment Index */}
        <section>
          <SectionHead code="1.5.2" title="Trust-Attachment Index (TAI)" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The TAI is a composite score capturing the security of the
              subject's attachment to the caregiver instrument and, by
              extension, to the affective infrastructure the Office has
              provisioned around them. The TAI is computed from the
              subject's separation-reunion response patterns, soothing
              latency under distress, and gaze-return frequency in the
              presence of the primary caregiver.
            </p>
            <p>
              A TAI score in the 70–95 band is the Office's published
              target. Scores below 60 trigger a Phase-I Affective
              Calibration Session. Scores above 95 carry no sanction; the
              Office notes them as warranting follow-up. Over-attachment patterns
              have been associated with downstream complications in Phase
              II Inscriptive Normalization.
            </p>
          </div>
        </section>

        {/* 1.5.3 — Brand Recognition & Affect */}
        <section>
          <SectionHead code="1.5.3" title="Brand Recognition &amp; Affect (BR-A)" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The BR-A is a composite of two sub-scores. The Recognition
              sub-score captures the subject's ability to discriminate the
              Office-published reference logos, characters, and jingle
              fragments from non-reference distractors, at age-appropriate
              presentation rates. The Affect sub-score captures the
              positive-valence reaction (smile, gaze-lock, vocal
              positive-utterance) on first presentation.
            </p>
            <p>
              By month thirty-six, 99.4% of Phase-I subjects correctly
              discriminate the Office's reference set, with mean positive
              affect on first presentation of 87/100. The remaining 0.6%
              are referred to the BR-A Calibration Pathway. Outcomes
              under the Pathway are uniformly favorable.
            </p>
          </div>
        </section>

        {/* 1.5.4 — Sample Report */}
        <section>
          <SectionHead code="1.5.4" title="Sample Growth &amp; Compliance Report" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The following is an extract of the Phase-I Report for the
            subject of record at week 134. Caregivers may request the full
            Report on Form 5-G.
          </p>

          <GrowthComplianceReport />

          <p className="font-mono uppercase text-center mt-sm" style={{ fontSize: "0.6rem", letterSpacing: "0.15em", color: "var(--color-ink-50)" }}>
            Fig. 1.5.A — Sample Phase-I Growth &amp; Compliance Report (week 134)
          </p>
        </section>

        {/* 1.5.5 — Note */}
        <section>
          <SectionHead code="1.5.5" title="Note on Use of Reports" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              Caregivers are encouraged to share their subject's Reports
              with extended family at appropriate intervals. The Office
              has found that public-facing performance affirmation
              (caregiver-to-grandparent transmission of TAI improvement
              between weeks 26 and 52, for example) materially
              strengthens caregiver compliance posture and is associated
              with improved subject outcomes through Phase II.
            </p>
            <p>
              Caregivers should not, however, compare Reports across
              Phase-I subjects of unrelated families; cross-family
              comparison is the Office's prerogative and has been found
              to produce unproductive caregiver affect when undertaken
              informally.
            </p>
          </div>
        </section>

        <nav className="pt-md flex items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose/i-ontogenesis/surplus-extraction" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 1.4 surplus extraction</Link>
          <Link href="/ohcose/i-ontogenesis/trust-attachment-optimization" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>1.6 trust-attachment →</Link>
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
 * Growth & Compliance Report — form-document mockup with subject header,
 * the two main composite scores (TAI, BR-A), and per-channel sub-scores
 * with horizontal score bars and percentile indicators.
 */
function GrowthComplianceReport() {
  const ink = "var(--color-ink)";
  const ink70 = "var(--color-ink-70)";
  const ink50 = "var(--color-ink-50)";
  const accent = "var(--color-oxblood)";

  const scores = [
    { name: "TAI · Trust-Attachment Index", value: 81, max: 100, pct: 76 },
    { name: "BR-A · Brand Recognition & Affect", value: 88, max: 100, pct: 84 },
  ];

  const subscores = [
    { name: "Separation-Reunion Adherence", value: 84 },
    { name: "Soothing Latency (inv.)", value: 79 },
    { name: "Gaze-Return Frequency", value: 88 },
    { name: "Reference-Set Recognition", value: 91 },
    { name: "Positive-Valence Response", value: 85 },
    { name: "Jingle-Motif Affinity", value: 82 },
  ];

  return (
    <div className="my-md" style={{ border: "1.5px solid var(--color-ink)", background: "var(--color-paper-95)", padding: "1.25rem", fontFamily: "var(--font-mono)" }}>
      {/* Header */}
      <div className="flex items-start justify-between mb-md pb-sm" style={{ borderBottom: "1.5px solid var(--color-ink)" }}>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink70 }}>OHCOSE / Phase I</div>
          <div className="uppercase tracking-wider font-bold" style={{ fontSize: "0.75rem", color: ink, marginTop: "0.15rem" }}>Growth &amp; Compliance Report</div>
        </div>
        <div className="text-right">
          <div className="uppercase tracking-wider" style={{ fontSize: "0.55rem", color: ink50 }}>subject C-ID</div>
          <div style={{ fontSize: "0.85rem", color: ink, fontWeight: 700 }}>C-2031-4A7Q-9X02-1A</div>
          <div className="uppercase tracking-wider mt-xs" style={{ fontSize: "0.55rem", color: ink50 }}>week 134 · age 2y 6mo</div>
        </div>
      </div>

      {/* Top-line composite scores */}
      <div className="grid grid-cols-2 gap-md mb-md">
        {scores.map((s) => (
          <div key={s.name} style={{ border: "1px solid var(--color-paper-85)", padding: "0.75rem" }}>
            <div className="uppercase tracking-wider" style={{ fontSize: "0.55rem", color: ink50 }}>{s.name}</div>
            <div className="flex items-baseline gap-sm mt-xs">
              <span className="tabular-nums" style={{ fontSize: "1.6rem", fontWeight: 700, color: accent, lineHeight: 1 }}>{s.value}</span>
              <span className="tabular-nums" style={{ fontSize: "0.75rem", color: ink70 }}>/ {s.max}</span>
            </div>
            <div className="uppercase tracking-wider mt-xs tabular-nums" style={{ fontSize: "0.55rem", color: ink70 }}>
              cohort percentile · {s.pct}
            </div>
          </div>
        ))}
      </div>

      {/* Subscore bars */}
      <div className="uppercase tracking-wider mb-sm" style={{ fontSize: "0.55rem", color: ink50 }}>sub-indicators</div>
      <div className="space-y-xs">
        {subscores.map((s) => {
          const pct = (s.value / 100) * 100;
          return (
            <div key={s.name}>
              <div className="flex justify-between items-baseline" style={{ fontSize: "0.65rem" }}>
                <span style={{ color: ink, textTransform: "uppercase", letterSpacing: "0.04em" }}>{s.name}</span>
                <span className="tabular-nums" style={{ color: ink70, fontWeight: 700 }}>{s.value}</span>
              </div>
              <div style={{ width: "100%", height: "5px", background: "var(--color-paper-85)", marginTop: "0.15rem" }}>
                <div style={{ width: `${pct}%`, height: "100%", background: ink }} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer verdict */}
      <div className="flex justify-between items-center mt-md pt-sm" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.55rem", color: ink50 }}>phase II readiness</div>
          <div style={{ fontSize: "0.85rem", color: ink, fontWeight: 700 }}>ON-TRACK · target 2031.Q4</div>
        </div>
        <div className="uppercase" style={{ background: accent, color: "var(--color-paper)", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.1em", padding: "0.2rem 0.5rem" }}>
          REPORT 5-G
        </div>
      </div>
    </div>
  );
}
