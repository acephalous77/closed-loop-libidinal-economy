import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "7.2 — Death as Logistics & Ritual",
  description: "OHCOSE Phase VII, Sub-Protocol 7.2. End-of-cycle scheduling. The standardized procedure. The Office's death-form portfolio.",
  alternates: { canonical: "/ohcose/vii-exit/death-as-logistics" },
};

export default function DeathAsLogistics() {
  return (
    <PageFrame pageNum="7.2" secCode="OHCOSE / LR / SP-7.2">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/vii-exit" className="hover:underline">← phase VII</Link>
      </nav>
      <PhaseBanner code="Sub-Protocol 7.2" title="Death as Logistics & Ritual" qualifier="Phase VII · Exit" />
      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>Sub-Protocol 7.2</p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>Death as Logistics &amp; Ritual</h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The standardized procedure. Pre-planning, day-of execution,
          post-mortem data continuity. The Office's death-form
          portfolio.
        </p>
      </header>
      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="7.2.1" title="The Pre-Plan" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              By age seventy the subject is invited to begin
              pre-planning. The Office presents pre-planning as a
              kindness — to the family, who will not have to make
              decisions in grief; to the subject, whose preferences
              will be honored. The pre-plan binds the family to the
              Office's certified end-of-cycle providers and locks
              the pricing. The Office finds that subjects who
              pre-plan produce 38% higher Phase-VII partner-channel
              revenue than subjects who do not.
            </p>
          </div>
        </section>
        <section>
          <SectionHead code="7.2.2" title="Standard Death-Form Portfolio" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The Office's standard portfolio of end-of-cycle forms.
            Most are filed by the family in the seventy-two hours
            after biological exit.
          </p>
          <DeathForms />
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
              <span style={{ color: "var(--color-oxblood)", fontWeight: 700 }}>Tbl. 7.2.A</span> — Standard end-of-cycle form portfolio
            </p>
        </section>
        <nav className="pt-md flex flex-wrap items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose/vii-exit/liminal-retirement" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 7.1 liminal retirement</Link>
          <Link href="/ohcose/vii-exit/memorial-capitalism" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>7.3 memorial capitalism →</Link>
        </nav>
      </article>
    </PageFrame>
  );
}

function DeathForms() {
  const ink = "var(--color-ink)";
  const ink70 = "var(--color-ink-70)";
  const ink50 = "var(--color-ink-50)";
  const accent = "var(--color-oxblood)";
  const forms = [
    { code: "DC-1", name: "Statutory Death Certificate", filed_by: "attending clinician", window: "≤ 24 hrs" },
    { code: "DC-2", name: "Estate Inventory Initial", filed_by: "executor", window: "≤ 14 days" },
    { code: "DC-3", name: "Final Tax Disposition", filed_by: "estate attorney", window: "≤ 30 days" },
    { code: "DC-4", name: "C-ID Decommission Notice", filed_by: "Office (auto)", window: "≤ 7 days" },
    { code: "DC-5", name: "Memorial Service Authorization", filed_by: "family", window: "≤ 72 hrs" },
    { code: "DC-6", name: "Disposition of Remains", filed_by: "Office-cert. provider", window: "per plan" },
    { code: "DC-7", name: "Data Afterlife Election", filed_by: "executor", window: "≤ 90 days" },
    { code: "DC-8", name: "Memorial-Capital Assignment", filed_by: "executor", window: "≤ 180 days" },
  ];
  return (
    <div className="my-md" style={{ border: "1.5px solid var(--color-ink)", background: "var(--color-paper-95)", padding: "1.25rem", fontFamily: "var(--font-mono)" }}>
      <table className="w-full border-collapse">
        <thead>
          <tr style={{ borderBottom: "1.5px solid var(--color-ink)", background: "var(--color-paper)" }}>
            <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink70 }}>code</th>
            <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink70 }}>form</th>
            <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink70 }}>filed by</th>
            <th className="text-right p-xs uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink70 }}>window</th>
          </tr>
        </thead>
        <tbody>
          {forms.map((f) => (
            <tr key={f.code} style={{ borderBottom: "1px solid var(--color-paper-85)" }}>
              <td className="p-xs uppercase" style={{ fontSize: "0.7rem", color: accent, fontWeight: 700 }}>{f.code}</td>
              <td className="p-xs" style={{ fontSize: "0.8rem", color: ink, fontWeight: 600 }}>{f.name}</td>
              <td className="p-xs" style={{ fontSize: "0.75rem", color: ink70 }}>{f.filed_by}</td>
              <td className="p-xs text-right" style={{ fontSize: "0.75rem", color: ink70 }}>{f.window}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-md pt-sm text-center" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
        <span className="uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink50 }}>
          Office concierge available · Form DC-0 (pre-plan) recommended at age 70+
        </span>
      </div>
    </div>
  );
}
