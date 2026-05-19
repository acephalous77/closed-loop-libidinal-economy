import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "2.3 — Emotional Hygiene & the Care of Deviance",
  description:
    "OHCOSE Phase II, Sub-Protocol 2.3. The Mood Stability Index. The compassionate management of the non-aligned subject. The Emotional Hygiene Compliance Report.",
  alternates: {
    canonical: "/ohcose/ii-inscriptive-normalization/emotional-hygiene",
  },
};

export default function EmotionalHygiene() {
  return (
    <PageFrame pageNum="2.3" secCode="OHCOSE / LR / SP-2.3">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <a href="/ohcose" className="hover:underline">← schedule of phases</a>
        <a href="/ohcose/ii-inscriptive-normalization" className="hover:underline">← phase II</a>
      </nav>

      <PhaseBanner code="Sub-Protocol 2.3" title="Emotional Hygiene" qualifier="Phase II · Inscriptive Normalization" />

      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
          Sub-Protocol 2.3
        </p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>
          Emotional Hygiene &amp;<br />
          the Care of Deviance
        </h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The Mood Stability Index. The early identification of the
          non-aligned subject. The compassionate framing of corrective
          intervention. The Emotional Hygiene Compliance Report.
        </p>
      </header>

      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="2.3.1" title="The Hygiene Premise" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              Emotional hygiene is the Phase-II analogue of the physical
              hygiene the schoolhouse instilled in earlier centuries.
              Where the schoolhouse once taught the subject to wash their
              hands, the certified Phase-II facility teaches the subject
              to wash their affect. Feelings are managed in the manner of
              public health: each subject is taught to perform regular
              self-checks, to recognize indicators of imbalance, and to
              employ the Office's standardized routines for restoring
              their inner state to the published normative band.
            </p>
            <p>
              The Office considers emotional hygiene the most important
              Phase-II deliverable. A subject who exits Phase II
              practiced in hygienic self-management requires
              proportionally less calibration in every subsequent Phase.
              A subject who exits Phase II without the practice requires
              proportionally more.
            </p>
          </div>
        </section>

        <section>
          <SectionHead code="2.3.2" title="The Care of Deviance" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              A subject whose facial affect, postural attention, or
              autonomic arousal drifts persistently outside the
              cohort-normative band is reclassified as an Area for
              Additional Support. The Office does not use the term
              "deviance" with caregivers; the published designation is
              the warmer one. The internal designation, used in the
              Office's diagnostic pathways, is the older term.
            </p>
            <p>
              The compassionate framing is the Office's most reliable
              tool. A subject reclassified as an Area for Additional
              Support is received by the caregiver as a subject whose
              schooling has noticed them and is offering an enhanced
              attention. The corrective regimen that follows — the
              mindfulness cooldown, the prescribed companion routine, the
              prescribed medication where indicated — arrives within the
              same affective frame the subject was trained, under Phase
              I, to receive as care.
            </p>
          </div>
        </section>

        <section>
          <SectionHead code="2.3.3" title="Designation Pathways" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The Office maintains a small set of formal designation
            pathways. Subjects flagged by the classroom-instrument
            ensemble are routed into one of the following pathways at
            the Phase-II Affective Officer's discretion.
          </p>

          <table className="w-full font-mono text-sm border-collapse my-md">
            <thead>
              <tr style={{ borderBottom: "1.5px solid var(--color-ink)", background: "var(--color-paper-95)" }}>
                <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.7rem", color: "var(--color-ink-70)" }}>flag pattern</th>
                <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.7rem", color: "var(--color-ink-70)" }}>pathway</th>
                <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.7rem", color: "var(--color-ink-70)" }}>instrument</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["sustained postural drift", "Attentional Restoration", "stimulant trial (Form 8-J)"],
                ["sustained negative-valence affect", "Mood Regulation Pathway", "mindfulness regimen (Form 8-K)"],
                ["frequent peer-conflict events", "Social Calibration Pathway", "buddy-system assignment"],
                ["creative-divergence flag (recurring)", "Channeling Pathway", "structured-output substitution"],
                ["autonomic-arousal volatility", "Containment Pathway", "weighted companion (Form 8-M)"],
              ].map(([flag, pwy, inst]) => (
                <tr key={flag} style={{ borderBottom: "1px solid var(--color-paper-85)" }}>
                  <td className="p-xs" style={{ color: "var(--color-ink-90)" }}>{flag}</td>
                  <td className="p-xs" style={{ color: "var(--color-ink-70)" }}>{pwy}</td>
                  <td className="p-xs" style={{ color: "var(--color-ink-50)" }}>{inst}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="font-mono uppercase text-center" style={{ fontSize: "0.85rem", letterSpacing: "0.15em", color: "var(--color-ink-50)" }}>
            Tbl. 2.3.A — Phase-II designation pathways (rev. 21.2)
          </p>
        </section>

        <section>
          <SectionHead code="2.3.4" title="Emotional Hygiene Compliance Report" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            Each Phase-II subject receives an Emotional Hygiene
            Compliance Report at the close of each term. A specimen for a
            ten-year-old subject is shown below.
          </p>

          <EmotionalHygieneReport />

          <p className="font-mono uppercase text-center mt-sm" style={{ fontSize: "0.85rem", letterSpacing: "0.15em", color: "var(--color-ink-50)" }}>
            Fig. 2.3.A — Specimen Emotional Hygiene Compliance Report
          </p>
        </section>

        <nav className="pt-md flex items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <a href="/ohcose/ii-inscriptive-normalization/algorithmic-calibration" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 2.2 algorithmic calibration</a>
          <a href="/ohcose/ii-inscriptive-normalization/recess-as-release-valve" className="font-mono uppercase hover:underline" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>2.4 recess →</a>
        </nav>
      </article>
    </PageFrame>
  );
}

/**
 * Emotional Hygiene Compliance Report — mock report card with mood
 * stability index, engagement score, deviation event log.
 */
function EmotionalHygieneReport() {
  const ink = "var(--color-ink)";
  const ink70 = "var(--color-ink-70)";
  const ink50 = "var(--color-ink-50)";
  const accent = "var(--color-oxblood)";

  const indices = [
    { name: "Mood Stability Index", value: 8.7, max: 10, target: "≥ 8.0", status: "compliant" },
    { name: "Cooperation Quotient", value: 7.4, max: 10, target: "≥ 7.0", status: "compliant" },
    { name: "Attentional Steadiness", value: 6.9, max: 10, target: "≥ 7.0", status: "advisory" },
    { name: "Conflict-Event Frequency (inv.)", value: 9.1, max: 10, target: "≥ 8.5", status: "compliant" },
  ];

  const events = [
    { date: "Q3.5", note: "Brief sadness (10 min), following recess. Self-recovered." },
    { date: "Q3.8", note: "Conflict event (peer dispute over toy). Mediator: aide K-4G2." },
    { date: "Q3.11", note: "Postural drift sustained (3+ hr). Routed to mindfulness cooldown." },
  ];

  return (
    <div className="my-md" style={{ border: "1.5px solid var(--color-ink)", background: "var(--color-paper-95)", padding: "1.5rem 1.25rem", fontFamily: "var(--font-mono)" }}>
      <div className="flex items-start justify-between mb-md pb-sm" style={{ borderBottom: "1.5px solid var(--color-ink)" }}>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", color: ink70 }}>OHCOSE · Phase II</div>
          <div className="uppercase tracking-wider font-bold" style={{ fontSize: "0.9rem", color: ink, marginTop: "0.15rem" }}>Emotional Hygiene Compliance Report</div>
        </div>
        <div className="text-right">
          <div className="uppercase tracking-wider" style={{ fontSize: "0.65rem", color: ink50 }}>subject ID</div>
          <div style={{ fontSize: "0.95rem", color: ink, fontWeight: 700 }}>5217-CL</div>
          <div className="uppercase tracking-wider mt-xs" style={{ fontSize: "0.65rem", color: ink50 }}>age 10 · Q3</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-md mb-md">
        {indices.map((idx) => {
          const advisory = idx.status === "advisory";
          return (
            <div key={idx.name} style={{ border: "1px solid var(--color-paper-85)", padding: "0.7rem" }}>
              <div className="uppercase tracking-wider" style={{ fontSize: "0.65rem", color: ink50 }}>{idx.name}</div>
              <div className="flex items-baseline gap-sm mt-xs">
                <span className="tabular-nums" style={{ fontSize: "1.6rem", fontWeight: 700, color: advisory ? accent : ink, lineHeight: 1 }}>{idx.value}</span>
                <span style={{ fontSize: "0.75rem", color: ink70 }}>/ {idx.max}</span>
              </div>
              <div className="uppercase tracking-wider mt-xs tabular-nums" style={{ fontSize: "0.65rem", color: ink70 }}>
                target {idx.target}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-md">
        <div className="uppercase tracking-wider mb-sm" style={{ fontSize: "0.65rem", color: ink50 }}>quarter events log</div>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {events.map((e, i) => (
            <li key={i} style={{ borderTop: "1px solid var(--color-paper-85)", padding: "0.4rem 0", display: "grid", gridTemplateColumns: "4rem 1fr", gap: "0.6rem" }}>
              <span className="tabular-nums" style={{ fontSize: "0.7rem", color: accent, fontWeight: 700 }}>{e.date}</span>
              <span style={{ fontSize: "0.8rem", color: ink70, lineHeight: 1.4 }}>{e.note}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-center mt-md pt-sm" style={{ borderTop: "1.5px solid var(--color-ink)" }}>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.65rem", color: ink50 }}>overall</div>
          <div style={{ fontSize: "0.95rem", color: ink, fontWeight: 700 }}>COMPLIANT · advisory (attentional)</div>
        </div>
        <div className="uppercase" style={{ background: accent, color: "var(--color-paper)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", padding: "0.25rem 0.5rem" }}>
          Form 8-J
        </div>
      </div>
    </div>
  );
}
