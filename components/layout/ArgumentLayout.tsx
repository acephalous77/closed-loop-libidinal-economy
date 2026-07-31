import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { MarginTOC, InlineTOC } from "@/components/navigation/MarginTOC";
import { PrintButton } from "@/components/ui/PrintButton";

interface TocEntry {
  number: string;
  title: string;
  slug: string;
}

interface Crumb {
  label: string;
  href?: string;
}

interface ArgumentLayoutProps {
  children: React.ReactNode;
  title: string;
  toc: TocEntry[];
  /** Optional eyebrow shown above the title (e.g. "the argument · piece 2"). */
  eyebrow?: string;
  /** Optional breadcrumb override; defaults to [home, title]. */
  breadcrumb?: Crumb[];
  /** Optional content rendered after the prose body, inside the same column (e.g. EssayNav). */
  footer?: React.ReactNode;
}

export function ArgumentLayout({
  children,
  title,
  toc,
  eyebrow,
  breadcrumb,
  footer,
}: ArgumentLayoutProps) {
  const path: Crumb[] = breadcrumb ?? [
    { label: "the closed-loop libidinal economy", href: "/" },
    { label: title },
  ];

  /* Two of the pieces carry their own numerals in the MDX headings
     ("## I. The Genre"), and their TOC mirrors them as "I.", "II.". The
     rest leave headings bare and let the CSS counter supply "§N.", which
     their TOC mirrors as "§1.", "§2.". Running the counter over a
     self-numbered piece rendered "§1. I. The Genre". Derive which scheme
     is in play from the TOC rather than threading a new prop — the data
     already says it, and the numerals are load-bearing (the heading slugs
     are built from them, so stripping them would break every anchor and
     every external deep link). */
  const selfNumbered = toc.length > 0 && !toc[0].number.startsWith("§");

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-[var(--container-page)] px-sm pt-md pb-2xl">
        {/* Breadcrumb */}
        <div className="mb-lg">
          <Breadcrumb path={path} />
        </div>

        {/* 12-col grid: contents (2) + gutter (1) + prose (6) + margin rail (3).
            The rail used to render nothing, so the composition sat left-anchored
            with a quarter of the page dead. It now carries the offprint
            affordance, which also gets the print link out of the title's flex
            row — where it collided with the h1 and wrapped beside the first word
            on narrow screens. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-sm">
          {/* Left margin: the section index, static (see MarginTOC) */}
          <aside className="hidden lg:block lg:col-span-2 lg:col-start-1">
            <MarginTOC entries={toc} />
          </aside>

          {/* Center: prose */}
          <article
            className={
              "lg:col-span-6 lg:col-start-4 argument-prose" +
              (selfNumbered ? " argument-prose--self-numbered" : "")
            }
          >
            {eyebrow && (
              <p className="font-mono text-xs text-ink-50 uppercase tracking-wider mb-xs">
                {eyebrow}
              </p>
            )}
            <h1 className="font-serif text-2xl text-ink leading-tight mb-md">
              {title}
            </h1>
            {/* Narrow viewports: the contents the aside can't show, plus the
                offprint link the margin rail carries on wide ones. */}
            <InlineTOC entries={toc} />
            <div className="lg:hidden mb-md">
              <PrintButton />
            </div>
            {children}
          </article>

          {/* Right margin: offprint rail */}
          <aside className="hidden lg:block lg:col-span-3 lg:col-start-10">
            <PrintButton />
          </aside>
        </div>

        {/* Footer slot (e.g. inter-essay navigation) */}
        {footer && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-sm">
            <div className="lg:col-span-6 lg:col-start-4">{footer}</div>
          </div>
        )}

        {/* Signature */}
        <div className="lg:col-span-6 lg:col-start-4 mt-2xl">
          <hr className="border-0 border-t border-paper-85 max-w-[var(--measure)] mx-auto" />
          <p className="font-serif italic text-sm text-ink-70 text-right max-w-[var(--measure)] mx-auto mt-sm">
            A. Selimović
          </p>
        </div>
      </div>
    </main>
  );
}
