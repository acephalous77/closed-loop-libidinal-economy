import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";

export const metadata: Metadata = {
  title: "1.6 — Optimizing Trust-Attachment for Market-Normative Socialization",
  description:
    "OHCOSE Phase I, Sub-Protocol 1.6. Phase-I exit criteria. Pre-installation of the consumer trust posture. Hand-off to Phase II Inscriptive Normalization.",
  alternates: {
    canonical: "/ohcose/i-ontogenesis/trust-attachment-optimization",
  },
};

export default function TrustAttachmentOptimization() {
  return (
    <PageFrame pageNum="1.6" secCode="OHCOSE / LR / SP-1.6">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/i-ontogenesis" className="hover:underline">← phase I</Link>
      </nav>

      <PhaseBanner code="Sub-Protocol 1.6" title="Trust-Attachment Optimization" qualifier="Phase I · Ontogenesis" />

      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
          Sub-Protocol 1.6
        </p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>
          Optimizing Trust-Attachment<br />
          for Market-Normative Socialization
        </h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The Phase-I exit criteria. The pre-installation of the consumer
          trust posture. The hand-off of the Standard Consumer-Citizen to
          Phase II Inscriptive Normalization.
        </p>
      </header>

      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        {/* 1.6.1 */}
        <section>
          <SectionHead code="1.6.1" title="The Phase-I Exit Objective" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              Phase I concludes at the subject's age-three boundary marker.
              The Office's objective for the exit interval is the
              installation of a stable trust posture: the subject's
              durable expectation that comfort, response, recognition, and
              gratification arrive from outside themselves, through the
              channels the Office has provisioned. The trust posture is the
              Phase-I deliverable.
            </p>
            <p>
              A subject who exits Phase I with a stable trust posture has
              been trained to look outward in the moments of greatest
              need. The Office's downstream phases inherit this orientation
              and build on it. A subject who exits Phase I without the
              posture is referred back to the Phase-I Affective Calibration
              Team for an extension period; extensions are uncommon and
              typically resolve within ninety days.
            </p>
          </div>
        </section>

        {/* 1.6.2 — Exit Criteria */}
        <section>
          <SectionHead code="1.6.2" title="Published Exit Criteria" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The following criteria must be met before the subject is
            certified for Phase II transfer. Each criterion is verified by
            the Phase-I Closing Officer at the age-three review meeting.
          </p>

          <ul className="my-md" style={{ listStyle: "none", padding: 0 }}>
            {[
              "TAI sustained at 70 or above across the four prior weekly reports",
              "BR-A sustained at 75 or above with reference-set recognition complete",
              "Sole reliance on Office-approved soothing pathways for distress events at month 32 or later",
              "Verbal first-utterance directed at a recognized brand-primer family (e.g. mascot name)",
              "Caregiver Compliance Posture marked compliant for the prior eight weeks",
              "No outstanding Form 6-A advisories for the caregiver instrument",
              "Smart-Companion engagement frequency at or above 4 sessions per waking day",
            ].map((c, i) => (
              <li key={i} className="py-xs flex items-baseline gap-sm" style={{ borderBottom: "1px solid var(--color-paper-85)" }}>
                <span
                  className="font-mono"
                  style={{
                    width: "1.5rem",
                    fontSize: "0.7rem",
                    color: "var(--color-oxblood)",
                    fontWeight: 700,
                    border: "1.5px solid var(--color-oxblood)",
                    textAlign: "center",
                    padding: "0.1rem 0",
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                <span className="text-base leading-snug" style={{ color: "var(--color-ink-90)" }}>
                  {c}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* 1.6.3 — Transfer Document */}
        <section>
          <SectionHead code="1.6.3" title="Phase II Transfer Certificate" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            On meeting the exit criteria, the subject receives a Transfer
            Certificate. The Certificate is the Office's affirmation that
            the subject is ready to proceed. A specimen is shown below.
          </p>

          <TransferCertificate />

          <p className="font-mono uppercase text-center mt-sm" style={{ fontSize: "0.6rem", letterSpacing: "0.15em", color: "var(--color-ink-50)" }}>
            Fig. 1.6.A — Specimen Phase I → Phase II Transfer Certificate
          </p>
        </section>

        {/* 1.6.4 — Hand-off */}
        <section>
          <SectionHead code="1.6.4" title="Hand-off Procedure" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The hand-off is procedurally invisible to the subject. On
              the morning of the age-three boundary, the Phase-I Closing
              Officer files the certificate; the Phase-II Receiving Officer
              acknowledges the transfer; the subject's record is moved to
              the Phase-II queue. The subject continues to live with their
              caregiver, attend their Office-certified day environment,
              and engage with their Smart-Companion as they did the day
              before. From the Office's side, however, the calibration
              regime has shifted. The Phase-II instruments are now
              authoritative; the Phase-I instruments enter standby and
              are decommissioned over the subsequent ninety days.
            </p>
            <p>
              The Office considers the procedural invisibility of the
              hand-off to be one of Phase I's most important achievements.
              The subject does not experience a boundary because the
              subject has not yet developed the capacity to perceive one.
              The transition is the smoothest the subject's life will ever
              contain.
            </p>
          </div>
        </section>

        {/* 1.6.5 — Phase Closure */}
        <section>
          <SectionHead code="1.6.5" title="Closure of Phase I" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              With the hand-off complete, Phase I is closed for the
              subject. The subject's lifelong trust posture has been
              installed. The subject will carry it through Phase II
              Inscriptive Normalization, through Phase III Adolescent
              Calibration, through Phase IV Economic Subjectification, and
              into the productive years of the lifecycle. The posture is
              the substrate against which every subsequent Phase will
              measure its work.
            </p>
            <p>
              Caregivers may file Form 1-Z (Phase-I Closure Affirmation),
              an optional retrospective document for caregivers who wish
              to record their perception of the Phase. The Office reads
              the Affirmations but does not respond to them. The Office
              thanks the caregiver for their service.
            </p>
          </div>
        </section>

        <nav className="pt-md flex items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose/i-ontogenesis/normative-metrics" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 1.5 normative metrics</Link>
          <Link href="/ohcose/i-ontogenesis" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>↑ phase I</Link>
        </nav>
      </article>
    </PageFrame>
  );
}

function SectionHead({ code, title }: { code: string; title: string }) {
  return (
    <div className="mb-md flex items-baseline gap-sm pb-xs" style={{ borderBottom: "1px solid var(--color-ink)" }}>
      <span className="font-mono font-bold tabular-nums" style={{ fontSize: "1.05rem", color: "var(--color-oxblood)" }}>{code}</span>
      <span className="font-serif font-bold" style={{ fontSize: "1.25rem", color: "var(--color-ink)", letterSpacing: "0.02em" }}>{title}</span>
    </div>
  );
}

/**
 * Transfer Certificate — form-document layout in the style of a
 * federal-agency certificate of transfer. Subject info, signature
 * blocks for the Closing and Receiving Officers, seal placeholder, etc.
 */
function TransferCertificate() {
  const ink = "var(--color-ink)";
  const ink70 = "var(--color-ink-70)";
  const ink50 = "var(--color-ink-50)";
  const accent = "var(--color-oxblood)";

  return (
    <div
      className="my-md mx-auto"
      style={{
        maxWidth: "28rem",
        border: "3px double var(--color-ink)",
        background: "var(--color-paper)",
        padding: "1.5rem 1.25rem",
        fontFamily: "var(--font-mono)",
      }}
    >
      {/* Header */}
      <div className="text-center mb-md pb-sm" style={{ borderBottom: "1px solid var(--color-ink)" }}>
        <div className="uppercase tracking-wider" style={{ fontSize: "0.55rem", letterSpacing: "0.2em", color: ink50 }}>
          Office of Human Continuity &amp; Social Equilibrium
        </div>
        <div className="font-serif font-bold mt-xs" style={{ fontSize: "1.1rem", color: ink, letterSpacing: "0.05em" }}>
          Certificate of Transfer
        </div>
        <div className="uppercase tracking-wider mt-xs" style={{ fontSize: "0.55rem", letterSpacing: "0.2em", color: accent, fontWeight: 700 }}>
          Phase I → Phase II
        </div>
      </div>

      {/* Subject block */}
      <div className="mb-md">
        <div className="grid grid-cols-2 gap-x-md gap-y-sm">
          <div>
            <div className="uppercase tracking-wider" style={{ fontSize: "0.55rem", color: ink50 }}>subject C-ID</div>
            <div style={{ fontSize: "0.85rem", color: ink, fontWeight: 700, marginTop: "0.15rem" }}>C-2031-4A7Q-9X02-1A</div>
          </div>
          <div>
            <div className="uppercase tracking-wider" style={{ fontSize: "0.55rem", color: ink50 }}>cohort</div>
            <div style={{ fontSize: "0.85rem", color: ink, marginTop: "0.15rem" }}>2031 · region 4A</div>
          </div>
          <div>
            <div className="uppercase tracking-wider" style={{ fontSize: "0.55rem", color: ink50 }}>phase I duration</div>
            <div style={{ fontSize: "0.85rem", color: ink, marginTop: "0.15rem" }}>156 weeks</div>
          </div>
          <div>
            <div className="uppercase tracking-wider" style={{ fontSize: "0.55rem", color: ink50 }}>exit TAI / BR-A</div>
            <div style={{ fontSize: "0.85rem", color: ink, marginTop: "0.15rem" }}>83 / 88</div>
          </div>
        </div>
      </div>

      {/* Attestation */}
      <div className="my-md py-sm" style={{ borderTop: "1px solid var(--color-paper-85)", borderBottom: "1px solid var(--color-paper-85)" }}>
        <p className="text-center leading-snug" style={{ fontSize: "0.75rem", color: ink70 }}>
          The Office certifies that the subject of record has satisfied
          the Phase-I exit criteria as enumerated in Schedule 1.6.B and
          is hereby transferred to Phase II Inscriptive Normalization
          effective on the date below.
        </p>
      </div>

      {/* Signature lines */}
      <div className="grid grid-cols-2 gap-md mb-md">
        <div>
          <div style={{ borderBottom: "1px solid var(--color-ink)", height: "1.5rem" }} />
          <div className="uppercase tracking-wider mt-xs" style={{ fontSize: "0.5rem", color: ink50 }}>
            Phase I Closing Officer
          </div>
        </div>
        <div>
          <div style={{ borderBottom: "1px solid var(--color-ink)", height: "1.5rem" }} />
          <div className="uppercase tracking-wider mt-xs" style={{ fontSize: "0.5rem", color: ink50 }}>
            Phase II Receiving Officer
          </div>
        </div>
      </div>

      {/* Date + stamp */}
      <div className="flex items-end justify-between mt-md">
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.5rem", color: ink50 }}>effective date</div>
          <div style={{ fontSize: "0.75rem", color: ink, marginTop: "0.1rem" }}>2034.03.14</div>
        </div>
        <div className="uppercase" style={{ background: accent, color: "var(--color-paper)", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.1em", padding: "0.2rem 0.4rem", transform: "rotate(-4deg)" }}>
          certified
        </div>
      </div>
    </div>
  );
}
