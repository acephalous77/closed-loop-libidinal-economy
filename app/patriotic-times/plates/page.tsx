import type { Metadata } from "next";
import { PLATES, SECTIONS } from "./_data";

export const metadata: Metadata = {
  title: "Plates",
  description:
    "All 25 plates of Patriotic Times, organized by section. Each plate opens to an interactive coloring canvas — color it on screen, then print your version.",
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

export default function PlatesIndex() {
  return (
    <main style={{ padding: "3.5rem 5vw 5rem", maxWidth: "1400px", margin: "0 auto" }}>
      {/* Breadcrumb */}
      <nav style={{ marginBottom: "2.5rem" }}>
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
      <header style={{ marginBottom: "4rem", maxWidth: "44rem" }}>
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
          The Plates · 25 in Four Sections
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
            maxWidth: "38rem",
          }}
        >
          Each plate is line art. Click in to color it in your browser.
          Print your version when you are done — or print it blank
          and color it by hand. The act is the project.
        </p>
      </header>

      {/* Sections */}
      {([1, 2, 3, 4] as const).map((sectionNo) => {
        const sectionPlates = PLATES.filter((p) => p.section === sectionNo);
        return (
          <section key={sectionNo} style={{ marginBottom: "4rem" }}>
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
                  Section {sectionNo}
                </div>
                <h2
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                    fontWeight: 900,
                    letterSpacing: "-0.025em",
                    textTransform: "uppercase",
                    margin: "0.4rem 0 0",
                    color: INK,
                  }}
                >
                  {SECTIONS[sectionNo]}
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
                Pages {sectionPlates[0]?.pageNo}–{sectionPlates[sectionPlates.length - 1]?.pageNo}
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "2rem",
              }}
            >
              {sectionPlates.map((p) => {
                const isReady = p.src !== null;
                const card = (
                  <div
                    style={{
                      background: "#fff",
                      border: `1px solid ${INK}`,
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      opacity: isReady ? 1 : 0.7,
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
                            fontSize: "0.75rem",
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
                    <div style={{ padding: "1.25rem 1.25rem 1.5rem", flex: 1 }}>
                      <div
                        style={{
                          fontFamily: MONO,
                          fontSize: "0.7rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.2em",
                          color: RED,
                          fontWeight: 700,
                          marginBottom: "0.35rem",
                        }}
                      >
                        Page {p.pageNo.toString().padStart(2, "0")} · {p.caption}
                      </div>
                      <div
                        style={{
                          fontFamily: DISPLAY,
                          fontSize: "1.3rem",
                          fontWeight: 800,
                          letterSpacing: "-0.015em",
                          lineHeight: 1.1,
                          color: INK,
                          marginBottom: "0.6rem",
                        }}
                      >
                        {p.title}
                      </div>
                      <div
                        style={{
                          fontFamily: SERIF,
                          fontSize: "0.92rem",
                          fontStyle: "italic",
                          lineHeight: 1.45,
                          color: INK_70,
                        }}
                      >
                        {p.scene}
                      </div>
                      {isReady && (
                        <div
                          style={{
                            marginTop: "1rem",
                            fontFamily: MONO,
                            fontSize: "0.72rem",
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
          marginTop: "5rem",
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
          Plates with placeholder cards are pending publication.
        </p>
      </section>
    </main>
  );
}
