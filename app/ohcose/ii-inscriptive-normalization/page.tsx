import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../_components/PageFrame";
import { PhaseBanner } from "../_components/PhaseBanner";
import { LifecycleStrip } from "../_components/LifecycleStrip";
import { IntakeHeader } from "../_components/IntakeHeader";

export const metadata: Metadata = {
  title: "Phase II — Inscriptive Normalization",
  description:
    "OHCOSE Phase II — Inscriptive Normalization (4–12 yrs). The school as institutional ritual. Algorithmic classroom calibration. Emotional hygiene and the care of deviance. Childhood as a temporal corridor.",
  alternates: { canonical: "/ohcose/ii-inscriptive-normalization" },
};

const SUB_PROTOCOLS = [
  {
    slug: "desk-as-altar",
    code: "2.1",
    name: "The Desk as Altar",
    summary:
      "The classroom as ritual space. The bell-keyed daily liturgy. Order presented as care.",
    status: "live",
  },
  {
    slug: "algorithmic-calibration",
    code: "2.2",
    name: "Algorithmic Calibration",
    summary:
      "Instrumented desks. Emotion-recognition systems. The Parent–Teacher Feedback Rubric (Form OHCOSE-PTFR/GenC).",
    status: "live",
  },
  {
    slug: "emotional-hygiene",
    code: "2.3",
    name: "Emotional Hygiene & the Care of Deviance",
    summary:
      "Mood Stability Index. The medicalization of restlessness. Compassionate management of the non-aligned child.",
    status: "live",
  },
  {
    slug: "recess-as-release-valve",
    code: "2.4",
    name: "Recess as Libidinal Release Valve",
    summary:
      "The managed unstructured interval. Zone-organized free play. The microdosing of agency.",
    status: "live",
  },
  {
    slug: "playing-at-consumption",
    code: "2.5",
    name: "Playing at Consumption",
    summary:
      "Branded toys, digital companions, gamified collection. The toy as ambassador of an ecosystem.",
    status: "live",
  },
  {
    slug: "temporal-corridor",
    code: "2.6",
    name: "The Temporal Corridor",
    summary:
      "Childhood as a one-way corridor. Surplus extraction across the passage. Hand-off to Phase III Adolescent Calibration.",
    status: "live",
  },
];

export default function PhaseIIInscriptiveNormalization() {
  return (
    <PageFrame pageNum="II" secCode="OHCOSE / LR / Phase II">
      <h1 className="sr-only">Phase II — Inscriptive Normalization</h1>
      <nav className="mb-md">
        <Link
          href="/ohcose"
          className="font-mono uppercase hover:underline"
          style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}
        >
          ← schedule of phases
        </Link>
      </nav>

      <PhaseBanner code="Phase II" title="Inscriptive Normalization" qualifier="4–12 yrs" />

      {/* Lifecycle strip — position in the eight-phase arc */}
      <LifecycleStrip current={2} />

      <IntakeHeader phase={2} roman="II" name="Inscriptive Normalization" span="4–12 yrs" protocols={6} />

      <section className="mt-2xl max-w-[var(--measure)] mx-auto">
        <div
          className="font-mono uppercase mb-md"
          style={{ fontSize: "1rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}
        >
          Phase Statement
        </div>
        <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
          <p>
            Phase II opens at the age-three boundary and closes at the
            age-twelve boundary, at which point the Standard Consumer-Citizen
            is handed off to Phase III Adolescent Calibration. The Phase-II
            mandate is the inscription of foundational literacies and
            normative behaviors against the baselines established under
            Phase I. The subject enters Phase II as a registered infant.
            The subject exits Phase II as a market-aligned schoolchild.
          </p>
          <p>
            The work proceeds along six sub-protocols, administered through
            the Office's network of certified pedagogical facilities and
            through the auxiliary contribution of Home Inscriptive Equivalence
            providers. Caregivers serving in Phase II are reminded that the
            calibration regime is now authoritative; Phase-I instruments have
            been decommissioned and are no longer the appropriate channel for
            redress.
          </p>
        </div>
      </section>

      <section className="mt-2xl max-w-[var(--container-prose)] mx-auto">
        <div
          className="font-mono uppercase mb-md text-center"
          style={{ fontSize: "1rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}
        >
          Schedule of Sub-Protocols
        </div>

        <div
          className="font-mono uppercase"
          style={{
            display: "flex", alignItems: "baseline", gap: "var(--spacing-md)",
            fontSize: "0.7rem", letterSpacing: "0.18em",
            color: "var(--color-ink-50)",
            borderBottom: "1px solid var(--color-ink)",
            paddingBottom: "0.4rem", marginBottom: "0.2rem",
          }}
          aria-hidden
        >
          <span style={{ width: "3.5rem", flexShrink: 0 }}>code</span>
          <span style={{ flex: 1 }}>sub-protocol</span>
          <span>filing</span>
        </div>

<ol>
          {SUB_PROTOCOLS.map((s) => {
            const Row = (
              <>
                <span
                  className="font-mono font-bold tabular-nums"
                  style={{ color: "var(--color-ink)", fontSize: "1rem", width: "3.5rem" }}
                >
                  {s.code}
                </span>
                <span className="flex-1">
                  <span
                    className="block group-hover:underline"
                    style={{ color: "var(--color-ink-90)", fontSize: "1.15rem", fontWeight: 600 }}
                  >
                    {s.name}
                  </span>
                  <span
                    className="block text-sm mt-xs leading-snug"
                    style={{ color: "var(--color-ink-70)" }}
                  >
                    {s.summary}
                  </span>
                </span>
                <span
                  className="font-mono uppercase"
                  style={{
                    color: "var(--color-oxblood)",
                    border: "1px solid var(--color-oxblood)",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    padding: "0.2rem 0.5rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  publ.
                </span>
              </>
            );
            return (
              <li
                key={s.slug}
                className="ohcose-row py-sm flex items-baseline gap-md"
                style={{ borderBottom: "1px solid var(--color-paper-85)" }}
              >
                <Link
                  href={`/ohcose/ii-inscriptive-normalization/${s.slug}`}
                  className="contents group"
                >
                  {Row}
                </Link>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p
          className="text-sm leading-snug text-center uppercase tracking-wider"
          style={{ color: "var(--color-ink-50)" }}
        >
          All Phase II sub-protocols are published.<br />
          Consult Form 2-A at any certified Phase-II facility for in-person clarification.
        </p>
      </section>
    </PageFrame>
  );
}
