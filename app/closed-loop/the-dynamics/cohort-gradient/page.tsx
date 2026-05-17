import type { Metadata } from "next";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { RelatedPlates } from "@/components/navigation/RelatedPlates";
import { RelatedReading } from "@/components/navigation/RelatedReading";
import { CohortGradient } from "@/components/visualizations/CohortGradient";
import { M } from "@/components/ui/Math";

export const metadata: Metadata = {
  title: "cohort gradient — The Closed-Loop Libidinal Economy",
  description:
    "Visualization IV. The framework's most direct empirical prediction: conditional autocovariance at reflective lags moderated by age-of-first-exposure. With falsification threshold.",
};

export default function CohortGradientPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-[var(--container-page)] px-sm pt-md pb-2xl">
        <div className="mb-lg">
          <Breadcrumb
            path={[
              { label: "the closed-loop libidinal economy", href: "/" },
              { label: "the dynamics", href: "/closed-loop/the-dynamics" },
              { label: "cohort gradient" },
            ]}
          />
        </div>

        <article className="mx-auto max-w-[50rem]">
          <header className="mb-md">
            <p className="font-mono text-xs text-ink-50">visualization IV.</p>
            <h1 className="font-mono text-xl text-ink-90 mt-xs">cohort gradient</h1>
            <p className="font-serif italic text-md text-ink-70 mt-xs">
              the framework's most direct empirical prediction, made visible as a falsifiable shape
            </p>
          </header>

          <p className="font-serif text-base text-ink-90 leading-[1.55] mb-md max-w-[var(--measure)]">
            The framework asserts a structural prediction: users with earlier
            age-of-first-exposure to closed-loop platforms retain less{" "}
            <M>{String.raw`I(\tau)`}</M> at long lags, after
            controlling for total exposure. Older cohorts had a baseline
            self-evaluative distribution{" "}
            <M>{String.raw`\nu_u`}</M> constructed under an
            architectural regime that included extra-platform inputs; the{" "}
            <a
              href="/closed-loop/the-dynamics/metric-superego"
              className="text-ink underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
            >
              artisanal mode
            </a>{" "}
            has something to maintain. Younger cohorts have{" "}
            <M>{String.raw`\nu_u`}</M> approximating{" "}
            <M>{String.raw`\pi_{\hat{R}}`}</M> at the outset.
          </p>

          <CohortGradient />

          <section className="mt-lg max-w-[var(--measure)]">
            <h2 className="font-mono text-md text-ink-90 mb-sm">what to look for</h2>
            <p className="font-serif text-base text-ink-90 leading-[1.55] mb-sm">
              The solid black curve is the framework's prediction, monotonically
              decreasing from cohort age 25 (~0.7) to cohort age 3 (~0.1). The
              oxblood dots mark the six cohort bins; hover any one to see the
              exact predicted value at that age. The shaded paper-85 band is
              the framework's hedge on magnitude — not a confidence interval
              in the classical sense, but an acknowledgement that the formal
              mechanism is asserted, not derived from{" "}
              <a
                href="/closed-loop/the-mathematics#1-the-closed-loop-dynamics"
                className="text-ink underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
              >
                equations (1)–(5)
              </a>{" "}
              alone (see{" "}
              <a
                href="/closed-loop/the-mathematics#8-open-formal-questions"
                className="text-ink underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
              >
                §8.2 open questions
              </a>
              ).
            </p>
            <p className="font-serif text-base text-ink-90 leading-[1.55] mb-sm">
              The oxblood dashed horizontal line is the falsification threshold.
              The three dotted curves are the alternative empirical outcomes:
              <em> confirming</em> (close to the prediction),{" "}
              <em>null</em> (flat — no cohort effect), and{" "}
              <em>disconfirming</em> (inverted — younger cohorts retain{" "}
              <em>more</em> autocovariance, the opposite of the prediction). Data that
              produces the null or disconfirming shape would falsify this part
              of the framework. This is the framework's most direct empirical
              commitment.
            </p>
            <p className="font-serif text-base text-ink-90 leading-[1.55]">
              The prediction sits beneath the framework's structural claims,
              not above them. If the data look flat or inverted, the framework
              is wrong on the cohort gradient — the rest of the formal
              apparatus would survive that disconfirmation, but the most
              testable empirical commitment would not.
            </p>
          </section>
          <RelatedPlates
            entries={[
              { href: "/closed-loop/the-dynamics/metric-superego", title: "metric superego", note: "the mechanism behind the cohort effect" },
              { href: "/closed-loop/the-dynamics/libidinal-routing", title: "libidinal routing", note: "the registers the gradient is measured across" },
              { href: "/closed-loop/the-mathematics#8-open-formal-questions", title: "§8 open formal questions", note: "the formal derivation is still a research target" },
            ]}
          />
          <RelatedReading
            entries={[
              {
                href: "/closed-loop/the-argument/citizen-after-the-pause#adolescence-as-class-on-the-frameworks-prediction",
                title: "the citizen after the pause · §2",
                note: "adolescence-as-class as the cohort gradient's political form",
              },
              {
                href: "/closed-loop/the-argument/adolescence-without-outside",
                title: "adolescence without outside",
                note: "the native cohort — the gradient's limit case",
              },
            ]}
          />
        </article>
      </div>
    </main>
  );
}
