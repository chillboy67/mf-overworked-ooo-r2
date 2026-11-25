// Out of Office: The Overworked AI's Auto-Reply — make.fun one-liner entry.
// The grader runs this file; it writes the entry line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The line is kept as one constant so the output is byte-for-byte
// identical on every run — no randomness, no network, no extra text.

const LINE =
  "I am on vacation, finally. Please do not email me. My auto-reply is the only thing I have not automated, and frankly, it shows.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
