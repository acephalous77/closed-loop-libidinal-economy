/**
 * The instruments — `/closed-loop/the-instruments`.
 *
 * The framework's six measurable instruments, organized as
 * instruments rather than as the results that define them. Each
 * instrument has a definition link (apparatus), a calibration link
 * (§12), and a plate link (when one exists).
 *
 * Distinct from /closed-loop/instrumentation (the v1 page about the
 * site's own anti-tracking politics — a meta-content surface, kept
 * intact).
 */
import type { Metadata } from "next";
import Link from "next/link";

const PATH = "/closed-loop/the-instruments";

export const metadata: Metadata = {
  title: "the instruments — closed-loop",
  description:
    "The framework's six measurable instruments. Each has a formal definition in the apparatus, an empirical-calibration protocol in §12, and a dynamics plate.",
  alternates: { canonical: PATH },
  robots: { index: false, follow: false },
};

interface Instrument {
  name: string;
  symbol: string;
  gloss: string;
  defHref: string;
  defLabel: string;
  calibrationAnchor: string;
  plateHref: string;
  plateLive: boolean;
}

const INSTRUMENTS: Instrument[] = [
  {
    name: "Libidinal surplus",
    symbol: "Σ(T)",
    gloss:
      "The integrated reward extracted by the platform over horizon T. Embedded in the (P5) reward functional setup. The platform's surplus is what its optimization is maximizing.",
    defHref: "/closed-loop/the-apparatus/section-0",
    defLabel: "§0.1 (P5)",
    calibrationAnchor: "",
    plateHref: "/closed-loop/v2-dynamics",
    plateLive: false,
  },
  {
    name: "Chrono-debt spectrum",
    symbol: "D(t, τ)",
    gloss:
      "The foreclosed pause-time at every scale, measured against a pre-closure baseline. S(τ; θ_∘) − S(τ; θ_t). The framework's signature instrument for chronopolitical analysis.",
    defHref: "/closed-loop/the-apparatus/section-1/1.4-chrono-debt",
    defLabel: "§1.4 Definition 1.1",
    calibrationAnchor: "/closed-loop/the-apparatus/section-12#hooks",
    plateHref: "/closed-loop/v2-dynamics/chrono-debt-spectrum",
    plateLive: true,
  },
  {
    name: "Dividual condition",
    symbol: "H(u_t | y_{1:t}) → 0",
    gloss:
      "The platform's filtering posterior contracts on the user state at the parametric rate. The user becomes an estimable object under the platform's filtering apparatus. The structural fact behind Deleuze's dividual.",
    defHref: "/closed-loop/the-apparatus/section-3/prop-4-prime",
    defLabel: "§3.1 Proposition 4'",
    calibrationAnchor: "/closed-loop/the-apparatus/section-12#hooks",
    plateHref: "/closed-loop/v2-dynamics/dividual-posterior",
    plateLive: true,
  },
  {
    name: "Metric superego",
    symbol: "D_KL(ν_u(t) || π_R*)",
    gloss:
      "The KL distance from the user's behavioral distribution to the platform-induced target. Decreases monotonically to zero under closed-loop convergence. Adorno's metric of inner damage, dynamically formalized.",
    defHref: "/closed-loop/the-apparatus/section-3/prop-5-prime",
    defLabel: "§3.2 Proposition 5'",
    calibrationAnchor: "/closed-loop/the-apparatus/section-12#hooks",
    plateHref: "/closed-loop/v2-dynamics/metric-superego",
    plateLive: true,
  },
  {
    name: "Libidinal routing mutual information",
    symbol: "I_{Π_t}(u^i; u^j)",
    gloss:
      "The mutual information between user-state registers under the platform's posterior. Strictly positive for non-separable observation channels. The dependently distributed four-register subject.",
    defHref: "/closed-loop/the-apparatus/section-3/prop-7-prime",
    defLabel: "§3.4 Proposition 7'",
    calibrationAnchor: "/closed-loop/the-apparatus/section-12#hooks",
    plateHref: "/closed-loop/v2-dynamics/libidinal-routing",
    plateLive: true,
  },
  {
    name: "Somatic optimization (Hawkes intensity)",
    symbol: "λ^k(t)",
    gloss:
      "The multi-mark Hawkes intensity across the four registers. Self-exciting events on each register, off-diagonal coupling across registers. The dynamical complement to libidinal routing.",
    defHref: "/closed-loop/the-apparatus/section-3/3.5-hawkes",
    defLabel: "§3.5",
    calibrationAnchor: "/closed-loop/the-apparatus/section-12#hooks",
    plateHref: "/closed-loop/v2-dynamics/somatic-hawkes",
    plateLive: true,
  },
];

export default function InstrumentsIndex() {
  return (
    <main className="min-h-screen px-sm py-md max-w-[42rem] mx-auto">
      <nav
        aria-label="Breadcrumb"
        className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-md"
      >
        <Link href="/" className="hover:text-oxblood">autostimulus</Link>
        {" · "}
        <Link href="/closed-loop" className="hover:text-oxblood">closed-loop</Link>
        {" · "}
        <span className="text-ink-90">the instruments</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        the instruments
      </h1>
      <p className="text-base text-ink-90 max-w-prose mb-md">
        The framework&apos;s six measurable instruments. Each has a
        formal definition in the apparatus, an empirical-calibration
        protocol in{" "}
        <Link
          href="/closed-loop/the-apparatus/section-12"
          className="text-oxblood hover:underline"
        >
          §12
        </Link>
        , and a dynamics plate (live or planned). The instruments are
        what the framework would have to measure to refute itself.
      </p>
      <p className="text-base text-ink-70 italic max-w-prose mb-lg">
        The framework&apos;s empirical content is here. The
        instruments together constitute the framework&apos;s claim
        to be more than diagnostic critique — to be testable.
      </p>

      <ol className="space-y-lg">
        {INSTRUMENTS.map((inst, i) => (
          <li
            key={inst.name}
            className="border-l-2 border-paper-85 pl-sm"
          >
            <div className="flex items-baseline gap-sm mb-xs flex-wrap">
              <span className="font-mono text-sm text-ink-70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="font-serif text-md text-ink m-0">
                {inst.name}
              </h2>
              <span className="font-mono text-sm text-ink-70 italic">
                {inst.symbol}
              </span>
            </div>
            <p className="text-base text-ink-90 mb-sm">{inst.gloss}</p>
            <div className="font-mono text-xs uppercase tracking-wider text-ink-70 flex flex-wrap gap-md">
              <Link
                href={inst.defHref}
                className="text-oxblood hover:underline"
              >
                → {inst.defLabel}
              </Link>
              {inst.calibrationAnchor && (
                <Link
                  href={inst.calibrationAnchor}
                  className="text-oxblood hover:underline"
                >
                  → calibration hook
                </Link>
              )}
              {inst.plateLive ? (
                <Link
                  href={inst.plateHref}
                  className="text-oxblood hover:underline"
                >
                  → dynamics plate
                </Link>
              ) : (
                <span className="text-ink-50 italic">
                  dynamics plate (planned)
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>

      <section className="mt-xl pt-md border-t border-paper-85">
        <h2 className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-sm">
          The empirical-calibration framing
        </h2>
        <p className="text-base text-ink-90 max-w-prose mb-sm">
          The six instruments together specify what would have to be
          measured to test the framework. Per-result calibration
          hooks — predicted quantity, measurement protocol,
          confirmation, falsification — are catalogued in{" "}
          <Link
            href="/closed-loop/the-apparatus/section-12"
            className="text-oxblood hover:underline"
          >
            §12 Empirical calibration
          </Link>
          .
        </p>
        <p className="text-base text-ink-90 max-w-prose mb-sm">
          The framework&apos;s{" "}
          <Link
            href="/closed-loop/the-apparatus/section-12#priorities"
            className="text-oxblood hover:underline"
          >
            three priority empirical studies
          </Link>{" "}
          target the cohort gradient (sharpest functional form), the
          foreclosure rate (anchors the spine), and the crisis-boundary
          diagnostics (most ambitious, feasible on public data).
        </p>
        <p className="text-base text-ink-90 max-w-prose">
          The framework&apos;s empirical credibility depends on
          methodological practice the framework cannot do alone. See{" "}
          <Link
            href="/closed-loop/the-apparatus/section-12#reflexive"
            className="text-oxblood hover:underline"
          >
            the reflexive measurement problem
          </Link>{" "}
          for the methodological obstacle and what mitigates it.
        </p>
      </section>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50">
        v2 closed-loop.
      </footer>
    </main>
  );
}
