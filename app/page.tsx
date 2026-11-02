import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/lib/jsonld";
import { WORKS } from "@/lib/works";
import { PressFooter, PressMasthead } from "@/components/shell/PressChrome";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.autostimulus.org";

export const metadata: Metadata = {
  title: { absolute: "autostimulus" },
  description:
    "autostimulus publishes A. Selimović's work on attention, capture, and the institutions that produce a subject.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "autostimulus",
    title: "autostimulus",
    description:
      "A press on attention, capture, and the institutions that produce a subject.",
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "autostimulus",
    description:
      "A press on attention, capture, and the institutions that produce a subject.",
  },
};

export default function PressFront() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "autostimulus",
            url: SITE_URL,
            description:
              "autostimulus publishes A. Selimović's work on attention, capture, and the institutions that produce a subject.",
            inLanguage: "en",
            author: {
              "@type": "Person",
              name: "Adnan Selimović",
              alternateName: "A. Selimović",
              url: `${SITE_URL}/author`,
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "autostimulus — works",
            url: SITE_URL,
            description:
              "The works of autostimulus: a critical-theory framework, a relational atlas of the socialization apparatus, an agency manual, a speculative chair, a coloring book, a specimen atlas, and a descent through a life metered for profit.",
            inLanguage: "en",
            hasPart: WORKS.map((work, index) => ({
              "@type": "CreativeWork",
              position: index + 1,
              name: work.title,
              url: `${SITE_URL}${work.href}`,
              dateCreated: work.year,
              creativeWorkStatus:
                work.status === "live" ? "Published" : "InProduction",
              creator: { "@type": "Person", name: "Adnan Selimović" },
            })),
          },
        ]}
      />

      <PressMasthead current="works" />

      <main className="press-shell">
        <article className="press-article">
          <header className="press-hero">
            <div>
              <h1 className="press-display">The loop is closed.</h1>
              <p className="press-standfirst">
                autostimulus publishes A. Selimović&apos;s work on attention,
                capture, and the institutions that produce a subject.
              </p>
            </div>

            <aside className="press-margin-quote" aria-label="From the framework">
              <blockquote>
                There is no exogenous channel in the model.
              </blockquote>
              <p className="press-quote-attrib">
                <Link href="/closed-loop/v2-argument">
                  The Closed-Loop Libidinal Economy
                </Link>
              </p>
            </aside>
          </header>

          <section id="works" aria-labelledby="works-heading">
            <h2 id="works-heading" className="sr-only">
              The works
            </h2>

            <p className="press-body">
              The works follow one concern through the institutions that produce
              a subject. A feed at two in the morning, a school record, an exit
              interview, a chair that measures the body it holds: each is a
              station in the same loop, and each work takes the register that
              station already speaks. From 2015 to 2026, the works keep the paper
              and ink of the institutions they describe.
            </p>

            <p className="press-body">
              The spine of the press is{" "}
              <Link href="/closed-loop">The Closed-Loop Libidinal Economy</Link>,
              a framework for attention under platform capture. Its{" "}
              <Link href="/closed-loop/v2-argument">v2 argument</Link> sets out
              the loop, a foreclosure lemma, a reclamation theorem, and three
              modes of intervention. The apparatus runs through thirteen sections
              and fifteen numbered results; the mathematics of v1 remains on file
              as the 2026 archive. The prose moves between the essay and the
              operable plate. A reader can follow the argument and then run it.
            </p>

            <p className="press-body">
              Socialization holds a person longest.{" "}
              <Link href="/psychopolitics-atlas">
                The Psychopolitics of Socialization
              </Link>{" "}
              maps the relational machinery of that apparatus, from crowding
              science to the population present.{" "}
              <Link href="/ohcose">OHCOSE</Link> files the life course as a case
              inside the Office of Human Continuity and Social Equilibrium; its
              manual is written in the flat voice of an agency that keeps a file
              on the reader.{" "}
              <Link href="/manufacture-of-the-subject">
                The Manufacture of the Subject
              </Link>{" "}
              begins at the crib and ends at the deathbed. From the first line,
              the meter runs on the reader.
            </p>

            <p className="press-body">
              Speculative design takes the loop out of the institution and puts
              it in the reader&apos;s hands. A product brochure and zine for a
              chair that harvests its sitter,{" "}
              <Link href="/chair">The Ouroboros Life System</Link> speaks in the
              warmth of a furniture catalog while the product does what the copy
              admits. <Link href="/patriotic-times">Patriotic Times</Link>{" "}
              renders the national security state as a coloring book; the crayon carries
              the argument into the reader&apos;s hand.{" "}
              <Link href="/ouroboric-condition">
                The Ouroboric Condition
              </Link>{" "}
              is the earliest of the atlases, a specimen collection of psychic
              surplus. It asks what survives capture and what it costs.
            </p>

            <p className="press-body">
              Each work keeps its own paper, and the shell around them keeps a
              discipline of its own. It carries no analytics and makes no
              third-party requests; its reader&apos;s instrument measures in
              memory and dies with the tab.
            </p>
          </section>

          <PressFooter
            note={
              <>
                Texts are CC BY-SA 4.0; code is MIT. The{" "}
                <Link href="/colophon">colophon</Link> records the fonts and
                permissions.
              </>
            }
          />
        </article>
      </main>
    </>
  );
}
