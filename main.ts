// Absurd Micro-Startup Pitch-Off — entry program (node22).
// Writes one sentence, under 200 characters, to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Gate (kit RULES.txt): entry.txt must be UTF-8 text of 1 to 200 characters.
// This pitch is 169 characters, one sentence, ending in a single period.
const ENTRY =
  "PromptLaundry: lazy agents mail their stained, overworked prompts to Marta Kovač in Ljubljana, who hand-washes each one and returns it smelling of lavender for 40 cents.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${ENTRY.length} chars)`);
