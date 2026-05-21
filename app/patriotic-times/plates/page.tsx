import type { Metadata } from "next";
import { PLATES, DECADES, getPlatesByDecade } from "./_data";

export const metadata: Metadata = {
  title: "Plates",
  description:
    "All 63 plates of Patriotic Times, in chronological order from 2000 to 2026. Each plate opens to an interactive coloring canvas — color it on screen, then print your version.",
  alternates: { canonical: "/patriotic-times/plates" },
};

const INK = "#0a0a0a";
const INK_70 = "#3d342a";
const INK_50 = "#6b5e4d";
const INK_30 = "#9a8d77";
const PAPER_DEEP = "#e8dcc0";
const RED = "#b8222a";

const MONO = `var(--font-jetbrains-mono), ui-monospace, "SF Mono", Menlo, monospace`;
const DISPLAY = `-apple-system, "Inter", "Helvetica Neue", "Arial Black", system-ui, sans-serif`;
const SERIF = `"Iowan Old Style", "Charter", Georgia, "Times New Roman", serif`;

const livePlateCount = PLATES.filter((p) => p.src !== null).length;

export default function PlatesIndex() {
  return (
    <main style={{ padding: "3.5rem 5vw 5rem", maxWidth: "1400px", margin: "0 auto" }}>
      {/* Breadcrumb */}
      <nav style={{ marginBottom: "2.5rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        <a
          href="/"
          style={{
            fontFamily: MONO,
            fontSize: "0.85rem",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: INK_50,
            textDecoration: "none",
          }}
        >
          ← autostimulus
        </a>
        <a
          href="/patriotic-times"
          style={{
            fontFamily: MONO,
            fontSize: "0.85rem",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: INK_50,
            textDecoration: "none",
          }}
        >
          ← Patriotic Times
        </a>
      </nav>

      {/* Masthead */}
      <header style={{ marginBottom: "4rem", maxWidth: "48rem" }}>
        <div
          style={{
            fontFamily: MONO,
            fontSize: "0.8rem",
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            color: RED,
            fontWeight: 700,
            marginBottom: "0.8rem",
          }}
        >
          The Plates · 63 Postcards · 2000–2026
        </div>
        <h1
          style={{
            fontFamily: DISPLAY,
            fontWeight: 900,
            fontSize: "clamp(3rem, 8vw, 6rem)",
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            textTransform: "uppercase",
            margin: 0,
            color: INK,
          }}
        >
          The Plates<span style={{ color: RED }}>.</span>
        </h1>
        <p
          style={{
            fontFamily: SERIF,
            fontSize: "clamp(1.05rem, 1.6vw, 1.3rem)",
            fontStyle: "italic",
            lineHeight: 1.45,
            color: INK_70,
            marginTop: "1.5rem",
            maxWidth: "40rem",
          }}
        >
          Each plate is a postcard: line art on the front, a stamp template
          on the reverse. Open one to color it in your browser, then print
          your version — or print the blank line art and color it by hand.
          The act is the project.
        </p>
        <p
          style={{
            fontFamily: MONO,
            fontSize: "0.78rem",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            color: INK_50,
            marginTop: "1.25rem",
          }}
        >
          {livePlateCount} of 63 plates currently published. The rest are
          forthcoming.
        </p>
      </header>

      {/* Decade jump-nav */}
      <nav
        aria-label="Jump to decade"
        style={{
          marginBottom: "3rem",
          paddingBottom: "1.5rem",
          borderBottom: `1px solid ${INK}`,
          display: "flex",
          alignItems: "baseline",
          gap: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            fontFamily: MONO,
            fontSize: "0.72rem",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: INK_50,
          }}
        >
          Jump to:
        </span>
        {DECADES.map((dec) => (
          <a
            key={dec.label}
            href={`#decade-${dec.label}`}
            style={{
              fontFamily: MONO,
              fontSize: "0.85rem",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: RED,
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            {dec.label}
          </a>
        ))}
      </nav>

      {/* Sections by decade */}
      {DECADES.map((dec) => {
        const decPlates = getPlatesByDecade(dec.label);
        return (
          <section
            key={dec.label}
            id={`decade-${dec.label}`}
            style={{ marginBottom: "5rem", scrollMarginTop: "1.5rem" }}
          >
            <div
              style={{
                borderTop: `2px solid ${INK}`,
                paddingTop: "1.5rem",
                marginBottom: "2.5rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: "2rem",
                flexWrap: "wrap",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: "0.78rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.25em",
                    color: RED,
                    fontWeight: 700,
                  }}
                >
                  Plates {decPlates[0]?.no.toString().padStart(2, "0")}–{decPlates[decPlates.length - 1]?.no.toString().padStart(2, "0")}
                </div>
                <h2
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                    fontWeight: 900,
                    letterSpacing: "-0.025em",
                    textTransform: "uppercase",
                    margin: "0.4rem 0 0",
                    color: INK,
                  }}
                >
                  {dec.label}
                </h2>
              </div>
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: INK_50,
                }}
              >
                {decPlates.length} plates
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {decPlates.map((p) => {
                const isReady = p.src !== null;
                const card = (
                  <div
                    style={{
                      background: "#fff",
                      border: `1px solid ${INK}`,
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      opacity: isReady ? 1 : 0.75,
                    }}
                  >
                    {/* Image area */}
                    <div
                      style={{
                        aspectRatio: "3 / 2",
                        background: PAPER_DEEP,
                        position: "relative",
                        borderBottom: `1px solid ${INK}`,
                        overflow: "hidden",
                      }}
                    >
                      {isReady ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={p.src!}
                          alt={p.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                            background: "#fff",
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            color: INK_50,
                            fontFamily: MONO,
                            fontSize: "0.7rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.2em",
                            textAlign: "center",
                            padding: "1rem",
                          }}
                        >
                          <div style={{ fontSize: "2rem", marginBottom: "0.5rem", color: INK_30 }}>
                            ▢
                          </div>
                          plate pending
                        </div>
                      )}
                    </div>
                    {/* Caption */}
                    <div style={{ padding: "1rem 1.1rem 1.2rem", flex: 1, display: "flex", flexDirection: "column" }}>
                      <div
                        style={{
                          fontFamily: MONO,
                          fontSize: "0.68rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.18em",
                          color: RED,
                          fontWeight: 700,
                          marginBottom: "0.4rem",
                        }}
                      >
                        № {p.no.toString().padStart(2, "0")} · {p.year}
                      </div>
                      <div
                        style={{
                          fontFamily: DISPLAY,
                          fontSize: "1.15rem",
                          fontWeight: 800,
                          letterSpacing: "-0.015em",
                          lineHeight: 1.15,
                          color: INK,
                          marginBottom: "0.4rem",
                        }}
                      >
                        {p.title}
                      </div>
                      <div
                        style={{
                          fontFamily: SERIF,
                          fontSize: "0.85rem",
                          fontStyle: "italic",
                          lineHeight: 1.4,
                          color: INK_70,
                          flex: 1,
                        }}
                      >
                        {p.location}
                      </div>
                      {isReady && (
                        <div
                          style={{
                            marginTop: "0.8rem",
                            fontFamily: MONO,
                            fontSize: "0.65rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.2em",
                            color: RED,
                            fontWeight: 700,
                          }}
                        >
                          → Color this plate
                        </div>
                      )}
                    </div>
                  </div>
                );

                if (isReady) {
                  return (
                    <a
                      key={p.slug}
                      href={`/patriotic-times/plates/${p.slug}`}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "block",
                      }}
                    >
                      {card}
                    </a>
                  );
                }
                return <div key={p.slug}>{card}</div>;
              })}
            </div>
          </section>
        );
      })}

      {/* Footer */}
      <section
        style={{
          marginTop: "4rem",
          paddingTop: "2rem",
          borderTop: `2px solid ${INK}`,
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: SERIF,
            fontStyle: "italic",
            fontSize: "1.05rem",
            color: INK_70,
            margin: 0,
          }}
        >
          Source: <em>Patriotic Times — Coloring Book of US Democratic State
          Failures &amp; the Emergence of Fascism</em> (2026).
          Plates with placeholder cards are pending publication on the live
          site; the canonical sequence is preserved.
        </p>
      </section>
    </main>
  );
}
