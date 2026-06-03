import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { RelatedPlates } from "@/components/navigation/RelatedPlates";
import { RelatedReading } from "@/components/navigation/RelatedReading";
import { LoopDiagram } from "@/components/visualizations/LoopDiagram";
import { M } from "@/components/ui/Math";

export const metadata: Metadata = {
  title: "the closed loop — The Closed-Loop Libidinal Economy",
  description:
    "The foundational mechanism. Equations (1)–(6) wired together as a directed graph; the loop is closed by construction, and the exogenous channel stands outside it.",
};

export default function ClosedLoopPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-[var(--container-page)] px-sm pt-md pb-2xl">
        <div className="mb-lg">
          <Breadcrumb
            path={[
              { label: "the closed-loop libidinal economy", href: "/" },
              { label: "the dynamics", href: "/closed-loop/the-dynamics" },
              { label: "the closed loop" },
            ]}
          />
        </div>

        <article className="mx-auto max-w-[50rem]">
          <header className="mb-md">
            <p className="font-mono text-xs text-ink-50">mechanism · §1</p>
            <h1 className="font-mono text-xl text-ink-90 mt-xs">the closed loop</h1>
            <p className="font-serif italic text-md text-ink-70 mt-xs">
              equations (1)–(6) wired as a directed graph
            </p>
          </header>

          <p className="font-serif text-base text-ink-90 leading-[1.55] mb-md max-w-[var(--measure)]">
            The framework's foundational structure. Four nodes — user state
            {" "}<M>{String.raw`u_t`}</M>, engagement signal
            {" "}<M>{String.raw`y_t`}</M>, policy
            {" "}<M>{String.raw`\pi`}</M>, stimulus
            {" "}<M>{String.raw`s_t`}</M> — connected by four edges
            corresponding to equations (1)–(4) of the formal exposition. The
            contour is closed by construction: every stimulus the user receives
            is shaped, recursively, by the policy's prior shaping of the user.
            The exogenous channel{" "}
            <M>{String.raw`e_t \equiv 0`}</M> from{" "}
            <Link
              href="/closed-loop/the-mathematics#1-the-closed-loop-dynamics"
              className="text-ink underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
            >
              equation (6)
            </Link>{" "}
            stands outside the loop — it is definitional. The
            propositional consequence (that no-input windows of reflective
            length vanish) is{" "}
            <Link
              href="/closed-loop/the-mathematics#4-the-foreclosure-lemma-and-the-reclamation-theorem"
              className="text-ink underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
            >
              Lemma 1
            </Link>
            , derived from this architecture.
          </p>

          <LoopDiagram />

          <section className="mt-lg max-w-[var(--measure)]">
            <h2 className="font-mono text-md text-ink-90 mb-sm">what to look for</h2>
            <p className="font-serif text-base text-ink-90 leading-[1.55] mb-sm">
              The pulse cycles through the four loop equations in order. The
              edge in oxblood is the one currently firing. There is no inlet to
              the contour; the only marker outside is the foreclosed exogenous
              channel <M>{String.raw`e_t \equiv 0`}</M>.
            </p>
            <p className="font-serif text-base text-ink-90 leading-[1.55] mb-sm">
              This is the architecture from which everything else descends. The
              foreclosure lemma, the reclamation theorem, the three modes of
              intervention, the six instruments — all are properties of this
              wiring or interventions on it.
            </p>
          </section>
          <RelatedPlates
            entries={[
              { href: "/closed-loop/the-dynamics/causal-chain", title: "the causal chain", note: "what the loop produces formally" },
              { href: "/closed-loop/the-dynamics/foreclosure-clock", title: "foreclosure clock", note: "Lemma 1, derived from the loop" },
              { href: "/closed-loop/the-mathematics#1-the-closed-loop-dynamics", title: "§1 closed-loop dynamics", note: "the formal definition of the six equations" },
            ]}
          />
          <RelatedReading
            entries={[
              {
                href: "/closed-loop/the-argument/the-loop#the-loop-and-why-it-is-closed",
                title: "the loop · §2",
                note: "the closure described in prose — what no exogenous channel means",
              },
            ]}
          />
        </article>
      </div>
    </main>
  );
}
