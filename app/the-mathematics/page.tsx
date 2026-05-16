import type { Metadata } from "next";
import Mathematics from "@/content/mathematics.mdx";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { MarginTOC } from "@/components/navigation/MarginTOC";
import { RelatedReading } from "@/components/navigation/RelatedReading";

export const metadata: Metadata = {
  title: "the mathematics — The Closed-Loop Libidinal Economy",
  description:
    "The full mathematical apparatus of the closed-loop libidinal economy. Closed-loop dynamics, the six instruments, the foreclosure lemma, the reclamation theorem, the three modes.",
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
            <h1 className="font-serif text-2xl text-ink leading-tight mb-lg">
              the mathematics.
            </h1>
            <Mathematics />
            <RelatedReading
              entries={[
                {
                  href: "/the-argument/the-loop",
                  title: "the loop · piece I",
                  note: "the framework laid out in prose — the same structure without the proofs",
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
