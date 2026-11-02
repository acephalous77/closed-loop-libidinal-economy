import type { Metadata } from "next";
import Link from "next/link";
import { PressFooter, PressMasthead } from "@/components/shell/PressChrome";

export const metadata: Metadata = {
  title: "the colophon",
  description:
    "The colophon of autostimulus: the press, its registers, its posture, and its license.",
  alternates: { canonical: "/colophon" },
};

export default function Colophon() {
  return (
    <>
      <PressMasthead current="colophon" />

      <main className="press-shell press-shell--graphite">
        <article className="press-article">
          <header className="press-author-head">
            <h1 className="press-display">The colophon</h1>
            <p className="press-standfirst">
              autostimulus is the press of A. Selimović. One concern runs
              through every register: the institution that produces a subject,
              and the loop that holds it.
            </p>
          </header>

          <p className="press-body">
            The <Link href="/closed-loop">Closed-Loop Libidinal Economy</Link>{" "}
            is the framework, set out in prose, mathematics, and operable plates.
            Around it the press publishes{" "}
            <Link href="/psychopolitics-atlas">
              The Psychopolitics of Socialization
            </Link>
            , <Link href="/ohcose">OHCOSE</Link>, and{" "}
            <Link href="/manufacture-of-the-subject">
              The Manufacture of the Subject
            </Link>
            , which follow the apparatus through the population, the agency, and
            the life course. The speculative works take the same loop into other
            rooms:{" "}
            <Link href="/chair">The Ouroboros Life System</Link>,{" "}
            <Link href="/patriotic-times">Patriotic Times</Link>, and{" "}
            <Link href="/ouroboric-condition">The Ouroboric Condition</Link>.
            Each keeps its own paper and ink, and the shell serves them.
          </p>

          <p className="press-body">
            The press is self-hosted. Fonts, scripts, and images come from this
            house; the pages make no third-party requests and carry no
            analytics. One cookie sitewide belongs to the thinkroom passphrase
            gate. Every instrument readout carries its plain definition, and the
            reader&apos;s apparatus measures in memory and dies with the tab.
            The full refusals list sits at{" "}
            <Link href="/closed-loop/the-colophon">
              /closed-loop/the-colophon
            </Link>
            , where each refusal names its apparatus citation.
          </p>

          <p className="press-body">
            Texts are licensed CC BY-SA 4.0 and code is MIT. The source
            repository is public at{" "}
            <a href="https://github.com/acephalous77/closed-loop-libidinal-economy">
              github.com/acephalous77/closed-loop-libidinal-economy
            </a>
            . Each work keeps its own faces; the shell serves them, which is the
            Register Rule.
          </p>

          <p className="press-note">
            A. Selimović. Blacksburg, Virginia. 2026.
          </p>

          <PressFooter />
        </article>
      </main>
    </>
  );
}
