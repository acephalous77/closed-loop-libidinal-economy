import type { Metadata } from "next";
import Link from "next/link";
import { FrameworkOrientation } from "@/components/home/FrameworkOrientation";
import { JsonLd, frameworkJsonLd, itemListJsonLd } from "@/lib/jsonld";
import { CitationBlock } from "@/components/closed-loop/CitationBlock";

export const metadata: Metadata = {
  // Bypass the root atelier template ("%s — autostimulus") so the
  // project cover reads cleanly as the work's title alone, not
  // "The Closed-Loop Libidinal Economy — autostimulus".
  title: { absolute: "The Closed-Loop Libidinal Economy" },
  alternates: { canonical: "/closed-loop" },
  other: {
    "citation_title": "The Closed-Loop Libidinal Economy (v2)",
    "citation_author": "Adnan Selimović",
    "citation_publication_date": "2026/05/28",
    "citation_online_date": "2026/05/28",
    "citation_keywords": "libidinal economy; closed-loop dynamics; performative prediction; foreclosure lemma; reclamation theorem; Mode A intervention; metric superego; chrono-debt",
    "DC.title": "The Closed-Loop Libidinal Economy (v2)",
    "DC.creator": "Adnan Selimović",
    "DC.date": "2026-05-28",
    "DC.type": "Text",
    "DC.format": "text/html",
    "DC.language": "en",
    "DC.rights": "CC BY-SA 4.0",
  },
};


export default function Cover() {
  return (
    <main className="min-h-screen flex flex-col">
      <JsonLd
        data={[
          frameworkJsonLd(),
          itemListJsonLd("Three paths through the material", [
            { name: "the argument", url: "/closed-loop/v2-argument", description: "eight load-bearing moves — the framework in prose" },
            { name: "the apparatus", url: "/closed-loop/the-apparatus", description: "the formal companion — thirteen sections, fifteen results" },
            { name: "the dynamics", url: "/closed-loop/v2-dynamics", description: "twelve interactive plates — the mechanisms made operable" },
          ]),
        ]}
      />
      <div className="flex-1 flex flex-col items-center px-sm pt-[6rem] pb-md">
        {/* Title — two lines, EB Garamond 3xl, lowercase per spec */}
        <h1 className="font-serif text-3xl text-ink leading-none tracking-tight text-center">
          <span className="block">the closed-loop</span>
          <span className="block">libidinal economy</span>
        </h1>

        {/* Subtitle — directly below title, no asterisk separator */}
        <p className="font-serif italic text-lg text-ink-70 mt-md max-w-[34rem] text-center leading-snug">
          a framework for the dynamics of attention under platform capture
        </p>

        {/* Orientation block — what this is + the central image + 3 paths */}
        <FrameworkOrientation />

        {/* First-version doorway — per the 2026-10-10 ruling: the v2 rebuild
            is the presented surface; the essays stay first-class and indexed;
            the v1 mathematics and dynamics live on as the archive (noindexed).
            Wording is a draft in his terse register, flagged for his vetting. */}
        <section className="mt-lg max-w-[36rem] text-center">
          <h2 className="font-mono text-xs text-ink-50 uppercase tracking-[0.25em]">
            the first version
          </h2>
          <p className="mt-sm font-serif italic text-sm text-ink-50 leading-snug">
            The essays read on as written —{" "}
            <Link
              href="/closed-loop/the-argument"
              className="text-ink-70 underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
            >
              the pieces
            </Link>{" "}
            and the note, with the first{" "}
            <Link
              href="/closed-loop/the-mathematics"
              className="text-ink-70 underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
            >
              mathematics
            </Link>{" "}
            and first{" "}
            <Link
              href="/closed-loop/the-dynamics"
              className="text-ink-70 underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
            >
              dynamics
            </Link>{" "}
            kept as the 2026 archive, and{" "}
            <Link
              href="/closed-loop/instrumentation"
              className="text-ink-70 underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
            >
              instrumentation
            </Link>{" "}
            for how the site is built.
          </p>
        </section>

        {/* Epigraph — tightened spacing */}
        <figure className="mt-lg max-w-[34rem] text-center">
          <blockquote className="font-serif italic text-md text-ink-70 leading-snug">
            &ldquo;The splinter in your eye is the best magnifying glass.&rdquo;
          </blockquote>
          <figcaption className="font-mono text-xs text-ink-50 mt-xs">
            — Adorno, Minima Moralia §50
          </figcaption>
        </figure>

        {/* Author / place / year — lives above the global SiteFooter */}
        <p className="font-mono text-xs text-ink-50 mt-xl text-center">
          A. Selimović, Ph.D. — Blacksburg, Virginia — 2026
        </p>
        <CitationBlock compact />
      </div>
    </main>
  );
}
