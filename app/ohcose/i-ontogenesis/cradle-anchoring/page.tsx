import Link from "next/link";
import type { Metadata } from "next";
import { PageFrame } from "../../_components/PageFrame";
import { PhaseBanner } from "../../_components/PhaseBanner";

export const metadata: Metadata = {
  title: "1.1 — Biometric Registration & Cradle Anchoring",
  description:
    "OHCOSE Phase I, Sub-Protocol 1.1. Assignment of the C-ID. Capture of newborn neural, biometric, and genetic baselines.",
  alternates: {
    canonical: "/ohcose/i-ontogenesis/cradle-anchoring",
  },
};

export default function CradleAnchoring() {
  return (
    <PageFrame pageNum="1.1" secCode="OHCOSE / LR / SP-1.1">
      {/* Breadcrumbs */}
      <nav className="mb-md flex flex-wrap gap-x-md font-mono uppercase" style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}>
        <Link href="/ohcose" className="hover:underline">← schedule of phases</Link>
        <Link href="/ohcose/i-ontogenesis" className="hover:underline">← phase I</Link>
      </nav>

      {/* Phase banner — same as parent so the reader knows which phase */}
      <PhaseBanner code="Sub-Protocol 1.1" title="Cradle Anchoring" qualifier="Phase I · Ontogenesis" />

      {/* Title block */}
      <header className="mt-2xl mb-2xl max-w-[var(--measure)] mx-auto">
        <p
          className="font-mono uppercase mb-xs"
          style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-50)" }}
        >
          Sub-Protocol 1.1
        </p>
        <h1
          className="font-serif font-bold tracking-tight leading-tight"
          style={{ fontSize: "1.85rem", color: "var(--color-ink)" }}
        >
          Biometric Registration<br />
          &amp; Cradle Anchoring
        </h1>
        <p
          className="mt-md text-base leading-snug"
          style={{ color: "var(--color-ink-70)" }}
        >
          Assignment of the Consumer Identity (C-ID). Capture of newborn
          neural, biometric, and genetic baselines. Anchoring of the subject
          to the Office's ledger of souls.
        </p>
      </header>

      <article className="max-w-[var(--measure)] mx-auto space-y-2xl">
        {/* ============= 1.1.1 ============= */}
        <section>
          <SectionHead code="1.1.1" title="Window of Enrollment" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              Cradle anchoring shall be performed within the first
              forty-eight (48) hours of clinical viability. The window is
              non-negotiable. Subjects not enrolled within the window are
              reclassified as unregistered dependents and the Office is
              compelled to initiate Form 12-D (Emergency Backdated Anchoring),
              a process that the Office has found to introduce avoidable
              friction at every subsequent phase boundary.
            </p>
            <p>
              In standard practice, anchoring is performed in the delivery
              ward by the attending obstetric team's bonded data-officer, who
              will be present at the moment of clinical viability with the
              registration cart already provisioned.
            </p>
          </div>
        </section>

        {/* ============= 1.1.2 — DATA CAPTURE TABLE ============= */}
        <section>
          <SectionHead code="1.1.2" title="Baseline Data Capture" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            The following measurements shall be acquired in sequence. Each
            measurement becomes the lifelong reference point against which
            all subsequent observations are normalized.
          </p>

          <table className="w-full font-mono text-sm border-collapse my-md">
            <thead>
              <tr style={{ borderBottom: "1.5px solid var(--color-ink)", background: "var(--color-paper-95)" }}>
                <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.7rem", color: "var(--color-ink-70)" }}>ref.</th>
                <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.7rem", color: "var(--color-ink-70)" }}>measurement</th>
                <th className="text-left p-xs uppercase tracking-wider" style={{ fontSize: "0.7rem", color: "var(--color-ink-70)" }}>instrument</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["a", "heart-rate baseline (HRB)", "auscultation array"],
                ["b", "neural-response signature (NRS)", "soft-contact EEG cap"],
                ["c", "vocal-pattern primitive (VPP)", "wide-band microphone"],
                ["d", "ocular tracking baseline (OTB)", "infrared pupil sensor"],
                ["e", "genetic marker panel (GMP-12)", "heel-prick capillary"],
                ["f", "epidermal microbiome profile (EMP)", "swab kit 4-C"],
              ].map(([ref, name, inst]) => (
                <tr key={ref} style={{ borderBottom: "1px solid var(--color-paper-85)" }}>
                  <td className="p-xs" style={{ color: "var(--color-ink-50)" }}>{ref}</td>
                  <td className="p-xs" style={{ color: "var(--color-ink-90)" }}>{name}</td>
                  <td className="p-xs" style={{ color: "var(--color-ink-70)" }}>{inst}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p
              className="font-mono uppercase text-center mt-sm"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                color: "var(--color-ink-50)",
                borderTop: "1px solid var(--color-paper-85)",
                paddingTop: "0.45rem",
                maxWidth: "var(--measure)",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <span style={{ color: "var(--color-oxblood)", fontWeight: 700 }}>Tbl. 1.1.A</span> — Baseline capture sequence · acquisition time ≈ 14 min
            </p>
        </section>

        {/* ============= 1.1.3 — DATA FLOW VISUALIZATION ============= */}
        <section>
          <SectionHead code="1.1.3" title="Anchoring Schematic" />
          <p className="text-base leading-snug mb-md" style={{ color: "var(--color-ink-90)" }}>
            Captured measurements traverse the path below in less than two
            seconds. The Consumer Identity is provisioned, the lifecycle
            ledger entry is created, and the subject's baseline payload is
            replicated across the Office's regional data nodes before the
            anchoring procedure terminates.
          </p>

          <div
            style={{
              border: "1px solid var(--color-paper-85)",
              background: "var(--color-paper-95)",
              padding: "1.5rem 1rem",
              margin: "1.5rem 0",
            }}
          >
            <CradleAnchoringSchematic />
          </div>
          <p
              className="font-mono uppercase text-center mt-sm"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                color: "var(--color-ink-50)",
                borderTop: "1px solid var(--color-paper-85)",
                paddingTop: "0.45rem",
                maxWidth: "var(--measure)",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <span style={{ color: "var(--color-oxblood)", fontWeight: 700 }}>Fig. 1.1.A</span> — Cradle Anchoring data flow (simplified)
            </p>
        </section>

        {/* ============= 1.1.4 — C-ID FORMAT ============= */}
        <section>
          <SectionHead code="1.1.4" title="Consumer Identity Format" />
          <p className="text-base leading-snug" style={{ color: "var(--color-ink-90)" }}>
            The C-ID is a sixteen-character alphanumeric token of the form{" "}
            <span className="font-mono text-sm" style={{ color: "var(--color-ink)" }}>
              C-2031-XXXX-XXXX-CX
            </span>
            . The first four characters encode the cohort year. The next eight
            encode regional anchor and sequence position. The terminal pair
            encodes the active phase and the subject's compliance posture. The
            C-ID is permanent. It survives the subject by ninety-nine (99)
            standard fiscal years per Phase VII Annex A.
          </p>
          <SampleCIDCard />
          <p
              className="font-mono uppercase text-center mt-sm"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                color: "var(--color-ink-50)",
                borderTop: "1px solid var(--color-paper-85)",
                paddingTop: "0.45rem",
                maxWidth: "var(--measure)",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <span style={{ color: "var(--color-oxblood)", fontWeight: 700 }}>Fig. 1.1.B</span> — Sample Consumer Identity card
            </p>
        </section>

        {/* ============= 1.1.5 — CAREGIVER NOTE ============= */}
        <section>
          <SectionHead code="1.1.5" title="Note to the Caregiver" />
          <div className="text-base leading-snug space-y-md" style={{ color: "var(--color-ink-90)" }}>
            <p>
              The Office understands that the moment of clinical viability is
              an occasion of significant affective intensity for the
              caregiver. Cradle anchoring has been engineered to integrate
              into that affective interval without disturbance. The
              data-officer's presence is calibrated to be informational and
              warm. The instruments are designed to evoke confidence in the
              subject's lifelong infrastructure. Apprehension is engineered
              out.
            </p>
            <p>
              Caregivers who find themselves nonetheless apprehensive are
              encouraged to file Form 3-K (Caregiver Emotional Status
              Report), which will be reviewed by the Phase-I affective
              support team and may, where indicated, result in a
              supplementary calibration session.
            </p>
          </div>
        </section>

        {/* Navigation footer */}
        <nav
          className="pt-md flex flex-wrap items-center justify-between gap-md mt-2xl"
          style={{ borderTop: "1px solid var(--color-paper-85)" }}
        >
          <Link
            href="/ohcose/i-ontogenesis"
            className="font-mono uppercase hover:underline"
            style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-ink-70)" }}
          >
            ← phase I
          </Link>
          <div
            className="font-mono uppercase"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              color: "var(--color-ink-50)",
              border: "1px solid var(--color-paper-85)",
              padding: "0.15rem 0.4rem",
            }}
            title="Next sub-protocol pending publication"
          >
            1.2 algorithmic nurseries · draft
          </div>
        </nav>
      </article>
    </PageFrame>
  );
}

/** Numbered sub-section heading: "1.1.1 — Window of Enrollment", small
    caps mono code + serif title, single-rule underline. */
function SectionHead({ code, title }: { code: string; title: string }) {
  return (
    <div
      className="mb-md flex items-baseline gap-sm pb-xs"
      style={{ borderBottom: "1px solid var(--color-ink)" }}
    >
      <span
        className="font-mono font-bold tabular-nums"
        style={{ fontSize: "0.85rem", color: "var(--color-oxblood)" }}
      >
        {code}
      </span>
      <span
        className="font-serif font-bold"
        style={{ fontSize: "1rem", color: "var(--color-ink)", letterSpacing: "0.02em" }}
      >
        {title}
      </span>
    </div>
  );
}

function CradleAnchoringSchematic() {
  const stroke = "var(--color-ink)";
  const strokeLight = "var(--color-ink-70)";
  const fill = "var(--color-paper)";
  const accent = "var(--color-oxblood)";

  return (
    <svg
      viewBox="0 0 600 300"
      role="img"
      aria-label="Cradle Anchoring schematic"
      className="w-full"
      style={{ color: "var(--color-ink)" }}
    >
      <g>
        <circle cx="60" cy="140" r="40" fill={fill} stroke={stroke} strokeWidth="1.5" />
        <text x="60" y="146" fontSize="16" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={stroke}>
          subject
        </text>
      </g>

      <line x1="100" y1="140" x2="170" y2="140" stroke={stroke} strokeWidth="1.5" />
      <polygon points="170,136 178,140 170,144" fill={stroke} />

      <g>
        <rect x="180" y="60" width="135" height="170" fill={fill} stroke={stroke} strokeWidth="1.5" />
        <text x="247" y="84" fontSize="14" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={strokeLight} fontWeight="700">
          BIOMETRIC INSTRUMENTS
        </text>
        {[
          "HRB · auscultation",
          "NRS · soft-EEG",
          "VPP · microphone",
          "OTB · IR pupil",
          "GMP · heel-prick",
          "EMP · swab",
        ].map((label, i) => (
          <text key={i} x="192" y={112 + i * 18} fontSize="14" fontFamily="ui-monospace, monospace" fill={stroke}>
            • {label}
          </text>
        ))}
      </g>

      <line x1="320" y1="140" x2="370" y2="140" stroke={stroke} strokeWidth="1.5" />
      <polygon points="370,136 378,140 370,144" fill={stroke} />

      <g>
        <rect x="380" y="105" width="110" height="70" fill={fill} stroke={accent} strokeWidth="2" />
        <text x="435" y="125" fontSize="15" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={accent} fontWeight="700">
          C-ID
        </text>
        <text x="435" y="143" fontSize="14" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={stroke}>
          provisioning
        </text>
        <text x="435" y="161" fontSize="13" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={strokeLight}>
          ≤ 2 sec
        </text>
      </g>

      <line x1="495" y1="140" x2="535" y2="140" stroke={stroke} strokeWidth="1.5" />
      <polygon points="535,136 543,140 535,144" fill={stroke} />

      <g>
        <rect x="535" y="95" width="60" height="90" fill={fill} stroke={stroke} strokeWidth="1.5" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line key={i} x1="544" y1={113 + i * 11} x2="586" y2={113 + i * 11} stroke={strokeLight} strokeWidth="0.5" />
        ))}
        <text x="565" y="200" fontSize="14" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={stroke}>
          ledger
        </text>
      </g>

      <path
        d="M 60 180 Q 60 260 300 260 Q 540 260 540 185"
        fill="none"
        stroke={strokeLight}
        strokeWidth="1"
        strokeDasharray="4 4"
      />
      <polygon points="56,180 60,172 64,180" fill={strokeLight} />
      <text x="300" y="284" fontSize="14" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={strokeLight}>
        subject returned to caregiver; baseline persists in ledger
      </text>
    </svg>
  );
}

function SampleCIDCard() {
  return (
    <div
      className="mx-auto my-md"
      style={{
        width: "20rem",
        border: "1.5px solid var(--color-ink)",
        background: "var(--color-paper-95)",
        padding: "1rem",
        fontFamily: "var(--font-mono)",
      }}
    >
      <div className="flex items-start justify-between mb-sm">
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", color: "var(--color-ink-70)" }}>OHCOSE</div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem", color: "var(--color-ink-70)" }}>Consumer Identity</div>
        </div>
        <div
          className="font-mono uppercase"
          style={{
            background: "var(--color-oxblood)",
            color: "var(--color-paper)",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            padding: "0.15rem 0.35rem",
          }}
        >
          phase I
        </div>
      </div>

      <div
        className="font-bold tabular-nums tracking-wider mt-md"
        style={{ fontSize: "1.1rem", color: "var(--color-ink)" }}
      >
        C-2031-4A7Q-9X02-1A
      </div>

      <div className="grid grid-cols-2 gap-x-md gap-y-xs mt-md" style={{ color: "var(--color-ink-70)" }}>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem" }}>cohort</div>
          <div style={{ color: "var(--color-ink)", fontSize: "0.8rem" }}>2031</div>
        </div>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem" }}>region</div>
          <div style={{ color: "var(--color-ink)", fontSize: "0.8rem" }}>4A</div>
        </div>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem" }}>sequence</div>
          <div style={{ color: "var(--color-ink)", fontSize: "0.8rem" }}>7Q-9X02</div>
        </div>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.7rem" }}>posture</div>
          <div style={{ color: "var(--color-ink)", fontSize: "0.8rem" }}>1A · compliant</div>
        </div>
      </div>
    </div>
  );
}
