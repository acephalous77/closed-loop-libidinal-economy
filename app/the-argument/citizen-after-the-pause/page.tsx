import type { Metadata } from "next";
import Citizen from "@/content/citizen-after-the-pause.mdx";
import { ArgumentLayout } from "@/components/layout/ArgumentLayout";
import { EssayNav } from "@/components/navigation/EssayNav";
import { getNeighbors, getPieceBySlug } from "@/lib/argument-pieces";

const piece = getPieceBySlug("citizen-after-the-pause")!;
const { prev, next } = getNeighbors("citizen-after-the-pause");

export const metadata: Metadata = {
  title: `${piece.title} — The Closed-Loop Libidinal Economy`,
  description:
    "Companion to the framework: adolescence-as-class, the foreclosure of democratic substrate, and the political form already present.",
};

export default function CitizenPage() {
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
      <Citizen />
    </ArgumentLayout>
  );
}
