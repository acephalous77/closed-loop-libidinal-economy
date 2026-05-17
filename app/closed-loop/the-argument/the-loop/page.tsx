import type { Metadata } from "next";
import Argument from "@/content/argument.mdx";
import { ArgumentLayout } from "@/components/layout/ArgumentLayout";
import { EssayNav } from "@/components/navigation/EssayNav";
import { getNeighbors, getPieceBySlug } from "@/lib/argument-pieces";
import { JsonLd, articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

const piece = getPieceBySlug("the-loop")!;
const { prev, next } = getNeighbors("the-loop");
const PATH = "/closed-loop/the-argument/the-loop";
const DESCRIPTION = 'The framework laid out in prose: the closed-loop architecture of platforms that learn from your engagement, the foreclosure of the no-input window, the three formally distinct modes of intervention, and the recursive limit the framework cannot exit.';

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
    authors: ["Adnan Selimović"],
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
    "citation_author": "Adnan Selimović",
    "citation_publication_date": "2026/05/15",
    "citation_online_date": "2026/05/15",
    "citation_keywords": 'libidinal economy; attention economy; platform capitalism; closed-loop dynamics; metric superego; cohort gradient',
    "DC.title": piece.title,
    "DC.creator": "Adnan Selimović",
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
            headline: 'The Closed-Loop Libidinal Economy',
            description: DESCRIPTION,
            path: PATH,
            scholarly: true,
            wordCount: 4768,
            timeRequired: 24,
            articleSection: 'Essay · The Loop',
            keywords: 'libidinal economy, attention economy, platform capitalism, closed-loop dynamics, metric superego, cohort gradient, foreclosure lemma'.split(", "),
          }),
          breadcrumbJsonLd([
            { label: "the closed-loop libidinal economy", href: "/" },
            { label: "the argument", href: "/closed-loop/the-argument" },
            { label: piece.title.toLowerCase(), href: PATH },
          ]),
        ]}
      />
      <ArgumentLayout
        title={piece.title}
        eyebrow={`the argument · piece ${piece.numeral.replace(/\.$/, "")}`}
        breadcrumb={[
          { label: "the closed-loop libidinal economy", href: "/" },
          { label: "the argument", href: "/closed-loop/the-argument" },
          { label: piece.title.toLowerCase() },
        ]}
        toc={piece.toc}
        footer={
          <EssayNav
            prev={prev ? { title: prev.title, href: `/closed-loop/the-argument/${prev.slug}` } : undefined}
            next={next ? { title: next.title, href: `/closed-loop/the-argument/${next.slug}` } : undefined}
          />
        }
      >
        <Argument />
      </ArgumentLayout>
    </>
  );
}
