# 2026-11-02 — V1 voice memo, H1 and H2 authorship memos

Status: proposals. Nothing here edits a manuscript or starts a pilot.

The live handoff is
`/Users/thenetos/Downloads/authorship_restoration_technical_handoff.md`,
sha256 `3675555d45c020f077c5a712a166896b255ac304129c8b191494761288dd28ae`,
copied 2026-10-08. Accountable authorship is the goal. Evading a detector is
not.

## V1 — voice restoration memo

The reliable-tell count on `content/argument.mdx` and
`content/sincere-captives.mdx` is 0. The remaining `contrast_reframe` flags are
false positives; reading them as pivots would damage the prose. The working
rule is passage-level review. A corpus sweep would damage the prose.

Preserve:

- the noun-series of three or four;
- the em-dash turn and the colon elaboration where they carry the argument;
- compressed declarations and direct address;
- repetition native to the argument; a repeated sentence shape is different;
- the concrete instance before the concept.

Do not:

- rewrite whole documents to satisfy a scanner;
- replace a live figure with a general claim;
- flatten a long sentence because a cadence tool prefers shorter ones;
- add a conclusion the argument does not earn;
- imitate a model's idea of “Adnan's voice.”

The working protocol for a suspect passage:

1. Name the operation the passage performs, in one line.
2. Compare the flagged sentence with the surrounding two or three sentences.
3. Recast only the operation that fails: pivot, posture, filler, or false
   salience.
4. Run `"$HOME/.venvs/research/bin/python" "$HOME/Desktop/WRITING PROGRAMMING/de-ai/deai.py" <file> --style-scan`.
5. Adjudicate each hit against the passage; a clean scanner supplies evidence.
   His ruling decides.
6. Send any prose that leaves the house through the gate: `voice_draft` →
   `voice_check` → the gate. His ruling is final.

The canonical X/Y layer is `deai.py --style-scan`. The voice-engine X/Y section
is not the authority while its loader and structural coverage are separate.

## H1 — pilot memo

Purpose: test whether the authored operations can be restored inside a bounded
piece without turning the work into a detector exercise.

Shape:

- one argument section, 1,500–2,500 words;
- a claim ledger with claim, source, locator, evidence tier, and status;
- source verification before drafting;
- a `voice_draft` pass, a `voice_check` pass, and the gate;
- a model-addition diff that names every claim, figure, or transition the model
  added beyond the source notes;
- a final human ruling, with the draft and the diff kept together.

Done when the section survives a line read against the ledger, every added
claim is either sourced or removed, the scanner's reliable tells are 0, and the
gate records a decision.

Disconfirmers: the pilot fails if the model's additions cannot be distinguished
from the source claims, if the ledger cannot support the section's central
claims, or if the prose only passes by removing the operations V1 protects.

No publication is part of H1.

## H2 — outline and evidence memo

Purpose: narrow *The Streak* before another drafting pass.

Working thesis: *The Streak* is about the interface-admin state — the point at
which the platform's administrative surface becomes the user's practical
relation to work, care, and self-description. The durable-formation argument
remains a hypothesis; the outline should not treat it as a premise.

The memo should:

- state the thesis in one paragraph and name what it excludes;
- map each section to the claims and sources that support it;
- separate the historical record from the speculative extension;
- name the strongest available counter-reading;
- list the sources that must be read before drafting, without pretending the
  bibliography is exhaustive;
- mark every sentence that would need a citation as a claim; prose comes after
  verification.

Done when the outline can be read against the sources without a draft, and the
unresolved claims are listed as open; the outline should not smooth them into
the argument.

Disconfirmers: H2 fails if the outline needs the durable-formation thesis to
hold the section order together, if the interface-admin thesis cannot be stated
without the stronger claim, or if the source list is being used to decorate a
conclusion already fixed in advance.
