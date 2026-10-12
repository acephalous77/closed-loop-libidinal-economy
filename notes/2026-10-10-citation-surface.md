# 2026-10-10 — P1b: the citation surface (critique queue, closed)

## What this closes

Critique P1: "the flagship framework has no citation surface, and the
superseded archive holds the metadata" (snapshot:
`.impeccable/critique/2026-10-10T17-43-28Z__autostimulus.md`).

## Built

- `components/closed-loop/CitationBlock.tsx` — the visible unit: hairline top,
  mono register label ("Cite this work — v2 · 2026"), serif citation
  (Selimović, A. — the closed-loop libidinal economy, v2. autostimulus, 2026 ·
  autostimulus.org/closed-loop), numbered-results note. `compact` variant for
  the cover.
- `components/closed-loop/ArchiveStamp.tsx` — the v1 archive register:
  bordered mono plate "2026 archive · v1" + terse line pointing to the v2
  argument/apparatus/dynamics. (The mathematics keeps its existing terse
  first-version stamp, already in place.)
- On the four v2 surfaces — cover `/closed-loop` (compact line), 
  `/v2-argument` (block + kicker now "… · v2, 2026"), `/the-apparatus` (block),
  `/v2-dynamics` (block) — each also carries the `citation_*` + Dublin Core
  `other:` meta now (title "(v2)", publication date 2026/05/28, the derived
  git-first-commit date of cfcdfd2).
- The full v1 dynamics subtree (index + 14 mechanism pages, all already
  noindexed) carries the ArchiveStamp below the breadcrumb.

## Verification

- `npm run build` — ✓ compiled, 276/276 static pages, exit 0. **Note:** the
  documented Turbopack next/font cache flake recurred ("import map: exactly one
  entry"); `rm -rf .next` fixed it again, as logged on 2026-10-10 earlier.
- `npm run lint` — exit 0; 93 pre-existing warnings, none in any touched file.
- Rendered checks (curl, running server): markers present on all 6 test
  surfaces; v2-argument head carries `citation_title` and
  `citation_publication_date`; detector: 2 findings each on v2-argument and a
  stamped subpage — no new flags from the additions.

## Open (NEEDS ADNAN — P1a)

*Struck 2026-10-12:* resolved the same day it was written — his word of
2026-10-10 ("de-ai the texts that go on the site and then the rest is
approved") carried P1a; the statement was built that hour and is live on
`/` under the masthead (verified in the served HTML 2026-10-12). See
`notes/2026-10-10-queue-close.md`.

~~The atelier statement (critique P1, the other half) is drafted and scans clean
(0 tells); it is NOT wired pending his ruling — text lives in the session
report of 2026-10-10, and on his word it mounts on `/` in the flyer register.~~
