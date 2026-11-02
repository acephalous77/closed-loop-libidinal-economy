"use client";

import { useSyncExternalStore } from "react";
import { apparatus } from "@/components/reader-apparatus/engine";

/**
 * The console's session column — arrivals at this channel in the
 * current tab, from the same in-memory record as the reader's
 * apparatus. "—" until the session has entered the work.
 */
export function ChannelTally({ href }: { href: string }) {
  const snap = useSyncExternalStore(
    apparatus.subscribe,
    apparatus.getSnapshot,
    apparatus.getSnapshot
  );
  const count = snap.arrivals.filter((a) => a.key === href).length;
  return (
    <span
      style={{
        fontFamily:
          'var(--font-jetbrains-mono), ui-monospace, "SF Mono", Menlo, monospace',
        fontSize: "0.8125rem",
        letterSpacing: "0.06em",
        fontVariantNumeric: "tabular-nums",
        color: count > 0 ? "var(--color-oxblood)" : "var(--color-ink-50)",
      }}
    >
      {count > 0 ? (
        `entered ×${count}`
      ) : (
        <>
          <span aria-hidden="true" className="hidden sm:inline">—</span>
          <span className="sr-only">not entered in this tab</span>
        </>
      )}
    </span>
  );
}
