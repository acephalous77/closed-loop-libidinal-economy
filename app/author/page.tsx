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
              Adnan Selimović is a critical theorist and writer in Blacksburg,
              Virginia. His work follows the apparatus that captures psychic
              surplus.
            </p>
          </header>

          <p className="press-body">
            The instruments he describes are specific. A recommendation model
            learns the reader&apos;s next minute. A school record outlasts the
            classroom. A chair measures the body it holds. He writes about them
            in the registers they already use, and his press, autostimulus,
            publishes the works.
          </p>

          <p className="press-body">
            The framework is{" "}
            <Link href="/closed-loop">The Closed-Loop Libidinal Economy</Link>,
            published by the press in 2026 and set out in prose, mathematics, and
            operable plates. Its{" "}
            <Link href="/closed-loop/v2-argument">v2 argument</Link> names the
            loop, sets out a foreclosure lemma and a reclamation theorem, and
            specifies three modes of intervention. Psychic surplus moves through
            the feed, the metric, and the habit that outlasts the session; the
            framework gives that passage a formal shape other researchers can
            test.
          </p>

          <p className="press-body">
            The corpus around the framework runs from 2015 to 2026.{" "}
            <Link href="/psychopolitics-atlas">
              The Psychopolitics of Socialization
            </Link>{" "}
            maps the socialization apparatus from crowding science to the
            population present. <Link href="/ohcose">OHCOSE</Link> takes the form
            of an agency manual from the Office of Human Continuity and Social
            Equilibrium and files the life course as a case.{" "}
            <Link href="/manufacture-of-the-subject">
              The Manufacture of the Subject
            </Link>{" "}
            is an essay descent from crib to deathbed; from the first line, the
            meter runs on the reader.
          </p>

          <p className="press-body">
            At other scales, the speculative-design works stage the same loop. A
            product brochure and zine for a chair that harvests its sitter,{" "}
            <Link href="/chair">The Ouroboros Life System</Link> borrows the
            voice of a furniture catalog to describe the transaction.{" "}
            <Link href="/patriotic-times">Patriotic Times</Link> renders the
            national security state as a coloring book and lets the reader fill
            in the evidence.{" "}
            <Link href="/ouroboric-condition">The Ouroboric Condition</Link> is a
            specimen atlas of psychic surplus; it asks what survives capture and
            what it costs.
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
            known. The three are deposited on Zenodo with DOIs.
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
            Every work keeps its own paper, and the site keeps its own
            discipline. It carries no analytics and makes no third-party
            requests; its instrument measures the reader in memory and dies with
            the tab. The corpus describes capture; the site declines to practice
            it.
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
