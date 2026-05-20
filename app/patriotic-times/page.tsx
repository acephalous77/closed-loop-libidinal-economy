import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: { absolute: "Patriotic Times — A Coloring Book" },
  alternates: { canonical: "/patriotic-times" },
};

// Palette — riso zine
const INK = "#0a0a0a";
const INK_70 = "#3d342a";
const INK_50 = "#6b5e4d";
const INK_30 = "#9a8d77";
const PAPER = "#f4ecdc";
const PAPER_DEEP = "#e8dcc0";
const RED = "#b8222a";

const MONO = `var(--font-jetbrains-mono), ui-monospace, "SF Mono", Menlo, monospace`;
const DISPLAY = `-apple-system, "Inter", "Helvetica Neue", "Arial Black", "Impact", system-ui, sans-serif`;
const SERIF = `"Iowan Old Style", "Charter", Georgia, "Times New Roman", serif`;

interface Event {
  year: string;
  title: string;
  note?: string;
}

interface Chapter {
  no: string;
  title: string;
  range: string;
  thesis: string;
  events: Event[];
  plate?: { src: string; caption: string; sub?: string };
}

const CHAPTERS: Chapter[] = [
  {
    no: "I",
    title: "The Architecture of Fear",
    range: "2000—2009",
    thesis:
      "The rapid, post-9/11 expansion of the security state; the loss of civil liberties; the early privatization of force.",
    events: [
      { year: "2000", title: "The Brooks Brothers Riot", note: "Corporate intimidation disrupts the vote." },
      { year: "2001", title: "The USA PATRIOT Act", note: "The death of privacy." },
      { year: "2002", title: "Creation of DHS & ICE", note: "The domestic security apparatus is born." },
      { year: "2004", title: "Guantanamo on the Hudson", note: "Preemptive mass arrests at the RNC." },
      { year: "2004", title: "The Abu Ghraib Photographs", note: "Unchecked executive cruelty." },
      { year: "2005", title: "Blackwater in New Orleans", note: "Private mercenaries patrol American streets." },
      { year: "2006", title: "The Military Commissions Act", note: "The stripping of habeas corpus." },
      { year: "2008", title: "St. Paul RNC Preemptive Raids", note: "Domestic activists as terror threats." },
      { year: "2009", title: "Portsmouth Town Hall", note: "Armed intimidation enters mainstream politics." },
    ],
    plate: {
      src: "/patriotic-times/plate-i-brooks-brothers.png",
      caption: "The Brooks Brothers Riot",
      sub: "Fig. I.i — Miami-Dade canvassing board, November 2000. Corporate intimidation halts the count.",
    },
  },
  {
    no: "II",
    title: "Corporate Camouflage",
    range: "2010—2016",
    thesis:
      "The state protecting corporate power, the militarization of local police, the asymmetric response to grassroots protests versus right-wing militias.",
    events: [
      { year: "2010", title: "Citizens United v. FEC", note: "Dark money floods the system." },
      { year: "2011", title: "Eviction of Zuccotti Park / UC Davis Pepper Spray", note: "Crushing Occupy Wall Street." },
      { year: "2011", title: "NDAA Indefinite Detention Clause", note: "Military jurisdiction expands." },
      { year: "2012", title: "H.R. 347", note: "Criminalization of protest near political figures." },
      { year: "2013", title: "The Snowden Revelations", note: "The physical footprint of the Panopticon." },
      { year: "2013", title: "Shelby County v. Holder", note: "Gutting the Voting Rights Act." },
      { year: "2013", title: "The Watertown Siege", note: "A suburb under military lockdown." },
      { year: "2014", title: "The Bundy Ranch Standoff", note: "Paramilitaries face down the feds." },
      { year: "2014", title: "Ferguson, Missouri", note: "Main Street becomes a war zone." },
      { year: "2015", title: "Baltimore, Maryland", note: "The National Guard locks down a city." },
      { year: "2016", title: "Malheur Wildlife Refuge", note: "An armed right-wing occupation goes unchecked." },
      { year: "2016", title: "Standing Rock", note: "Water cannons in the freezing cold for corporate oil." },
    ],
    plate: {
      src: "/patriotic-times/plate-02-mrap.png",
      caption: "MRAP on a residential street",
      sub: "Fig. II.iv — A military vehicle deploys against the citizens it was sold to as protection.",
    },
  },
  {
    no: "III",
    title: "The Theatre of Force",
    range: "2017—2020",
    thesis:
      "Federal forces deployed against citizens; state-sponsored cruelty as policy; right-wing mobilization into the streets.",
    events: [
      { year: "2017", title: "J20 Mass Arrests", note: "Felony riot charges to chill public dissent." },
      { year: "2017", title: "Charlottesville Unite the Right", note: "The torchlit march of ethno-nationalism." },
      { year: "2018", title: "Zero Tolerance at the Border", note: "Family separation as a weapon." },
      { year: "2020", title: "Michigan State Capitol", note: "Armed militias scream at state police." },
      { year: "2020", title: "Lafayette Square", note: "Violently clearing a park for a Bible photo-op." },
      { year: "2020", title: "Operation Diligent Valor in Portland", note: "Unidentified federal agents in unmarked vans." },
      { year: "2020", title: "The Plot to Kidnap Governor Whitmer", note: "Escalation to domestic terror plots." },
    ],
    plate: {
      src: "/patriotic-times/plate-iii-lafayette-square.png",
      caption: "Lafayette Square, June 1, 2020",
      sub: "Fig. III.v — Tear-gassed protesters cleared from a park for the Bible photo-op at St. John's.",
    },
  },
  {
    no: "IV",
    title: "Shattered Glass & Blank Checks",
    range: "2021—2026",
    thesis:
      "The breaking of democratic institutions; the consolidation of absolute executive power; the dawn of mass domestic enforcement.",
    events: [
      { year: "2021", title: "The January 6th Insurrection", note: "The violent breach of the transfer of power." },
      { year: "2023", title: "Expulsion of the Tennessee Three", note: "Partisan purges of elected officials." },
      { year: "2024", title: "Columbia University Hamilton Hall Raid", note: "Militarized crackdowns on student speech." },
      { year: "2024", title: "Trump v. United States", note: "The Supreme Court grants presidential immunity." },
      { year: "2025", title: "Blanket Clemency for January 6th", note: "Pardoning political violence." },
      { year: "2025", title: "Mass Deportation Apparatus", note: "The explosion of ICE detention camps." },
      { year: "2025", title: "Army Parade & 'No Kings' Protests", note: "Dictatorial aesthetics met with millions in the streets." },
    ],
    plate: {
      src: "/patriotic-times/plate-01-january-6.png",
      caption: "January 6, 2021 — the gallows on the National Mall",
      sub: "Fig. IV.i — Patriot iconography in service of the breach. The Capitol behind.",
    },
  },
];

export default function PatrioticTimesLanding() {
  return (
    <>
      {/* ============ MASTHEAD ============ */}
      <header
        style={{
          padding: "3.5rem 5vw 0",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: "3rem",
          }}
        >
          <span
            style={{
              fontFamily: MONO,
              fontSize: "0.78rem",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              color: INK_50,
            }}
          >
            A Coloring Book
          </span>
          <span
            style={{
              fontFamily: MONO,
              fontSize: "0.78rem",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              color: RED,
              fontWeight: 700,
            }}
          >
            2000 — 2026
          </span>
        </div>

        <h1
          style={{
            fontFamily: DISPLAY,
            fontWeight: 900,
            fontSize: "clamp(3.5rem, 12vw, 12rem)",
            lineHeight: 0.82,
            letterSpacing: "-0.045em",
            textTransform: "uppercase",
            margin: 0,
            color: INK,
          }}
        >
          Patriotic
          <br />
          Times<span style={{ color: RED }}>.</span>
        </h1>

        <p
          style={{
            fontFamily: SERIF,
            fontSize: "clamp(1.15rem, 1.8vw, 1.5rem)",
            fontStyle: "italic",
            fontWeight: 400,
            lineHeight: 1.35,
            color: INK_70,
            maxWidth: "44rem",
            marginTop: "2.5rem",
          }}
        >
          A coloring book of US democratic state failures and the
          emergence of fascism. Four chapters. Thirty-five plates.
          Twenty-six years.
        </p>
      </header>

      {/* ============ HERO PLATE ============ */}
      <section
        style={{
          padding: "4rem 0 4rem",
          background: PAPER_DEEP,
          margin: "5rem 0 0",
          borderTop: `1px solid ${INK}`,
          borderBottom: `1px solid ${INK}`,
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 5vw" }}>
          <Image
            src="/patriotic-times/plate-01-january-6.png"
            alt="A line-art plate depicting the gallows erected on the National Mall on January 6, 2021"
            width={1100}
            height={733}
            priority
            style={{ width: "100%", height: "auto", display: "block", background: "white" }}
          />
          <p
            style={{
              marginTop: "1.5rem",
              fontFamily: MONO,
              fontSize: "0.78rem",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: INK_50,
              textAlign: "center",
            }}
          >
            <span style={{ color: RED, fontWeight: 700 }}>Plate IV.i</span>{" "}
            — January 6, 2021. The gallows on the National Mall.
          </p>
        </div>
      </section>

      {/* ============ INTRO / FRAMING ============ */}
      <section
        style={{
          padding: "5rem 5vw",
          maxWidth: "44rem",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            fontFamily: MONO,
            fontSize: "0.78rem",
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            color: RED,
            marginBottom: "1.5rem",
            fontWeight: 700,
          }}
        >
          — Editor&apos;s Note
        </div>
        <div
          style={{
            fontFamily: SERIF,
            fontSize: "1.2rem",
            lineHeight: 1.65,
            color: INK,
          }}
        >
          <p style={{ margin: 0 }}>
            The events in this book are real. The format is a coloring
            book. The friction between those two facts is the project.
          </p>
          <p style={{ marginTop: "1.25rem", marginBottom: 0 }}>
            Each plate is drawn in clean black ink against unworked paper.
            The reader is invited to color the page. The reader is also
            invited to refuse. Either response is a position on the
            material. The book&apos;s structural claim is that there
            is no neutral encounter with what it depicts.
          </p>
          <p style={{ marginTop: "1.25rem", marginBottom: 0 }}>
            What follows is the contents. The plates themselves circulate
            separately — in print, in exhibition, in classroom — but the
            timeline is its own document. Read it that way.
          </p>
        </div>
      </section>

      {/* ============ CHAPTERS ============ */}
      <section
        style={{
          padding: "0 5vw 4rem",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {CHAPTERS.map((ch) => (
          <article
            key={ch.no}
            style={{
              borderTop: `2px solid ${INK}`,
              padding: "3.5rem 0",
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.4fr)",
              gap: "4rem",
              alignItems: "start",
            }}
            className="chapter-row"
          >
            {/* Left: Chapter masthead */}
            <header>
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
                Chapter {ch.no} · {ch.range}
              </div>
              <h2
                style={{
                  fontFamily: DISPLAY,
                  fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  lineHeight: 0.95,
                  textTransform: "uppercase",
                  margin: "0.6rem 0 0",
                  color: INK,
                }}
              >
                {ch.title}
              </h2>
              <p
                style={{
                  fontFamily: SERIF,
                  fontSize: "1.05rem",
                  fontStyle: "italic",
                  lineHeight: 1.45,
                  color: INK_70,
                  marginTop: "1.25rem",
                  marginBottom: 0,
                  maxWidth: "26rem",
                }}
              >
                {ch.thesis}
              </p>
              {ch.plate && (
                <figure style={{ margin: "2rem 0 0" }}>
                  <Image
                    src={ch.plate.src}
                    alt={ch.plate.caption}
                    width={620}
                    height={413}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      background: "white",
                      border: `1px solid ${INK}`,
                    }}
                  />
                  <figcaption
                    style={{
                      marginTop: "0.8rem",
                      fontFamily: MONO,
                      fontSize: "0.72rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.18em",
                      color: INK_50,
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: RED, fontWeight: 700 }}>
                      {ch.plate.caption}
                    </span>
                    {ch.plate.sub && (
                      <>
                        <br />
                        <span style={{ textTransform: "none", letterSpacing: "0.05em", fontFamily: SERIF, fontStyle: "italic", color: INK_70 }}>
                          {ch.plate.sub}
                        </span>
                      </>
                    )}
                  </figcaption>
                </figure>
              )}
            </header>

            {/* Right: events list */}
            <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {ch.events.map((ev, i) => (
                <li
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "5rem 1fr",
                    columnGap: "1.5rem",
                    padding: "1.1rem 0",
                    borderBottom: `1px solid ${PAPER_DEEP}`,
                    alignItems: "baseline",
                  }}
                >
                  <span
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: "1.45rem",
                      fontWeight: 900,
                      color: RED,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {ev.year}
                  </span>
                  <div>
                    <div
                      style={{
                        fontFamily: DISPLAY,
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        letterSpacing: "-0.01em",
                        color: INK,
                        lineHeight: 1.25,
                      }}
                    >
                      {ev.title}
                    </div>
                    {ev.note && (
                      <div
                        style={{
                          fontFamily: SERIF,
                          fontSize: "0.95rem",
                          fontStyle: "italic",
                          color: INK_70,
                          marginTop: "0.25rem",
                          lineHeight: 1.4,
                        }}
                      >
                        {ev.note}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </section>

      {/* ============ COLOPHON CALL ============ */}
      <section
        style={{
          padding: "5rem 5vw",
          textAlign: "center",
          borderTop: `2px solid ${INK}`,
        }}
      >
        <p
          style={{
            fontFamily: SERIF,
            fontStyle: "italic",
            fontSize: "1.35rem",
            lineHeight: 1.4,
            color: INK,
            maxWidth: "36rem",
            margin: "0 auto",
          }}
        >
          Plates are released as printable sheets through the project&apos;s
          colophon. Color them or do not.
        </p>
        <a
          href="/patriotic-times/colophon"
          style={{
            display: "inline-block",
            marginTop: "2rem",
            fontFamily: MONO,
            fontSize: "0.78rem",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: RED,
            textDecoration: "none",
            padding: "0.85rem 2rem",
            border: `2px solid ${RED}`,
            fontWeight: 700,
          }}
        >
          → Project colophon
        </a>
      </section>

      <style>{`
        @media (max-width: 760px) {
          .chapter-row {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </>
  );
}
