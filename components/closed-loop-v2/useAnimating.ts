"use client";

import { useEffect, useState } from "react";

/**
 * True while a simulation is playing AND the tab is visible. The interval
 * sims step state on a timer; browsers throttle timers in hidden tabs but
 * never stop them, so a viewer who tabs away leaves the simulation burning
 * CPU in the background. rAF-driven diagrams pause themselves when hidden.
 */
export function useAnimating(playing: boolean): boolean {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const onVis = () => setVisible(!document.hidden);
    onVis();
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);
  return playing && visible;
}
