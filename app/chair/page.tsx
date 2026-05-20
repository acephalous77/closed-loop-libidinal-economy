import type { Metadata } from "next";
import OuroborosPortal from "./_components/OuroborosPortal";

export const metadata: Metadata = {
  title: { absolute: "Ouroboros Life System — Because Life Should Be Effortless" },
  alternates: { canonical: "/chair" },
};

// Palette — clinical product page wrap
const INK = "#0a0a0a";
const INK_70 = "#5a5a5a";
const INK_40 = "#9a9a9a";
const INK_20 = "#e6e6e6";
const PAPER = "#ffffff";
const PAPER_TINT = "#f7f8f9";
const ACCENT = "#e23b2a";

const MONO = `var(--font-jetbrains-mono), ui-monospace, "SF Mono", Menlo, monospace`;
const DISPLAY = `-apple-system, "Inter", "SF Pro Display", "Helvetica Neue", system-ui, sans-serif`;

/**
 * Archive marker — barely-visible dotted-underline anchor linking to an
 * Imperial Archive entry. The careful reader notices, the casual reader
 * does not.
 */
function A({
  to,
  title,
  children,
}: {
  to: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={`/chair/archive/${to}`}
      title={title}
      style={{
        color: "inherit",
        textDecoration: "underline",
        textDecorationStyle: "dotted",
        textDecorationColor: "#cdc6bd",
        textDecorationThickness: "1px",
        textUnderlineOffset: "3px",
        cursor: "help",
      }}
    >
      {children}
    </a>
  );
}

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
          aria-label="Section navigation"
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
          <a href="#apparatus" style={{ color: "inherit", textDecoration: "none" }}>
            Apparatus
          </a>
          <a href="#configurations" style={{ color: "inherit", textDecoration: "none" }}>
            Configurations
          </a>
          <a href="#fitting" style={{ color: "inherit", textDecoration: "none" }}>
            Order
          </a>
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
          Introducing the{" "}
          <A to="proto-apparatuses" title="Imperial Archive 2197.14 — Proto-Apparatuses: The Social-Media Ancestry">
            Ouroboros Life System
          </A>
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
          A{" "}
          <A to="ouroboros-ring" title="Imperial Archive 2197.04 — On the Ouroboros Ring">
            fully-enclosed
          </A>{" "}
          integrated life-support apparatus. Total automation for work,
          play, and survival — in a single ergonomic enclosure.
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
            href="#apparatus"
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
            View the apparatus
          </a>
        </div>
      </section>

      {/* ============ THE APPARATUS — sticky chair + six-phase narrative ============
          This is the qualitative-depth centerpiece: a sticky SVG chair-as-altar
          beside a scrolling OHCOSE lifecycle narrative, with live harvest
          metrics, cursor-trail absorption, and a glitching marketing voice.
          The visitor's own activity feeds the apparatus. */}
      <section id="apparatus" aria-label="The apparatus">
        <OuroborosPortal />
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
                features: [
                  "Nutrient + hydration",
                  "Standard work terminal",
                  "Single-screen interface",
                  "12 yr polymer",
                ],
                cta: "Configure",
                accent: false,
                archive: null,
              },
              {
                tier: "Pro",
                price: "$96,000",
                desc: "Single occupant. Enhanced subsystem array. Continuous productivity feedback. Sleep optimization.",
                features: [
                  "All Essential features",
                  "Sleep induction subsystem",
                  "Triple-screen interface",
                  "Neural-feedback work terminal",
                  "Priority service",
                ],
                cta: "Configure",
                accent: true,
                archive: { code: "2197.11", slug: "pro-tier-moratorium" },
              },
              {
                tier: "Eternal",
                price: "On request",
                desc: (
                  <>
                    Single occupant. Lifetime support contract. Estate-bound
                    configuration.{" "}
                    <A
                      to="eternal-tier"
                      title="Imperial Archive 2197.22 — On the Eternal Tier: Post-mortem Continuity"
                    >
                      Post-mortem data continuity
                    </A>
                    .
                  </>
                ),
                features: [
                  "All Pro features",
                  "Lifetime polymer warranty",
                  "Estate transfer protocols",
                  "Phase VII–compatible exit",
                ],
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
                  }}
                >
                  {c.tier}
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
                  href="#fitting"
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
      <section
        style={{
          padding: "6rem 5vw",
          maxWidth: "880px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
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
          &ldquo;
          <A to="testimonial-analysis" title="Imperial Archive 2197.26 — The Testimonial Voice">
            I haven&apos;t had to stand up in nine months
          </A>
          . The Pro tier has changed everything. My productivity is at an
          all-time high and I genuinely cannot imagine going back.&rdquo;
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
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section
        id="fitting"
        style={{
          background: PAPER_TINT,
          padding: "6rem 5vw",
          textAlign: "center",
        }}
      >
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
          A certified Ouroboros Life System{" "}
          <A to="fitting-ritual" title="Imperial Archive 2197.30 — On the Fitting Ritual">
            consultant
          </A>{" "}
          will visit your residence for biometric calibration and chair
          sizing. Fittings are typically completed within four hours.
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
        <p
          style={{
            marginTop: "3rem",
            fontFamily: MONO,
            fontSize: "0.65rem",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: INK_40,
            maxWidth: "44rem",
            margin: "3rem auto 0",
            lineHeight: 1.6,
          }}
        >
          By being seated, the occupant consents to indefinite occupancy.{" "}
          <span style={{ color: ACCENT }}>◇</span> Standing is not, at
          present, a supported operation.
        </p>
      </section>
    </>
  );
}
