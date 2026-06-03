import type { Metadata } from "next";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { RelatedPlates } from "@/components/navigation/RelatedPlates";
import { RelatedReading } from "@/components/navigation/RelatedReading";
import { TikTokInstruments } from "@/components/visualizations/TikTokInstruments";

export const metadata: Metadata = {
  title: "tiktok — The Closed-Loop Libidinal Economy",
  description:
    "Visualization V. A worked example: how each of the six instruments operates on a specific platform.",
};

export default function TikTokPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-[var(--container-page)] px-sm pt-md pb-2xl">
        <div className="mb-lg">
          <Breadcrumb
            path={[
              { label: "the closed-loop libidinal economy", href: "/" },
              { label: "the dynamics", href: "/closed-loop/the-dynamics" },
              { label: "tiktok" },
            ]}
          />
        </div>

        <article className="mx-auto max-w-[50rem]">
          <header className="mb-md">
            <p className="font-mono text-xs text-ink-50">visualization V.</p>
            <h1 className="font-mono text-xl text-ink-90 mt-xs">tiktok</h1>
            <p className="font-serif italic text-md text-ink-70 mt-xs">
              a worked example: how the six instruments operate on a specific platform
            </p>
          </header>

          <p className="font-serif text-base text-ink-90 leading-[1.55] mb-lg max-w-[var(--measure)]">
            The framework's six instruments are formal — they apply to any
            engagement-monetized platform whose policy satisfies (A1)–(A6).
            This page makes the abstraction concrete: each instrument is
            walked through one specific platform's mechanics. TikTok is
            chosen because its architectural commitments — the For You Page,
            short-loop video, vertical scroll, sound-on-by-default — are the
            cleanest empirical realization of the closure. The analysis is
            anatomical. It assigns no blame. Other platforms have parallel walks;
            they're Phase 4 additions.
          </p>

          <TikTokInstruments />

          <section className="mt-2xl max-w-[var(--measure)] pt-lg border-t border-paper-85">
            <h2 className="font-mono text-md text-ink-90 mb-sm">what this set demonstrates</h2>
            <p className="font-serif text-base text-ink-90 leading-[1.55] mb-sm">
              The six instruments are independent — none derives from another
              — but they share the same architectural foundation. On any
              specific platform, all six are realized through that platform's
              specific choices. TikTok's choices happen to be the cleanest
              instances: an explore/exploit FYP, ~15-second videos, content
              that interleaves the four registers, visible engagement metrics,
              the vertical scroll-thumb as the somatic differential, and
              sound boundaries aligned to scroll cadence. The framework would
              still apply if any of these were modified; the empirical
              realization would change but the structural form would not.
            </p>
            <p className="font-serif text-base text-ink-70 leading-[1.55] italic">
              Diagrams above are deliberately schematic. They convey one
              structural relation each; the prose does the explanatory work.
              Each instrument's mechanism plate (linked in the related
              footer below) renders the same structure in interactive form;
              the math doc <a
                href="/closed-loop/the-mathematics#3-the-six-instruments"
                className="text-ink-70 underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
              >§3 (the six instruments)</a> states each formally.
            </p>
          </section>
          <RelatedPlates
            entries={[
              { href: "/closed-loop/the-dynamics/closed-loop", title: "the closed loop", note: "the architecture each instrument operates within" },
              { href: "/closed-loop/the-dynamics/intervention", title: "the three modes", note: "what intervention on TikTok would look like" },
              { href: "/closed-loop/the-dynamics/causal-chain", title: "the causal chain", note: "the proof structure these instruments touch" },
            ]}
          />
          <RelatedReading
            entries={[
              {
                href: "/closed-loop/the-argument/adolescence-without-outside#iv-the-politics-that-look-like-politics",
                title: "adolescence without outside · §IV",
                note: "the cohort's TikTok-mediated political grammar",
              },
            ]}
          />
        </article>
      </div>
    </main>
  );
}
