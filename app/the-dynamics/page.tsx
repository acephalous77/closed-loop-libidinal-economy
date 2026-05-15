import type { Metadata } from "next";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";

export const metadata: Metadata = {
  title: "the dynamics — The Closed-Loop Libidinal Economy",
  description:
    "Five visualizations of the closed-loop dynamics: foreclosure clock, reclamation trajectories, mode-space, cohort gradient, TikTok worked example.",
};

interface Plate {
  numeral: string;
  slug: string;
  title: string;
  description: string;
}

interface Instrument {
  href: string;
  title: string;
  description: string;
  note: string;
  external?: boolean;
}

const INSTRUMENTS: Instrument[] = [
  {
    href: "/simulator/index.html",
    title: "the live simulator",
    description:
      "all six equations, all six instruments, and the three modes wired into a single running apparatus. Lemma 1 and Theorem 1 produced in real time; intervention controls at the points the framework specifies.",
    note: "live instrument · the prior artifact, served as-is",
    external: true,
  },
  {
    href: "/simulator/mindmap.html",
    title: "the relational atlas",
    description:
      "every variable, theorem, and intervention point in one navigable map of the apparatus. The causal graph made interrogable.",
    note: "relational atlas · standalone",
    external: true,
  },
];

const PLATES: Plate[] = [
  {
    numeral: "I.",
    slug: "foreclosure-clock",
    title: "foreclosure clock",
    description: "the survival probability of the reflective window, made physically legible",
  },
  {
    numeral: "II.",
    slug: "reclamation-trajectories",
    title: "reclamation trajectories",
    description: "the conditional autocovariance as a set that fails to grow",
  },
  {
    numeral: "III.",
    slug: "mode-space",
    title: "mode-space",
    description: "the three modes of intervention as non-substitutable directions in parameter space",
  },
  {
    numeral: "IV.",
    slug: "cohort-gradient",
    title: "cohort gradient",
    description: "the framework's most direct empirical prediction, made visible as a falsifiable shape",
  },
  {
    numeral: "V.",
    slug: "tiktok",
    title: "tiktok",
    description: "a worked example: how the six instruments operate on a specific platform",
  },
];

export default function TheDynamicsPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-[var(--container-page)] px-sm pt-md pb-2xl">
        <div className="mb-lg">
          <Breadcrumb
            path={[
              { label: "the closed-loop libidinal economy", href: "/" },
              { label: "the dynamics" },
            ]}
          />
        </div>

        <article className="mx-auto max-w-[44rem]">
          <h1 className="font-mono text-xl text-ink-90 mb-xl">
            the dynamics.
          </h1>

          <p className="font-mono text-xs text-ink-50 mb-md">five plates · each carries one structural claim</p>

          <ol className="flex flex-col gap-lg">
            {PLATES.map((plate) => (
              <li key={plate.slug}>
                <a
                  href={`/the-dynamics/${plate.slug}`}
                  className="group block"
                >
                  <div className="flex items-baseline justify-between gap-sm">
                    <h2 className="font-mono font-medium text-md text-ink-90 group-hover:text-oxblood transition-colors duration-100">
                      {plate.title}
                    </h2>
                    <span className="font-mono text-xs text-ink-50 shrink-0">
                      {plate.numeral}
                    </span>
                  </div>
                  <p className="font-serif text-base text-ink-70 mt-xs max-w-[34rem]">
                    {plate.description}
                  </p>
                </a>
              </li>
            ))}
          </ol>

          {/* The apparatus, complete — instruments that run all the dynamics at once. */}
          <section className="mt-2xl pt-lg border-t border-paper-85">
            <p className="font-mono text-xs text-ink-50 mb-md">
              the apparatus, complete · the dynamics seen all at once
            </p>
            <ol className="flex flex-col gap-lg">
              {INSTRUMENTS.map((inst) => (
                <li key={inst.href}>
                  <a
                    href={inst.href}
                    target={inst.external ? "_self" : undefined}
                    className="group block"
                  >
                    <div className="flex items-baseline justify-between gap-sm">
                      <h2 className="font-mono font-medium text-md text-ink-90 group-hover:text-oxblood transition-colors duration-100">
                        {inst.title}
                      </h2>
                      <span className="font-mono text-xs text-ink-50 shrink-0">
                        {inst.note}
                      </span>
                    </div>
                    <p className="font-serif text-base text-ink-70 mt-xs max-w-[34rem]">
                      {inst.description}
                    </p>
                  </a>
                </li>
              ))}
            </ol>
            <p className="font-serif italic text-sm text-ink-50 mt-md max-w-[34rem]">
              These two surfaces are preserved from the prior artifact and served as-is.
              Typography and chrome do not match the rest of the site; the apparatus does.
              A spec-aligned port is planned.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
