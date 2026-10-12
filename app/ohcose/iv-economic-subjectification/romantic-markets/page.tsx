import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "4.3 — Romantic Markets",
  description: "OHCOSE Phase IV, Sub-Protocol 4.3. Dating-app architecture, libidinal commodification, the Office's partner-matching index.",
  alternates: { canonical: "/ohcose/iv-economic-subjectification/romantic-markets" },
};

export default function RomanticMarkets() {
  return (
    <PageFrame pageNum="4.3" secCode="OHCOSE / LR / SP-4.3">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/iv-economic-subjectification" className="hover:underline">← phase IV</Link>
      </nav>
      <PhaseBanner code="Sub-Protocol 4.3" title="Romantic Markets" qualifier="Phase IV · Economic Subjectification" />
      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>Sub-Protocol 4.3</p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>Romantic Markets</h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The platform-mediated partner-search process. Libidinal
          commodification. The Match Compatibility Report. The Office's
          quiet shepherding toward partnership consolidation.
        </p>
      </header>
      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="4.3.1" title="The Market" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              Phase-IV romantic search occurs almost entirely through
              Office-certified platforms. The subject's preference
              profile, baselined under Phase III sub-protocol 3.4, is
              now operationalized as a search filter. The Office has
              found that platform-mediated search converges on stable
              partnership at the rate the population-management mandate
              requires; informal channels do not.
            </p>
            <p>
              The market is two-sided. The subject seeks; the subject
              is sought. Both sides are scored, ranked, and offered to
              one another in proportions the platform's matching engine
              optimizes against retention and partnership outcomes.
              The retention is the platform's; the partnership is the
              Office's.
            </p>
          </div>
        </section>
        <section>
          <SectionHead code="4.3.2" title="Match Compatibility Report" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            On a sustained mutual signal the platform issues a Match
            Compatibility Report to both parties. A specimen is shown
            below.
          </p>
          <MatchReport />
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
              <span style={{ color: "var(--color-oxblood)", fontWeight: 700 }}>Fig. 4.3.A</span> — Specimen Match Compatibility Report
            </p>
        </section>
        <section>
          <SectionHead code="4.3.3" title="The Consolidation Imperative" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The Office's Phase-IV deliverable on this sub-protocol is
              partnership consolidation by the age-thirty boundary.
              Consolidation accrues to the Phase-V onboarding profile;
              non-consolidation is recorded as an extended-Phase-IV
              indicator and routes the subject into the Office's
              alternative-track Partner Coaching pathway. Most subjects
              consolidate within the standard window.
            </p>
          </div>
        </section>
        <nav className="pt-md flex flex-wrap items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose/iv-economic-subjectification/algorithmic-mentorship" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 4.2 algorithmic mentorship</Link>
          <Link href="/ohcose/iv-economic-subjectification/curating-life" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>4.4 curating life →</Link>
        </nav>
      </article>
    </PageFrame>
  );
}

function MatchReport() {
  const ink = "var(--color-ink)";
  const ink70 = "var(--color-ink-70)";
  const ink50 = "var(--color-ink-50)";
  const accent = "var(--color-oxblood)";
  const dims = [
    { name: "Affective Compatibility", score: 86 },
    { name: "Economic Alignment", score: 91 },
    { name: "Reproductive Readiness", score: 78 },
    { name: "Lifestyle Cohesion", score: 84 },
    { name: "Geographic Proximity", score: 96 },
    { name: "Cohort Convergence", score: 82 },
  ];
  return (
    <div className="my-md" style={{ border: "1.5px solid var(--color-ink)", background: "var(--color-paper-95)", padding: "1.25rem", fontFamily: "var(--font-mono)" }}>
      <div className="flex justify-between items-baseline mb-md pb-sm" style={{ borderBottom: "1.5px solid var(--color-ink)" }}>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink70 }}>OHCOSE · Phase IV</div>
          <div className="uppercase tracking-wider font-bold" style={{ fontSize: "0.9rem", color: ink, marginTop: "0.15rem" }}>Match Compatibility Report</div>
        </div>
        <div className="text-right">
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink50 }}>composite</div>
          <div style={{ fontSize: "1.6rem", color: accent, fontWeight: 700, lineHeight: 1 }}>86</div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink70 }}>/ 100 · STRONG</div>
        </div>
      </div>
      <div className="space-y-xs">
        {dims.map((d) => (
          <div key={d.name}>
            <div className="flex justify-between items-baseline" style={{ fontSize: "0.75rem" }}>
              <span style={{ color: ink, textTransform: "uppercase", letterSpacing: "0.04em" }}>{d.name}</span>
              <span className="tabular-nums" style={{ color: ink70, fontWeight: 700 }}>{d.score}</span>
            </div>
            <div style={{ width: "100%", height: "5px", background: "var(--color-paper-85)", marginTop: "0.15rem" }}>
              <div style={{ width: `${d.score}%`, height: "100%", background: ink }} />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-md pt-sm" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
        <div style={{ fontSize: "0.75rem", color: ink70 }}>recommended next step: <span style={{ color: ink, fontWeight: 700 }}>in-person meeting · within 14 days</span></div>
        <div className="uppercase" style={{ background: accent, color: "var(--color-paper)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", padding: "0.2rem 0.45rem" }}>MCR-4-3</div>
      </div>
    </div>
  );
}
