const fs = require("fs");
const util = require("util");

cp = util.promisify(fs.copyFile);

const main = async () => {
  await cp('node_modules/@vscode-elements/elements/custom-elements.json', 'src/data/custom-elements.json');
  await cp('node_modules/@vscode/codicons/dist/codicon.css', 'public/codicon.css');
  await cp('node_modules/@vscode/codicons/dist/codicon.ttf', 'public/codicon.ttf');
}

main();
