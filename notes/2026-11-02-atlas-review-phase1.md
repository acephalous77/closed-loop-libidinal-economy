# 2026-11-02 — atlas review phase 1

**Approval:** `ATLAS-REVIEW-2026-11-02: phase 1`; `cloudflare=disable`;
`date-range=1903-2026`; `mobile-alt=lists`; `source-policy=label-internal`;
`edge-confidence=label-only`; build + verify + mobile vision + production
network; stage atlas files only; commit and deploy.

**Status:** landed in `1feca94`; production recorded in `cf88c8a`. The atlas is
live. Phase 2 is deferred. One edge action remains: Cloudflare Web Analytics.

## What changed

- **Truth and counts.** 654 nodes, 1,139 relations, 1903–2026 across the page,
  data-facing JS, `lib/works.ts`, and `llms.txt`; floor/ceiling derived from
  the data in the timeline. The 1926 date and `~600` register are gone.
- **Evidence and sources.** `untriaged` is a first-class tier; the speculative
  label is `Speculative / not established`; the epistemic lens includes
  untriaged; edge marks are `C` contested / `S` speculative / blank not
  assessed; source notes carry internal / reference / unverified / source
  badges, and an empty source note says so. No mass source rewriting.
- **Mobile.** The dense SVGs are replaced at 390px by a 28-row domain
  directory, a 654-row decade list, a 62-row matrix table; the index becomes
  654 cards. Desktop SVG views remain.
- **Accessibility.** Dossier and path-reader focus management; rail
  `aria-expanded` and `inert`; palette grouping/focus; dialog roles and focus
  targets; mobile status line shortened; evidence key.
- **Contrast.** `--paper-4` lifted to `#8a887d`; 4.56:1 on `field-4`.
- **Assets and record.** `support.js`, `vendor/react*.js`, and the four JetBrains
  Mono files removed. Old atlas backup and design audit parked under
  `_attic/2026-11-02/` (gitignored). New 1200×630 OG card generated from the
  data.
- **CSP.** Scoped to `/psychopolitics-atlas/:path*`; scripts self-only, styles
  inline for data-driven marks, no remote fonts or connections.

## Verification on this Mac

- `npm run build` — 282 static pages, TypeScript clean.
- `npm run verify` — font-preload invariant; walkthrough clean; 249 same-origin
  links clean; 2 redirects followed; 404 clean; atlas consistency PASS
  (654/1,139/1903-2026/14 flagged edges); atlas contrast PASS (4.56:1).
- `npm run verify:atlas-mobile` — PASS at 390px: 654 cards, 28 domains, 654
  timeline rows, 62 matrix rows, evidence key, rail inert, no overflow, no
  external requests.
- Local vision, 390px: PASS on field, index, dossier, domains, timeline,
  matrix, paths. `PASS` here is the local engine's description check, not a
  human design ruling.
- `npm run verify:atlas-prod` — static route/CSP/counts/assets PASS; browser
  check FAILS on the Cloudflare beacon injection (see below).
- Production browser at 390 and 1440: 200; CSP present; 654/1,139 at 390 and
  14/1,139 assessed at 1440; zero horizontal overflow; the Cloudflare request is
  `requestfailed: csp`, with a CSP console violation.

## Open — Cloudflare

No Cloudflare API token, account id, or zone id is present in the shell. The
edge still injects
`https://static.cloudflareinsights.com/beacon.min.js/vce701…`; the CSP blocks
execution, but the console violation remains and the script is still attempted.
Adnan’s dashboard action is the clean fix: Cloudflare → Web Analytics →
`autostimulus.org` → disable. Until then, do not claim the beacon is disabled.

## Deferred to phase 2

Source hardening (A3), the 112-node triage (A4), edge corrections (A6), the
efficacy field (A7), fact checks (A8), and the static index (A9). No training,
no publication, nothing sends.
