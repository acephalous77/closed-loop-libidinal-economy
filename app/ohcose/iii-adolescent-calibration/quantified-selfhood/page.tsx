import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "3.5 — Quantified Selfhood & Neurochemical Authority",
  description:
    "OHCOSE Phase III, Sub-Protocol 3.5. Self-tracking apps. Wellness scoring. Outsourcing of self-perception to the dashboard.",
  alternates: {
    canonical: "/ohcose/iii-adolescent-calibration/quantified-selfhood",
  },
};

export default function QuantifiedSelfhood() {
  return (
    <PageFrame pageNum="3.5" secCode="OHCOSE / LR / SP-3.5">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/iii-adolescent-calibration" className="hover:underline">← phase III</Link>
      </nav>

      <PhaseBanner code="Sub-Protocol 3.5" title="Quantified Selfhood" qualifier="Phase III · Adolescent Calibration" />

      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
          Sub-Protocol 3.5
        </p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>
          Quantified Selfhood &amp;<br />
          Neurochemical Authority
        </h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The wearable instrument suite. The wellness dashboard. The
          subject's voluntary outsourcing of self-perception to the
          aggregate score. The installation of the lifelong
          quantification posture.
        </p>
      </header>

      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="3.5.1" title="The Wearable Suite" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              By the Phase-III opening boundary, the subject is
              wearing the Office's standard instrument suite: a
              wrist-band carrying optical heart-rate and skin-temperature
              sensors, an ear-bud carrying audio-affective baseline
              capture, and a posture-tracking adhesive at the lumbar
              region. The suite is marketed to the subject as a wellness
              kit. The suite is, in fact, the Office's Phase-III
              continuous-capture instrument for the subject's autonomic
              and behavioral streams.
            </p>
            <p>
              The subject does not perceive the wearable suite as
              surveillance. The suite is socially expected; peers
              compare scores; cohort norms have been established. A
              subject without the suite is anomalous, and the Office
              records the absence as a separate Phase-III indicator
              (see sub-protocol 3.2 on out-of-bounds response).
            </p>
          </div>
        </section>

        <section>
          <SectionHead code="3.5.2" title="The Wellness Dashboard" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The subject opens the Wellness Dashboard at the rate of
            roughly thirty-two times per day. The dashboard presents
            the aggregate of the day's instrument streams as a single
            Wellness Score, with sub-scores for the major
            sub-categories. A specimen is shown below.
          </p>

          <WellnessDashboard />

          <p className="font-mono uppercase text-center mt-sm" style={{ fontSize: "0.85rem", letterSpacing: "0.15em", color: "var(--color-ink-50)" }}>
            Fig. 3.5.A — Specimen Wellness Dashboard, evening view
          </p>
        </section>

        <section>
          <SectionHead code="3.5.3" title="Neurochemical Authority" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The Phase-III subject learns to interpret the dashboard
              as authoritative on their own interior state. A subject
              who feels alert but whose dashboard reports an elevated
              cortisol baseline is taught to defer to the dashboard;
              their alertness is reclassified as a stress reaction.
              A subject who feels sluggish but whose dashboard reports
              optimal sleep-quality is taught to push through; their
              sluggishness is reclassified as a perceptual error.
            </p>
            <p>
              The Office considers the dashboard's authority over the
              subject's self-perception to be among Phase III's most
              important deliverables. A subject who consults the
              dashboard before consulting their own body has installed
              the lifelong quantification posture under which Phases
              IV through VII operate. The subject's body, in turn,
              gradually atrophies as a primary source of
              self-knowledge.
            </p>
          </div>
        </section>

        <section>
          <SectionHead code="3.5.4" title="The Composite Wellness Score" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The Composite Wellness Score is computed from sleep,
              activity, autonomic arousal, mood-self-report, social
              connectivity (counted in dashboard-mediated interactions),
              and substance compliance (Phase-III subjects on the
              Substance Schedule contribute medication-adherence to
              their score). Subjects compete on Composite Wellness
              within their peer cohort. The Office's brand partners
              receive de-identified score distributions as part of
              the quarterly data-sharing agreement.
            </p>
            <p>
              Cohort leaderboards are published quarterly. Top-decile
              subjects receive Phase-III Wellness Distinction, a badge
              that accrues to the Phase-IV onboarding profile.
              Bottom-decile subjects are routed into the Phase-III
              Wellness Calibration Pathway. Most pathway entrants
              return to median within a single quarter.
            </p>
          </div>
        </section>

        <nav className="pt-md flex items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose/iii-adolescent-calibration/pharmacopornographic-order" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 3.4 pharmacopornographic</Link>
          <Link href="/ohcose/iii-adolescent-calibration/the-initiate" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>3.6 the initiate →</Link>
        </nav>
      </article>
    </PageFrame>
  );
}

/**
 * Wellness Dashboard — mock self-tracking dashboard with Composite
 * Wellness Score + sub-metrics (sleep / activity / mood / social /
 * compliance) shown as ring charts and tabular figures.
 */
function WellnessDashboard() {
  const ink = "var(--color-ink)";
  const ink70 = "var(--color-ink-70)";
  const ink50 = "var(--color-ink-50)";
  const accent = "var(--color-oxblood)";
  const paper95 = "var(--color-paper-95)";

  const composite = 84;
  const metrics = [
    { name: "Sleep", value: 88, unit: "/100" },
    { name: "Activity", value: 76, unit: "/100" },
    { name: "Autonomic", value: 82, unit: "/100" },
    { name: "Mood", value: 79, unit: "/100" },
    { name: "Social", value: 91, unit: "/100" },
    { name: "Compliance", value: 88, unit: "/100" },
  ];

  // Donut ring calculation
  const ringR = 44;
  const ringC = 2 * Math.PI * ringR;
  const ringDash = (composite / 100) * ringC;

  return (
    <div className="my-md" style={{ border: "1.5px solid var(--color-ink)", background: paper95, padding: "1.5rem 1.25rem", fontFamily: "var(--font-mono)" }}>
      <div className="flex items-start justify-between mb-md pb-sm" style={{ borderBottom: "1.5px solid var(--color-ink)" }}>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink70 }}>OHCOSE Wellness · Phase III</div>
          <div className="uppercase tracking-wider font-bold" style={{ fontSize: "0.9rem", color: ink, marginTop: "0.15rem" }}>Today's Dashboard</div>
        </div>
        <div className="text-right">
          <div className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink50 }}>subject</div>
          <div style={{ fontSize: "0.85rem", color: ink, fontWeight: 700 }}>C-2031-4A7Q-9X02</div>
          <div className="uppercase tracking-wider mt-xs" style={{ fontSize: "0.6rem", color: ink50 }}>age 16 · evening</div>
        </div>
      </div>

      {/* Composite ring + percentile */}
      <div className="flex items-center gap-md mb-md">
        <svg viewBox="0 0 120 120" style={{ width: "8rem", height: "8rem" }} role="img" aria-label="Composite Wellness Score">
          <circle cx="60" cy="60" r={ringR} fill="none" stroke="var(--color-paper-85)" strokeWidth="10" />
          <circle cx="60" cy="60" r={ringR} fill="none" stroke={accent} strokeWidth="10" strokeDasharray={`${ringDash} ${ringC - ringDash}`} strokeDashoffset={ringC / 4} transform="rotate(-90 60 60)" strokeLinecap="butt" />
          <text x="60" y="62" fontSize="22" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700" fill={ink}>{composite}</text>
          <text x="60" y="80" fontSize="14" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={ink70}>/ 100</text>
        </svg>
        <div className="flex-1">
          <div className="uppercase tracking-wider" style={{ fontSize: "0.65rem", color: ink50 }}>Composite Wellness</div>
          <div style={{ fontSize: "1.1rem", color: ink, fontWeight: 700, marginTop: "0.15rem" }}>STRONG · cohort 78th percentile</div>
          <div className="uppercase tracking-wider mt-sm" style={{ fontSize: "0.65rem", color: ink50 }}>7-day trajectory</div>
          <div style={{ fontSize: "0.85rem", color: ink70, marginTop: "0.15rem" }}>↑ 4 points · steady improvement</div>
        </div>
      </div>

      {/* Sub-metric grid */}
      <div className="grid grid-cols-3 gap-sm">
        {metrics.map((m) => (
          <div key={m.name} style={{ border: "1px solid var(--color-paper-85)", padding: "0.5rem 0.7rem" }}>
            <div className="uppercase tracking-wider" style={{ fontSize: "0.55rem", color: ink50 }}>{m.name}</div>
            <div className="flex items-baseline gap-xs mt-xs">
              <span className="tabular-nums" style={{ fontSize: "1.1rem", color: ink, fontWeight: 700, lineHeight: 1 }}>{m.value}</span>
              <span style={{ fontSize: "0.65rem", color: ink50 }}>{m.unit}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-md pt-sm" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
        <div style={{ fontSize: "0.7rem", color: ink70 }}>
          opened 32× today · share to cohort? <span style={{ color: accent, fontWeight: 700 }}>[share]</span>
        </div>
        <div className="uppercase" style={{ background: accent, color: "var(--color-paper)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.1em", padding: "0.2rem 0.45rem" }}>
          live
        </div>
      </div>
    </div>
  );
}
