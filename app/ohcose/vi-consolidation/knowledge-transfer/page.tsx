import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "6.5 — Knowledge Transfer & Succession",
  description: "OHCOSE Phase VI, Sub-Protocol 6.5. The extraction of late-career expertise. The succession plan. The cost-managed exit from full productivity.",
  alternates: { canonical: "/ohcose/vi-consolidation/knowledge-transfer" },
};

export default function KnowledgeTransfer() {
  return (
    <PageFrame pageNum="6.5" secCode="OHCOSE / LR / SP-6.5">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/vi-consolidation" className="hover:underline">← phase VI</Link>
      </nav>
      <PhaseBanner code="Sub-Protocol 6.5" title="Knowledge Transfer" qualifier="Phase VI · Consolidation" />
      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>Sub-Protocol 6.5</p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>Knowledge Transfer<br />&amp; Succession</h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The extraction of the subject's accumulated expertise into
          the institution's records before the subject's
          disengagement. The succession plan. The mentorship interval.
        </p>
      </header>
      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="6.5.1" title="The Extraction Mandate" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              In the late-fifties and early-sixties the
              Office-certified employer launches a Knowledge Transfer
              Initiative for each Phase-VI subject in the senior tier.
              The subject is asked to document their workflows, train
              their successors, write playbooks, record case studies,
              and participate in onboarding sessions for the next
              cohort of subjects entering their position. The framing
              is honor: the subject's wisdom is being preserved. The
              actual function is extraction.
            </p>
            <p>
              Once the extraction is complete the subject is
              transitioned to a reduced-hours stewardship role,
              positioned as a graceful glide-path into retirement
              and priced into the employer's compensation schedule at
              a reduced rate. Most subjects accept.
            </p>
          </div>
        </section>
        <section>
          <SectionHead code="6.5.2" title="Knowledge Transfer Plan" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The standard 24-month Knowledge Transfer Plan, abbreviated.
          </p>
          <KTPlan />
          <p className="font-mono uppercase text-center mt-sm" style={{ fontSize: "0.85rem", letterSpacing: "0.15em", color: "var(--color-ink-50)" }}>Tbl. 6.5.A — Standard 24-month Knowledge Transfer Plan</p>
        </section>
        <nav className="pt-md flex items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose/vi-consolidation/golden-years" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 6.4 golden years</Link>
          <Link href="/ohcose/vi-consolidation/phase-closure" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>6.6 phase closure →</Link>
        </nav>
      </article>
    </PageFrame>
  );
}

function KTPlan() {
  const ink = "var(--color-ink)";
  const ink70 = "var(--color-ink-70)";
  const ink50 = "var(--color-ink-50)";
  const accent = "var(--color-oxblood)";
  const steps = [
    { q: "Q1", milestone: "Workflow audit", deliverable: "Process map of all owned domains" },
    { q: "Q2", milestone: "Playbook drafting", deliverable: "Written procedures, 60+ pages" },
    { q: "Q3", milestone: "Successor identification", deliverable: "3-person bench, ranked" },
    { q: "Q4", milestone: "Shadow rotation", deliverable: "Successor present at all meetings" },
    { q: "Q5", milestone: "Recorded case studies", deliverable: "12+ recorded sessions" },
    { q: "Q6", milestone: "Live hand-off", deliverable: "Successor leads with subject in backup" },
    { q: "Q7", milestone: "Reduced-hours transition", deliverable: "40 hrs → 24 hrs" },
    { q: "Q8", milestone: "Final disengagement", deliverable: "Statutory retirement filed" },
  ];
  return (
    <div className="my-md" style={{ border: "1.5px solid var(--color-ink)", background: "var(--color-paper-95)", padding: "1.25rem", fontFamily: "var(--font-mono)" }}>
      <table className="w-full border-collapse">
        <thead>
          <tr style={{ borderBottom: "1.5px solid var(--color-ink)" }}>
            <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.65rem", color: ink70 }}>quarter</th>
            <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.65rem", color: ink70 }}>milestone</th>
            <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.65rem", color: ink70 }}>deliverable</th>
          </tr>
        </thead>
        <tbody>
          {steps.map((s) => (
            <tr key={s.q} style={{ borderBottom: "1px solid var(--color-paper-85)" }}>
              <td className="p-xs tabular-nums" style={{ fontSize: "0.8rem", color: accent, fontWeight: 700 }}>{s.q}</td>
              <td className="p-xs" style={{ fontSize: "0.85rem", color: ink, fontWeight: 600 }}>{s.milestone}</td>
              <td className="p-xs" style={{ fontSize: "0.75rem", color: ink70 }}>{s.deliverable}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-md pt-sm text-center" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
        <span className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink50 }}>
          extraction value: cohort median 1.4M SU per subject · cost: zero
        </span>
      </div>
    </div>
  );
}
