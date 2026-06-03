"use client";
/* ============================================================
   EXPERIENCE (root) — HUD ledger · scroll engine · reveals
   NOTE: sections are memoised + the HUD updates via direct DOM
   so scroll re-renders never wipe IntersectionObserver reveal
   classes. The design-time Tweaks panel is dropped; the editorial
   defaults are fixed on the .mos wrapper (layout.tsx).
   ============================================================ */
import React, { useEffect, useRef, useCallback } from "react";
import { BirthOverlay, Telemetry } from "./telemetry";
import { Spine } from "./nav";
import { Heartbeat, Receipt } from "./sensory";
import {
  Opener,
  Masthead,
  Intro,
  Ontogenesis,
  Adolescence,
  Adulthood,
  LateAdulthood,
  Interstitial,
  Void,
} from "./sections";
import { SurplusResist } from "./setpieces";

const fmtMoney = (n: number) => "$" + Math.round(n).toLocaleString("en-US");
const STAGE_NAMES: Record<string, string> = {
  top: "MASTHEAD",
  intro: "INTRO",
  ontogenesis: "ONTOGENESIS",
  adolescence: "ADOLESCENCE",
  adulthood: "CONSUMPTION",
  late: "OBSOLESCENCE",
  conclusion: "EXIT",
};

/* ---------- the ledger HUD (rendered once; updated via DOM ids) ---------- */
const HUD = React.memo(function HUD() {
  return (
    <div className="hud">
      <div className="hud-title">
        THE SUBJECT <span style={{ color: "var(--bone-faint)", margin: "0 8px" }}>//</span> LEDGER
      </div>
      <div className="hud-spacer" />
      <div className="hud-cell">
        <span className="lab">stage</span>
        <span className="val" id="hud-stage" style={{ fontSize: 12 }}>
          MASTHEAD
        </span>
      </div>
      <div className="hud-cell">
        <span className="lab">age</span>
        <span className="val" id="hud-age">
          —
        </span>
      </div>
      <div className="hud-cell ltv">
        <span className="lab" id="hud-ltv-lab">
          life-time value extracted
        </span>
        <span className="val" id="hud-ltv">
          $0
        </span>
      </div>
      <div className="hud-bar" id="hud-bar" style={{ width: "0%" }} />
    </div>
  );
});

/* ---------- 06 · CONCLUSION (paper / the seams) ---------- */
function Conclusion({ onFreeze }: { onFreeze?: () => boolean }) {
  return (
    <section
      className="stage paper"
      id="conclusion"
      data-screen-label="06 — Conclusion"
      data-stage
      data-a0="84"
      data-a1="86"
      data-v0="2380000"
      data-v1="2380000"
      style={{ borderTop: "2px solid var(--ink)" }}
    >
      <div className="wrap">
        <Opener n="06" op="Exit" age="what the map is for" sub="symbolic misery → the surplus is ours" />
        <h2 className="anton rev mt40" style={{ fontSize: "clamp(46px,11vw,170px)", color: "var(--ink)" }}>
          The surplus
          <br />
          is ours
        </h2>

        <div className="flex gap40 wrapf mt40" style={{ alignItems: "flex-start" }}>
          <div className="prose rev d1" style={{ color: "var(--ink)" }}>
            <p style={{ color: "#222" }}>
              Stiegler called the result <b>symbolic misery</b>: the means of producing one&rsquo;s own symbols,
              one&rsquo;s own desires, one&rsquo;s own way of wanting, ceded to an industry that produces them on
              one&rsquo;s behalf. Zuboff calls the data side of it a coup — a seizure of the right to the future, decided
              above our heads.
            </p>
            <p style={{ color: "#222" }}>
              Here is the catch the hopeful version leaves out. <b>Knowing the loop does not release you from the loop.</b>{" "}
              The reader who finishes this will pick up the phone before the resentment cools.
            </p>
          </div>
          <div className="prose rev d2" style={{ color: "#222", flex: "1 1 360px" }}>
            <p>
              And yet — there are seams. Children misuse their toys in ways no focus group sanctioned. People still love
              each other off the record, where no data is generated. The old withdraw into a quiet the market cannot
              price.
            </p>
            <p>
              The surplus is the one resource the circuit cannot make for itself. It must therefore <b>take</b> it from
              us. That is where the fight is.
            </p>
          </div>
        </div>

        <div className="rev mt64">
          <SurplusResist onFreeze={onFreeze} />
        </div>

        <div className="rev mt64">
          <div className="flex between center wrapf gap16" style={{ marginBottom: 22 }}>
            <span className="src" style={{ color: "#777" }}>
              fig.06 — before you go, your itemized visit
            </span>
            <span className="src" style={{ color: "#777" }}>
              generated live, from you
            </span>
          </div>
          <Receipt />
        </div>

        <div className="rev mt64" style={{ borderTop: "2px solid var(--ink)", paddingTop: 28 }}>
          <p className="pull" style={{ color: "var(--ink)", fontSize: "clamp(28px,5vw,72px)", maxWidth: "16ch" }}>
            A drive that becomes something <span style={{ color: "var(--acc)" }}>made</span> instead of something{" "}
            <span style={{ textDecoration: "line-through", textDecorationColor: "var(--acc)" }}>bought</span>.
          </p>
          <p className="prose mt24" style={{ color: "#222" }}>
            The materials are modest and mostly old: time that no one is metering, the right to be bored, a room with no
            feed running in it, work whose reward is the work and the people doing it beside you. Whether we keep enough
            of it to matter is not something the map can tell us. It is the work the map is for.
          </p>
        </div>

        <div
          className="flex between wrapf gap16"
          style={{ marginTop: 64, borderTop: "1px solid #00000033", paddingTop: 16 }}
        >
          <span className="src" style={{ color: "#777" }}>
            After Adnan Selimović, “The Manufacture of the Subject.” Stiegler · Zuboff · Marcuse · Lyotard · Preciado ·
            Rifkin · Han.
          </span>
          <a href="#top" className="src" style={{ color: "#777", textDecoration: "none", borderBottom: "1px solid #999" }}>
            ↑ return to birth
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- the whole narrative, memoised so it renders ONCE ---------- */
const Narrative = React.memo(function Narrative({ onFreeze }: { onFreeze?: () => boolean }) {
  return (
    <main style={{ paddingTop: "var(--hud-h)" }}>
      <Masthead />
      <Intro />
      <Ontogenesis />
      <Interstitial
        id="x-hab"
        age="06"
        op="Habitualization"
        v={18000}
        line="What looks like a settled toddler is a settling habit — the asset the next stage inherits."
      />
      <Adolescence />
      <Interstitial
        id="x-con"
        age="18"
        op="Consumption"
        v={140000}
        tone="red"
        line="The channels were dug for it. The libido has learned, in advance, where to run."
      />
      <Adulthood />
      <Void top="— hold here —" bot="the meter is still running ↓">
        Try, now, to want something the apparatus did <span className="hot">not</span> suggest.
      </Void>
      <Interstitial
        id="x-stag"
        age="55"
        op="Stagnation"
        v={1900000}
        line="The productive capacity falls. The apparatus needs another hold — and finds it."
      />
      <LateAdulthood />
      <Interstitial
        id="x-exit"
        age="84"
        op="Exit"
        v={2380000}
        tone="red"
        line="And still the meter runs. The dying itself is booked as an input."
      />
      <Conclusion onFreeze={onFreeze} />
    </main>
  );
});

/* ---------- root ---------- */
export default function Experience() {
  const frozenRef = useRef(false);
  const frozenLtvRef = useRef(0);
  const lastLtvRef = useRef(0);
  const tickRef = useRef(0);

  // freeze toggle — mutates refs + HUD label, no React re-render of narrative
  const onFreeze = useCallback(() => {
    frozenRef.current = !frozenRef.current;
    if (frozenRef.current) frozenLtvRef.current = lastLtvRef.current;
    const lab = document.getElementById("hud-ltv-lab");
    if (lab) lab.textContent = frozenRef.current ? "meter stopped" : "life-time value extracted";
    const root = document.getElementById("mos-root");
    if (root) root.setAttribute("data-frozen", frozenRef.current ? "1" : "0");
    window.dispatchEvent(new CustomEvent("pss-freeze", { detail: frozenRef.current }));
    return frozenRef.current;
  }, []);

  // scroll engine — interpolate age + ltv, write straight to the HUD DOM
  useEffect(() => {
    let raf = 0;
    const setTxt = (id: string, v: string) => {
      const el = document.getElementById(id);
      if (el) el.textContent = v;
    };
    const compute = () => {
      raf = 0;
      const stages = Array.from(document.querySelectorAll<HTMLElement>("[data-stage]"));
      if (!stages.length) return;
      const line = window.scrollY + window.innerHeight * 0.5;
      const docH = document.body.scrollHeight - window.innerHeight;
      const progress = docH > 0 ? Math.min(1, Math.max(0, window.scrollY / docH)) : 0;
      let age = 0,
        ltv = 0,
        stage = "MASTHEAD",
        found = false;
      for (const el of stages) {
        const top = el.offsetTop,
          h = el.offsetHeight;
        const a0 = Number(el.dataset.a0),
          a1 = Number(el.dataset.a1),
          v0 = Number(el.dataset.v0),
          v1 = Number(el.dataset.v1);
        if (line >= top && line < top + h) {
          const tt = Math.min(1, Math.max(0, (line - top) / h));
          age = a0 + tt * (a1 - a0);
          ltv = v0 + tt * (v1 - v0);
          stage = STAGE_NAMES[el.id] || stage;
          found = true;
          break;
        }
        if (line >= top + h) {
          age = a1;
          ltv = v1;
          stage = STAGE_NAMES[el.id] || stage;
        }
      }
      if (!found && line < stages[0].offsetTop) {
        age = 0;
        ltv = 0;
        stage = "MASTHEAD";
      }
      lastLtvRef.current = ltv;
      if (frozenRef.current) ltv = frozenLtvRef.current;
      setTxt("hud-stage", stage);
      setTxt("hud-age", age <= 0 ? "—" : Math.floor(age) + " yrs");
      setTxt("hud-ltv", fmtMoney(ltv));
      const ltvEl = document.getElementById("hud-ltv");
      if (ltvEl) {
        if (ltv < tickRef.current) tickRef.current = ltv;
        else if (!frozenRef.current && ltv - tickRef.current > 3500) {
          tickRef.current = ltv;
          ltvEl.classList.remove("tick");
          void ltvEl.offsetWidth;
          ltvEl.classList.add("tick");
        }
      }
      const bar = document.getElementById("hud-bar");
      if (bar) bar.style.width = progress * 100 + "%";
      // parallax drift on threshold numerals
      const pxs = document.querySelectorAll<HTMLElement>("[data-parallax]");
      for (const el of pxs) {
        const rc = el.getBoundingClientRect();
        const c = rc.top + rc.height / 2 - window.innerHeight / 2;
        el.style.transform = "translateY(" + (c * -0.14).toFixed(1) + "px)";
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    compute();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // reveal on scroll — runs once; narrative never re-renders so classes persist
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".rev, .slam"));
    const io = new IntersectionObserver(
      (ents) => {
        ents.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div className="tex-grain" />
      <div className="tex-scan" />
      <BirthOverlay />
      <Telemetry />
      <HUD />
      <Spine />
      <Heartbeat />
      <Narrative onFreeze={onFreeze} />
    </>
  );
}
