# 2026-10-12 — GitHub localization: the repo opens, Batch 1 lands

## The flip (step 0)

- Repo was private; the colophon's Source line pointed at a 404. Audit
  finding accepted; Adnan ruled public (2026-10-12).
- Full-history secret scan (gitleaks, 287 commits): one finding, false
  positive — `ouroboric-atlas-v5`, a localStorage key name in
  AUDIT-2026-10-10.md, tripping the entropy heuristic. No `.env`, no
  keys, no credential files in history.
- LICENSE.md added: prose CC BY-SA 4.0, code MIT (4d18147). Flip via
  `gh repo edit --visibility public`; unauthenticated API verified 200.

## Batch 1 (12a581b) — what landed

- `.github/workflows/verify.yml` — lint + build + font-preload invariant
  on every push and PR. The manual session checks, made a standing gate.
- `scripts/verify/font-preloads.mjs` — boots `next start` on 3777 and
  pins ten routes' preload counts (recorded against the fresh build).
- `app/closed-loop/errata` — build-time fetch (`revalidate: false`) of
  `issues?labels=errata`; ships static; empty and unreachable states
  stated honestly (a failed read never masquerades as "nothing on file").
- `.github/ISSUE_TEMPLATE/errata.yml` + `config.yml` (blank issues off);
  `errata` label created (color 174a77).
- BUILD_SHA (VERCEL_GIT_COMMIT_SHA or git) → citation tail
  `build <sha> · errata →`; footer errata link; sitemap route.
- `CITATION.cff` v2.0.0 (CC-BY-SA-4.0, repo + site URLs).

## Verification (this machine)

- lint: 0 errors (warnings only, in vendored gitignored skill files).
- build: green; `/closed-loop/errata` baked static, serves "Nothing is
  on file."; citation carries `build 4d18147` (pre-batch commit — Vercel
  stamps the deployed sha).
- font-preload invariant: holds, 10/10 routes measured against the
  fresh build.
- detector: `/closed-loop/errata` 0 flags; harness validated against
  `/manufacture-of-the-subject` (23, matching the Q3 queue record).
- de-AI scan: errata copy, templates, CFF, release notes — clean; one
  comment-level not-X-but-Y found in the page docstring and fixed
  before commit.

## Known divergence (recorded, not fixed)

- `/psychopolitics-atlas` (bare path) resolves on Vercel but 404s under
  `next start`; the invariant script pins
  `/psychopolitics-atlas/index.html` (0 preloads — standalone static
  page, no Next preloads). If local/prod parity is wanted, that is one
  rewrite in next.config — his call, not done here.

## Release + CI

- Tag `closed-loop-v2.0` pushed; Release created as **draft**, awaiting
  Adnan's one-line approval (Zenodo toggle pending on his account; DOI
  line added to citation + CFF after).
- Live deploy (Vercel, 12a581b): `/closed-loop/errata` 200 with
  "Nothing is on file."; citation carries `build 12a581b`; footer errata
  link present. The mechanism works in production exactly as designed.
- CI: first run (38250726646) cancelled — the font script hung on its
  `npx` wrapper (fixed in 70b1fff: spawn next directly, awaited
  shutdown, explicit exit). Second run (38251997500): attempt 1 failed
  at the Build step on a transient Google Fonts fetch (all 12 `next/font`
  modules at once; run 1's build was green minutes earlier on the same
  tree); rerun attempt 2: **green** — Install, Lint, Build, invariant.
- Flake recorded: the build fetched Google Fonts at build time, and a
  throttled runner failed it. Durable fix landed the same day — see
  Batch 2 below.

## Batch 2 (515d2d9 · c1894b9 · 1f4fccc) — the flake class killed, the walkthrough lands

- **Fonts vendored** into `app/_fonts` (26 files): the build no longer
  fetches Google Fonts, so that CI flake class is gone. Variable families
  dedupe to one file per style with weight ranges; the 10-route preload
  invariant held unchanged across the swap.
- **Diacritic finding, same afternoon**: every Google face missed
  ć č š ž đ (the `latin` subset — pre-existing; the vendoring preserved it
  faithfully, which is how it surfaced). Fixed mechanically: static faces
  merged latin+latin-ext via fontTools; variable faces re-subset from the
  full google/fonts VF with `opsz` pinned at the API's own defaults
  (Source Serif 4 → 20, Newsreader → 18) — parity with the wght-only files
  the API had served. All 26 files verified: A–Z, é, ć č š ž đ, em-dash,
  curly quotes, weight axes intact. Sizes accepted: SS4/Newsreader ~80–89K
  vs the API's ~50–64K (API strips more tables; features kept as `*`).
- **The walkthrough** (`scripts/verify/walkthrough.mjs`, Playwright):
  15 routes × 390/1440 — horizontal-overflow and pageerror gates, console
  errors reported (first runs: zero anywhere, local and CI), screenshots
  to `_artifacts/` (gitignored), 404 surface asserted. Known-authored
  bleed would live in `walkthrough-baseline.json` (empty so far).
  `_server.mjs` is shared with the font script; `npm run verify` runs the
  pair. The ad-hoc iframe harness retires.
- First local runs: 30 pairs + 404 — clean. CI: the walkthrough job green
  on the runner.
- Two transient `git push` "remote rejected (failure)" events resolved on
  a bare retry (GitHub-side, ~13:00 and ~13:31) — recorded, not a repo
  problem.

## Deploy incident (2026-10-12, afternoon)

Vercel failure emails traced to a **major platform incident**, not this
repo: "Increased build and deployment failures" (started 13:35Z, status
identified at last check), caused by an upstream GitHub incident
(githubstatus.com/incidents/93njd414rpbx) — GitHub-connected projects'
builds and deployments failed or failed to start.

Evidence this was platform-side: failures hit trivial commits (4d18147
LICENSE-only, 878c0f2 notes-only) and interleaved with successes on
near-identical trees; local builds and GitHub CI were green on every one
of those commits; the deployment queue ran ~50 min behind and the six
newest commits (94d3b3b…d02570d, the typeset/animate/delight batch) had
no deployments created at all. Production itself never went down
(autostimulus.org → www 307 → 200; errata rendering correctly).

Action: none in-repo; after Vercel resolves, confirm the queue drains to
d02570d (redeploy from the dashboard if a build was skipped).

**Resolved the same afternoon.** The queue drained on its own: 0b718b9
and a393727 deployed green (17:16Z, 17:23Z), and the live site's build
stamp read **71bf490** — the latest commit, notes included. Production
carries the full Q3 + typeset + animate + delight batch. No redeploy
needed; the failure emails correspond to the incident window only.

## Rulings of 2026-10-12 (his word) — release · DOI · print spec

> release notes approved. add the site and errata links to the body, then
> publish it — after the zenodo toggle is on.
> zenodo toggle is on. wire the doi into the citation unit and CITATION.cff
> when it lands, and add it to the release body.
> print spec: the closed-loop book carries it first — paged.js, done
> properly. the zine can follow later.

- Release body edited (site + errata links added) — draft still **held at the
  publish step**.
- **The toggle has not registered**: the repo's webhook list is empty (checked
  with admin auth) and Zenodo's API holds no record for the repo. Zenodo's own
  docs require profile → GitHub → **Sync now** before a newly created repo
  appears in the list to toggle; this repo dates from 2026-10-11. Fix:
  sync, then flip the repo's slider on. Publish and DOI wiring fire the moment
  the webhook exists.
- Print spec ruled: the closed-loop book, Paged.js — queued as the next build
  after the current command phases.

## Open

- Zenodo re-toggle (Sync now → flip slider) → then the publish + DOI sequence
  runs as ruled: publish release → wait for archive → wire the DOI into the
  citation unit, CITATION.cff, and the release body.
- Batch 3 print spec: authorized, starts after harden → onboard → optimize.
