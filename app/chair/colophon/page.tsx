import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colophon",
  description: "Ouroboros Life System — colophon. Document attribution. Out-of-character disclosure.",
  alternates: { canonical: "/chair/colophon" },
};

const INK = "#0a0a0a";
const INK_70 = "#5a5a5a";
const INK_40 = "#9a9a9a";
const INK_20 = "#e6e6e6";

const MONO = `var(--font-jetbrains-mono), ui-monospace, "SF Mono", Menlo, monospace`;
const DISPLAY = `-apple-system, "Inter", "SF Pro Display", "Helvetica Neue", system-ui, sans-serif`;

export default function ChairColophon() {
  return (
    <main style={{ padding: "5rem 5vw", maxWidth: "44rem", margin: "0 auto" }}>
      <nav style={{ marginBottom: "3rem" }}>
        <a
          href="/chair"
          style={{
            fontFamily: MONO,
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: INK_70,
            textDecoration: "none",
          }}
        >
          ← Ouroboros Life System
        </a>
      </nav>

      <p
        style={{
          fontFamily: MONO,
          fontSize: "0.75rem",
          textTransform: "uppercase",
          letterSpacing: "0.25em",
          color: INK_40,
          marginBottom: "0.75rem",
        }}
      >
        Document Attribution
      </p>
      <h1
        style={{
          fontFamily: DISPLAY,
          fontSize: "clamp(2.25rem, 4vw, 3rem)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          lineHeight: 1.0,
          margin: 0,
          color: INK,
        }}
      >
        Colophon
      </h1>
      <p
        style={{
          marginTop: "1rem",
          fontSize: "1.1rem",
          color: INK_70,
          lineHeight: 1.55,
        }}
      >
        The page that breaks character. What this is, who made it, what
        it is not.
      </p>

      <section style={{ marginTop: "4rem" }}>
        <SectionHead n="c.1" title="What This Is" />
        <Body>
          <p>
            The <strong>Ouroboros Life System</strong> is a dystopian art
            project authored by <strong>Adnan Selimović</strong>. It is
            not a real product. There is no chair to buy. The pricing
            tiers, the &ldquo;fittings,&rdquo; the &ldquo;biometric calibration
            consultants,&rdquo; the testimonials, the warranty terms — all
            invented. The product is a literary object cast as a product.
          </p>
          <p>
            The project began as a concept rendering and a conceptual
            blueprint: a fully-enclosed life-support apparatus that
            sustains a single human occupant indefinitely while
            extracting their productivity and consumption as the
            apparatus&apos;s economic output. The chair is the
            architectural literalization of the closed-loop libidinal
            economy.
          </p>
        </Body>
      </section>

      <section style={{ marginTop: "3.5rem" }}>
        <SectionHead n="c.2" title="Source Material" />
        <Body>
          <p>
            Concept document: <em>Integrated Life System: A Fully
            Enclosed Dystopian Life-Support Chair</em> (2024). Manuscript
            spine: <em>Psychopolitics — Youth, Self, and Media in
            Consumer Society</em> (Selimović, 2026 export). Visual
            assets: a series of photorealistic generative renders
            produced through prompt-engineered diffusion models, in a
            clinical-showroom register. The renders preserve the AI
            artifacts (irregular type, imperfect labels) as
            period-correct features of the imagined corporate object.
          </p>
        </Body>
      </section>

      <section style={{ marginTop: "3.5rem" }}>
        <SectionHead n="c.3" title="Continuous With" />
        <Body>
          <p>
            <a href="/closed-loop" style={{ color: INK, textDecoration: "underline" }}>
              The Closed-Loop Libidinal Economy
            </a>{" "}
            — the formal framework whose foreclosure lemma and
            reclamation theorem the chair dramatizes as object.
          </p>
          <p>
            <a href="/ohcose" style={{ color: INK, textDecoration: "underline" }}>
              OHCOSE
            </a>{" "}
            — the federal-bureaucratic counterpart that administers
            the lifecycle the chair sells.
          </p>
        </Body>
      </section>

      <section style={{ marginTop: "3.5rem" }}>
        <SectionHead n="c.4" title="License" />
        <Body>
          <p>
            Textual content: <strong>CC BY-SA 4.0</strong>. Code:{" "}
            <strong>MIT</strong>. Images: original generative work by
            the author.
          </p>
          <p style={{ color: INK_70, fontSize: "0.9rem", marginTop: "1.5rem" }}>
            Selimović, A. <em>The Ouroboros Life System</em>. 2025.
            autostimulus.org/chair
          </p>
        </Body>
      </section>
    </main>
  );
}

function SectionHead({ n, title }: { n: string; title: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: "1rem",
        borderBottom: `1px solid ${INK}`,
        paddingBottom: "0.5rem",
        marginBottom: "1.25rem",
      }}
    >
      <span
        style={{
          fontFamily: MONO,
          fontWeight: 700,
          fontSize: "0.95rem",
          color: "#d62828",
        }}
      >
        {n}
      </span>
      <span
        style={{
          fontFamily: DISPLAY,
          fontWeight: 700,
          fontSize: "1.2rem",
          letterSpacing: "-0.02em",
          color: INK,
        }}
      >
        {title}
      </span>
    </div>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: "1.05rem",
        lineHeight: 1.6,
        color: "#1a1a1a",
      }}
    >
      {children}
    </div>
  );
}
