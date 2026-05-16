import type { Metadata } from "next";
import Adolescence from "@/content/adolescence-without-outside.mdx";
import { ArgumentLayout } from "@/components/layout/ArgumentLayout";
import { EssayNav } from "@/components/navigation/EssayNav";
import { getNeighbors, getPieceBySlug } from "@/lib/argument-pieces";

const piece = getPieceBySlug("adolescence-without-outside")!;
const { prev, next } = getNeighbors("adolescence-without-outside");

export const metadata: Metadata = {
  title: `${piece.title} — The Closed-Loop Libidinal Economy`,
  description:
    "Companion essay: the native cohort, the structural foreclosure of the outside, and the open question of whether disruption-as-form is available to those who have never had the substrate it would interrupt.",
};

export default function AdolescencePage() {
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
      <Adolescence />
    </ArgumentLayout>
  );
}
