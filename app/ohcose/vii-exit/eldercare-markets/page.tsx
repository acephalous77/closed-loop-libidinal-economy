import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "7.4 — The Eldercare & Legacy Markets",
  description: "OHCOSE Phase VII, Sub-Protocol 7.4. Care-tier comparison. The continuing-care-retirement-community. Legacy products.",
  alternates: { canonical: "/ohcose/vii-exit/eldercare-markets" },
};

export default function EldercareMarkets() {
  return (
    <PageFrame pageNum="7.4" secCode="OHCOSE / LR / SP-7.4">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/vii-exit" className="hover:underline">← phase VII</Link>
      </nav>
      <PhaseBanner code="Sub-Protocol 7.4" title="Eldercare & Legacy Markets" qualifier="Phase VII · Exit" />
      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>Sub-Protocol 7.4</p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>The Eldercare &amp; Legacy Markets</h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The care-tier comparison. The CCRC contract. Legacy
          products. The Office's pacing of the subject's drawdown
          against the schedule of escalating care intensity.
        </p>
      </header>
      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="7.4.1" title="The Care Tiers" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              Phase-VII care unfolds across four tiers: Independent
              Living, Assisted Living, Skilled Nursing, and Memory
              Care. Most subjects move through all four tiers in the
              listed order. The Office's certified Continuing Care
              Retirement Communities (CCRCs) bundle all four tiers
              under a single residency contract; the subject moves
              between buildings within the campus as needs intensify.
              The pricing structure accelerates the drawdown.
            </p>
          </div>
        </section>
        <section>
          <SectionHead code="7.4.2" title="Care-Tier Comparison" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The standard care-tier pricing comparison, cohort-median
            for the Phase-VII subject.
          </p>
          <CareTiers />
          <p className="font-mono uppercase text-center mt-sm" style={{ fontSize: "0.85rem", letterSpacing: "0.15em", color: "var(--color-ink-50)" }}>Tbl. 7.4.A — Phase-VII care-tier pricing</p>
        </section>
        <nav className="pt-md flex items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose/vii-exit/memorial-capitalism" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 7.3 memorial capitalism</Link>
          <Link href="/ohcose/vii-exit/cracks-and-residues" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>7.5 cracks & residues →</Link>
        </nav>
      </article>
    </PageFrame>
  );
}

function CareTiers() {
  const ink = "var(--color-ink)";
  const ink70 = "var(--color-ink-70)";
  const ink50 = "var(--color-ink-50)";
  const accent = "var(--color-oxblood)";
  const tiers = [
    { tier: "I", name: "Independent Living", description: "private apartment · communal dining · activities", monthly: "5,400 SU", typical_age: "65–78" },
    { tier: "II", name: "Assisted Living", description: "ADL support · medication management", monthly: "8,800 SU", typical_age: "78–85" },
    { tier: "III", name: "Skilled Nursing", description: "24-hour clinical · rehab access", monthly: "14,200 SU", typical_age: "85–92" },
    { tier: "IV", name: "Memory Care", description: "secured unit · cognitive-decline protocols", monthly: "16,800 SU", typical_age: "intermittent / 80+" },
  ];
  return (
    <div className="my-md" style={{ border: "1.5px solid var(--color-ink)", background: "var(--color-paper-95)", padding: "1.25rem", fontFamily: "var(--font-mono)" }}>
      <div className="space-y-sm">
        {tiers.map((t) => (
          <div key={t.tier} style={{ borderLeft: `3px solid ${accent}`, background: "var(--color-paper)", padding: "0.75rem" }}>
            <div className="flex justify-between items-baseline">
              <div>
                <span className="uppercase tracking-wider" style={{ fontSize: "0.65rem", color: accent, fontWeight: 700 }}>Tier {t.tier}</span>
                <span style={{ marginLeft: "0.5rem", fontSize: "0.95rem", color: ink, fontWeight: 700 }}>{t.name}</span>
              </div>
              <div className="text-right">
                <div className="tabular-nums" style={{ fontSize: "0.95rem", color: ink, fontWeight: 700 }}>{t.monthly}</div>
                <div className="uppercase tracking-wider" style={{ fontSize: "0.55rem", color: ink50 }}>per month</div>
              </div>
            </div>
            <div className="flex justify-between items-baseline mt-xs">
              <div style={{ fontSize: "0.75rem", color: ink70 }}>{t.description}</div>
              <div style={{ fontSize: "0.7rem", color: ink50 }}>age {t.typical_age}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-md pt-sm text-center" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
        <span className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink50 }}>
          CCRC contract: lifetime guarantee · entrance fee 380,000–620,000 SU · 80% refundable
        </span>
      </div>
    </div>
  );
}
