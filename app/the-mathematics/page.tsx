import type { Metadata } from "next";
import Mathematics from "@/content/mathematics.mdx";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { MarginTOC } from "@/components/navigation/MarginTOC";
import { RelatedReading } from "@/components/navigation/RelatedReading";
import { PrintButton } from "@/components/ui/PrintButton";
import { ReadingProgress } from "@/components/ui/ReadingProgress";
import { BackToTop } from "@/components/ui/BackToTop";
import { JsonLd, articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

const PATH = "/the-mathematics";
const TITLE = "the mathematics";
const DESCRIPTION =
  "Full mathematical exposition of the closed-loop libidinal economy: six governing equations, six instruments (libidinal surplus, chrono-debt, libidinal routing, metric superego, somatic optimization, captured resonance), the foreclosure lemma, the reclamation theorem (with full proofs), and three formally distinct modes of intervention.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    type: "article",
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    publishedTime: "2026-05-15T00:00:00.000Z",
    authors: ["A.S."],
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
    "citation_author": "A.S.",
    "citation_publication_date": "2026/05/15",
    "citation_online_date": "2026/05/15",
    "citation_keywords":
      "libidinal economy; closed-loop dynamics; Hawkes process; Kuramoto coupling; foreclosure lemma; reclamation theorem; Mode A architectural intervention; metric superego",
    "DC.title": "The Closed-Loop Libidinal Economy — Mathematical Exposition",
    "DC.creator": "A.S.",
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
          }),
          breadcrumbJsonLd([
            { label: "the closed-loop libidinal economy", href: "/" },
            { label: "the mathematics", href: PATH },
          ]),
        ]}
      />
      <ReadingProgress />
      <BackToTop />
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
            <div className="flex items-baseline justify-between mb-lg gap-md">
              <h1 className="font-serif text-2xl text-ink leading-tight">
                the mathematics.
              </h1>
              <PrintButton />
            </div>
            <Mathematics />
            <RelatedReading
              entries={[
                {
                  href: "/the-argument/the-loop",
                  title: "the loop · piece I",
                  note: "the framework laid out in prose — the same structure without the proofs",
                },
                {
                  href: "/open-questions",
                  title: "open questions · research targets",
                  note: "§8's three formal open questions stated as research targets, plus seven more from the prose and the empirical record",
                },
                {
                  href: "/the-argument/note",
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
