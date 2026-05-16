import type { Metadata } from "next";
import OpenQuestions from "@/content/open-questions.mdx";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { PrintButton } from "@/components/ui/PrintButton";
import { ReadingProgress } from "@/components/ui/ReadingProgress";
import { BackToTop } from "@/components/ui/BackToTop";

export const metadata: Metadata = {
  title: "open questions — The Closed-Loop Libidinal Economy",
  description:
    "Ten open questions the framework names as research targets: three formal mathematical, two structural-empirical, five where the empirical record is thin. Each with what would refute, what would confirm.",
};

const TOC = [
  { number: "·", title: "formal mathematical questions", slug: "formal-mathematical-questions" },
  { number: "Q1.", title: "T_mix direction under Mode C", slug: "q1-the-direction-of-t_mathrmmix-under-mode-c" },
  { number: "Q2.", title: "cohort gradient mechanism", slug: "q2-the-developmental-mechanism-behind-the-cohort-gradient" },
  { number: "Q3.", title: "operating point of Σⁱ", slug: "q3-the-operating-point-characterization-of-per-register-surplus" },
  { number: "·", title: "open structural-empirical questions", slug: "open-structural-empirical-questions" },
  { number: "Q4.", title: "cohort-level Mode C", slug: "q4-is-cohort-level-disruption-mobilization-scaled-up-mode-c" },
  { number: "Q5.", title: "native cohort's Mode C", slug: "q5-does-the-native-cohorts-multi-legibilities-practice-satisfy-mode-c" },
  { number: "·", title: "where the empirical record is thin", slug: "where-the-empirical-record-is-genuinely-thin" },
  { number: "Q6.", title: "the developmental cohort gradient", slug: "q6-the-cohort-gradient-at-the-developmental-level" },
  { number: "Q7.", title: "mutual-information convergence", slug: "q7-mutual-information-convergence-across-the-four-registers" },
  { number: "Q8.", title: "Mode C at population scale", slug: "q8-mode-cs-effectiveness-at-population-scale" },
  { number: "Q9.", title: "Mode A mixing-time", slug: "q9-mode-a-mixing-time-prediction" },
  { number: "Q10.", title: "the captive-as-population", slug: "q10-the-captive-as-population-claim" },
  { number: "·", title: "on using this list", slug: "on-using-this-list" },
];

export default function OpenQuestionsPage() {
  return (
    <main className="min-h-screen">
      <ReadingProgress />
      <BackToTop />
      <div className="mx-auto max-w-[var(--container-page)] px-sm pt-md pb-2xl">
        <div className="mb-lg">
          <Breadcrumb
            path={[
              { label: "the closed-loop libidinal economy", href: "/" },
              { label: "open questions" },
            ]}
          />
        </div>

        <article className="mx-auto max-w-[var(--measure)] argument-prose">
          <p className="font-mono text-xs text-ink-50 uppercase tracking-wider mb-xs">
            research targets · open commitments
          </p>
          <div className="flex items-baseline justify-between gap-md mb-lg">
            <h1 className="font-serif text-2xl text-ink leading-tight">
              open questions
            </h1>
            <PrintButton />
          </div>
          <OpenQuestions />
        </article>

        <nav
          aria-label="Sections"
          className="mx-auto max-w-[var(--measure)] mt-2xl pt-lg border-t border-paper-85 print-hide"
        >
          <p className="font-mono text-xs text-ink-50 mb-sm uppercase tracking-wider">
            jump to
          </p>
          <ul className="flex flex-wrap gap-x-md gap-y-xs">
            {TOC.map((t) => (
              <li key={t.slug}>
                <a
                  href={`#${t.slug}`}
                  className="font-mono text-xs text-ink-70 hover:text-oxblood transition-colors duration-100"
                >
                  {t.number === "·" ? "↓" : t.number}{" "}
                  {t.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}
