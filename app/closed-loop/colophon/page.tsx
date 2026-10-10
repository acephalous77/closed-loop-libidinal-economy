import type { Metadata } from "next";
import Colophon from "@/content/colophon.mdx";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";

export const metadata: Metadata = {
  title: "colophon",
  description:
    "Typography, design, engineering, hosting, license.",
  alternates: { canonical: "/closed-loop/colophon" },
};

export default function ColophonPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-[var(--container-page)] px-sm pt-md pb-2xl">
        <div className="mb-lg">
          <Breadcrumb
            path={[
              { label: "the closed-loop libidinal economy", href: "/" },
              { label: "colophon" },
            ]}
          />
        </div>

        {/* Colophon: italic sm ink-70 centered, narrow column per spec */}
        <article className="mx-auto max-w-[24rem] font-serif italic text-sm text-ink-70 text-center colophon-prose">
          <Colophon />
        </article>
      </div>
    </main>
  );
}
