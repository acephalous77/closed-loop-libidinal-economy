import type { Metadata } from "next";
import Note from "@/content/note-on-document.mdx";
import { ArgumentLayout } from "@/components/layout/ArgumentLayout";
import { EssayNav } from "@/components/navigation/EssayNav";
import { getNeighbors, getPieceBySlug } from "@/lib/argument-pieces";

const piece = getPieceBySlug("note")!;
const { prev, next } = getNeighbors("note");

export const metadata: Metadata = {
  title: `${piece.title} — The Closed-Loop Libidinal Economy`,
  description:
    "Coda. The document as Mode-B artifact, the open questions named, the closing position.",
};

export default function NotePage() {
  return (
    <ArgumentLayout
      title={piece.title}
      eyebrow="the argument · coda"
      breadcrumb={[
        { label: "the closed-loop libidinal economy", href: "/" },
        { label: "the argument", href: "/the-argument" },
        { label: "a note on what this document is" },
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
  );
}
