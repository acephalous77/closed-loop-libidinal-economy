import type { Metadata } from "next";
import Note from "@/content/note-on-document.mdx";
import { ArgumentLayout } from "@/components/layout/ArgumentLayout";
import { EssayNav } from "@/components/navigation/EssayNav";
import { getNeighbors, getPieceBySlug } from "@/lib/argument-pieces";
import { JsonLd, articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

const piece = getPieceBySlug("note")!;
const { prev, next } = getNeighbors("note");
const PATH = "/the-argument/note";
const DESCRIPTION = 'Coda. The document as Mode-B artifact; the open questions, named; the arc and the load-bearing progression of the four prose pieces; the recursive limit the framework cannot exit; the closing position.';

export const metadata: Metadata = {
  title: piece.title,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    type: "article",
    title: piece.title,
    description: DESCRIPTION,
    url: PATH,
    publishedTime: "2026-05-15T00:00:00.000Z",
    authors: ["A.S."],
    section: "Essay",
    tags: [
      "libidinal economy",
      "attention economy",
      "platform capitalism",
      "closed-loop dynamics",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: piece.title,
    description: DESCRIPTION,
  },
  other: {
    "citation_title": piece.title,
    "citation_author": "A.S.",
    "citation_publication_date": "2026/05/15",
    "citation_online_date": "2026/05/15",
    "citation_keywords": 'libidinal economy; attention economy; platform capitalism; closed-loop dynamics; metric superego; cohort gradient',
    "DC.title": piece.title,
    "DC.creator": "A.S.",
    "DC.date": "2026-05-15",
    "DC.type": "Text",
    "DC.format": "text/html",
    "DC.language": "en",
    "DC.rights": "CC BY-SA 4.0",
  },
};

export default function EssayPage() {
  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({
            headline: 'A Note on What This Document Is',
            description: DESCRIPTION,
            path: PATH,
            scholarly: true,
            wordCount: 2142,
            timeRequired: 11,
            articleSection: 'Essay · Coda',
            keywords: 'libidinal economy, attention economy, platform capitalism, closed-loop dynamics, metric superego, cohort gradient, foreclosure lemma'.split(", "),
          }),
          breadcrumbJsonLd([
            { label: "the closed-loop libidinal economy", href: "/" },
            { label: "the argument", href: "/the-argument" },
            { label: piece.title.toLowerCase(), href: PATH },
          ]),
        ]}
      />
      <ArgumentLayout
        title={piece.title}
        eyebrow={`the argument · piece ${piece.numeral.replace(/\.$/, "")}`}
        breadcrumb={[
          { label: "the closed-loop libidinal economy", href: "/" },
          { label: "the argument", href: "/the-argument" },
          { label: piece.title.toLowerCase() },
        ]}
        toc={piece.toc}
        footer={
          <EssayNav
            prev={prev ? { title: prev.title, href: `/the-argument/${prev.slug}` } : undefined}
            next={next ? { title: next.title, href: `/the-argument/${next.slug}` } : undefined}
          />
        }
      >
        <Note />
      </ArgumentLayout>
    </>
  );
}
