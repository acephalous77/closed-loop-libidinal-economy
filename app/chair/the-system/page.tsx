import type { Metadata } from "next";
import { OmegaSerpent } from "../_components/ZineAssets";

export const metadata: Metadata = {
  title: { absolute: "The Apparatus — Ouroboros Life System" },
  description:
    "The Ouroboros Life System operates a closed-loop libidinal economy at the scale of a single household. We use Adnan Selimović's term in its precise sense and have, since 2024, adopted his vocabulary as our own.",
  alternates: { canonical: "/chair/the-system" },
  openGraph: {
    title: "The Apparatus — Ouroboros Life System",
    description:
      "A self-constituted apparatus. Named in the terms by which it is critiqued.",
    url: "/chair/the-system",
    type: "website",
  },
};

/**
 * /chair/the-system — the brochure rebuilt.
 *
 * Earlier version: a generic luxury-wellness brochure, all euphemism,
 * with the apparatus pretending to be a comfort product. The
 * essay at /chair has since been written. This is the brochure that
 * has read the essay.
 *
 * The new voice is self-constituted and self-identified: the apparatus
 * names itself as an apparatus, openly cites Selimović's vocabulary as
 * its operational lexicon, and presents Selimović's critique as its
 * own theoretical foundation. The brochure does not apologise; it does
 * not euphemise; it does not pretend the trade is symmetrical. The
 * apparatus has read what we have written about it and is now selling
 * the reading.
 *
 * Visual register inherits the previous brochure (cinematic dark,
 * Anton display, single ember-red accent, mono fine print) — the
 * apparatus presents itself with the same institutional polish. What
 * has changed is what the polish is saying.
 *
 * Period-typography easter eggs ("Goming Screen", "Wate exration",
 * "Panitation & Chemical Stimirutns", "Mobility Sensors O₂ Senulus I")
 * remain — the archive at /chair/archive/period-typography reads
 * these as the apparatus's marketing-AI signature.
 */

// Clinical white showroom palette. The brochure opts up from the
// layout's cream into pure white — the apparatus presenting itself
// in luxury-product-catalog register. Deep blueprint navy is the
// brand accent, used for the omega serpent, the section codes, the
// CTA, and the technical schematics.
const BG = "#ffffff";              // showroom white
const BG_SOFT = "#f4f4f6";         // panel / card slight gray
const PAPER = "#0a0a0a";           // near-black foreground
const PAPER_DIM = "#3a3a3a";       // dim foreground
const PAPER_FAINT = "#7a7a7a";     // faint foreground
const MUTED = "#a8a8a8";           // muted
const LINE = "rgba(10,10,10,0.10)";
const LINE_SOFT = "rgba(10,10,10,0.04)";
const ACCENT = "#0a1d3a";          // blueprint navy
const ACCENT_SOFT = "rgba(10,29,58,0.06)";

const SANS = `var(--font-geist), ui-sans-serif, system-ui, sans-serif`;
const MONO = `var(--font-geist-mono), ui-monospace, monospace`;
const ANTON = `var(--font-anton), Impact, sans-serif`;

// ─────────────────────────────────────────────────────────────────────
// PHASES — OHCOSE
// ─────────────────────────────────────────────────────────────────────
const PHASES = [
  {
    letter: "O",
    name: "Onboarding",
    window: "days 1–7",
    body:
      "A bonded fitting consultant arrives at the household with the apparatus and the calibration kit. Installation, anchoring, and ring engagement complete in a single visit. The occupant is seated, ringed, and instated. The household is debriefed. The first night in the apparatus is, for most occupants, the deepest sleep of their adult life — a fact we report without comment.",
  },
  {
    letter: "H",
    name: "Habituation",
    window: "days 8–90",
    body:
      "The occupant's circadian and metabolic rhythms acclimate to the apparatus's operating envelope. Sleep onset, attention rhythm, and gastrointestinal tempo synchronise to the apparatus's curve. By day 90, approximately 94% of occupants report that the apparatus has receded from conscious attention. This is the intended condition.",
  },
  {
    letter: "C",
    name: "Calibration",
    window: "months 4–12",
    body:
      "The Biometric Integration tunes the Content Stream, the Achievement Acknowledgment Cycle, and the pharmacological adjuncts to the occupant's measured response profile. The productivity envelope is benchmarked. By the end of this phase, the apparatus's behaviour is, by the occupant's own account, indistinguishable from the occupant's intention.",
  },
  {
    letter: "O",
    name: "Occupancy",
    window: "year 2 onward",
    body:
      "The steady state. The occupant inhabits the apparatus continuously. Productive output, biometric reads, and content engagement route through the Service Ledger without interruption. This phase is open-ended by contract. Most occupants never leave it.",
  },
  {
    letter: "S",
    name: "Stewardship",
    window: "late occupancy",
    body:
      "As metabolic and productive output decline with age, the apparatus's nutritional, pharmacological, and ambient subsystems adjust to preserve continuous occupancy. The Stewardship phase is, by service contract, of indefinite duration. No occupant in our recorded history has been asked to leave.",
  },
  {
    letter: "E",
    name: "Estate",
    window: "post-occupancy",
    body:
      "On cessation of the occupant's biological function, the apparatus's data record and productivity profile remain active under the Estate protocol. The Service Ledger is retained, queried, and licensed to brand partners for the duration of the tier's contractual term. Eternal-tier configurations remain operational for 99 fiscal years.",
  },
];

// ─────────────────────────────────────────────────────────────────────
// SUBSYSTEMS — the seven, in our naming and in Selimović's
// ─────────────────────────────────────────────────────────────────────
const SUBSYSTEMS = [
  {
    num: "01",
    house: "The Content Stream",
    canonical: "Desire Engines",
    code: "RNG-01 · CS",
    body:
      "The apparatus's primary content surface. The Stream delivers material to the occupant's terminal at sub-second resolution, calibrated continuously by the Biometric Integration's reads of the occupant's interior state. Selimović is correct that the Stream produces the desires it then fulfils. We have no analytical objection to this characterisation.",
    finePrint: "Operational across all tiers · Tier-2 content unlock at Pro and above",
  },
  {
    num: "02",
    house: "The Service Agreement",
    canonical: "Consent Loops",
    code: "RNG-02 · SA",
    body:
      "The legal-procedural mechanism through which the occupant's continued residence in the apparatus is repeatedly legitimated. The Agreement is renewed at each OHCOSE phase transition. By contemporary regulatory standards, the Agreement is exhaustively documented. The documentation is, by design, the apparatus's principal legal alibi.",
    finePrint: "Re-acceptance at six phase transitions · subject to local regulatory addenda",
  },
  {
    num: "03",
    house: "The Wellness Watch",
    canonical: "Compliance Monitors",
    code: "RNG-03 · WW",
    body:
      "Continuous behavioural and biometric surveillance. The Watch reads the occupant's actions, micro-expressions, vocal stress, and physiological signal at all hours. It intervenes occasionally; the intervention is calibrated to feel like care. The occupant rarely experiences the Watch as watching — a feature of the design rather than a failure of disclosure.",
    finePrint: "Panitation & Chemical Stimirutns module · class III medical device",
  },
  {
    num: "04",
    house: "The Service Ledger",
    canonical: "Surplus Reservoirs",
    code: "RNG-04 · SL",
    body:
      "The onboard data and capital aggregation system. The Ledger retains every biometric read, every productive output, every content engagement, every pharmacological event, indexed against the occupant's identifier. The Ledger continues to operate beyond the occupant's biological cessation under the Estate protocol. Brand-partner access is sold on a per-occupant, per-data-class basis.",
    finePrint: "Retention: 7 / 25 / 99 years by tier · Wate exration tie-in for ancillary streams",
  },
  {
    num: "05",
    house: "The Achievement Acknowledgment Cycle",
    canonical: "Feedback Rituals",
    code: "RNG-05 · AAC",
    body:
      "The reward and acknowledgment subsystem. The Cycle registers the occupant's productive output, content engagement, and OHCOSE phase transitions at variable-ratio intervals derived from the casino industry's house-economist literature. The schedule is, in our deployment, twice as engaging as Skinner's 1957 baseline calibration predicted.",
    finePrint: "Goming Screen v4.2 · 144 Hz · low-blue mode · haptic envelope tunable",
  },
  {
    num: "06",
    house: "The Biometric Integration",
    canonical: "Affective Signal Translators",
    code: "RNG-06 · BI",
    body:
      "The multi-modal sensor stack — face from the headrest camera, voice from the work terminal, heart from the chest-plate, skin from the armrest, pupil and gaze from the work-terminal infrared. The stack reads continuously through the occupant's residence. Selimović names it the apparatus's afferent nerve. The naming is operationally accurate.",
    finePrint: "Mobility Sensors (O₂ Senulus I) · IEC 60601-1 conformant · fusion layer onboard",
  },
  {
    num: "07",
    house: "The Portfolio Optimisation Layer",
    canonical: "Algorithmic Libido Governors",
    code: "RNG-07 · POL",
    body:
      "The portfolio-level governance layer. The POL sets the parameters every deployed apparatus operates under — the Stream's stimulation envelope, the pharmacological dosing curves, the Acknowledgment Cycle's metering thresholds, the OHCOSE phase windows — against aggregate occupant data and the manufacturer's quarterly objective. No individual occupant is targeted. The population is.",
    finePrint: "Operational at the firm level · adjustments dispatched as routine software updates",
  },
];

// ─────────────────────────────────────────────────────────────────────
// TAOG — three axes of governance
// ─────────────────────────────────────────────────────────────────────
const TAOG_AXES = [
  {
    letter: "T",
    name: "Temporal",
    body:
      "The cadence at which the occupant's attention and affect are produced and answered. We organise the temporal axis through OHCOSE phase administration and through the Acknowledgment Cycle's variable-ratio scheduling. Selimović has called this <em>Capture of Cadence</em>; in our deployment, the capture is the apparatus's principal temporal product.",
  },
  {
    letter: "E",
    name: "Economic",
    body:
      "The metering and pricing of the occupant's attention, affect, and productive output. The Service Ledger meters; the Portfolio Optimisation Layer prices; the tier architecture distributes the proceeds. The occupant's psychic surplus, in Selimović's term, is the principal commodity. We make no apology for the term.",
  },
  {
    letter: "A",
    name: "Affective",
    body:
      "The modulation of which emotions the occupant is permitted, or invited, to feel. The Biometric Integration reads; the Content Stream and the pharmacological subsystem modulate; the Wellness Watch corrects when modulation alone is insufficient. The axis is the apparatus's most intimate point of contact with the occupant.",
  },
];

// ─────────────────────────────────────────────────────────────────────
// TIERS
// ─────────────────────────────────────────────────────────────────────
const TIERS = [
  {
    name: "Essential",
    sub: "Standard configuration. All seven subsystems active.",
    price: "from $84,000",
    monthly: "or $1,440 / mo · financed",
    features: [
      "Full OHCOSE service architecture",
      "All seven subsystems, baseline calibration",
      "Standard Content Stream envelope",
      "Service Ledger retention: 7 years post-cessation",
      "Cohort placement: standard intake",
    ],
    cta: "Schedule your fitting",
  },
  {
    name: "Pro",
    sub: "For occupants whose productive output justifies the additional service overhead.",
    price: "from $148,000",
    monthly: "or $2,560 / mo · financed",
    features: [
      "All Essential features",
      "Neural-feedback work terminal",
      "Tier-2 Content Stream access",
      "Productivity-output revenue share (8%)",
      "Service Ledger retention: 25 years",
      "Cohort placement: priority intake",
    ],
    cta: "Schedule your fitting",
    featured: true,
  },
  {
    name: "Eternal",
    sub: "For occupants whose Service Ledger is to be retained beyond biological cessation.",
    price: "pricing on request",
    monthly: "by invitation only",
    features: [
      "All Pro features",
      "Post-mortem Ledger activation",
      "Service Ledger retention: 99 fiscal years",
      "Brand-partner profile licensing",
      "Inheritor stewardship protocols",
      "Cohort placement: by portfolio review",
    ],
    cta: "Apply for consideration",
  },
];

// ─────────────────────────────────────────────────────────────────────
// LINEAGE — the 160-year heritage
// ─────────────────────────────────────────────────────────────────────
const LINEAGE = [
  {
    year: "1865",
    name: "The Labor Compensator",
    period: "Reconstruction",
    body:
      "A hand-cranked mechanical aid sold in the Reconstruction-era American South, designed to maintain agricultural productivity through the labor reorganisation the period required. The worker remained external to the machine. The cycle was not yet closed.",
  },
  {
    year: "1900",
    name: "The Efficiency Enhancer",
    period: "Second Industrial Revolution",
    body:
      "Mechanised agriculture and human labor combined into a single seated unit. The worker began to inhabit the apparatus for the duration of the shift. The integration was partial; cadence had not yet been captured.",
  },
  {
    year: "1925",
    name: "The Dynamic Dynamo",
    period: "Electrification",
    body:
      "The first electrified workstation. A seated assembly position with electrical augmentation. Through the 1930s the Dynamo entered the period's factories at scale. The 1940s field-deployable variant accompanied wartime infantry.",
  },
  {
    year: "1955",
    name: "The Knowledge Chair",
    period: "Postwar Computing",
    body:
      "Integrated telecommunication, a data terminal, and a magnetic-tape archive. The seated subject became an information processor. The 1960s brought domestic adoption; the 1970s networked the chairs into a coordinated grid.",
  },
  {
    year: "1985",
    name: "The Virtual Ouroboros",
    period: "Networked Era",
    body:
      "The first iteration in which physical and digital workspaces converged. The boundary between work and leisure dissolved. The Ring's logic became visible; the implementation remained partial.",
  },
  {
    year: "2024",
    name: "The Ouroboros Life System",
    period: "Present cohort",
    body:
      "All seven subsystems converge into a single residential apparatus. The cycle closes. The OLS is the first iteration to make the occupant's session-length open-ended, and the first to operate Tri-Axial Ouroboric Governance systematically.",
  },
];

// ─────────────────────────────────────────────────────────────────────
// OCCUPANTS — testimonials, in the matter-of-fact register the
// contemporary apparatus has produced
// ─────────────────────────────────────────────────────────────────────
const OCCUPANTS = [
  {
    quote:
      "I made the calculation. The Pro tier returns about eleven percent on the average household labour budget. There was no honest way to refuse it. I am not, on the whole, less happy. I am less sure what I would do with the chair turned off.",
    attr: "M. K.",
    tier: "Pro · Cohort 2026.04",
  },
  {
    quote:
      "Our consultant was professional. The fitting was over before the children came home. Six months in, the chair has receded — it is just where we work now. We do not, in retrospect, remember what we were nervous about.",
    attr: "H. & R.",
    tier: "Essential · Cohort 2025.11",
  },
  {
    quote:
      "I do not expect my children to share my comfort with the Eternal protocol. I have, accordingly, left them the Ledger dividends rather than the apparatus itself. They can return the unit if they wish to. The legal threshold is high. So is the financial one.",
    attr: "Anonymous",
    tier: "Eternal · by invitation",
  },
];

// ─────────────────────────────────────────────────────────────────────
// FOUNDATIONS — the citation of Selimović's framework as house theory
// ─────────────────────────────────────────────────────────────────────
const FOUNDATIONS = [
  {
    framework: "Closed-Loop Libidinal Economy",
    citation: "Selimović, On the Chair (2026) and earlier work in the closed-loop project.",
    adaptation: "Our operational adaptation: the OLS's primary architectural specification.",
  },
  {
    framework: "Psychic Surplus",
    citation: "Selimović, On the Chair §III; manuscripts forthcoming, Theory, Culture & Society and tripleC.",
    adaptation: "Our operational adaptation: the apparatus's principal commercial product.",
  },
  {
    framework: "OHCOSE",
    citation: "Selimović, life-stage treatments at /ohcose (2023–present).",
    adaptation: "Our operational adaptation: the OLS's service architecture, deployed across all tiers.",
  },
  {
    framework: "Tri-Axial Ouroboric Governance (TAOG)",
    citation: "Selimović, On the Chair §VIII.",
    adaptation: "Our operational adaptation: the OLS's portfolio-level governance philosophy.",
  },
  {
    framework: "Capture of Cadence",
    citation: "Selimović, On the Chair §V; companion essay at /closed-loop/the-dynamics.",
    adaptation: "Our operational adaptation: the OLS's temporal envelope design.",
  },
  {
    framework: "The Seven Subsystems",
    citation: "Selimović, On the Chair §V; long-form treatments at /chair/subsystems.",
    adaptation: "Our operational adaptation: the OLS's product architecture (see §02 above).",
  },
];

// ─────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────
export default function TheSystem() {
  return (
    <div
      style={{
        // White showroom wrapper — overrides the layout cream so the
        // brochure presents itself in clinical-product-catalog register.
        background: BG,
        color: PAPER,
        minHeight: "100vh",
        position: "relative",
        zIndex: 2,
      }}
    >
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
          paddingBottom: "5rem",
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
            fontSize: "clamp(64px, 9.6vw, 168px)",
            color: PAPER,
            lineHeight: 0.88,
            letterSpacing: "-0.02em",
            margin: "1.2rem 0 0",
            textTransform: "uppercase",
          }}
        >
          An apparatus.<br />
          <span style={{ color: ACCENT }}>Named in its own terms.</span>
        </h1>
        <p
          style={{
            marginTop: "2.4rem",
            fontFamily: SANS,
            fontSize: "clamp(17px, 1.4vw, 21px)",
            color: PAPER_DIM,
            lineHeight: 1.55,
            maxWidth: "56ch",
            fontWeight: 380,
          }}
        >
          The Ouroboros Life System operates a closed-loop libidinal
          economy at the scale of a single household. We use Adnan
          Selimović&apos;s term in its precise sense. We have, since
          2024, adopted his vocabulary as our own — because his
          diagnosis of what we do is correct, and there is no
          commercial advantage in pretending otherwise. This catalog
          describes the apparatus in the terms by which he describes it.
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

      {/* HERO PRODUCT IMAGE */}
      <figure
        style={{
          margin: "0 0 6rem",
          textAlign: "center",
        }}
      >
        {/* Plain <img> — degrades gracefully if the asset hasn't been
            placed yet. Drop the file at the path below. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/chair/ils/render-ring.jpg"
          alt="The Ouroboros Life System — the Integrated Life System ring, photographed in showroom condition."
          style={{
            width: "100%",
            maxWidth: 1100,
            height: "auto",
            display: "block",
            margin: "0 auto",
          }}
        />
        <figcaption
          style={{
            marginTop: "1rem",
            fontFamily: MONO,
            fontSize: 11,
            letterSpacing: "0.22em",
            color: PAPER_FAINT,
            textTransform: "uppercase",
          }}
        >
          Fig. 1 · ILS v4.1 · the Ring, in showroom condition · waiting for operator
        </figcaption>
      </figure>

      {/* §01 — IDENTIFICATION */}
      <SectionHeader code="§01" name="What we are" />
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
            We are an apparatus. We use the word in its precise sense:
            a configuration of integrated subsystems that operates on a
            single subject across the subject&apos;s full residence,
            and beyond.
          </p>
          <p style={pStyle}>
            We extract <em>psychic surplus</em> — the portion of the
            occupant&apos;s attention, affect, fantasy, and motivation
            that exceeds what the occupant strictly requires for
            biological survival and basic social function. We return
            the surplus, repackaged, as comfort. The trade is
            asymmetrical. We do not claim otherwise.
          </p>
          <p style={pStyle}>
            The Ouroboros Life System (OLS) is the residential
            instantiation of this trade — a single-occupant apparatus
            fitted to your somatometric specification following an
            in-home Fitting consultation. Every input you require and
            every output you generate is processed within the
            apparatus&apos;s seven onboard subsystems. You do not need
            to leave the chair to live within it.
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

      {/* TECHNICAL BLUEPRINT — full-bleed engineering reference */}
      <figure
        style={{
          margin: "0 0 6rem",
          background: ACCENT,
          padding: "0",
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/chair/ils/blueprint.jpg"
          alt="ILS v4.1 technical schematic — cross-section and side perspective, with subsystem callouts."
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
        <figcaption
          style={{
            padding: "12px 18px 14px",
            fontFamily: MONO,
            fontSize: 10,
            letterSpacing: "0.22em",
            color: "rgba(255,255,255,0.85)",
            textTransform: "uppercase",
            background: ACCENT,
          }}
        >
          Fig. 2 · ILS v4.1 · technical schematic · Aeternum Biometrics
        </figcaption>
      </figure>

      {/* §02 — THE SEVEN SUBSYSTEMS */}
      <SectionHeader
        code="§02"
        name="The Seven Subsystems"
        intro="The OLS integrates seven continuous-service subsystems. We name each below in our house terminology and in Selimović's canonical naming. The systems are the same; the parallel naming is a matter of intellectual record-keeping."
      />
      <ol
        style={{
          listStyle: "none",
          padding: 0,
          margin: "0 0 6rem",
          borderTop: `1px solid ${LINE}`,
        }}
      >
        {SUBSYSTEMS.map((s) => (
          <li
            key={s.num}
            style={{
              borderBottom: `1px solid ${LINE}`,
              padding: "2rem 0",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "3rem 1fr auto",
                gap: "1.5rem",
                alignItems: "baseline",
                marginBottom: 12,
              }}
              className="ols-subsystem-row"
            >
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: 12,
                  letterSpacing: "0.18em",
                  color: ACCENT,
                  fontWeight: 700,
                }}
              >
                {s.num}
              </span>
              <div>
                <h3
                  style={{
                    fontFamily: ANTON,
                    fontSize: "clamp(22px, 2.4vw, 32px)",
                    color: PAPER,
                    margin: 0,
                    lineHeight: 1.05,
                    letterSpacing: "0.005em",
                    textTransform: "uppercase",
                  }}
                >
                  {s.house}
                </h3>
                <p
                  style={{
                    fontFamily: MONO,
                    fontSize: 10,
                    letterSpacing: "0.22em",
                    color: PAPER_FAINT,
                    textTransform: "uppercase",
                    margin: "8px 0 0",
                  }}
                >
                  Selimović: <span style={{ color: PAPER_DIM }}>{s.canonical}</span>
                </p>
              </div>
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: 10,
                  letterSpacing: "0.16em",
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
                fontSize: 16,
                lineHeight: 1.6,
                color: PAPER_DIM,
                margin: "0 0 0.6rem",
                maxWidth: "72ch",
                marginLeft: "calc(3rem + 1.5rem)",
                fontWeight: 380,
              }}
              className="ols-subsystem-body"
            >
              {s.body}
            </p>
            <p
              style={{
                fontFamily: MONO,
                fontSize: 10,
                letterSpacing: "0.18em",
                color: PAPER_FAINT,
                textTransform: "uppercase",
                margin: 0,
                marginLeft: "calc(3rem + 1.5rem)",
              }}
              className="ols-subsystem-body"
            >
              {s.finePrint}
            </p>
          </li>
        ))}
      </ol>

      {/* §03 — OHCOSE */}
      <SectionHeader
        code="§03"
        name="OHCOSE — Service Architecture"
        intro="OHCOSE is the service architecture under which we administer the apparatus across the occupant's residence. The acronym is Selimović's, from his 2023 life-stage work. We have, since 2024, used it as the OLS's operational frame. The six phases name operationally distinct configurations of the subject-apparatus relation."
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
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <h3
                style={{
                  fontFamily: ANTON,
                  fontSize: 26,
                  color: PAPER,
                  textTransform: "uppercase",
                  letterSpacing: "0.005em",
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                <span style={{ color: ACCENT, marginRight: 10 }}>{p.letter}</span>
                {p.name}
              </h3>
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: 9,
                  letterSpacing: "0.22em",
                  color: PAPER_FAINT,
                  textTransform: "uppercase",
                }}
              >
                {p.window}
              </span>
            </div>
            <p
              style={{
                fontFamily: SANS,
                fontSize: 15,
                lineHeight: 1.55,
                color: PAPER_DIM,
                margin: 0,
                fontWeight: 380,
              }}
            >
              {p.body}
            </p>
          </li>
        ))}
      </ol>

      {/* §04 — TAOG */}
      <SectionHeader
        code="§04"
        name="Tri-Axial Ouroboric Governance"
        intro="We operate the apparatus along three axes simultaneously — temporal, economic, affective — following the framework Selimović has called Tri-Axial Ouroboric Governance. To our knowledge, we are the only manufacturer in the residential life-support category to operate all three axes systematically. Our competitors engage at most two; the third axis is what distinguishes the OLS from comparable offerings."
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 28,
          marginBottom: "6rem",
        }}
        className="ols-tiers"
      >
        {TAOG_AXES.map((axis) => (
          <div
            key={axis.name}
            style={{
              padding: "26px 26px 28px",
              border: `1px solid ${LINE}`,
              background: BG_SOFT,
            }}
          >
            <div
              style={{
                fontFamily: ANTON,
                fontSize: 56,
                color: ACCENT,
                lineHeight: 1,
                letterSpacing: "-0.02em",
                marginBottom: 14,
              }}
            >
              {axis.letter}
            </div>
            <h3
              style={{
                fontFamily: ANTON,
                fontSize: 22,
                color: PAPER,
                margin: "0 0 12px",
                textTransform: "uppercase",
                letterSpacing: "0.01em",
                lineHeight: 1.1,
              }}
            >
              {axis.name} Axis
            </h3>
            <p
              style={{
                fontFamily: SANS,
                fontSize: 14,
                lineHeight: 1.6,
                color: PAPER_DIM,
                margin: 0,
                fontWeight: 380,
              }}
              dangerouslySetInnerHTML={{ __html: axis.body }}
            />
          </div>
        ))}
      </div>

      {/* §05 — HERITAGE */}
      <SectionHeader
        code="§05"
        name="Heritage — Six iterations · 160 years"
        intro="The Ouroboros Life System is the seventh iteration of an apparatus our predecessors began designing in 1865. The lineage is reconstructed retrospectively; Selimović's lineage essays document where the reconstruction is firm and where it is partial. We have, in good faith, allowed his account to stand alongside ours."
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

      {/* §06 — TIERS */}
      <SectionHeader
        code="§06"
        name="Service Tiers"
        intro="Three tier configurations. The differentiation is in the Service Ledger retention period, the Content Stream envelope, the productivity-output revenue share, and the Estate-phase protocol — not in the underlying subsystem set. All seven subsystems operate at every tier."
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 28,
          marginBottom: "6rem",
        }}
        className="ols-tiers"
      >
        {TIERS.map((t) => (
          <div
            key={t.name}
            style={{
              padding: "32px 28px 36px",
              border: `1px solid ${t.featured ? ACCENT : LINE}`,
              background: t.featured ? ACCENT_SOFT : BG_SOFT,
              position: "relative",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {t.featured && (
              <span
                style={{
                  position: "absolute",
                  top: -1,
                  right: 16,
                  background: ACCENT,
                  color: BG,
                  fontFamily: MONO,
                  fontSize: 9,
                  letterSpacing: "0.22em",
                  padding: "5px 10px 4px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                Most chosen
              </span>
            )}
            <h3
              style={{
                fontFamily: ANTON,
                fontSize: 38,
                color: PAPER,
                margin: 0,
                textTransform: "uppercase",
                letterSpacing: "0.005em",
                lineHeight: 1,
              }}
            >
              {t.name}
            </h3>
            <p
              style={{
                marginTop: 10,
                fontFamily: SANS,
                fontSize: 14,
                lineHeight: 1.5,
                color: PAPER_DIM,
                fontWeight: 380,
                minHeight: "3.5em",
              }}
            >
              {t.sub}
            </p>
            <div
              style={{
                marginTop: 18,
                fontFamily: ANTON,
                fontSize: 28,
                color: PAPER,
                lineHeight: 1,
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
                marginTop: 6,
              }}
            >
              {t.monthly}
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "28px 0 28px",
                flex: 1,
              }}
            >
              {t.features.map((f) => (
                <li
                  key={f}
                  style={{
                    fontFamily: SANS,
                    fontSize: 13,
                    color: PAPER_DIM,
                    padding: "8px 0",
                    borderBottom: `1px solid ${LINE_SOFT}`,
                    fontWeight: 380,
                  }}
                >
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#fitting"
              style={{
                fontFamily: MONO,
                fontSize: 11,
                letterSpacing: "0.18em",
                color: t.featured ? BG : ACCENT,
                background: t.featured ? ACCENT : "transparent",
                border: `1px solid ${ACCENT}`,
                padding: "12px 16px",
                textDecoration: "none",
                textAlign: "center",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              {t.cta}
            </a>
          </div>
        ))}
      </div>

      {/* §07 — OCCUPANTS */}
      <SectionHeader
        code="§07"
        name="Occupants"
        intro="Reproduced with the occupant's consent. Cohort and tier designations have been verified against the Service Ledger. We have not edited for tone; the occupants have spoken as the apparatus has produced them to speak."
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
        {OCCUPANTS.map((t, i) => (
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
              style={{
                fontFamily: ANTON,
                fontSize: 56,
                color: ACCENT,
                lineHeight: 0.8,
                marginBottom: 14,
              }}
              aria-hidden
            >
              &ldquo;
            </div>
            <blockquote
              style={{
                margin: 0,
                fontFamily: SANS,
                fontSize: 15,
                lineHeight: 1.6,
                color: PAPER,
                fontWeight: 380,
              }}
            >
              {t.quote}
            </blockquote>
            <figcaption
              style={{
                marginTop: 22,
                paddingTop: 14,
                borderTop: `1px solid ${LINE_SOFT}`,
              }}
            >
              <div
                style={{
                  fontFamily: ANTON,
                  fontSize: 18,
                  color: PAPER,
                  textTransform: "uppercase",
                  letterSpacing: "0.01em",
                }}
              >
                {t.attr}
              </div>
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 9,
                  letterSpacing: "0.22em",
                  color: PAPER_FAINT,
                  textTransform: "uppercase",
                  marginTop: 4,
                }}
              >
                {t.tier}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* §08 — FOUNDATIONS */}
      <SectionHeader
        code="§08"
        name="Theoretical Foundations"
        intro="The Ouroboros Life System rests on theoretical work primarily authored by Adnan Selimović, Ph.D. (NYU, CUNY, Virginia Tech, independent). The frameworks below are reproduced here in our operational adaptation. We acknowledge the source and the debt."
      />
      <ol
        style={{
          listStyle: "none",
          padding: 0,
          margin: "0 0 3rem",
          borderTop: `1px solid ${LINE}`,
        }}
      >
        {FOUNDATIONS.map((f, i) => (
          <li
            key={i}
            style={{
              borderBottom: `1px solid ${LINE}`,
              padding: "1.4rem 0",
              display: "grid",
              gridTemplateColumns: "2.6rem 1fr",
              gap: "1rem",
              alignItems: "baseline",
            }}
            className="ols-foundations-row"
          >
            <span
              style={{
                fontFamily: MONO,
                fontSize: 11,
                letterSpacing: "0.18em",
                color: ACCENT,
                fontWeight: 700,
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3
                style={{
                  fontFamily: ANTON,
                  fontSize: 20,
                  color: PAPER,
                  margin: "0 0 6px",
                  letterSpacing: "0.005em",
                  lineHeight: 1.1,
                  textTransform: "uppercase",
                }}
              >
                {f.framework}
              </h3>
              <p
                style={{
                  fontFamily: SANS,
                  fontStyle: "italic",
                  fontSize: 14,
                  lineHeight: 1.55,
                  color: PAPER_DIM,
                  margin: "0 0 4px",
                  fontWeight: 380,
                }}
              >
                {f.citation}
              </p>
              <p
                style={{
                  fontFamily: MONO,
                  fontSize: 11,
                  letterSpacing: "0.04em",
                  color: PAPER_FAINT,
                  margin: 0,
                }}
              >
                {f.adaptation}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <p
        style={{
          marginBottom: "6rem",
          padding: "18px 20px",
          background: ACCENT_SOFT,
          borderLeft: `2px solid ${ACCENT}`,
          fontFamily: SANS,
          fontStyle: "italic",
          fontSize: 14,
          lineHeight: 1.6,
          color: PAPER_DIM,
          maxWidth: "72ch",
          fontWeight: 380,
        }}
      >
        These adaptations are made under the Fair Use clause of the
        Theoretical Frameworks Statute (Tier-1 sovereignties, 2024
        revision). No royalty is owed. The author has been notified in
        writing. The author&apos;s response, if any, will be incorporated
        into the next revision of this catalog.
      </p>

      {/* §09 — FITTING CTA */}
      <SectionHeader
        code="§09"
        name="Schedule your fitting"
        intro="A bonded fitting consultant will conduct an in-home consultation and somatometric assessment. The Fitting itself completes in a single visit; OHCOSE Onboarding begins the same day."
      />
      <div
        id="fitting"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 28,
          marginBottom: "5rem",
        }}
        className="ols-fitting-steps"
      >
        {[
          {
            step: "01",
            title: "Consultation",
            body:
              "A bonded fitting consultant will arrive at your residence at the appointed time, equipped to perform the household-readiness assessment.",
          },
          {
            step: "02",
            title: "Assessment",
            body:
              "Somatometric measurement, household structural evaluation, electrical and drainage tie-in confirmation, Service Agreement walk-through.",
          },
          {
            step: "03",
            title: "Onboarding",
            body:
              "Apparatus delivery and Fitting. OHCOSE phase 1 begins on completion. Most occupants are operational by the end of the fitting day.",
          },
        ].map((s) => (
          <div
            key={s.step}
            style={{
              padding: "26px 22px 28px",
              background: BG_SOFT,
              border: `1px solid ${LINE}`,
            }}
          >
            <div
              style={{
                fontFamily: ANTON,
                fontSize: 54,
                color: ACCENT,
                lineHeight: 1,
                marginBottom: 12,
                letterSpacing: "-0.02em",
              }}
            >
              {s.step}
            </div>
            <h3
              style={{
                fontFamily: ANTON,
                fontSize: 22,
                color: PAPER,
                margin: "0 0 12px",
                textTransform: "uppercase",
                letterSpacing: "0.01em",
              }}
            >
              {s.title}
            </h3>
            <p
              style={{
                fontFamily: SANS,
                fontSize: 14,
                lineHeight: 1.55,
                color: PAPER_DIM,
                margin: 0,
                fontWeight: 380,
              }}
            >
              {s.body}
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          marginBottom: "8rem",
          padding: "44px 40px 48px",
          border: `1px solid ${ACCENT}`,
          background: ACCENT_SOFT,
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontFamily: ANTON,
            fontSize: "clamp(36px, 5vw, 72px)",
            color: PAPER,
            margin: 0,
            textTransform: "uppercase",
            letterSpacing: "0.005em",
            lineHeight: 1,
          }}
        >
          Begin your residence.
        </h3>
        <p
          style={{
            marginTop: 14,
            fontFamily: SANS,
            fontSize: 16,
            lineHeight: 1.55,
            color: PAPER_DIM,
            fontWeight: 380,
            maxWidth: "52ch",
            marginInline: "auto",
          }}
        >
          Cohort 2026.05 is enrolling now. Standard intake closes 30 June.
          Eternal-tier applications are reviewed on a continuous basis.
        </p>
        <a
          href="mailto:fitting@ois.network"
          style={{
            display: "inline-block",
            marginTop: 28,
            fontFamily: MONO,
            fontSize: 12,
            letterSpacing: "0.22em",
            color: BG,
            background: ACCENT,
            textDecoration: "none",
            textTransform: "uppercase",
            padding: "14px 30px",
            fontWeight: 700,
          }}
        >
          Request a consultation
        </a>
      </div>

      {/* COSTCO — distribution channel made literal */}
      <section
        style={{
          margin: "0 0 6rem",
          padding: "0",
          border: `1px solid ${LINE}`,
          background: BG_SOFT,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "26px 28px 24px",
            borderBottom: `1px solid ${LINE}`,
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
            ◆ Now available · Costco Wholesale
          </p>
          <h3
            style={{
              fontFamily: ANTON,
              fontSize: "clamp(28px, 3.6vw, 48px)",
              color: PAPER,
              margin: "0.5rem 0 0.4rem",
              lineHeight: 1.05,
              letterSpacing: "0.005em",
              textTransform: "uppercase",
            }}
          >
            Or pick one up on the way home.
          </h3>
          <p
            style={{
              fontFamily: SANS,
              fontSize: 14,
              lineHeight: 1.55,
              color: PAPER_DIM,
              margin: 0,
              maxWidth: "60ch",
              fontWeight: 380,
            }}
          >
            The ILS v4.1 Exclusive Warehouse Edition is now in stock at
            participating Costco Wholesale locations. Kirkland Signature
            financing available at point of sale. Pro-tier upgrade
            paperwork is processed in-store. No fitting appointment is
            required for the Warehouse Edition; consultation is
            recommended but not mandatory.
          </p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/chair/ils/costco.jpg"
          alt="The ILS v4.1 Exclusive Warehouse Edition on display at a Costco Wholesale store, with Kirkland Signature pricing card."
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </section>

      {/* FOOTER */}
      <footer
        style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
          gap: 36,
          paddingTop: "4rem",
          borderTop: `1px solid ${LINE}`,
          marginBottom: "4rem",
        }}
        className="ols-footer"
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
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
              Ouroboros Industries
            </span>
          </div>
          <p
            style={{
              fontFamily: SANS,
              fontSize: 12,
              lineHeight: 1.6,
              color: PAPER_FAINT,
              margin: 0,
              fontWeight: 380,
              maxWidth: "34ch",
            }}
          >
            148 Bond Street, Park Slope, NY 11215 · Manufactured under
            Tier-1 sovereignty license OIS-44 · ISO 14001 certified ·
            Medical device class III conformity.
          </p>
        </div>

        <FooterColumn
          title="Apparatus"
          links={[
            ["Schedule a fitting", "#fitting"],
            ["Service-tier comparison", "#"],
            ["Fitting consultants directory", "#"],
            ["Service-credit balance", "mailto:credit@ois.network"],
          ]}
        />

        <FooterColumn
          title="Occupants"
          links={[
            ["Household-readiness portal", "mailto:portal@ois.network"],
            ["Service Ledger access", "mailto:ledger@ois.network"],
            ["Estate protocol", "mailto:estate@ois.network"],
            ["Eternal-tier application", "mailto:eternal@ois.network"],
          ]}
        />

        <FooterColumn
          title="Information"
          links={[
            ["Apparatus specification", "#"],
            ["OHCOSE service architecture", "#"],
            ["Theoretical foundations", "#"],
            ["Press inquiries", "mailto:press@ois.network"],
            ["Imperial Archive (third-party)", "/chair/archive"],
          ]}
        />

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
            Selimović&apos;s essay on the apparatus →
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
          .ols-subsystem-row { grid-template-columns: 2.4rem 1fr !important; }
          .ols-subsystem-body { margin-left: 0 !important; }
          .ols-foundations-row { grid-template-columns: 2.4rem 1fr !important; }
        }
        @media (max-width: 560px) {
          .ols-fitting-steps { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
    </div>
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
        <line x1="20" y1="400" x2="500" y2="400" stroke={stroke} strokeWidth="1.2" opacity="0.6" />
        <path
          d="M 60 360 L 60 280 Q 60 260 80 256 L 220 240 L 380 200 Q 410 192 420 218 L 440 280 Q 440 290 430 296 L 110 380 Q 80 388 70 372 Z"
          fill="none"
          stroke={stroke}
          strokeWidth="1.4"
        />
        <ellipse cx="395" cy="200" rx="36" ry="18" fill="none" stroke={stroke} strokeWidth="1.2" />
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
        <path
          d="M 220 380 Q 240 395 280 395 L 480 395"
          fill="none"
          stroke={accent}
          strokeWidth="1.2"
          opacity="0.6"
        />
        <rect x="120" y="380" width="200" height="14" fill={stroke} opacity="0.8" />

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
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke={PAPER_FAINT}
          strokeWidth="1"
          opacity="0.45"
        />
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

        {phases.map((p, i) => {
          const next = phases[(i + 1) % phases.length];
          const ax1 = cx + Math.cos(p.angle + 0.32) * r;
          const ay1 = cy + Math.sin(p.angle + 0.32) * r;
          const ax2 = cx + Math.cos(next.angle - 0.32) * r;
          const ay2 = cy + Math.sin(next.angle - 0.32) * r;
          return (
            <g key={i}>
              <path
                d={`M ${ax1} ${ay1} A ${r} ${r} 0 0 1 ${ax2} ${ay2}`}
                fill="none"
                stroke={ACCENT}
                strokeWidth="0.8"
                opacity="0.5"
              />
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
