/**
 * Motion helpers.
 *
 * `app/globals.css` already collapses CSS animations and transitions to an
 * instant under `prefers-reduced-motion: reduce`. That handles the visual /
 * vestibular side, but JavaScript-driven loops (`requestAnimationFrame`,
 * `setInterval`) keep running underneath — burning CPU and battery while the
 * reader sees nothing move. These helpers let those loops honor the same
 * preference by not running at all, and let one-shot reveals jump straight to
 * their finished state.
 *
 * The site refuses attention-economy convention by design; a loop that keeps
 * spinning against a stated preference is exactly the kind of quiet imposition
 * it sets out to avoid.
 */

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

/**
 * SSR-safe, synchronous read of the reduced-motion preference. Returns false
 * on the server and on browsers without `matchMedia` (so motion is the default
 * only where the preference genuinely can't be read).
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }
  return window.matchMedia(QUERY).matches;
}

function subscribeReducedMotion(onChange: () => void): () => void {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return () => {};
  }
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getReducedMotionSnapshot(): boolean {
  return prefersReducedMotion();
}

function getReducedMotionServerSnapshot(): boolean {
  return false;
}

/**
 * Reactive variant: re-renders when the preference changes (e.g. the reader
 * toggles it in the OS while the page is open). The server snapshot is false,
 * so server and first client render agree — no hydration mismatch.
 */
export function useReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
}
