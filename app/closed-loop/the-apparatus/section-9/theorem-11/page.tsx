/**
 * Apparatus §9 — Theorem 11 (stretched-exponential survival bound).
 *
 * The rate-of-foreclosure refinement that interpolates between
 * Lemma 1's polynomial bound (unconditional under bounded c_v) and
 * Lemma 1's exponential bound (under finite MGF). The intermediate
 * regime — Weibull-shape sub-exponential tails — is where most
 * empirical engagement distributions sit.
 *
 * Content per publishing-pipeline manuscript §9.
 */
import type { Metadata } from "next";
import Link from "next/link";
import {
  DepthLayers,
  Caption,
  Middle,
  Formal,
  ProofEnd,
  Reads,
} from "@/components/ui/DepthLayers";
import { MBlock, M } from "@/components/ui/Math";

const PATH = "/closed-loop/the-apparatus/section-9/theorem-11";

export const metadata: Metadata = {
  title: "Theorem 11 (rate-of-foreclosure refinement) — the apparatus — closed-loop",
  description:
    "The stretched-exponential survival bound. Interpolates between Lemma 1's polynomial and exponential regimes. Empirically reachable for Weibull-shape engagement-interval tails.",
  alternates: { canonical: PATH },
};

export default function Theorem11Page() {
  return (
    <main className="min-h-screen px-sm py-md max-w-prose mx-auto">
      <nav
        aria-label="Breadcrumb"
        className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-md"
      >
        <Link href="/" className="hover:text-oxblood">autostimulus</Link>
        {" · "}
        <Link href="/closed-loop" className="hover:text-oxblood">closed-loop</Link>
        {" · "}
        <Link href="/closed-loop/the-apparatus" className="hover:text-oxblood">the apparatus</Link>
        {" · "}
        <span className="text-ink-90">§9 · Theorem 11</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        Theorem 11 (stretched-exponential survival bound)
      </h1>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-lg">
        Apparatus §9 · rate-of-foreclosure under intermediate tail conditions
      </p>

      <DepthLayers>
        <Caption>
          The rate-of-foreclosure refinement. Lemma 1 gives polynomial
          decay under bounded coefficient of variation and exponential
          decay under finite moment-generating function. Theorem 11
          fills the gap: under Weibull-shape sub-exponential tails
          (Class <M>{String.raw`S_\beta`}</M> for{" "}
          <M>{String.raw`\beta \in (0, 1]`}</M>), survival decays as{" "}
          <M>{String.raw`\exp(-J_\beta(\theta_{\mathrm{ref}}^\beta))`}</M>{" "}
          — a stretched exponential.
        </Caption>

        <Middle>
          <p className="mb-sm">
            <Link
              href="/closed-loop/the-apparatus/section-1/lemma-1"
              className="text-oxblood hover:underline"
            >
              Lemma 1
            </Link>{" "}
            has two regimes: polynomial decay under bounded{" "}
            <M>{String.raw`c_v`}</M> (unconditional, but loose) and
            exponential decay under finite MGF (sharp, but requires
            heavier tail condition). The intermediate regime —
            sub-exponential or stretched-exponential tails — is where
            most empirical engagement-interval distributions sit
            (Weibull, log-normal, gamma-with-shape less than one). §9
            supplies the missing bound.
          </p>

          <p className="mb-sm">
            <em>The stretched-exponential class.</em> An inter-arrival
            distribution belongs to Class <M>{String.raw`S_\beta`}</M>{" "}
            for <M>{String.raw`\beta \in (0, 1]`}</M> if{" "}
            <M>{String.raw`\mathbb{E}[\exp(s \tau^\beta)]`}</M> is
            finite on some interval{" "}
            <M>{String.raw`[0, s_0)`}</M>. Class{" "}
            <M>{String.raw`S_1`}</M> recovers the standard MGF
            condition. Class <M>{String.raw`S_\beta`}</M> for{" "}
            <M>{String.raw`\beta < 1`}</M> captures Weibull-shape
            tails: <M>{String.raw`\mathbb{E}[\exp(s\tau)]`}</M> may
            be infinite, but{" "}
            <M>{String.raw`\mathbb{E}[\exp(s\tau^\beta)]`}</M> is
            finite.
          </p>

          <p className="mb-sm">
            <em>The empirical-tail question.</em> Inter-arrival
            times for engagement events on real platforms have been
            measured across multiple studies, with consistent
            findings: log-normal and Weibull-with-shape-less-than-one
            are the dominant fits, with the shape parameter{" "}
            <M>{String.raw`\beta`}</M> typically in the 0.3-to-0.7
            range. Stouffer et al. (2006) on email correspondence;
            Vázquez et al. (2006) on web-browsing intervals; Cheng
            et al. (2014) on YouTube watch-session lengths — all in
            the stretched-exponential class. The framework&apos;s
            intermediate-regime bound is therefore the regime most
            engagement-interval data sits in, which is what gives
            Theorem 11 its empirical traction.
          </p>

          <p className="mb-sm">
            <em>The interpolation.</em>
          </p>

          <div className="my-md overflow-x-auto">
            <table className="font-mono text-sm">
              <thead>
                <tr className="border-b border-paper-85">
                  <th className="text-left pr-md pb-xs text-ink-70">Tail class</th>
                  <th className="text-left pr-md pb-xs text-ink-70">β</th>
                  <th className="text-left pb-xs text-ink-70">Bound on S(θ_ref; θ*)</th>
                </tr>
              </thead>
              <tbody className="text-ink-90">
                <tr className="border-b border-paper-85">
                  <td className="pr-md py-xs">Polynomial (bounded c_v only)</td>
                  <td className="pr-md py-xs">—</td>
                  <td className="py-xs">O((θ_ref/δ_min)^(−2))</td>
                </tr>
                <tr className="border-b border-paper-85">
                  <td className="pr-md py-xs">Stretched exponential (S_β, β &lt; 1)</td>
                  <td className="pr-md py-xs">β</td>
                  <td className="py-xs">O(exp(−(θ_ref/σ)^β))</td>
                </tr>
                <tr>
                  <td className="pr-md py-xs">Exponential (Class L = S_1)</td>
                  <td className="pr-md py-xs">1</td>
                  <td className="py-xs">O(exp(−c · θ_ref/δ_min))</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-sm">
            <em>What the theorem authorizes the prose to claim.</em>{" "}
            The foreclosure bound is empirically tight for mature
            platforms. For{" "}
            <M>{String.raw`\theta_{\mathrm{ref}}/\delta_{\min} \sim 10^3`}</M>{" "}
            and empirically-typical Weibull shape{" "}
            <M>{String.raw`\beta \approx 0.5`}</M>, Theorem 11 gives{" "}
            <M>{String.raw`S \lesssim \exp(-31)`}</M> — operationally
            zero, substantially sharper than the polynomial bound&apos;s
            <M>{String.raw`10^{-6}`}</M>. The framework&apos;s
            foreclosure claim is not on a knife-edge bound; it has
            substantial buffer under realistic tail conditions.
          </p>

          <p className="mb-sm">
            <em>The empirical hook.</em> Fit a Weibull tail to the
            right portion of the empirical CCDF:{" "}
            <M>{String.raw`\log(-\log \hat S(\tau)) = \beta \log \tau + \mathrm{const}`}</M>.
            The slope gives the empirical{" "}
            <M>{String.raw`\hat\beta`}</M>. The framework predicts{" "}
            <M>{String.raw`\hat\beta`}</M> should increase toward{" "}
            <M>{String.raw`1`}</M> as platforms mature — a testable
            prediction about engagement-interval tail-shape evolution
            on contemporary platforms.
          </p>
        </Middle>

        <Formal label="Definition 9.1 (Class S_β — sub-exponential of order β)">
          <p className="mb-sm">
            <em>
              An inter-arrival distribution belongs to Class{" "}
              <M>{String.raw`S_\beta`}</M> for{" "}
              <M>{String.raw`\beta \in (0, 1]`}</M> if there exists{" "}
              <M>{String.raw`s_0 > 0`}</M> such that
            </em>
          </p>
          <MBlock>
            {String.raw`M_\beta(s) := \mathbb{E}[\exp(s \tau^\beta)] < \infty \quad \text{for all } s \in [0, s_0).`}
          </MBlock>
          <Reads>
            A distribution joins class <M>{String.raw`S_\beta`}</M> if
            its <M>{String.raw`\beta`}</M>-stretched moments stay
            finite — a weaker demand than a finite ordinary
            moment-generating function (the{" "}
            <M>{String.raw`\beta = 1`}</M> case). Smaller{" "}
            <M>{String.raw`\beta`}</M> tolerates heavier tails, and the
            smallest <M>{String.raw`\beta`}</M> a distribution satisfies
            is a label for how heavy its tail is.
          </Reads>
          <p className="mb-sm text-base text-ink-90">
            The class is monotone in <M>{String.raw`\beta`}</M> at
            the level of inclusion:{" "}
            <M>{String.raw`S_1 \subseteq S_\beta`}</M> for{" "}
            <M>{String.raw`\beta < 1`}</M>. The smallest{" "}
            <M>{String.raw`\beta`}</M> for which a distribution
            belongs characterizes its tail decay rate.
          </p>
        </Formal>

        <Formal label="Theorem 11 (stretched-exponential survival bound)">
          <p className="mb-sm">
            <em>
              Suppose the inter-arrival distribution at{" "}
              <M>{String.raw`\theta^*`}</M> belongs to Class{" "}
              <M>{String.raw`S_\beta`}</M> for some{" "}
              <M>{String.raw`\beta \in (0, 1]`}</M>. Then
            </em>
          </p>
          <MBlock>
            {String.raw`S(\theta_{\mathrm{ref}}; \theta^*) \leq \exp(-J_\beta(\theta_{\mathrm{ref}}^\beta)),`}
          </MBlock>
          <Reads>
            Survival at the threshold decays like a stretched
            exponential — <M>{String.raw`\exp`}</M> of minus a rate
            evaluated at the <M>{String.raw`\beta`}</M>-power of the
            threshold. As <M>{String.raw`\beta`}</M> sweeps from 0 to
            1, this single bound interpolates between the loose
            polynomial bound of Lemma 1 and the sharp exponential one
            — and it covers the heavy-tailed regime real
            engagement-interval data actually occupies.
          </Reads>
          <p className="mb-sm">
            <em>where{" "}
            <M>{String.raw`J_\beta(x) := \sup_{s \in [0, s_0)}[sx - \log M_\beta(s)]`}</M>{" "}
            is the Cramér transform of{" "}
            <M>{String.raw`\tau^\beta`}</M> evaluated at{" "}
            <M>{String.raw`\theta_{\mathrm{ref}}^\beta`}</M>.</em>
          </p>
          <p className="mb-sm">
            <em>The bound interpolates between polynomial and
            exponential regimes as <M>{String.raw`\beta`}</M> varies
            in <M>{String.raw`(0, 1]`}</M>.</em>
          </p>

          <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mt-md mb-sm">
            Proof
          </p>

          <p className="mb-sm text-ink-90">
            For <M>{String.raw`s \in [0, s_0)`}</M>, Markov on the
            monotone transformation{" "}
            <M>{String.raw`\tau \mapsto \exp(s\tau^\beta)`}</M>:
          </p>
          <MBlock>
            {String.raw`\Pr(\tau > \theta_{\mathrm{ref}}) = \Pr(\exp(s\tau^\beta) > \exp(s\theta_{\mathrm{ref}}^\beta)) \leq M_\beta(s) \exp(-s\theta_{\mathrm{ref}}^\beta).`}
          </MBlock>
          <Reads>
            The proof in one move. A long pause is the same event as
            its stretched exponential exceeding a large value, and
            Markov&apos;s inequality caps the probability of any
            positive quantity exceeding a level by its mean divided by
            that level. This holds for every <M>{String.raw`s`}</M>.
          </Reads>
          <p className="mb-sm text-ink-90">Infimum over <M>{String.raw`s`}</M>:</p>
          <MBlock>
            {String.raw`S(\theta_{\mathrm{ref}}; \theta^*) \leq \exp(-\sup_s [s\theta_{\mathrm{ref}}^\beta - \log M_\beta(s)]) = \exp(-J_\beta(\theta_{\mathrm{ref}}^\beta)).`}
          </MBlock>
          <Reads>
            Since the bound holds for every <M>{String.raw`s`}</M>,
            pick the <M>{String.raw`s`}</M> that makes it tightest.
            That optimization <em>is</em> the Cramér transform{" "}
            <M>{String.raw`J_\beta`}</M> — the large-deviations rate —
            and it delivers the theorem&apos;s bound.
          </Reads>

          <p className="mb-sm text-ink-90">
            <strong>Strict positivity.</strong> The derivative at{" "}
            <M>{String.raw`s = 0`}</M> is{" "}
            <M>{String.raw`\theta_{\mathrm{ref}}^\beta - \mathbb{E}[\tau^\beta]`}</M>,
            which is positive under structural separation{" "}
            <M>{String.raw`\theta_{\mathrm{ref}}/\delta_{\min} \gg 1`}</M>.
            Hence{" "}
            <M>{String.raw`J_\beta(\theta_{\mathrm{ref}}^\beta) > 0`}</M>.
          </p>
          <ProofEnd />
        </Formal>
      </DepthLayers>

      <section className="mt-xl pt-md border-t border-paper-85">
        <h2 className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-sm">
          Cross-references
        </h2>
        <ul className="text-base text-ink-90 space-y-xs">
          <li>
            Refines:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-1/lemma-1"
              className="text-oxblood hover:underline"
            >
              Lemma 1
            </Link>{" "}
            — interpolates between Lemma 1&apos;s polynomial bound (b)
            and exponential bound (c)
          </li>
          <li>
            Required:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-0"
              className="text-oxblood hover:underline"
            >
              §0 axiom (R1)
            </Link>{" "}
            and the structural-separation hypothesis
          </li>
          <li>
            Empirical hook: §12 (empirical calibration) — fitting{" "}
            <M>{String.raw`\hat\beta`}</M> from the right tail of the
            CCDF
          </li>
        </ul>
      </section>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50">
        v2 apparatus rendering.
      </footer>
    </main>
  );
}
