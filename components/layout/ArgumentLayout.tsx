import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { MarginTOC } from "@/components/navigation/MarginTOC";

interface TocEntry {
  number: string;
  title: string;
  slug: string;
}

interface ArgumentLayoutProps {
  children: React.ReactNode;
  title: string;
  toc: TocEntry[];
}

export function ArgumentLayout({ children, title, toc }: ArgumentLayoutProps) {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-[var(--container-page)] px-sm pt-md pb-2xl">
        {/* Breadcrumb */}
        <div className="mb-lg">
          <Breadcrumb
            path={[
              { label: "the closed-loop libidinal economy", href: "/" },
              { label: title },
            ]}
          />
        </div>

        {/* 12-col grid: TOC (2) + gutter (1) + prose (6) + marginalia (3) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-sm">
          {/* Left: TOC */}
          <aside className="hidden lg:block lg:col-span-2 lg:col-start-1">
            <MarginTOC entries={toc} />
          </aside>

          {/* Center: prose */}
          <article className="lg:col-span-6 lg:col-start-4 argument-prose">
            <h1 className="font-serif text-2xl text-ink leading-tight mb-lg">
              {title}
            </h1>
            {children}
          </article>

          {/* Right: marginalia placeholder (footnote system, future) */}
          <aside className="hidden lg:block lg:col-span-3 lg:col-start-10" />
        </div>

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
