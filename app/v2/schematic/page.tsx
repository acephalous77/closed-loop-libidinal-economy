/**
 * Temporary preview route for the v2 closed-loop schematic stub.
 * Lives at /v2/schematic. Will be removed before the v2 closed-loop
 * rebuild ships — the schematic will move to /closed-loop/ as the
 * section's landing page.
 */
import { ClosedLoopSchematic } from "@/components/closed-loop-v2/Schematic";

export const metadata = {
  title: "Schematic stub — v2 closed-loop",
  robots: { index: false, follow: false },
};

export default function SchematicPreview() {
  return (
    <main className="min-h-screen px-sm py-md max-w-[1200px] mx-auto">
      <header className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-md">
        autostimulus · v2 preview · schematic stub
      </header>

      <h1 className="font-serif text-2xl text-ink mb-md">
        The closed-loop schematic
      </h1>

      <p className="text-base text-ink-90 max-w-prose mb-lg">
        Interactive prototype of the closed-loop figure. Hover or
        keyboard-focus a part to see its plain-language caption in the
        panel below the figure. Click — or Tab to focus and press
        Enter — to enter that part&apos;s apparatus section. Routes
        target pages that don&apos;t exist until Phase 2 builds them;
        they 404 for now.
      </p>

      <div className="my-lg">
        <ClosedLoopSchematic />
      </div>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50">
        Preview route. Will be removed before v2 ships.
      </footer>
    </main>
  );
}
