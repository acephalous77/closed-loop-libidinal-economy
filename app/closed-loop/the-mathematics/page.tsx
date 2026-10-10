import type { Metadata } from "next";
import Link from "next/link";
import Mathematics from "@/content/mathematics.mdx";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { MarginTOC, InlineTOC } from "@/components/navigation/MarginTOC";
import { RelatedReading } from "@/components/navigation/RelatedReading";
import { PrintButton } from "@/components/ui/PrintButton";
import { JsonLd, articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

const PATH = "/closed-loop/the-mathematics";
const TITLE = "the mathematics";
const DESCRIPTION =
  "The formal exposition. Six governing equations. Six instruments — libidinal surplus, chrono-debt, libidinal routing, the metric superego, somatic optimization, captured resonance. The foreclosure lemma. The reclamation theorem, proved. Three formally distinct modes of intervention: A architectural, B artisanal, C disruption-as-form.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  robots: { index: false, follow: true },
  openGraph: {
    type: "article",
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    publishedTime: "2026-05-15T00:00:00.000Z",
    authors: ["Adnan Selimović"],
    section: "Mathematics",
    tags: [
      "closed-loop dynamics",
      "Hawkes process",
      "Kuramoto coupling",
      "foreclosure lemma",
      "reclamation theorem",
      "Mode A architectural intervention",
      "metric superego",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  other: {
    // Google Scholar / academic indexer hints
    "citation_title": "The Closed-Loop Libidinal Economy — Mathematical Exposition",
    "citation_author": "Adnan Selimović",
    "citation_publication_date": "2026/05/15",
    "citation_online_date": "2026/05/15",
    "citation_keywords":
      "libidinal economy; closed-loop dynamics; Hawkes process; Kuramoto coupling; foreclosure lemma; reclamation theorem; Mode A architectural intervention; metric superego",
    "DC.title": "The Closed-Loop Libidinal Economy — Mathematical Exposition",
    "DC.creator": "Adnan Selimović",
    "DC.date": "2026-05-15",
    "DC.type": "Text",
    "DC.format": "text/html",
    "DC.language": "en",
    "DC.rights": "CC BY-SA 4.0",
  },
};

const TOC = [
  { number: "§0.", title: "What this document is", slug: "0-what-this-document-is" },
  { number: "§1.", title: "The closed-loop dynamics", slug: "1-the-closed-loop-dynamics" },
  { number: "§1.5.", title: "Assumptions", slug: "15-assumptions" },
  { number: "§2.", title: "Variable index, by domain", slug: "2-variable-index-by-domain" },
  { number: "§3.", title: "The six instruments", slug: "3-the-six-instruments" },
  { number: "§4.", title: "The foreclosure lemma and the reclamation theorem", slug: "4-the-foreclosure-lemma-and-the-reclamation-theorem" },
  { number: "§5.", title: "Three modes of intervention", slug: "5-three-modes-of-intervention" },
  { number: "§6.", title: "Other named results", slug: "6-other-named-results" },
  { number: "§7.", title: "What the model does not claim", slug: "7-what-the-model-does-not-claim" },
  { number: "§8.", title: "Open formal questions", slug: "8-open-formal-questions" },
];

export default function TheMathematicsPage() {
  return (
    <main className="min-h-screen">
      <JsonLd
        data={[
          articleJsonLd({
            headline: TITLE,
            description: DESCRIPTION,
            path: PATH,
            scholarly: true,
            wordCount: 10955,
            timeRequired: 55,
            articleSection: "Mathematics",
            keywords: [
              "closed-loop dynamics",
              "Hawkes process",
              "Kuramoto coupling",
              "foreclosure lemma",
              "reclamation theorem",
              "Mode A architectural intervention",
              "metric superego",
              "libidinal economy",
              "Asmussen",
              "Kallenberg",
            ],
          }),
          breadcrumbJsonLd([
            { label: "the closed-loop libidinal economy", href: "/" },
            { label: "the mathematics", href: PATH },
          ]),
        ]}
      />
      <div className="mx-auto max-w-[var(--container-page)] px-sm pt-md pb-2xl">
        <div className="mb-lg">
          <Breadcrumb
            path={[
              { label: "the closed-loop libidinal economy", href: "/" },
              { label: "the mathematics" },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-sm">
          <aside className="hidden lg:block lg:col-span-2 lg:col-start-1">
            <MarginTOC entries={TOC} />
          </aside>

          <article className="lg:col-span-8 lg:col-start-4 mathematics-prose">
            <h1 className="font-serif text-2xl text-ink leading-tight mb-md">
              the mathematics.
            </h1>
            {/* First-version stamp — this exposition is the 2026 archive;
                the rebuilt formal companion lives at /closed-loop/the-apparatus.
                Wording is a draft in his terse register, flagged for his vetting. */}
            <p className="font-mono text-xs text-ink-50 mb-md">
              first version ·{" "}
              <Link
                href="/closed-loop/the-apparatus"
                className="underline decoration-ink-30 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
              >
                the current apparatus →
              </Link>
            </p>
            {/* Contents inline on narrow viewports — the aside beside this
                column is `hidden lg:block`, so phones had no index at all. */}
            <InlineTOC entries={TOC} />
            <div className="mb-md">
              <PrintButton />
            </div>
            <Mathematics />
            <RelatedReading
              entries={[
                {
                  href: "/closed-loop/the-argument/the-loop",
                  title: "the loop · piece I",
                  note: "the framework laid out in prose — the same structure without the proofs",
                },
                {
                  href: "/closed-loop/open-questions",
                  title: "open questions · research targets",
                  note: "§8's three formal open questions stated as research targets, plus seven more from the prose and the empirical record",
                },
                {
                  href: "/closed-loop/the-argument/note",
                  title: "the coda · open questions",
                  note: "the math doc's open questions, in the document's own self-description",
                },
              ]}
            />
          </article>
        </div>
      </div>
    </main>
  );
}
