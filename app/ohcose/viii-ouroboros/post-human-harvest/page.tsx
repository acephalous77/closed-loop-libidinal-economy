import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "8.3 — The Post-Human Harvest",
  description: "OHCOSE Phase VIII, Sub-Protocol 8.3. The harvest after the subject. Lifelong record as input to next-cohort modeling. The aggregate yield of the closed apparatus.",
  alternates: { canonical: "/ohcose/viii-ouroboros/post-human-harvest" },
};

export default function PostHumanHarvest() {
  return (
    <PageFrame pageNum="8.3" secCode="OHCOSE / LR / SP-8.3">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/viii-ouroboros" className="hover:underline">← phase VIII</Link>
      </nav>
      <PhaseBanner code="Sub-Protocol 8.3" title="The Post-Human Harvest" qualifier="Phase VIII · Ouroboros Machine" />
      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>Sub-Protocol 8.3</p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>The Post-Human Harvest</h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The harvest after the subject has closed. The aggregated
          lifelong records, processed at cohort scale, return to the
          Office as the precision-modeling input for the calibration
          of the next cohort.
        </p>
      </header>
      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="8.3.1" title="The Harvest Stream" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              Each closed lifecycle contributes one full eighty-year
              archive. The archives accrue continuously as the cohort
              ages out; by year fifty of a cohort the harvest stream
              is delivering roughly two million archives per fiscal
              quarter to the Office's modeling apparatus. The yields
              below summarize the aggregate at cohort-decade scale.
            </p>
          </div>
        </section>
        <section>
          <SectionHead code="8.3.2" title="Yield Statement" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The Yield Statement reports the cohort-decade aggregate
            extracted across the lifecycle, broken out by the channel
            of extraction.
          </p>
          <YieldStatement />
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
              <span style={{ color: "var(--color-oxblood)", fontWeight: 700 }}>Fig. 8.3.A</span> — Cohort-decade Yield Statement (extract)
            </p>
        </section>
        <section>
          <SectionHead code="8.3.3" title="The Use" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The Office uses the harvest in three ways. First, it
              re-fits the calibration parameters that meet the next
              cohort at Phase I. Second, it licenses de-identified
              aggregate signals to the brand partners and to other
              Office-certified partners; the revenue from these
              licenses funds the Office's continuing operation. Third,
              it retains the cohort-archive as the lifelong reference
              against which any individual subject's exceptions are
              measured. The reference is what makes the exception
              legible as an exception.
            </p>
            <p>
              The Office considers the harvest the most consequential
              of its outputs. Without it, every successive cohort would
              meet the apparatus as if for the first time. With it, the
              apparatus has nine decades of calibration intelligence
              ready before the subject's clinical viability.
            </p>
          </div>
        </section>
        <nav className="pt-md flex items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose/viii-ouroboros/sovereign-interface" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 8.2 sovereign interface</Link>
          <Link href="/ohcose/viii-ouroboros/the-broadcast" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>8.4 the broadcast →</Link>
        </nav>
      </article>
    </PageFrame>
  );
}

function YieldStatement() {
  const ink = "var(--color-ink)";
  const ink70 = "var(--color-ink-70)";
  const ink50 = "var(--color-ink-50)";
  const accent = "var(--color-oxblood)";
  const rows = [
    { ch: "Productive labor", yield: "44.2 PB · 2.8e16 SU", note: "wages, surplus, time" },
    { ch: "Affective performance", yield: "31.6 PB · 9.2e15 SU", note: "Workplace Affect, Wellness, social" },
    { ch: "Reproductive output", yield: "1.04 cohort", note: "next-cohort substrate produced" },
    { ch: "Brand-loyalty record", yield: "6.8 PB · 3.1e15 SU", note: "licensable consumer signal" },
    { ch: "Lifecycle archive (per subject)", yield: "≈ 38 GB × N", note: "research-grade ledger" },
  ];
  return (
    <div className="my-md" style={{ border: "1.5px solid var(--color-ink)", background: "var(--color-paper-95)", padding: "1.25rem", fontFamily: "var(--font-mono)" }}>
      <div className="flex justify-between items-baseline mb-md pb-sm" style={{ borderBottom: "1.5px solid var(--color-ink)" }}>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink70 }}>OHCOSE · Phase VIII</div>
          <div className="uppercase tracking-wider font-bold" style={{ fontSize: "0.9rem", color: ink, marginTop: "0.15rem" }}>Yield Statement — Cohort 2031</div>
        </div>
        <div className="text-right">
          <div className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink50 }}>aggregate yield index</div>
          <div style={{ fontSize: "1.4rem", color: accent, fontWeight: 700 }}>1.084</div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.55rem", color: ink70 }}>vs. cohort 2020 baseline</div>
        </div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr style={{ borderBottom: "1px solid var(--color-ink)" }}>
            <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink70 }}>channel</th>
            <th className="text-right p-xs uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink70 }}>yield</th>
            <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink70 }}>note</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderBottom: "1px solid var(--color-paper-85)" }}>
              <td className="p-xs" style={{ fontSize: "0.85rem", color: ink, fontWeight: 600 }}>{r.ch}</td>
              <td className="p-xs text-right tabular-nums" style={{ fontSize: "0.85rem", color: accent, fontWeight: 700 }}>{r.yield}</td>
              <td className="p-xs" style={{ fontSize: "0.78rem", color: ink70 }}>{r.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-md pt-sm text-center" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
        <span className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink50 }}>SU = Standard Unit · PB = petabyte · cohort yields aggregate across all subjects</span>
      </div>
    </div>
  );
}
