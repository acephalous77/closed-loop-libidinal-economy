import Link from "next/link";
import type { Metadata } from "next";
import ReadingList from "@/content/reading-list.mdx";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { PrintButton } from "@/components/ui/PrintButton";
import { ReadingProgress } from "@/components/ui/ReadingProgress";
import { BackToTop } from "@/components/ui/BackToTop";
import { JsonLd, articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

const PATH = "/closed-loop/reading-list";
const TITLE = "reading list";
const DESCRIPTION =
  "Works the framework draws on, works it argues against, and the works that did the formal heavy lifting. Adorno, Marcuse, Stiegler, Han, Crary, Lyotard, Deleuze, Mannheim, Sloterdijk, Burroughs, Asmussen, Kallenberg, Kuramoto, Hawkes, plus contemporary work. Also: empirical backing for each framework claim.";

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
    authors: ["Adnan Selimović"],
    section: "References",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  other: {
    "DC.title": "The Closed-Loop Libidinal Economy — Reading List",
    "DC.creator": "Adnan Selimović",
    "DC.date": "2026-05-15",
    "DC.type": "Text",
    "DC.format": "text/html",
    "DC.language": "en",
    "DC.rights": "CC BY-SA 4.0",
  },
};

const TOC = [
  { number: "·", title: "the framework's lineage", slug: "the-frameworks-lineage" },
  { number: "·", title: "cynicism and the captive", slug: "cynicism-and-the-captive" },
  { number: "·", title: "democratic substrate and the pedagogical question", slug: "democratic-substrate-and-the-pedagogical-question" },
  { number: "·", title: "the body and the affect-grammar", slug: "the-body-and-the-affect-grammar" },
  { number: "·", title: "the mathematical apparatus", slug: "the-mathematical-apparatus" },
  { number: "·", title: "recent / contemporary", slug: "recent--contemporary" },
  { number: "·", title: "empirical backing for the framework's claims", slug: "empirical-backing-for-the-frameworks-claims" },
  { number: "·", title: "the author's prior work", slug: "the-authors-prior-work" },
  { number: "·", title: "a note on use", slug: "a-note-on-use" },
];

export default function ReadingListPage() {
  return (
    <main className="min-h-screen">
      <JsonLd
        data={[
          articleJsonLd({
            headline: "Reading list — The Closed-Loop Libidinal Economy",
            description: DESCRIPTION,
            path: PATH,
          }),
          breadcrumbJsonLd([
            { label: "the closed-loop libidinal economy", href: "/" },
            { label: "reading list", href: PATH },
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
              { label: "reading list" },
            ]}
          />
        </div>

        <article className="mx-auto max-w-[var(--measure)] argument-prose">
          <p className="font-mono text-xs text-ink-50 uppercase tracking-wider mb-xs">
            references · lineage
          </p>
          <div className="flex items-baseline justify-between gap-md mb-lg">
            <h1 className="font-serif text-2xl text-ink leading-tight">
              reading list
            </h1>
            <PrintButton />
          </div>
          <ReadingList />
        </article>

        {/* Quick navigation chips below the prose */}
        <nav
          aria-label="Sections"
          className="mx-auto max-w-[var(--measure)] mt-2xl pt-lg border-t border-paper-85"
        >
          <p className="font-mono text-xs text-ink-50 mb-sm uppercase tracking-wider">
            jump to
          </p>
          <ul className="flex flex-wrap gap-x-md gap-y-xs">
            {TOC.map((t) => (
              <li key={t.slug}>
                <Link
                  href={`#${t.slug}`}
                  className="font-mono text-xs text-ink-70 hover:text-oxblood transition-colors duration-100"
                >
                  ↓ {t.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}
