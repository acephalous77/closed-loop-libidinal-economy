import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1.1 — Biometric Registration & Cradle Anchoring",
  description:
    "OHCOSE Phase I, Sub-Protocol 1.1. Assignment of the C-ID. Capture of newborn neural, biometric, and genetic baselines. Anchoring of the subject to the Office's ledger.",
  alternates: {
    canonical: "/ohcose/i-ontogenesis/cradle-anchoring",
  },
};

export default function CradleAnchoring() {
  return (
    <main className="min-h-screen px-sm pt-md pb-2xl">
      {/* ============= DOCUMENT HEADER ============= */}
      <header
        className="mx-auto max-w-[var(--container-page)] pb-md"
        style={{ borderBottom: "2px solid var(--color-ink)" }}
      >
        <div className="flex items-center justify-between mb-md">
          <div className="ohcose-docnum">
            OHCOSE / PHASE-I / SP-1.1 / 2026.05
          </div>
          <div className="ohcose-stamp">for public intake</div>
        </div>

        <nav className="ohcose-docnum mb-sm flex flex-wrap gap-x-md">
          <a
            href="/ohcose"
            className="hover:underline"
            style={{ color: "var(--color-ink-70)" }}
          >
            ← schedule of phases
          </a>
          <a
            href="/ohcose/i-ontogenesis"
            className="hover:underline"
            style={{ color: "var(--color-ink-70)" }}
          >
            ← phase I
          </a>
        </nav>

        <p className="ohcose-docnum mb-xs">
          sub-protocol 1.1
        </p>
        <h1
          className="font-mono font-bold text-xl tracking-tight leading-tight max-w-[40rem]"
          style={{ color: "var(--color-ink)" }}
        >
          Biometric Registration &amp; Cradle Anchoring
        </h1>
        <p
          className="text-md mt-sm leading-snug max-w-[40rem]"
          style={{ color: "var(--color-ink-70)" }}
        >
          Assignment of the Consumer Identity (C-ID). Capture of newborn
          neural, biometric, and genetic baselines. Anchoring of the subject
          to the Office's ledger of souls.
        </p>
      </header>

      <article className="mx-auto max-w-[var(--measure)] mt-2xl space-y-2xl">
        {/* ============= 1.1.1 ============= */}
        <section>
          <div className="ohcose-section-head">
            1.1.1 — Window of Enrollment
          </div>
          <div className="text-base leading-snug space-y-md">
            <p style={{ color: "var(--color-ink-90)" }}>
              Cradle anchoring shall be performed within the first
              forty-eight (48) hours of clinical viability. The window is
              non-negotiable. Subjects not enrolled within the window are
              reclassified as unregistered dependents and the Office is
              compelled to initiate Form 12-D (Emergency Backdated Anchoring),
              a process that the Office has found to introduce avoidable
              friction at every subsequent phase boundary.
            </p>
            <p style={{ color: "var(--color-ink-90)" }}>
              In standard practice, anchoring is performed in the delivery
              ward by the attending obstetric team's bonded data-officer, who
              will be present at the moment of clinical viability with the
              registration cart already provisioned.
            </p>
          </div>
        </section>

        {/* ============= 1.1.2 — DATA CAPTURE TABLE ============= */}
        <section>
          <div className="ohcose-section-head">
            1.1.2 — Baseline Data Capture
          </div>
          <p
            className="text-base leading-snug mb-md"
            style={{ color: "var(--color-ink-90)" }}
          >
            The following measurements shall be acquired in sequence. Each
            measurement becomes the lifelong reference point against which
            all subsequent observations are normalized. Caregivers may
            request a copy of the baselines on Form 1-B; the Office cautions
            that the data is technical and is not intended for casual review.
          </p>

          <table
            className="w-full font-mono text-sm border-collapse"
            style={{ borderColor: "var(--color-paper-85)" }}
          >
            <thead>
              <tr style={{ borderBottom: "1.5px solid var(--color-ink)" }}>
                <th
                  className="text-left p-xs uppercase tracking-wider text-xs"
                  style={{ color: "var(--color-ink-70)" }}
                >
                  ref.
                </th>
                <th
                  className="text-left p-xs uppercase tracking-wider text-xs"
                  style={{ color: "var(--color-ink-70)" }}
                >
                  measurement
                </th>
                <th
                  className="text-left p-xs uppercase tracking-wider text-xs"
                  style={{ color: "var(--color-ink-70)" }}
                >
                  instrument
                </th>
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
                <tr
                  key={ref}
                  style={{ borderBottom: "1px solid var(--color-paper-85)" }}
                >
                  <td className="p-xs" style={{ color: "var(--color-ink-50)" }}>
                    {ref}
                  </td>
                  <td className="p-xs" style={{ color: "var(--color-ink-90)" }}>
                    {name}
                  </td>
                  <td className="p-xs" style={{ color: "var(--color-ink-70)" }}>
                    {inst}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p
            className="text-xs mt-sm leading-snug"
            style={{ color: "var(--color-ink-50)" }}
          >
            Total acquisition time: approximately 14 minutes. Subject is
            returned to the caregiver immediately upon completion.
          </p>
        </section>

        {/* ============= 1.1.3 — DATA FLOW VISUALIZATION ============= */}
        <section>
          <div className="ohcose-section-head">
            1.1.3 — Anchoring Schematic
          </div>
          <p
            className="text-base leading-snug mb-md"
            style={{ color: "var(--color-ink-90)" }}
          >
            Captured measurements traverse the path below in less than two
            seconds. The Consumer Identity is provisioned, the lifecycle
            ledger entry is created, and the subject's baseline payload is
            replicated across the Office's regional data nodes before the
            anchoring procedure terminates.
          </p>

          <CradleAnchoringSchematic />

          <p
            className="ohcose-docnum mt-sm text-center"
            style={{ color: "var(--color-ink-50)" }}
          >
            Fig. 1.1.A — Cradle Anchoring data flow (simplified)
          </p>
        </section>

        {/* ============= 1.1.4 — C-ID FORMAT ============= */}
        <section>
          <div className="ohcose-section-head">
            1.1.4 — Consumer Identity Format
          </div>
          <div className="text-base leading-snug space-y-md">
            <p style={{ color: "var(--color-ink-90)" }}>
              The C-ID is a sixteen-character alphanumeric token of the form{" "}
              <span className="font-mono text-sm" style={{ color: "var(--color-ink)" }}>
                C-2031-XXXX-XXXX-CX
              </span>
              . The first four characters encode the cohort year of the
              subject's enrollment. The next eight encode regional anchor and
              sequence position. The terminal pair encodes the active phase
              and the subject's compliance posture. The C-ID is permanent
              and cannot be reassigned, modified, or surrendered. It survives
              the subject by ninety-nine (99) standard fiscal years per
              Phase VII Annex A.
            </p>
            <SampleCIDCard />
            <p
              className="text-xs"
              style={{ color: "var(--color-ink-50)" }}
            >
              Sample Consumer Identity card. Actual cards are issued in
              tamper-evident polycarbonate at the conclusion of the Phase I
              week-1 administrative touch-point.
            </p>
          </div>
        </section>

        {/* ============= 1.1.5 — CAREGIVER NOTE ============= */}
        <section>
          <div className="ohcose-section-head">
            1.1.5 — Note to the Caregiver
          </div>
          <div className="text-base leading-snug space-y-md">
            <p style={{ color: "var(--color-ink-90)" }}>
              The Office understands that the moment of clinical viability is
              an occasion of significant affective intensity for the
              caregiver. Cradle anchoring has been engineered to integrate
              into that affective interval without disturbance. The
              data-officer's presence is calibrated to be informational and
              warm. The instruments are designed to evoke confidence in the
              subject's lifelong infrastructure rather than apprehension.
            </p>
            <p style={{ color: "var(--color-ink-90)" }}>
              Caregivers who find themselves nonetheless apprehensive are
              encouraged to file Form 3-K (Caregiver Emotional Status
              Report), which will be reviewed by the Phase-I affective
              support team and may, where indicated, result in a
              supplementary calibration session.
            </p>
          </div>
        </section>

        {/* ============= NEXT ============= */}
        <nav
          className="pt-md flex items-center justify-between gap-md"
          style={{ borderTop: "1px solid var(--color-paper-85)" }}
        >
          <a
            href="/ohcose/i-ontogenesis"
            className="font-mono text-xs hover:underline"
            style={{ color: "var(--color-ink-70)" }}
          >
            ← phase I
          </a>
          <div
            className="ohcose-stamp"
            style={{ opacity: 0.5 }}
            title="Next sub-protocol pending publication"
          >
            1.2 algorithmic nurseries — draft
          </div>
        </nav>
      </article>
    </main>
  );
}

/**
 * Cradle Anchoring data-flow schematic. Built in SVG for crispness at
 * any zoom; uses the OHCOSE palette via CSS variables on currentColor /
 * stroke. Reads left-to-right: subject → instruments → C-ID provisioning
 * → ledger → return-to-caregiver. The closed loop on the right edge
 * indicates the Office's persistence of the data baseline.
 */
function CradleAnchoringSchematic() {
  // Style helpers — uses inline style to read the OHCOSE-scoped CSS
  // variables (the SVG inherits color through currentColor on stroke).
  const stroke = "var(--color-ink)";
  const strokeLight = "var(--color-ink-70)";
  const fill = "var(--color-paper)";
  const accent = "var(--color-oxblood)";

  return (
    <svg
      viewBox="0 0 600 240"
      role="img"
      aria-label="Cradle Anchoring schematic: subject to biometric instruments to C-ID provisioning to ledger, with persistence loop"
      className="w-full"
      style={{ color: "var(--color-ink)" }}
    >
      {/* Subject node */}
      <g>
        <circle cx="60" cy="120" r="36" fill={fill} stroke={stroke} strokeWidth="1.5" />
        <text
          x="60"
          y="124"
          fontSize="11"
          fontFamily="ui-monospace, monospace"
          textAnchor="middle"
          fill={stroke}
        >
          subject
        </text>
      </g>

      {/* Arrow 1 */}
      <line x1="100" y1="120" x2="170" y2="120" stroke={stroke} strokeWidth="1.5" />
      <polygon points="170,116 178,120 170,124" fill={stroke} />

      {/* Instruments cluster */}
      <g>
        <rect x="180" y="60" width="120" height="120" fill={fill} stroke={stroke} strokeWidth="1.5" />
        <text x="240" y="80" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={strokeLight}>
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
          <text
            key={i}
            x="190"
            y={100 + i * 12}
            fontSize="9"
            fontFamily="ui-monospace, monospace"
            fill={stroke}
          >
            • {label}
          </text>
        ))}
      </g>

      {/* Arrow 2 */}
      <line x1="305" y1="120" x2="365" y2="120" stroke={stroke} strokeWidth="1.5" />
      <polygon points="365,116 373,120 365,124" fill={stroke} />

      {/* C-ID Provisioning */}
      <g>
        <rect x="375" y="92" width="100" height="56" fill={fill} stroke={accent} strokeWidth="2" />
        <text x="425" y="110" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={accent} fontWeight="700">
          C-ID
        </text>
        <text x="425" y="124" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={stroke}>
          provisioning
        </text>
        <text x="425" y="140" fontSize="8" fontFamily="ui-monospace, monospace" textAnchor="middle" fill={strokeLight}>
          ≤ 2 sec
        </text>
      </g>

      {/* Arrow 3 */}
      <line x1="480" y1="120" x2="540" y2="120" stroke={stroke} strokeWidth="1.5" />
      <polygon points="540,116 548,120 540,124" fill={stroke} />

      {/* Ledger node */}
      <g>
        <rect x="540" y="84" width="55" height="72" fill={fill} stroke={stroke} strokeWidth="1.5" />
        {/* Ledger lines */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line
            key={i}
            x1="548"
            y1={100 + i * 10}
            x2="588"
            y2={100 + i * 10}
            stroke={strokeLight}
            strokeWidth="0.5"
          />
        ))}
        <text
          x="567"
          y="172"
          fontSize="9"
          fontFamily="ui-monospace, monospace"
          textAnchor="middle"
          fill={stroke}
        >
          ledger
        </text>
      </g>

      {/* Return arc — subject back to caregiver */}
      <path
        d="M 60 156 Q 60 220 300 220 Q 540 220 540 156"
        fill="none"
        stroke={strokeLight}
        strokeWidth="1"
        strokeDasharray="4 4"
      />
      <polygon points="56,156 60,148 64,156" fill={strokeLight} />
      <text
        x="300"
        y="234"
        fontSize="9"
        fontFamily="ui-monospace, monospace"
        textAnchor="middle"
        fill={strokeLight}
      >
        subject returned to caregiver; baseline persists in ledger
      </text>
    </svg>
  );
}

/**
 * Sample C-ID card mockup — institutional ID card visual presented
 * inline in the prose to make the C-ID format concrete. Pure CSS,
 * no image; renders crisp at any size.
 */
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
          <div
            className="text-xs uppercase tracking-wider"
            style={{ color: "var(--color-ink-70)" }}
          >
            OHCOSE
          </div>
          <div
            className="text-xs uppercase tracking-wider"
            style={{ color: "var(--color-ink-70)" }}
          >
            Consumer Identity
          </div>
        </div>
        <div className="ohcose-stamp" style={{ fontSize: "0.55rem", padding: "0.15rem 0.35rem" }}>
          phase I
        </div>
      </div>

      <div
        className="text-md font-bold tabular-nums tracking-wider mt-md"
        style={{ color: "var(--color-ink)" }}
      >
        C-2031-4A7Q-9X02-1A
      </div>

      <div
        className="grid grid-cols-2 gap-x-md gap-y-xs mt-md text-xs"
        style={{ color: "var(--color-ink-70)" }}
      >
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.6rem" }}>
            cohort
          </div>
          <div style={{ color: "var(--color-ink)" }}>2031</div>
        </div>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.6rem" }}>
            region
          </div>
          <div style={{ color: "var(--color-ink)" }}>4A</div>
        </div>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.6rem" }}>
            sequence
          </div>
          <div style={{ color: "var(--color-ink)" }}>7Q-9X02</div>
        </div>
        <div>
          <div className="uppercase tracking-wider" style={{ fontSize: "0.6rem" }}>
            posture
          </div>
          <div style={{ color: "var(--color-ink)" }}>1A · compliant</div>
        </div>
      </div>
    </div>
  );
}
