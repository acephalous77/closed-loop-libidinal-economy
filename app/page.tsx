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
                autostimulus publishes Adnan Selimović&apos;s work on the
                institutions that produce a subject — the feed, the school, the
                clinic, the chair — and on the loop that holds them together.
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
              At two in the morning the feed has already learned which minute you
              will spend; by the time you leave school, a record has outlasted
              the classroom; by the time you sit down, a chair is measuring the
              body it holds. The works gathered here follow the production of a
              subject through the rooms that carry it, each in the register the
              room already speaks — the agency memo, the product brochure, the
              coloring book, the atlas. One loop runs under those surfaces.
            </p>

            <p className="press-body">
              A spine runs through them:{" "}
              <Link href="/closed-loop">The Closed-Loop Libidinal Economy</Link>,
              a framework for attention under platform capture. Its{" "}
              <Link href="/closed-loop/v2-argument">v2 argument</Link> sets out
              the loop as a fixed point, gives the foreclosure lemma and the
              reclamation theorem, and separates three modes of intervention;
              the formal apparatus carries the proofs through thirteen sections
              and fifteen numbered results, while the first mathematics and first
              dynamics remain on file as the 2026 archive. Read the argument
              first, then run the plates.
            </p>

            <p className="press-body">
              Socialization is the longest room.{" "}
              <Link href="/psychopolitics-atlas">
                The Psychopolitics of Socialization
              </Link>{" "}
              maps the relational machinery that turns a crowd into a
              population, from crowding science to the present;{" "}
              <Link href="/ohcose">OHCOSE</Link> enters the same apparatus as an
              agency manual and files a life course as a case;{" "}
              <Link href="/manufacture-of-the-subject">
                The Manufacture of the Subject
              </Link>{" "}
              walks the line from crib to deathbed, the meter running from the
              first sentence. Speculative works take the loop into the showroom
              and the nursery: a{" "}
              <Link href="/chair">chair</Link> that harvests its sitter, a{" "}
              <Link href="/patriotic-times">coloring book</Link> of the national
              security state, an{" "}
              <Link href="/ouroboric-condition">atlas</Link> of psychic surplus
              and what survives it. Each keeps its own paper and ink.
            </p>

            <p className="press-body">
              The press keeps its own discipline. The pages carry no analytics and
              make no third-party requests; the reader&apos;s apparatus measures a
              session in memory and dies when the tab closes. Paper belongs to
              the work; restraint belongs to the press.
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
