import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const OUTPUT_PATH = OUTPUT_DIR + "/" + OUTPUT_FILE;

const EMOJI_HIGH = "\uD83D";
const EMOJI_LOW = "\uDC19";
const ENTRY = EMOJI_HIGH + EMOJI_LOW;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
