import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "5.3 — Family Formation & Reproductive Labor",
  description: "OHCOSE Phase V, Sub-Protocol 5.3. Household construction. The privatization of raising. The unpaid reproductive labor shift.",
  alternates: { canonical: "/ohcose/v-peak-productivity/family-formation" },
};

export default function FamilyFormation() {
  return (
    <PageFrame pageNum="5.3" secCode="OHCOSE / LR / SP-5.3">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/v-peak-productivity" className="hover:underline">← phase V</Link>
      </nav>
      <PhaseBanner code="Sub-Protocol 5.3" title="Family Formation" qualifier="Phase V · Peak Productivity" />
      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>Sub-Protocol 5.3</p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>Family Formation &amp;<br />Reproductive Labor</h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The household as production facility for the next cohort.
          The privatization of raising. The unpaid reproductive shift,
          performed in addition to the productive shift.
        </p>
      </header>
      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="5.3.1" title="The Household as Facility" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The Phase-V household is the production facility for the
              next cohort of Phase-I subjects. The Office's
              population-management mandate requires that the
              facility operate at scale across the cohort; the
              Office's productivity mandate requires that the
              facility's costs be privatized to the household. The
              two mandates are reconciled by the standard Phase-V
              household economic structure: dual-income (when
              partnership consolidation is complete), debt-financed
              dwelling, and the unpaid second shift.
            </p>
            <p>
              The framing presented to the subject is the language of
              fulfillment. "Children are the joy of life." The Office
              endorses the framing.
            </p>
          </div>
        </section>
        <section>
          <SectionHead code="5.3.2" title="Natal Registration Confirmation" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            On the birth of a Phase-V household's first child, the
            Office issues a Natal Registration Confirmation. The
            document folds the child's freshly-anchored C-ID into the
            household's Phase-V Tax Identity. A specimen is shown
            below.
          </p>
          <NatalRegistration />
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
              <span style={{ color: "var(--color-oxblood)", fontWeight: 700 }}>Fig. 5.3.A</span> — Specimen Natal Registration Confirmation
            </p>
        </section>
        <nav className="pt-md flex flex-wrap items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose/v-peak-productivity/economic-zenith" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 5.2 economic zenith</Link>
          <Link href="/ohcose/v-peak-productivity/civic-anchoring" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>5.4 civic anchoring →</Link>
        </nav>
      </article>
    </PageFrame>
  );
}

function NatalRegistration() {
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
          Natal Registration Confirmation
        </div>
        <div className="uppercase tracking-wider mt-xs" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: accent, fontWeight: 700 }}>
          Form NRC-1
        </div>
      </div>
      <div className="grid grid-cols-2 gap-md mt-md">
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink50 }}>household tax ID</div>
          <div style={{ fontSize: "0.9rem", color: ink, fontWeight: 700, marginTop: "0.15rem" }}>H-4A-7Q-2049</div>
        </div>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink50 }}>natal date</div>
          <div style={{ fontSize: "0.9rem", color: ink, marginTop: "0.15rem" }}>2052.06.14</div>
        </div>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink50 }}>infant C-ID</div>
          <div style={{ fontSize: "0.9rem", color: ink, fontWeight: 700, marginTop: "0.15rem" }}>C-2052-4A7Q-0001-1A</div>
        </div>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink50 }}>natal benefit tier</div>
          <div style={{ fontSize: "0.9rem", color: ink, marginTop: "0.15rem" }}>Tier 2 · standard</div>
        </div>
      </div>
      <div className="my-md py-sm" style={{ borderTop: "1px solid var(--color-paper-85)", borderBottom: "1px solid var(--color-paper-85)" }}>
        <p className="text-center leading-snug" style={{ fontSize: "0.78rem", color: ink70 }}>
          The infant has been biometrically anchored under Phase I
          sub-protocol 1.1 and is hereby registered as a dependent of
          the household above. Natal benefits are automatically
          enrolled. The Office congratulates the household.
        </p>
      </div>
      <div className="flex items-end justify-between mt-md">
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink50 }}>filed</div>
          <div style={{ fontSize: "0.78rem", color: ink, marginTop: "0.1rem" }}>2052.06.14</div>
        </div>
        <div className="uppercase" style={{ background: accent, color: "var(--color-paper)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", padding: "0.22rem 0.45rem", transform: "rotate(-3deg)" }}>
          registered
        </div>
      </div>
    </div>
  );
}
