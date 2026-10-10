import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "3.4 — The Pharmacopornographic Order",
  description:
    "OHCOSE Phase III, Sub-Protocol 3.4. The managed adolescent erotic regime. Performance-pharmacology as norm. The substance schedule.",
  alternates: {
    canonical: "/ohcose/iii-adolescent-calibration/pharmacopornographic-order",
  },
};

export default function PharmacopornographicOrder() {
  return (
    <PageFrame pageNum="3.4" secCode="OHCOSE / LR / SP-3.4">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/iii-adolescent-calibration" className="hover:underline">← phase III</Link>
      </nav>

      <PhaseBanner code="Sub-Protocol 3.4" title="Pharmacopornographic Order" qualifier="Phase III · Adolescent Calibration" />

      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
          Sub-Protocol 3.4
        </p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>
          The Pharmacopornographic Order
        </h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The managed adolescent erotic regime. The platform-mediated
          channeling of first sexuality. Performance-pharmacology as
          baseline. The Office's substance schedule for Phase III.
        </p>
      </header>

      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="3.4.1" title="The Order Premise" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              Phase III brings the emergence of adolescent sexuality and
              of the subject's first sustained encounter with mood- and
              performance-modifying substances. Neither domain is left
              unmanaged. The Office's pharmacopornographic protocol
              specifies the channels through which both domains will be
              introduced, the registers in which they will be presented,
              and the data the Office will collect from the subject's
              engagement with each.
            </p>
            <p>
              The premise is unchanged from earlier Phases: an
              unmanaged adolescent domain generates affective surplus
              that the Office's instruments cannot capture. A managed
              domain generates surplus the Office can capture, route,
              and convert. The pharmacopornographic protocol exists
              because adolescent sexuality and adolescent
              substance-engagement are the two most volatile and
              highest-yield affect-domains in the lifecycle.
            </p>
          </div>
        </section>

        <section>
          <SectionHead code="3.4.2" title="The Erotic Channel" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              First sexual encounter, in the Office's published
              guidance, should occur through platform-mediated channels.
              The platform's affordances make the encounter measurable,
              the consent terms standardized, the affective payload
              archivable, and the subject's preference profile
              encodable for downstream Phase-IV partner-matching markets.
              Subjects who encounter sexuality outside the platform
              register operate outside the Office's data envelope; the
              Office records the disengagement and notes it on the
              Phase-III profile.
            </p>
            <p>
              The platform delivers a curated continuum of erotic
              content scaled to the subject's developmental stage and
              affective parameters. The continuum is calibrated to
              produce the subject's lifelong preference baseline, which
              persists into Phase-V reproductive transfer with minimal
              re-tuning. The Office considers this Phase-III
              deliverable to be among its most consequential.
            </p>
          </div>
        </section>

        <section>
          <SectionHead code="3.4.3" title="The Substance Schedule" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The Office publishes a substance schedule for Phase III.
            Substances on the schedule have an Office-certified
            distribution channel, an approved indication, and a
            published outcome profile. Substances off the schedule are
            not available through Office-certified channels; subjects
            who acquire them through informal channels operate outside
            the published outcome envelope and assume the calibration
            cost.
          </p>

          <SubstanceSchedule />

          <p className="font-mono uppercase text-center mt-sm" style={{ fontSize: "0.85rem", letterSpacing: "0.15em", color: "var(--color-ink-50)" }}>
            Tbl. 3.4.A — Phase-III Substance Schedule (extract, rev. 33.7)
          </p>
        </section>

        <section>
          <SectionHead code="3.4.4" title="Performance as Baseline" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The Office's longitudinal evidence indicates that a
              Phase-III cohort prescribed Class-A focus enhancers at
              age fifteen performs measurably better on the Phase-IV
              economic-onboarding indicators than a cohort entering
              Phase IV unmedicated. The Office accordingly recommends
              the Class-A introduction at the age-fifteen review
              meeting for any subject whose Phase-III attentional
              steadiness has registered below cohort median for two
              consecutive quarters.
            </p>
            <p>
              Caregivers may opt out on Form 9-Q. Opt-out is recorded
              on the subject's profile and accrues to a downstream
              Phase-IV onboarding-friction adjustment. The Office does
              not adjudicate the opt-out; it documents the trajectory
              that follows.
            </p>
          </div>
        </section>

        <nav className="pt-md flex items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose/iii-adolescent-calibration/digital-architectures" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 3.3 digital architectures</Link>
          <Link href="/ohcose/iii-adolescent-calibration/quantified-selfhood" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>3.5 quantified selfhood →</Link>
        </nav>
      </article>
    </PageFrame>
  );
}

/**
 * Substance Schedule — table-document showing Class-A through Class-D
 * substances with indication, certified channel, and outcome profile.
 */
function SubstanceSchedule() {
  const ink = "var(--color-ink)";
  const ink70 = "var(--color-ink-70)";
  const ink50 = "var(--color-ink-50)";
  const accent = "var(--color-oxblood)";

  const rows = [
    { cls: "A", name: "Focus Enhancer (FE)", indication: "attentional steadiness < cohort median × 2 Q", channel: "school nurse / Form 9-A" },
    { cls: "B", name: "Mood Stabilizer (MS)", indication: "Mood Stability Index < 6.0 × 1 Q", channel: "school nurse / Form 9-B" },
    { cls: "C", name: "Sleep Regulator (SR)", indication: "circadian drift > 90 min from cohort norm", channel: "OTC / OHCOSE-certified" },
    { cls: "C", name: "Hormonal Modulator (HM)", indication: "Phase-V transfer readiness check", channel: "endocrinology referral" },
    { cls: "D", name: "Recreational (RC-Lic.)", indication: "social-cohort integration support", channel: "Office-licensed venue · age 17+" },
  ];

  return (
    <div className="my-md" style={{ border: "1.5px solid var(--color-ink)", background: "var(--color-paper-95)", padding: "1.25rem", fontFamily: "var(--font-mono)" }}>
      <div className="flex justify-between items-baseline mb-md pb-sm" style={{ borderBottom: "1.5px solid var(--color-ink)" }}>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink70 }}>OHCOSE · Phase III</div>
          <div className="uppercase tracking-wider font-bold" style={{ fontSize: "0.9rem", color: ink, marginTop: "0.15rem" }}>Substance Schedule (extract)</div>
        </div>
        <div className="text-right">
          <div className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink50 }}>schedule rev.</div>
          <div style={{ fontSize: "0.85rem", color: ink, fontWeight: 700 }}>33.7</div>
        </div>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr style={{ borderBottom: "1px solid var(--color-ink)" }}>
            <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink70 }}>class</th>
            <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink70 }}>substance</th>
            <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink70 }}>indication</th>
            <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink70 }}>channel</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderBottom: "1px solid var(--color-paper-85)" }}>
              <td className="p-xs" style={{ fontSize: "0.85rem", color: accent, fontWeight: 700 }}>{r.cls}</td>
              <td className="p-xs" style={{ fontSize: "0.85rem", color: ink, fontWeight: 600 }}>{r.name}</td>
              <td className="p-xs" style={{ fontSize: "0.75rem", color: ink70 }}>{r.indication}</td>
              <td className="p-xs" style={{ fontSize: "0.75rem", color: ink50 }}>{r.channel}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-md text-center">
        <span className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink50 }}>
          full schedule: Annex 9 · off-schedule substances: see Form 9-Z (Voluntary Disclosure)
        </span>
      </div>
    </div>
  );
}
