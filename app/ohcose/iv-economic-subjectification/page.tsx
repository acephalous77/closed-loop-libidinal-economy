import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../_components/PageFrame";
import { PhaseBanner } from "../_components/PhaseBanner";
import { LifecycleStrip } from "../_components/LifecycleStrip";
import { IntakeHeader } from "../_components/IntakeHeader";

export const metadata: Metadata = {
  title: "Phase IV — Economic Subjectification",
  description:
    "OHCOSE Phase IV — Economic Subjectification (19–30 yrs). The standard onboarding instrument. Algorithmic mentorship. Romantic markets. Curated lifestyle. Affective labor under the happiness mandate. Entrenchment.",
  alternates: { canonical: "/ohcose/iv-economic-subjectification" },
};

const SUB_PROTOCOLS = [
  { slug: "onboarding", code: "4.1", name: "Standard Adult Onboarding", summary: "Activation of the debt instrument. Career trajectory plan. Productive-consumer dual-role installation." },
  { slug: "algorithmic-mentorship", code: "4.2", name: "Algorithmic Mentorship", summary: "Programming ambition and compliance. The career algorithm. The continuous nudge." },
  { slug: "romantic-markets", code: "4.3", name: "Romantic Markets", summary: "Dating-app architecture. Libidinal commodification. The partner-matching index." },
  { slug: "curating-life", code: "4.4", name: "Curating Life", summary: "Lifestyle consumption. Identity performance. The portfolio of selves displayed on the feed." },
  { slug: "happiness-mandate", code: "4.5", name: "Affective Labor & the Happiness Mandate", summary: "The workplace happiness imperative. Emotional management as compliance. The smile metric." },
  { slug: "entrenchment", code: "4.6", name: "Toward Entrenchment", summary: "Mortgage, partnership, parenthood. Sticky obligations. Hand-off to Phase V Peak Productivity." },
];

export default function PhaseIVEconomicSubjectification() {
  return (
    <PageFrame pageNum="IV" secCode="OHCOSE / LR / Phase IV">
      <nav className="mb-md">
        <Link href="/ohcose" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>← schedule of phases</Link>
      </nav>
      <PhaseBanner code="Phase IV" title="Economic Subjectification" qualifier="19–30 yrs" />

      {/* Lifecycle strip — position in the eight-phase arc */}
      <LifecycleStrip current={4} />

      <IntakeHeader phase={4} roman="IV" name="Economic Subjectification" span="19–30 yrs" protocols={6} />
      <section className="mt-2xl max-w-[var(--measure)] mx-auto">
        <div className="font-mono uppercase mb-md" style={{ fontSize: "1rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>Phase Statement</div>
        <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
          <p>
            Phase IV opens at the age-eighteen boundary upon acceptance
            of the Standard Educational Onboarding Instrument and closes
            at the age-thirty boundary. The Phase-IV mandate is the
            full installation of the productive-consumer dual role.
            The subject who exits Phase IV has been onboarded as a
            worker, indebted as a borrower, partnered as a household,
            and curated as a brand-of-self. Every register the Office
            requires of the Phase V subject is provisioned here.
          </p>
          <p>
            The work proceeds along six sub-protocols, administered
            through the Office's network of employers, platforms,
            financial-service providers, and lifestyle partners.
            Phase-IV subjects often perceive themselves as choosing.
            The Office records the choices and notes the convergence.
          </p>
        </div>
      </section>
      <section className="mt-2xl max-w-[var(--container-prose)] mx-auto">
        <div className="font-mono uppercase mb-md text-center" style={{ fontSize: "1rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>Schedule of Sub-Protocols</div>
        <ol>
          {SUB_PROTOCOLS.map((s) => (
            <li key={s.slug} className="py-sm flex items-baseline gap-md" style={{ borderBottom: "1px solid var(--color-paper-85)" }}>
              <Link href={`/ohcose/iv-economic-subjectification/${s.slug}`} className="contents group">
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
          All Phase IV sub-protocols are published.<br />
          Phase V (Peak Productivity, 31–45 yrs) opens upon partnership consolidation or age 30, whichever comes first.
        </p>
      </section>
    </PageFrame>
  );
}
