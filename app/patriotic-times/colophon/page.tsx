import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Colophon",
  description:
    "Patriotic Times colophon. Project attribution, 63 plates, interactive coloring, sources, and distribution.",
  alternates: { canonical: "/patriotic-times/colophon" },
};

const INK = "#0a0a0a";
const INK_70 = "#3d342a";
const INK_50 = "#6b5e4d";
const PAPER_DEEP = "#e8dcc0";
const RED = "#b8222a";

const MONO = `var(--font-jetbrains-mono), ui-monospace, "SF Mono", Menlo, monospace`;
const DISPLAY = `-apple-system, "Inter", "Helvetica Neue", "Arial Black", system-ui, sans-serif`;
const SERIF = `"Iowan Old Style", "Charter", Georgia, "Times New Roman", serif`;

export default function PatrioticColophon() {
  return (
    <main style={{ padding: "5rem 5vw 4rem", maxWidth: "44rem", margin: "0 auto" }}>
      <nav style={{ marginBottom: "3rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        <Link
          href="/"
          style={{
            fontFamily: MONO,
            fontSize: "0.78rem",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: INK_50,
            textDecoration: "none",
          }}
        >
          ↑ autostimulus
        </Link>
        <Link
          href="/patriotic-times"
          style={{
            fontFamily: MONO,
            fontSize: "0.78rem",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: INK_50,
            textDecoration: "none",
          }}
        >
          ← Patriotic Times
        </Link>
      </nav>

      <div
        style={{
          fontFamily: MONO,
          fontSize: "0.78rem",
          textTransform: "uppercase",
          letterSpacing: "0.25em",
          color: RED,
          fontWeight: 700,
          marginBottom: "0.75rem",
        }}
      >
        Project Attribution
      </div>
      <h1
        style={{
          fontFamily: DISPLAY,
          fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
          fontWeight: 900,
          letterSpacing: "-0.035em",
          lineHeight: 0.95,
          textTransform: "uppercase",
          margin: 0,
          color: INK,
        }}
      >
        Colophon
      </h1>

      <article style={{ marginTop: "3rem" }}>
        <Section n="1" title="What This Is">
          <p>
            <em>Patriotic Times</em> is a coloring book of US democratic
            state failures and the emergence of fascism, covering the
            twenty-six years from 2000 to 2026. Authored by{" "}
            <strong>Adnan Selimović</strong>. Sixty-three plates,
            sequenced chronologically, each drawn from a specific event
            in the public record.
          </p>
          <p>
            The format is the joke and the project. A coloring book is a
            children&apos;s object; the events depicted are not for
            children. The friction the reader experiences in colored
            crayon vs. carceral apparatus is the project&apos;s pedagogy.
          </p>
        </Section>

        <Section n="2" title="Color it Here. Print it There.">
          <p>
            Every plate is interactive. Open any one on the{" "}
            <Link href="/patriotic-times/plates" style={{ color: INK, textDecoration: "underline" }}>
              plates index
            </Link>{" "}
            and color it in the browser — paint-bucket fills the closed
            regions of the line art in your chosen color. When you are
            done, the <em>Print your version</em> button exports your
            colored page directly. Print the blank line art and color it
            by hand if you prefer; the act is the project either way.
          </p>
          <p>
            The line work is original. Reference photography was drawn
            from contemporaneous press archives; sources are documented
            in the bound edition&apos;s appendix.
          </p>
        </Section>

        <Section n="3" title="Plates & Distribution">
          <p>
            Plates exist on this site as interactive line-art (above),
            as printable sheets, and as a forthcoming bound edition.
            Individual sheets are available for educational and exhibition
            use; reproduction for non-commercial purposes is permitted
            and encouraged.
          </p>
          <p>
            The landing page presents the same sixty-three plates grouped
            into four thematic chapters across the period — a narrative
            arc that the chronological plate sequence does not itself
            commit to.
          </p>
        </Section>

        <Section n="4" title="Source Material">
          <p>
            Each plate cites a specific event in the public record.
            Selections were made by the author from a longer list of
            documented incidents 2000–2026. Events were grouped into
            four thematic chapters such that the chapter title carries
            the diagnostic frame and the event sequence demonstrates the
            frame&apos;s extension across the period.
          </p>
        </Section>

        <Section n="5" title="Continuous With">
          <p>
            The project sits beside{" "}
            <Link href="/closed-loop" style={{ color: INK, textDecoration: "underline" }}>
              The Closed-Loop Libidinal Economy
            </Link>{" "}
            (the framework that names the conditions under which the
            book&apos;s events were possible) and{" "}
            <Link href="/ohcose" style={{ color: INK, textDecoration: "underline" }}>
              OHCOSE
            </Link>{" "}
            (the imagined bureaucratic register that administers the
            lifecycle the book&apos;s subjects inhabit).
          </p>
          <p style={{ fontFamily: SERIF, fontStyle: "italic", color: INK_70 }}>
            The closed-loop framework is the theory. OHCOSE is the
            satire. Patriotic Times is the evidence.
          </p>
        </Section>

        <Section n="6" title="License">
          <p>
            Textual content: <strong>CC BY-NC-SA 4.0</strong> (non-commercial).
            Plates: all rights reserved by the author; reproduction
            for educational or exhibition use is permitted with
            attribution. Commercial reproduction requires written
            consent.
          </p>
          <p style={{ fontFamily: SERIF, fontStyle: "italic", color: INK_50, fontSize: "0.9rem", marginTop: "1.5rem" }}>
            Selimović, A. <em>Patriotic Times: A Coloring Book.</em> 2025–2026.
            autostimulus.org/patriotic-times
          </p>
        </Section>
      </article>
    </main>
  );
}

function Section({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: "3rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "1rem",
          paddingBottom: "0.6rem",
          marginBottom: "1.25rem",
          borderBottom: `2px solid ${INK}`,
        }}
      >
        <span
          style={{
            fontFamily: MONO,
            fontWeight: 700,
            fontSize: "1rem",
            color: RED,
            letterSpacing: "0.05em",
          }}
        >
          §{n}
        </span>
        <span
          style={{
            fontFamily: DISPLAY,
            fontWeight: 800,
            fontSize: "1.35rem",
            letterSpacing: "-0.01em",
            textTransform: "uppercase",
            color: INK,
          }}
        >
          {title}
        </span>
      </div>
      <div
        style={{
          fontFamily: SERIF,
          fontSize: "1.1rem",
          lineHeight: 1.65,
          color: "#1a1612",
        }}
      >
        {children}
      </div>
    </section>
  );
}
