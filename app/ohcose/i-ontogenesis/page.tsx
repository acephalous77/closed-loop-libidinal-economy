import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phase I — Ontogenesis",
  description:
    "OHCOSE Phase I — Ontogenesis (0–3 yrs). Biometric registration. Initial dataset acquisition. Cradle anchoring. The first three years of the Standard Consumer-Citizen lifecycle.",
  alternates: { canonical: "/ohcose/i-ontogenesis" },
};

const SUB_PROTOCOLS = [
  {
    slug: "cradle-anchoring",
    code: "1.1",
    name: "Biometric Registration & Cradle Anchoring",
    summary:
      "Assignment of the C-ID. Capture of newborn neural, biometric, and genetic baselines. Anchoring of the subject to the Office's ledger.",
    status: "live",
  },
  {
    slug: "algorithmic-nurseries",
    code: "1.2",
    name: "Algorithmic Nurseries & Early Brand Entrainment",
    summary:
      "Smart-crib instrumentation. Brand-primer mobile rotation. Algorithmic conditioning of the infant sensorium.",
    status: "draft",
  },
  {
    slug: "caregiver-as-infrastructure",
    code: "1.3",
    name: "Caregiver Behavior as Outsourced Affective Infrastructure",
    summary:
      "Caregivers as unpaid Office contractors. Parenting-app compliance regime. Standardization of the affective bond.",
    status: "draft",
  },
  {
    slug: "surplus-extraction",
    code: "1.4",
    name: "Infant Desire, Distress & the Extraction of Psychic Surplus",
    summary:
      "Conversion of cry, coo, and reach into surplus-value events. The smart-teddy protocol. Conditioning loops.",
    status: "draft",
  },
  {
    slug: "normative-metrics",
    code: "1.5",
    name: "Metrics of Normative Development & Proto-Brand Loyalty",
    summary:
      "Trust-Attachment Index (TAI). Brand Recognition & Affect (BR-A) score. Phase-I Growth & Compliance reports.",
    status: "draft",
  },
  {
    slug: "trust-attachment-optimization",
    code: "1.6",
    name: "Optimizing Trust-Attachment for Market-Normative Socialization",
    summary:
      "Phase-I exit criteria. Pre-installation of the consumer trust posture. Hand-off to Phase II Inscriptive Normalization.",
    status: "draft",
  },
];

export default function PhaseIOntogenesis() {
  return (
    <main className="min-h-screen px-sm pt-md pb-2xl">
      {/* ============= PHASE HEADER ============= */}
      <header
        className="mx-auto max-w-[var(--container-page)] pb-lg"
        style={{ borderBottom: "2px solid var(--color-ink)" }}
      >
        <div className="flex items-center justify-between mb-md">
          <div className="ohcose-docnum">
            OHCOSE / PHASE-I / ONTO / 2026.05
          </div>
          <div className="ohcose-stamp">for public intake</div>
        </div>

        <nav className="ohcose-docnum mb-sm">
          <a
            href="/ohcose"
            className="hover:underline"
            style={{ color: "var(--color-ink-70)" }}
          >
            ← schedule of phases
          </a>
        </nav>

        <p className="ohcose-docnum mb-xs">
          phase I · ages 0–3 · ontogenesis
        </p>
        <h1
          className="font-mono font-bold text-xl tracking-tight leading-tight"
          style={{ color: "var(--color-ink)" }}
        >
          Ontogenesis
        </h1>
        <p
          className="text-md mt-sm leading-snug max-w-[36rem]"
          style={{ color: "var(--color-ink-70)" }}
        >
          The ontogenetic phase. From birth through age three. The Office's
          first window for the registration, calibration, and baseline
          patterning of the Standard Consumer-Citizen.
        </p>
      </header>

      {/* ============= PHASE STATEMENT ============= */}
      <section className="mx-auto max-w-[var(--measure)] mt-2xl">
        <div className="ohcose-section-head">Phase Statement</div>
        <div className="text-base leading-snug space-y-md">
          <p style={{ color: "var(--color-ink-90)" }}>
            Phase I begins at the moment of clinical viability and concludes at
            the age-three boundary marker, at which point the Standard
            Consumer-Citizen is handed off to Phase II Inscriptive
            Normalization. The Office's mandate in Phase I is foundational:
            install the baseline data-objects against which every subsequent
            measurement will register, and pattern the subject's primary
            affective infrastructure such that downstream calibration runs
            with minimum friction.
          </p>
          <p style={{ color: "var(--color-ink-90)" }}>
            The work proceeds along six sub-protocols, administered in
            parallel from week one. Caregivers serving as auxiliary Phase-I
            staff are reminded that compliance with the schedule is not
            optional; the lifecycle does not accommodate delayed enrollment.
          </p>
        </div>
      </section>

      {/* ============= SCHEDULE OF SUB-PROTOCOLS ============= */}
      <section className="mx-auto max-w-[var(--container-prose)] mt-2xl">
        <div className="ohcose-section-head">Schedule of Sub-Protocols</div>

        <ol>
          {SUB_PROTOCOLS.map((s) => {
            const isLive = s.status === "live";
            const Row = (
              <>
                <span
                  className="font-mono font-bold text-md tabular-nums"
                  style={{ color: "var(--color-ink)" }}
                >
                  {s.code}
                </span>
                <span className="block">
                  <span
                    className={
                      "block text-base font-semibold leading-snug " +
                      (isLive ? "group-hover:underline" : "")
                    }
                    style={{ color: "var(--color-ink-90)" }}
                  >
                    {s.name}
                  </span>
                  <span
                    className="block text-xs mt-xs leading-snug"
                    style={{ color: "var(--color-ink-70)" }}
                  >
                    {s.summary}
                  </span>
                </span>
                <span
                  className="ohcose-stamp"
                  style={{
                    opacity: isLive ? 1 : 0.5,
                  }}
                >
                  {isLive ? "publ." : "draft"}
                </span>
              </>
            );
            return (
              <li key={s.slug} className="ohcose-form-row">
                {isLive ? (
                  <a
                    href={`/ohcose/i-ontogenesis/${s.slug}`}
                    className="contents group"
                  >
                    {Row}
                  </a>
                ) : (
                  <div className="contents" aria-disabled="true" title="Pending publication">
                    {Row}
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </section>

      {/* ============= ADMINISTRATIVE NOTE ============= */}
      <section className="mx-auto max-w-[var(--measure)] mt-2xl">
        <div className="ohcose-section-head">Administrative Note</div>
        <p
          className="text-sm leading-snug"
          style={{ color: "var(--color-ink-70)" }}
        >
          Sub-protocols marked <span className="ohcose-stamp" style={{ opacity: 0.6 }}>draft</span>{" "}
          are pending final review. Caregivers may consult Form 1-A
          (Provisional Protocol Disclosure) at any Phase-I administrative
          touch-point. The Office anticipates publication of the full
          sub-protocol set within the current fiscal cycle.
        </p>
      </section>
    </main>
  );
}
