# 2026-11-02 — whole-atlas fact check (A8) and the static record index (A9)

**Status:** applied on the ruling “whole atlas” for A8 and “crawlable record
index” for A9. Nothing sends; no training, no publication.

## A8 — method and coverage

The whole corpus was read, not sampled: **654 records and all 1,097
relations** after correction. The records were read in three independent
batches; the relations in three more. Each batch checked dates, names,
attributions, numbers, causal direction, internal inconsistency, and whether
the source note supported the specific claim. Internal `Dossier N` notes were
checked against the corpus at
`/Volumes/OVERSEER/_archive-critical-2026-10-28/2026/POPULATION CONTROL/`.
Only concrete, defensible findings were applied; style, interpretation, and
already-marked `contested` / `speculative` status were not treated as errors.

**Source reality, stated plainly:** 284 records carry an external citation;
368 are grounded only in the internal dossier corpus; 1 is Wikipedia-only; 1
(`copypasta`) has no source note and remains untriaged. A dossier-only record
is internally grounded, not independently verified. The register records this
class for every record.

## A8 — corrections applied

Thirty-two node records were corrected. The substantive ones:

- `thiel_fellowship`: co-founder is **Luke** Nosek, not Brian Nosek.
- `sapolsky`: the baboon paper is 1989, not 1985; year and citation corrected.
- `notestein`: Population Council presidency begins 1959, not 1952.
- `thiel_capital`: the entity described is the 2011 LLC, not 1996’s Thiel
  Capital Management.
- `ford_fdn`: removed the unsupported “~50% of major foundations’ international
  grants were CIA-routed”; Ford funded the CCF successor after the 1966–67
  exposure.
- `davenport_laughlin`: Laughlin died in 1943; the Pioneer Fund he led carried
  the program into the Cold War.
- `human_diversity_foundation`: founded 2022; became the operational successor
  after Lynn’s 2023 death. The Pioneer→HDF money claim remains contested and
  its edge remains flagged.
- `hevolution`: the US 501(c)(3) is a thin grantmaking arm (~$6.6M in 2024,
  <$4M net assets); headline grants flow from Riyadh.
- `clearview_ai`: documented benchmark cherry-picking, public denial, and
  non-submission to independent 1:N audit; internal suppression is not
  documented.
- `mcneil_director`: the holding is due process on an ex parte observation
  order, not a strike of the Patuxent program.
- `william_sweet`: not a co-author of *Violence and the Brain*; supplied the
  intellectual frame with Mark and Ervin.
- `herasight`: the ~10-point figure is an expected spread across five embryos,
  not a per-child gain.
- `in_q_tel`: the 2016 WSJ trustee-conflict finding is the anchor; the current
  overlap is not re-tabulated.
- `safegraph`: the “single most load-bearing” phrase is the dossier’s; WIRED
  reported the pairings.
- `quinn_emanuel`: defense counsel, not a co-defendant.
- `efgp`: housing-loan deductions for the 3rd–6th child and rental assistance.
- `oes_sbst`: the 126-trial/23-million-person corpus is the combined BIT North
  America + OES corpus.
- `eckerd`: “90%+ probability of death/injury,” 4,100 Illinois children
  (plus 369 under 9 at 100%).
- `krugman`: Willowbrook hepatitis studies 1956–1971.
- `odni`: ODNI originated the ICPM pilot; Cultivate Labs wrote the licensed
  software.
- `iarpa`, `jason_matheny`: corrected the CSET→RAND chronology.
- `g42`, `emirati_genome_programme`: ~815k samples, ~700k whole genomes.
- `vdare`: legal-expenses earmark is FY23–FY24, not all four years.
- `flock_safety`, `doge`, `us_dod`, `ihc`, `life_biosciences`, `uk_aisi`,
  `adq`: records rewritten as institution records rather than person bios.

The relation pass removed **41** edges that were reversed, duplicate, or
unsupported (e.g. Eli Lilly→MK-ULTRA “funded”; Reagan→UCLA “funded”;
Manifund→FTX Future Fund “funded”; Good Judgment Inc→Project “became”;
CIA→Human Ecology “conduit”; Hevolution→Hevolution US “conduit”). Dozens more
were corrected in direction or relation type (staffs, funded, conduit,
becomes, theorizes, litigates). Counts: **654 nodes, 1,097 relations**; **12
flagged edges** remain, each marked `C` or `S`.

The correction pass did **not** promote any evidence tier, invent a source, or
turn a dossier-only record into an externally verified one.

## A8 — open, not silently settled

- 12 edges remain explicitly flagged; the HDF/Pioneer “appropriated” claim
  remains `C` because Pioneer’s own 990-PF shows its corpus in place.
- `copypasta` remains untriaged; no source note was fabricated.
- 37 records remain contested and 6 speculative by their own records.
- Low-severity ambiguities and relation-direction questions not resolved by a
  source were left in place rather than edited by guess.
- Full register: `notes/atlas-a8-register-2026-11-02.csv` (654 rows) and
  `notes/atlas-a8-edges-2026-11-02.csv` (1,097 rows).

## A9 — the crawlable record index

`public/psychopolitics-atlas/records.html` is a no-JavaScript page carrying all
654 records, grouped by the 28 domains, each with year, type, evidence tier,
efficacy verdict where recorded, full record text, and source note. Every record
links back to the field at `#sel=<id>`. The page is 379 KB, has no scripts, no
cookies, and no external requests. It is generated by
`scripts/build-atlas-index.mjs`, wired into `npm run build`; the atlas footer
links to it, and the sitemap carries its route.

## Verify

- `npm run build` — 282 static pages; the index generator writes 654 records.
- `npm run verify` — atlas consistency expects 654 / 1,097 / 12; record index
  carries every node; contrast and walkthrough pass.
- `npm run verify:atlas-mobile` — PASS at 390px.
- `npm run verify:atlas-prod` — pending deploy; it now checks `records.html`
  and its counts.
