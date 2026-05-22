"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE_NAME = "tr_pass";
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
export async function submitPassword(formData: FormData) {
  const submitted = String(formData.get("password") ?? "");
  const next = String(formData.get("next") ?? "/thinkroom") || "/thinkroom";
  const safeNext = next.startsWith("/thinkroom") ? next : "/thinkroom";

  const password = process.env.THINKROOM_PASSWORD;
  const secret = process.env.THINKROOM_COOKIE_SECRET;
  if (!password || !secret) {
    redirect("/thinkroom/enter?error=config");
  }

  if (submitted !== password) {
    redirect("/thinkroom/enter?error=1&next=" + encodeURIComponent(safeNext));
  }

  const hash = await sha256Hex(password + ":" + secret);
  const jar = await cookies();
  jar.set(COOKIE_NAME, hash, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
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
