import type { Metadata } from "next";
import { MASTER, FONT } from "../_components/tokens";
import { PlateHeader, PlateFooter, SectionMark, ChairGlyph } from "../_components/PlateChrome";
import { HeroChair } from "../_components/HeroChair";
import { OHCOSEWheel } from "../_components/OHCOSEWheel";
import { LineageScrubber } from "../_components/LineageScrubber";
import { TAOGTriangle } from "../_components/TAOGTriangle";

export const metadata: Metadata = {
  title: { absolute: "On the Chair — Notes Toward a Theory of the Closed-Loop Libidinal Economy" },
  description: "An essay on the chair as the most lucid figure for what the contemporary apparatus of consumer libidinal-economic governance has been becoming. By Adnan Selimović.",
  alternates: { canonical: "/chair/essay" },
};

const T = MASTER;

// ──────────────────────────────────────────────────────────────────
// /chair — the essay, in the forensic-atlas register.
// Three-column layout: left gutter for running header + marginalia,
// main column for prose, right gutter for figure plates and
// cross-references. The chair appears (as the side-elevation figure)
// on the masthead and recurs as a glyph in every section.
// ──────────────────────────────────────────────────────────────────

export default function OnTheChair() {
  return (
    <article>
      <PlateHeader plate="I" route="/chair/essay · § I — IX" code="DOSS · OLS · ESSAY" />

      <div className="chair-pad" style={{
        maxWidth: 1200, margin: "0 auto", padding: "60px 60px 80px",
        position: "relative", zIndex: 1,
      }}>
        <Masthead />
        <Epigraph />
        <TOC />

        <Body>
          <SectionMark n="I" title="A Figure" />
          <DropCapP>
            The chair we are concerned with does not yet exist. This is its
            first feature. The Ouroboros Life System, in the form I will
            describe it, is a single-occupant residential apparatus that
            integrates nutritional, hydrational, eliminative, neurological,
            and productivity-feedback subsystems into a continuous closed
            loop. It is sold to its occupant as the elimination of the
            friction between living, working, and consuming. The occupant
            is seated, ringed, and integrated.
          </DropCapP>
          <P>
            The chair is a figure. It does not exist as such. The apparatus
            it diagrams is everywhere. The premise of this essay is that
            the chair is the most lucid figure we have for what the
            contemporary libidinal economy has been becoming, and that
            looking at the chair is easier than looking at the apparatus
            directly.
          </P>
          <P>
            A few things follow. The closed-loop libidinal economy is
            here already, distributed across the platforms,
            devices, and consent rituals we inhabit. Its concentration
            into a single piece of furniture is useful as a thought
            experiment because the apparatus&apos;s distribution is what
            makes it hard to see. It has a developmental morphology —
            what I have elsewhere called <em>OHCOSE</em>, a six-phase
            lifecycle that organizes the occupant&apos;s relation to it
            from onboarding to estate.<Fn n="1" />
          </P>
          <P>
            So: half fiction, half aggregation. The fiction is the chair
            itself, which you can imagine sitting in. The aggregation is
            the apparatus, which every subsystem the chair contains
            actually instances, somewhere, today.
          </P>

          <SectionMark n="II" title="The Loop" />
          <P>
            The ouroboros — the snake that devours its own tail — is the
            apparatus&apos;s structural confession. The Ring, the
            chair&apos;s central integration component, encircles the
            occupant at chest height; every input the occupant requires
            and every output the occupant generates routes through the
            Ring&apos;s tubing or its embedded cable assemblies.
          </P>
          <LoopDiagram />
          <P>
            The vocabulary already exists. The <em>closed-loop libidinal
            economy</em> is the economic-and-psychic system in which
            desire is captured and re-circulated by the same apparatus
            that produces it. Lyotard proposed in 1974 that capitalism is
            most fruitfully approached &ldquo;through the lens of desire
            or libido&rdquo; — against the frame that treats it as
            material production alone.<Fn n="3" />
          </P>
          <P>
            The loop has two features that distinguish it from earlier
            forms of capture. It has no outside: every output the subject
            generates is fed back as input. And it is satisfaction-seeking
            but never satiating — Baudrillard&apos;s &ldquo;perpetual
            cycle of mild satisfaction and renewed longing&rdquo; made
            into architecture.<Fn n="4" />
          </P>
          <Pull>The chair is the platform with the furniture put back.</Pull>

          <SectionMark n="III" title="Psychic Surplus" />
          <P>
            What is the apparatus extracting? Something that sits just
            past labor, at its edge — close enough that Marx&apos;s{" "}
            <em>surplus labor</em> almost reaches it, and falls short.
            The construct I have used for what the contemporary
            apparatus actually takes is <em>psychic surplus</em>:
            the portion of our attention, affect, fantasy, and motivation
            that exceeds what is strictly required for biological survival
            and that can be captured and re-routed by the apparatus
            without compromising the subject&apos;s continued
            functioning.<Fn n="5" />
          </P>
          <P>
            Psychic surplus is what the chair runs on. So do Meta&apos;s
            advertising network, TikTok&apos;s For-You feed,
            Pornhub&apos;s preference-assignment engine. The chair is the
            same extraction concentrated into a piece of furniture, where
            what was diffuse becomes visible.
          </P>

          <SectionMark n="IV" title="OHCOSE" />
          <P>
            The apparatus is a developmental
            sequence. I name its six phases OHCOSE: <em>Onboarding</em>,{" "}
            <em>Habituation</em>, <em>Calibration</em>, <em>Occupancy</em>,{" "}
            <em>Stewardship</em>, <em>Estate</em>. The apparatus relates
            to its occupant differently in each. The figure below makes
            the relation interactive — click a phase, drag the journey
            scrubber.
          </P>
        </Body>

        {/* Interactive plate sits outside the centered prose column */}
        <OHCOSEWheel />

        <Body>
          <P>
            A note on object relations. Klein&apos;s account of the
            paranoid-schizoid and depressive positions, and
            Winnicott&apos;s account of the transitional object, are still
            the best psychoanalytic descriptions of how a subject comes
            to treat a non-self object as constitutive of self.<Fn n="11" />{" "}
            Somewhere between Onboarding and Calibration the apparatus
            becomes, for the occupant, a transitional object in
            Winnicott&apos;s sense. By Occupancy the transition is
            complete. The occupant cannot distinguish their preferences
            from the apparatus&apos;s modeling of their preferences.
          </P>

          <SectionMark n="V" title="The Seven Subsystems" />
          <P>
            The apparatus is, technically, an integration of seven
            subsystems. The naming is mine. The functions are real.
            The longer treatments are at <Link href="/chair/subsystems">
            subsystems</Link>; here I will just name them.
          </P>
          <SubsystemsList />
          <P>
            The list of seven is misleading if read as a list of seven
            separate things. The subsystems are facets of one operation
            — the closed loop running — and the analytic question is
            usually <em>which moment of the loop the occupant is currently
            inside</em>, rarely <em>which subsystem</em>. I call the
            loop&apos;s temporal organization <em>Capture of Cadence</em>.
            <Fn n="13" />
          </P>

          <SectionMark n="VI" title="The Apparatus Already Exists" />
          <P>
            The chair is a figure. The apparatus is real. Four
            well-documented cases.
          </P>
          <P>
            <Link href="/chair/precedents/meta-emotional-contagion">
            Meta&apos;s 2014 emotional-contagion experiment</Link> demonstrated
            that algorithmic adjustment of users&apos; news feeds could
            induce specified emotional states in roughly one in fifty
            users.<Fn n="14" /> This is the apparatus&apos;s Desire Engine.
          </P>
          <P>
            <Link href="/chair/precedents/tiktok-cadence">TikTok&apos;s
            recommendation engine</Link> infers preferences from
            micro-gestural responses. The technical stack is identical to
            that of an affective-computing medical device; the regulatory
            framing is identical to that of an entertainment service.
          </P>
          <P>
            <Link href="/chair/precedents/pornhub-preference-assignment">
            Pornhub&apos;s recommendation engine</Link> has been documented
            to assign sexual preferences to users without explicit consent
            after fewer than a hundred video views.<Fn n="15" />
          </P>
          <P>
            <Link href="/chair/precedents/social-credit-system">China&apos;s
            Social Credit System</Link> scores citizens against a behavioral
            compliance metric and routes the score into access to flights,
            housing, and credit.<Fn n="16" /> The Compliance Monitor, in
            state form.
          </P>

          <SectionMark n="VII" title="The 160-Year Lineage" />
          <P>
            The apparatus has historical depth. Six iterations across 160
            years. Below: click any iteration tick to see the
            brochure&apos;s claim against the historical record.
          </P>
        </Body>

        <LineageScrubber />

        <Body>
          <P>
            The lineage is partial. Two of the named devices shipped only
            in tiny quantities; the connections between iterations are
            reconstructed retrospectively; the contemporaneous record
            does not document them. The morphological argument is
            independent of the contemporaneous-development one.<Fn n="18" />
          </P>

          <SectionMark n="VIII" title="Tri-Axial Ouroboric Governance" />
          <P>
            The apparatus loops desire along three axes simultaneously,
            and a great deal of the existing literature, in my reading,
            misses the apparatus by engaging only one of them. The
            framework I have developed to keep all three in view is{" "}
            <em>Tri-Axial Ouroboric Governance</em> — TAOG.<Fn n="19" />
          </P>
        </Body>

        <TAOGTriangle />

        <Body>
          <P>
            TAOG&apos;s claim is that the contemporary apparatus runs all
            three axes at once, at the same scale, and that any analysis
            engaging only one will miss the apparatus by exactly the
            margin of the other two.
          </P>

          <SectionMark n="IX" title="Refusal" />
          <P>
            A politics is owed. The longer treatment is at{" "}
            <Link href="/chair/refusal">/chair/refusal</Link>, where I add
            a fourth move. Here I sketch the first three.
          </P>
          <P>
            <strong>One.</strong> Withhold the consent. The apparatus&apos;s
            grip is secured by the cumulative effect of small consents.
            Refusing them leaves the apparatus standing but forecloses
            its legal alibis.
          </P>
          <P>
            <strong>Two.</strong> Interrupt the cadence. Withhold
            attention at the moment the apparatus has scheduled it to
            fire: be slow when speed is demanded, silent when noise is
            rewarded, inattentive when engagement is metered.
          </P>
          <P>
            <strong>Three.</strong> Accept the friction. The friction the
            apparatus eliminates is frequently the very friction in which
            non-apparatus-mediated life consists.
          </P>
          <Pull>Smallness is what keeps it defensible.</Pull>
          <P>
            The moves preserve the capacity to recognize the
            apparatus as an apparatus, and to act on the recognition. That
            recognition is what the rest of this project has been trying
            to make available.
          </P>
        </Body>

        <Coda />
        <Signature />
        <Notes />
        <Companions />
        <Artifacts />
      </div>

      <PlateFooter folio="I" total="42" section="Essay · On the Chair" />
    </article>
  );
}

// ──────────────────────────────────────────────────────────────────
// MASTHEAD / EPIGRAPH / TOC
// ──────────────────────────────────────────────────────────────────

function Masthead() {
  return (
    <header style={{ marginBottom: "3rem", paddingBottom: "2.5rem",
                       borderBottom: `0.5px solid ${T.rule}` }}>
      <div style={{
        display: "flex", justifyContent: "space-between",
        fontFamily: FONT.mono, fontSize: "0.7rem", letterSpacing: "0.22em",
        textTransform: "uppercase", color: T.inkMute, marginBottom: "2rem",
      }}>
        <span style={{ color: T.accent, fontWeight: 600 }}>● Specimen 06 of the lineage</span>
        <span style={{ color: T.accent }}>● live · cohort 2026</span>
      </div>

      <HeroChair withCallouts={true} />

      <h1 style={{
        fontFamily: FONT.serif, fontStyle: "italic", fontWeight: 400,
        fontSize: "clamp(3.5rem, 9vw, 7rem)", lineHeight: 0.92,
        letterSpacing: "-0.025em", color: T.ink, margin: "3rem 0 1rem",
        textAlign: "center",
      }}>On the Chair.</h1>
      <p style={{
        fontFamily: FONT.serif, fontSize: "1.3rem", lineHeight: 1.45,
        color: T.inkDim, margin: 0, fontStyle: "italic", textAlign: "center",
        maxWidth: "36rem", marginInline: "auto",
      }}>
        Notes toward a theory of the closed-loop libidinal economy.
      </p>
      <div style={{
        marginTop: "2.4rem", paddingTop: "1.2rem", paddingBottom: "0.4rem",
        borderTop: `0.5px solid ${T.rule}`,
        display: "flex", justifyContent: "center", gap: "1.6rem",
        flexWrap: "wrap", fontFamily: FONT.mono, fontSize: "0.7rem",
        letterSpacing: "0.22em", color: T.inkMute, textTransform: "uppercase",
      }}>
        <span style={{ color: T.ink }}>Adnan Selimović</span>
        <span aria-hidden style={{ opacity: 0.4 }}>·</span>
        <span>May 2026</span>
        <span aria-hidden style={{ opacity: 0.4 }}>·</span>
        <span>≈ 3 000 words</span>
        <span aria-hidden style={{ opacity: 0.4 }}>·</span>
        <span>9 §§ · 19 notes</span>
      </div>
    </header>
  );
}

function Epigraph() {
  return (
    <blockquote style={{
      margin: "0 auto 3.5rem", maxWidth: "38rem", textAlign: "center",
      fontFamily: FONT.serif, fontStyle: "italic", fontSize: "1.3rem",
      lineHeight: 1.5, color: T.ink,
    }}>
      &ldquo;I am not, on the whole, less happy. I am less sure what I
      would do with the chair turned off.&rdquo;
      <footer style={{
        marginTop: "1rem", fontFamily: FONT.mono, fontSize: "0.7rem",
        letterSpacing: "0.22em", color: T.inkMute, textTransform: "uppercase",
        fontStyle: "normal",
      }}>— M.K., Pro · Cohort 2026.04</footer>
    </blockquote>
  );
}

function TOC() {
  const entries: [string, string][] = [
    ["I", "A Figure"], ["II", "The Loop"], ["III", "Psychic Surplus"],
    ["IV", "OHCOSE"], ["V", "The Seven Subsystems"], ["VI", "The Apparatus Already Exists"],
    ["VII", "The 160-Year Lineage"], ["VIII", "Tri-Axial Ouroboric Governance"], ["IX", "Refusal"],
  ];
  return (
    <nav aria-label="Contents" style={{
      margin: "0 0 3.5rem", padding: "1.4rem 0",
      borderTop: `1px solid ${T.rule}`, borderBottom: `1px solid ${T.rule}`,
    }}>
      <p style={{
        fontFamily: FONT.mono, fontSize: "0.7rem", letterSpacing: "0.28em",
        color: T.accent, textTransform: "uppercase",
        margin: "0 0 1rem", fontWeight: 600,
      }}>◆ Contents</p>
      <ol className="essay-toc-cols" style={{
        listStyle: "none", padding: 0, margin: 0,
        columnCount: 3, columnGap: "2rem",
      }}>
        {entries.map(([n, title]) => (
          <li key={n} style={{ padding: "0.25rem 0", breakInside: "avoid" }}>
            <a href={`#section-${n.toLowerCase()}`} style={{
              fontFamily: FONT.serif, fontSize: "1rem", color: T.ink,
              textDecoration: "none", display: "grid",
              gridTemplateColumns: "2.4rem 1fr", gap: "0.4rem",
              alignItems: "baseline",
            }}>
              <span style={{
                fontFamily: FONT.mono, fontSize: "0.7rem", color: T.inkMute,
                letterSpacing: "0.18em",
              }}>§ {n}</span>
              <span style={{ fontStyle: "italic" }}>{title}</span>
            </a>
          </li>
        ))}
      </ol>
      <style>{`
        @media (max-width: 900px) {
          .essay-toc-cols { column-count: 2 !important; }
        }
        @media (max-width: 600px) {
          .essay-toc-cols { column-count: 1 !important; }
        }
      `}</style>
    </nav>
  );
}

// ──────────────────────────────────────────────────────────────────
// PROSE PRIMITIVES — center column, ≈ 44rem.
// ──────────────────────────────────────────────────────────────────

function Body({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      maxWidth: "40rem", marginInline: "auto", marginBlock: "2rem",
    }}>{children}</div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: FONT.serif, fontSize: "1.075rem", lineHeight: 1.72,
      color: T.ink, margin: "0 0 1.2rem", textWrap: "pretty",
    }}>{children}</p>
  );
}

function DropCapP({ children }: { children: React.ReactNode }) {
  return (
    <p className="chair-dropcap" style={{
      fontFamily: FONT.serif, fontSize: "1.075rem", lineHeight: 1.72,
      color: T.ink, margin: "0 0 1.4rem",
    }}>{children}</p>
  );
}

function Pull({ children }: { children: React.ReactNode }) {
  return (
    <blockquote style={{
      margin: "2.4rem 0", padding: "0 0 0 1.4rem",
      borderLeft: `2px solid ${T.accent}`,
      fontFamily: FONT.serif, fontStyle: "italic", fontWeight: 400,
      fontSize: "1.5rem", lineHeight: 1.4, color: T.ink,
      letterSpacing: "-0.008em",
    }}>{children}</blockquote>
  );
}

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} style={{
      color: T.ink, textDecoration: "underline",
      textDecorationColor: T.accent, textDecorationThickness: 1.5,
      textUnderlineOffset: 3,
    }}>{children}</a>
  );
}

function Fn({ n }: { n: string }) {
  return (
    <sup>
      <a href={`#note-${n}`} id={`ref-${n}`} style={{
        fontFamily: FONT.mono, color: T.accent, textDecoration: "none",
        fontSize: "0.7em", padding: "0 0.15em", fontWeight: 600,
      }}>[{n}]</a>
    </sup>
  );
}

// ──────────────────────────────────────────────────────────────────
// FIGURES + END MATTER
// ──────────────────────────────────────────────────────────────────

function LoopDiagram() {
  return (
    <figure style={{ margin: "2rem 0 2.4rem" }}>
      <svg viewBox="0 0 600 300" style={{ width: "100%", height: "auto", display: "block" }}>
        <ellipse cx="300" cy="150" rx="220" ry="100" fill="none"
                 stroke={T.ink} strokeWidth="0.8" opacity="0.7" />
        <polygon points="520,150 510,144 510,156" fill={T.accent} />
        <polygon points="80,150 90,144 90,156" fill={T.accent} />
        <circle cx="80" cy="150" r="36" fill={T.paper} stroke={T.ink} strokeWidth="1" />
        <text x="80" y="155" textAnchor="middle" fontFamily={FONT.serif}
              fontStyle="italic" fontSize="14" fill={T.ink}>subject</text>
        <circle cx="520" cy="150" r="36" fill={T.paper} stroke={T.ink} strokeWidth="1" />
        <text x="520" y="155" textAnchor="middle" fontFamily={FONT.serif}
              fontStyle="italic" fontSize="14" fill={T.ink}>apparatus</text>
        <text x="300" y="38" textAnchor="middle" fontFamily={FONT.mono}
              fontSize="10" fill={T.accent} letterSpacing="0.22em">
          PSYCHIC SURPLUS  ·  OUTPUT
        </text>
        <text x="300" y="272" textAnchor="middle" fontFamily={FONT.mono}
              fontSize="10" fill={T.accent} letterSpacing="0.22em">
          MODULATED DESIRE  ·  RETURN
        </text>
      </svg>
      <figcaption style={{
        marginTop: "0.6rem", fontFamily: FONT.mono, fontSize: "0.7rem",
        color: T.inkMute, letterSpacing: "0.16em",
        textTransform: "uppercase", textAlign: "center",
      }}>Fig. 1 · The closed loop · subject and apparatus</figcaption>
    </figure>
  );
}

function SubsystemsList() {
  const rows: [string, string, string, string][] = [
    ["desire-engines", "Desire Engines", "Content surfaces that generate desire-objects calibrated to the occupant's response profile.", "Deleuze & Guattari · Baudrillard · McLuhan"],
    ["consent-loops", "Consent Loops", "Ritualised agreement architecture through which the occupant's participation is repeatedly legitimized.", "Foucault · legal-positivist tradition"],
    ["compliance-monitors", "Compliance Monitors", "Continuous behavioral surveillance and correction systems.", "Foucault · Bentham · Zuboff"],
    ["surplus-reservoirs", "Surplus Reservoirs", "Data and capital aggregation systems where the apparatus stores what it has extracted.", "Marx, transposed · Zuboff"],
    ["feedback-rituals", "Feedback Rituals", "Micro-rewards and acknowledgments that reinforce continued participation.", "Klein · Winnicott · Skinner · casino industry"],
    ["affective-signal-translators", "Affective Signal Translators", "Biometric and neuro-monitoring systems that read the occupant's interior states.", "Preciado · Damasio · affective computing"],
    ["algorithmic-libido-governors", "Algorithmic Libido Governors", "Macro-level systems that modulate desire's intensity across the population.", "Lyotard · Berardi · cybernetics tradition"],
  ];
  return (
    <ol style={{
      listStyle: "none", padding: 0, margin: "1.4rem 0 1.4rem",
      borderTop: `1px solid ${T.rule}`,
    }}>
      {rows.map(([slug, name, body, lineage], i) => (
        <li key={i} style={{ borderBottom: `1px solid ${T.rule}` }}>
          <a href={`/chair/subsystems/${slug}`} style={{
            display: "grid", gridTemplateColumns: "2rem 1fr auto",
            gap: "1rem", padding: "0.9rem 0",
            textDecoration: "none", color: "inherit", alignItems: "baseline",
          }}>
            <span style={{
              fontFamily: FONT.mono, fontSize: "0.7rem", color: T.accent,
              letterSpacing: "0.18em", fontWeight: 700,
            }}>{String(i + 1).padStart(2, "0")}</span>
            <div>
              <div style={{
                fontFamily: FONT.serif, fontSize: "1.08rem",
                fontStyle: "italic", color: T.ink, fontWeight: 600,
                marginBottom: 4, letterSpacing: "-0.005em",
              }}>{name}</div>
              <div style={{
                fontFamily: FONT.serif, fontSize: "0.95rem",
                color: T.inkDim, lineHeight: 1.55, marginBottom: 6,
              }}>{body}</div>
              <div style={{
                fontFamily: FONT.mono, fontSize: "0.7rem",
                color: T.inkMute, letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}>Inheritance: {lineage}</div>
            </div>
            <span aria-hidden style={{
              fontFamily: FONT.mono, fontSize: "0.78rem",
              color: T.accent, letterSpacing: "0.06em",
            }}>→</span>
          </a>
        </li>
      ))}
    </ol>
  );
}

function Coda() {
  return (
    <section aria-label="Coda" style={{
      margin: "4rem auto 0", maxWidth: "36rem", textAlign: "center",
      paddingTop: "3rem", borderTop: `1px solid ${T.rule}`,
    }}>
      <p style={{
        fontFamily: FONT.mono, fontSize: "0.7rem", letterSpacing: "0.28em",
        color: T.accent, textTransform: "uppercase",
        margin: "0 0 1.6rem", fontWeight: 600,
      }}>◆ Coda</p>
      <p style={{
        fontFamily: FONT.serif, fontStyle: "italic", fontSize: "1.15rem",
        lineHeight: 1.6, color: T.ink, margin: "0 0 1.4rem",
      }}>
        I have stopped trying to write this essay from outside the
        apparatus. The position does not exist. What I have been able to
        do is describe the apparatus from a position inside it that has
        not yet been completely calibrated, and that retains the capacity
        to recognize the calibration in progress.
      </p>
      <p style={{
        fontFamily: FONT.serif, fontStyle: "italic", fontSize: "1.15rem",
        lineHeight: 1.6, color: T.ink, margin: 0,
      }}>
        It is, in any case, late. Cohort 2026.05 opens next month.
      </p>
    </section>
  );
}

function Signature() {
  return (
    <div style={{
      marginTop: "3.5rem", paddingTop: "2rem",
      fontFamily: FONT.mono, fontSize: "0.7rem", letterSpacing: "0.22em",
      color: T.inkMute, textTransform: "uppercase", textAlign: "center",
      display: "flex", justifyContent: "center", gap: "1.6rem", flexWrap: "wrap",
    }}>
      <span style={{ color: T.ink }}>Adnan Selimović</span>
      <span aria-hidden style={{ opacity: 0.4 }}>·</span>
      <span>Brooklyn, May 2026</span>
      <span aria-hidden style={{ opacity: 0.4 }}>·</span>
      <span>Volume Ω.026</span>
    </div>
  );
}

const NOTES: { n: string; body: React.ReactNode }[] = [
  { n: "1", body: <>OHCOSE is the working name for the six-phase lifecycle model. The phases are a research apparatus; the occupant&apos;s lived sequence may run them in any order.</> },
  { n: "3", body: <>Jean-François Lyotard, <em>Libidinal Economy</em> (1974); Grant&apos;s translation introduces the &ldquo;libido as method&rdquo; framing.</> },
  { n: "4", body: <>Jean Baudrillard, <em>La société de consommation</em> (1970); the phrase paraphrases Baudrillard in my own words.</> },
  { n: "5", body: <>I use the term as my own, though I did not originate it; see Selimović 2024 and the manuscripts for <em>Theory, Culture &amp; Society</em>.</> },
  { n: "11", body: <>Melanie Klein, &ldquo;Notes on Some Schizoid Mechanisms&rdquo; (1946); D. W. Winnicott, <em>Playing and Reality</em> (1971).</> },
  { n: "13", body: <>Capture of Cadence is one of the project&apos;s named frameworks; see <Link href="/closed-loop/the-dynamics">the dynamics</Link>.</> },
  { n: "14", body: <>Kramer, Guillory, Hancock, &ldquo;Experimental evidence of massive-scale emotional contagion through social networks,&rdquo; <em>PNAS</em> 111 (2014): 8788–8790.</> },
  { n: "15", body: <>The 2020 reporting on Pornhub&apos;s recommendation engine is the most accessible documentation.</> },
  { n: "16", body: <>The literature on the Chinese Social Credit System is uneven; I recommend the dispassionate operational accounts.</> },
  { n: "18", body: <>The archive treats the lineage as a 21st-century marketing retcon. The morphological argument is independent of the contemporaneous-development claim.</> },
  { n: "19", body: <>TAOG is one of the project&apos;s named frameworks. See the formalisation at <Link href="/closed-loop/the-mathematics">the mathematics</Link>.</> },
];

function Notes() {
  return (
    <section aria-label="Notes" style={{
      marginTop: "4rem", paddingTop: "2rem",
      borderTop: `1px solid ${T.rule}`, maxWidth: "40rem", marginInline: "auto",
    }}>
      <h3 style={{
        fontFamily: FONT.mono, fontSize: "0.7rem", letterSpacing: "0.28em",
        color: T.accent, textTransform: "uppercase",
        fontWeight: 600, margin: "0 0 1.4rem",
      }}>Notes</h3>
      <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {NOTES.map((note) => (
          <li key={note.n} id={`note-${note.n}`} style={{
            padding: "0.5rem 0", borderBottom: `1px solid ${T.rule}`,
            display: "grid", gridTemplateColumns: "2.4rem 1fr",
            gap: "0.5rem", alignItems: "baseline",
          }}>
            <a href={`#ref-${note.n}`} style={{
              fontFamily: FONT.mono, fontSize: "0.78rem",
              color: T.accent, fontWeight: 700, textDecoration: "none",
              letterSpacing: "0.04em",
            }}>[{note.n}]</a>
            <div style={{
              fontFamily: FONT.serif, fontSize: "0.94rem",
              lineHeight: 1.55, color: T.inkDim,
            }}>{note.body}</div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Companions() {
  const items = [
    { href: "/chair/subsystems", label: "Seven Subsystems",
      sub: "Long-form treatment of each subsystem in §V.", section: "§ V Extended" },
    { href: "/chair/precedents", label: "Precedents",
      sub: "The four documented cases §VI names.", section: "§ VI Extended" },
    { href: "/chair/lineage", label: "Lineage",
      sub: "Six iterations across 160 years, verified.", section: "§ VII Extended" },
    { href: "/chair/refusal", label: "On Refusal",
      sub: "Longer treatment of §IX. Four moves.", section: "§ IX Extended" },
    { href: "/chair/concepts", label: "Concepts",
      sub: "Working definitions of the project's named frameworks.", section: "Reference" },
  ];
  return (
    <section aria-label="Companion essays" style={{
      marginTop: "4rem", paddingTop: "2rem",
      borderTop: `1px solid ${T.rule}`, maxWidth: "40rem", marginInline: "auto",
    }}>
      <h3 style={{
        fontFamily: FONT.mono, fontSize: "0.7rem", letterSpacing: "0.28em",
        color: T.accent, textTransform: "uppercase",
        fontWeight: 600, margin: "0 0 1.4rem",
      }}>Companion Essays</h3>
      <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((it) => (
          <li key={it.href} style={{ padding: "1rem 0", borderTop: `1px solid ${T.rule}` }}>
            <a href={it.href} style={{
              display: "grid", gridTemplateColumns: "5.5rem 1fr",
              gap: "0.6rem", textDecoration: "none", color: T.ink,
            }}>
              <span style={{
                fontFamily: FONT.mono, fontSize: "0.7rem",
                color: T.accent, letterSpacing: "0.18em",
                textTransform: "uppercase", fontWeight: 700,
              }}>{it.section}</span>
              <div>
                <div style={{
                  fontFamily: FONT.serif, fontStyle: "italic",
                  fontSize: "1.2rem", color: T.ink, marginBottom: 4,
                }}>{it.label}</div>
                <div style={{
                  fontFamily: FONT.serif, fontSize: "0.95rem",
                  lineHeight: 1.55, color: T.inkDim,
                }}>{it.sub}</div>
              </div>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Artifacts() {
  // The full route map. Grouped by document type so the reader can
  // see the project's shape at a glance and navigate to any surface.
  // This is the section the layout footer's "route map" link points at.
  const groups: { heading: string; items: { href: string; label: string; sub: string; plate?: string }[] }[] = [
    {
      heading: "Essay & companions",
      items: [
        { href: "/chair/essay", plate: "I",   label: "On the Chair",   sub: "The essay — nine sections — the project's spine." },
        { href: "/chair/subsystems", plate: "V",    label: "The Seven Subsystems",  sub: "§ V Extended — long-form treatments of each apparatus subsystem." },
        { href: "/chair/precedents", plate: "VI",   label: "Precedents",            sub: "§ VI Extended — four documented cases: Meta, TikTok, Pornhub, PRC social credit." },
        { href: "/chair/lineage",    plate: "VII",  label: "Lineage",               sub: "§ VII Extended — six iterations across 160 years, brochure-claim vs. record." },
        { href: "/chair/refusal",    plate: "IX",   label: "On Refusal",            sub: "§ IX Extended — four moves toward a politics of refusal." },
        { href: "/chair/concepts",   plate: "RF",   label: "Concepts",              sub: "Reference — working definitions of the project's named frameworks." },
      ],
    },
    {
      heading: "Three artifacts",
      items: [
        { href: "/chair", plate: "II",   label: "The Brochure",          sub: "The apparatus speaking in its own voice — clinical showroom register." },
        { href: "/chair/zine",       plate: "III",  label: "The Resistance Pamphlet",sub: "Anti-copyright protest media. The voice of the occupants who refused." },
        { href: "/chair/archive",    plate: "VIII", label: "The Imperial Archive",  sub: "Future-historian retrospective, c. 2197. Slate inversion." },
      ],
    },
    {
      heading: "End matter",
      items: [
        { href: "/chair/colophon",   plate: "XLII", label: "Colophon",              sub: "Production credits, typography, citation, version log, license." },
      ],
    },
  ];
  return (
    <section
      id="routes"
      aria-label="Route map"
      style={{
        marginTop: "4rem", paddingTop: "2rem",
        borderTop: `1px solid ${T.rule}`, maxWidth: "40rem", marginInline: "auto",
      }}
    >
      <h3 style={{
        fontFamily: FONT.mono, fontSize: "0.7rem", letterSpacing: "0.28em",
        color: T.accent, textTransform: "uppercase",
        fontWeight: 600, margin: "0 0 0.4rem",
      }}>● Route map</h3>
      <p style={{
        fontFamily: FONT.serif, fontStyle: "italic",
        fontSize: "0.98rem", lineHeight: 1.55, color: T.inkDim,
        margin: "0 0 2rem",
      }}>
        Every surface in the volume. The essay is the spine. The
        companions extend its sections. The three artifacts are
        appended primary documents — mutually contradictory in voice,
        each one partial. The colophon breaks character.
      </p>
      {groups.map((g) => (
        <div key={g.heading} style={{ marginBottom: "2.2rem" }}>
          <div style={{
            fontFamily: FONT.mono, fontSize: "0.7rem", letterSpacing: "0.24em",
            color: T.inkMute, textTransform: "uppercase",
            fontWeight: 600, margin: "0 0 0.8rem",
            paddingBottom: "0.4rem",
            borderBottom: `0.5px solid ${T.rule}`,
          }}>
            {g.heading}
          </div>
          <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {g.items.map((it) => (
              <li key={it.href} style={{ borderBottom: `0.5px solid ${T.rule}` }}>
                <a
                  href={it.href}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 3rem 1fr auto",
                    gap: "0.9rem",
                    padding: "0.95rem 0",
                    textDecoration: "none",
                    color: T.ink,
                    alignItems: "center",
                  }}
                >
                  <ChairGlyph size={22} stroke={T.accent} />
                  {it.plate ? (
                    <span style={{
                      fontFamily: FONT.mono, fontSize: "0.7rem",
                      letterSpacing: "0.16em", color: T.accent,
                      fontWeight: 700,
                    }}>
                      {it.plate}
                    </span>
                  ) : <span />}
                  <div>
                    <div style={{
                      fontFamily: FONT.serif, fontStyle: "italic",
                      fontSize: "1.12rem", color: T.ink, marginBottom: 2,
                      letterSpacing: "-0.005em",
                    }}>{it.label}</div>
                    <div style={{
                      fontFamily: FONT.serif, fontSize: "0.92rem",
                      lineHeight: 1.5, color: T.inkDim,
                    }}>{it.sub}</div>
                  </div>
                  <span style={{
                    fontFamily: FONT.mono, color: T.accent, fontSize: "0.95rem",
                  }}>→</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </section>
  );
}
