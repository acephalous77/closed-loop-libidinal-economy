import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  // Bypass project template "%s — OHCOSE" on the landing
  title: { absolute: "OHCOSE — Office of Human Continuity and Social Equilibrium" },
  alternates: { canonical: "/ohcose" },
};

/**
 * Seven-phase Schedule of the Standard Consumer-Citizen Lifecycle.
 * The structural spine of the work; rendered as a Schedule of Phases
 * here, with each Phase linking to its own parent page (and from there
 * to the modular sub-section pages).
 */
const SCHEDULE = [
  {
    numeral: "I",
    slug: "i-ontogenesis",
    name: "Ontogenesis",
    ages: "0–3 yrs",
    purpose: "Biometric registration. Initial dataset acquisition. Cradle anchoring.",
  },
  {
    numeral: "II",
    slug: "ii-inscriptive-normalization",
    name: "Inscriptive Normalization",
    ages: "4–12 yrs",
    purpose: "Cognitive, behavioral, and cultural patterning. Brand entrainment.",
  },
  {
    numeral: "III",
    slug: "iii-adolescent-calibration",
    name: "Adolescent Calibration",
    ages: "13–18 yrs",
    purpose: "Libidinal channeling. Identity-fixation protocols. Volatility management.",
  },
  {
    numeral: "IV",
    slug: "iv-economic-subjectification",
    name: "Economic Subjectification",
    ages: "19–30 yrs",
    purpose: "Onboarding into the productive-consumer dual role. Debt-binding.",
  },
  {
    numeral: "V",
    slug: "v-peak-productivity",
    name: "Peak Productivity & Reproductive Transfer",
    ages: "31–45 yrs",
    purpose: "Maximum surplus extraction. Genetic-economic continuity transfer.",
  },
  {
    numeral: "VI",
    slug: "vi-consolidation",
    name: "Consolidation & Role Reversal",
    ages: "46–65 yrs",
    purpose: "Asset stewardship. Caregiver redeployment. Legacy preparation.",
  },
  {
    numeral: "VII",
    slug: "vii-exit",
    name: "Exit",
    ages: "65+ yrs",
    purpose: "End-of-cycle protocols. Estate transfer. Post-mortem data continuity.",
  },
  {
    numeral: "VIII",
    slug: "viii-ouroboros",
    name: "The Ouroboros Machine",
    ages: "—",
    purpose: "Closure of the cycle. Return of harvested surplus to Phase I (next cohort).",
  },
];

export default function OhcosePortal() {
  return (
    <main className="min-h-screen px-sm pt-md pb-2xl">
      {/* ============= MASTHEAD ============= */}
      <header
        className="mx-auto max-w-[var(--container-page)] pb-lg"
        style={{ borderBottom: "2px solid var(--color-ink)" }}
      >
        {/* Top classification bar */}
        <div className="flex items-center justify-between mb-md">
          <div className="ohcose-docnum">
            OHCOSE / REG / PSCC / 2026.05
          </div>
          <div className="ohcose-stamp">for public intake</div>
        </div>

        {/* Seal + agency name */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-md">
          <Image
            src="/ohcose/seal.png"
            alt="Official seal of the Office of Human Continuity and Social Equilibrium"
            width={160}
            height={160}
            priority
            className="shrink-0"
          />
          <div className="flex-1 text-center sm:text-left">
            <p className="ohcose-docnum mb-xs">est. 2031 · Schedule of Phases · Public Intake Portal</p>
            <h1
              className="font-mono font-bold text-xl tracking-tight leading-tight"
              style={{ color: "var(--color-ink)" }}
            >
              Office of Human Continuity
              <br />
              and Social Equilibrium
            </h1>
            <p
              className="text-md mt-sm leading-snug"
              style={{ color: "var(--color-ink-70)" }}
            >
              A cradle-to-grave partnership for the Standard Consumer-Citizen
              (Gen C Model). Optimizing every phase of life for the greater
              economic good.
            </p>
          </div>
        </div>
      </header>

      {/* ============= WELCOME STATEMENT ============= */}
      <section className="mx-auto max-w-[var(--measure)] mt-2xl">
        <div className="ohcose-section-head">Welcome Statement</div>

        <div className="text-base leading-snug space-y-md">
          <p
            className="italic pl-sm border-l-2"
            style={{
              color: "var(--color-ink-70)",
              borderColor: "var(--color-paper-85)",
            }}
          >
            From each according to their capacity for consumption, to each
            according to their need for regulation.
          </p>
          <p style={{ color: "var(--color-ink-90)" }}>
            The Office welcomes you to the Standard Consumer-Citizen program.
            Whether you are reading this on behalf of yourself, a newly
            biometrically-enrolled dependent, or a senior approaching the
            Exit phase, the Office is here to ensure your continued
            participation in the cycle proceeds with minimum friction and
            maximum yield.
          </p>
          <p style={{ color: "var(--color-ink-90)" }}>
            The Schedule below outlines the seven Phases of the Standard
            Consumer-Citizen Lifecycle, plus the closing Annex on the
            apparatus that returns extracted surplus to the next cohort.
            Each Phase has been subdivided into the discrete sub-protocols
            by which the Office administers it. Select a Phase to access
            its public documentation.
          </p>
        </div>
      </section>

      {/* ============= SCHEDULE OF PHASES ============= */}
      <section className="mx-auto max-w-[var(--container-prose)] mt-2xl">
        <div className="ohcose-section-head">Schedule of Phases</div>

        <ol>
          {SCHEDULE.map((phase) => (
            <li key={phase.slug} className="ohcose-form-row">
              <a
                href={`/ohcose/${phase.slug}`}
                className="contents group"
                aria-label={`Phase ${phase.numeral}: ${phase.name}`}
              >
                <span
                  className="font-mono font-bold text-md tabular-nums"
                  style={{ color: "var(--color-ink)" }}
                >
                  {phase.numeral}.
                </span>
                <span className="block">
                  <span
                    className="block text-base font-semibold transition-colors duration-100 group-hover:underline"
                    style={{ color: "var(--color-ink-90)" }}
                  >
                    {phase.name}
                  </span>
                  <span
                    className="block text-xs mt-xs leading-snug"
                    style={{ color: "var(--color-ink-70)" }}
                  >
                    {phase.purpose}
                  </span>
                </span>
                <span
                  className="font-mono text-xs whitespace-nowrap"
                  style={{ color: "var(--color-ink-50)" }}
                >
                  {phase.ages}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      {/* ============= NOTICE TO PUBLIC ============= */}
      <section className="mx-auto max-w-[var(--measure)] mt-2xl">
        <div className="ohcose-section-head">Notice to Public</div>
        <p
          className="text-sm leading-snug"
          style={{ color: "var(--color-ink-70)" }}
        >
          All Standard Consumer-Citizens are encouraged to familiarize
          themselves with the Schedule above. Non-compliance with phase
          protocols does not absolve participation. The cycle continues
          regardless. Questions regarding the Office's mandate may be
          addressed to your Phase Administrator at your earliest scheduled
          touch-point. The Office thanks you for your continued contribution
          to the equilibrium.
        </p>
      </section>
    </main>
  );
}
