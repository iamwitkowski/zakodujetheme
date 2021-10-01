/**
 * Script generates the new gutenberg block.
 *
 * 
 */
const fs = require("fs-extra");
const replace = require("replace-in-file");

const pascalCase = require("change-case").pascalCase;
const paramCase = require("change-case").paramCase;

const args = process.argv.slice(2);
const name = args[0];

const base = {
  id: `base`,
  class: `Base`,
  path: `resources/blocks/base`
};

const block = {
  id: paramCase(name),
  class: pascalCase(name),
  path: `resources/blocks/${paramCase(name)}`
};

const run = async () => {
  if (name) {
    await fs.copy(base.path, block.path);
    await fs.move(
      `${block.path}/src/${base.class}.php`,
      `${block.path}/src/${block.class}.php`
    );
    await replace({
      files: [
        `${block.path}/template.blade.php`,
        `${block.path}/src/${block.class}.php`,
        `${block.path}/assets/styles/public.scss`,
        `${block.path}/assets/scripts/public.js`
      ],
      from: [base.class, `'${base.class}'`, `block-${base.id}`],
      to: [block.class, `'${block.class}'`, `block-${block.id}`]
    });
  } else {
    console.error("Please provide the block name!");
  }
};

run();
