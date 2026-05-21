import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Colophon — On the Chair" },
  description:
    "The page that breaks character. What the project is, what it is not, where it sits, and who built it.",
  alternates: { canonical: "/chair/colophon" },
};

const PAPER = "#1a1814";
const PAPER_DIM = "#4a443a";
const MUTED = "#8a8478";
const RULE = "rgba(26,24,20,0.14)";
const ACCENT = "#7a2818";

const SERIF = `"Iowan Old Style", "Charter", Georgia, "Times New Roman", serif`;
const MONO = `var(--font-geist-mono), ui-monospace, monospace`;

/**
 * /chair/colophon — the out-of-character meta document.
 *
 * Rebuilt in the dark register to match the rest of the chair routes.
 * The previous version was light-mode on a dark layout (effectively
 * invisible) and dated 2025; both fixed.
 *
 * Voice: the author's own, not the apparatus or its critic. Plain
 * statement of what the project is, the routes it comprises, the
 * sources it draws on, and where it sits relative to the broader
 * closed-loop project.
 */

export default function ChairColophon() {
  return (
    <main
      style={{
        maxWidth: "44rem",
        margin: "0 auto",
        padding: "5rem 1.5rem 6rem",
        position: "relative",
        zIndex: 1,
      }}
    >
      <nav style={{ marginBottom: "2.5rem" }}>
        <a
          href="/chair"
          style={{
            fontFamily: MONO,
            fontSize: "0.72rem",
            letterSpacing: "0.22em",
            color: MUTED,
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          ← On the Chair
        </a>
      </nav>

      <header
        style={{
          borderBottom: `1px solid ${RULE}`,
          paddingBottom: "2.5rem",
          marginBottom: "3rem",
        }}
      >
        <p
          style={{
            fontFamily: MONO,
            fontSize: "0.7rem",
            letterSpacing: "0.28em",
            color: ACCENT,
            textTransform: "uppercase",
            margin: 0,
            fontWeight: 600,
          }}
        >
          ◆ Out of Character
        </p>
        <h1
          style={{
            fontFamily: SERIF,
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(2.4rem, 5.4vw, 3.6rem)",
            lineHeight: 1.08,
            color: PAPER,
            margin: "1rem 0 0.8rem",
            letterSpacing: "-0.012em",
          }}
        >
          Colophon
        </h1>
        <p
          style={{
            fontFamily: SERIF,
            fontSize: "1.15rem",
            lineHeight: 1.5,
            color: PAPER_DIM,
            margin: 0,
            fontStyle: "italic",
          }}
        >
          The page that breaks character. What the project is, what it
          is not, where it sits, who built it.
        </p>
      </header>

      <Section n="I" title="What this is">
        <P>
          The <strong style={{ color: PAPER }}>Ouroboros Life System</strong>{" "}
          is a speculative apparatus authored by Adnan Selimović as part
          of an ongoing research and writing project on what I have
          elsewhere called the <em>closed-loop libidinal economy</em>.
        </P>
        <P>
          There is no chair to buy. There is no Ouroboros Industries
          LLC. The pricing tiers, the fitting consultants, the
          testimonials, the Service Ledger, the 248,401 fitted
          households &mdash; all invented. The project is a literary
          object cast as a product, presented in the register of the
          institution it is trying to make legible.
        </P>
        <P>
          The chair is a fiction. The apparatus the chair diagrams is
          not.
        </P>
      </Section>

      <Section n="II" title="Architecture">
        <P>
          The project sits at <code style={codeStyle}>/chair</code> across
          nine routes:
        </P>
        <ul style={listStyle}>
          {[
            ["/chair", "the main essay, On the Chair, in nine sections — the project's spine."],
            ["/chair/subsystems", "long-form treatments of the apparatus's seven subsystems."],
            ["/chair/precedents", "companion essays on four actually-existing proto-apparatuses (Meta, TikTok, Pornhub, Chinese Social Credit)."],
            ["/chair/lineage", "six companion essays on the apparatus's claimed 160-year lineage, with the brochure's claims checked against the historical record."],
            ["/chair/refusal", "longer treatment of §IX. Four moves toward refusal."],
            ["/chair/concepts", "working definitions of the project's named frameworks (TAOG, IGLF, Capture of Cadence, Libidinal Ouroboros, Psychic Surplus, OHCOSE, Closed-Loop Libidinal Economy, Satisfaction Loops)."],
            ["/chair/the-system", "the apparatus speaking in its own voice. The brochure has read the essay and adopted its vocabulary as house terminology."],
            ["/chair/zine", "anti-copyright resistance pamphlet, with two pieces that break its own design language."],
            ["/chair/archive", "future-historian retrospective, dated c. 2197."],
          ].map(([href, body]) => (
            <li key={href} style={liStyle}>
              <a href={href} style={routeLink}>
                {href}
              </a>
              <span style={{ color: PAPER_DIM }}> &nbsp;—&nbsp; {body}</span>
            </li>
          ))}
        </ul>
        <P>
          The essay is the analytical spine. The brochure, the zine, and
          the archive are three mutually contradictory voices the essay
          holds together. The subsystem, precedent, lineage, and refusal
          companions extend the essay's individual sections at greater
          depth.
        </P>
      </Section>

      <Section n="III" title="Theoretical sources">
        <P>
          <strong style={{ color: PAPER }}>The libidinal-economic
          lineage:</strong> Jean-François Lyotard, <em>Libidinal
          Economy</em> (1974); Jean Baudrillard, <em>La société de
          consommation</em> (1970); Herbert Marcuse, <em>One-Dimensional
          Man</em> (1964); Franco Berardi, <em>The Soul at Work</em>{" "}
          (2009); Paul B. Preciado, <em>Testo Junkie</em> (2008);
          Bernard Stiegler&apos;s pharmacology.
        </P>
        <P>
          <strong style={{ color: PAPER }}>The object-relations
          axis:</strong> Melanie Klein on the paranoid-schizoid and
          depressive positions; D. W. Winnicott on the transitional
          object.
        </P>
        <P>
          <strong style={{ color: PAPER }}>The political-philosophical
          frame:</strong> Michel Foucault on biopower and
          governmentality; Gilles Deleuze and Félix Guattari on
          desiring-machines; Marshall McLuhan on medium as message.
        </P>
        <P>
          <strong style={{ color: PAPER }}>The contemporary empirical
          base:</strong> Kramer, Guillory &amp; Hancock, &ldquo;Experimental
          evidence of massive-scale emotional contagion through social
          networks&rdquo; (PNAS, 2014); the 2020 Pornhub recommendation-
          engine investigations; the operational documentation of the
          Chinese Social Credit System (2014–present); Shoshana
          Zuboff&apos;s <em>The Age of Surveillance Capitalism</em>{" "}
          (2019); Nick Srnicek&apos;s <em>Platform Capitalism</em>{" "}
          (2016).
        </P>
      </Section>

      <Section n="IV" title="Earlier work by the author">
        <P>
          The chair extends and concretizes work I have been developing
          elsewhere on the site:
        </P>
        <ul style={listStyle}>
          <li style={liStyle}>
            <a href="/closed-loop" style={routeLink}>/closed-loop</a>
            <span style={{ color: PAPER_DIM }}> &nbsp;—&nbsp; the formal
              project on the closed-loop libidinal economy, including the
              foreclosure lemma and the reclamation theorem the chair
              dramatises.</span>
          </li>
          <li style={liStyle}>
            <a href="/ohcose" style={routeLink}>/ohcose</a>
            <span style={{ color: PAPER_DIM }}> &nbsp;—&nbsp; the
              life-stage treatments (Ontogenesis, Inscriptive
              Normalisation, Adolescent Calibration) the chair condenses
              into a single product lifecycle.</span>
          </li>
        </ul>
        <P>
          Industry-facing work informing the project: applied
          libidinal-economic frameworks developed in R&amp;I
          engagements with Netflix, Ubisoft, and Activision; the
          Integrated Gamer Loops Framework (IGLF) developed in that
          work and catalogued at <a href="/chair/concepts#integrated-gamer-loops-framework" style={inlineLink}>concepts</a>.
        </P>
        <P>
          Manuscripts in progress: <em>Theory, Culture &amp; Society</em>
          {" "}(libidinal ouroboros / platform governance); <em>tripleC:
          Communication, Capitalism &amp; Critique</em> (psychic
          surplus extraction).
        </P>
      </Section>

      <Section n="V" title="A note on the apparatus's status">
        <P>
          The chair is a thought experiment. The apparatus is not. The
          chair I have described in the brochure is a fiction; the
          apparatus the chair diagrams is, on my reading, the
          configuration the contemporary platform economy has been
          settling into over the past fifteen years, and which I expect
          to settle further in the years immediately ahead.
        </P>
        <P>
          The chair&apos;s commercial pretence is a rhetorical device
          — the same device the apparatus uses on itself, deployed at
          the scale of a piece of furniture so the reader can see it. I
          have, throughout the project, tried to keep the device
          legible as a device. The brochure&apos;s candour about its own
          mechanics is part of how I have tried to do that.
        </P>
      </Section>

      <Section n="VI" title="License & citation">
        <P>
          Textual content: <strong style={{ color: PAPER }}>CC BY-SA
          4.0</strong>. Code: <strong style={{ color: PAPER }}>MIT</strong>.
          Visual identity (Ouroboros logotype, brochure typesetting,
          diagrams) is the author&apos;s original work.
        </P>
        <P style={{ fontSize: "0.94rem", color: PAPER_DIM }}>
          Selimović, A. (2026). <em>On the Chair: Notes Toward a Theory
          of the Closed-Loop Libidinal Economy</em>. Brooklyn.{" "}
          <span style={{ fontFamily: MONO, fontSize: "0.86rem" }}>
            autostimulus.org/chair
          </span>
        </P>
      </Section>

      <div
        style={{
          marginTop: "3rem",
          paddingTop: "2rem",
          borderTop: `1px solid ${RULE}`,
          fontFamily: MONO,
          fontSize: "0.7rem",
          letterSpacing: "0.22em",
          color: MUTED,
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        Brooklyn · May 2026 · Volume Ω.026
      </div>
    </main>
  );
}

// ─────────────────────────────────────────────────────────────────────
const codeStyle: React.CSSProperties = {
  fontFamily: MONO,
  fontSize: "0.92em",
  background: "rgba(154,51,34,0.10)",
  padding: "1px 6px",
  color: PAPER,
  borderRadius: 2,
};

const listStyle: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: "0 0 1.6rem",
  borderTop: `1px solid ${RULE}`,
};

const liStyle: React.CSSProperties = {
  padding: "0.7rem 0",
  borderBottom: `1px solid ${RULE}`,
  fontFamily: SERIF,
  fontSize: "0.98rem",
  lineHeight: 1.55,
};

const routeLink: React.CSSProperties = {
  fontFamily: MONO,
  fontSize: "0.86rem",
  color: PAPER,
  textDecoration: "underline",
  textDecorationColor: ACCENT,
  textDecorationThickness: 1,
  textUnderlineOffset: 3,
};

const inlineLink: React.CSSProperties = {
  color: PAPER,
  textDecoration: "underline",
  textDecorationColor: ACCENT,
  textDecorationThickness: 1,
  textUnderlineOffset: 3,
};

function Section({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: "2.4rem" }}>
      <h2
        style={{
          fontFamily: SERIF,
          fontWeight: 600,
          fontSize: "1.3rem",
          letterSpacing: "-0.005em",
          color: PAPER,
          margin: "2.4rem 0 1.2rem",
          paddingTop: "1rem",
          borderTop: `1px solid ${RULE}`,
          display: "grid",
          gridTemplateColumns: "3.5rem 1fr",
          gap: "1rem",
          alignItems: "baseline",
        }}
      >
        <span
          style={{
            fontFamily: MONO,
            fontSize: "0.72rem",
            color: ACCENT,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          § {n}
        </span>
        <span style={{ fontStyle: "italic" }}>{title}</span>
      </h2>
      {children}
    </section>
  );
}

function P({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <p
      style={{
        fontFamily: SERIF,
        fontSize: "1.05rem",
        lineHeight: 1.7,
        color: PAPER,
        margin: "0 0 1.1rem",
        textWrap: "pretty" as const,
        ...style,
      }}
    >
      {children}
    </p>
  );
}
