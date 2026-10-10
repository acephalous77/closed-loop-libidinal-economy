import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "7.6 — The End of the Lifecycle Arc",
  description: "OHCOSE Phase VII, Sub-Protocol 7.6. Final closure. Surplus returned to the Office. Pointer to the Ouroboros Machine.",
  alternates: { canonical: "/ohcose/vii-exit/lifecycle-closure" },
};

export default function LifecycleClosure() {
  return (
    <PageFrame pageNum="7.6" secCode="OHCOSE / LR / SP-7.6">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/vii-exit" className="hover:underline">← phase VII</Link>
      </nav>
      <PhaseBanner code="Sub-Protocol 7.6" title="The End of the Lifecycle Arc" qualifier="Phase VII · Exit" />
      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>Sub-Protocol 7.6</p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>The End of the Lifecycle Arc</h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The Office's closing statement on the Standard Consumer-Citizen
          arc. The accounting of the cycle. The return of the surplus to
          the apparatus that produced it.
        </p>
      </header>
      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="7.6.1" title="Final Accounting" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              At the close of Phase VII the Office files the subject's
              Lifecycle Closing Statement. The Statement consolidates
              every measurement, every form, every Pathway entry, every
              compliance score, every payment, every public utterance,
              and every recorded affective response across the full
              eight-decade arc. The Statement is signed by the
              Phase-VII Closing Officer and by the Office's Director
              of Records. It is then archived at the same node established
              under Phase I sub-protocol 1.1.
            </p>
          </div>
        </section>
        <section>
          <SectionHead code="7.6.2" title="Lifecycle Closing Statement" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            A specimen of the Statement is shown below.
          </p>
          <LifecycleClosingStatement />
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
              <span style={{ color: "var(--color-oxblood)", fontWeight: 700 }}>Fig. 7.6.A</span> — Specimen Lifecycle Closing Statement
            </p>
        </section>
        <section>
          <SectionHead code="7.6.3" title="The Return" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The subject's accumulated surplus — productive,
              reproductive, affective, attentional — outlives the
              subject. It has already been routed, across the
              full lifecycle, into the Office's apparatus. The return at the closing is the demographic precision the subject's
              eighty years of measurement now afford the Office's
              modeling of the next cohort.
            </p>
            <p>
              See sub-protocol 8.1 for the structural account of the
              return.
            </p>
          </div>
        </section>
        <nav className="pt-md flex items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose/vii-exit/cracks-and-residues" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 7.5 cracks & residues</Link>
          <Link href="/ohcose/viii-ouroboros" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>↑ phase VIII ouroboros →</Link>
        </nav>
      </article>
    </PageFrame>
  );
}

function LifecycleClosingStatement() {
  const ink = "var(--color-ink)";
  const ink70 = "var(--color-ink-70)";
  const ink50 = "var(--color-ink-50)";
  const accent = "var(--color-oxblood)";
  return (
    <div className="my-md mx-auto" style={{ maxWidth: "32rem", border: "3px double var(--color-ink)", background: "var(--color-paper)", padding: "1.75rem 1.5rem", fontFamily: "var(--font-mono)" }}>
      <div className="text-center pb-sm" style={{ borderBottom: "1px solid var(--color-ink)" }}>
        <div className="uppercase tracking-wider" style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: ink50 }}>Office of Human Continuity &amp; Social Equilibrium</div>
        <div className="font-serif font-bold mt-xs" style={{ fontSize: "1.15rem", color: ink, letterSpacing: "0.04em" }}>Lifecycle Closing Statement</div>
        <div className="uppercase tracking-wider mt-xs" style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: accent, fontWeight: 700 }}>cycle complete</div>
      </div>
      <div className="grid grid-cols-2 gap-md gap-y-sm mt-md">
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink50 }}>subject C-ID</div>
          <div style={{ fontSize: "0.9rem", color: ink, fontWeight: 700, marginTop: "0.15rem" }}>C-2031-4A7Q-9X02-1A</div>
        </div>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink50 }}>cohort</div>
          <div style={{ fontSize: "0.9rem", color: ink, marginTop: "0.15rem" }}>2031 · region 4A</div>
        </div>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink50 }}>lifecycle span</div>
          <div style={{ fontSize: "0.9rem", color: ink, marginTop: "0.15rem" }}>78.4 yrs · phases I–VII</div>
        </div>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink50 }}>compliance composite</div>
          <div style={{ fontSize: "0.9rem", color: ink, marginTop: "0.15rem" }}>84 / 100 · cohort 71st pct</div>
        </div>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink50 }}>archive route</div>
          <div style={{ fontSize: "0.9rem", color: ink, marginTop: "0.15rem" }}>Node 1.1 · ledger persistence + 99 yrs</div>
        </div>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink50 }}>onward pointer</div>
          <div style={{ fontSize: "0.9rem", color: ink, marginTop: "0.15rem" }}>Phase VIII Ouroboros Machine</div>
        </div>
      </div>
      <div className="my-md py-sm" style={{ borderTop: "1px solid var(--color-paper-85)", borderBottom: "1px solid var(--color-paper-85)" }}>
        <p className="text-center leading-snug" style={{ fontSize: "0.78rem", color: ink70 }}>
          The Office records the completion of the subject's lifecycle
          and acknowledges the surplus contributed across the arc. The
          record persists. The Office thanks the subject and proceeds.
        </p>
      </div>
      <div className="flex items-end justify-between mt-md">
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.55rem", color: ink50 }}>closing date</div>
          <div style={{ fontSize: "0.78rem", color: ink, marginTop: "0.1rem" }}>2109.07.22</div>
        </div>
        <div className="uppercase" style={{ background: accent, color: "var(--color-paper)", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.1em", padding: "0.22rem 0.5rem", transform: "rotate(-3deg)" }}>cycle closed</div>
      </div>
    </div>
  );
}
