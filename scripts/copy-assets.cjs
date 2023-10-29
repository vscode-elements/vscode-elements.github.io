const fs = require("fs");
const util = require("util");

cp = util.promisify(fs.copyFile);

const main = async () => {
  await cp('node_modules/@vsc-elements/elements/dist/bundled.js', 'public/bundled.js');
  await cp('node_modules/@vsc-elements/elements/custom-elements.json', 'data/custom-elements.json');
  await cp('node_modules/@vscode/codicons/dist/codicon.css', 'public/codicon.css');
  await cp('node_modules/@vscode/codicons/dist/codicon.ttf', 'public/codicon.ttf');
}

main();
