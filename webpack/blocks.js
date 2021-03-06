const fs = require("fs");
const path = require("path");
/**
 * @export
 * @param {string} dirname
 * @return {array}
 */
module.exports = dirname => {
  const blocksAssets = new Array();
  const blocksPath = path.join(dirname, "resources", "blocks");
  const blocks = fs.readdirSync(blocksPath).filter(el => "." !== el.charAt(0));
  blocks.forEach(block => {
    blocksAssets[block] = new Array();
    const basePath = path.join(dirname, "resources", "blocks", block);
    const files = [
      "./assets/scripts/admin.js",
      "./assets/styles/admin.scss",
      "./assets/scripts/public.js",
      "./assets/styles/public.scss"
    ]
      .filter(file => {
        return fs.existsSync(path.join(basePath, file));
      })
      .forEach(el => {
        blocksAssets.push(path.join("resources", "blocks", block, el));
      });
  });
  return blocksAssets;
};
