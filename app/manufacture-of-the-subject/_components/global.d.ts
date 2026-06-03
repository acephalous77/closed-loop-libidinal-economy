// Shared mutable surface the piece writes its live session stats onto, read by
// the Receipt and the Heartbeat. Self-contained to this route.
export {};

declare global {
  interface Window {
    __pss?: {
      events: number;
      depth: number;
      taps: number;
      dwells: number;
      dist: number;
      secs: number;
      paused: boolean;
    };
  }
}
