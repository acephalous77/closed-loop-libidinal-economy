import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "3.1 — Calibrating Desire for the Market",
  description:
    "OHCOSE Phase III, Sub-Protocol 3.1. The continuous launch of new subjectivities. The channeling of adolescent restlessness into consumer behaviors.",
  alternates: {
    canonical: "/ohcose/iii-adolescent-calibration/calibrating-desire",
  },
};

export default function CalibratingDesire() {
  return (
    <PageFrame pageNum="3.1" secCode="OHCOSE / LR / SP-3.1">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <a href="/ohcose" className="hover:underline">← schedule of phases</a>
        <a href="/ohcose/iii-adolescent-calibration" className="hover:underline">← phase III</a>
      </nav>

      <PhaseBanner code="Sub-Protocol 3.1" title="Calibrating Desire" qualifier="Phase III · Adolescent Calibration" />

      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
          Sub-Protocol 3.1
        </p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>
          Calibrating Desire<br />
          for the Market
        </h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The opening sub-protocol of Phase III. The continuous launch of
          fresh subjectivities. The orderly routing of newly-emerging
          adolescent desire into Office-approved expressive channels.
        </p>
      </header>

      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="3.1.1" title="The Calibration Window" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              Phase III opens at the age-twelve boundary. The Phase-II
              calibration regime has installed the subject's trust posture,
              their brand-recognition baseline, and their work/play
              cadence. The Phase-III subject arrives at the Office's
              middle-school portal carrying all three. What the Phase-III
              regime adds is the channel-architecture by which the
              subject's newly available adolescent desire can be expressed
              without leaving the Office's measurement envelope.
            </p>
            <p>
              The window is six years. The Office's longitudinal evidence
              indicates that this is sufficient to install a calibrated
              desire profile that holds, with minor periodic re-tuning,
              across the remainder of the lifecycle.
            </p>
          </div>
        </section>

        <section>
          <SectionHead code="3.1.2" title="The Subjectivity Catalogue" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The Office maintains a catalogue of pre-approved Phase-III
            subjectivities. Each entry is a packaged identity-bundle:
            wardrobe register, music affiliation, semantic tic,
            consumption pattern, and adjacent peer cohort. Subjects are
            presented with the catalogue continuously through the
            digital architecture (see sub-protocol 3.3) and select among
            its entries at their own apparent initiative.
          </p>

          <SubjectivityCatalogue />

          <p className="font-mono uppercase text-center mt-sm" style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "var(--color-ink-50)" }}>
            Fig. 3.1.A — Sample page from the Phase-III Subjectivity Catalogue
          </p>
        </section>

        <section>
          <SectionHead code="3.1.3" title="The Channeling Mechanism" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              Phase III is characterized by the emergence of an enlarged
              affective range: longing, exhilaration, despair, anger,
              erotic stirring, ideological awakening. The Office does
              not suppress this range. The Office channels it. Each
              affect-vector is mapped onto an expressive register the
              subject experiences as their own choice; each register is
              the entry into a market the Office has prepared for them.
            </p>
            <p>
              Longing is channeled into late-night streaming and the
              purchase of mood-aligned merchandise. Anger is channeled
              into branded subculture affiliation (see sub-protocol 3.2).
              Erotic stirring is channeled into managed expression
              through the pharmacopornographic architecture (see
              sub-protocol 3.4). Ideological awakening is channeled into
              consumer activism — the selection among Office-vetted
              causes that can be expressed by reposting and purchasing.
              No affect-vector exits the system unrouted.
            </p>
          </div>
        </section>

        <section>
          <SectionHead code="3.1.4" title="Note to the Caregiver" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              Caregivers entering Phase III often report a perception
              that the subject has become a stranger to them. The
              perception is correct in the immediate register and
              misleading in the structural one. The subject is not a
              stranger; the subject is a Phase-III subject, which
              presents differently than a Phase-II subject. The Office
              has accounted for the difference and is operating within
              published parameters.
            </p>
            <p>
              Caregivers are reminded that the Phase-III adolescent
              register requires the appearance of caregiver retreat.
              The retreat does not weaken the calibration. Caregiver
              presence at this stage is a friction the calibration
              prefers to minimize.
            </p>
          </div>
        </section>

        <nav className="pt-md flex items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <a href="/ohcose/iii-adolescent-calibration" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>↑ phase III</a>
          <a href="/ohcose/iii-adolescent-calibration/rebellion-packaged" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>3.2 rebellion packaged →</a>
        </nav>
      </article>
    </PageFrame>
  );
}

/**
 * Subjectivity Catalogue — mock catalogue-page layout in the style of
 * a wholesale-product brochure. Five "subject models" arranged in a
 * grid, each with a code, name, affect-register, and the consumption
 * channel it routes into.
 */
function SubjectivityCatalogue() {
  const ink = "var(--color-ink)";
  const ink70 = "var(--color-ink-70)";
  const ink50 = "var(--color-ink-50)";
  const accent = "var(--color-oxblood)";

  const subjects = [
    { code: "S3-01", name: "The Earnest Striver", affect: "ambition · anxiety", channel: "credential / coaching market" },
    { code: "S3-02", name: "The Soft Withdrawal", affect: "ennui · longing", channel: "subscription / streaming" },
    { code: "S3-03", name: "The Aesthetic Refusal", affect: "irony · disdain", channel: "subcultural goods (see 3.2)" },
    { code: "S3-04", name: "The Wellness Disciple", affect: "discipline · hope", channel: "supplement / app stack (see 3.5)" },
    { code: "S3-05", name: "The Cause-Aligned", affect: "indignation · solidarity", channel: "merchandise / donation" },
    { code: "S3-06", name: "The Quiet Builder", affect: "patience · focus", channel: "tools / startup mythology (see 3.6)" },
  ];

  return (
    <div className="my-md" style={{ border: "1.5px solid var(--color-ink)", background: "var(--color-paper-95)", padding: "1.5rem 1.25rem", fontFamily: "var(--font-mono)" }}>
      <div className="text-center pb-sm" style={{ borderBottom: "1.5px solid var(--color-ink)" }}>
        <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", letterSpacing: "0.18em", color: ink50 }}>
          OHCOSE · Phase III
        </div>
        <div className="font-serif font-bold mt-xs" style={{ fontSize: "1.15rem", color: ink, letterSpacing: "0.03em" }}>
          Subjectivity Catalogue — Cohort 2042
        </div>
        <div className="uppercase tracking-wider mt-xs" style={{ fontSize: "0.7rem", color: accent, fontWeight: 700 }}>
          Form OHCOSE-SC / GenC · vol. 14.2
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-md mt-md">
        {subjects.map((s) => (
          <div key={s.code} style={{ border: "1px solid var(--color-paper-85)", padding: "0.85rem" }}>
            <div className="flex justify-between items-baseline mb-xs">
              <span className="uppercase tracking-wider" style={{ fontSize: "0.65rem", color: accent, fontWeight: 700 }}>{s.code}</span>
              <span className="uppercase tracking-wider" style={{ fontSize: "0.55rem", color: ink50 }}>model</span>
            </div>
            <div className="font-serif font-bold" style={{ fontSize: "0.95rem", color: ink, lineHeight: 1.2 }}>
              {s.name}
            </div>
            <div className="mt-sm">
              <div className="uppercase tracking-wider" style={{ fontSize: "0.55rem", color: ink50 }}>affect register</div>
              <div style={{ fontSize: "0.8rem", color: ink70, marginTop: "0.1rem" }}>{s.affect}</div>
            </div>
            <div className="mt-xs">
              <div className="uppercase tracking-wider" style={{ fontSize: "0.55rem", color: ink50 }}>routed to</div>
              <div style={{ fontSize: "0.8rem", color: ink70, marginTop: "0.1rem" }}>{s.channel}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-md pt-sm text-center" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
        <span className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink50 }}>
          new models released quarterly · obsolete models phased out within 18 mo
        </span>
      </div>
    </div>
  );
}
