"use client";
/* ============================================================
   SPINE — the lifecycle as a wayfinding rail (crib → grave)
   ============================================================ */
import React from "react";

export function Spine() {
  const STAGES = [
    { id: "top", n: "00", l: "Birth" },
    { id: "intro", n: "01", l: "Value" },
    { id: "ontogenesis", n: "02", l: "Ontogenesis" },
    { id: "adolescence", n: "03", l: "Adolescence" },
    { id: "adulthood", n: "04", l: "Consumption" },
    { id: "late", n: "05", l: "Obsolescence" },
    { id: "conclusion", n: "06", l: "Exit" },
  ];
  const [active, setActive] = React.useState("top");
  React.useEffect(() => {
    const io = new IntersectionObserver(
      (ents) => {
        ents.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    STAGES.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el)
      window.scrollTo({
        top: id === "top" ? 0 : el.offsetTop - 8,
        behavior: "smooth",
      });
  };
  return (
    <nav className="spine" aria-label="lifecycle">
      {STAGES.map((s) => (
        <button
          key={s.id}
          className={"spine-i" + (active === s.id ? " on" : "")}
          onClick={() => go(s.id)}
          title={s.l}
        >
          <span className="spine-l">{s.l}</span>
          <span className="spine-n">{s.n}</span>
          <span className="spine-tick" />
        </button>
      ))}
    </nav>
  );
}
