/**
 * Apparatus §8 — Network coupling.
 *
 * The single-user apparatus extends to networked populations via
 * mean-field limit. Five results:
 *   §8.2  Theorem 10 — mean-field convergence
 *   §8.3  Networked Lemma 1
 *   §8.4  Engagement cascade theorem
 *   §8.5  Percolation threshold
 *   §8.6  Cohort graph-amplification
 *
 * Single page with anchored subsections — matches the §0 and §5 patterns.
 */
import type { Metadata } from "next";
import Link from "next/link";
import {
  DepthLayers,
  Caption,
  Middle,
  Formal,
  Reads,
} from "@/components/ui/DepthLayers";
import { MBlock, M } from "@/components/ui/Math";

const PATH = "/closed-loop/the-apparatus/section-8";

export const metadata: Metadata = {
  title: "§8 Network coupling — the apparatus — closed-loop",
  description:
    "The single-user apparatus extended to networked populations. Mean-field convergence, networked foreclosure, the engagement cascade theorem, the percolation threshold, the cohort graph-amplification theorem.",
  alternates: { canonical: PATH },
};

export default function Section8Page() {
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
        <span className="text-ink-90">§8 · network coupling</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        §8 Network coupling
      </h1>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-lg">
        Mean-field · networked foreclosure · cascade · percolation · cohort amplification
      </p>

      {/* In-page TOC */}
      <nav aria-label="In-page TOC" className="text-base mb-xl pl-sm border-l-2 border-paper-85">
        <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-xs">On this page</p>
        <ol className="space-y-xs text-ink-90">
          <li><a href="#model" className="hover:text-oxblood">§8.1 The networked closed-loop model</a></li>
          <li><a href="#theorem-10" className="hover:text-oxblood">§8.2 Theorem 10 — mean-field convergence</a></li>
          <li><a href="#networked-lemma-1" className="hover:text-oxblood">§8.3 Networked Lemma 1</a></li>
          <li><a href="#cascade" className="hover:text-oxblood">§8.4 Engagement cascade theorem</a></li>
          <li><a href="#percolation" className="hover:text-oxblood">§8.5 Percolation threshold</a></li>
          <li><a href="#cohort-amp" className="hover:text-oxblood">§8.6 Cohort graph-amplification</a></li>
        </ol>
      </nav>

      <p className="text-base text-ink-90 mb-lg max-w-prose">
        The single-user apparatus of §0–§7 extends to networked
        populations via mean-field limit. Real platforms are networks:
        users connected by friendship graphs, follower–followee
        relations, recommendation cascades. The framework&apos;s
        empirical predictions about mobilization–dispersion dynamics,
        cohort propagation, and intermediary-institution roles depend
        on the network extension.
      </p>

      {/* ─────────────────────────────────────────────────────── */}
      {/* §8.1 The networked closed-loop model                    */}
      {/* ─────────────────────────────────────────────────────── */}
      <section id="model" className="mb-xl">
        <h2 className="font-serif text-lg text-ink mb-md">§8.1 The networked closed-loop model</h2>
        <DepthLayers>
          <Caption>
            The single-user setup extends naturally to a population of{" "}
            <M>{String.raw`N`}</M> users connected by a weighted
            directed graph <M>{String.raw`G_N`}</M>. Per-user
            dynamics, observation, and policy on each user&apos;s
            state. Networked Hawkes intensities couple users through
            the graph adjacency{" "}
            <M>{String.raw`W_{ij}^N`}</M>.
          </Caption>
          <Middle>
            <p className="mb-sm">
              <strong>Population.</strong> Users indexed by{" "}
              <M>{String.raw`i \in [N]`}</M>. User{" "}
              <M>{String.raw`i`}</M>&apos;s state{" "}
              <M>{String.raw`u_t^i \in \mathcal{U}`}</M> decomposed
              into the four registers as in §0.1.
            </p>
            <p className="mb-sm">
              <strong>Graph.</strong> Weighted directed graph{" "}
              <M>{String.raw`G_N`}</M> with row-stochastic adjacency{" "}
              <M>{String.raw`W^N = (W_{ij}^N)`}</M>.
            </p>
            <p className="mb-sm">
              <strong>Per-user dynamics, observation, and networked policy.</strong>
            </p>
            <ul className="list-disc pl-md mb-sm space-y-xs">
              <li><M>{String.raw`u_{t+1}^i \sim T(\cdot \mid u_t^i, s_t^i)`}</M></li>
              <li><M>{String.raw`y_t^i \sim O(\cdot \mid u_t^i)`}</M></li>
              <li><M>{String.raw`s_t^i \sim \pi_\theta(\cdot \mid y_{1:t}^i, \{y_{1:t}^j\}_{j \in [N]}, W^N)`}</M></li>
            </ul>
            <p className="mb-sm">
              The networked Hawkes intensity for user{" "}
              <M>{String.raw`i`}</M>, register{" "}
              <M>{String.raw`k`}</M>:
            </p>
            <MBlock>
              {String.raw`\lambda^{i,k}(t) = \lambda_0^{i,k} + \sum_{j=1}^N W_{ij}^N \sum_l \alpha_{kl} \int_0^t \kappa(t-s)\, dN_s^{j,l}.`}
            </MBlock>
            <Reads>
              User <M>{String.raw`i`}</M>&apos;s firing rate on register{" "}
              <M>{String.raw`k`}</M> now draws on the recent events of
              every other user <M>{String.raw`j`}</M>, weighted by the
              graph edge <M>{String.raw`W_{ij}`}</M>, on top of the
              within-user coupling <M>{String.raw`\alpha_{kl}`}</M>.
              Two channels of contagion run at once: across registers
              inside one user, and across users along the graph.
            </Reads>
            <p className="mb-sm">
              The off-diagonal <M>{String.raw`\alpha_{kl}`}</M>{" "}
              generates within-user libidinal routing (
              <Link
                href="/closed-loop/the-apparatus/section-3/prop-7-prime"
                className="text-oxblood hover:underline"
              >
                §3.4
              </Link>
              ); the off-diagonal{" "}
              <M>{String.raw`W_{ij}^N`}</M> for{" "}
              <M>{String.raw`i \neq j`}</M> generates cross-user
              engagement cascades.
            </p>
          </Middle>
        </DepthLayers>
      </section>

      {/* ─────────────────────────────────────────────────────── */}
      {/* §8.2 Theorem 10                                          */}
      {/* ─────────────────────────────────────────────────────── */}
      <section id="theorem-10" className="mb-xl">
        <h2 className="font-serif text-lg text-ink mb-md">§8.2 Theorem 10 — mean-field convergence</h2>
        <DepthLayers>
          <Caption>
            As <M>{String.raw`N \to \infty`}</M> with the graph
            converging to a graphon{" "}
            <M>{String.raw`W : [0,1]^2 \to [0,1]`}</M>, the
            population&apos;s performative stable point converges to
            the continuum performative stable point{" "}
            <M>{String.raw`\theta_\infty^*`}</M>. The single-user
            framework is recovered in the mean-field limit; the
            framework&apos;s claims survive the network extension.
          </Caption>
          <Middle>
            <p className="mb-sm">
              The mean-field limit takes{" "}
              <M>{String.raw`N \to \infty`}</M> with{" "}
              <M>{String.raw`G_N`}</M> converging to a{" "}
              <em>graphon</em>{" "}
              <M>{String.raw`W : [0,1]^2 \to [0,1]`}</M> — the
              continuum analog of the adjacency matrix. The
              population-level performative operator{" "}
              <M>{String.raw`\Phi_N`}</M> converges to a continuum
              operator <M>{String.raw`\Phi_\infty`}</M>; the
              population&apos;s performative stable point converges
              to <M>{String.raw`\theta_\infty^*`}</M>.
            </p>
          </Middle>
          <Formal label="Theorem 10 (mean-field convergence)">
            <p className="mb-sm">
              <em>
                Under (R1), (R2) extended to the networked setting,
                plus square-integrability of <M>{String.raw`W`}</M>{" "}
                and Lipschitz dependence of{" "}
                <M>{String.raw`\mathcal{D}`}</M> on the population
                measure flow <M>{String.raw`\mu`}</M>:
              </em>
            </p>
            <MBlock>
              {String.raw`\theta_N^* \xrightarrow{N \to \infty} \theta_\infty^*,`}
            </MBlock>
            <Reads>
              As the population grows, the platform&apos;s stable point
              settles onto a single continuum stable point. The
              network does not change the <em>kind</em> of object the
              framework studies — the closure still has a well-defined
              fixed point in the large-population limit, so every
              single-user result has a networked counterpart.
            </Reads>
            <p className="mb-sm">
              <em>where{" "}
              <M>{String.raw`\theta_\infty^*`}</M> is the continuum
              performative stable point — the{" "}
              <M>{String.raw`\theta`}</M> maximizing
              </em>
            </p>
            <MBlock>
              {String.raw`F^\infty(\theta) = \int_0^1 \mathbb{E}_{\mu(x; \theta)}[\hat R^x]\, dx`}
            </MBlock>
            <Reads>
              The continuum platform score is the per-user reward
              averaged over a continuum of users indexed by{" "}
              <M>{String.raw`x \in [0,1]`}</M>. The finite friend graph
              is replaced by a graphon — a density of connections — and
              the sum over users becomes an integral. Otherwise this is
              the same performative value <M>{String.raw`F`}</M> from
              §0, lifted to the population.
            </Reads>
            <p className="mb-sm">
              <em>under the continuum-limit consistency.</em>
            </p>

            <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mt-md mb-sm">
              Proof sketch
            </p>
            <p className="text-base text-ink-90">
              Standard mean-field convergence (Carmona & Delarue 2018,{" "}
              <em>Probabilistic Theory of Mean Field Games</em>,
              Theorem 1.2, adapted): graphon convergence + Lipschitz
              dependence + uniqueness of the continuum stable point
              give convergence in distribution of the discrete dynamics
              to the continuum. Continuity of the argmax operator
              (under (R2)) gives convergence of the stable points.
            </p>
          </Formal>
        </DepthLayers>
      </section>

      {/* ─────────────────────────────────────────────────────── */}
      {/* §8.3 Networked Lemma 1                                  */}
      {/* ─────────────────────────────────────────────────────── */}
      <section id="networked-lemma-1" className="mb-xl">
        <h2 className="font-serif text-lg text-ink mb-md">§8.3 Networked Lemma 1</h2>
        <DepthLayers>
          <Caption>
            Foreclosure survives the network extension. Under positive
            lower density of the graphon{" "}
            <M>{String.raw`W(x, y) \geq w_{\min} > 0`}</M>, the
            average per-user survival at{" "}
            <M>{String.raw`\theta_\mathrm{ref}`}</M> vanishes;
            uniform per-user bound is{" "}
            <M>{String.raw`(1 + (c_v^*)^2)/((\theta_\mathrm{ref}/\delta_{\min})^2 \cdot w_{\min}^2)`}</M>{" "}
            — the graph-density penalty.
          </Caption>
          <Middle>
            <p className="mb-sm">
              The networked extension of{" "}
              <Link
                href="/closed-loop/the-apparatus/section-1/lemma-1"
                className="text-oxblood hover:underline"
              >
                Lemma 1
              </Link>{" "}
              gives both an average claim (foreclosure holds on
              average across the population) and a uniform per-user
              claim (no individual user escapes). The uniform claim
              incurs a graph-density penalty{" "}
              <M>{String.raw`w_{\min}^{-2}`}</M>: in sparser-graph
              regions, per-user firing rates are weaker, hence per-user
              foreclosure is weaker.
            </p>
          </Middle>
          <Formal label="Networked Lemma 1">
            <p className="mb-sm">
              <em>
                Let <M>{String.raw`W`}</M> be a graphon with positive
                lower density{" "}
                <M>{String.raw`W(x, y) \geq w_{\min} > 0`}</M> for
                a.e.{" "}
                <M>{String.raw`(x, y)`}</M>. Under (R1), (R2),
                (P-I)–(P-III) extended to the networked setting, at
                the continuum stable point{" "}
                <M>{String.raw`\theta_\infty^*`}</M>:
              </em>
            </p>
            <p className="mb-sm">
              <strong>(a) Average survival.</strong>{" "}
              <M>{String.raw`\lim_{N \to \infty} S^\infty(\theta_\mathrm{ref}; \theta_N^*) = 0`}</M>.
            </p>
            <p className="mb-sm">
              <strong>(b) Uniform per-user bound.</strong>
            </p>
            <MBlock>
              {String.raw`\sup_{x \in [0,1]} S(\theta_\mathrm{ref}; \theta_\infty^*, x) \leq \frac{1 + (c_v^*)^2}{(\theta_\mathrm{ref}/\delta_{\min})^2 \cdot w_{\min}^2}.`}
            </MBlock>
            <Reads>
              Foreclosure holds uniformly: the{" "}
              <M>{String.raw`\sup`}</M> over all users{" "}
              <M>{String.raw`x`}</M> is bounded, so even the most
              weakly-connected user is foreclosed. The bound is the
              single-user one inflated by{" "}
              <M>{String.raw`1/w_{\min}^2`}</M>, the graph-density
              penalty: the most weakly-connected user is foreclosed
              least, but even they do not escape.
            </Reads>

            <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mt-md mb-sm">
              Proof sketch
            </p>
            <p className="text-base text-ink-90">
              Same three-step structure as Lemma 1, with each step
              extended to the networked setting. The factor{" "}
              <M>{String.raw`w_{\min}^{-2}`}</M> is the graph-density
              penalty: lower connectivity gives weaker per-user firing
              rates, hence weaker per-user foreclosure.
            </p>
          </Formal>
        </DepthLayers>
      </section>

      {/* ─────────────────────────────────────────────────────── */}
      {/* §8.4 Cascade                                             */}
      {/* ─────────────────────────────────────────────────────── */}
      <section id="cascade" className="mb-xl">
        <h2 className="font-serif text-lg text-ink mb-md">§8.4 Engagement cascade theorem</h2>
        <DepthLayers>
          <Caption>
            The networked multi-mark Hawkes process is stable iff{" "}
            <M>{String.raw`\rho(W) \rho(\alpha) \int \kappa < 1`}</M>.
            Below threshold, cascade descendants are finite; the
            cascade amplification factor{" "}
            <M>{String.raw`\mathcal{A}`}</M> is given by the geometric
            series of the branching ratio.
          </Caption>
          <Middle>
            <p className="mb-sm">
              The networked Hawkes branching ratio multiplies the
              within-user spectral radius{" "}
              <M>{String.raw`\rho(\alpha)`}</M> (the framework&apos;s
              within-user libidinal routing strength) by the
              cross-user spectral radius{" "}
              <M>{String.raw`\rho(W)`}</M> (the graph&apos;s
              connectivity) by the kernel integral{" "}
              <M>{String.raw`\int \kappa`}</M>. Stability requires the
              product to be below 1.
            </p>
            <p className="mb-sm">
              The platform&apos;s incentive structure pushes{" "}
              <M>{String.raw`\rho(W) \cdot \rho(\alpha) \cdot \int \kappa`}</M>{" "}
              toward 1 from below. Each factor is a quantity the
              platform&apos;s optimization can influence.{" "}
              <M>{String.raw`\rho(W)`}</M> — graph connectivity — is
              influenced by recommendation surfaces that increase
              exposure across users (the &ldquo;people you may
              know&rdquo; widget, the cross-user re-share
              architecture, the algorithmic-feed broadcast pattern).{" "}
              <M>{String.raw`\rho(\alpha)`}</M>, the within-user
              cross-register coupling, is influenced by content that
              activates multiple registers simultaneously: rage-bait
              that is somatic and political and cognitive,
              aspirational lifestyle content that is kinaesthetic
              and cognitive. <M>{String.raw`\int \kappa`}</M> — the
              engagement-memory kernel — is influenced by interface
              design that extends the user&apos;s attentional dwell.
              The closure&apos;s incentive structure aligns all three
              factors with the engagement-monetization objective.
              Approach to the boundary{" "}
              <M>{String.raw`\rho(W)\rho(\alpha)\int \kappa \to 1^-`}</M>{" "}
              is what produces viral cascades and the
              platform-spanning attention spikes the cascade
              literature documents.
            </p>
          </Middle>
          <Formal label="Theorem (engagement cascade stability)">
            <p className="mb-sm">
              <em>
                Let <M>{String.raw`\rho(W)`}</M> be the graphon&apos;s
                spectral radius (the largest eigenvalue of{" "}
                <M>{String.raw`f \mapsto \int W(x, y) f(y) dy`}</M> on{" "}
                <M>{String.raw`L^2([0,1])`}</M>). Let{" "}
                <M>{String.raw`\rho(\alpha)`}</M> be the spectral
                radius of the cross-register coupling{" "}
                <M>{String.raw`\alpha = (\alpha_{kl})`}</M>. The
                networked multi-mark Hawkes process is stable if and
                only if
              </em>
            </p>
            <MBlock>
              {String.raw`\rho(W) \cdot \rho(\alpha) \cdot \int_0^\infty \kappa(s)\, ds < 1.`}
            </MBlock>
            <Reads>
              The cascade stays finite exactly when one event begets,
              on average, fewer than one further event — the branching
              ratio below one. It is a product of three gains:
              user-to-user reach <M>{String.raw`\rho(W)`}</M>,
              register-to-register reach <M>{String.raw`\rho(\alpha)`}</M>,
              and how long each event keeps firing{" "}
              <M>{String.raw`\int \kappa`}</M>. Lift any one and the
              network drifts toward criticality.
            </Reads>

            <p className="mb-sm">
              <em>The cascade amplification factor — expected
              cross-user events triggered by a single event — is</em>
            </p>
            <MBlock>
              {String.raw`\mathcal{A}(W, \alpha, \kappa) = \frac{\rho(W) \rho(\alpha) \int \kappa}{1 - \rho(W) \rho(\alpha) \int \kappa}.`}
            </MBlock>
            <Reads>
              The expected number of cross-user events a single event
              sets off, summed over all generations — a geometric
              series in the branching ratio. As the branching ratio
              climbs toward one, the denominator goes to zero and the
              amplification diverges: one post triggers an unbounded
              expected cascade. This is the arithmetic of
              &ldquo;going viral.&rdquo;
            </Reads>

            <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mt-md mb-sm">
              Proof sketch
            </p>
            <p className="text-base text-ink-90">
              The networked multi-mark Hawkes process is a multivariate
              Hawkes on a population × register product space. The
              branching ratio is{" "}
              <M>{String.raw`\rho(W) \rho(\alpha) \int \kappa`}</M>{" "}
              (Bacry, Mastromatteo, Muzy 2015, <em>Hawkes Processes
              in Finance</em>, §2.2). Standard stability theorem gives
              the condition; the geometric-series formula gives{" "}
              <M>{String.raw`\mathcal{A}`}</M>.
            </p>
          </Formal>
        </DepthLayers>
      </section>

      {/* ─────────────────────────────────────────────────────── */}
      {/* §8.5 Percolation                                         */}
      {/* ─────────────────────────────────────────────────────── */}
      <section id="percolation" className="mb-xl">
        <h2 className="font-serif text-lg text-ink mb-md">§8.5 Percolation threshold</h2>
        <DepthLayers>
          <Caption>
            The critical connectivity{" "}
            <M>{String.raw`\rho_c := 1/(\rho(\alpha) \int \kappa)`}</M>{" "}
            separates local cascades from platform-wide cascades. At
            threshold, cascade dynamics are critical with power-law
            decay and approximate scale-invariance. The framework&apos;s
            mobilization–dispersion claim depends on{" "}
            <M>{String.raw`\rho(W) > \rho_c`}</M> for major platforms.
          </Caption>
          <Middle>
            <p className="mb-sm">
              The cascade stability condition rewrites as a phase
              transition in <M>{String.raw`\rho(W)`}</M>: at fixed
              within-user coupling{" "}
              <M>{String.raw`\rho(\alpha) \int \kappa`}</M>, the
              cascade is sub-critical below{" "}
              <M>{String.raw`\rho_c`}</M> and super-critical above.
              The fourth-cell mode (regulatory intervention on the
              observation channel) and other graph-structure
              interventions can in principle lower{" "}
              <M>{String.raw`\rho(W)`}</M> below{" "}
              <M>{String.raw`\rho_c`}</M>, converting platform-wide
              cascade dynamics back to local.
            </p>
          </Middle>
          <Formal label="Theorem (percolation threshold)">
            <p className="mb-sm"><em>Define the critical connectivity</em></p>
            <MBlock>
              {String.raw`\rho_c := \frac{1}{\rho(\alpha) \int_0^\infty \kappa(s)\, ds}.`}
            </MBlock>
            <Reads>
              The critical connectivity: the graph reach{" "}
              <M>{String.raw`\rho(W)`}</M> at which cascades flip from
              local to platform-wide. Below{" "}
              <M>{String.raw`\rho_c`}</M> an event&apos;s influence
              dies out in a neighborhood; above it, the cascade
              percolates across the whole network. Regulating the
              observation channel or the graph structure to hold{" "}
              <M>{String.raw`\rho(W)`}</M> under{" "}
              <M>{String.raw`\rho_c`}</M> keeps cascades local — a
              concrete handle for the fourth-cell mode.
            </Reads>

            <p className="mb-sm">
              <strong>(i) Below threshold (<M>{String.raw`\rho(W) < \rho_c`}</M>).</strong>{" "}
              <em>Engagement cascades remain bounded; expected cascade
              descendants are finite; platform reach is confined to
              local neighborhoods.</em>
            </p>
            <p className="mb-sm">
              <strong>(ii) Above threshold (<M>{String.raw`\rho(W) > \rho_c`}</M>).</strong>{" "}
              <em>Engagement cascades are super-critical at the
              population level; events propagate platform-wide before
              dispersing.</em>
            </p>
            <p className="mb-sm">
              <strong>(iii) At threshold (<M>{String.raw`\rho(W) = \rho_c`}</M>).</strong>{" "}
              <em>Critical cascade dynamics with power-law decay;
              long-range temporal correlations; approximate scale-
              invariance.</em>
            </p>

            <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mt-md mb-sm">
              Proof sketch
            </p>
            <p className="text-base text-ink-90">
              Branching-process percolation theorem (Athreya & Ney
              1972, <em>Branching Processes</em>, Ch. I) with branching
              ratio{" "}
              <M>{String.raw`\rho(W) \rho(\alpha) \int \kappa`}</M>.
            </p>
          </Formal>
          <p className="mt-md text-base text-ink-90">
            The framework&apos;s substantive empirical claim — that
            mobilization–dispersion patterns are characteristic of
            contemporary platforms — depends on{" "}
            <M>{String.raw`\rho(W) > \rho_c`}</M> for major platforms.
            A regulatory intervention that lowers{" "}
            <M>{String.raw`\rho(W)`}</M> below threshold would convert
            super-critical cascade dynamics into local cascades.
          </p>
        </DepthLayers>
      </section>

      {/* ─────────────────────────────────────────────────────── */}
      {/* §8.6 Cohort graph-amplification                         */}
      {/* ─────────────────────────────────────────────────────── */}
      <section id="cohort-amp" className="mb-xl">
        <h2 className="font-serif text-lg text-ink mb-md">§8.6 Cohort graph-amplification</h2>
        <DepthLayers>
          <Caption>
            Network clustering amplifies the per-user cohort gradient
            of Proposition 8. When users in similar developmental
            cohorts cluster in the graph, the local-average exposure{" "}
            <M>{String.raw`\bar\tau_\mathrm{exp}(x)`}</M> replaces
            the per-user{" "}
            <M>{String.raw`\tau_\mathrm{exp}`}</M> in the cohort
            gradient bound. Peer-environment exposure compounds with
            individual exposure.
          </Caption>
          <Middle>
            <p className="mb-sm">
              The native cohort&apos;s platform-fluency is
              structurally amplified by its peers&apos; platform-
              fluency. If two users with similar developmental
              exposures are graph-clustered (
              <M>{String.raw`w_{\mathrm{intra}} > w_{\mathrm{inter}}`}</M>),
              their effective exposure to the platform-induced target{" "}
              <M>{String.raw`\pi_{\hat R}^*`}</M> reflects both their
              own developmental history and the local-average history
              of their peers.
            </p>
          </Middle>
          <Formal label="Theorem (cohort graph-amplification)">
            <p className="mb-sm">
              <em>
                Suppose users in similar developmental cohorts are
                clustered in the graph: intra-community density{" "}
                <M>{String.raw`w_{\mathrm{intra}} > w_{\mathrm{inter}}`}</M>{" "}
                (inter-community density). Let{" "}
                <M>{String.raw`\bar\tau_\mathrm{exp}(x)`}</M> denote
                the local-average developmental exposure in a
                neighborhood of label{" "}
                <M>{String.raw`x`}</M>. Then:
              </em>
            </p>
            <MBlock>
              {String.raw`D_{KL}(\nu_u^{x, \mathrm{init}} \,\|\, \pi_{\hat R}^*) \leq C \cdot e^{-2 K_{\mathrm{glob}} \bar\tau_\mathrm{exp}(x)}.`}
            </MBlock>
            <Reads>
              The cohort gradient (Proposition 8) read across the
              network. A user&apos;s distance from the platform target
              is bounded by the exponential decay in their
              <em> neighborhood&apos;s</em> average exposure{" "}
              <M>{String.raw`\bar\tau_\mathrm{exp}(x)`}</M> — a collective
              quantity, governed by the community, not by the user&apos;s own exposure alone. Developmentally-saturated communities pull
              their members toward the target faster: the cohort
              effect compounds through the graph.
            </Reads>

            <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mt-md mb-sm">
              Remark
            </p>
            <p className="text-base text-ink-90">
              Network clustering amplifies the per-user cohort gradient
              of{" "}
              <Link
                href="/closed-loop/the-apparatus/section-6/prop-8"
                className="text-oxblood hover:underline"
              >
                Proposition 8
              </Link>
              . Peer-environment exposure adds to individual exposure.
              The native cohort&apos;s platform-fluency is structurally
              amplified by its peers&apos; platform-fluency.
            </p>
          </Formal>
        </DepthLayers>
      </section>

      <section className="mt-xl pt-md border-t border-paper-85">
        <h2 className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-sm">
          Cross-references
        </h2>
        <ul className="text-base text-ink-90 space-y-xs">
          <li>
            Underlying single-user results:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-1/lemma-1"
              className="text-oxblood hover:underline"
            >
              Lemma 1
            </Link>{" "}
            (foreclosure) and{" "}
            <Link
              href="/closed-loop/the-apparatus/section-3/3.5-hawkes"
              className="text-oxblood hover:underline"
            >
              §3.5 (Hawkes)
            </Link>
          </li>
          <li>
            Cohort gradient amplified here:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-6/prop-8"
              className="text-oxblood hover:underline"
            >
              Proposition 8
            </Link>
          </li>
          <li>
            Intervention site for graph-structure regulation: the
            fourth-cell mode at{" "}
            <Link
              href="/closed-loop/the-apparatus/section-5"
              className="text-oxblood hover:underline"
            >
              §5
            </Link>
          </li>
          <li>
            Required:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-0"
              className="text-oxblood hover:underline"
            >
              §0 axioms (R1, R2, P-I, P-II, P-III)
            </Link>{" "}
            extended to the networked setting
          </li>
        </ul>
      </section>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50">
        v2 apparatus rendering.
      </footer>
    </main>
  );
}
