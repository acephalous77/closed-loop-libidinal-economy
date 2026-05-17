import type { Metadata } from "next";
import { PageFrame } from "./_components/PageFrame";
import { SealWatermark } from "./_components/SealWatermark";

export const metadata: Metadata = {
  title: { absolute: "OHCOSE — Office of Human Continuity and Social Equilibrium" },
  alternates: { canonical: "/ohcose" },
};

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
    <PageFrame pageNum="i" secCode="OHCOSE / LR / Cover">
      {/* ============== COVER: seal as centerpiece ============== */}
      <section className="mt-2xl mb-2xl">
        <SealWatermark prominent />
        <div className="text-center mt-md max-w-[var(--measure)] mx-auto">
          <p
            className="font-mono uppercase mb-xs"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.25em",
              color: "var(--color-ink-50)",
            }}
          >
            Public Intake Portal — est. 2031
          </p>
          <h1
            className="font-serif font-bold tracking-tight leading-tight"
            style={{
              fontSize: "1.6rem",
              color: "var(--color-ink)",
            }}
          >
            Office of Human Continuity
            <br />
            and Social Equilibrium
          </h1>
          <p
            className="mt-md text-base leading-snug"
            style={{ color: "var(--color-ink-70)" }}
          >
            A cradle-to-grave partnership for the Standard Consumer-Citizen,
            Gen-C Model. Optimizing every phase of life for the greater
            economic good.
          </p>
        </div>
      </section>

      {/* ============== WELCOME STATEMENT ============== */}
      <section
        className="mx-auto max-w-[var(--measure)] py-lg"
        style={{ borderTop: "1px solid var(--color-paper-85)", borderBottom: "1px solid var(--color-paper-85)" }}
      >
        <p
          className="italic text-center mb-md"
          style={{
            fontSize: "1rem",
            color: "var(--color-ink-70)",
          }}
        >
          “From each according to their capacity for consumption,<br />
          to each according to their need for regulation.”
        </p>
        <p className="text-xs uppercase tracking-widest text-center" style={{ color: "var(--color-ink-50)" }}>
          — Excerpt, OHCOSE New Parent Orientation Brochure, 2035
        </p>
      </section>

      {/* ============== SCHEDULE OF PHASES (report-TOC style) ============== */}
      <section className="mx-auto max-w-[var(--container-prose)] mt-2xl">
        <div
          className="font-mono uppercase mb-md"
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            color: "var(--color-ink-70)",
            textAlign: "center",
          }}
        >
          Schedule of Phases
        </div>

        <ol>
          {SCHEDULE.map((phase) => (
            <li
              key={phase.slug}
              className="py-sm flex items-baseline gap-md"
              style={{ borderBottom: "1px solid var(--color-paper-85)" }}
            >
              <a
                href={`/ohcose/${phase.slug}`}
                className="contents group"
                aria-label={`Phase ${phase.numeral}: ${phase.name}`}
              >
                <span
                  className="font-mono font-bold tabular-nums"
                  style={{ color: "var(--color-ink)", fontSize: "0.9rem", width: "2rem" }}
                >
                  {phase.numeral}.
                </span>
                <span className="flex-1">
                  <span
                    className="block group-hover:underline"
                    style={{
                      color: "var(--color-ink-90)",
                      fontSize: "1.05rem",
                      fontWeight: 600,
                    }}
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
                  className="font-mono"
                  style={{
                    color: "var(--color-oxblood)",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                    width: "5rem",
                    textAlign: "right",
                  }}
                >
                  {phase.ages}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      {/* ============== NOTICE ============== */}
      <section className="mx-auto max-w-[var(--measure)] mt-2xl mb-2xl text-center">
        <p
          className="text-xs leading-snug uppercase tracking-wider"
          style={{ color: "var(--color-ink-50)" }}
        >
          Non-compliance with phase protocols does not absolve participation.<br />
          The cycle continues regardless.
        </p>
      </section>
    </PageFrame>
  );
}
