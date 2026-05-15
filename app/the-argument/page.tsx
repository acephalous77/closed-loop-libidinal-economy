import type { Metadata } from "next";
import Argument from "@/content/argument.mdx";
import { ArgumentLayout } from "@/components/layout/ArgumentLayout";

export const metadata: Metadata = {
  title: "the argument — The Closed-Loop Libidinal Economy",
  description:
    "The prose argument: the logic without the formal apparatus, the argument without the proofs.",
};

const TOC = [
  { number: "§1.", title: "What we're trying to name", slug: "what-were-trying-to-name" },
  { number: "§2.", title: "The loop, and why it is closed", slug: "the-loop-and-why-it-is-closed" },
  { number: "§3.", title: "What the loop produces", slug: "what-the-loop-produces" },
  { number: "§4.", title: "The reclamation theorem", slug: "the-reclamation-theorem" },
  { number: "§5.", title: "Three modes of intervention", slug: "three-modes-of-intervention" },
  { number: "§6.", title: "The asymmetry, and the timescale alignment", slug: "the-asymmetry-and-the-timescale-alignment" },
  { number: "§7.", title: "What the framework does not claim", slug: "what-the-framework-does-not-claim" },
  { number: "§8.", title: "What the argument adds up to", slug: "what-the-argument-adds-up-to" },
];

export default function TheArgumentPage() {
  return (
    <ArgumentLayout title="the argument" toc={TOC}>
      <Argument />
    </ArgumentLayout>
  );
}
