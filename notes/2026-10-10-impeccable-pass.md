# 2026-10-10 — the Impeccable design audit + uplift

**What ran.** The Impeccable design detector (v4.5.2, engine 0.1.14 — the O-13
capability ruled today) over the running site: 17 representative URLs covering
every work, scanned as live DOM (CSS-resolved). Full batteries re-scanned after
each batch. Method per the skill: craft-floor read before edits; committed
registers kept (a pinned visual world outranks a category default); bounded
verify passes via before/after detector runs.

**Numbers.** 1,051 findings → **224** across the sampled surfaces.
- undersized-ui-text 590 → ~0 (every functional surface now holds the 11px
  floor; body prose at 12+ where it's prose)
- low-contrast 209 → ~25 (all remaining are designed ghosts, hidden-layer
  reveal states, or transition washes — itemized below)
- tiny-text 74 → 62 (the psychopolitics node-label field at 11px, an
  instrument-density keep; the rest cleared)
- Per work: chair brochure 68→20 · chair essay 183→12 · chair zine 208→53 ·
  chair subsystem 31→5 · manufacture 139→24 · psychopolitics 133→59 ·
  patriotic plates 132→5 · patriotic hub 41→3 · ouroboric 63→15 · ohcose
  21→4 · landing 22→14 · closed-loop 1–3 per surface (was already clean).

**What changed, by class.**
1. **Type floor** — every functional size below 11px raised, per work's own
   scale: chair (~130 sites incl. the plate chrome, zine, lineage), manufacture
   (28), psychopolitics (UI + region rail), ouroboric (24), patriotic (9),
   ohcose (59), landing chips. Body text to 12 where it reads as prose.
2. **Contrast, per palette** — retuned each work's tokens so the muted tiers
   clear AA while staying in-register: chair MASTER/BROCHURE/ZINE (sepia tiers
   darkened, warm specs kept), manufacture (bone-faint raised, receipt grays
   darkened, red-on-paper deepened), ouroboric (L.faint/L.oxide/D.dim/D.faint),
   ohcose (ink-50), patriotic (footer meta), landing (stamp red 4.3→4.5+),
   psychopolitics (slate triad lightened, placeholder ruled).
3. **Rhythm** — manufacture h2 block-margin fixed (0px-above readings);
   chair essay prose 44rem→40rem measure; zine tight-leading 1.2→1.3.
4. **Signature (the "their own" layer)** — text selection themed per world
   where missing: OHCOSE (its form-red on eggshell), Patriotic Times (its
   riso red), the landing flyer (toner black over bone — the ink press in
   selection form); psychopolitics search caret in its slate. The chair,
   manufacture, ouroboric and psychopolitics already themed their own.
5. **The ghost stamp** — the "Photocopied" watermark kept but made legible
   as a watermark (0.05→0.07 ink), still aria-hidden.

**Kept deliberately, with reasons** (the craft floor: a committed visual
world outranks the category default):
- Em-dash density on closed-loop surfaces — his instrument, protected.
- The cream/bone stock across works — the print-paper register itself.
- Kickers/eyebrows, numbered sections, italic-serif display, mono — diegetic
  apparatus (measurement, forms, plates), not landing-page costume.
- The landing's ink-press overlay (text-occlusion ×12) — the press mechanism.
- The zine's cut-up collage: overflow, all-caps, torn-edge clip-paths,
  overlapping OUROBOROS stamps.
- psychopolitics 11px node labels — the 620-node field is the instrument;
  zoom scales it; UI text itself now holds 11.
- Manufacture/ouroboric remaining pixel-contrast items — scroll-reveal and
  descent-transition layers the detector samples before reveal completes.
- `Hence`/`Consequently` in the mathematics — formal register.

**Flag for the rig.** Mid-pass, the vendored Impeccable payload at
`overseer/.opencode/skills/impeccable/scripts/` (engine binary + launcher)
vanished from the tree — likely gitignored-payload collateral of the parallel
O-13 session's landing work. The documented `npx -y impeccable@4.5.2` fallback
served every scan. The overseer tree needs the payload restored before its
`design-check` seam runs again.

**Preview.** The production server is running at http://localhost:3000 for
eyeballing; the touch-heavy pages to check are /chair/essay, /chair/zine,
/manufacture-of-the-subject, /psychopolitics-atlas/index.html, and /.
Build green (276 pages), lint clean.
