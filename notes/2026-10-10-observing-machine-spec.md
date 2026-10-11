# 2026-10-10 — The Observing Machine: build spec (phase 1)

*World locked by his word (four-direction pitch, his lock: The Observing
Machine). Direction contract in `.impeccable/surfaces/app-page-tsx.md`.
Code-led. This spec is development-only; definitions below ARE user-facing
copy and were scanned (deai.py: 0 tells after two recasts — the offprint
lead's participial flourish and a privacy-boilerplate tricolon).*

## The instrument — the reader's apparatus

Five quantities, session-only, in-memory, zero storage, zero network. Each
readout's definition is exact to the code:

| readout | definition (shipped) | code semantics |
|---|---|---|
| session time | "seconds this tab has had the site open" | wall clock from provider mount; mm:ss |
| pauses | "gaps of four seconds or more with no scroll, touch, click, or key" | completed gaps ≥ 4000ms between activity events (pointerdown, keydown, wheel, scroll-passive, touchstart) |
| longest pause | "the run's longest such gap" | max of recorded pause durations |
| works entered | "arrivals at a work; returns count" | work = longest matching prefix of a work href; `/` is "the press"; `/reader` and `/thinkroom` excluded; client-side navigations only |
| the stable point | "the work this session arrived at most; ties go to the most recent" | mode of arrival counts; tie → most recent arrival |

Honesty note (panel + offprint): "The framework calls the foreclosed pause
chrono-debt (§1.4). This instrument can show your pauses; what a pause
would have cost cannot be measured from inside the loop."

**Known, stated limits:** the record lives in the tab's memory; closing,
reloading, or leaving for the static atlas ends it. The definitions and the
offprint say so.

## Files

- `components/reader-apparatus/engine.ts` — singleton store (subscribe /
  emit; pure data; no storage, no network).
- `components/reader-apparatus/ApparatusProvider.tsx` — client; mounts the
  listeners once + usePathname arrivals; renders null.
- `components/reader-apparatus/ApparatusInstrument.tsx` — the corner line
  (collapsed) + register-plate panel (expanded): numbered readouts with
  definitions, honesty note, "file the offprint" → `/reader`. A11y: button
  with aria-expanded/aria-controls; Escape closes; numbers aria-hidden, a
  readable summary in the panel; print-hide.
- `app/reader/page.tsx` + `Offprint.tsx` — the offprint: heading sequence,
  the five readouts, the reading-path diagram (seven work marks + the press,
  polyline through arrivals), print button, honesty footnote; empty state:
  "no session on file — the apparatus records only while a tab is open."
  robots noindex; excluded from the path.
- `app/layout.tsx` — provider + instrument mounted at root.
- `content/instrumentation.mdx` — the new section (GATED on his word).

## Disclosure addition (gated — his published promise)

> One instrument is new, and it reads the session — the reader's apparatus,
> the small line in the lower corner of every page. It counts, in the page's
> memory only: the time your tab has had this site open, your pauses of four
> seconds or more, the works you entered, and the one you returned to most.
> Nothing is stored on your machine and nothing is sent anywhere; closing or
> reloading the tab ends the record. The panel names what each number
> measures, and the offprint at /reader shows you the session and lets you
> print it. The site can be what it describes: a loop made legible to the
> person inside it.

## Verification (phase 1)

- Privacy grep: `localStorage|sessionStorage|document.cookie|fetch(|
  sendBeacon|XMLHttpRequest` across the layer → zero hits.
- `npm run build` (277 routes with /reader); lint; detector on `/`,
  `/reader`, one work; geometry 390/1280 (instrument must not overflow or
  occlude the door/footer controls).
- Definitions ↔ code audit, line by line (the table above is the contract).
- Reduced context: the instrument adds no motion beyond a panel toggle;
  nothing to guard (checked).

## Phases

2 — the shelf lights visited works; the flagship (closed-loop) gains a
"your trajectory" read on the dynamics index (session marks only).
3 — per-work register tinting of the instrument and an atlas bridge if the
static page can carry a no-storage variant.

## Phase 1 — built and verified (2026-10-10 evening)

His word: disclosure approved ("Approved — build it"). Built: the engine
(`components/reader-apparatus/engine.ts` — one in-memory store, wall clock,
4s pause gaps, prefix-resolved arrivals, stable point with the recent-tie
rule), the provider (listeners once + one arrival per pathname), the corner
instrument (collapsed line → register-plate panel, five definitions, honesty
note, offprint link; Escape closes; print-hide), and the offprint at
`/reader` (path diagram over the eight marks, readout ledger, arrivals list,
no-session stamp, print button; robots noindex, out of the sitemap).

**Evidence.**
- Privacy audit: zero hits for localStorage / sessionStorage / document.cookie
  / fetch( / sendBeacon / XMLHttpRequest across the layer; no outbound URLs.
- Build 277/277 (the /reader route), tsc clean; lint clean on touched files.
- Headless-browser run of the machine: instrument live on `/` ("0:00 · 0
  pauses · 1 work" — the press) and on a work route ("1 work"); panel shows
  all five definitions, the chrono-debt honesty note, and the offprint link;
  `/reader` renders h1, the no-session state on a fresh tab, the five
  readouts, and the print button.
- Detector: `/reader` 1 finding (the authored cream keeper); `/` 13 and
  `/closed-loop` 3 unchanged.
- Disclosure live on `/closed-loop/instrumentation`.

**Honest limits.** Client-side-navigation counting is wired through
`usePathname` (the same pattern as the site footer); the virtual-time
harness cannot exercise synthetic-link navigation, so a 30-second manual
click-through (flyer → a work → the offprint, watch "works entered" rise)
is the final acceptance step at his walk-through. The record dies on
reload, a new tab, or leaving for the static atlas by design; the panel and
the disclosure say so.

## Phase 2 — built and verified (2026-10-10, late)

His word: "proceed with phase 2". Built:
- The engine keeps a route log (`routes`, capped 64, exclusions honored —
  same posture: memory only). The trajectory surfaces read it.
- The shelf (WorksDoor) lights each work the session arrived at:
  "arrived ×N" in oxblood, right-aligned; absent on a fresh work.
- `TrajectoryGrid` — the dynamics index's twelve cards became a client
  read of the session: a line above ("plates operated this session: N of
  12 — this tab only"), and operated plates lit (number, glyph, card
  border in oxblood). Same session record, shown finer.

**Evidence.**
- tsc clean; build 276/276; detector on the index 4 findings, unchanged
  set (line-length, em-dash, cream, monotonous-spacing — all keepers).
- Headless-browser run: on /closed-loop a fresh tab records one arrival
  and the shelf shows "arrived ×1" on the closed-loop row (7 rows, door
  opens, instrument consistent at "1 work"); the index serves the
  trajectory line and all twelve cards with correct links.
- New copy scanned: 0 tells ("plates operated this session…", "arrived ×N").

**Known limit (unchanged):** client-side-nav accumulation is exercised by
the usePathname pattern the shelf tag already proved end-to-end; synthetic
navigation remains outside the virtual-time harness, so the walk-through
checklist stands: flyer → work → work → offprint, watch works/plates/stars
rise.

## Phase 3 — built and verified (2026-10-10, night)

His word: "proceed". Built:
- The instrument wears the register of the room it stands in —
  `registerFor(pathname)` resolves the work's own cover tokens (the same
  ground/ink/accent as its press sheet); the press, /reader and /thinkroom
  keep the house tokens. Borders and row rules derive from the accent via
  color-mix; the stable point and the offprint link carry the accent.
- The atlas bridge, no-storage variant: the static psychopolitics page
  carries one line in its own footer — "the reader's apparatus stays
  behind — this page keeps no session" — so the session's death at the
  static boundary is stated where it happens, not discovered later.

**Evidence.**
- Computed colors, headless-browser run: /chair instrument rgb(236,225,205)
  with brick link rgb(140,74,50); /manufacture rgb(21,20,18) with arterial
  rgb(255,46,0); /closed-loop and v2-dynamics house paper rgb(244,237,224)
  with oxblood rgb(122,31,31).
- tsc clean; build 276/276; detector: chair 20, manufacture 24, / 13 — all
  unchanged sets, no new flags from the tint.
- Atlas note renders live; copy scanned clean.

**Standing:** the machine is complete across its three phases. The
walk-through checklist remains the acceptance: flyer → work → work → plate
→ index → shelf → offprint — watch the counters, the lit shelf, the lit
plates, and the register shifting under the instrument as you cross into
each room.
