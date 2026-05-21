import type { Metadata } from "next";
import { OmegaSerpent } from "../_components/ZineAssets";

export const metadata: Metadata = {
  title: { absolute: "The Apparatus — Ouroboros Life System" },
  description:
    "The Ouroboros Life System. An apparatus in six phases. A closed-loop integrated life-support enclosure for uninterrupted living. Service tiers, OHCOSE service architecture, and fitting consultation.",
  alternates: { canonical: "/chair/the-system" },
  openGraph: {
    title: "The Apparatus — Ouroboros Life System",
    description:
      "A continuous, closed-loop integrated life-support enclosure for uninterrupted living.",
    url: "/chair/the-system",
    type: "website",
  },
};

/**
 * /chair/the-system — the apparatus speaking in its own voice.
 *
 * The zine at /chair is the protest. This page is what's being protested:
 * the Ouroboros Life System as it markets itself. Calm, optimistic,
 * sterile corporate copy. OHCOSE presented as a wellness lifecycle.
 * The Ring presented as a feature set. Three tiers, three pricings.
 * A canonical testimonial. A Schedule Your Fitting CTA.
 *
 * The voice has no awareness of the resistance. There are no zine
 * defacements here. The only acknowledgement of /chair is a single
 * tiny easter-egg link in the footer ("Materials misrepresenting
 * our product? Report here →") — the corporate voice gesturing at
 * what it cannot recognize as critique.
 *
 * Period-appropriate typographic artifacts (the "Goming Screen" /
 * "Wate exration" malformations cited in the archive) appear in
 * a few of the small technical labels — the same registers where
 * the archive locates them.
 */

// Cinematic dark palette — inherits the chair/layout register, but
// without zine pinks and acids. Single restrained accent (ember red).
const BG = "#0a0908";
const BG_SOFT = "#15140f";
const PAPER = "#f0ebe2";
const PAPER_DIM = "#bdb8ae";
const PAPER_FAINT = "#7d7972";
const MUTED = "#5a5650";
const LINE = "rgba(240,235,226,0.10)";
const LINE_SOFT = "rgba(240,235,226,0.06)";
const ACCENT = "#ff3a25"; // ember red, brand accent
const ACCENT_SOFT = "rgba(255,58,37,0.14)";

const SANS = `var(--font-geist), ui-sans-serif, system-ui, sans-serif`;
const MONO = `var(--font-geist-mono), ui-monospace, monospace`;
const ANTON = `var(--font-anton), Impact, sans-serif`;

// ─────────────────────────────────────────────────────────────────────
// PHASES
// ─────────────────────────────────────────────────────────────────────
const PHASES = [
  {
    letter: "O",
    name: "Onboarding",
    window: "days 1–7",
    body:
      "A bonded fitting consultant arrives at the household with the apparatus and the calibration kit. Installation, anchoring, and ring engagement are completed in a single visit. The occupant is seated, ringed, and instated; the household is debriefed. Most occupants report that the first night in the apparatus is the deepest sleep of their adult life.",
  },
  {
    letter: "H",
    name: "Habituation",
    window: "days 8–90",
    body:
      "The occupant acclimates to the apparatus's circadian envelope. Sleep onset, attention rhythm, and gastrointestinal tempo synchronize to the apparatus's operating curve. By day 90, ≈94 % of occupants report that the apparatus has receded from conscious attention. The chair, by design, learns to disappear.",
  },
  {
    letter: "C",
    name: "Calibration",
    window: "months 4–12",
    body:
      "The affective-feedback subsystem tunes its prompts and rewards to the occupant's measured response profile. The productivity-output envelope is benchmarked and the tier-appropriate work surface is provisioned. By the end of this phase, the apparatus's behavior is indistinguishable from the occupant's intention.",
  },
  {
    letter: "O",
    name: "Occupancy",
    window: "year 2 onward",
    body:
      "The core service phase. The occupant inhabits the apparatus continuously. Productive output, biometric data, and content engagement are processed through the Ring without interruption. The occupant does not need to leave the chair to live within it. This phase is open-ended by contract.",
  },
  {
    letter: "S",
    name: "Stewardship",
    window: "late occupancy",
    body:
      "As metabolic and productive output decline with age, the nutritional, pharmacological, and ambient-environment subsystems adjust to preserve occupancy comfort. The Stewardship phase is, by service contract, of indefinite duration. No occupant has ever been asked to leave.",
  },
  {
    letter: "E",
    name: "Estate",
    window: "post-occupancy",
    body:
      "On cessation of biological function, the apparatus's data record and productivity profile transfer to the occupant's designated inheritor under the Estate protocol. Eternal-tier configurations remain active for an additional 99 fiscal years, ensuring uninterrupted brand-partner continuity.",
  },
];

// ─────────────────────────────────────────────────────────────────────
// RING SUBSYSTEMS
// ─────────────────────────────────────────────────────────────────────
const RING_SUBSYSTEMS = [
  {
    name: "Nutritional Loop",
    code: "RNG-01",
    body:
      "Continuous parenteral nutrition. Macronutrient ratios adjust in real time to the occupant's biometric and circadian profile. Solid-food requests are honored as a luxury supplement; the Ring handles preparation, delivery, and tray retraction.",
  },
  {
    name: "Hydration & Pharmacology",
    code: "RNG-02",
    body:
      "Continuous hydration with calibrated electrolyte balance. Pharmacological adjuncts — anxiolytics, attention enhancers, mood stabilizers, sleep onset agents — are dispensed in measured response to the occupant's affective state.",
    finePrint: "Panitation & Chemical Stimirutns module · class III medical device",
  },
  {
    name: "Continuous Comfort Line",
    code: "RNG-03",
    body:
      "The apparatus's discreet sanitation interface. No occupant action is required. Service intervals are scheduled silently; the occupant is rarely aware of them.",
    finePrint: "Wate exration tie-in · municipal-grade",
  },
  {
    name: "Productivity Feedback",
    code: "RNG-04",
    body:
      "A high-resolution work surface, integrated affective monitoring, and a neural-feedback overlay (Pro tier and above). The terminal produces continuous economic output, metered against the occupant's service contract. Output above the metered baseline accrues to the occupant as service-credit.",
    finePrint: "Goming Screen v4.2 · 144 Hz · low-blue mode",
  },
  {
    name: "Affective Monitoring",
    code: "RNG-05",
    body:
      "Continuous monitoring of facial micro-expression, vocal stress, heart-rate variability, galvanic skin response, and pupillometric signal. These inputs modulate ambient environment, content delivery, and pharmacological dosing — automatically, without requiring the occupant to articulate a preference.",
    finePrint: "Mobility Sensors (O₂ Senulus I) · IEC 60601-1 conformant",
  },
];

// ─────────────────────────────────────────────────────────────────────
// TIERS
// ─────────────────────────────────────────────────────────────────────
const TIERS = [
  {
    name: "Essential",
    sub: "Continuous life-support. Foundational comfort.",
    price: "from $84,000",
    monthly: "or $1,440/mo · financed",
    features: [
      "Full OHCOSE service architecture",
      "Five-subsystem Ring",
      "Standard content envelope",
      "Estate-phase contract: 7 years",
      "Cohort placement: standard intake",
    ],
    cta: "Schedule your fitting",
  },
  {
    name: "Pro",
    sub: "Productivity-grade. For the occupant who continues to contribute.",
    price: "from $148,000",
    monthly: "or $2,560/mo · financed",
    features: [
      "All Essential features",
      "Neural-feedback work terminal",
      "Expanded content envelope (Tier-2 content access)",
      "Productivity-output revenue share (8 %)",
      "Estate-phase contract: 25 years",
      "Cohort placement: priority intake",
    ],
    cta: "Schedule your fitting",
    featured: true,
  },
  {
    name: "Eternal",
    sub: "Post-mortem continuity. By invitation.",
    price: "pricing on request",
    monthly: "by invitation only",
    features: [
      "All Pro features",
      "Post-mortem data continuity",
      "Estate-phase contract: 99 fiscal years",
      "Brand-partner profile activation",
      "Inheritor stewardship protocols",
      "Cohort placement: by appointment",
    ],
    cta: "Apply for consideration",
  },
];

// ─────────────────────────────────────────────────────────────────────
// LINEAGE — the heritage timeline
// Six predecessor iterations the apparatus claims as its design lineage.
// (Future archive reads this lineage as a 2024 retcon. See archive entry
// 2197.18 "The Lineage Claim.")
// ─────────────────────────────────────────────────────────────────────
const LINEAGE = [
  {
    year: "1865",
    name: "The Labor Compensator",
    period: "Reconstruction",
    body:
      "The first iteration. Patented in the years following Emancipation, the Compensator was a hand-cranked mechanical aid to agricultural work, designed to maintain the period's productivity expectations through the labor reorganization that period required. The machine assisted; the worker remained external to it.",
  },
  {
    year: "1900",
    name: "The Efficiency Enhancer",
    period: "Second Industrial Revolution",
    body:
      "Mechanized agriculture and human labor combined into a single seated unit. The worker began, for the first time, to inhabit the apparatus for the duration of the shift rather than alongside it. The integration was partial; the cycle remained open at both ends.",
  },
  {
    year: "1925",
    name: "The Dynamic Dynamo",
    period: "Electrification",
    body:
      "The first electrified chair. A workstation integrated into the assembly line, with electrical circuits augmenting the seated worker's reach, speed, and stamina. During the 1930s the Dynamo entered the period's factories at scale; during the 1940s, a field-deployable variant accompanied the wartime infantry.",
  },
  {
    year: "1955",
    name: "The Knowledge Chair",
    period: "Postwar Computing",
    body:
      "The cerebral iteration. Integrated telecommunication, an early data terminal, and a magnetic-tape archive transformed the seated subject from a laborer into an information processor. The 1960s brought domestic adoption; the 1970s networked the chairs into a coordinated grid.",
  },
  {
    year: "1985",
    name: "The Virtual Ouroboros",
    period: "Networked Era",
    body:
      "The first iteration in which the seated subject's physical and digital workspaces converged. The boundary between work and leisure dissolved by design. The Ring's logic — closed-loop integration of every continuous-service function — became visible for the first time, though the implementation remained partial.",
  },
  {
    year: "2024",
    name: "The Ouroboros Life System",
    period: "Present cohort",
    body:
      "The current iteration. Nutritional, hydrational, eliminative, productive, and affective subsystems converge into the Ring. After 160 years of design refinement, the cycle closes. The OLS is the first iteration to make the occupant's session-length open-ended.",
  },
];

// ─────────────────────────────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    quote:
      "I haven't had to stand up in nine months. The Pro tier has changed everything. My productivity is at an all-time high and I genuinely cannot imagine going back.",
    attr: "M.K.",
    tier: "Pro · Cohort 2026.04",
  },
  {
    quote:
      "We were anxious about the household-readiness assessment. Our consultant was kind and very patient. The fitting was finished in four hours. We never looked back.",
    attr: "H. & R.",
    tier: "Essential · Cohort 2025.11",
  },
  {
    quote:
      "Selecting Eternal was the most considered decision of my adult life. I will leave my children my profile — and they will continue to receive the dividends.",
    attr: "Anonymous",
    tier: "Eternal · by invitation",
  },
];

// ─────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────
export default function TheSystem() {
  return (
    <main
      style={{
        position: "relative",
        zIndex: 1,
        maxWidth: 1280,
        margin: "0 auto",
        padding: "3rem 5vw 0",
      }}
    >
      {/* TOP NAV */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "6rem",
          paddingBottom: "1.25rem",
          borderBottom: `1px solid ${LINE}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <OmegaSerpent size={28} color={PAPER} />
          <span
            style={{
              fontFamily: MONO,
              fontSize: 11,
              letterSpacing: "0.22em",
              color: PAPER,
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Ouroboros Industries · OIS
          </span>
        </div>
        <a
          href="#fitting"
          style={{
            fontFamily: MONO,
            fontSize: 11,
            letterSpacing: "0.18em",
            color: ACCENT,
            textTransform: "uppercase",
            textDecoration: "none",
            border: `1px solid ${ACCENT}`,
            padding: "8px 14px",
          }}
        >
          Schedule a fitting
        </a>
      </nav>

      {/* HERO */}
      <header
        style={{
          paddingBottom: "6rem",
          borderBottom: `1px solid ${LINE}`,
          marginBottom: "5rem",
        }}
      >
        <p
          style={{
            fontFamily: MONO,
            fontSize: 11,
            letterSpacing: "0.28em",
            color: ACCENT,
            textTransform: "uppercase",
            margin: 0,
            fontWeight: 600,
          }}
        >
          The Ouroboros Life System · Catalog Ω.026
        </p>
        <h1
          style={{
            fontFamily: ANTON,
            fontSize: "clamp(72px, 11vw, 200px)",
            color: PAPER,
            lineHeight: 0.86,
            letterSpacing: "-0.02em",
            margin: "1.2rem 0 0",
            textTransform: "uppercase",
          }}
        >
          An apparatus<br />
          in six phases.
        </h1>
        <p
          style={{
            marginTop: "2.4rem",
            fontFamily: SANS,
            fontSize: "clamp(18px, 1.6vw, 24px)",
            color: PAPER_DIM,
            lineHeight: 1.5,
            maxWidth: "44ch",
            fontWeight: 380,
          }}
        >
          A continuous, closed-loop integrated life-support enclosure for
          uninterrupted living. Fitted to your residence, calibrated to your
          body, scaled to your contribution. Because life should be effortless.
        </p>
        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            flexWrap: "wrap",
            gap: 36,
            alignItems: "baseline",
          }}
        >
          <Stat label="Households fitted" value="248,401" />
          <Stat label="Continuous service envelope" value="99.97 %" />
          <Stat label="Tier-1 + Tier-2 sovereignties" value="44" />
          <Stat label="Operating in cohort" value="2026.05" />
        </div>
      </header>

      {/* THE APPARATUS */}
      <SectionHeader code="§01" name="The Apparatus" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 56,
          alignItems: "start",
          marginBottom: "6rem",
        }}
        className="ols-two-col"
      >
        <div>
          <p style={pStyle}>
            The Ouroboros Life System (OLS) is a single-occupant residential
            apparatus that integrates nutritional, hydrational, eliminative,
            neurological, and productivity-feedback subsystems into one
            ergonomic enclosure. Each unit is manufactured to the occupant&apos;s
            somatometric specifications following an in-home Fitting consultation.
          </p>
          <p style={pStyle}>
            The apparatus operates under the Closed-Loop Standard. Every input
            the occupant requires, and every output the occupant generates, is
            processed within the apparatus&apos;s onboard subsystems. The occupant
            does not need to leave the chair to live within it.
          </p>
          <ul style={{ ...pStyle, paddingLeft: 0, listStyle: "none" }}>
            {[
              ["Operating weight", "380 kg"],
              ["Continuous service envelope", "99.97 % uptime"],
              ["Power draw", "1.8 kW nominal · 4.2 kW peak"],
              ["Drainage interface", "municipal-grade tie-in"],
              ["Floor-load minimum", "390 kg/m²"],
              ["Acoustic profile", "< 32 dB at 1 m"],
            ].map(([k, v]) => (
              <li
                key={k}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: 12,
                  padding: "10px 0",
                  borderBottom: `1px solid ${LINE_SOFT}`,
                  fontFamily: MONO,
                  fontSize: 13,
                  color: PAPER_DIM,
                  letterSpacing: "0.02em",
                }}
              >
                <span style={{ textTransform: "uppercase", letterSpacing: "0.14em", fontSize: 10, color: PAPER_FAINT }}>{k}</span>
                <span style={{ color: PAPER }}>{v}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ChairDiagram />
        </div>
      </div>

      {/* OHCOSE — SIX PHASES */}
      <SectionHeader
        code="§02"
        name="OHCOSE — Six Phases of Care"
        intro="The OHCOSE service architecture organizes the occupant's residence into six continuous phases. Each phase is calibrated to the occupant's measured biometric and productivity profile."
      />

      <RingDiagram />

      <ol
        style={{
          listStyle: "none",
          padding: 0,
          margin: "4rem 0 6rem",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "2.5rem 3rem",
        }}
        className="ols-phases-grid"
      >
        {PHASES.map((p, i) => (
          <li
            key={i}
            style={{
              paddingTop: 18,
              borderTop: `1px solid ${LINE}`,
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 18,
                marginBottom: 14,
              }}
            >
              <span
                style={{
                  fontFamily: ANTON,
                  fontSize: 64,
                  color: ACCENT,
                  lineHeight: 0.9,
                  letterSpacing: "-0.02em",
                }}
              >
                {p.letter}
              </span>
              <div>
                <div
                  style={{
                    fontFamily: ANTON,
                    fontSize: 22,
                    color: PAPER,
                    textTransform: "uppercase",
                    letterSpacing: "0.01em",
                    lineHeight: 1.05,
                  }}
                >
                  {p.name}
                </div>
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 10,
                    letterSpacing: "0.22em",
                    color: PAPER_FAINT,
                    textTransform: "uppercase",
                    marginTop: 4,
                  }}
                >
                  {p.window}
                </div>
              </div>
            </div>
            <p
              style={{
                fontFamily: SANS,
                fontSize: 15,
                lineHeight: 1.6,
                color: PAPER_DIM,
                margin: 0,
              }}
            >
              {p.body}
            </p>
          </li>
        ))}
      </ol>

      {/* THE RING */}
      <SectionHeader
        code="§03"
        name="The Ring — Five Continuous-Service Subsystems"
        intro="The Ouroboros Ring is the apparatus's central integration component. Mounted to the chair's base by adjustable arms, it encircles the occupant at chest height and houses every continuous-service interface the apparatus provides."
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          marginBottom: "6rem",
        }}
        className="ols-two-col"
      >
        {RING_SUBSYSTEMS.map((s, i) => (
          <div
            key={i}
            style={{
              padding: "24px 0 28px",
              borderTop: `1px solid ${LINE}`,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: 12,
              }}
            >
              <h3
                style={{
                  fontFamily: ANTON,
                  fontSize: 22,
                  color: PAPER,
                  textTransform: "uppercase",
                  letterSpacing: "0.01em",
                  margin: 0,
                }}
              >
                {s.name}
              </h3>
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  color: PAPER_FAINT,
                  textTransform: "uppercase",
                }}
              >
                {s.code}
              </span>
            </div>
            <p
              style={{
                fontFamily: SANS,
                fontSize: 15,
                lineHeight: 1.6,
                color: PAPER_DIM,
                margin: 0,
              }}
            >
              {s.body}
            </p>
            {s.finePrint && (
              <p
                style={{
                  marginTop: 12,
                  fontFamily: MONO,
                  fontSize: 10,
                  letterSpacing: "0.16em",
                  color: PAPER_FAINT,
                  textTransform: "uppercase",
                }}
              >
                ↳ {s.finePrint}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* TIERS */}
      <SectionHeader
        code="§04"
        name="Service Tiers"
        intro="Three configurations are offered. All begin with the Fitting; all include the Ring; all enroll the occupant in the OHCOSE service architecture. Configurations differ in productivity-feedback envelope, in tier-appropriate content access, and in the Estate-phase service contract."
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
          marginBottom: "6rem",
        }}
        className="ols-tiers"
      >
        {TIERS.map((t, i) => (
          <div
            key={i}
            style={{
              padding: "28px 26px 32px",
              background: t.featured ? BG_SOFT : "transparent",
              border: t.featured ? `1px solid ${ACCENT}` : `1px solid ${LINE}`,
              position: "relative",
            }}
          >
            {t.featured && (
              <div
                style={{
                  position: "absolute",
                  top: -10,
                  left: 24,
                  background: ACCENT,
                  color: BG,
                  fontFamily: MONO,
                  fontSize: 9,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  padding: "3px 8px",
                }}
              >
                ◆ Most fitted
              </div>
            )}
            <h3
              style={{
                fontFamily: ANTON,
                fontSize: 38,
                color: PAPER,
                textTransform: "uppercase",
                letterSpacing: "0.01em",
                margin: "0 0 6px",
                lineHeight: 0.95,
              }}
            >
              {t.name}
            </h3>
            <p
              style={{
                fontFamily: SANS,
                fontSize: 13,
                color: PAPER_DIM,
                lineHeight: 1.45,
                margin: "0 0 22px",
                minHeight: 38,
              }}
            >
              {t.sub}
            </p>
            <div
              style={{
                fontFamily: MONO,
                fontSize: 16,
                color: PAPER,
                letterSpacing: "0.04em",
              }}
            >
              {t.price}
            </div>
            <div
              style={{
                fontFamily: MONO,
                fontSize: 10,
                letterSpacing: "0.18em",
                color: PAPER_FAINT,
                textTransform: "uppercase",
                marginTop: 4,
                marginBottom: 24,
              }}
            >
              {t.monthly}
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px" }}>
              {t.features.map((f, j) => (
                <li
                  key={j}
                  style={{
                    fontFamily: SANS,
                    fontSize: 13,
                    color: PAPER_DIM,
                    lineHeight: 1.5,
                    padding: "8px 0",
                    borderBottom: `1px solid ${LINE_SOFT}`,
                    display: "flex",
                    gap: 10,
                  }}
                >
                  <span style={{ color: ACCENT, flexShrink: 0 }}>◇</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#fitting"
              style={{
                display: "block",
                fontFamily: MONO,
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                textAlign: "center",
                padding: "12px 14px",
                color: t.featured ? BG : ACCENT,
                background: t.featured ? ACCENT : "transparent",
                border: `1px solid ${ACCENT}`,
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              {t.cta} →
            </a>
          </div>
        ))}
      </div>

      {/* HERITAGE — six iterations across 160 years */}
      <SectionHeader
        code="§05"
        name="Heritage — Six iterations · 160 years"
        intro="The Ouroboros Life System is the seventh iteration of an apparatus our predecessors began designing in 1865. Each generation has solved the integration problem of its period. The OLS solves it for ours."
      />
      <ol
        style={{
          listStyle: "none",
          padding: "0 0 0 28px",
          margin: "0 0 6rem",
          position: "relative",
          borderLeft: `1px solid ${ACCENT_SOFT}`,
        }}
      >
        {LINEAGE.map((l, i) => (
          <li
            key={i}
            style={{
              position: "relative",
              padding: "8px 0 38px",
            }}
          >
            {/* timeline node */}
            <span
              aria-hidden
              style={{
                position: "absolute",
                left: -33,
                top: 16,
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: ACCENT,
                boxShadow: `0 0 0 4px ${BG}`,
              }}
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr",
                gap: 28,
                alignItems: "baseline",
              }}
              className="ols-lineage-row"
            >
              <div>
                <div
                  style={{
                    fontFamily: ANTON,
                    fontSize: 40,
                    color: ACCENT,
                    lineHeight: 0.9,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {l.year}
                </div>
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 9,
                    letterSpacing: "0.22em",
                    color: PAPER_FAINT,
                    textTransform: "uppercase",
                    marginTop: 6,
                  }}
                >
                  {l.period}
                </div>
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: ANTON,
                    fontSize: 24,
                    color: PAPER,
                    textTransform: "uppercase",
                    letterSpacing: "0.01em",
                    margin: "0 0 8px",
                    lineHeight: 1.05,
                  }}
                >
                  {l.name}
                </h3>
                <p
                  style={{
                    fontFamily: SANS,
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: PAPER_DIM,
                    margin: 0,
                    fontWeight: 380,
                  }}
                >
                  {l.body}
                </p>
              </div>
            </div>
          </li>
        ))}
        {/* Glitch artifact — the corporate voice briefly leaks. The
           archive (entry 2197.07 period-typography) treats these
           artifacts as the period's marketing-AI signature. */}
        <li
          aria-hidden
          style={{
            position: "relative",
            padding: "8px 0 0",
          }}
        >
          <span
            style={{
              position: "absolute",
              left: -33,
              top: 16,
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: PAPER_FAINT,
              boxShadow: `0 0 0 4px ${BG}`,
            }}
          />
          <div
            style={{
              fontFamily: MONO,
              fontSize: 11,
              letterSpacing: "0.18em",
              color: PAPER_FAINT,
              textTransform: "uppercase",
              lineHeight: 1.7,
            }}
          >
            [error. system malfunction. reboot required.]
            <br />
            <span style={{ color: PAPER_DIM }}>
              ▸ telemetry restored · continuing
            </span>
          </div>
        </li>
      </ol>

      {/* TESTIMONIALS */}
      <SectionHeader
        code="§06"
        name="What occupants say"
        intro="Reproduced with the occupant's consent. Cohort and tier designations have been verified against the apparatus's onboard service ledger."
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 32,
          marginBottom: "6rem",
        }}
        className="ols-tiers"
      >
        {TESTIMONIALS.map((t, i) => (
          <figure
            key={i}
            style={{
              margin: 0,
              padding: "28px 28px 30px",
              border: `1px solid ${LINE}`,
              background: BG_SOFT,
              position: "relative",
            }}
          >
            <div
              aria-hidden
              style={{
                fontFamily: ANTON,
                fontSize: 64,
                color: ACCENT,
                lineHeight: 0.4,
                marginBottom: 6,
              }}
            >
              &ldquo;
            </div>
            <blockquote
              style={{
                fontFamily: SANS,
                fontSize: 15,
                color: PAPER,
                lineHeight: 1.55,
                margin: "0 0 22px",
                fontStyle: "italic",
                fontWeight: 380,
              }}
            >
              {t.quote}
            </blockquote>
            <figcaption
              style={{
                paddingTop: 16,
                borderTop: `1px solid ${LINE_SOFT}`,
              }}
            >
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 11,
                  color: PAPER,
                  letterSpacing: "0.1em",
                  fontWeight: 600,
                }}
              >
                {t.attr}
              </div>
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  color: PAPER_FAINT,
                  textTransform: "uppercase",
                  marginTop: 3,
                }}
              >
                {t.tier}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* FITTING CTA */}
      <section
        id="fitting"
        style={{
          padding: "4.5rem 3rem 4.8rem",
          background: BG_SOFT,
          border: `1px solid ${ACCENT}`,
          marginBottom: "6rem",
          position: "relative",
        }}
      >
        <p
          style={{
            fontFamily: MONO,
            fontSize: 11,
            letterSpacing: "0.28em",
            color: ACCENT,
            textTransform: "uppercase",
            margin: 0,
            fontWeight: 600,
          }}
        >
          §07 · Schedule your fitting
        </p>
        <h2
          style={{
            fontFamily: ANTON,
            fontSize: "clamp(40px, 5.5vw, 80px)",
            color: PAPER,
            lineHeight: 0.95,
            letterSpacing: "-0.01em",
            textTransform: "uppercase",
            margin: "1rem 0 1.4rem",
          }}
        >
          A bonded consultant will visit<br />
          your residence within seven days.
        </h2>
        <p
          style={{
            fontFamily: SANS,
            fontSize: 17,
            lineHeight: 1.55,
            color: PAPER_DIM,
            maxWidth: "62ch",
            margin: "0 0 2.5rem",
            fontWeight: 380,
          }}
        >
          The Fitting consultation is the precondition of purchase. No
          apparatus is manufactured for an unfitted occupant. The
          consultation runs approximately four hours and is conducted
          entirely on premises.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 28,
            marginBottom: "2.4rem",
          }}
          className="ols-fitting-steps"
        >
          {[
            {
              n: "I",
              t: "Somatometric calibration",
              b: "Postural, dimensional, and biometric measurement of the prospective occupant.",
            },
            {
              n: "II",
              t: "Household-readiness assessment",
              b: "Floor load, electrical, drainage, ambient acoustic, and household compliance environment.",
            },
            {
              n: "III",
              t: "Configuration consultation",
              b: "Tier selection, content envelope, neural-feedback opt-in, Estate protocol designation.",
            },
            {
              n: "IV",
              t: "Cohort placement",
              b: "Application of the deposit and placement in the next available manufacturing cohort.",
            },
          ].map((s, i) => (
            <div key={i}>
              <div
                style={{
                  fontFamily: ANTON,
                  fontSize: 36,
                  color: ACCENT,
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {s.n}
              </div>
              <div
                style={{
                  fontFamily: ANTON,
                  fontSize: 16,
                  color: PAPER,
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                  lineHeight: 1.15,
                  marginBottom: 6,
                }}
              >
                {s.t}
              </div>
              <div
                style={{
                  fontFamily: SANS,
                  fontSize: 13,
                  color: PAPER_DIM,
                  lineHeight: 1.5,
                }}
              >
                {s.b}
              </div>
            </div>
          ))}
        </div>
        <a
          href="mailto:fitting@ois.network"
          style={{
            display: "inline-block",
            fontFamily: MONO,
            fontSize: 12,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            padding: "16px 28px",
            color: BG,
            background: ACCENT,
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Request a consultant →
        </a>
        <p
          style={{
            marginTop: 18,
            fontFamily: MONO,
            fontSize: 9,
            letterSpacing: "0.18em",
            color: PAPER_FAINT,
            textTransform: "uppercase",
            maxWidth: "62ch",
            lineHeight: 1.7,
          }}
        >
          By scheduling, you authorize the consultant to perform the
          household-readiness assessment. Some assessed households are
          determined non-supportive of apparatus installation at the
          consultant&apos;s sole discretion. Deposits in non-supportive
          determinations are not refundable.
        </p>
      </section>

      {/* CORPORATE FOOTER */}
      <footer
        style={{
          paddingTop: "3rem",
          paddingBottom: "5rem",
          borderTop: `1px solid ${LINE}`,
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr",
          gap: 40,
        }}
        className="ols-footer"
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <OmegaSerpent size={26} color={PAPER} />
            <span
              style={{
                fontFamily: ANTON,
                fontSize: 18,
                color: PAPER,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
              }}
            >
              Ouroboros Industries LLC
            </span>
          </div>
          <p
            style={{
              fontFamily: SANS,
              fontSize: 13,
              lineHeight: 1.6,
              color: PAPER_DIM,
              margin: 0,
              fontWeight: 380,
            }}
          >
            11 Cohort Place · Park Slope · NY 11217<br />
            Manufactured under license in the Tier-1 sovereignties.<br />
            The Ouroboros Ring is a registered service mark of Ouroboros
            Industries LLC. The OHCOSE service architecture, the Eternal
            Tier, and the Fitting Ritual are proprietary protocols.
          </p>
        </div>

        <FooterColumn
          title="Service"
          links={[
            ["Schedule a fitting", "#fitting"],
            ["Customer care", "mailto:care@ois.network"],
            ["Service ledger access", "mailto:ledger@ois.network"],
            ["Eternal-tier application", "mailto:eternal@ois.network"],
          ]}
        />

        <FooterColumn
          title="Information"
          links={[
            ["Apparatus specification", "#"],
            ["OHCOSE service architecture", "#"],
            ["Tier comparison", "#"],
            ["Press inquiries", "mailto:press@ois.network"],
            ["Imperial Archive", "/chair/archive"],
          ]}
        />

        {/* The single, easy-to-miss easter-egg link to the zine. The
            corporate voice can only register the zine as a misrepresentation
            to be reported. Clicking the link drops the reader straight into
            the protest. */}
        <p
          style={{
            gridColumn: "1 / -1",
            marginTop: "2.5rem",
            paddingTop: "1.5rem",
            borderTop: `1px solid ${LINE_SOFT}`,
            fontFamily: MONO,
            fontSize: 10,
            letterSpacing: "0.16em",
            color: PAPER_FAINT,
            textTransform: "uppercase",
          }}
        >
          © 2026 Ouroboros Industries LLC · All rights reserved ·
          {" "}
          <a
            href="/chair"
            style={{ color: PAPER_FAINT, textDecoration: "underline" }}
          >
            Materials misrepresenting our product? Report here →
          </a>
        </p>
      </footer>

      {/* Responsive — collapse 2-col / 3-col grids on narrow viewports. */}
      <style>{`
        @media (max-width: 880px) {
          .ols-two-col { grid-template-columns: 1fr !important; gap: 40px !important; }
          .ols-phases-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .ols-tiers { grid-template-columns: 1fr !important; }
          .ols-fitting-steps { grid-template-columns: 1fr 1fr !important; }
          .ols-footer { grid-template-columns: 1fr !important; }
          .ols-lineage-row { grid-template-columns: 1fr !important; gap: 8px !important; }
        }
        @media (max-width: 560px) {
          .ols-fitting-steps { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}

// ─────────────────────────────────────────────────────────────────────
// SUBCOMPONENTS
// ─────────────────────────────────────────────────────────────────────

const pStyle: React.CSSProperties = {
  fontFamily: SANS,
  fontSize: 16,
  lineHeight: 1.65,
  color: PAPER_DIM,
  margin: "0 0 1.2rem",
  fontWeight: 380,
};

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div
        style={{
          fontFamily: ANTON,
          fontSize: 36,
          color: PAPER,
          lineHeight: 1,
          letterSpacing: "-0.01em",
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: MONO,
          fontSize: 9,
          letterSpacing: "0.22em",
          color: PAPER_FAINT,
          textTransform: "uppercase",
          marginTop: 6,
        }}
      >
        {label}
      </div>
    </div>
  );
}

function SectionHeader({
  code,
  name,
  intro,
}: {
  code: string;
  name: string;
  intro?: string;
}) {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <p
        style={{
          fontFamily: MONO,
          fontSize: 11,
          letterSpacing: "0.28em",
          color: ACCENT,
          textTransform: "uppercase",
          margin: 0,
          fontWeight: 600,
        }}
      >
        {code}
      </p>
      <h2
        style={{
          fontFamily: ANTON,
          fontSize: "clamp(32px, 4.4vw, 64px)",
          color: PAPER,
          lineHeight: 0.95,
          letterSpacing: "-0.01em",
          textTransform: "uppercase",
          margin: "0.6rem 0 0",
        }}
      >
        {name}
      </h2>
      {intro && (
        <p
          style={{
            marginTop: "1.3rem",
            fontFamily: SANS,
            fontSize: 16,
            lineHeight: 1.6,
            color: PAPER_DIM,
            maxWidth: "60ch",
            fontWeight: 380,
          }}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>
      <div
        style={{
          fontFamily: MONO,
          fontSize: 10,
          letterSpacing: "0.22em",
          color: PAPER_FAINT,
          textTransform: "uppercase",
          marginBottom: 14,
          fontWeight: 600,
        }}
      >
        {title}
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {links.map(([label, href], i) => (
          <li key={i} style={{ padding: "5px 0" }}>
            <a
              href={href}
              style={{
                fontFamily: SANS,
                fontSize: 13,
                color: PAPER_DIM,
                textDecoration: "none",
                fontWeight: 380,
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// CHAIR DIAGRAM — clean SVG, side-elevation
// ─────────────────────────────────────────────────────────────────────
function ChairDiagram() {
  const stroke = PAPER;
  const dim = PAPER_FAINT;
  const accent = ACCENT;
  return (
    <figure style={{ margin: 0 }}>
      <svg
        viewBox="0 0 520 420"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
        role="img"
        aria-label="Side-elevation schematic of the Ouroboros Life System apparatus"
      >
        {/* Floor line */}
        <line x1="20" y1="400" x2="500" y2="400" stroke={stroke} strokeWidth="1.2" opacity="0.6" />
        {/* Reclined seat */}
        <path
          d="M 60 360 L 60 280 Q 60 260 80 256 L 220 240 L 380 200 Q 410 192 420 218 L 440 280 Q 440 290 430 296 L 110 380 Q 80 388 70 372 Z"
          fill="none"
          stroke={stroke}
          strokeWidth="1.4"
        />
        {/* Headrest */}
        <ellipse cx="395" cy="200" rx="36" ry="18" fill="none" stroke={stroke} strokeWidth="1.2" />
        {/* Ring (at chest height) */}
        <ellipse
          cx="290"
          cy="232"
          rx="86"
          ry="22"
          fill="none"
          stroke={accent}
          strokeWidth="1.6"
        />
        <ellipse
          cx="290"
          cy="232"
          rx="86"
          ry="22"
          fill="none"
          stroke={accent}
          strokeWidth="0.8"
          strokeDasharray="2 4"
          opacity="0.6"
          transform="rotate(8 290 232)"
        />
        {/* Work terminal */}
        <rect
          x="320"
          y="140"
          width="120"
          height="76"
          fill="none"
          stroke={stroke}
          strokeWidth="1.2"
        />
        <line x1="320" y1="216" x2="370" y2="232" stroke={stroke} strokeWidth="0.8" />
        {/* Tubing — feed-in */}
        <path
          d="M 30 200 Q 80 220 200 232"
          fill="none"
          stroke={accent}
          strokeWidth="1.2"
          opacity="0.85"
        />
        <path
          d="M 30 230 Q 80 250 200 240"
          fill="none"
          stroke={accent}
          strokeWidth="1.2"
          opacity="0.85"
        />
        {/* Drainage — feed-out */}
        <path
          d="M 220 380 Q 240 395 280 395 L 480 395"
          fill="none"
          stroke={accent}
          strokeWidth="1.2"
          opacity="0.6"
        />
        {/* Base */}
        <rect x="120" y="380" width="200" height="14" fill={stroke} opacity="0.8" />

        {/* LABELS */}
        {[
          { x: 320, y: 124, t: "Goming Screen" },
          { x: 290, y: 270, t: "Ouroboroes Ring" },
          { x: 28, y: 192, t: "Nutritional Loop" },
          { x: 28, y: 222, t: "Hydration ↦" },
          { x: 224, y: 414, t: "Wate exration tie-in" },
          { x: 395, y: 178, t: "Mobility Sensors (O₂ Senulus I)" },
        ].map((l, i) => (
          <text
            key={i}
            x={l.x}
            y={l.y}
            fontFamily={MONO}
            fontSize="9"
            fill={dim}
            letterSpacing="0.12em"
            textAnchor={l.x < 80 ? "start" : l.x > 380 ? "middle" : "middle"}
            style={{ textTransform: "uppercase" } as React.CSSProperties}
          >
            {l.t.toUpperCase()}
          </text>
        ))}

        {/* Connectors from labels to features */}
        <line x1="320" y1="128" x2="380" y2="140" stroke={dim} strokeWidth="0.6" />
        <line x1="290" y1="258" x2="290" y2="232" stroke={dim} strokeWidth="0.6" />
        <line x1="395" y1="183" x2="395" y2="200" stroke={dim} strokeWidth="0.6" />
      </svg>
      <figcaption
        style={{
          marginTop: 14,
          fontFamily: MONO,
          fontSize: 10,
          letterSpacing: "0.18em",
          color: PAPER_FAINT,
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        Fig. 1 · OLS apparatus · side elevation · not to scale
      </figcaption>
    </figure>
  );
}

// ─────────────────────────────────────────────────────────────────────
// OHCOSE RING DIAGRAM — six-phase circular flow
// ─────────────────────────────────────────────────────────────────────
function RingDiagram() {
  const cx = 250;
  const cy = 250;
  const r = 170;
  // Six positions around the ring, starting at top
  const phases = PHASES.map((p, i) => {
    const angle = (i / PHASES.length) * Math.PI * 2 - Math.PI / 2;
    return {
      ...p,
      x: cx + Math.cos(angle) * r,
      y: cy + Math.sin(angle) * r,
      angle,
    };
  });

  return (
    <figure
      style={{ margin: "0 auto 2rem", maxWidth: 540, padding: "0 1rem" }}
    >
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
        role="img"
        aria-label="Diagram of the OHCOSE six-phase service architecture"
      >
        {/* Outer ring */}
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke={PAPER_FAINT}
          strokeWidth="1"
          opacity="0.45"
        />
        {/* Inner ring (apparatus boundary) */}
        <circle
          cx={cx}
          cy={cy}
          r={r - 38}
          fill="none"
          stroke={PAPER_FAINT}
          strokeWidth="0.6"
          opacity="0.25"
          strokeDasharray="2 4"
        />
        {/* Center serpent symbol */}
        <text
          x={cx}
          y={cy + 8}
          textAnchor="middle"
          fontFamily={ANTON}
          fontSize="46"
          fill={ACCENT}
        >
          Ω
        </text>
        <text
          x={cx}
          y={cy + 36}
          textAnchor="middle"
          fontFamily={MONO}
          fontSize="8"
          fill={PAPER_FAINT}
          letterSpacing="0.22em"
        >
          OHCOSE
        </text>

        {/* Six phase nodes */}
        {phases.map((p, i) => {
          // arrow segment to next
          const next = phases[(i + 1) % phases.length];
          // small inward offset so the arrow doesn't overlap nodes
          const midAngle = (p.angle + next.angle) / 2;
          const ax1 = cx + Math.cos(p.angle + 0.32) * r;
          const ay1 = cy + Math.sin(p.angle + 0.32) * r;
          const ax2 = cx + Math.cos(next.angle - 0.32) * r;
          const ay2 = cy + Math.sin(next.angle - 0.32) * r;
          return (
            <g key={i}>
              {/* arc segment showing flow */}
              <path
                d={`M ${ax1} ${ay1} A ${r} ${r} 0 0 1 ${ax2} ${ay2}`}
                fill="none"
                stroke={ACCENT}
                strokeWidth="0.8"
                opacity="0.5"
              />
              {/* node */}
              <circle cx={p.x} cy={p.y} r="22" fill={BG} stroke={ACCENT} strokeWidth="1.2" />
              <text
                x={p.x}
                y={p.y + 7}
                textAnchor="middle"
                fontFamily={ANTON}
                fontSize="22"
                fill={PAPER}
              >
                {p.letter}
              </text>
              {/* phase name */}
              <text
                x={p.x}
                y={p.y + (p.y < cy ? -32 : 44)}
                textAnchor="middle"
                fontFamily={MONO}
                fontSize="9"
                letterSpacing="0.2em"
                fill={PAPER_DIM}
                style={{ textTransform: "uppercase" } as React.CSSProperties}
              >
                {p.name.toUpperCase()}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption
        style={{
          marginTop: 10,
          fontFamily: MONO,
          fontSize: 10,
          letterSpacing: "0.18em",
          color: PAPER_FAINT,
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        Fig. 2 · OHCOSE service architecture · six continuous phases
      </figcaption>
    </figure>
  );
}
