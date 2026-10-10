import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "4.4 — Curating Life",
  description: "OHCOSE Phase IV, Sub-Protocol 4.4. Lifestyle consumption, identity performance, the curated portfolio of selves.",
  alternates: { canonical: "/ohcose/iv-economic-subjectification/curating-life" },
};

export default function CuratingLife() {
  return (
    <PageFrame pageNum="4.4" secCode="OHCOSE / LR / SP-4.4">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/iv-economic-subjectification" className="hover:underline">← phase IV</Link>
      </nav>
      <PhaseBanner code="Sub-Protocol 4.4" title="Curating Life" qualifier="Phase IV · Economic Subjectification" />
      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>Sub-Protocol 4.4</p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>Curating Life</h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The lifestyle as portfolio. The self as a continuously
          maintained brand expression. The feed as both shop window and
          mirror.
        </p>
      </header>
      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="4.4.1" title="Lifestyle Sectors" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The Phase-IV subject curates across five lifestyle sectors
              continuously: travel, fitness, food, dwelling, appearance.
              Each sector has an Office-approved aesthetic register, a
              Phase-IV-appropriate price band, and a feed-display
              schedule. The subject experiences the curation as personal
              taste. The Office records the consumption pattern as a
              lifelong demographic signal.
            </p>
          </div>
        </section>
        <section>
          <SectionHead code="4.4.2" title="Lifestyle Compliance Card" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The Office issues a quarterly Lifestyle Compliance Card to
            each Phase-IV subject. The Card consolidates the subject's
            sector-by-sector positioning relative to cohort norms.
          </p>
          <LifestyleCard />
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
              <span style={{ color: "var(--color-oxblood)", fontWeight: 700 }}>Fig. 4.4.A</span> — Specimen Lifestyle Compliance Card
            </p>
        </section>
        <section>
          <SectionHead code="4.4.3" title="The Performance" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The curated lifestyle is performed continuously on the
              feed. The performance is the subject's labor of identity
              maintenance. The labor is unpaid. The platform extracts
              attention from the audience the performance attracts.
              The Office extracts demographic precision from the
              choices the performance enacts. The subject extracts
              recognition, sometimes.
            </p>
          </div>
        </section>
        <nav className="pt-md flex items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose/iv-economic-subjectification/romantic-markets" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 4.3 romantic markets</Link>
          <Link href="/ohcose/iv-economic-subjectification/happiness-mandate" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>4.5 happiness mandate →</Link>
        </nav>
      </article>
    </PageFrame>
  );
}

function LifestyleCard() {
  const ink = "var(--color-ink)";
  const ink70 = "var(--color-ink-70)";
  const ink50 = "var(--color-ink-50)";
  const accent = "var(--color-oxblood)";
  const sectors = [
    { name: "Travel", score: 88, position: "above cohort median" },
    { name: "Fitness", score: 76, position: "on cohort median" },
    { name: "Food", score: 91, position: "above cohort median" },
    { name: "Dwelling", score: 70, position: "below cohort median" },
    { name: "Appearance", score: 82, position: "on cohort median" },
  ];
  return (
    <div className="my-md" style={{ border: "1.5px solid var(--color-ink)", background: "var(--color-paper-95)", padding: "1.25rem", fontFamily: "var(--font-mono)" }}>
      <div className="flex justify-between items-baseline mb-md pb-sm" style={{ borderBottom: "1.5px solid var(--color-ink)" }}>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink70 }}>OHCOSE · Phase IV · Q3</div>
          <div className="uppercase tracking-wider font-bold" style={{ fontSize: "0.9rem", color: ink, marginTop: "0.15rem" }}>Lifestyle Compliance Card</div>
        </div>
        <div className="text-right">
          <div className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink50 }}>composite</div>
          <div style={{ fontSize: "1.4rem", color: accent, fontWeight: 700, lineHeight: 1 }}>81</div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.55rem", color: ink70 }}>/ 100</div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
        {sectors.map((s) => (
          <div key={s.name} style={{ border: "1px solid var(--color-paper-85)", padding: "0.6rem" }}>
            <div className="flex justify-between items-baseline">
              <span className="uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink50 }}>{s.name}</span>
              <span className="tabular-nums" style={{ fontSize: "1.05rem", color: ink, fontWeight: 700 }}>{s.score}</span>
            </div>
            <div style={{ fontSize: "0.7rem", color: ink70, marginTop: "0.2rem" }}>{s.position}</div>
          </div>
        ))}
      </div>
      <div className="mt-md pt-sm" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
        <div style={{ fontSize: "0.75rem", color: ink70 }}>recommendation: <span style={{ color: ink, fontWeight: 700 }}>address Dwelling sector · subscribe to Style Brief 4-D</span></div>
      </div>
    </div>
  );
}
