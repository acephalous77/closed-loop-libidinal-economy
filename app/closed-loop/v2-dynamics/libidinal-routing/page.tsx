/**
 * Libidinal routing -- v2 dynamics plate.
 *
 * Operates Proposition 7' (apparatus s3.4). The four registers
 * (S, C, P, K) become dependently distributed under closed-loop
 * joint observation. Off-diagonal mutual information grows from zero.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { LibidinalRouting } from "@/components/closed-loop-v2/LibidinalRouting";
import {
  DepthLayers,
  Caption,
  Middle,
} from "@/components/ui/DepthLayers";
import { M } from "@/components/ui/Math";
import { PlateGlyph } from "@/components/closed-loop-v2/PlateGlyphs";

const PATH = "/closed-loop/v2-dynamics/libidinal-routing";

export const metadata: Metadata = {
  title: "Libidinal routing — v2 dynamics — closed-loop",
  description:
    "Operates Proposition 7': the four registers become dependently distributed under closed-loop joint observation. Off-diagonal mutual information grows from zero.",
  alternates: { canonical: PATH },
};

export default function LibidinalRoutingPage() {
  return (
    <main className="min-h-screen px-sm py-md max-w-[1100px] mx-auto">
      <nav
        aria-label="Breadcrumb"
        className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-md"
      >
        <Link href="/" className="hover:text-oxblood">autostimulus</Link>
        {" · "}
        <Link href="/closed-loop" className="hover:text-oxblood">closed-loop</Link>
        {" · "}
        <span className="text-ink-70">v2 dynamics</span>
        {" · "}
        <span className="text-ink-90">libidinal routing</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        Libidinal routing
      </h1>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-lg">
        Operates{" "}
        <Link
          href="/closed-loop/the-apparatus/section-3/prop-7-prime"
          className="text-oxblood hover:underline"
        >
          Proposition 7&apos;
        </Link>
        {" · "}cross-register coupling via explaining-away
      </p>

      <div className="flex items-center gap-sm mb-sm" aria-hidden>
        <span className="text-ink-70 shrink-0">
          <PlateGlyph slug="libidinal-routing" size={80} strokeWidth={1.05} />
        </span>
        <span className="h-px flex-1 bg-paper-85" />
      </div>

      <div className="my-lg">
        <LibidinalRouting />
      </div>

      <div className="max-w-prose mx-auto">
        <DepthLayers>
          <Caption>
            The 4×4 mutual-information matrix between the user&apos;s
            four registers (somatic, cognitive, political, kinaesthetic).
            At <M>{String.raw`t = 0`}</M>, off-diagonals are zero —
            the registers are factorially independent under the prior.
            As closure-convergence time advances, off-diagonals grow
            toward saturation; the registers become dependently
            distributed.
          </Caption>

          <Middle>
            <p className="mb-sm">
              <em>What the plate operates.</em>{" "}
              <Link
                href="/closed-loop/the-apparatus/section-3/prop-7-prime"
                className="text-oxblood hover:underline"
              >
                Proposition 7&apos;
              </Link>{" "}
              establishes that the four registers become dependently
              distributed under closed-loop joint observation through{" "}
              <M>{String.raw`O`}</M>. The plate visualizes the
              cross-register mutual information{" "}
              <M>{String.raw`I_{\Pi_t}(u^i; u^j)`}</M> forming over
              time.
            </p>

            <p className="mb-sm">
              <em>Why the off-diagonals grow.</em> Each platform
              observation <M>{String.raw`y_s`}</M> depends jointly on
              multiple registers (the platform&apos;s{" "}
              <M>{String.raw`O`}</M> is non-separable). Observing{" "}
              <M>{String.raw`y_s`}</M> introduces posterior dependence
              between registers via{" "}
              <em>explaining-away</em> — a textbook property of
              Bayesian networks. Over many observations, mutual
              information accumulates on every off-diagonal cell.
            </p>

            <p className="mb-sm">
              <em>The coupling rates.</em> Different register pairs
              couple at different rates. The plate uses an illustrative
              set:
            </p>

            <ul className="list-disc pl-md mb-sm space-y-xs">
              <li>
                <strong>S-C (somatic-cognitive):</strong> fastest.
                Engagement events couple somatic and cognitive registers
                directly through attention.
              </li>
              <li>
                <strong>S-K (somatic-kinaesthetic):</strong> fast.
                The body&apos;s rhythms entrain to the platform&apos;s.
              </li>
              <li>
                <strong>C-K, C-P:</strong> medium.
              </li>
              <li>
                <strong>S-P, P-K:</strong> slowest. The political
                register has its own dynamics; coupling to the somatic
                and kinaesthetic registers proceeds more slowly.
              </li>
            </ul>

            <p className="mb-sm">
              <em>What the proposition authorizes the prose to claim.</em>{" "}
              The four registers are libidinally routed under the
              closure. Subject, Citizen, Person, Consumer are no
              longer dynamically decoupled. They are dependently
              distributed via the platform&apos;s observation channel.
              Lyotard&apos;s libidinal economy claim — desire flowing
              across registers without respect for analytic separations —
              is what the closed loop produces operationally.
            </p>
          </Middle>
        </DepthLayers>
      </div>

      <section className="mt-xl pt-md border-t border-paper-85 max-w-prose mx-auto">
        <h2 className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-sm">
          Cross-references
        </h2>
        <ul className="text-base text-ink-90 space-y-xs">
          <li>
            Operates:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-3/prop-7-prime"
              className="text-oxblood hover:underline"
            >
              Proposition 7&apos; (libidinal routing)
            </Link>
          </li>
          <li>
            Dynamical complement:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-3/3.5-hawkes"
              className="text-oxblood hover:underline"
            >
              §3.5 (somatic Hawkes)
            </Link>{" "}
            — the cross-register coupling matrix alpha_kl underlying
            the dynamical form
          </li>
          <li>
            Required:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-3/prop-4-prime"
              className="text-oxblood hover:underline"
            >
              Proposition 4&apos; (dividual condition)
            </Link>
          </li>
          <li>
            Empirical calibration:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-12#hooks"
              className="text-oxblood hover:underline"
            >
              §12.1 (Proposition 7&apos; entry)
            </Link>
          </li>
        </ul>
      </section>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50 max-w-prose mx-auto">
        v2 dynamics plate — ninth plate.
      </footer>
    </main>
  );
}
