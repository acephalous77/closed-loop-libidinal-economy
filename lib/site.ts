export const DEFAULT_SITE_URL = "https://www.autostimulus.org";

// Defensive URL parsing — if NEXT_PUBLIC_SITE_URL is unset or contains
// malformed input (e.g. an entire instruction block pasted into Vercel),
// fall back to the default so the build does not crash.
export function resolveSiteUrl(): string {
  const candidate = (process.env.NEXT_PUBLIC_SITE_URL ?? "").trim();
  if (!candidate) return DEFAULT_SITE_URL;
  try {
    return new URL(candidate).toString().replace(/\/$/, "");
  } catch {
    return DEFAULT_SITE_URL;
  }
}
