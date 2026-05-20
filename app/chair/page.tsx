import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: { absolute: "Ouroboros Life System — Because Life Should Be Effortless" },
  alternates: { canonical: "/chair" },
};

// Palette
const INK = "#0a0a0a";
const INK_70 = "#5a5a5a";
const INK_40 = "#9a9a9a";
const INK_20 = "#e6e6e6";
const PAPER = "#ffffff";
const PAPER_TINT = "#f7f8f9";

// Subsystem colors — matches the concept document
const SUB = {
  nutrient: "#1e6cff",   // blue — nutrient delivery
  hydration: "#7ed4e6",  // clear — hydration
  sleep: "#f5a623",      // amber — sleep induction
  waste: "#d62828",      // red — waste extraction
  power: "#0a0a0a",      // black — productivity feedback / energy
};

const MONO = `var(--font-jetbrains-mono), ui-monospace, "SF Mono", Menlo, monospace`;
const DISPLAY = `-apple-system, "Inter", "SF Pro Display", "Helvetica Neue", system-ui, sans-serif`;

export default function ChairLanding() {
  return (
    <>
      {/* ============ MASTHEAD ============ */}
      <header
        style={{
          padding: "2.5rem 5vw 1.5rem",
          borderBottom: `1px solid ${INK_20}`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <div
          style={{
            fontFamily: DISPLAY,
            fontWeight: 800,
            fontSize: "1.15rem",
            letterSpacing: "-0.01em",
          }}
        >
          Ouroboros Life System
          <sup style={{ fontSize: "0.55em", marginLeft: "0.15em", color: INK_70 }}>™</sup>
        </div>
        <nav
          style={{
            display: "flex",
            gap: "2rem",
            fontFamily: MONO,
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: INK_70,
          }}
        >
          <span>Overview</span>
          <span>Specifications</span>
          <span>Configurations</span>
          <span>Order</span>
        </nav>
      </header>

      {/* ============ HERO ============ */}
      <section
        style={{
          padding: "6rem 5vw 4rem",
          textAlign: "center",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontFamily: MONO,
            fontSize: "0.8rem",
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            color: INK_70,
            marginBottom: "1.5rem",
          }}
        >
          Introducing the Ouroboros Life System
        </p>
        <h1
          style={{
            fontFamily: DISPLAY,
            fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.035em",
            lineHeight: 1.0,
            margin: 0,
            color: INK,
          }}
        >
          Because Life Should Be<br />
          Effortless.
        </h1>
        <p
          style={{
            marginTop: "2.5rem",
            fontSize: "1.4rem",
            lineHeight: 1.45,
            color: INK_70,
            maxWidth: "44rem",
            margin: "2.5rem auto 0",
            fontWeight: 400,
          }}
        >
          A fully-enclosed integrated life-support apparatus. Total
          automation for work, play, and survival — in a single
          ergonomic enclosure.
        </p>

        {/* CTA buttons */}
        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#configurations"
            style={{
              background: INK,
              color: PAPER,
              padding: "0.85rem 2rem",
              fontFamily: MONO,
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              textDecoration: "none",
              borderRadius: "999px",
              fontWeight: 700,
            }}
          >
            Configure yours
          </a>
          <a
            href="#specifications"
            style={{
              border: `1.5px solid ${INK}`,
              color: INK,
              background: "transparent",
              padding: "0.85rem 2rem",
              fontFamily: MONO,
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              textDecoration: "none",
              borderRadius: "999px",
              fontWeight: 700,
            }}
          >
            View specifications
          </a>
        </div>
      </section>

      {/* ============ HERO IMAGE ============ */}
      <section
        style={{
          background: PAPER_TINT,
          padding: "4rem 5vw",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Image
            src="/chair/hero.png"
            alt="The Ouroboros Life System chair in a clinical showroom"
            width={1100}
            height={733}
            priority
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <p
            style={{
              marginTop: "1.5rem",
              fontFamily: MONO,
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: INK_40,
            }}
          >
            Fig. 01 — Standard chair configuration, showroom view
            {" "}
            <a
              href="/chair/archive/ouroboros-ring"
              title="Imperial Archive Entry 2197.04 — On the Ouroboros Ring"
              style={{
                color: "#7a3a14",
                textDecoration: "none",
                marginLeft: "0.4rem",
                fontWeight: 700,
              }}
            >
              [2197.04]
            </a>
          </p>
        </div>
      </section>

      {/* ============ KEY FEATURES (3-column strip) ============ */}
      <section
        style={{
          padding: "6rem 5vw",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
          }}
        >
          {[
            {
              eyebrow: "01 — Sustenance",
              title: "Nutrient & hydration delivery, automatic.",
              body: "Color-coded fluid lines maintain optimal caloric intake, hydration, and electrolyte balance — sustained indefinitely.",
            },
            {
              eyebrow: "02 — Productivity",
              title: "Work, play, and survival in one enclosure.",
              body: "Triple-screen interface with neural-feedback work terminal and entertainment console. The occupant's productivity feeds back into the grid.",
            },
            {
              eyebrow: "03 — Comfort",
              title: "Engineered for indefinite occupancy.",
              body: "Contoured medical-grade polymer, posture monitoring, and a sleep-induction subsystem that ensures circadian compliance.",
            },
          ].map((f) => (
            <div key={f.eyebrow}>
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: INK_70,
                  marginBottom: "1rem",
                }}
              >
                {f.eyebrow}
              </div>
              <h2
                style={{
                  fontFamily: DISPLAY,
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                  margin: 0,
                  color: INK,
                }}
              >
                {f.title}
              </h2>
              <p
                style={{
                  marginTop: "1rem",
                  fontSize: "1rem",
                  lineHeight: 1.55,
                  color: INK_70,
                }}
              >
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ INTEGRATION DIAGRAM ============ */}
      <section
        id="specifications"
        style={{
          background: PAPER_TINT,
          padding: "6rem 5vw",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: MONO,
                fontSize: "0.7rem",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: INK_70,
                marginBottom: "1rem",
              }}
            >
              The Closed Loop
            </div>
            <h2
              style={{
                fontFamily: DISPLAY,
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.0,
                margin: 0,
                color: INK,
              }}
            >
              Everything in.<br />
              Everything out.
            </h2>
            <p
              style={{
                marginTop: "1.5rem",
                fontSize: "1.1rem",
                lineHeight: 1.55,
                color: INK_70,
                maxWidth: "30rem",
              }}
            >
              The Ouroboros ring encircles the chair with five
              continuously-active subsystems. Inputs and outputs
              circulate within the apparatus. The occupant never needs
              to leave.
            </p>

            {/* Subsystem swatches */}
            <ul style={{ listStyle: "none", padding: 0, margin: "2.5rem 0 0" }}>
              {[
                { color: SUB.nutrient, label: "Nutrient delivery", note: "intravenous + abdominal feed port" },
                { color: SUB.hydration, label: "Hydration line", note: "chest-mounted inlet" },
                { color: SUB.sleep, label: "Sleep induction", note: "headrest-routed; circadian-compliant" },
                { color: SUB.waste, label: "Waste extraction", note: "concealed outlets, automatic cycle" },
                { color: SUB.power, label: "Productivity feedback", note: "energy extraction to grid" },
              ].map((s) => (
                <li
                  key={s.label}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.25rem 12rem 1fr",
                    alignItems: "center",
                    columnGap: "1rem",
                    padding: "0.85rem 0",
                    borderBottom: `1px solid ${INK_20}`,
                    fontFamily: MONO,
                    fontSize: "0.85rem",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "1rem",
                      height: "1rem",
                      borderRadius: "50%",
                      background: s.color,
                      boxShadow: `0 0 0 3px ${s.color}20`,
                    }}
                  />
                  <span style={{ color: INK, fontWeight: 600 }}>{s.label}</span>
                  <span style={{ color: INK_70, fontSize: "0.75rem" }}>{s.note}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Image
              src="/chair/diagram.png"
              alt="Annotated integration diagram of the Ouroboros Life System chair"
              width={900}
              height={600}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            <p
              style={{
                marginTop: "1rem",
                fontFamily: MONO,
                fontSize: "0.7rem",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: INK_40,
                textAlign: "center",
              }}
            >
              Fig. 02 — Integration diagram
              {" "}
              <a
                href="/chair/archive/period-typography"
                title="Imperial Archive Entry 2197.07 — On the period typographic errors visible in this and other marketing materials"
                style={{
                  color: "#7a3a14",
                  textDecoration: "none",
                  marginLeft: "0.4rem",
                  fontWeight: 700,
                }}
              >
                [2197.07]
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ============ TECHNICAL SPECS BAND ============ */}
      <section style={{ padding: "6rem 5vw", maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            fontFamily: MONO,
            fontSize: "0.7rem",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: INK_70,
            marginBottom: "1.5rem",
          }}
        >
          Technical Specifications
        </div>
        <h2
          style={{
            fontFamily: DISPLAY,
            fontSize: "clamp(2rem, 4vw, 3.25rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.0,
            margin: 0,
            color: INK,
          }}
        >
          Built for indefinite occupancy.
        </h2>

        <div
          style={{
            marginTop: "3rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2rem",
            borderTop: `1px solid ${INK}`,
            borderBottom: `1px solid ${INK}`,
            padding: "2rem 0",
          }}
        >
          {[
            { value: "180kg", label: "Occupant capacity" },
            { value: "98%", label: "Waste reclamation rate" },
            { value: "24/7", label: "Continuous operation" },
            { value: "≤ 0.4 W", label: "Standby power draw" },
            { value: "12 yr", label: "Polymer service life" },
            { value: "365 d", label: "Limited warranty" },
          ].map((s) => (
            <div key={s.label}>
              <div
                style={{
                  fontFamily: DISPLAY,
                  fontSize: "2.25rem",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.0,
                  color: INK,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  marginTop: "0.5rem",
                  fontFamily: MONO,
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: INK_70,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ CONFIGURATIONS ============ */}
      <section
        id="configurations"
        style={{
          background: INK,
          color: PAPER,
          padding: "6rem 5vw",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              fontFamily: MONO,
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#999",
              marginBottom: "1rem",
            }}
          >
            Three Configurations
          </div>
          <h2
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
              margin: 0,
              color: PAPER,
            }}
          >
            Choose the life that fits you.
          </h2>

          <div
            style={{
              marginTop: "3.5rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                tier: "Essential",
                price: "$48,000",
                desc: "Single occupant. Standard subsystem suite. Eight-hour productivity feedback cycle.",
                features: ["Nutrient + hydration", "Standard work terminal", "Single-screen interface", "12 yr polymer"],
                cta: "Configure",
                accent: false,
                archive: null,
              },
              {
                tier: "Pro",
                price: "$96,000",
                desc: "Single occupant. Enhanced subsystem array. Continuous productivity feedback. Sleep optimization.",
                features: ["All Essential features", "Sleep induction subsystem", "Triple-screen interface", "Neural-feedback work terminal", "Priority service"],
                cta: "Configure",
                accent: true,
                archive: { code: "2197.11", slug: "pro-tier-moratorium" },
              },
              {
                tier: "Eternal",
                price: "On request",
                desc: "Single occupant. Lifetime support contract. Estate-bound configuration. Post-mortem data continuity.",
                features: ["All Pro features", "Lifetime polymer warranty", "Estate transfer protocols", "Phase VII–compatible exit"],
                cta: "Inquire",
                accent: false,
                archive: { code: "2197.22", slug: "eternal-tier" },
              },
            ].map((c) => (
              <div
                key={c.tier}
                style={{
                  background: c.accent ? PAPER : "transparent",
                  color: c.accent ? INK : PAPER,
                  border: c.accent ? "none" : "1px solid #333",
                  borderRadius: "1rem",
                  padding: "2rem 1.75rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    color: c.accent ? INK_70 : "#999",
                    marginBottom: "0.6rem",
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                  }}
                >
                  <span>{c.tier}</span>
                  {c.archive && (
                    <a
                      href={`/chair/archive/${c.archive.slug}`}
                      title={`Imperial Archive Entry ${c.archive.code}`}
                      style={{
                        color: c.accent ? "#7a3a14" : "#7a3a14",
                        textDecoration: "none",
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        letterSpacing: "0.15em",
                      }}
                    >
                      [{c.archive.code}]
                    </a>
                  )}
                </div>
                <div
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.0,
                  }}
                >
                  {c.price}
                </div>
                <p
                  style={{
                    marginTop: "1rem",
                    fontSize: "0.95rem",
                    lineHeight: 1.5,
                    color: c.accent ? INK_70 : "#bbb",
                    minHeight: "5rem",
                  }}
                >
                  {c.desc}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "1.25rem 0 1.5rem", flex: 1 }}>
                  {c.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        padding: "0.4rem 0",
                        fontSize: "0.85rem",
                        color: c.accent ? INK : "#ddd",
                        borderBottom: c.accent ? `1px solid ${INK_20}` : "1px solid #222",
                      }}
                    >
                      <span style={{ color: c.accent ? INK : PAPER, marginRight: "0.5rem" }}>•</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  style={{
                    background: c.accent ? INK : PAPER,
                    color: c.accent ? PAPER : INK,
                    padding: "0.85rem 1.5rem",
                    fontFamily: MONO,
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    textDecoration: "none",
                    borderRadius: "999px",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  {c.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIAL ============ */}
      <section style={{ padding: "6rem 5vw", maxWidth: "880px", margin: "0 auto", textAlign: "center" }}>
        <p
          style={{
            fontFamily: DISPLAY,
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            fontWeight: 500,
            lineHeight: 1.25,
            letterSpacing: "-0.02em",
            color: INK,
            margin: 0,
          }}
        >
          “I haven&apos;t had to stand up in nine months. The Pro tier has
          changed everything. My productivity is at an all-time high and
          I genuinely cannot imagine going back.”
        </p>
        <div
          style={{
            marginTop: "2rem",
            fontFamily: MONO,
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: INK_70,
          }}
        >
          — M.K., Pro tier · Cohort 2026.04
          {" "}
          <a
            href="/chair/archive/testimonial-analysis"
            title="Imperial Archive Entry 2197.26 — On the testimonial voice"
            style={{
              color: "#7a3a14",
              textDecoration: "none",
              marginLeft: "0.4rem",
              fontWeight: 700,
            }}
          >
            [2197.26]
          </a>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section style={{ background: PAPER_TINT, padding: "6rem 5vw", textAlign: "center" }}>
        <h2
          style={{
            fontFamily: DISPLAY,
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.0,
            margin: 0,
            color: INK,
          }}
        >
          Schedule your fitting.
        </h2>
        <p
          style={{
            marginTop: "1.5rem",
            fontSize: "1.1rem",
            color: INK_70,
            maxWidth: "40rem",
            margin: "1.5rem auto 0",
          }}
        >
          A certified Ouroboros Life System consultant will visit your
          residence for biometric calibration and chair sizing. Fittings
          are typically completed within four hours.
        </p>
        <a
          href="#"
          style={{
            display: "inline-block",
            marginTop: "2.5rem",
            background: INK,
            color: PAPER,
            padding: "1rem 2.5rem",
            fontFamily: MONO,
            fontSize: "0.8rem",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            textDecoration: "none",
            borderRadius: "999px",
            fontWeight: 700,
          }}
        >
          Book a consultation
        </a>
      </section>
    </>
  );
}
