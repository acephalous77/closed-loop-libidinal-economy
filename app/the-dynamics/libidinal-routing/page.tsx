import type { Metadata } from "next";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { RelatedPlates } from "@/components/navigation/RelatedPlates";
import { LibidinalRouting } from "@/components/visualizations/LibidinalRouting";
import { M } from "@/components/ui/Math";

export const metadata: Metadata = {
  title: "libidinal routing — The Closed-Loop Libidinal Economy",
  description:
    "Mechanism §3.3. The four registers — Subject, Citizen, Person, Consumer — collapse onto a single delivery surface. Off-diagonal mutual information fills in; the dividual condition H(b_t) → 0 follows.",
};

export default function LibidinalRoutingPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-[var(--container-page)] px-sm pt-md pb-2xl">
        <div className="mb-lg">
          <Breadcrumb
            path={[
              { label: "the closed-loop libidinal economy", href: "/" },
              { label: "the dynamics", href: "/the-dynamics" },
              { label: "libidinal routing" },
            ]}
          />
        </div>

        <article className="mx-auto max-w-[50rem]">
          <header className="mb-md">
            <p className="font-mono text-xs text-ink-50">mechanism · §3.3</p>
            <h1 className="font-mono text-xl text-ink-90 mt-xs">libidinal routing</h1>
            <p className="font-serif italic text-md text-ink-70 mt-xs">
              the four-register collapse onto a single observation surface
            </p>
          </header>

          <p className="font-serif text-base text-ink-90 leading-[1.55] mb-md max-w-[var(--measure)]">
            One of{" "}
            <a
              href="/the-mathematics#3-the-six-instruments"
              className="text-ink underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
            >
              the six instruments
            </a>{" "}
            (§3.3). The four registers — Subject (school / archive), Citizen
            (press / parliament), Person (church / family), Consumer
            (marketplace) — were historically channels of address with distinct
            apparatuses, distinct evaluation criteria, distinct temporal
            rhythms. Under the closed loop they route through a single delivery
            surface. The reader, the voter, the lover, and the buyer are all at
            the same screen.
          </p>

          <p className="font-serif text-base text-ink-90 leading-[1.55] mb-md max-w-[var(--measure)]">
            The structural claim, stated as the libidinal routing instrument:{" "}
            <M>{String.raw`I_\pi(u^i; u^j) \gg I_\circ(u^i; u^j)`}</M> for
            all <M>{String.raw`i \neq j`}</M>. Under the platform's
            stationary distribution, the registers are far more mutually
            informative than they were under the pre-closure regime. From this
            the <em>dividual condition</em> follows:{" "}
            <M>{String.raw`H(u \mid y_{1:t}) \to 0`}</M> — the
            platform's posterior over the user's full state converges (in
            entropy) to a point mass as the engagement history accumulates.
          </p>

          <LibidinalRouting />

          <section className="mt-lg max-w-[var(--measure)]">
            <h2 className="font-mono text-md text-ink-90 mb-sm">what to look for</h2>
            <p className="font-serif text-base text-ink-90 leading-[1.55] mb-sm">
              At <span className="font-mono">baseline</span> the off-diagonal
              cells sit near zero — the registers are nearly independent. Step
              to <span className="font-mono">converged</span> and the
              off-diagonals fill in toward 0.7: knowing the user's Consumer
              register tells the platform most of what it needs to know about
              their Citizen register, and so on. The posterior entropy collapses
              and the dividual condition turns oxblood in the readout.
            </p>
            <p className="font-serif text-base text-ink-90 leading-[1.55] mb-sm">
              This is the framework's structural account of dividuality. Not
              that the individual has been divided — that the four channels of
              address have collapsed into a single jointly-observable object.
              The four registers haven't been compressed; their independence
              has been engineered away.
            </p>
          </section>
          <RelatedPlates
            entries={[
              { href: "/the-dynamics/somatic-optimization", title: "somatic optimization", note: "routing visible at the per-event level" },
              { href: "/the-dynamics/tiktok", title: "tiktok", note: "interleaved categories on a specific platform" },
              { href: "/the-dynamics/mode-space", title: "mode-space", note: "D_KL axis is the routing's structural dual" },
            ]}
          />
        </article>
      </div>
    </main>
  );
}
