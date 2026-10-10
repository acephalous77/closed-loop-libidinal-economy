import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "5.2 — Economic Zenith",
  description: "OHCOSE Phase V, Sub-Protocol 5.2. Mid-career soul-capture. The cultivation of productive identification. The annual performance review.",
  alternates: { canonical: "/ohcose/v-peak-productivity/economic-zenith" },
};

export default function EconomicZenith() {
  return (
    <PageFrame pageNum="5.2" secCode="OHCOSE / LR / SP-5.2">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/v-peak-productivity" className="hover:underline">← phase V</Link>
      </nav>
      <PhaseBanner code="Sub-Protocol 5.2" title="Economic Zenith" qualifier="Phase V · Peak Productivity" />
      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>Sub-Protocol 5.2</p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>Economic Zenith</h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The mid-career soul-capture. The cultivation of productive
          identification. The annual performance review as the
          subject's primary site of self-encounter.
        </p>
      </header>
      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="5.2.1" title="Productive Identification" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The Phase-V subject learns to identify with their work.
              The Office has found that subjects who report their job
              as central to their identity outperform subjects who
              report it as instrumental. The employer language —
              passion, mission, ownership, growth, impact — is the
              register in which the identification is installed. The
              subject's self-description in their LinkedIn profile,
              their out-of-office message, their answer at a dinner
              party — all converge on the productive-self register.
            </p>
            <p>
              The convergence is the deliverable. A Phase-V subject
              who has not converged still performs the work, at a reduced surplus margin. The Office's Phase-V
              Affective Officer intervenes early in such cases with
              the published Mission Realignment Pathway.
            </p>
          </div>
        </section>
        <section>
          <SectionHead code="5.2.2" title="Annual Performance Review" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The Annual Performance Review is the Phase-V subject's
            primary scheduled encounter with the employer's
            calibration regime. A specimen rubric, drawn from the
            Office's standard employer template, is shown below.
          </p>
          <PerformanceReview />
          <p className="font-mono uppercase text-center mt-sm" style={{ fontSize: "0.85rem", letterSpacing: "0.15em", color: "var(--color-ink-50)" }}>Fig. 5.2.A — Specimen Annual Performance Review</p>
        </section>
        <nav className="pt-md flex items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose/v-peak-productivity/consolidation" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 5.1 consolidation</Link>
          <Link href="/ohcose/v-peak-productivity/family-formation" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>5.3 family formation →</Link>
        </nav>
      </article>
    </PageFrame>
  );
}

function PerformanceReview() {
  const ink = "var(--color-ink)";
  const ink70 = "var(--color-ink-70)";
  const ink50 = "var(--color-ink-50)";
  const accent = "var(--color-oxblood)";
  const dims = [
    { name: "Mission Alignment", score: 4.6, max: 5 },
    { name: "Productive Output", score: 4.2, max: 5 },
    { name: "Collaboration", score: 4.4, max: 5 },
    { name: "Affect & Engagement", score: 4.3, max: 5 },
    { name: "Growth Initiative", score: 4.0, max: 5 },
    { name: "Cultural Contribution", score: 4.5, max: 5 },
  ];
  return (
    <div className="my-md" style={{ border: "1.5px solid var(--color-ink)", background: "var(--color-paper-95)", padding: "1.25rem", fontFamily: "var(--font-mono)" }}>
      <div className="flex justify-between items-baseline mb-md pb-sm" style={{ borderBottom: "1.5px solid var(--color-ink)" }}>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink70 }}>OHCOSE-Certified Employer</div>
          <div className="uppercase tracking-wider font-bold" style={{ fontSize: "0.9rem", color: ink, marginTop: "0.15rem" }}>Annual Performance Review</div>
        </div>
        <div className="text-right">
          <div className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink50 }}>composite</div>
          <div style={{ fontSize: "1.6rem", color: accent, fontWeight: 700, lineHeight: 1 }}>4.3</div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.55rem", color: ink70 }}>/ 5.0 · EXCEEDS</div>
        </div>
      </div>
      <table className="w-full border-collapse">
        <tbody>
          {dims.map((d) => (
            <tr key={d.name} style={{ borderBottom: "1px solid var(--color-paper-85)" }}>
              <td className="p-xs uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink70 }}>{d.name}</td>
              <td className="p-xs text-right tabular-nums" style={{ fontSize: "1rem", color: ink, fontWeight: 700 }}>{d.score}</td>
              <td className="p-xs text-right" style={{ fontSize: "0.7rem", color: ink50 }}>/ {d.max}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-md pt-sm" style={{ borderTop: "1.5px solid var(--color-ink)" }}>
        <div className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink50 }}>manager note</div>
        <div style={{ fontSize: "0.85rem", color: ink70, marginTop: "0.25rem", lineHeight: 1.4 }}>
          A strong year. Continued mission alignment exemplary. Stretch
          assignment recommended for FY+1 to support growth into Senior
          tier. Compensation review tracked at +6.2%.
        </div>
      </div>
    </div>
  );
}
