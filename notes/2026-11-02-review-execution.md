# 2026-11-02 — review execution

**Approval:** `APPROVE REVIEW-2026-11-02` (all lines).
**Status:** applied except the atlas files claimed by the live parallel session
noted below. No publication, no send.

## Applied

- **D1 — Dividual record.** `RETIRED-2026-11-03.md` now names
  `https://www.autostimulus.org/author`, commit `7f8763d`, GitHub Actions
  `41472950886`, and the live production redirect. The false “Not done” block
  is replaced by a deployment record.
- **D2a/D2b — Dividual archive cleanup.** Removed the old commercial/homepage
  component cluster (`About`, `Button`, `CloseSection`, `DemoCTA`,
  `DiagnosticLight`, `Gains`, `Hero`, `HeroArtifact`, `HowItWorks`, `Naming`,
  `ProofTeaser`, `ResultRows`, `SpecBlock`, `Subscribe`, `TimelineStrip`,
  `TodoChip`, `Work`, `WriteInstead`, `WritingTeaser`). Removed the config
  fields only that cluster read, the unused `copy` collection and
  `content/copy/home.yaml`, and the unused OG cards. `package.json` now
  describes an archive.
- **D3 — Dividual artifacts.** Moved `DESIGN-AUDIT-2026-10-31.md`,
  `public/og-validation.png`, and `scripts/og-validation.svg` to
  `_attic/2026-11-02/`; `_attic/` is ignored.
- **S2 — ORCID.** Added `https://orcid.org/0000-0003-0193-5214` to
  `AUTHOR_SAME_AS` and the author-page `Person` JSON-LD, with a visible ORCID
  link in the citation record. Scholar remains held until its affiliation and
  Brill entry are corrected; Semantic Scholar remains excluded.
- **F12 — chair sparkle.** Replaced the sparkle area in
  `public/chair/ils/render-ring.webp` with a same-height clean strip from the
  left and a feathered blend; the original render is preserved at
  `_attic/2026-11-02/render-ring-original.webp`. Local vision returns no
  sparkle and no obvious patch/duplication at full size.
- **F15 — chair lifecycle prose.** Re-measured against source: the six OHCOSE
  card bodies were 17px, not the audit’s 13px; the 13.5px text is the wheel’s
  analytical note. Raised the card body to 18px/1.55. The 12.5px card meta uses
  `#68686f` on white (5.5:1), above the floor. No 3-column rewrite was applied.
- **Q1/Q2/Q4/Q5/Q7/Q8/Q9.** Recorded: keep `arrived ×N`; keep sheets
  decorative; atlas radii are sanctioned and the rebuilt atlas uses the press
  serif; close F17 as superseded; keep the chair’s “Fit me →” capture; record
  brochure v 4.2 versus drawing rev 4.1 in the chair colophon; keep the 1s/15s
  apparatus cadence.
- **A5 — audit.** Moved `AUDIT-2026-10-31-design.md` to
  `_attic/2026-11-02/design-audit-2026-10-31.md`.
- **A6 — QA note.** Added the dated shipping correction to
  `notes/2026-11-02-atlas-mobile-qa.md`. The deploy-note correction is present
  in the worktree but that file is claimed by the live atlas session.

## Held by the live atlas session

`ATLAS-REVIEW-2026-11-02 phase 1` holds `lib/works.ts`, `public/llms.txt`,
`next.config.ts`, `public/psychopolitics-atlas/`, `scripts/verify/`, and the
atlas notes. Its worktree changes include the 1903–2026 range, the bare atlas
path, source-note/evidence tiers, mobile index/alt views, a scoped CSP, and a
new atlas OG script. This pass did not commit those files and restored the
legacy atlas assets it had removed, so the live pass can finish in place.

The earlier A1/A2/A3 changes are therefore superseded by that live pass’s
1903/bare-path/source-note work; do not reapply the 1926/`.html` versions.

## Verification

- Autostimulus: `npm run build` — 282 static pages, TypeScript clean.
- Dividual: `npm run verify` — Astro check 0 errors, 12 pages, schema 44 nodes,
  no problems.
- H1 pilot: `deai.py --style-scan` — 1,502 words, 0 reliable tells.
- F12: local vision at full size — no sparkle, no obvious patch.
- Atlas: not re-verified here; the live atlas pass owns those changes.

## Remaining

- Let the live atlas session finish and commit its claimed files.
- Deploy/push the non-atlas autostimulus changes and the Dividual cleanup.
- H1/H2 drafts are in
  `/Users/thenetos/Projects/gamification-paper/submission/` as separate pilot
  files; no manuscript edit, no gate.
- Search Console remains blocked on access. Scholar remains held.
