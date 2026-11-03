# 2026-11-02 — atlas edge corrections A6

**Status:** applied on the instruction “proceed.” Reviewed the 14 flagged edges
against the edge ledger and the corpus. Four edge corrections and three
node-record corrections; one edge removed. No node evidence tiers changed.
Nothing sends; no training, no publication.

## Corrections

- **Pioneer Fund → Human Diversity Foundation** — `funded` (C) was wrong. The
  ledger records residual assets (~$277,873) appropriated by HDF, not a grant.
  Reversed to **Human Diversity Foundation → Pioneer Fund, `appropriated` (C)**.
- **Thorn → EU** — `litigates` (C) was wrong. Thorn drafted and lobbied the EU
  CSA Regulation; it was not a litigating party. Replaced with
  **`influenced` (C)**.
- **Nucleus Genomics → 23andMe** — `funded` (C) was wrong. Nucleus publicly
  circled the 23andMe bankruptcy asset and lost; the ledger calls it “a rhyme,
  not a tie.” Replaced with **`rhymes` (S)**.
- **Jaan Tallinn → Pragmatist Foundation** — removed. The documented path is
  **Tallinn → SFF** (`funded`), **SFF → Pragmatist Foundation** (`conduit`),
  and **SFF → Pronatalist.org** (`funded`); there is no direct Tallinn grant to
  Pragmatist.
- **Node records corrected** — `us_state_dept` carried Ken Howery’s Denmark
  record, `us_govt` carried an unrelated Airship AI record, and `eu_inst`
  carried Thorn’s record. Each now describes its own institution.

## Kept

The remaining 13 flags are the intended ones: the Helberg and Sacks personnel
edges (C), G42→BGI data (C), SFF→Berkeley Genomics solicitation (S),
Musk Foundation→PWI (C), BGI→PLA (C), Thorn→EU (C, retyped), ARPA-H→Ksana (C),
Nucleus→23andMe (S, retyped), and the three `rhymes` edges (S). None were
promoted to documented.

## Counts

Nodes **654** unchanged; relations **1,138** (one removed); flagged edges
**13** (was 14). Evidence tiers unchanged: 610 documented / 37 contested /
6 speculative / 1 untriaged.

## Verify

- `npm run build` — 282 static pages.
- `npm run verify` — atlas consistency expects 654 / 1,138 / 1903–2026 /
  13 flagged edges; links, contrast, walkthrough pass.
- `npm run verify:atlas-mobile` — PASS at 390px; 1,138 relation paths.
