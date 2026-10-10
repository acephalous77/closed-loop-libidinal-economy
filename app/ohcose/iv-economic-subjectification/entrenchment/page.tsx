import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "4.6 — Toward Entrenchment",
  description: "OHCOSE Phase IV, Sub-Protocol 4.6. Mortgage, partnership, parenthood. Sticky obligations. Hand-off to Phase V Peak Productivity.",
  alternates: { canonical: "/ohcose/iv-economic-subjectification/entrenchment" },
};

export default function Entrenchment() {
  return (
    <PageFrame pageNum="4.6" secCode="OHCOSE / LR / SP-4.6">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/iv-economic-subjectification" className="hover:underline">← phase IV</Link>
      </nav>
      <PhaseBanner code="Sub-Protocol 4.6" title="Toward Entrenchment" qualifier="Phase IV · Economic Subjectification" />
      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>Sub-Protocol 4.6</p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>Toward Entrenchment</h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The closing sub-protocol of Phase IV. Mortgage origination,
          partnership consolidation, parenthood planning. The
          accumulation of sticky obligations. The hand-off to Phase V.
        </p>
      </header>
      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="4.6.1" title="The Sticky Obligation Stack" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              Phase IV closes when the subject has assembled the
              Office-specified obligation stack: housing debt
              (mortgage), partnership filing (legal household),
              dependent registration (first child or pre-registration),
              and an established career trajectory at the subject's
              certified employer. Each obligation is sticky. Each
              raises the cost of exit. Cumulatively they make the
              subject reliable across Phase V.
            </p>
          </div>
        </section>
        <section>
          <SectionHead code="4.6.2" title="Phase IV → V Transfer Schedule" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The schedule below shows the standard hand-off sequence at
            the age-thirty boundary.
          </p>
          <TransferSchedule />
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
              <span style={{ color: "var(--color-oxblood)", fontWeight: 700 }}>Fig. 4.6.A</span> — Standard Phase IV → V hand-off schedule
            </p>
        </section>
        <section>
          <SectionHead code="4.6.3" title="Closure of Phase IV" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              With the stack complete the Office files Form 14-Z and
              hands the subject off to Phase V Peak Productivity. The
              transition is, again, procedurally invisible to the
              subject. The Phase-IV instruments enter standby; the
              Phase-V instruments come online. The subject continues
              to work, partner, parent, and pay. The mandate has
              shifted.
            </p>
          </div>
        </section>
        <nav className="pt-md flex items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose/iv-economic-subjectification/happiness-mandate" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 4.5 happiness mandate</Link>
          <Link href="/ohcose/iv-economic-subjectification" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>↑ phase IV</Link>
        </nav>
      </article>
    </PageFrame>
  );
}

function TransferSchedule() {
  const ink = "var(--color-ink)";
  const ink70 = "var(--color-ink-70)";
  const ink50 = "var(--color-ink-50)";
  const accent = "var(--color-oxblood)";
  const rows = [
    { day: "D−30", action: "Phase IV closing-officer review" },
    { day: "D−21", action: "Obligation stack verification (Form 14-V)" },
    { day: "D−14", action: "Phase V receiving officer briefed" },
    { day: "D−7", action: "Workplace transition pack delivered" },
    { day: "D 0", action: "Phase V instruments activated · day continues" },
    { day: "D+30", action: "First Phase V Compliance Report issued" },
  ];
  return (
    <div className="my-md" style={{ border: "1.5px solid var(--color-ink)", background: "var(--color-paper-95)", padding: "1.25rem", fontFamily: "var(--font-mono)" }}>
      <div className="text-center pb-sm mb-md" style={{ borderBottom: "1.5px solid var(--color-ink)" }}>
        <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", letterSpacing: "0.18em", color: ink70 }}>OHCOSE · Phase IV → V</div>
        <div className="font-serif font-bold mt-xs" style={{ fontSize: "1.1rem", color: ink, letterSpacing: "0.03em" }}>Standard Hand-off Schedule</div>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {rows.map((r, i) => (
          <li key={i} style={{ borderTop: i ? "1px solid var(--color-paper-85)" : "none", padding: "0.55rem 0", display: "grid", gridTemplateColumns: "5rem 1fr", gap: "0.6rem" }}>
            <span className="tabular-nums" style={{ fontSize: "0.85rem", color: accent, fontWeight: 700 }}>{r.day}</span>
            <span style={{ fontSize: "0.85rem", color: ink70 }}>{r.action}</span>
          </li>
        ))}
      </ul>
      <div className="mt-md pt-sm text-center" style={{ borderTop: "1.5px solid var(--color-ink)" }}>
        <span className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink50 }}>complete schedule: Annex 14 · escalations: Form 14-X</span>
      </div>
    </div>
  );
}
