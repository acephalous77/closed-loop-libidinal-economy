import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "3.6 — The Initiate — Debt & Hustle",
  description:
    "OHCOSE Phase III, Sub-Protocol 3.6. Student debt as rite of passage. The startup mythology. The hand-off to Phase IV Economic Subjectification.",
  alternates: {
    canonical: "/ohcose/iii-adolescent-calibration/the-initiate",
  },
};

export default function TheInitiate() {
  return (
    <PageFrame pageNum="3.6" secCode="OHCOSE / LR / SP-3.6">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/iii-adolescent-calibration" className="hover:underline">← phase III</Link>
      </nav>

      <PhaseBanner code="Sub-Protocol 3.6" title="The Initiate" qualifier="Phase III · Adolescent Calibration" />

      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
          Sub-Protocol 3.6
        </p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>
          The Initiate<br />
          — Debt &amp; Hustle
        </h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The closing sub-protocol of Phase III. Student debt as the
          formal rite of passage into adult-economic agency. The startup
          mythology as the affective frame. The hand-off to Phase IV
          Economic Subjectification.
        </p>
      </header>

      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="3.6.1" title="The Indebted Initiation" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              At the age-eighteen boundary, the subject is invited to
              accept the Office's standard adult-economic onboarding
              instrument: an unsecured educational debt obligation of
              between forty and one hundred eighty thousand standard
              units, drawn against the subject's future earnings across
              Phases IV through VII. Acceptance is presented to the
              subject as an investment in their human capital. The
              Office considers it the subject's first sustained encounter
              with adult-grade economic obligation, and the moment at
              which the subject becomes formally bound to the productive
              trajectory the Office has been preparing them for.
            </p>
            <p>
              Subjects who decline the standard onboarding instrument
              are recorded as Alternative-Track entrants. The Alternative
              Track is available but is less calibrated; downstream
              outcomes vary more widely. The Office does not penalize
              alternative entry. The Office observes that uptake of the
              standard instrument has held at or above ninety-two
              percent for the past four cohorts.
            </p>
          </div>
        </section>

        <section>
          <SectionHead code="3.6.2" title="The Hustle Mythology" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The Office has supplemented the standard debt onboarding
              with an affective frame: the Phase-III subject is
              encouraged to interpret their accepted obligation through
              the register of personal ambition, founder mythology, and
              productive self-realization. The frame is delivered
              through the digital architecture (sub-protocol 3.3) as a
              continuous stream of founder profiles, productivity
              programs, and hustle-aligned merchandise.
            </p>
            <p>
              The Office's longitudinal evidence indicates that
              subjects who internalize the hustle frame experience
              their Phase-IV obligation servicing as personal
              cultivation. What an earlier subject would have felt as imposition, this subject feels as growth. The internalization
              materially reduces Phase-IV affective friction and is
              accordingly the Office's recommended exit posture from
              Phase III.
            </p>
          </div>
        </section>

        <section>
          <SectionHead code="3.6.3" title="The Initiation Certificate" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            On accepting the standard onboarding instrument the subject
            receives an Initiation Certificate. The Certificate marks
            the subject's formal transition out of Phase III and into
            Phase IV. A specimen is shown below.
          </p>

          <InitiationCertificate />

          <p className="font-mono uppercase text-center mt-sm" style={{ fontSize: "0.85rem", letterSpacing: "0.15em", color: "var(--color-ink-50)" }}>
            Fig. 3.6.A — Specimen Initiation Certificate (Phase III → Phase IV)
          </p>
        </section>

        <section>
          <SectionHead code="3.6.4" title="Closure of Phase III" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              With the Certificate signed, Phase III closes. The
              subject's calibrated desire profile, their packaged
              rebellion preferences, their feed-mediated cognitive
              substrate, their pharmacopornographic baseline, their
              quantified-selfhood posture, and their freshly-installed
              debt obligation are now jointly the operating substrate
              the Phase-IV instruments will work upon.
            </p>
            <p>
              The subject experiences the transition as graduation. The
              Office records it as the closing of the third
              calibration window and the opening of the fourth. Phase
              IV sub-protocols 4.1 through 4.6 will be published in
              due course. The Office thanks the subject and the
              caregiver for the work of Phase III.
            </p>
          </div>
        </section>

        <nav className="pt-md flex items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose/iii-adolescent-calibration/quantified-selfhood" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 3.5 quantified selfhood</Link>
          <Link href="/ohcose/iii-adolescent-calibration" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>↑ phase III</Link>
        </nav>
      </article>
    </PageFrame>
  );
}

/**
 * Initiation Certificate — Phase III → Phase IV transfer document
 * with the debt-instrument disclosure built in.
 */
function InitiationCertificate() {
  const ink = "var(--color-ink)";
  const ink70 = "var(--color-ink-70)";
  const ink50 = "var(--color-ink-50)";
  const accent = "var(--color-oxblood)";

  return (
    <div className="my-md mx-auto" style={{ maxWidth: "30rem", border: "3px double var(--color-ink)", background: "var(--color-paper)", padding: "1.75rem 1.5rem", fontFamily: "var(--font-mono)" }}>
      {/* Header */}
      <div className="text-center pb-sm" style={{ borderBottom: "1px solid var(--color-ink)" }}>
        <div className="uppercase tracking-wider" style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: ink50 }}>
          Office of Human Continuity &amp; Social Equilibrium
        </div>
        <div className="font-serif font-bold mt-xs" style={{ fontSize: "1.15rem", color: ink, letterSpacing: "0.04em" }}>
          Initiation Certificate
        </div>
        <div className="uppercase tracking-wider mt-xs" style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: accent, fontWeight: 700 }}>
          Phase III → Phase IV
        </div>
      </div>

      {/* Subject info */}
      <div className="grid grid-cols-2 gap-md gap-y-sm mt-md">
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink50 }}>subject C-ID</div>
          <div style={{ fontSize: "0.9rem", color: ink, fontWeight: 700, marginTop: "0.15rem" }}>C-2031-4A7Q-9X02-1A</div>
        </div>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink50 }}>cohort year</div>
          <div style={{ fontSize: "0.9rem", color: ink, marginTop: "0.15rem" }}>2049</div>
        </div>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink50 }}>onboarding instrument</div>
          <div style={{ fontSize: "0.9rem", color: ink, marginTop: "0.15rem" }}>Std-EOI · cohort tier</div>
        </div>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink50 }}>principal accepted</div>
          <div style={{ fontSize: "0.9rem", color: ink, marginTop: "0.15rem" }}>106,400 SU</div>
        </div>
      </div>

      {/* Attestation */}
      <div className="my-md py-sm" style={{ borderTop: "1px solid var(--color-paper-85)", borderBottom: "1px solid var(--color-paper-85)" }}>
        <p className="text-center leading-snug" style={{ fontSize: "0.78rem", color: ink70 }}>
          The subject of record has satisfied the Phase-III exit
          criteria as enumerated in Schedule 3.6.B and has accepted
          the Office's Standard Educational Onboarding Instrument.
          The subject is hereby initiated into Phase IV Economic
          Subjectification effective the date below.
        </p>
      </div>

      {/* Signatures */}
      <div className="grid grid-cols-2 gap-md">
        <div>
          <div style={{ borderBottom: "1px solid var(--color-ink)", height: "1.6rem" }} />
          <div className="uppercase tracking-wider mt-xs" style={{ fontSize: "0.55rem", color: ink50 }}>subject signature</div>
        </div>
        <div>
          <div style={{ borderBottom: "1px solid var(--color-ink)", height: "1.6rem" }} />
          <div className="uppercase tracking-wider mt-xs" style={{ fontSize: "0.55rem", color: ink50 }}>Phase IV Receiving Officer</div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-end justify-between mt-md">
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.55rem", color: ink50 }}>effective</div>
          <div style={{ fontSize: "0.78rem", color: ink, marginTop: "0.1rem" }}>2049.08.30</div>
        </div>
        <div className="uppercase" style={{ background: accent, color: "var(--color-paper)", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.1em", padding: "0.22rem 0.45rem", transform: "rotate(-3deg)" }}>
          initiated
        </div>
      </div>
    </div>
  );
}
