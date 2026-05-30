import type { Metadata } from "next";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { M } from "@/components/ui/Math";
import { InstrumentsConstellation } from "@/components/dynamics/InstrumentsConstellation";
import { JsonLd, itemListJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

const PATH = "/closed-loop/the-dynamics";
const TITLE = "the dynamics";
const DESCRIPTION =
  "The closed-loop dynamics made operable. Five composite plates. Nine mechanism dimensions. Two standalone instruments. The foreclosure clock; reclamation trajectories; mode-space; the cohort gradient; a TikTok worked example. The live simulator and the relational atlas.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

interface Plate {
  numeral: string;
  slug: string;
  title: string;
  description: React.ReactNode;
}

interface Mechanism {
  slug: string;
  title: string;
  description: React.ReactNode;
  section: string;
}

const MECHANISMS: Mechanism[] = [
  {
    slug: "closed-loop",
    title: "the closed loop",
    description: "equations (1)–(6) wired as a directed graph; the foundational architecture from which the rest of the framework descends",
    section: "§1",
  },
  {
    slug: "captured-resonance",
    title: "captured resonance",
    description: <>the body as forced oscillator under the medium&apos;s delivery phase; Kuramoto coupling and the lock transition <M>{String.raw`K_{bm} > |\omega_b - \omega_m|`}</M></>,
    section: "§3.6",
  },
  {
    slug: "chrono-debt",
    title: "chrono-debt spectrum",
    description: <>the deficit in pause-time at every scale simultaneously; <M>{String.raw`D(t,\tau) = \Lambda_\circ(\tau) - \Lambda(t,\tau)`}</M> as a spectrum, not a quantity at one scale</>,
    section: "§3.2",
  },
  {
    slug: "libidinal-routing",
    title: "libidinal routing",
    description: "the four registers (Subject · Citizen · Person · Consumer) routed through a single delivery surface; mutual information fills the off-diagonal and the dividual condition follows",
    section: "§3.3",
  },
  {
    slug: "somatic-optimization",
    title: "somatic optimization",
    description: "the body as the differential of the marked point process; Hawkes-style raster of stimuli and per-register engagement events, with cross-excitation visible at the tick level",
    section: "§3.5",
  },
  {
    slug: "surplus",
    title: "libidinal surplus",
    description: <><M>{String.raw`\Sigma(T) = \sum_i \int \rho_i\, dN^i_t`}</M> — the platform&apos;s accumulated yield decomposed across the four registers; the asymmetric distribution is the policy&apos;s signature</>,
    section: "§3.1",
  },
  {
    slug: "metric-superego",
    title: "metric superego",
    description: <><M>{String.raw`D_{\mathrm{KL}}(\nu_u \,\|\, \pi_{\hat{R}})`}</M> trajectory under maintenance labor; the user&apos;s self-evaluative distribution converges to the platform&apos;s reward distribution unless <M>{String.raw`L_m \ge L_m^*`}</M></>,
    section: "§3.4",
  },
  {
    slug: "causal-chain",
    title: "the causal chain",
    description: <>the proof of Theorem 1 as a directed graph from (A1)–(A6) to <span className="font-mono">RECLAMATION ⌀</span>; Mode A cuts the chain at <M>{String.raw`\theta^*`}</M>, Modes B and C operate on parallel structures</>,
    section: "§4",
  },
  {
    slug: "intervention",
    title: "the three modes of intervention",
    description: <>Mode A (architectural · <M>{String.raw`\beta`}</M>) / Mode B (artisanal · <M>{String.raw`L_m`}</M>) / Mode C (disruption-as-form · <M>{String.raw`\sigma_\eta^+`}</M>) side by side; sweep each knob to see which structurally distinct claim it modifies</>,
    section: "§5",
  },
];

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
    note: "live instrument · standalone surface",
    external: true,
  },
  {
    href: "/simulator/mindmap.html",
    title: "the relational atlas",
    description:
      "every variable, theorem, and intervention point in one navigable map of the apparatus. The causal graph made interrogable.",
    note: "relational atlas · standalone surface",
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
      <JsonLd
        data={[
          itemListJsonLd("The Dynamics — five composite plates", PLATES.map((p) => ({
            name: p.title,
            url: `/closed-loop/the-dynamics/${p.slug}`,
            description: typeof p.description === "string" ? p.description : undefined,
          }))),
          itemListJsonLd("The Six Instruments", MECHANISMS.filter((m) =>
            ["closed-loop", "captured-resonance", "chrono-debt", "libidinal-routing", "somatic-optimization", "surplus", "metric-superego"].includes(m.slug)
          ).map((m) => ({
            name: m.title,
            url: `/closed-loop/the-dynamics/${m.slug}`,
            description: typeof m.description === "string" ? m.description : undefined,
          }))),
          breadcrumbJsonLd([
            { label: "the closed-loop libidinal economy", href: "/" },
            { label: "the dynamics", href: PATH },
          ]),
        ]}
      />
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
                  href={`/closed-loop/the-dynamics/${plate.slug}`}
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

          {/* Mechanisms — individual dimensions isolated as their own plates. */}
          <section className="mt-2xl pt-lg border-t border-paper-85">
            <p className="font-mono text-xs text-ink-50 mb-md">
              mechanisms · isolated dimensions, one at a time
            </p>

            <InstrumentsConstellation />

            <ol className="flex flex-col gap-lg">
              {MECHANISMS.map((m) => (
                <li key={m.slug}>
                  <a href={`/closed-loop/the-dynamics/${m.slug}`} className="group block">
                    <div className="flex items-baseline justify-between gap-sm">
                      <h2 className="font-mono font-medium text-md text-ink-90 group-hover:text-oxblood transition-colors duration-100">
                        {m.title}
                      </h2>
                      <span className="font-mono text-xs text-ink-50 shrink-0">
                        {m.section}
                      </span>
                    </div>
                    <p className="font-serif text-base text-ink-70 mt-xs max-w-[34rem]">
                      {m.description}
                    </p>
                  </a>
                </li>
              ))}
            </ol>
          </section>

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
                    <div className="flex flex-col gap-xs sm:flex-row sm:items-baseline sm:justify-between sm:gap-sm">
                      <h2 className="font-mono font-medium text-md text-ink-90 group-hover:text-oxblood transition-colors duration-100">
                        {inst.title}
                      </h2>
                      <span className="font-mono text-xs text-ink-50 sm:shrink-0">
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
              These two surfaces are standalone — they each run all of the
              apparatus at once and need their own page region to do so.
              Restyled to the site's palette and typography; the live
              simulator runs at full visual register with site fonts and
              tokens. Both open in this tab.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
