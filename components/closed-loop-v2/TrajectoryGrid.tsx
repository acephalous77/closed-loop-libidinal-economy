"use client";

import { useSyncExternalStore, type CSSProperties } from "react";
import Link from "next/link";
import { PlateGlyph } from "@/components/closed-loop-v2/PlateGlyphs";
import { DrawOnView } from "@/components/ui/DrawOnView";
import { apparatus } from "@/components/reader-apparatus/engine";

export interface PlateCard {
  name: string;
  href: string;
  gloss: string;
  apparatusName: string;
  apparatusHref: string;
}

/**
 * The twelve plates, read against the session: plates the reader has
 * operated in this tab light (number, glyph and border in oxblood),
 * with a one-line count above. Session-only, in-memory — the same
 * record the reader's apparatus keeps, shown finer.
 */
export function TrajectoryGrid({ plates }: { plates: PlateCard[] }) {
  const snap = useSyncExternalStore(
    apparatus.subscribe,
    apparatus.getSnapshot,
    apparatus.getSnapshot
  );

  const operated = new Set(
    snap.routes
      .filter((r) => r.startsWith("/closed-loop/v2-dynamics/"))
      .map((r) => r.split("/").pop())
  );
  const operatedCount = plates.filter((p) =>
    operated.has(p.href.split("/").pop() ?? "")
  ).length;

  return (
    <>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-sm">
        plates operated this session:{" "}
        <span
          className={operatedCount ? "text-oxblood" : "text-ink-50"}
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          {operatedCount}
        </span>{" "}
        of {plates.length}
        <span className="text-ink-50"> — this tab only</span>
      </p>
      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
        {plates.map((plate, i) => {
          const slug = plate.href.split("/").pop() ?? "";
          const visited = operated.has(slug);
          return (
            <li
              key={plate.href}
              className={
                "border p-sm flex flex-col " +
                (visited ? "border-oxblood/40" : "border-paper-85")
              }
            >
              <div className="flex items-center justify-between mb-xs">
                <span className={visited ? "text-oxblood" : "text-ink-70"} aria-hidden>
                  <DrawOnView
                    style={{ display: "inline-block", "--d": i } as CSSProperties}
                  >
                    <PlateGlyph slug={slug} size={56} strokeWidth={1.15} />
                  </DrawOnView>
                </span>
                <span
                  className={
                    "font-mono text-xs tabular-nums " +
                    (visited ? "text-oxblood" : "text-ink-50")
                  }
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 className="font-serif text-md text-ink m-0">
                <Link href={plate.href} className="text-oxblood hover:underline">
                  {plate.name}
                </Link>
              </h2>
              <p className="text-base text-ink-90 mb-xs mt-xs">{plate.gloss}</p>
              <div className="font-mono text-xs uppercase tracking-wider text-ink-70 mt-auto pt-xs">
                <Link
                  href={plate.apparatusHref}
                  className="text-oxblood hover:underline"
                >
                  → {plate.apparatusName}
                </Link>
              </div>
            </li>
          );
        })}
      </ol>
    </>
  );
}
