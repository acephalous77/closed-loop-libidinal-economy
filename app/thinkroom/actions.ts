"use server";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE_NAME = "__Host-tr_pass";
const THIRTY_DAYS = 60 * 60 * 24 * 30;

async function sha256Hex(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/**
 * Validate the submitted password against THINKROOM_PASSWORD. On success
 * write the gate cookie and redirect to ?next or /thinkroom. On failure
 * redirect back to /thinkroom/enter with ?error=1.
 */

/** Constant-time comparison for equal-length hex strings. */
function timingSafeEqualHex(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

// Best-effort per-instance attempt limiter (serverless keeps this per
// instance; it still throttles casual guessing).
const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 10;
const attempts = new Map<string, { n: number; t: number }>();
function tooManyAttempts(ip: string): boolean {
  const now = Date.now();
  const rec = attempts.get(ip);
  if (!rec || now - rec.t > WINDOW_MS) {
    attempts.set(ip, { n: 1, t: now });
    return false;
  }
  rec.n += 1;
  return rec.n > MAX_ATTEMPTS;
}

export async function submitPassword(formData: FormData) {
  const submitted = String(formData.get("password") ?? "");
  const next = String(formData.get("next") ?? "/thinkroom") || "/thinkroom";
  const safeNext = next.startsWith("/thinkroom") ? next : "/thinkroom";

  const password = process.env.THINKROOM_PASSWORD;
  const secret = process.env.THINKROOM_COOKIE_SECRET;
  if (!password || !secret) {
    redirect("/thinkroom/enter?error=config");
  }

  const h = await headers();
  const ip =
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    h.get("x-real-ip") ||
    "unknown";
  if (tooManyAttempts(ip)) {
    redirect("/thinkroom/enter?error=rate&next=" + encodeURIComponent(safeNext));
  }

  const submittedHash = await sha256Hex(submitted);
  const passwordHash = await sha256Hex(password);
  if (!timingSafeEqualHex(submittedHash, passwordHash)) {
    redirect("/thinkroom/enter?error=1&next=" + encodeURIComponent(safeNext));
  }

  const hash = await sha256Hex(password + ":" + secret);
  const jar = await cookies();
  jar.set(COOKIE_NAME, hash, {
    httpOnly: true,
    secure: true, // __Host- requires Secure; localhost is exempted by browsers
    sameSite: "lax",
    path: "/",
    maxAge: THIRTY_DAYS,
  });

  redirect(safeNext);
}

export async function signOut() {
  const jar = await cookies();
  jar.delete(COOKIE_NAME);
  redirect("/thinkroom/enter");
}
