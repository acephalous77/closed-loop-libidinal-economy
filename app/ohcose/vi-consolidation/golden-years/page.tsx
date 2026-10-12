import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "6.4 — The Golden Years Narrative",
  description: "OHCOSE Phase VI, Sub-Protocol 6.4. Anticipatory leisure. Second-act planning. The travel brochure as Phase-VII onboarding.",
  alternates: { canonical: "/ohcose/vi-consolidation/golden-years" },
};

export default function GoldenYears() {
  return (
    <PageFrame pageNum="6.4" secCode="OHCOSE / LR / SP-6.4">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/vi-consolidation" className="hover:underline">← phase VI</Link>
      </nav>
      <PhaseBanner code="Sub-Protocol 6.4" title="The Golden Years Narrative" qualifier="Phase VI · Consolidation" />
      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>Sub-Protocol 6.4</p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>The Golden Years Narrative</h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The anticipatory leisure regime. The Phase-VII brochure
          arriving in the Phase-VI subject's mailbox. The
          consolidation of late-Phase-VI surplus into Phase-VII
          consumption pipelines.
        </p>
      </header>
      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="6.4.1" title="The Brochure Arrives" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              In the early sixties the subject begins receiving
              materials from Office-certified Phase-VII partners. The
              cruise line. The retirement-community developer. The
              long-term-care insurer. The river-cruise company. Each
              materials piece presents the coming Phase as the reward
              the subject has been working toward. The materials are
              warm and full of light. The subject internalizes them
              as the future they have earned.
            </p>
            <p>
              The narrative is the Office's primary Phase-VI affective
              instrument. A subject who is looking forward to the
              Golden Years performs the final Phase-VI work
              cheerfully. A subject who dreads them requires intervention.
              Most internalize.
            </p>
          </div>
        </section>
        <section>
          <SectionHead code="6.4.2" title="Cruise / Community Brochure (Specimen)" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            A specimen mailer from an Office-certified Phase-VII
            partner, calibrated for the late-Phase-VI subject.
          </p>
          <BrochureSpecimen />
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
              <span style={{ color: "var(--color-oxblood)", fontWeight: 700 }}>Fig. 6.4.A</span> — Specimen Phase-VII partner mailer
            </p>
        </section>
        <nav className="pt-md flex flex-wrap items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose/vi-consolidation/intergenerational-obligations" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 6.3 intergenerational</Link>
          <Link href="/ohcose/vi-consolidation/knowledge-transfer" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>6.5 knowledge transfer →</Link>
        </nav>
      </article>
    </PageFrame>
  );
}

function BrochureSpecimen() {
  const ink = "var(--color-ink)";
  const ink70 = "var(--color-ink-70)";
  const ink50 = "var(--color-ink-50)";
  const accent = "var(--color-oxblood)";
  return (
    <div className="my-md" style={{ border: "1.5px solid var(--color-ink)", background: "var(--color-paper)", padding: "1.5rem 1.25rem", fontFamily: "var(--font-mono)" }}>
      <div className="text-center pb-sm" style={{ borderBottom: "1.5px solid var(--color-ink)" }}>
        <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", letterSpacing: "0.18em", color: ink50 }}>OHCOSE-Certified Partner Mailer</div>
        <div className="font-serif font-bold mt-sm" style={{ fontSize: "1.4rem", color: ink, letterSpacing: "0.02em" }}>The Years You've Earned</div>
        <div className="uppercase tracking-wider mt-xs" style={{ fontSize: "0.7rem", color: accent, fontWeight: 700 }}>Sandpiper Reserve · Coastal Living</div>
      </div>
      <div className="mt-md text-center">
        <p style={{ fontSize: "1rem", color: ink, fontWeight: 600, lineHeight: 1.5 }}>
          After a lifetime of contribution, what comes next is yours
          to shape — gracefully, securely, and in the company of
          peers who share the trajectory.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-md mt-md">
        <div style={{ border: "1px solid var(--color-paper-85)", padding: "0.75rem", background: "var(--color-paper-95)" }}>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink50 }}>continuum of care</div>
          <div style={{ fontSize: "0.85rem", color: ink, marginTop: "0.25rem" }}>Independent → Assisted → Memory — without ever changing address.</div>
        </div>
        <div style={{ border: "1px solid var(--color-paper-85)", padding: "0.75rem", background: "var(--color-paper-95)" }}>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink50 }}>your equity, your legacy</div>
          <div style={{ fontSize: "0.85rem", color: ink, marginTop: "0.25rem" }}>Lifetime entrance fee secures the residence; refundable 80% on departure.</div>
        </div>
        <div style={{ border: "1px solid var(--color-paper-85)", padding: "0.75rem", background: "var(--color-paper-95)" }}>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink50 }}>community</div>
          <div style={{ fontSize: "0.85rem", color: ink, marginTop: "0.25rem" }}>340 like-minded neighbors. Bridge, pickleball, lectures, choir.</div>
        </div>
        <div style={{ border: "1px solid var(--color-paper-85)", padding: "0.75rem", background: "var(--color-paper-95)" }}>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink50 }}>tour</div>
          <div style={{ fontSize: "0.85rem", color: ink, marginTop: "0.25rem" }}>Schedule your complimentary 2-night visit. We arrange the flight.</div>
        </div>
      </div>
      <div className="mt-md pt-sm text-center" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
        <div className="uppercase" style={{ background: accent, color: "var(--color-paper)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", padding: "0.3rem 0.7rem", display: "inline-block" }}>RSVP · 8-month waitlist</div>
        <div style={{ fontSize: "0.7rem", color: ink70, marginTop: "0.5rem" }}>Sandpiper Reserve operates under Office certification SR-2049-A. Continuum-of-care standards regulated under Annex 18.</div>
      </div>
    </div>
  );
}
