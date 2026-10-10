# 2026-10-10 — his word: "de-ai the texts that go on the site and then the rest is approved"

## The de-AI batch (ruled step, run first)

Every site-bound text from the critique queue in one scan
(`deai.py --style-scan`, the canonical runner): the atelier statement, seven
flyer plain lines, the chair failure stamp, and the live copy from the P1b
build (CitationBlock, ArchiveStamp, compact cover line, math/first-version
stamps, v2 kicker, first-version section).

- First pass: **1 reliable tell, 1 cadence flag** — both in the live
  ArchiveStamp line: participial flourish ("The first dynamics, kept on
  file.") + flat close. Recast to a full-sentence pair: "The current
  framework is v2: … This page stays as the 2026 archive." (kind prop
  dropped with it).
- Second pass: **0 tells, 0 cadence flags — clean.**

## The approved rest (built the same hour)

- **P1a — the atelier statement** mounts on `/` under the masthead (flyer
  register, mono, "read sideways" in the stamp red).
- **P2b — flyer plain lines**: `lib/works.ts` now carries the shelf (one
  record per work incl. `plain`), shared by the flyer and the door so they
  cannot drift; the flyer renders the plain line under every ident, base and
  ink-press copy.
- **P2a — the atelier door** (`components/navigation/WorksDoor.tsx`): one
  shape at every work's exit — "↑ autostimulus · the seven works". The door
  inherits each register's typography; the shelf overlay owns the shell
  palette (paper/ink/mono, Escape + scrim + focus return, role=dialog).
  Mounted at the six work-level exits: chair layout (was "↑ part of
  autostimulus.org"), patriotic layout, manufacture Experience, OHCOSE
  colophon, closed-loop SiteFooter, ouroboric Atlas (was "↑ AUTOSTIMULUS").
  Deep in-work crumbs keep the plain "↑ autostimulus" — the labels are now
  one string everywhere.
- **P3 — the chair's dead CTAs are authored** (`FailureButton.tsx`): "Fit me
  →", the three "Schedule a fitting", "Begin onboarding →" now answer with
  the stamped line "Request not filed — pilot cohort closed"
  (role=status; register-plate silhouette; adaptive ink per card).

## Verification

- `npx tsc --noEmit` clean; `npm run build` ✓ 276/276, exit 0.
- `npm run lint` exit 0.
- Server checks: statement + plain lines on `/`; "the seven works" present on
  chair, closed-loop, OHCOSE colophon, manufacture, patriotic, v2-argument,
  and in ouroboric's JS bundle (its chrome is client-rendered); chair renders
  3 failure buttons + the section label.
- Detector: flyer 13 findings (was 14), chair 20 — no new flags.
- **Correction, dated:** the Turbopack next/font flake is intermittent, not
  merely stale-cache: it recurred three times today; `rm -rf .next` + retry
  cleared it twice, and once the wipe alone failed and a second retry passed.
  The citation-surface note's "rm -rf .next fixes it" was true-but-incomplete.
