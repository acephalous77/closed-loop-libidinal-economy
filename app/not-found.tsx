import type { Metadata } from "next";

export const metadata: Metadata = {
  // Bypass the root layout's "%s — autostimulus" template so the
  // title stays singular (was producing "not found — The Closed-Loop
  // Libidinal Economy — autostimulus" — wrong-branded triple-wrap).
  title: { absolute: "Not Found — autostimulus" },
  description: "The page you requested does not exist.",
};

// Match the atelier's clinical-maximalist register so a 404 reads
// as a consistent atelier surface — not as a leak of closed-loop
// register from when the project lived at root.
const PAPER = "#ffffff";
const INK = "#0a0a0a";
const INK_70 = "#5a5a5a";
const INK_40 = "#9a9a9a";
const ACCENT = "#00ff5f";

const DISPLAY = `-apple-system, "Inter", "Helvetica Neue", "Arial Black", system-ui, sans-serif`;
const MONO = `var(--font-jetbrains-mono), ui-monospace, "SF Mono", Menlo, monospace`;

export default function NotFound() {
  return (
    <main
      style={{
        background: PAPER,
        color: INK,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "5vw 6vw",
        fontFamily: DISPLAY,
        colorScheme: "light",
      }}
    >
      <div style={{ maxWidth: "44rem", textAlign: "center" }}>
        <div
          style={{
            fontFamily: MONO,
            fontSize: "0.8rem",
            textTransform: "uppercase",
            letterSpacing: "0.28em",
            color: INK_40,
            marginBottom: "1.5rem",
          }}
        >
          HTTP 404 · Page Not Found
        </div>
        <h1
          style={{
            fontFamily: DISPLAY,
            fontWeight: 900,
            fontSize: "clamp(3rem, 9vw, 7rem)",
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            color: INK,
            margin: 0,
            textTransform: "lowercase",
          }}
        >
          not here<span style={{ color: ACCENT }}>.</span>
        </h1>
        <p
          style={{
            fontFamily: MONO,
            fontSize: "0.9rem",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            color: INK_70,
            marginTop: "2rem",
            lineHeight: 1.6,
          }}
        >
          The page you requested does not exist
          <br />
          or has not been written yet.
        </p>

        {/* Routing back into the atelier — the four current works */}
        <nav
          style={{
            marginTop: "3.5rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "1rem",
            maxWidth: "32rem",
            marginInline: "auto",
          }}
        >
          {[
            { href: "/", label: "↑ autostimulus" },
            { href: "/closed-loop", label: "→ closed-loop" },
            { href: "/ohcose", label: "→ ohcose" },
            { href: "/patriotic-times", label: "→ patriotic times" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: MONO,
                fontSize: "0.78rem",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: INK,
                textDecoration: "none",
                padding: "0.75rem 1rem",
                border: `1px solid ${INK}`,
                fontWeight: 700,
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </main>
  );
}
