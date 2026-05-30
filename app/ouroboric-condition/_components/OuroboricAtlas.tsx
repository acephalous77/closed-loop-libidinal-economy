"use client";

import dynamic from "next/dynamic";
import { L } from "./shared";

// The atlas reads window / localStorage / requestAnimationFrame during render,
// so it must not be server-rendered. next/dynamic with ssr:false defers it to
// the client and renders the quiet paper splash in the meantime — which is
// also what the route statically prerenders.
const AtlasApp = dynamic(() => import("./Atlas"), {
  ssr: false,
  loading: () => <AtlasBoot />,
});

function AtlasBoot() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#cdc7b8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--atlas-mono), monospace",
        fontSize: 11,
        letterSpacing: "0.3em",
        color: L.oxide,
      }}
    >
      THE OUROBORIC CONDITION
    </div>
  );
}

export default function OuroboricAtlas() {
  return <AtlasApp />;
}
