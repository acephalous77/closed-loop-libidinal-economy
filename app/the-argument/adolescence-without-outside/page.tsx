import type { Metadata } from "next";
import Adolescence from "@/content/adolescence-without-outside.mdx";
import { ArgumentLayout } from "@/components/layout/ArgumentLayout";
import { EssayNav } from "@/components/navigation/EssayNav";
import { getNeighbors, getPieceBySlug } from "@/lib/argument-pieces";
import { JsonLd, articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

const piece = getPieceBySlug("adolescence-without-outside")!;
const { prev, next } = getNeighbors("adolescence-without-outside");
const PATH = "/the-argument/adolescence-without-outside";
const DESCRIPTION = "The native cohort — the first cohort formed inside the platform-grammar from its earliest formative years. The inheritance that vanished, adolescence as operating system, the therapeutic vernacular, and the open question of Mode C's availability.";

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
            headline: 'Adolescence Without Outside',
            description: DESCRIPTION,
            path: PATH,
            scholarly: true,
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
        <Adolescence />
      </ArgumentLayout>
    </>
  );
}
