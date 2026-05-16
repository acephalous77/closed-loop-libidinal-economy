import type { Metadata } from "next";
import Argument from "@/content/argument.mdx";
import { ArgumentLayout } from "@/components/layout/ArgumentLayout";
import { EssayNav } from "@/components/navigation/EssayNav";
import { getNeighbors, getPieceBySlug } from "@/lib/argument-pieces";

const piece = getPieceBySlug("the-loop")!;
const { prev, next } = getNeighbors("the-loop");

export const metadata: Metadata = {
  title: `${piece.title} — The Closed-Loop Libidinal Economy`,
  description:
    "The prose argument: the logic without the formal apparatus, the argument without the proofs.",
};

export default function TheLoopPage() {
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
      <Argument />
    </ArgumentLayout>
  );
}
