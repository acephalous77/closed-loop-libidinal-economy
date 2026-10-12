import type { Metadata } from "next";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { JsonLd, articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

const PATH = "/closed-loop/errata";
const TITLE = "errata";
const DESCRIPTION =
  "Corrections to the framework, filed as issues on the source repository and rendered here from that record at build time. Each entry keeps its filing number, state, and dates.";

const REPO = "acephalous77/closed-loop-libidinal-economy";
const ISSUES_URL = `https://github.com/${REPO}/issues`;
const NEW_ERRATUM_URL = `https://github.com/${REPO}/issues/new?template=errata.yml`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    type: "article",
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    publishedTime: "2026-10-12T00:00:00.000Z",
    authors: ["Adnan Selimović"],
    section: "Errata",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  other: {
    "DC.title": "The Closed-Loop Libidinal Economy — Errata",
    "DC.creator": "Adnan Selimović",
    "DC.date": "2026-10-12",
    "DC.type": "Text",
    "DC.format": "text/html",
    "DC.language": "en",
    "DC.rights": "CC BY-SA 4.0",
  },
};

type GhIssue = {
  number: number;
  title: string;
  state: string;
  created_at: string;
  closed_at: string | null;
  html_url: string;
  pull_request?: unknown;
};

type Erratum = {
  number: number;
  title: string;
  state: string;
  created: string;
  closed: string | null;
  url: string;
};

/**
 * The filing cabinet is the public issue tracker; this fetch runs once, at
 * build time (revalidate: false), and the page ships static. The toolkit
 * never loads from GitHub at runtime. A failed read degrades to null: the
 * page states the record could not be read, and shows no false empty state.
 */
async function getErrata(): Promise<Erratum[] | null> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${REPO}/issues?labels=errata&state=all&per_page=100`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: false },
      },
    );
    if (!res.ok) return null;
    const data = (await res.json()) as GhIssue[];
    if (!Array.isArray(data)) return null;
    return data
      .filter((issue) => !issue.pull_request)
      .map((issue) => ({
        number: issue.number,
        title: issue.title,
        state: issue.state,
        created: issue.created_at.slice(0, 10),
        closed: issue.closed_at ? issue.closed_at.slice(0, 10) : null,
        url: issue.html_url,
      }));
  } catch {
    return null;
  }
}

export default async function ErrataPage() {
  const errata = await getErrata();

  return (
    <main className="min-h-screen">
      <JsonLd
        data={[
          articleJsonLd({
            headline: "Errata — The Closed-Loop Libidinal Economy",
            description: DESCRIPTION,
            path: PATH,
          }),
          breadcrumbJsonLd([
            { label: "the closed-loop libidinal economy", href: "/" },
            { label: "errata", href: PATH },
          ]),
        ]}
      />
      <div className="mx-auto max-w-[var(--container-page)] px-sm pt-md pb-2xl">
        <div className="mb-lg">
          <Breadcrumb
            path={[
              { label: "the closed-loop libidinal economy", href: "/" },
              { label: "errata" },
            ]}
          />
        </div>

        <article className="mx-auto max-w-[var(--measure)]">
          <h1 className="font-serif text-2xl text-ink leading-tight">
            errata
          </h1>
          <p className="mt-md font-serif italic text-sm text-ink-70 max-w-prose">
            Corrections to the framework are filed as issues on the source
            repository and rendered here from that record at build time. Each
            entry keeps its filing number, state, and dates.
          </p>

          {errata && errata.length > 0 ? (
            <ul className="mt-lg">
              {errata.map((erratum) => (
                <li
                  key={erratum.number}
                  className="flex flex-wrap items-baseline gap-x-md gap-y-xs border-t border-paper-85 py-sm"
                >
                  <span className="font-mono text-xs text-ink-50 shrink-0">
                    no. {erratum.number}
                  </span>
                  <a
                    href={erratum.url}
                    target="_blank"
                    rel="noopener"
                    className="flex-1 min-w-[12rem] font-serif text-sm text-ink underline decoration-paper-85 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
                  >
                    {erratum.title}
                  </a>
                  <span className="font-mono text-xs text-ink-50 shrink-0">
                    {erratum.state} · {erratum.created}
                    {erratum.closed ? `–${erratum.closed}` : ""}
                  </span>
                </li>
              ))}
            </ul>
          ) : errata ? (
            <p className="mt-lg font-mono text-xs text-ink-50">
              Nothing is on file.
            </p>
          ) : (
            <p className="mt-lg font-mono text-xs text-ink-50">
              The record could not be read at build time; corrections currently
              live at the repository.
            </p>
          )}

          <section
            aria-label="File a correction"
            className="mt-xl pt-md border-t border-paper-85"
          >
            <p className="font-mono text-xs text-ink-50 leading-relaxed">
              <a
                href={NEW_ERRATUM_URL}
                target="_blank"
                rel="noopener"
                className="underline decoration-paper-85 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
              >
                File a correction
              </a>{" "}
              — open an issue on{" "}
              <a
                href={ISSUES_URL}
                target="_blank"
                rel="noopener"
                className="underline decoration-paper-85 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
              >
                github.com/{REPO}
              </a>
              , labeled errata.
            </p>
            <p className="mt-sm font-mono text-xs text-ink-50">
              The page is generated from the record; nothing here loads from
              anywhere at runtime.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
