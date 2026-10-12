import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "2.2 — Algorithmic Calibration",
  description:
    "OHCOSE Phase II, Sub-Protocol 2.2. The instrumented classroom. Emotion-recognition systems. The Standard Parent–Teacher Feedback Rubric (Form OHCOSE-PTFR/GenC).",
  alternates: {
    canonical: "/ohcose/ii-inscriptive-normalization/algorithmic-calibration",
  },
};

export default function AlgorithmicCalibration() {
  return (
    <PageFrame pageNum="2.2" secCode="OHCOSE / LR / SP-2.2">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/ii-inscriptive-normalization" className="hover:underline">← phase II</Link>
      </nav>

      <PhaseBanner code="Sub-Protocol 2.2" title="Algorithmic Calibration" qualifier="Phase II · Inscriptive Normalization" />

      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
          Sub-Protocol 2.2
        </p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>
          Algorithmic Calibration
        </h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The instrumented Phase-II classroom. The desk-embedded sensor
          array. The emotion-recognition camera. The Standard Parent–Teacher
          Feedback Rubric. The Office's continuous measurement of the
          subject across the school day.
        </p>
      </header>

      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="2.2.1" title="The Instrumented Classroom" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The Office-certified Phase-II classroom replaces the gaze
              of the unaided teacher with the gaze of a sensor array. Each
              desk carries a discreet camera, a passive microphone, a
              posture-tracking pad, and a galvanic skin-conductance
              contact in the wrist-rest. Wall-mounted units extend the
              array to the perimeter. The teacher remains in the room as
              the affective interface; the calibration work is performed
              by the system behind them.
            </p>
            <p>
              The subject does not notice the instrumentation. The desk
              is a normal desk. The camera looks like the small
              decorative element it is presented as. The wrist-rest is
              warm and comfortable. By month two of Phase II the subject
              has fully accommodated to the environment.
            </p>
          </div>
        </section>

        <section>
          <SectionHead code="2.2.2" title="The Continuous Measurement" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The system samples the subject across four primary channels
            during the school day. The streams are routed to the Phase-II
            Regional Aggregator and folded into the subject's lifelong
            record at the same node established under Phase I
            sub-protocol 1.1.
          </p>

          <table className="w-full font-mono text-sm border-collapse my-md">
            <thead>
              <tr style={{ borderBottom: "1.5px solid var(--color-ink)", background: "var(--color-paper-95)" }}>
                <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.7rem", color: "var(--color-ink-70)" }}>channel</th>
                <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.7rem", color: "var(--color-ink-70)" }}>instrument</th>
                <th className="text-right p-xs uppercase tracking-wider" style={{ fontSize: "0.7rem", color: "var(--color-ink-70)" }}>sample rate</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["facial-affect (FA)", "desk-fwd camera", "8 Hz"],
                ["vocal-spectrum (VS)", "ambient microphone", "16 kHz"],
                ["postural-attention (PA)", "seat-pad gyroscope", "32 Hz"],
                ["autonomic-arousal (AA)", "wrist-rest GSR", "4 Hz"],
              ].map(([ch, inst, rate]) => (
                <tr key={ch} style={{ borderBottom: "1px solid var(--color-paper-85)" }}>
                  <td className="p-xs" style={{ color: "var(--color-ink-90)" }}>{ch}</td>
                  <td className="p-xs" style={{ color: "var(--color-ink-70)" }}>{inst}</td>
                  <td className="p-xs text-right tabular-nums" style={{ color: "var(--color-ink-90)" }}>{rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p
              className="font-mono uppercase text-center mt-sm"
              style={{
                fontSize: "0.85rem",
                letterSpacing: "0.15em",
                color: "var(--color-ink-50)",
                borderTop: "1px solid var(--color-paper-85)",
                paddingTop: "0.45rem",
                maxWidth: "var(--measure)",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <span style={{ color: "var(--color-oxblood)", fontWeight: 700 }}>Tbl. 2.2.A</span> — Phase-II classroom-instrument sampling spec
            </p>
        </section>

        <section>
          <SectionHead code="2.2.3" title="Parent–Teacher Feedback Rubric" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The Office issues a Standard Parent–Teacher Feedback Rubric
            (Form OHCOSE-PTFR/GenC) at the close of each quarter. The
            Rubric consolidates the quarter's instrumented capture into
            a five-category profile and an overall Phase-II trajectory
            note. A specimen is shown below.
          </p>

          <PTFRRubric />

          <p
              className="font-mono uppercase text-center mt-sm"
              style={{
                fontSize: "0.85rem",
                letterSpacing: "0.15em",
                color: "var(--color-ink-50)",
                borderTop: "1px solid var(--color-paper-85)",
                paddingTop: "0.45rem",
                maxWidth: "var(--measure)",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <span style={{ color: "var(--color-oxblood)", fontWeight: 700 }}>Fig. 2.2.A</span> — Specimen Form OHCOSE-PTFR/GenC, age 7
            </p>
        </section>

        <section>
          <SectionHead code="2.2.4" title="Note on Affective Standardization" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The Office's Phase-II instruments capture more than academic
              performance. Affect and demeanor are captured too. A subject who
              appears disengaged is flagged. A subject who appears angry
              is flagged. A subject whose facial affect drifts outside
              the published normative band for the subject's cohort is
              flagged and routed to the Phase-II Affective Hygiene
              pathway (see sub-protocol 2.3).
            </p>
            <p>
              The teacher receives a real-time advisory on their desk
              terminal when a subject's affect drifts. The teacher's
              redirection is therefore both warmly given and
              algorithmically prompted. The subject experiences only the
              warmth.
            </p>
          </div>
        </section>

        <nav className="pt-md flex flex-wrap items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <Link href="/ohcose/ii-inscriptive-normalization/desk-as-altar" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 2.1 desk as altar</Link>
          <Link href="/ohcose/ii-inscriptive-normalization/emotional-hygiene" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>2.3 emotional hygiene →</Link>
        </nav>
      </article>
    </PageFrame>
  );
}

/**
 * Specimen PTFR/GenC — institutional Parent-Teacher Rubric form, with
 * five graded categories + overall trajectory note. Mock-form style.
 */
function PTFRRubric() {
  const ink = "var(--color-ink)";
  const ink70 = "var(--color-ink-70)";
  const ink50 = "var(--color-ink-50)";
  const accent = "var(--color-oxblood)";

  const rows = [
    { name: "Cognitive Alignment", value: 93, label: "Exceeds expectations", note: "Reading and math on track; follows scripted curriculum without divergence." },
    { name: "Normative Behavior", value: 88, label: "Proficient", note: "Adheres to classroom rules in 9/10 situations; brief speaking-out-of-turn, corrected with reminder." },
    { name: "Emotional Regulation", value: 85, label: "Proficient", note: "Composed in routine settings. Brief crying when toy confiscated; self-soothed within 3 min per protocol." },
    { name: "Social Integration", value: 79, label: "Developing", note: "Cooperates in group activities. Occasionally prefers solitary play; buddy-system guidance scheduled." },
    { name: "Consumer Role-Play", value: 91, label: "Excels", note: "Assumes shopkeeper role in class game; uses play currency correctly; early brand-awareness observed." },
  ];

  return (
    <div className="my-md" style={{ border: "1.5px solid var(--color-ink)", background: "var(--color-paper-95)", padding: "1.5rem 1.25rem", fontFamily: "var(--font-mono)" }}>
      {/* Header */}
      <div className="text-center pb-sm" style={{ borderBottom: "1.5px solid var(--color-ink)" }}>
        <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", letterSpacing: "0.18em", color: ink50 }}>
          OHCOSE · Phase II
        </div>
        <div className="font-serif font-bold mt-xs" style={{ fontSize: "1.15rem", color: ink, letterSpacing: "0.03em" }}>
          Standard Parent–Teacher Feedback Rubric
        </div>
        <div className="uppercase tracking-wider mt-xs" style={{ fontSize: "0.7rem", color: accent, fontWeight: 700 }}>
          Form OHCOSE-PTFR / GenC
        </div>
      </div>

      {/* Subject info */}
      <div className="grid grid-cols-3 gap-md mt-md mb-md">
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink50 }}>student</div>
          <div style={{ fontSize: "0.95rem", color: ink, marginTop: "0.15rem" }}>A____ B____</div>
        </div>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink50 }}>age</div>
          <div style={{ fontSize: "0.95rem", color: ink, marginTop: "0.15rem" }}>7 yrs</div>
        </div>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink50 }}>quarter</div>
          <div style={{ fontSize: "0.95rem", color: ink, marginTop: "0.15rem" }}>Q3</div>
        </div>
      </div>

      {/* Score rows */}
      <div className="space-y-sm">
        {rows.map((r) => (
          <div key={r.name} style={{ paddingTop: "0.6rem", borderTop: "1px solid var(--color-paper-85)" }}>
            <div className="flex items-baseline justify-between gap-sm">
              <div style={{ fontSize: "0.85rem", color: ink, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                {r.name}
              </div>
              <div className="flex items-baseline gap-sm">
                <span className="tabular-nums" style={{ fontSize: "1.15rem", color: accent, fontWeight: 700 }}>{r.value}</span>
                <span className="uppercase" style={{ fontSize: "0.7rem", color: ink70, fontWeight: 700, letterSpacing: "0.08em" }}>{r.label}</span>
              </div>
            </div>
            <div style={{ fontSize: "0.75rem", color: ink70, marginTop: "0.25rem", lineHeight: 1.4 }}>{r.note}</div>
          </div>
        ))}
      </div>

      {/* Trajectory */}
      <div className="mt-md pt-sm" style={{ borderTop: "1.5px solid var(--color-ink)" }}>
        <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink50 }}>overall Phase-II trajectory</div>
        <div style={{ fontSize: "0.9rem", color: ink, fontWeight: 700, marginTop: "0.2rem" }}>ON COURSE · benchmark-aligned</div>
        <div style={{ fontSize: "0.75rem", color: ink70, marginTop: "0.4rem", lineHeight: 1.4 }}>
          Profile aligns with Standard Consumer-Citizen development benchmarks. Caregivers encouraged to reinforce routines at home and reward positive compliance.
        </div>
      </div>
    </div>
  );
}
