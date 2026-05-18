import type { Metadata } from "next";
import { PageFrame } from "../_components/PageFrame";
import { PhaseBanner } from "../_components/PhaseBanner";

export const metadata: Metadata = {
  title: "Phase I — Ontogenesis",
  description:
    "OHCOSE Phase I — Ontogenesis (0–3 yrs). Biometric registration. Initial dataset acquisition. Cradle anchoring.",
  alternates: { canonical: "/ohcose/i-ontogenesis" },
};

const SUB_PROTOCOLS = [
  { slug: "cradle-anchoring", code: "1.1", name: "Biometric Registration & Cradle Anchoring", summary: "Assignment of the C-ID. Capture of newborn neural, biometric, and genetic baselines. Anchoring of the subject to the Office's ledger.", status: "live" },
  { slug: "algorithmic-nurseries", code: "1.2", name: "Algorithmic Nurseries & Early Brand Entrainment", summary: "Smart-crib instrumentation. Brand-primer mobile rotation. Algorithmic conditioning of the infant sensorium.", status: "live" },
  { slug: "caregiver-as-infrastructure", code: "1.3", name: "Caregiver Behavior as Outsourced Affective Infrastructure", summary: "Caregivers as unpaid Office contractors. Parenting-app compliance regime. Standardization of the affective bond.", status: "live" },
  { slug: "surplus-extraction", code: "1.4", name: "Infant Desire, Distress & the Extraction of Psychic Surplus", summary: "Conversion of cry, coo, and reach into surplus-value events. The smart-teddy protocol. Conditioning loops.", status: "live" },
  { slug: "normative-metrics", code: "1.5", name: "Metrics of Normative Development & Proto-Brand Loyalty", summary: "Trust-Attachment Index (TAI). Brand Recognition & Affect (BR-A) score. Phase-I Growth & Compliance reports.", status: "live" },
  { slug: "trust-attachment-optimization", code: "1.6", name: "Optimizing Trust-Attachment for Market-Normative Socialization", summary: "Phase-I exit criteria. Pre-installation of the consumer trust posture. Hand-off to Phase II Inscriptive Normalization.", status: "live" },
];

export default function PhaseIOntogenesis() {
  return (
    <PageFrame pageNum="I" secCode="OHCOSE / LR / Phase I">
      {/* Breadcrumb back to portal */}
      <nav className="mb-md">
        <a
          href="/ohcose"
          className="font-mono uppercase hover:underline"
          style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}
        >
          ← schedule of phases
        </a>
      </nav>

      {/* Phase banner */}
      <PhaseBanner code="Phase I" title="Ontogenesis" qualifier="0–3 yrs" />

      {/* Phase Statement */}
      <section className="mt-2xl max-w-[var(--measure)] mx-auto">
        <div
          className="font-mono uppercase mb-md"
          style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}
        >
          Phase Statement
        </div>
        <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
          <p>
            Phase I begins at the moment of clinical viability and concludes at
            the age-three boundary marker, at which point the Standard
            Consumer-Citizen is handed off to Phase II Inscriptive
            Normalization. The Office's mandate in Phase I is foundational:
            install the baseline data-objects against which every subsequent
            measurement will register, and pattern the subject's primary
            affective infrastructure such that downstream calibration runs
            with minimum friction.
          </p>
          <p>
            The work proceeds along six sub-protocols, administered in
            parallel from week one. Caregivers serving as auxiliary Phase-I
            staff are reminded that compliance with the schedule is not
            optional; the lifecycle does not accommodate delayed enrollment.
          </p>
        </div>
      </section>

      {/* Sub-Protocol Schedule */}
      <section className="mt-2xl max-w-[var(--container-prose)] mx-auto">
        <div
          className="font-mono uppercase mb-md text-center"
          style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}
        >
          Schedule of Sub-Protocols
        </div>

        <ol>
          {SUB_PROTOCOLS.map((s) => {
            const isLive = s.status === "live";
            const Row = (
              <>
                <span
                  className="font-mono font-bold tabular-nums"
                  style={{ color: "var(--color-ink)", fontSize: "0.85rem", width: "3rem" }}
                >
                  {s.code}
                </span>
                <span className="flex-1">
                  <span
                    className={"block " + (isLive ? "group-hover:underline" : "")}
                    style={{ color: "var(--color-ink-90)", fontSize: "1rem", fontWeight: 600 }}
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
                  className="font-mono uppercase"
                  style={{
                    color: isLive ? "var(--color-oxblood)" : "var(--color-ink-50)",
                    background: isLive ? "transparent" : "var(--color-paper-95)",
                    border: isLive ? "1px solid var(--color-oxblood)" : "1px solid var(--color-paper-85)",
                    fontSize: "0.55rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    padding: "0.15rem 0.4rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {isLive ? "publ." : "draft"}
                </span>
              </>
            );
            return (
              <li
                key={s.slug}
                className="py-sm flex items-baseline gap-md"
                style={{ borderBottom: "1px solid var(--color-paper-85)" }}
              >
                {isLive ? (
                  <a
                    href={`/ohcose/i-ontogenesis/${s.slug}`}
                    className="contents group"
                  >
                    {Row}
                  </a>
                ) : (
                  <div className="contents" aria-disabled="true">
                    {Row}
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </section>

      {/* Admin Note */}
      <section className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p
          className="text-xs leading-snug text-center uppercase tracking-wider"
          style={{ color: "var(--color-ink-50)" }}
        >
          Sub-protocols marked DRAFT are pending final review.<br />
          Consult Form 1-A at any Phase-I administrative touch-point.
        </p>
      </section>
    </PageFrame>
  );
}
