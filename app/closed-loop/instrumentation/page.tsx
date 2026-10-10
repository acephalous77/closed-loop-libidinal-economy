import type { Metadata } from "next";
import Instrumentation from "@/content/instrumentation.mdx";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";

export const metadata: Metadata = {
  title: "instrumentation",
  description:
    "What this site does and does not log. One cookie, four storage keys, nothing else.",
  alternates: { canonical: "/closed-loop/instrumentation" },
};

export default function InstrumentationPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-[var(--container-page)] px-sm pt-md pb-2xl">
        <div className="mb-lg">
          <Breadcrumb
            path={[
              { label: "the closed-loop libidinal economy", href: "/" },
              { label: "instrumentation" },
            ]}
          />
        </div>

        <article className="mx-auto max-w-[var(--measure)]">
          <h1 className="font-mono text-xl text-ink-90 mb-lg">
            instrumentation.
          </h1>

          <div className="prose-narrow [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-2 [&_li]:leading-relaxed">
            <Instrumentation />
          </div>
        </article>
      </div>
    </main>
  );
}
