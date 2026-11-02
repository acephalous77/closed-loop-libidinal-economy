/**
 * Atlas contrast — the paper-4 metadata token must clear 4.5:1 on every
 * field surface it is used over. Pure local math; no browser.
 *
 *   node scripts/verify/atlas-contrast.mjs
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "../..");
const css = fs.readFileSync(path.join(root, "public/psychopolitics-atlas/atlas.css"), "utf8");
const token = (name) => {
  const m = css.match(new RegExp(`--${name}:\\s*(#[0-9a-fA-F]{6})`));
  if (!m) throw new Error(`missing --${name}`);
  return m[1];
};
const lum = (hex) => {
  const c = hex.match(/[0-9a-f]{2}/gi).map((x) => parseInt(x, 16) / 255)
    .map((x) => (x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const ratio = (a, b) => {
  const x = lum(a), y = lum(b);
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
};

const pairs = [
  ["paper-4", "field"],
  ["paper-4", "field-2"],
  ["paper-4", "field-3"],
  ["paper-4", "field-4"],
  ["paper-3", "field"],
  ["paper-3", "field-2"],
  ["paper-3", "field-3"],
  ["paper-3", "field-4"],
];
const failures = [];
for (const [fg, bg] of pairs) {
  const r = ratio(token(fg), token(bg));
  if (r < 4.5) failures.push(`${fg} on ${bg} = ${r.toFixed(2)} < 4.5`);
}
if (token("paper-4") !== "#8a887d") failures.push(`paper-4 is ${token("paper-4")}, expected #8a887d`);
if (failures.length) {
  console.error(`atlas-contrast: ${failures.length} failure(s)`);
  for (const f of failures) console.error(`  FAIL ${f}`);
  process.exit(1);
}
console.log(`atlas-contrast: PASS — paper-4 ${ratio(token("paper-4"), token("field-4")).toFixed(2)}:1 on field-4`);
