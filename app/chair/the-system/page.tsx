import { redirect } from "next/navigation";

// The brochure moved to /chair when it became the landing page of
// the volume. This route is preserved as a permanent redirect so any
// existing external links continue to land on the brochure rather
// than 404.
export default function TheSystemRedirect(): never {
  redirect("/chair");
}
