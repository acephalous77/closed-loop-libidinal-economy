import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../_components/PageFrame";
import { PhaseBanner } from "../_components/PhaseBanner";
import { LifecycleStrip } from "../_components/LifecycleStrip";
import { IntakeHeader } from "../_components/IntakeHeader";

export const metadata: Metadata = {
  title: "Phase VI — Consolidation & Role Reversal",
  description: "OHCOSE Phase VI — Consolidation & Role Reversal (46–65 yrs). The high-water mark of capital. Managed decline. Intergenerational obligations. Legacy preparation.",
  alternates: { canonical: "/ohcose/vi-consolidation" },
};

const SUB_PROTOCOLS = [
  { slug: "high-water-mark", code: "6.1", name: "The High-Water Mark of Capital", summary: "Peak earning. Peak holdings. The narrative of earned seniority. The shift from production to stewardship." },
  { slug: "managing-decline", code: "6.2", name: "Managing the Decline", summary: "Health optimization. Graceful aging. The wellness pivot operationalized." },
  { slug: "intergenerational-obligations", code: "6.3", name: "Intergenerational Obligations", summary: "The sandwich generation. Aging parents, launching adult children. The unpaid caregiver shift." },
  { slug: "golden-years", code: "6.4", name: "The Golden Years Narrative", summary: "Anticipatory leisure. Second-act planning. The travel brochure as Phase-VII onboarding." },
  { slug: "knowledge-transfer", code: "6.5", name: "Knowledge Transfer & Succession", summary: "The extraction of expertise. The succession plan. The cost-managed exit from full productivity." },
  { slug: "phase-closure", code: "6.6", name: "Closing of Phase VI", summary: "Statutory retirement. Compulsory disengagement. Transfer to Phase VII." },
];

export default function PhaseVIConsolidation() {
  return (
    <PageFrame pageNum="VI" secCode="OHCOSE / LR / Phase VI">
      <nav className="mb-md">
        <Link href="/ohcose" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>← schedule of phases</Link>
      </nav>
      <PhaseBanner code="Phase VI" title="Consolidation & Role Reversal" qualifier="46–65 yrs" />

      {/* Lifecycle strip — position in the eight-phase arc */}
      <LifecycleStrip current={6} />

      <IntakeHeader phase={6} roman="VI" name="Consolidation & Role Reversal" span="46–65 yrs" protocols={6} />
      <section className="mt-2xl max-w-[var(--measure)] mx-auto">
        <div className="font-mono uppercase mb-md" style={{ fontSize: "1rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>Phase Statement</div>
        <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
          <p>
            Phase VI opens at the age-forty-six boundary and closes at
            the age-sixty-five boundary. The Phase-VI mandate is the
            extraction of late-career expertise, the optimization of
            health for continued productive participation, and the
            preparation of the subject for the eventual disengagement
            of Phase VII. Phase VI is presented to the subject as the
            payoff. The Office records it as the consolidation.
          </p>
          <p>
            Phase-VI subjects often experience a slowing. The Office
            does not contradict the experience. The Office calibrates
            the slowing into the preferred trajectory.
          </p>
        </div>
      </section>
      <section className="mt-2xl max-w-[var(--container-prose)] mx-auto">
        <div className="font-mono uppercase mb-md text-center" style={{ fontSize: "1rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>Schedule of Sub-Protocols</div>
        <ol>
          {SUB_PROTOCOLS.map((s) => (
            <li key={s.slug} className="py-sm flex items-baseline gap-md" style={{ borderBottom: "1px solid var(--color-paper-85)" }}>
              <Link href={`/ohcose/vi-consolidation/${s.slug}`} className="contents group">
                <span className="font-mono font-bold tabular-nums" style={{ color: "var(--color-ink)", fontSize: "1rem", width: "3.5rem" }}>{s.code}</span>
                <span className="flex-1">
                  <span className="block group-hover:underline" style={{ color: "var(--color-ink-90)", fontSize: "1.15rem", fontWeight: 600 }}>{s.name}</span>
                  <span className="block text-sm mt-xs leading-snug" style={{ color: "var(--color-ink-70)" }}>{s.summary}</span>
                </span>
                <span className="font-mono uppercase" style={{ color: "var(--color-oxblood)", border: "1px solid var(--color-oxblood)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", padding: "0.2rem 0.5rem", whiteSpace: "nowrap" }}>publ.</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>
      <section className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="text-sm leading-snug text-center uppercase tracking-wider" style={{ color: "var(--color-ink-50)" }}>
          All Phase VI sub-protocols are published.<br />
          Phase VII (Exit, 65+ yrs) opens upon statutory retirement.
        </p>
      </section>
    </PageFrame>
  );
}
