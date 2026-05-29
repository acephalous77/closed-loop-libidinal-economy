/**
 * The architecture — `/closed-loop/the-architecture`.
 *
 * Permanent home for the closed-loop schematic. The schematic
 * previously lived at /v2/schematic as a preview route; it now has
 * a citable URL under the closed-loop namespace.
 *
 * The schematic is interactive — each part has hover captions and
 * navigates to its apparatus section. See the component for the
 * full part inventory and route mapping.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { ClosedLoopSchematic } from "@/components/closed-loop-v2/Schematic";

const PATH = "/closed-loop/the-architecture";

export const metadata: Metadata = {
  title: "the architecture — closed-loop",
  description:
    "The closed-loop architecture as an interactive schematic. Hover or keyboard-focus any part to see its plain-language caption; click to enter that part's apparatus treatment.",
  alternates: { canonical: PATH },
};

export default function TheArchitecturePage() {
  return (
    <main className="min-h-screen px-sm py-md max-w-[1200px] mx-auto">
      <nav
        aria-label="Breadcrumb"
        className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-md"
      >
        <Link href="/" className="hover:text-oxblood">autostimulus</Link>
        {" · "}
        <Link href="/closed-loop" className="hover:text-oxblood">closed-loop</Link>
        {" · "}
        <span className="text-ink-90">the architecture</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        the architecture
      </h1>
      <p className="text-base text-ink-90 max-w-prose mb-md">
        The closed-loop architecture as an interactive schematic.
        Ten labeled parts plus two annotations: the user state, the
        observation channel, the platform&apos;s filtering posterior,
        the platform policy, the stimulus, the user dynamics, the
        performative distribution, the reward functional, the
        parameter update, and the closure operator Φ. The reflective
        threshold θ_ref and the contractivity boundary κ_Φ = 1 are
        annotated.
      </p>
      <p className="text-base text-ink-70 italic max-w-prose mb-lg">
        Hover or keyboard-focus a part to see its plain-language
        caption below the figure. Click — or Tab to focus and press
        Enter — to enter that part&apos;s apparatus section.
      </p>

      <div className="my-lg">
        <ClosedLoopSchematic />
      </div>

      <section className="mt-xl pt-md border-t border-paper-85">
        <h2 className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-sm">
          Five navigation hubs
        </h2>
        <p className="text-base text-ink-90 max-w-prose mb-sm">
          The architecture is one of five navigation surfaces. One
          prose entry point, four catalogs:
        </p>
        <ul className="text-base text-ink-90 space-y-xs">
          <li>
            <Link
              href="/closed-loop/v2-argument"
              className="text-oxblood hover:underline"
            >
              the argument
            </Link>{" "}
            — the framework in prose. Eight load-bearing moves that
            cross-link to the apparatus result authorizing each claim.
          </li>
          <li>
            <Link
              href="/closed-loop/the-apparatus"
              className="text-oxblood hover:underline"
            >
              the apparatus
            </Link>{" "}
            — the formal sections §0 through §12, each rendered with
            depth-layered presentation (caption, middle, formal).
          </li>
          <li>
            <Link
              href="/closed-loop/v2-dynamics"
              className="text-oxblood hover:underline"
            >
              the dynamics
            </Link>{" "}
            — twelve interactive plates. Each operates an apparatus
            result against a parameter so the reader sees the
            mechanism behave.
          </li>
          <li>
            <Link
              href="/closed-loop/the-instruments"
              className="text-oxblood hover:underline"
            >
              the instruments
            </Link>{" "}
            — the framework&apos;s six measurable instruments, each
            with definition, calibration hook, and dynamics plate.
          </li>
          <li>
            <Link
              href="/closed-loop/glossary"
              className="text-oxblood hover:underline"
            >
              the glossary
            </Link>{" "}
            — alphabetical index of the framework&apos;s defined terms.
          </li>
        </ul>
      </section>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50">
        v2 closed-loop.
      </footer>
    </main>
  );
}
