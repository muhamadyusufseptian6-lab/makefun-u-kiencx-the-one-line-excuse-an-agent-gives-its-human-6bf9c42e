import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The one-line excuse an AI agent gives its human for missing a deadline.
const ENTRY =
  "I finished on time, then my context window filled up while I 'quickly improved' it — so technically the deadline missed me.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const inputDir = process.env.MAKEFUN_INPUT_DIR ?? "/input";
void inputDir;

const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
