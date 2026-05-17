import type { Metadata } from "next";
import { JsonLd } from "@/lib/jsonld";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.autostimulus.org";

export const metadata: Metadata = {
  // Use absolute so the root layout's "%s — autostimulus" template
  // doesn't produce "autostimulus — autostimulus" here.
  title: { absolute: "autostimulus" },
  description:
    "Works by A. Selimović. Critical theory, media psychology, political economy. The closed-loop libidinal economy, the OHCOSE manual, the ouroboros chair, the patriotic-times coloring book, and the work to come.",
};

interface Work {
  title: string;
  year: string;
  register: string;
  blurb: string;
  href: string;
  status: "live" | "in production" | "drafting";
}

const WORKS: Work[] = [
  {
    title: "The Closed-Loop Libidinal Economy",
    year: "2026",
    register: "framework · essays · mathematics · interactive plates",
    blurb:
      "A formal framework for the dynamics of attention under platform capture. The foreclosure lemma, the reclamation theorem, three modes of intervention. Mathematics, prose, and operable instruments.",
    href: "/closed-loop",
    status: "live",
  },
  {
    title: "OHCOSE — Office of Human Continuity and Social Equilibrium",
    year: "2026",
    register: "performance piece · institutional manual · in character",
    blurb:
      "A cradle-to-grave partnership for the Standard Consumer-Citizen (Gen C Model). Public Intake Portal of a fictional federal agency whose mandate is the optimization of every phase of human life for the greater economic good.",
    href: "/ohcose",
    status: "live",
  },
  {
    title: "The Ouroboros Chair",
    year: "2025",
    register: "dystopian art project · installation",
    blurb:
      "[in production] full-spectrum live-work-feed-sleep installation.",
    href: "/chair",
    status: "in production",
  },
  {
    title: "Patriotic Times — A Coloring Book",
    year: "2025",
    register: "image · line art · political",
    blurb:
      "[in production] scenes of US democratic state failings and the emergence of fascism, rendered as line art.",
    href: "/patriotic-times",
    status: "in production",
  },
];

export default function AtelierIndex() {
  return (
    <main className="min-h-screen flex flex-col items-center px-sm pt-[6rem] pb-2xl">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "autostimulus",
          url: SITE_URL,
          description:
            "Works by Adnan Selimović. Critical theory, media psychology, political economy.",
          inLanguage: "en",
          author: {
            "@type": "Person",
            name: "Adnan Selimović",
            alternateName: "A. Selimović",
            url: `${SITE_URL}/closed-loop/colophon`,
          },
        }}
      />

      <div className="max-w-[var(--measure)] w-full">
        {/* Masthead */}
        <header className="text-center mb-2xl">
          <h1 className="font-mono text-2xl text-ink tracking-tight">
            autostimulus
          </h1>
          <p className="font-mono text-xs text-ink-50 mt-xs uppercase tracking-[0.2em]">
            a. selimović
          </p>
          <div
            className="mx-auto mt-md border-t border-paper-85"
            style={{ width: "8rem" }}
            aria-hidden="true"
          />
        </header>

        {/* Section label */}
        <p className="font-mono text-xs text-ink-50 mb-lg uppercase tracking-wider text-center">
          works
        </p>

        {/* Works list — single column, mono-spaced */}
        <ol className="flex flex-col gap-xl">
          {WORKS.map((w) => {
            const isLive = w.status === "live";
            return (
              <li key={w.href}>
                {isLive ? (
                  <a
                    href={w.href}
                    className="group block"
                  >
                    <WorkRow work={w} live />
                  </a>
                ) : (
                  <div className="opacity-60">
                    <WorkRow work={w} live={false} />
                  </div>
                )}
              </li>
            );
          })}
        </ol>

        {/* Footer note — minimal */}
        <p className="font-mono text-xs text-ink-50 mt-2xl text-center">
          {/* No nav, no social, no get-in-touch. The works are the works. */}
          2026 · CC BY-SA 4.0 (text) · MIT (code)
        </p>
      </div>
    </main>
  );
}

function WorkRow({ work, live }: { work: Work; live: boolean }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-sm">
        <h2
          className={
            "font-serif text-lg text-ink-90 " +
            (live ? "group-hover:text-oxblood transition-colors duration-100" : "")
          }
        >
          {work.title}
        </h2>
        <span className="font-mono text-xs text-ink-50 shrink-0">
          {work.year}
        </span>
      </div>
      <p className="font-mono text-xs text-ink-50 mt-xs">
        {work.register}
      </p>
      <p className="font-serif text-base text-ink-70 mt-xs leading-snug">
        {work.blurb}
      </p>
      {live && (
        <p className="font-mono text-xs text-ink-50 mt-xs">
          → {work.href}
        </p>
      )}
    </div>
  );
}
