import * as fs from "node:fs/promises";

async function main() {
  await fs.rm("node_modules/.vite", {
    force: true,
    recursive: true,
  });
}

main();
