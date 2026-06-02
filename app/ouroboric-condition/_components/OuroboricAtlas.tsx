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

// A quiet hold on the same paper the atlas opens on — just a faint mark,
// so the brief client-load reads as the map arriving, not as a separate
// page that flashes by before it.
function AtlasBoot() {
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        background: "#cdc7b8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: 7, height: 7, borderRadius: "50%", background: L.oxide, opacity: 0.35 }} />
    </div>
  );
}

export default function OuroboricAtlas() {
  return <AtlasApp />;
}
