import { WORKS } from "@/lib/works";

/**
 * The reader's apparatus — the engine.
 *
 * One session, measured in memory and nowhere else: no storage, no
 * cookie, no network, no identifiers. The tab's memory dies with the
 * tab. Every quantity the instrument shows is produced here and its
 * shipped definition (instrument panel, /reader) must match this file
 * exactly:
 *
 *   session time  — wall clock since the provider mounted
 *   pauses        — completed gaps >= 4000 ms between activity events
 *                   (pointerdown, keydown, wheel, scroll, touchstart)
 *   longest pause — the longest such gap
 *   works         — arrivals at a work (longest matching href prefix);
 *                   "/" is "the press"; /reader and /thinkroom excluded
 *   the stable point — the work arrived at most; ties go to the most recent
 *
 * The record survives client-side navigation only; a reload, a tab
 * close, or leaving for a static page (the atlas) ends it.
 */

export interface Arrival {
  key: string;
  label: string;
  mark: string;
  t: number;
}

export interface ApparatusSnapshot {
  started: boolean;
  startedAt: number;
  pauses: number;
  longestPauseMs: number;
  arrivals: Arrival[];
  /** Every route entered this session (capped) — the trajectory
   *  surfaces (the dynamics grid, the shelf) read it. Same posture:
   *  in memory only, excluded routes never logged. */
  routes: string[];
}

const PAUSE_MS = 4000;
const EXCLUDED = ["/reader", "/thinkroom"];

export interface RegisterTokens {
  bg: string;
  ink: string;
  accent: string;
}

interface WorkRef {
  key: string;
  label: string;
  mark: string;
  prefix: string;
  reg: RegisterTokens;
}

/** The press + the seven works, longest prefix first. */
const HOUSE: RegisterTokens = { bg: "#f4ede0", ink: "#2b2520", accent: "#7a1f1f" };

const REFS: WorkRef[] = [
  ...WORKS.map((w) => ({
    key: w.href,
    label: w.title,
    mark: w.mark,
    prefix: w.href.replace(/\/index\.html$/, ""),
    reg: w.cover,
  })),
  { key: "/", label: "the press", mark: "◈", prefix: "/", reg: HOUSE },
].sort((a, b) => b.prefix.length - a.prefix.length);

/** The register the instrument wears on this route: the work's own
 *  cover tokens, or the house's for the press, /reader and /thinkroom. */
export function registerFor(pathname: string): RegisterTokens {
  const ref = resolveWork(pathname);
  return ref ? ref.reg : HOUSE;
}

function resolveWork(pathname: string): WorkRef | null {
  for (const x of EXCLUDED) {
    if (pathname === x || pathname.startsWith(x + "/")) return null;
  }
  for (const ref of REFS) {
    if (ref.prefix === "/" ? pathname === "/" : pathname === ref.prefix || pathname.startsWith(ref.prefix + "/")) {
      return ref;
    }
  }
  return null;
}

let snapshot: ApparatusSnapshot = Object.freeze({
  started: false,
  startedAt: 0,
  pauses: 0,
  longestPauseMs: 0,
  arrivals: [],
  routes: [],
});

let lastActivity = 0;
let lastPath: string | null = null;
let mounted = 0;
const subs = new Set<() => void>();

function commit(patch: Partial<ApparatusSnapshot>) {
  snapshot = Object.freeze({ ...snapshot, ...patch });
  subs.forEach((f) => f());
}

const ACTIVITY_EVENTS: (keyof WindowEventMap)[] = [
  "pointerdown",
  "keydown",
  "wheel",
  "scroll",
  "touchstart",
];

function onActivity() {
  const now = Date.now();
  if (lastActivity > 0) {
    const gap = now - lastActivity;
    if (gap >= PAUSE_MS) {
      commit({
        pauses: snapshot.pauses + 1,
        longestPauseMs: Math.max(snapshot.longestPauseMs, gap),
      });
    }
  }
  lastActivity = now;
}

export const apparatus = {
  subscribe(f: () => void): () => void {
    subs.add(f);
    return () => {
      subs.delete(f);
    };
  },

  getSnapshot(): ApparatusSnapshot {
    return snapshot;
  },

  mount() {
    if (typeof window === "undefined") return;
    mounted += 1;
    if (mounted > 1) return;
    if (!snapshot.started) {
      const now = Date.now();
      lastActivity = now;
      commit({ started: true, startedAt: now });
    }
    for (const e of ACTIVITY_EVENTS) {
      window.addEventListener(e, onActivity, { passive: true });
    }
  },

  unmount() {
    if (typeof window === "undefined") return;
    mounted = Math.max(0, mounted - 1);
    if (mounted > 0) return;
    for (const e of ACTIVITY_EVENTS) {
      window.removeEventListener(e, onActivity);
    }
  },

  noteArrival(pathname: string) {
    if (pathname === lastPath) return;
    lastPath = pathname;
    for (const x of EXCLUDED) {
      if (pathname === x || pathname.startsWith(x + "/")) return;
    }
    const ref = resolveWork(pathname);
    const patch: Partial<ApparatusSnapshot> = {
      routes: [...snapshot.routes, pathname].slice(-64),
    };
    if (ref) {
      patch.arrivals = [
        ...snapshot.arrivals,
        { key: ref.key, label: ref.label, mark: ref.mark, t: Date.now() },
      ];
    }
    commit(patch);
  },

  worksEntered(): number {
    return new Set(snapshot.arrivals.map((a) => a.key)).size;
  },

  stablePoint(): { label: string; mark: string; count: number } | null {
    const counts = new Map<string, { label: string; mark: string; count: number; last: number }>();
    for (const a of snapshot.arrivals) {
      const cur = counts.get(a.key);
      if (cur) {
        cur.count += 1;
        cur.last = a.t;
      } else {
        counts.set(a.key, { label: a.label, mark: a.mark, count: 1, last: a.t });
      }
    }
    let best: { label: string; mark: string; count: number; last: number } | null = null;
    for (const v of counts.values()) {
      if (!best || v.count > best.count || (v.count === best.count && v.last > best.last)) {
        best = v;
      }
    }
    return best ? { label: best.label, mark: best.mark, count: best.count } : null;
  },
};
