import type { Metadata } from "next";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { RelatedPlates } from "@/components/navigation/RelatedPlates";
import { ModeSpace } from "@/components/visualizations/ModeSpace";
import { M } from "@/components/ui/Math";

export const metadata: Metadata = {
  title: "mode-space — The Closed-Loop Libidinal Economy",
  description:
    "Visualization III. The three modes of intervention as non-substitutable directions in parameter space. R̂ · B · D_KL.",
};

export default function ModeSpacePage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-[var(--container-page)] px-sm pt-md pb-2xl">
        <div className="mb-lg">
          <Breadcrumb
            path={[
              { label: "the closed-loop libidinal economy", href: "/" },
              { label: "the dynamics", href: "/the-dynamics" },
              { label: "mode-space" },
            ]}
          />
        </div>

        <article className="mx-auto max-w-[50rem]">
          <header className="mb-md">
            <p className="font-mono text-xs text-ink-50">visualization III.</p>
            <h1 className="font-mono text-xl text-ink-90 mt-xs">mode-space</h1>
            <p className="font-serif italic text-md text-ink-70 mt-xs">
              the three modes of intervention as non-substitutable directions in parameter space
            </p>
          </header>

          <p className="font-serif text-base text-ink-90 leading-[1.55] mb-md max-w-[var(--measure)]">
            A 3D space with three orthogonal axes — engagement reward{" "}
            <M>{String.raw`\hat{R}`}</M>, bonus achievement{" "}
            <M>{String.raw`B`}</M>, divergence{" "}
            <M>{String.raw`D_{\mathrm{KL}}(\nu_u \,\|\, \pi_{\hat{R}})`}</M>. The closed-loop
            operating point sits at high <M>{String.raw`\hat{R}`}</M>, zero{" "}
            <M>{String.raw`B`}</M>, zero <M>{String.raw`D_{\mathrm{KL}}`}</M>. The three modes
            of intervention move along three orthogonal directions from this
            point. The non-substitutability of{" "}
            <a
              href="/the-dynamics/intervention"
              className="text-ink underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
            >
              the modes
            </a>{" "}
            becomes geometrically obvious when you can see them in three
            dimensions.
          </p>

          <ModeSpace />

          <section className="mt-lg max-w-[var(--measure)]">
            <h2 className="font-mono text-md text-ink-90 mb-sm">what to look for</h2>
            <p className="font-serif text-base text-ink-90 leading-[1.55] mb-sm">
              Rotate the space. <strong>Mode A</strong>'s oxblood curve moves
              entirely within the <M>{String.raw`\hat{R}\text{-}B`}</M> plane —{" "}
              <M>{String.raw`D_{\mathrm{KL}}`}</M> doesn't change because the architectural intervention does
              not touch the user's distribution. <strong>Mode B</strong>'s
              dashed ink line moves entirely along the{" "}
              <M>{String.raw`D_{\mathrm{KL}}`}</M> axis — <M>{String.raw`\hat{R}`}</M> stays the same
              and <M>{String.raw`B`}</M> stays at zero because Mode B does not modify the policy.{" "}
              <strong>Mode C</strong>'s region is a small box around the
              operating point — the same <M>{String.raw`\theta^*`}</M>, with the achievable{" "}
              <M>{String.raw`\hat{R}`}</M> pulled in.
            </p>
            <p className="font-serif text-base text-ink-90 leading-[1.55] mb-sm">
              The three paths are orthogonal in this space. That orthogonality
              is the framework's central political claim: there is no rate at
              which user labor produces architectural change; there is no
              substitution between disruption-as-form and policy regulation;
              the three modes address three different problems. Mistaking
              that orthogonality for an emphasis-difference is the dominant
              failure mode of the literature.
            </p>
            <p className="font-serif text-base text-ink-70 leading-[1.55] italic">
              Use the checkboxes to isolate each mode in turn. Reset view
              snaps the camera back to the default perspective.
            </p>
          </section>
          <RelatedPlates
            entries={[
              { href: "/the-dynamics/intervention", title: "the three modes", note: "the modes side by side with their interventions" },
              { href: "/the-dynamics/causal-chain", title: "the causal chain", note: "where each mode intercepts the proof" },
              { href: "/the-dynamics/metric-superego", title: "metric superego", note: "Mode B's parallel structure in detail" },
              { href: "/the-dynamics/surplus", title: "libidinal surplus", note: "Mode C's bounded structure in detail" },
            ]}
          />
        </article>
      </div>
    </main>
  );
}
