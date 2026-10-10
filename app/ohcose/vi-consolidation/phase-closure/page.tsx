import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "6.6 — Closing of Phase VI",
  description: "OHCOSE Phase VI, Sub-Protocol 6.6. Statutory retirement. Compulsory disengagement. Transfer to Phase VII Exit.",
  alternates: { canonical: "/ohcose/vi-consolidation/phase-closure" },
};

export default function PhaseClosure() {
  return (
    <PageFrame pageNum="6.6" secCode="OHCOSE / LR / SP-6.6">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/vi-consolidation" className="hover:underline">← phase VI</Link>
      </nav>
      <PhaseBanner code="Sub-Protocol 6.6" title="Closing of Phase VI" qualifier="Phase VI · Consolidation" />
      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>Sub-Protocol 6.6</p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>Closing of Phase VI</h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The age-sixty-five boundary. Statutory retirement. The final
          performance review. The Phase VI → Phase VII transfer
          certificate.
        </p>
      </header>
      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="6.6.1" title="The Boundary Event" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              At the age-sixty-five boundary the subject's
              productive participation is filed as concluded. The
              Office handles the filing. The employer holds a small
              retirement reception, presents the subject with a
              commemorative gift (typically of the watch class), and
              speaks of legacy. The subject's accumulated capital is
              transferred to the Phase-VII drawdown schedule.
              Statutory benefits begin. The day after the reception
              the subject does not go to work. The subject experiences
              the transition as the start of the Golden Years they
              were promised.
            </p>
          </div>
        </section>
        <section>
          <SectionHead code="6.6.2" title="Transfer Certificate" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The standard Phase VI → Phase VII transfer certificate.
          </p>
          <TransferDoc />
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
              <span style={{ color: "var(--color-oxblood)", fontWeight: 700 }}>Fig. 6.6.A</span> — Phase VI → Phase VII Transfer Certificate
            </p>
        </section>
        <nav className="pt-md flex items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose/vi-consolidation/knowledge-transfer" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 6.5 knowledge transfer</Link>
          <Link href="/ohcose/vi-consolidation" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>↑ phase VI</Link>
        </nav>
      </article>
    </PageFrame>
  );
}

function TransferDoc() {
  const ink = "var(--color-ink)";
  const ink70 = "var(--color-ink-70)";
  const ink50 = "var(--color-ink-50)";
  const accent = "var(--color-oxblood)";
  return (
    <div className="my-md mx-auto" style={{ maxWidth: "30rem", border: "3px double var(--color-ink)", background: "var(--color-paper)", padding: "1.5rem 1.25rem", fontFamily: "var(--font-mono)" }}>
      <div className="text-center pb-sm" style={{ borderBottom: "1px solid var(--color-ink)" }}>
        <div className="uppercase tracking-wider" style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: ink50 }}>
          Office of Human Continuity &amp; Social Equilibrium
        </div>
        <div className="font-serif font-bold mt-xs" style={{ fontSize: "1.1rem", color: ink, letterSpacing: "0.04em" }}>
          Statutory Retirement Certificate
        </div>
        <div className="uppercase tracking-wider mt-xs" style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: accent, fontWeight: 700 }}>
          Phase VI → Phase VII
        </div>
      </div>
      <div className="grid grid-cols-2 gap-md mt-md">
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink50 }}>subject C-ID</div>
          <div style={{ fontSize: "0.9rem", color: ink, fontWeight: 700, marginTop: "0.15rem" }}>C-2031-4A7Q-9X02-1A</div>
        </div>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink50 }}>career duration</div>
          <div style={{ fontSize: "0.9rem", color: ink, marginTop: "0.15rem" }}>46 yrs · 11 mos</div>
        </div>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink50 }}>lifetime gross</div>
          <div style={{ fontSize: "0.9rem", color: ink, marginTop: "0.15rem" }}>3.18M SU</div>
        </div>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink50 }}>drawdown plan</div>
          <div style={{ fontSize: "0.9rem", color: ink, marginTop: "0.15rem" }}>Standard 30-yr</div>
        </div>
      </div>
      <div className="my-md py-sm" style={{ borderTop: "1px solid var(--color-paper-85)", borderBottom: "1px solid var(--color-paper-85)" }}>
        <p className="text-center leading-snug" style={{ fontSize: "0.78rem", color: ink70 }}>
          The subject has completed Phase VI Consolidation &amp; Role
          Reversal and is hereby transferred to Phase VII Exit
          effective the date below. The Office expresses its
          appreciation for the subject's lifetime of contribution.
        </p>
      </div>
      <div className="flex items-end justify-between mt-md">
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.55rem", color: ink50 }}>effective</div>
          <div style={{ fontSize: "0.78rem", color: ink, marginTop: "0.1rem" }}>2096.05.30</div>
        </div>
        <div className="uppercase" style={{ background: accent, color: "var(--color-paper)", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.1em", padding: "0.22rem 0.45rem", transform: "rotate(-3deg)" }}>
          retired
        </div>
      </div>
    </div>
  );
}
