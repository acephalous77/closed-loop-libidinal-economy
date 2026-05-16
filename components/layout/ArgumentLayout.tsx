import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { MarginTOC } from "@/components/navigation/MarginTOC";
import { PrintButton } from "@/components/ui/PrintButton";
import { ReadingProgress } from "@/components/ui/ReadingProgress";
import { BackToTop } from "@/components/ui/BackToTop";

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

  return (
    <main className="min-h-screen">
      <ReadingProgress />
      <BackToTop />
      <div className="mx-auto max-w-[var(--container-page)] px-sm pt-md pb-2xl">
        {/* Breadcrumb */}
        <div className="mb-lg">
          <Breadcrumb path={path} />
        </div>

        {/* 12-col grid: TOC (2) + gutter (1) + prose (6) + marginalia (3) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-sm">
          {/* Left: TOC */}
          <aside className="hidden lg:block lg:col-span-2 lg:col-start-1">
            <MarginTOC entries={toc} />
          </aside>

          {/* Center: prose */}
          <article className="lg:col-span-6 lg:col-start-4 argument-prose">
            {eyebrow && (
              <p className="font-mono text-xs text-ink-50 uppercase tracking-wider mb-xs">
                {eyebrow}
              </p>
            )}
            <div className="flex items-baseline justify-between gap-md mb-lg">
              <h1 className="font-serif text-2xl text-ink leading-tight">
                {title}
              </h1>
              <PrintButton />
            </div>
            {children}
          </article>

          {/* Right column intentionally left as quiet whitespace — keeps
              prose at narrow measure on wide viewports without a visible
              empty box. */}
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
