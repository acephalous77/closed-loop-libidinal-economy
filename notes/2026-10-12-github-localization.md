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
- Flake recorded: the build fetches Google Fonts at build time, and a
  throttled runner fails it. Durable fix (candidate card, not done):
  vendor the remaining `next/font/google` faces as local woff2 to match
  the root fonts — kills the build-time external fetch.

## Open

- NEEDS ADNAN: approve (or edit) the release notes → publish; Zenodo
  GitHub toggle → release archives with a DOI → DOI lands in the
  citation unit + CITATION.cff.
- Then: Batch 2 (Playwright instruments → CI), Q3 design queue, Batch 3
  print spec.
