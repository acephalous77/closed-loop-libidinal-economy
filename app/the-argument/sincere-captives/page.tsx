import type { Metadata } from "next";
import Sincere from "@/content/sincere-captives.mdx";
import { ArgumentLayout } from "@/components/layout/ArgumentLayout";
import { EssayNav } from "@/components/navigation/EssayNav";
import { getNeighbors, getPieceBySlug } from "@/lib/argument-pieces";

const piece = getPieceBySlug("sincere-captives")!;
const { prev, next } = getNeighbors("sincere-captives");

export const metadata: Metadata = {
  title: `${piece.title} — The Closed-Loop Libidinal Economy`,
  description:
    "The LinkedIn fanatic, the post-cynical professional, and the figure for whom disruption-as-form is no longer available.",
};

export default function SincerePage() {
  return (
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
      <Sincere />
    </ArgumentLayout>
  );
}
