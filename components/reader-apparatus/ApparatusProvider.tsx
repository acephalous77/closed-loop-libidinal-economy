"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { apparatus } from "./engine";

/**
 * Mounts the reader's apparatus: activity listeners once per tab, and
 * one arrival per pathname change. Renders nothing.
 */
export function ApparatusProvider() {
  const pathname = usePathname();

  useEffect(() => {
    apparatus.mount();
    return () => apparatus.unmount();
  }, []);

  useEffect(() => {
    apparatus.noteArrival(pathname || "/");
  }, [pathname]);

  return null;
}
