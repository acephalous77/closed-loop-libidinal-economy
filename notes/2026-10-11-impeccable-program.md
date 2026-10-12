# 2026-10-11 — the Impeccable program: Phase 0–1 + Q1–Q2

## Phase 0 (setup debt, discharged)

- `impeccable context` run; PRODUCT.md written (dual audience; both doors;
  the four binding constraints: no third-party, no tracking, self-hosted,
  the voice gate) — ratified via one interview round.
- `.impeccable/config.json` buildPath normalized to `code` (schema value;
  image generation confirmed unavailable — no key, converters only).
- `craft-floor.md` loaded; its bans became Q2 work orders.

## Phase 1 (baseline, measured)

- Detector: 40 templates. Near-clean: closed-loop tree 0–4 (em-dash
  keepers), ouroboric 0, /reader 0, thinkroom 0, 404 0, ohcose 0–3,
  patriotic 1–4, console 3 authored. Targets: atlas 60 (tiny-text ×55),
  chair/zine 51 (triage), manufacture 23, chair 19, chair/essay 16.
- Geometry: no overflow, 20 templates × 390/1440. Console: clean on the
  four heaviest interactive pages.
- **critique v2, dual-agent: 29/32** (from 25/32) — trend line begun;
  snapshot persisted. Ranked queue produced.

## Q1 — the machine-fix batch (a590835)

Press wears the console register (graphite chip on `/`); `worksEntered`
counts the seven only ("0 works" on first contact); the instrument flips
corner on ouroboric (its instruction line freed); OHCOSE's layout exit and
the atlas footer gain the door; the cover carries "v2 · 2026"; the
statement rises to Garamond 17px. All browser-verified.

## Q2 — the chair tree + craft-floor items

**Real fixes (measured):**
- ARCHIVE tokens raised to AA on #e7e0d0: inkMute #6e7280 → #5f626e
  (4.62:1), inkFaint #a8acb8 → #5e6067 (4.77:1) — the 1.7:1 folio ghost
  is gone.
- Measures capped: essay prose 30rem (was ~90–124ch lines), #routes block
  30rem, brochure head paragraphs 600px, colophon 500px.
- Eyebrow/kicker moves per the craft-floor ban: chair hero label, archive
  index "Dossier 2197", archive slug doc-code (all moved under their
  headings); patriotic plates header (redundant prefix dropped) and the
  three decade kickers moved under the h2s; the archive back-link
  de-chipped (nav styling, not tracked caps).
- House scrollbars themed from the palette (register-tinted via the
  tokens); craft floor's "parts you did not draw" check now green.

**Scores after:** chair/essay **16→5**, chair/archive/[slug] **10→3**,
chair/archive **6→2**, /chair **19→16**, /chair/colophon **9→8**,
patriotic plates **4→0**. Remainders are documented keepers: warm-tinted
secondary text (the detector's hue-blind gray heuristic), the seven-subsystem
numbered labels (sequence carries information), 11px instrument-density
labels, tracked meta.

**One process scar, kept visible:** the #routes cap initially left a
dangling comma (build failed, one repair pass) — the batch's only
regression, fixed the same run.

## Open (Q3+)

manufacture low-contrast ×7 + line-length; psychopolitics tiny-text ×55
(top interior job); chair/zine triage (overflow ×19 vs authored
keepers); the keepers registry into DESIGN.md; then the per-command
phases (typeset → animate → delight → harden → onboard → optimize).

## Q3 — the triage pass (9776f2a, 2026-10-12)

Worked down with the detector as the instrument; every fix verified against
a fresh build and serve; keepers registered in DESIGN.md.

- **manufacture 26→14.** The interlude red panels lose their opacity (ink
  on arterial red, 5.32:1); `.red` flips to the bright register for the
  dark root, `.paper` guards keep 5.29:1 on paper; opener sub/op on paper
  deepened (#6b665e / #c21e00); the five inline `#777` sources in
  Experience.tsx deepened; prose measure 64ch→52ch (Newsreader's zero is
  wide — 64ch rendered 94–129 "chars"); `prefers-reduced-motion` honored
  in CSS (the drift band stops, reveals go still). Remainder: 3
  line-lengths = detector overcount (52ch ≈ 62 real chars, live-verified)
  + 11 registered keepers.
- **psychopolitics-atlas 60→1.** Node-label floor 11→12 (the adaptive
  formula 12+sz·16 keeps zoom growth; rail sections 12; sources 12.5;
  legend 12); viewnote 540→380px; intro paragraph capped; the "How to
  read" chip moved under its h2 (craft floor); the reader's-apparatus
  line 3.2→5.6:1. Survivor: content-hidden-at-rest — the atlas's staged
  interaction model (collision-hidden labels, closed drawers), registered.
- **chair/zine 51→48.** `STAMP_RED_TEXT` #b8321f for small red on paper
  stock (≈5:1) while receipt/panel reds stay bright on dark — one revert
  along the way ("RETURNS THIS CYCLE" sits on a dark panel; the first pass
  darkened it and the detector caught the 3.1:1 flip); transcript measure
  62ch. The 48 are registered keepers: authored overlap geometry, xerox
  caps, torn edges, the Photocopied ghost, marker leading.
- **Totals** (fresh build, served): manufacture 14 · zine 48 · atlas 1.
  Font-preload invariant holds; walkthrough clean (30 pairs + 404). The
  session's model cannot view images — the refreshed walkthrough
  screenshots sit in `_artifacts/` for Adnan's eye.
- The Q3 queue above is discharged; next are the per-command phases
  (typeset → animate → delight → harden → onboard → optimize).

## Typeset — the Floor Rule at depth (2026-10-12)

The file-scope type scan (`detect --scope type app/`, 795 advisories) read
against the site: mostly register-space ramp noise, but it surfaced the real
drift — the Floor Rule violation mass on ohcose's chapter interiors, which no
URL scan had ever covered.

- **90 sub-floor sites fixed.** ohcose's micro-labels ran 0.5–0.6rem
  (8–9.6px) across ~80 sites — form labels, readouts, subject rows, stamps —
  swept to 0.7rem, the floor (the Floor Rule's own text predicted exactly
  this: "the house's micro-labels are the place this drifts"). Strays raised:
  the ohcose stamp class (0.65rem), chair's mobile plate-foot (9px→0.7rem),
  the chair brochure hint (10px→0.7rem), the console table headers
  (0.68→0.7rem), CohortGradient's chart labels (10→11px), LoopDiagram's edge
  numbers (9→11px), the zine's redaction stamp (8→11px).
- **47 chapters' prev/next nav** (`justify-between`, no wrap) overflowed at
  390px on long titles — pre-existing (0.9rem + 0.2em tracking), exposed by a
  new chapter-interior probe; all wrapped. 46 chapters × 2 viewports clean.
- **The system statement updated** in DESIGN.md: Hierarchy gained the Meta
  tier (0.7–1.08rem), Title extended to 1.85rem, display clamps documented
  2–4.7rem with poster registers to 11.25rem, and the px hardware tiers
  declared. The checker's ramp parse honors only the shell's legacy five
  values — the residual ≈789 advisories are registered as register space.
- Verified: build 278 pages, font-preload invariant holds, walkthrough
  clean, chapter overflow sweep clean.

## Animate — the motion language, audited (2026-10-12)

Motion inventory across 30+ files against the playbook's tests. The thesis
already existed and holds: the machine's cadence is the focal moment, the
draws/drifts/marquees are its supporting states, and the eight v2 sim
plates are user-started (`running=false` default) — motion on request, not
autoplay choreography.

- **Reduced-motion gaps closed.** chair's FittingNotification (slide,
  pulse, shake) and the zine's two inline loops (`zine-blink`, the 90s
  `ols-marquee`) had no guard — both now carry one (`.fitting-notification`
  animations off, the marquee pauses, the descend prompt holds steady).
  Verified live with Playwright: no-preference → `zine-blink`/`running`;
  reduce → `none`/`paused`. CursorTrail already skipped under reduce
  (spawn gate); ouroboric's atlas guard and manufacture's CSS guard were
  already in place.
- **Hidden-tab loop gate.** The eight v2 interval sims stepped state at
  33 ms even in a hidden tab (browsers throttle timers, never stop them).
  New `components/closed-loop-v2/useAnimating.ts`: playing ∧ visible; each
  sim's effect now gates and dep-keys on it. rAF diagrams pause themselves
  when hidden, so they need no gate.
- Verified: build green, font-preload invariant holds, walkthrough clean.

## Delight — the authored moments, verified (2026-10-12)

Delight here is character, not confetti. The playbook's audit ran against the
site's real emotional moments; they are already authored, and one flat string
was upgraded rather than adding manufactured celebration:

- The 404 is its own object — xerox-zine register, cut-up headline, stamped
  routes back, `steps()` hover, themed focus. Its meta description was the one
  flat string in the composition; it now matches the on-page line ("…or has
  not been written yet.").
- The errata register carries honest empty and unreachable states.
- The machine is the site's discovery surface: `noteArrival` logs even wrong
  turns (no unknown-route filter, engine.ts), and closed-loop v2's
  TrajectoryGrid consumes the log with an off-book filter — a 404 path can't
  corrupt the plates grid (read at TrajectoryGrid.tsx:30).
- The sim plates give feedback as motion — opt-in, visibility-gated,
  reduced-motion safe after the animate pass.
- Considered and rejected: echoing the requested path on the 404, extra
  celebration on gate actions. Costume, not character.

Remaining in the program: **harden → onboard → optimize**, then the ruled
Batch 3 print spec (the closed-loop book, Paged.js — his ruling of 2026-10-12;
see the github-localization note) — resume from this note;
typeset/animate/delight are landed (94d3b3b/62a6d90 · f82c7f6/0b718b9 ·
a393727), CI green on each.
