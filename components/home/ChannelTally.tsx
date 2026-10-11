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
        fontSize: "0.72rem",
        letterSpacing: "0.1em",
        fontVariantNumeric: "tabular-nums",
        color: count > 0 ? "#6ea6d4" : "#8b9296",
        opacity: count > 0 ? 1 : 0.7,
      }}
    >
      {count > 0 ? `×${count}` : "—"}
    </span>
  );
}
