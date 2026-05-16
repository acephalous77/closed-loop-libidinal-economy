import type { Metadata } from "next";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { PIECES } from "@/lib/argument-pieces";
import { PiecesArc } from "@/components/argument/PiecesArc";

export const metadata: Metadata = {
  title: "the argument — The Closed-Loop Libidinal Economy",
  description:
    "Four prose pieces and a coda. The framework laid out in prose: what the loop forecloses, what democratic substrate it removes, the cohort it forms, the captive it produces — and the closing note on what this document is.",
};

export default function TheArgumentIndexPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-[var(--container-page)] px-sm pt-md pb-2xl">
        <div className="mb-lg">
          <Breadcrumb
            path={[
              { label: "the closed-loop libidinal economy", href: "/" },
              { label: "the argument" },
            ]}
          />
        </div>

        <article className="mx-auto max-w-[44rem]">
          <h1 className="font-mono text-xl text-ink-90 mb-xl">the argument.</h1>

          <p className="font-mono text-xs text-ink-50 mb-md">
            four prose pieces · one coda · read in order
          </p>

          {/* Framing — the prose's own self-description, in epigraph register. */}
          <figure className="my-lg max-w-[var(--measure)]">
            <blockquote className="font-serif italic text-md text-ink-70 leading-snug border-l-2 border-paper-85 pl-sm">
              The mathematics is the spine; the prose is the body. The two
              halves are not redundant. They are not summary and elaboration.
              The formalism is what makes the prose's structural claims
              refusable; the prose is what makes the formalism's structural
              claims sayable in the registers that have produced the readers
              the document is for.
            </blockquote>
          </figure>

          <p className="font-serif text-base text-ink-90 leading-[1.55] mb-md">
            The four pieces traverse cohort time forward: from the
            architecture's specification, through democratic substrate, through
            formation, to adult end-state. The coda turns back on the document
            itself — what it is, what it is not, what its open questions are,
            and the position from which it closes. The pieces are not
            independent essays but registers of a single argument.
          </p>

          <PiecesArc pieces={PIECES} />

          <ol className="flex flex-col gap-lg mt-2xl">
            {PIECES.map((piece) => (
              <li key={piece.slug}>
                <a
                  href={`/the-argument/${piece.slug}`}
                  className="group block"
                >
                  <div className="flex items-baseline justify-between gap-sm">
                    <h2 className="font-mono font-medium text-md text-ink-90 group-hover:text-oxblood transition-colors duration-100">
                      {piece.title.toLowerCase()}
                    </h2>
                    <span className="font-mono text-xs text-ink-50 shrink-0">
                      {piece.numeral}
                    </span>
                  </div>
                  <p className="font-serif text-base text-ink-70 mt-xs max-w-[34rem]">
                    {piece.teaser}
                  </p>
                  <p className="font-mono text-xs text-ink-50 mt-xs">
                    {piece.meta}
                  </p>
                </a>
              </li>
            ))}
          </ol>

          {/* Footer — link back to the formal companion. */}
          <section className="mt-2xl pt-lg border-t border-paper-85">
            <p className="font-mono text-xs text-ink-50 mb-sm">
              the companion document
            </p>
            <a href="/the-mathematics" className="group block">
              <h2 className="font-mono font-medium text-md text-ink-90 group-hover:text-oxblood transition-colors duration-100">
                the mathematics
              </h2>
              <p className="font-serif text-base text-ink-70 mt-xs max-w-[34rem]">
                the formal apparatus: lemmas, theorems, propositions, explicit
                assumptions, open questions. The proofs the prose's claims rest
                on.
              </p>
            </a>
          </section>

          <section className="mt-lg">
            <a href="/reading-list" className="group block">
              <h2 className="font-mono font-medium text-md text-ink-90 group-hover:text-oxblood transition-colors duration-100">
                reading list
              </h2>
              <p className="font-serif text-base text-ink-70 mt-xs max-w-[34rem]">
                the works the framework draws on — Adorno, Marcuse, Stiegler,
                Han, Crary, Lyotard, Deleuze, Mannheim, Sloterdijk, Burroughs —
                plus the mathematical references (Asmussen, Kallenberg,
                Kuramoto, Hawkes) and contemporary work the diagnostic builds
                on or argues against.
              </p>
            </a>
          </section>
        </article>
      </div>
    </main>
  );
}
