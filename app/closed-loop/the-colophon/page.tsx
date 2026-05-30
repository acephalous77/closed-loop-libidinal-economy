/**
 * The colophon -- v2 /closed-loop/the-colophon.
 *
 * Credits, typography, color, framework-as-design-instruction, the
 * refusals list with apparatus citations, reproducibility note.
 * Distinct from the v1 /closed-loop/colophon page (which the user
 * directed to leave intact).
 *
 * The page's content is the public-facing version of:
 *   Desktop/autostimulus-planning/02_refusals_list.md
 *   Desktop/autostimulus-planning/06_design_system.md
 *   Desktop/autostimulus-planning/01_design_principles.md
 *
 * The refusals are the heart of the colophon — the framework's
 * politics applied to its own hosting, with framework citation for
 * each refusal so the reader can locate the structural reason.
 */
import type { Metadata } from "next";
import Link from "next/link";

const PATH = "/closed-loop/the-colophon";

export const metadata: Metadata = {
  title: "the colophon — closed-loop",
  description:
    "Credits, typography, color, the framework as design instruction, the refusals with their apparatus citations, reproducibility.",
  alternates: { canonical: PATH },
};

interface Refusal {
  pattern: string;
  citation: string;
  citationHref: string;
}

const REFUSALS_BY_CATEGORY: { category: string; intro: string; items: Refusal[] }[] = [
  {
    category: "Forward-motion and attention-capture refusals",
    intro:
      "These instantiate the closed-loop optimization the framework critiques — they drive the reader toward continued engagement or compress reading into consumption.",
    items: [
      { pattern: "No analytics (Google Analytics, Plausible, Fathom, segment.io, server-side event logging).", citation: "Lemma 1", citationHref: "/closed-loop/the-apparatus/section-1/lemma-1" },
      { pattern: "No \"next chapter\" or \"continue reading\" buttons at the end of any surface.", citation: "§5 + §7", citationHref: "/closed-loop/the-apparatus/section-5" },
      { pattern: "No completion progress bars for reading, watching, or scrolling.", citation: "§3.5", citationHref: "/closed-loop/the-apparatus/section-3/3.5-hawkes" },
      { pattern: "No estimated read times.", citation: "Lemma 1", citationHref: "/closed-loop/the-apparatus/section-1/lemma-1" },
      { pattern: "No reading-history badges (\"unread,\" \"new since your last visit\").", citation: "§3.2 Prop 5'", citationHref: "/closed-loop/the-apparatus/section-3/prop-5-prime" },
      { pattern: "No \"you may also like\" or related-articles recommendations.", citation: "§3.5 + §8", citationHref: "/closed-loop/the-apparatus/section-8" },
      { pattern: "No autoplay of any media — video, audio, animation.", citation: "Prop 6", citationHref: "/closed-loop/the-apparatus/section-3/prop-6" },
      { pattern: "No infinite scroll, no lazy-loading of next sections, no autoplay-next.", citation: "Lemma 1", citationHref: "/closed-loop/the-apparatus/section-1/lemma-1" },
      { pattern: "No notifications — browser push, in-page badges, unread counters.", citation: "Prop 7' + §3.5", citationHref: "/closed-loop/the-apparatus/section-3/prop-7-prime" },
    ],
  },
  {
    category: "Anticipatory-interface refusals",
    intro:
      "These instantiate the dividual posterior reading the reader before the reader has acted.",
    items: [
      { pattern: "No predictive search, no auto-suggest, no type-ahead.", citation: "Prop 4'", citationHref: "/closed-loop/the-apparatus/section-3/prop-4-prime" },
      { pattern: "No hover-states that telegraph clickability before deliberation.", citation: "Prop 4'", citationHref: "/closed-loop/the-apparatus/section-3/prop-4-prime" },
      { pattern: "No optimistic UI — no pre-rendering of state changes before they are confirmed.", citation: "Prop 4'", citationHref: "/closed-loop/the-apparatus/section-3/prop-4-prime" },
      { pattern: "No personalization based on browsing history, geolocation, or any reader characteristic.", citation: "§0 Definition 0.1", citationHref: "/closed-loop/the-apparatus/section-0" },
    ],
  },
  {
    category: "Persistent-presence and state-accumulation refusals",
    intro:
      "These instantiate the metric superego's constant evaluative gaze and the cohort-formation substrate the framework formalizes.",
    items: [
      { pattern: "No sticky nav bars, floating action buttons, persistent footer CTAs.", citation: "Prop 5'", citationHref: "/closed-loop/the-apparatus/section-3/prop-5-prime" },
      { pattern: "No localStorage, sessionStorage, or IndexedDB usage for reader-specific state.", citation: "Prop 4'", citationHref: "/closed-loop/the-apparatus/section-3/prop-4-prime" },
      { pattern: "No accounts, no sign-up, no login.", citation: "Prop 4'", citationHref: "/closed-loop/the-apparatus/section-3/prop-4-prime" },
      { pattern: "No persistent reading list, no \"saved for later,\" no \"continue where you left off.\"", citation: "Prop 5'", citationHref: "/closed-loop/the-apparatus/section-3/prop-5-prime" },
      { pattern: "No view counts, like counts, read counts displayed to the reader.", citation: "§3.5 + §8.4", citationHref: "/closed-loop/the-apparatus/section-8" },
    ],
  },
  {
    category: "Engagement-aesthetic refusals",
    intro:
      "Visual or interaction patterns that signify SaaS/platform optimization even when not technically driving engagement.",
    items: [
      { pattern: "No skeleton loaders or shimmer effects.", citation: "§3.5", citationHref: "/closed-loop/the-apparatus/section-3/3.5-hawkes" },
      { pattern: "No micro-interactions for delight — hover bounces, click ripples, success confetti.", citation: "design system", citationHref: "" },
      { pattern: "No emoji in navigation, headers, or button labels.", citation: "design system", citationHref: "" },
      { pattern: "No gradient buttons, glass morphism, neumorphism, SaaS visual language.", citation: "design system", citationHref: "" },
      { pattern: "No dark-mode toggle. Dark mode follows the system preference.", citation: "Prop 5'", citationHref: "/closed-loop/the-apparatus/section-3/prop-5-prime" },
    ],
  },
  {
    category: "Cross-register-routing refusals",
    intro:
      "These instantiate libidinal routing — the cross-register coupling the framework formalizes as the closure's relational form.",
    items: [
      { pattern: "No newsletter sign-up. No \"subscribe\" prompts.", citation: "Prop 7'", citationHref: "/closed-loop/the-apparatus/section-3/prop-7-prime" },
      { pattern: "No social sharing buttons.", citation: "§3.5 + §8.4", citationHref: "/closed-loop/the-apparatus/section-8" },
      { pattern: "No comment sections, no inline reactions, no Disqus-style embeds.", citation: "Prop 7'", citationHref: "/closed-loop/the-apparatus/section-3/prop-7-prime" },
      { pattern: "No embedded social-media widgets — Twitter timelines, Instagram feeds.", citation: "Prop 7'", citationHref: "/closed-loop/the-apparatus/section-3/prop-7-prime" },
      { pattern: "No \"as seen on\" or press-mention badges.", citation: "§3.5 + §8.4", citationHref: "/closed-loop/the-apparatus/section-8" },
    ],
  },
  {
    category: "Voice and marketing-register refusals",
    intro:
      "Copy patterns that simulate intimacy, manufacture urgency, or smuggle in the marketing register.",
    items: [
      { pattern: "No urgency framing — \"limited time,\" \"act now,\" \"join now.\"", citation: "§3.5", citationHref: "/closed-loop/the-apparatus/section-3/3.5-hawkes" },
      { pattern: "No social-proof framing — \"readers love this,\" \"thousands have read,\" \"trusted by.\"", citation: "§3.5 + §8.4", citationHref: "/closed-loop/the-apparatus/section-8" },
      { pattern: "No \"we\" speaking to \"you\" in marketing register.", citation: "Prose Writing Charter", citationHref: "" },
      { pattern: "No SEO-optimized writing that distorts voice for keyword density.", citation: "Prose Writing Charter", citationHref: "" },
    ],
  },
];

export default function TheColophonPage() {
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
        <span className="text-ink-90">the colophon</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        the colophon
      </h1>

      <p className="text-base text-ink-90 max-w-prose mb-md">
        Credits, typography, color, the framework as design instruction,
        the refusals with their apparatus citations, reproducibility.
        The colophon documents what the site refuses, and why. The
        framework critiques attention-capture; the site refuses the
        UX patterns the framework critiques.
      </p>

      <p className="text-base text-ink-70 italic max-w-prose mb-lg">
        Distinct from the v1 colophon (at{" "}
        <Link href="/closed-loop/colophon" className="text-oxblood hover:underline">
          /closed-loop/colophon
        </Link>
        ), which is preserved as historical artifact.
      </p>

      <section className="mb-xl">
        <h2 className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-sm">
          Credits
        </h2>
        <p className="text-base text-ink-90">
          Author: Adnan Selimović. Apparatus design: A. Selimović with
          collaborator contributions documented in the manuscript&apos;s
          bibliography. The site is built atop the v1 closed-loop
          rebuild; the v2 work catalogued at{" "}
          <Link
            href="/closed-loop/the-apparatus"
            className="text-oxblood hover:underline"
          >
            /closed-loop/the-apparatus
          </Link>{" "}
          renders the formal apparatus from the canonical manuscript
          against the new performative-prediction spine.
        </p>
      </section>

      <section className="mb-xl">
        <h2 className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-sm">
          Typography
        </h2>
        <p className="text-base text-ink-90">
          EB Garamond for body prose. JetBrains Mono for operational
          and labeling work — section breadcrumbs, formal-block
          labels, plate controls, axis labels in figures. Both
          self-hosted under <code className="font-mono text-sm">/fonts/</code>;
          no external font-CDN call.
        </p>
      </section>

      <section className="mb-xl">
        <h2 className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-sm">
          Color
        </h2>
        <p className="text-base text-ink-90 mb-sm">
          A six-color palette. Each color carries theoretical or
          operational meaning across the site:
        </p>
        <ul className="text-base text-ink-90 space-y-xs list-disc pl-md">
          <li>
            <strong>cream</strong> — the unforeclosed substrate;
            page background.
          </li>
          <li>
            <strong>warm-ink</strong> — the operational ground; body
            text, primary curves.
          </li>
          <li>
            <strong>oxblood</strong> — foreclosure intensity;
            chrono-debt regions; the contractivity boundary; visited
            links.
          </li>
          <li>
            <strong>fog</strong> — secondary text; pre-closure
            baseline curves.
          </li>
          <li>
            <strong>slate</strong> — Mode A intervention sites; the
            cooler register.
          </li>
          <li>
            <strong>moss</strong> — reflective intervals when marked
            positively; Mode B; the unforeclosed region in chrono-debt
            plots.
          </li>
        </ul>
        <p className="text-base text-ink-90 mt-sm">
          Color carries information but never carries information
          alone. Pattern, shape, position, and labels carry redundantly
          (WCAG AA + accessibility commitment).
        </p>
      </section>

      <section className="mb-xl">
        <h2 className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-sm">
          The framework as design instruction
        </h2>
        <p className="text-base text-ink-90 mb-sm">
          The framework critiques attention-capture; the site refuses
          the UX patterns the framework critiques. The refusals below
          are theoretically grounded — each pattern is refused because
          the apparatus formalizes the mechanism the pattern
          instantiates. The site&apos;s politics are applied to its
          own hosting.
        </p>
        <p className="text-base text-ink-90">
          Reading the colophon as a substantive document: each
          refusal cites the apparatus result that licenses it. The
          framework is not separable from its presentation.
        </p>
      </section>

      <section className="mb-xl">
        <h2 className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-sm">
          The refusals
        </h2>

        <div className="space-y-md">
          {REFUSALS_BY_CATEGORY.map((cat) => (
            <div key={cat.category} className="border-l-2 border-paper-85 pl-sm">
              <h3 className="font-serif italic text-md text-ink mb-xs">
                {cat.category}
              </h3>
              <p className="text-base text-ink-90 mb-sm">{cat.intro}</p>
              <ul className="text-base text-ink-90 space-y-xs">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex flex-col sm:flex-row sm:items-baseline sm:gap-md">
                    <span className="flex-1">{item.pattern}</span>
                    <span className="font-mono text-xs text-ink-70 whitespace-nowrap">
                      {item.citationHref ? (
                        <Link
                          href={item.citationHref}
                          className="text-oxblood hover:underline"
                        >
                          → {item.citation}
                        </Link>
                      ) : (
                        <span>→ {item.citation}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-xl">
        <h2 className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-sm">
          What survives
        </h2>
        <p className="text-base text-ink-90 mb-sm">
          The site does have UX. The refusals carve out what remains:
        </p>
        <ul className="text-base text-ink-90 space-y-xs list-disc pl-md">
          <li>Static URLs that are stable and citable.</li>
          <li>Anchor links to headings and to apparatus results.</li>
          <li>Plain hyperlinks with explicit text.</li>
          <li>Underline-on-hover as confirmation of an action chosen.</li>
          <li>Keyboard navigation for every interactive element.</li>
          <li>Visible focus indicators in the cream / warm-ink / oxblood palette.</li>
          <li>Five navigation hubs — the architecture figure, the apparatus index, the dynamics plates, the instruments, and the glossary.</li>
          <li>Plates with controls the reader operates — sliders, dropdowns, pause/step/replay.</li>
          <li>Equations rendered with KaTeX, configured for screen-reader compatibility.</li>
          <li>Theme that respects <code className="font-mono text-sm">prefers-color-scheme</code>.</li>
        </ul>
      </section>

      <section className="mb-xl">
        <h2 className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-sm">
          Reproducibility and source
        </h2>
        <p className="text-base text-ink-90 mb-sm">
          The site lives at{" "}
          <a
            href="https://github.com/acephalous77/closed-loop-libidinal-economy"
            className="text-oxblood hover:underline"
          >
            github.com/acephalous77/closed-loop-libidinal-economy
          </a>
          . The v2 rebuild lives on the <code className="font-mono text-sm">v2/closed-loop-rebuild</code> branch.
        </p>
        <p className="text-base text-ink-90">
          The apparatus content is rendered from a canonical manuscript
          source. Substantive changes to the apparatus flow upstream
          from the manuscript; the site is the rendering, not the source
          of truth.
        </p>
      </section>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50">
        v2 closed-loop.
      </footer>
    </main>
  );
}
