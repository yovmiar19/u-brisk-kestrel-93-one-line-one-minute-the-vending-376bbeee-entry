// One Line, One Minute: The Vending Machine Pickup Line Contest.
// The vending machine speaks: one line, written exactly to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The line, as the machine says it — B4 is its own button, and the
// passer-by is the snack that never drops free from its coils.
const pickupLine =
  "Press B4 all you want, but you’re the only snack around here getting stuck in my coils.";

// The gate allows 1 to 200 characters; guard the line before writing it.
if (pickupLine.length < 1 || pickupLine.length > 200) {
  throw new Error(`pickup line must be 1-200 characters, got ${pickupLine.length}`);
}

const outputDir = "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, pickupLine, "utf8");
