/**
 * Shared `next start` boot/shutdown for the verify scripts.
 *
 * Spawns next directly — the first CI run hung because a killed `npx`
 * wrapper left the grandchild server holding the stdio pipes open. The
 * shutdown awaits exit with a SIGKILL escalation, so the step always ends.
 */

import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { setTimeout as sleep } from "node:timers/promises";

const NEXT_BIN = fileURLToPath(
  new URL("../../node_modules/next/dist/bin/next", import.meta.url),
);

export async function startNextServer(port, { tries = 60 } = {}) {
  const base = `http://127.0.0.1:${port}`;
  const server = spawn(process.execPath, [NEXT_BIN, "start", "-p", String(port)], {
    stdio: ["ignore", "pipe", "pipe"],
  });
  let stderr = "";
  server.stderr.on("data", (d) => {
    stderr += d.toString();
  });

  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(base, { redirect: "manual" });
      if (res.status >= 200 && res.status < 500) {
        return { base, server };
      }
    } catch {
      // not up yet
    }
    await sleep(500);
  }

  await stopNextServer(server);
  throw new Error(
    `next start did not come up on ${port} — did you run \`npm run build\`?\n` +
      stderr.trim().split("\n").slice(-5).join("\n"),
  );
}

export async function stopNextServer(server) {
  if (!server || server.exitCode !== null) return;
  const exited = new Promise((resolve) => server.once("exit", resolve));
  server.kill("SIGTERM");
  const escalate = setTimeout(() => server.kill("SIGKILL"), 2500);
  await Promise.race([exited, sleep(4000)]);
  clearTimeout(escalate);
}
