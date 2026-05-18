import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";
import { SectionHead } from "../../_components/SectionHead";

export const metadata: Metadata = {
  title: "2.5 — Playing at Consumption",
  description:
    "OHCOSE Phase II, Sub-Protocol 2.5. The toy as ambassador of an ecosystem. Branded play. Gamified collection. The pre-figuration of adult consumer behavior.",
  alternates: {
    canonical: "/ohcose/ii-inscriptive-normalization/playing-at-consumption",
  },
};

export default function PlayingAtConsumption() {
  return (
    <PageFrame pageNum="2.5" secCode="OHCOSE / LR / SP-2.5">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <a href="/ohcose" className="hover:underline">← schedule of phases</a>
        <a href="/ohcose/ii-inscriptive-normalization" className="hover:underline">← phase II</a>
      </nav>

      <PhaseBanner code="Sub-Protocol 2.5" title="Playing at Consumption" qualifier="Phase II · Inscriptive Normalization" />

      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
          Sub-Protocol 2.5
        </p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>
          Playing at Consumption
        </h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The toy as ambassador of an ecosystem. The character as the
          face of a lifelong product line. Branded play, gamified
          collection, and the channeling of libidinal energy toward
          ownership.
        </p>
      </header>

      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        <section>
          <SectionHead code="2.5.1" title="The Toy as Ambassador" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              A toy is no longer a toy in the Phase-II environment. The
              toy is an ambassador. Each Office-approved Phase-II toy
              comes embedded in an ecosystem: the toy itself, the
              accessory line, the supplementary characters sold
              separately, the affiliated bedding, breakfast cereal,
              backpack, and seasonal television production. The subject
              who plays with one element of the ecosystem is invited
              continuously into the others.
            </p>
            <p>
              The Office observes the subject's engagement with the
              ecosystem rather than with the individual toy. The metric
              of interest is the subject's lateral expansion across the
              ecosystem's surfaces over the Phase-II span. A subject who
              completes their lateral expansion before age twelve is
              recorded as having achieved Phase-II Brand Maturity, which
              accrues to the subject's Phase-IV onboarding profile.
            </p>
          </div>
        </section>

        <section>
          <SectionHead code="2.5.2" title="The Pipeline" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The Office has formalized the pipeline by which the
            Phase-II subject's affective investment is routed toward
            its adult-consumer destination. The schematic below shows
            the standard pathway from age-four cradle toy through
            age-twelve handoff.
          </p>

          <ConsumptionPipeline />

          <p className="font-mono uppercase text-center mt-sm" style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "var(--color-ink-50)" }}>
            Fig. 2.5.A — Phase-II consumption pipeline (standard pathway)
          </p>
        </section>

        <section>
          <SectionHead code="2.5.3" title="Digital Play Extension" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The Phase-II digital environment extends the toy ecosystem
              into the subject's interior life. Office-approved
              children's platforms deliver gamified turn-taking,
              compulsion-loop reward schedules, and in-app purchase
              opportunities calibrated to the subject's caregiver
              budget. The subject's lateral expansion across the
              ecosystem is materially accelerated by digital exposure;
              the Office's longitudinal series shows a 2.6× gain in
              Brand Maturity by age twelve for digitally-immersed
              subjects relative to physical-toy-only subjects.
            </p>
            <p>
              Caregivers concerned about digital exposure may consult
              Pamphlet 7-C (Healthy Screens, Healthy Subjects). The
              Office's published guidance is that the Phase-II digital
              environment is engineered to be safe; caregivers
              attempting to restrict it operate outside the Office's
              evidence base and assume the calibration cost of doing so.
            </p>
          </div>
        </section>

        <section>
          <SectionHead code="2.5.4" title="The Coolness Pathway" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The Office has documented a peer-mediated channel by which
              certain Phase-II brand affiliations confer social status
              among the subject's cohort. Status accruing through brand
              affiliation is recorded as the Coolness Score; the score
              is computed from the subject's elementary-yard
              self-sorting patterns and from the subject's reported
              social desirability among cohort members. The Office's
              brand partners receive de-identified Coolness Score
              distributions as part of the standard quarterly
              data-sharing agreement.
            </p>
          </div>
        </section>

        <nav className="pt-md flex items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <a href="/ohcose/ii-inscriptive-normalization/recess-as-release-valve" className="font-mono uppercase hover:underline" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 2.4 recess</a>
          <a href="/ohcose/ii-inscriptive-normalization/temporal-corridor" className="font-mono uppercase hover:underline" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>2.6 temporal corridor →</a>
        </nav>
      </article>
    </PageFrame>
  );
}

/**
 * Consumption Pipeline — linear flow showing the routing of affective
 * investment from cradle-toy through ecosystem expansion through
 * adult brand-loyalty. Each stage labeled with age band.
 */
function ConsumptionPipeline() {
  const stroke = "var(--color-ink)";
  const strokeLight = "var(--color-ink-70)";
  const accent = "var(--color-oxblood)";
  const paper = "var(--color-paper)";
  const paper95 = "var(--color-paper-95)";

  const stages = [
    { label: "cradle toy", age: "age 4", width: 80 },
    { label: "+ accessory line", age: "age 5–6", width: 100 },
    { label: "+ character ecosystem", age: "age 6–8", width: 120 },
    { label: "+ digital extension", age: "age 8–10", width: 110 },
    { label: "+ social status", age: "age 10–12", width: 100 },
  ];

  return (
    <svg viewBox="0 0 600 220" className="w-full" role="img" aria-label="Phase-II consumption pipeline">
      {/* Stage funnel — boxes left-to-right, getting wider/taller */}
      {(() => {
        let x = 30;
        return stages.map((s, i) => {
          const w = s.width;
          const h = 50 + i * 8;
          const y = 80 - h / 2;
          const el = (
            <g key={i}>
              <rect x={x} y={y} width={w} height={h} fill={i === stages.length - 1 ? accent : paper95} stroke={stroke} strokeWidth="1.5" />
              <text x={x + w / 2} y={80 - 4} fontSize="11" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700" fill={i === stages.length - 1 ? paper : stroke}>
                {s.label}
              </text>
              <text x={x + w / 2} y={80 + 12} fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={i === stages.length - 1 ? paper : strokeLight}>
                {s.age}
              </text>
            </g>
          );
          x += w + 8;
          return el;
        });
      })()}

      {/* Arrow from end of pipeline to "Phase IV brand-loyalty profile" */}
      <line x1={555} y1={80} x2={580} y2={80} stroke={stroke} strokeWidth="1.5" />
      <polygon points="580,76 588,80 580,84" fill={stroke} />

      {/* Output node */}
      <g>
        <rect x={20} y={170} width={560} height={36} fill={paper} stroke={stroke} strokeWidth="1" strokeDasharray="3 3" />
        <text x={300} y={185} fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700" fill={stroke}>
          OUTPUT: Phase IV onboarding · brand-loyalty profile installed
        </text>
        <text x={300} y={198} fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={strokeLight}>
          subject arrives at age 19 with pre-calibrated consumer preferences
        </text>
      </g>

      {/* Connector arrow pipeline → output */}
      <path d="M 300 105 L 300 168" stroke={stroke} strokeWidth="0.8" strokeDasharray="2 2" fill="none" />
      <polygon points="296,168 300,176 304,168" fill={stroke} />
    </svg>
  );
}
