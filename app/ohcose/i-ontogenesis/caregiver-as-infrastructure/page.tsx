import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";

export const metadata: Metadata = {
  title: "1.3 — Caregiver Behavior as Outsourced Affective Infrastructure",
  description:
    "OHCOSE Phase I, Sub-Protocol 1.3. The role of caregivers as auxiliary Phase-I contractors. Standardization of the affective bond.",
  alternates: {
    canonical: "/ohcose/i-ontogenesis/caregiver-as-infrastructure",
  },
};

export default function CaregiverAsInfrastructure() {
  return (
    <PageFrame pageNum="1.3" secCode="OHCOSE / LR / SP-1.3">
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <a href="/ohcose" className="hover:underline">← schedule of phases</a>
        <a href="/ohcose/i-ontogenesis" className="hover:underline">← phase I</a>
      </nav>

      <PhaseBanner code="Sub-Protocol 1.3" title="Caregiver Behavior" qualifier="Phase I · Ontogenesis" />

      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p className="font-mono uppercase mb-xs" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
          Sub-Protocol 1.3
        </p>
        <h1 className="font-serif font-bold tracking-tight leading-tight" style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}>
          Caregiver Behavior<br />
          as Outsourced Affective Infrastructure
        </h1>
        <p className="mt-md text-base leading-snug" style={{ color: "var(--color-ink-70)" }}>
          The role of the caregiver as auxiliary Phase-I contractor.
          Standardization of the affective bond. Continuous monitoring,
          gentle guidance, and the calibration of intimacy to the Office's
          published parameters.
        </p>
      </header>

      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        {/* 1.3.1 */}
        <section>
          <SectionHead code="1.3.1" title="Caregiver Classification" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              At cradle anchoring (sub-protocol 1.1), the Office issues each
              subject a primary and a secondary caregiver designation.
              Caregivers are auxiliary Phase-I contractors. They are not
              compensated by the Office in fiscal currency; they are
              compensated in the form of subject continuity and in the
              Office's certification of their compliance posture, which
              attaches benefits across their own active phase.
            </p>
            <p>
              The caregiver's mandate is straightforward. Love is the first
              service owed to society. The subject's primary attachment
              instrument is the caregiver's affect. The Office has found
              the caregiver instrument to outperform any electronic
              equivalent the Office has tested. The caregiver's continued
              calibration to the published affective parameters is
              therefore the work of the Phase-I Caregiver Liaison.
            </p>
          </div>
        </section>

        {/* 1.3.2 — Compliance Dashboard */}
        <section>
          <SectionHead code="1.3.2" title="Caregiver Compliance Posture" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            Each caregiver is assigned a Compliance Posture composed of the
            below indicators. The Posture is computed continuously from the
            caregiver's logged interaction with the subject and from the
            caregiver's syncing of the OHCOSE Parent App. Caregivers may
            review their Posture at any time on Form 5-D.
          </p>

          <CompliancePostureCard />

          <p className="font-mono uppercase text-center mt-sm" style={{ fontSize: "0.6rem", letterSpacing: "0.15em", color: "var(--color-ink-50)" }}>
            Fig. 1.3.A — Sample Caregiver Compliance Posture (month 14)
          </p>
        </section>

        {/* 1.3.3 — Affective Parameters */}
        <section>
          <SectionHead code="1.3.3" title="Published Affective Parameters" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The Office publishes target parameters for the principal
              caregiver affective behaviors. Caregivers operating within
              the parameters are recorded as compliant. Caregivers
              operating outside the parameters receive a Form 6-A
              (Advisory Notice) and are scheduled into the next Caregiver
              Calibration Session.
            </p>
          </div>

          <table className="w-full font-mono text-sm border-collapse my-md">
            <thead>
              <tr style={{ borderBottom: "1.5px solid var(--color-ink)", background: "var(--color-paper-95)" }}>
                <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.6rem", color: "var(--color-ink-70)" }}>parameter</th>
                <th className="text-right p-xs uppercase tracking-wider" style={{ fontSize: "0.6rem", color: "var(--color-ink-70)" }}>target</th>
                <th className="text-right p-xs uppercase tracking-wider" style={{ fontSize: "0.6rem", color: "var(--color-ink-70)" }}>tolerance</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Response Latency to Cry", "≤ 92 sec", "± 18 sec"],
                ["Vocalization-Per-Hour (awake)", "62–88 utt.", "± 8 utt."],
                ["Eye-Contact Sustained (per dyad)", "≥ 4.0 sec", "≥ 3.2 sec"],
                ["Soothing-Touch Frequency", "≥ 22 / hr", "≥ 18 / hr"],
                ["App-Sync Interval", "≤ 24 hr", "≤ 48 hr"],
                ["Approved-Toy Adherence", "100%", "≥ 92%"],
              ].map(([p, t, tol]) => (
                <tr key={p} style={{ borderBottom: "1px solid var(--color-paper-85)" }}>
                  <td className="p-xs" style={{ color: "var(--color-ink-90)" }}>{p}</td>
                  <td className="p-xs text-right tabular-nums" style={{ color: "var(--color-ink-90)" }}>{t}</td>
                  <td className="p-xs text-right tabular-nums" style={{ color: "var(--color-ink-50)" }}>{tol}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="font-mono uppercase text-center" style={{ fontSize: "0.6rem", letterSpacing: "0.15em", color: "var(--color-ink-50)" }}>
            Tbl. 1.3.A — Caregiver affective parameters (rev. 14.3)
          </p>
        </section>

        {/* 1.3.4 — Advisory */}
        <section>
          <SectionHead code="1.3.4" title="Advisory on Non-Approved Practices" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The Office is aware that family members and unaffiliated
              acquaintances may propose unapproved caregiver practices,
              including the singing of lullabies not present in the Office
              repertoire, the holding of the subject in non-recommended
              postures, and the introduction of toys, fabrics, or food not
              certified for Phase-I exposure. Caregivers are reminded that
              the published parameters are the product of three decades of
              longitudinal study and that informal recommendations carry no
              such evidentiary backing.
            </p>
            <p>
              Caregivers who choose to follow non-approved practices may
              report them via Form 6-B (Voluntary Disclosure of Variant
              Caregiver Behavior). The Office does not impose sanction in
              respect of disclosed variance. The Office does impose
              sanction in respect of undisclosed variance discovered in
              the course of Phase-I review.
            </p>
          </div>
        </section>

        <nav className="pt-md flex items-center justify-between gap-md mt-2xl" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
          <a href="/ohcose/i-ontogenesis/algorithmic-nurseries" className="font-mono uppercase hover:underline" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>← 1.2 algorithmic nurseries</a>
          <a href="/ohcose/i-ontogenesis/surplus-extraction" className="font-mono uppercase hover:underline" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}>1.4 surplus extraction →</a>
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
 * Caregiver Compliance Posture card — a mock dashboard showing the
 * caregiver's current Posture as a series of horizontal score bars
 * with numeric values. Form-document style.
 */
function CompliancePostureCard() {
  const ink = "var(--color-ink)";
  const ink70 = "var(--color-ink-70)";
  const ink50 = "var(--color-ink-50)";
  const accent = "var(--color-oxblood)";

  const indicators = [
    { name: "Response-to-Cry Adherence", value: 91, max: 100, status: "compliant" },
    { name: "Affective Vocalization", value: 78, max: 100, status: "compliant" },
    { name: "Sustained Eye-Contact", value: 64, max: 100, status: "advisory" },
    { name: "Soothing-Touch Frequency", value: 88, max: 100, status: "compliant" },
    { name: "App-Sync Compliance", value: 100, max: 100, status: "compliant" },
    { name: "Approved-Toy Adherence", value: 96, max: 100, status: "compliant" },
  ];

  return (
    <div
      className="my-md"
      style={{
        border: "1.5px solid var(--color-ink)",
        background: "var(--color-paper-95)",
        padding: "1.25rem",
        fontFamily: "var(--font-mono)",
      }}
    >
      <div className="flex items-start justify-between mb-md">
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.6rem", color: ink70 }}>OHCOSE / Phase I</div>
          <div className="uppercase tracking-wider font-bold" style={{ fontSize: "0.75rem", color: ink, marginTop: "0.15rem" }}>Caregiver Compliance Posture</div>
        </div>
        <div className="text-right">
          <div className="uppercase tracking-wider" style={{ fontSize: "0.55rem", color: ink50 }}>caregiver ID</div>
          <div style={{ fontSize: "0.85rem", color: ink, fontWeight: 700 }}>K-2031-0F42</div>
        </div>
      </div>

      <div className="space-y-sm">
        {indicators.map((ind) => {
          const pct = (ind.value / ind.max) * 100;
          const advisory = ind.status === "advisory";
          return (
            <div key={ind.name}>
              <div className="flex justify-between items-baseline" style={{ fontSize: "0.7rem" }}>
                <span style={{ color: ink, textTransform: "uppercase", letterSpacing: "0.05em" }}>{ind.name}</span>
                <span className="tabular-nums" style={{ color: advisory ? accent : ink70, fontWeight: 700 }}>
                  {ind.value} / {ind.max}
                </span>
              </div>
              <div style={{
                width: "100%",
                height: "8px",
                background: "var(--color-paper-85)",
                marginTop: "0.25rem",
                position: "relative",
              }}>
                <div style={{
                  width: `${pct}%`,
                  height: "100%",
                  background: advisory ? accent : ink,
                }} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between items-center mt-md pt-sm" style={{ borderTop: "1px solid var(--color-paper-85)" }}>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.55rem", color: ink50 }}>overall</div>
          <div style={{ fontSize: "0.95rem", color: ink, fontWeight: 700 }}>COMPLIANT — advisory issued</div>
        </div>
        <div
          className="uppercase"
          style={{
            background: accent,
            color: "var(--color-paper)",
            fontSize: "0.55rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            padding: "0.2rem 0.5rem",
          }}
        >
          form 6-A
        </div>
      </div>
    </div>
  );
}
