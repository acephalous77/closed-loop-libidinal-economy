import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/lib/jsonld";
import { PressFooter, PressMasthead } from "@/components/shell/PressChrome";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.autostimulus.org";

const AUTHOR_URL = `${SITE_URL}/author`;
const AUTHOR_ID = `${AUTHOR_URL}#person`;

export const metadata: Metadata = {
  title: { absolute: "Adnan Selimović — author" },
  description:
    "Adnan Selimović is a critical theorist and writer in Blacksburg, Virginia. His work follows the apparatus that captures psychic surplus through the feed, the school, the workplace, and the chair.",
  alternates: { canonical: "/author" },
  openGraph: {
    type: "website",
    siteName: "autostimulus",
    title: "Adnan Selimović — author",
    description:
      "A critical theorist and writer on attention, capture, and the institutions that produce a subject.",
    url: "/author",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adnan Selimović — author",
    description:
      "A critical theorist and writer on attention, capture, and the institutions that produce a subject.",
  },
};

const PERSON = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": AUTHOR_ID,
  name: "Adnan Selimović",
  alternateName: "A. Selimović",
  url: AUTHOR_URL,
  jobTitle: "Critical theorist and writer",
  description:
    "Adnan Selimović is a critical theorist and writer in Blacksburg, Virginia. His work concerns libidinal economy, platform capture, socialization, and speculative design.",
  knowsAbout: [
    "critical theory",
    "media psychology",
    "political economy",
    "libidinal economy",
    "platform capitalism",
    "attention economy",
    "speculative design",
  ],
  mainEntityOfPage: AUTHOR_URL,
  sameAs: ["https://orcid.org/0000-0003-0193-5214"],
};

const PROFILE_PAGE = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: AUTHOR_URL,
  name: "Adnan Selimović — author",
  description:
    "The citation record and working papers of Adnan Selimović.",
  inLanguage: "en",
  mainEntity: { "@id": AUTHOR_ID },
  isPartOf: {
    "@type": "WebSite",
    name: "autostimulus",
    url: SITE_URL,
  },
};

export default function AuthorPage() {
  return (
    <>
      <JsonLd data={[PERSON, PROFILE_PAGE]} />
      <PressMasthead current="author" />

      <main className="press-shell press-shell--graphite">
        <article className="press-article press-author">
          <header className="press-author-head">
            <h1 className="press-display">Adnan Selimović</h1>
            <p className="press-standfirst">
              Adnan Selimović writes about the institutions that produce a
              subject, and about the loop that keeps them producing.
            </p>
          </header>

          <p className="press-body">
            He writes from Blacksburg, Virginia, about the instruments that keep
            a file on a person: the school, the clinic, the platform, the chair.
            A recommendation model learns the next minute; a school record
            outlasts the classroom; a chair measures the body it holds. The
            writing follows them into the register they already use — the agency
            memo, the brochure, the coloring book, the atlas — because the
            institution&apos;s own voice is part of the evidence.
          </p>

          <p className="press-body">
            His framework is{" "}
            <Link href="/closed-loop">The Closed-Loop Libidinal Economy</Link>,
            published by autostimulus in 2026 in prose, mathematics, and operable
            plates. Its{" "}
            <Link href="/closed-loop/v2-argument">v2 argument</Link> names the
            loop, sets out the foreclosure lemma and the reclamation theorem, and
            specifies three modes of intervention; the formal apparatus carries
            the proofs, and the plates let a reader run the mechanism and watch
            it hold or fail.
          </p>

          <p className="press-body">
            The corpus runs from 2015 to 2026.{" "}
            <Link href="/psychopolitics-atlas">
              The Psychopolitics of Socialization
            </Link>{" "}
            maps the relational machinery that turns a crowd into a population;{" "}
            <Link href="/ohcose">OHCOSE</Link> files a life course as a case
            inside an agency that keeps a file on the reader;{" "}
            <Link href="/manufacture-of-the-subject">
              The Manufacture of the Subject
            </Link>{" "}
            walks the line from crib to deathbed, the meter running from the
            first sentence. Speculative works take the same loop into the
            showroom and the nursery: a{" "}
            <Link href="/chair">chair</Link> that harvests its sitter, a{" "}
            <Link href="/patriotic-times">coloring book</Link> of the national
            security state, an{" "}
            <Link href="/ouroboric-condition">atlas</Link> of psychic surplus
            and what survives it.
          </p>

          <p className="press-body">
            Engagement-optimized matchmaking is a case of performative prediction
            in{" "}
            <a href="https://doi.org/10.5281/zenodo.23189843">
              The Matchmaker&apos;s Fixed Point
            </a>
            , where the model&apos;s forecast changes the behavior it forecasts.{" "}
            <a href="https://doi.org/10.5281/zenodo.23345029">
              Compositional Governance
            </a>{" "}
            treats the roster as an instrument of capture and asks what an
            inverse would require.{" "}
            <a href="https://doi.org/10.5281/zenodo.23372497">
              Recovering Churn Structure
            </a>{" "}
            demonstrates a method for a setting where the answer is already
            known. All three are deposited on Zenodo with DOIs.
          </p>

          <p className="press-note">
            This page is the citation record for the press&apos;s founding
            series. Cite it as Selimović, Adnan. “Selected Works and Citation
            Record.” <span className="press-italic">autostimulus</span>, 2026,
            https://www.autostimulus.org/author. His ORCID is{" "}
            <a href="https://orcid.org/0000-0003-0193-5214">
              0000-0003-0193-5214
            </a>
            .
          </p>

          <p className="press-body">
            Each work keeps its own paper. The site keeps its own discipline: no
            analytics, no third-party requests, an instrument that measures the
            reader in memory and dies with the tab. The corpus describes capture;
            the site declines to practice it.
          </p>

          <PressFooter
            note={
              <>
                The <Link href="/colophon">colophon</Link> records the fonts,
                instruments, and permissions.
              </>
            }
          />
        </article>
      </main>
    </>
  );
}
