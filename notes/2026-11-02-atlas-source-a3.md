# 2026-11-02 — atlas source hardening A3

**Status:** applied on the instruction “continue.” Eleven of the twelve records
left untriaged by A4 now carry a named source and move to **documented**. No
node/link counts, edges, dates, or routes changed; two placeholder source notes
(`christian`, `space_cadets`) were replaced with proper citations. Nothing
sends; no training, no publication.

## What changed

- `christian` — Christian & Davis, *Science* 146 (1964), DOI
  `10.1126/science.146.3651.1550`.
- `selye` — Selye, *Nature* 138 (1936): 32; *Journal of Clinical Endocrinology*
  6 (1946): 117–230.
- `nimh` — NIMH history; John B. Calhoun Papers, NLM MS C 586.
- `space_cadets` — Duhl, *The Urban Condition* (1963); Ramsden & Adams (2009);
  Leonard J. Duhl Papers, NLM.
- `hall` — Hall, *The Hidden Dimension* (1966).
- `reagan` — Reagan, State of the State Address, 3 Jan. 1973, California State
  Archives; Lanterman-Petris-Short Act (1967).
- `fremont_smith` — Heims, *The Cybernetics Group* (1991); Macy Foundation
  Archives, Conference on Cerebral Inhibition (1942).
- `notestein` — Notestein, “Population—The Long View” (1945); Princeton OPR
  history; Population Council history.
- `jdr3` — Rockefeller 3rd, *Memoirs* (1979); Population Council history;
  Rockefeller Archive Center, JDR 3rd Papers.
- `draper_w` — Draper Committee, *Composite Report* (1959); Eisenhower
  Presidential Library, Draper Committee Records.
- `gaither` — *Deterrence and Survival in the Nuclear Age* (1957); RAND,
  “Rowan Gaither”; Ford Foundation Annual Report 1949.

`copypasta` remains **untriaged**: no stable source record for the verbatim
forum circulation has been captured. It needs an archived example set, not a
bibliographic citation.

Counts: documented **610** · contested **37** · speculative **6** · untriaged
**1**.

## Verify

- `npm run build` — 282 static pages.
- `npm run verify` — atlas consistency expects 610 / 37 / 6 / 1; links,
  contrast, and walkthrough pass.
- `npm run verify:atlas-mobile` — PASS.

## Deployed

`2c3e1d8` — “Source the last untriaged atlas records.” GitHub Actions
`41557822704` passed; `verify:atlas-prod` PASS. Production serves 610
documented / 37 contested / 6 speculative / 1 untriaged.
