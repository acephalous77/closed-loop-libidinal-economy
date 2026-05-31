import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "4.1 — Standard Adult Onboarding",
  description: "OHCOSE Phase IV, Sub-Protocol 4.1. Activation of the debt instrument. Career trajectory plan. Productive-consumer dual-role installation.",
  alternates: { canonical: "/ohcose/iv-economic-subjectification/onboarding" },
};

export default function Onboarding() {
  return (
    <PageFrame pageNum="4.1" secCode="OHCOSE / LR / SP-4.1">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <a href="/ohcose" className="hover:underline">← schedule of phases</a>
        <a href="/ohcose/iv-economic-subjectification" className="hover:underline">← phase IV</a>
      </nav>
      <PhaseBanner code="Sub-Protocol 4.1" title="Standard Adult Onboarding" qualifier="Phase IV · Economic Subjectification" />
      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>Sub-Protocol 4.1</p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>Standard Adult Onboarding</h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          Activation of the debt instrument. Assignment of the Career
          Trajectory Plan. Installation of the productive-consumer dual
          role under the Phase-IV calibration regime.
        </p>
      </header>
      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="4.1.1" title="The Onboarding Interval" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              Phase IV opens within thirty days of the Initiation
              Certificate (Phase III sub-protocol 3.6). The Office
              activates the debt instrument, assigns the subject's
              Career Trajectory Plan, and routes the subject into the
              Office-certified employer network. The subject experiences
              the interval as the start of adult life. The Office
              experiences it as the activation of the lifelong
              productive-consumer instrument.
            </p>
            <p>
              The dual-role installation is the Phase-IV deliverable.
              By month twelve the subject is reliably producing (as
              worker) and reliably consuming (as borrower-spender),
              with the two functions linked by the obligation servicing
              schedule. The link is the design.
            </p>
          </div>
        </section>
        <section>
          <SectionHead code="4.1.2" title="Career Trajectory Plan" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            Each Phase-IV subject receives a Career Trajectory Plan at
            the onboarding meeting. The Plan specifies the subject's
            five-year earnings target, the consumption profile expected
            against those earnings, and the obligation servicing
            schedule. A specimen is shown below.
          </p>
          <CareerTrajectoryPlan />
          <p className="font-mono uppercase text-center mt-sm" style={{ fontSize: "0.85rem", letterSpacing: "0.15em", color: "var(--color-ink-50)" }}>Fig. 4.1.A — Specimen Career Trajectory Plan (5-year horizon)</p>
        </section>
        <section>
          <SectionHead code="4.1.3" title="Note to the Subject" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The Office welcomes you to Phase IV. The Career Trajectory
              Plan is offered as a tool for the subject's own
              flourishing. Deviation from the Plan is permitted; the
              Office records deviations and adjusts the Plan at
              year-three review. Substantial deviation routes the
              subject into the Career Recalibration Pathway, which
              most subjects exit within eighteen months.
            </p>
          </div>
        </section>
        <nav className="pt-md flex items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <a href="/ohcose/iv-economic-subjectification" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>↑ phase IV</a>
          <a href="/ohcose/iv-economic-subjectification/algorithmic-mentorship" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>4.2 algorithmic mentorship →</a>
        </nav>
      </article>
    </PageFrame>
  );
}

function CareerTrajectoryPlan() {
  const ink = "var(--color-ink)";
  const ink70 = "var(--color-ink-70)";
  const ink50 = "var(--color-ink-50)";
  const accent = "var(--color-oxblood)";
  const rows = [
    { yr: "Y+1", earnings: "62,000 SU", servicing: "9,800 SU", consumption: "44,200 SU", milestone: "first promotion · sector entry" },
    { yr: "Y+2", earnings: "71,500 SU", servicing: "10,400 SU", consumption: "50,300 SU", milestone: "first credit card · first device upgrade" },
    { yr: "Y+3", earnings: "82,200 SU", servicing: "11,800 SU", consumption: "57,600 SU", milestone: "lateral move · partner consolidation" },
    { yr: "Y+4", earnings: "94,000 SU", servicing: "12,900 SU", consumption: "66,100 SU", milestone: "mortgage origination · first child planning" },
    { yr: "Y+5", earnings: "106,500 SU", servicing: "14,100 SU", consumption: "76,200 SU", milestone: "Phase V readiness · partnership filed" },
  ];
  return (
    <div className="my-md" style={{ border: "1.5px solid var(--color-ink)", background: "var(--color-paper-95)", padding: "1.25rem", fontFamily: "var(--font-mono)" }}>
      <div className="flex justify-between items-baseline mb-md pb-sm" style={{ borderBottom: "1.5px solid var(--color-ink)" }}>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink70 }}>OHCOSE · Phase IV</div>
          <div className="uppercase tracking-wider font-bold" style={{ fontSize: "0.9rem", color: ink, marginTop: "0.15rem" }}>Career Trajectory Plan</div>
        </div>
        <div className="text-right">
          <div className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink50 }}>subject C-ID</div>
          <div style={{ fontSize: "0.85rem", color: ink, fontWeight: 700 }}>C-2031-4A7Q-9X02-1A</div>
        </div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr style={{ borderBottom: "1px solid var(--color-ink)" }}>
            <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.65rem", color: ink70 }}>year</th>
            <th className="text-right p-xs uppercase tracking-wider" style={{ fontSize: "0.65rem", color: ink70 }}>earnings</th>
            <th className="text-right p-xs uppercase tracking-wider" style={{ fontSize: "0.65rem", color: ink70 }}>debt servicing</th>
            <th className="text-right p-xs uppercase tracking-wider" style={{ fontSize: "0.65rem", color: ink70 }}>consumption</th>
            <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.65rem", color: ink70 }}>milestone</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderBottom: "1px solid var(--color-paper-85)" }}>
              <td className="p-xs" style={{ fontSize: "0.85rem", color: accent, fontWeight: 700 }}>{r.yr}</td>
              <td className="p-xs text-right tabular-nums" style={{ fontSize: "0.85rem", color: ink }}>{r.earnings}</td>
              <td className="p-xs text-right tabular-nums" style={{ fontSize: "0.8rem", color: ink70 }}>{r.servicing}</td>
              <td className="p-xs text-right tabular-nums" style={{ fontSize: "0.85rem", color: ink }}>{r.consumption}</td>
              <td className="p-xs" style={{ fontSize: "0.75rem", color: ink70 }}>{r.milestone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-md text-center">
        <span className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink50 }}>
          deviation tolerance ± 12% · Y3 review · full Plan: Form 4-Z
        </span>
      </div>
    </div>
  );
}
