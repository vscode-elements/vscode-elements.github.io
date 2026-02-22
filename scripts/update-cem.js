import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const src = path.resolve(
  __dirname,
  "../node_modules/@vscode-elements/elements/custom-elements.json"
);
const destDir = path.resolve(__dirname, "../src/data");
const dest = path.join(destDir, "custom-elements.json");

fs.mkdirSync(destDir, { recursive: true });
fs.copyFileSync(src, dest);

console.log("custom-elements.json copied to src/data");
