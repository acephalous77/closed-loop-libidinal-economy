import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "5.6 — Foreshadowing Managed Decline",
  description: "OHCOSE Phase V, Sub-Protocol 5.6. The mid-forties handoff. Wellness pivots. The Office's smooth transition to Phase VI Consolidation & Role Reversal.",
  alternates: { canonical: "/ohcose/v-peak-productivity/decline-foreshadowing" },
};

export default function DeclineForeshadowing() {
  return (
    <PageFrame pageNum="5.6" secCode="OHCOSE / LR / SP-5.6">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/v-peak-productivity" className="hover:underline">← phase V</Link>
      </nav>
      <PhaseBanner code="Sub-Protocol 5.6" title="Foreshadowing Managed Decline" qualifier="Phase V · Peak Productivity" />
      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>Sub-Protocol 5.6</p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>Foreshadowing Managed Decline</h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The closing sub-protocol of Phase V. The Office's
          preparation of the subject for the Phase VI calibration
          regime. Wellness pivots. The smooth transition.
        </p>
      </header>
      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="5.6.1" title="The Pivots" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              In the late forties the subject is introduced to a new
              suite of pivots. The fitness app updates with a "Strong
              at 50" program. The supplement subscription adjusts to
              include joint-support compounds. The annual physical
              now includes a cognitive baseline assessment. The
              insurance partner offers a long-term-care planning
              consultation. The subject's wellness dashboard begins
              showing longevity-projection charts.
            </p>
            <p>
              Each pivot is presented as a thoughtful update to a
              lifestyle the subject has built. None is presented as
              the foreshadowing of decline. The Office handles the
              foreshadowing in its internal records. The subject
              handles the lifestyle.
            </p>
          </div>
        </section>
        <section>
          <SectionHead code="5.6.2" title="Phase V → Phase VI Transfer Certificate" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            At the age-forty-five boundary the subject receives the
            standard Phase-V Closing Certificate.
          </p>
          <PhaseVClosing />
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
              <span style={{ color: "var(--color-oxblood)", fontWeight: 700 }}>Fig. 5.6.A</span> — Phase V Closing Certificate
            </p>
        </section>
        <nav className="pt-md flex flex-wrap items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose/v-peak-productivity/midlife-affect" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 5.5 midlife affect</Link>
          <Link href="/ohcose/v-peak-productivity" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>↑ phase V</Link>
        </nav>
      </article>
    </PageFrame>
  );
}

function PhaseVClosing() {
  const ink = "var(--color-ink)";
  const ink70 = "var(--color-ink-70)";
  const ink50 = "var(--color-ink-50)";
  const accent = "var(--color-oxblood)";
  return (
    <div className="my-md mx-auto" style={{ maxWidth: "30rem", border: "3px double var(--color-ink)", background: "var(--color-paper)", padding: "1.5rem 1.25rem", fontFamily: "var(--font-mono)" }}>
      <div className="text-center pb-sm" style={{ borderBottom: "1px solid var(--color-ink)" }}>
        <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: ink50 }}>
          Office of Human Continuity &amp; Social Equilibrium
        </div>
        <div className="font-serif font-bold mt-xs" style={{ fontSize: "1.1rem", color: ink, letterSpacing: "0.04em" }}>
          Phase V Closing Certificate
        </div>
        <div className="uppercase tracking-wider mt-xs" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: accent, fontWeight: 700 }}>
          Phase V → Phase VI
        </div>
      </div>
      <div className="grid grid-cols-2 gap-md mt-md">
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink50 }}>subject C-ID</div>
          <div style={{ fontSize: "0.9rem", color: ink, fontWeight: 700, marginTop: "0.15rem" }}>C-2031-4A7Q-9X02-1A</div>
        </div>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink50 }}>Phase V duration</div>
          <div style={{ fontSize: "0.9rem", color: ink, marginTop: "0.15rem" }}>15 yrs · in tier</div>
        </div>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink50 }}>career tier</div>
          <div style={{ fontSize: "0.9rem", color: ink, marginTop: "0.15rem" }}>Senior · stable</div>
        </div>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink50 }}>household</div>
          <div style={{ fontSize: "0.9rem", color: ink, marginTop: "0.15rem" }}>H-4A-7Q-2049 · 2 dep.</div>
        </div>
      </div>
      <div className="my-md py-sm" style={{ borderTop: "1px solid var(--color-paper-85)", borderBottom: "1px solid var(--color-paper-85)" }}>
        <p className="text-center leading-snug" style={{ fontSize: "0.78rem", color: ink70 }}>
          The subject has completed Phase V Peak Productivity and is
          hereby transferred to Phase VI Consolidation &amp; Role
          Reversal effective the date below. The Office records the
          contribution.
        </p>
      </div>
      <div className="flex items-end justify-between mt-md">
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink50 }}>effective</div>
          <div style={{ fontSize: "0.78rem", color: ink, marginTop: "0.1rem" }}>2076.08.30</div>
        </div>
        <div className="uppercase" style={{ background: accent, color: "var(--color-paper)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", padding: "0.22rem 0.45rem", transform: "rotate(-3deg)" }}>
          transferred
        </div>
      </div>
    </div>
  );
}
