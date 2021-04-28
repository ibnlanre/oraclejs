/**
 * @description Converts all combined imports to require
 * @param {string} content Initial file content
 * @returns {string} Converted file content
 * @example
 * import theDefault, * as my_lib from "src/my_lib";
 * // const theDefault = require("src/my_lib");
 * // const my_lib = Object.entries(require(src/my_lib))
 * //   .reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {})
 *
 * import theDefault, { name1 as n1, name2 } from "src/my_lib
 * // const theDefault = require("src/my_lib");
 * // const { name1: n1, name2 } = require("src/my_lib");
 */
export function combinedImpt(content: string) {
  const regexp = /import \w+, (.*) from .*/g;
  const worker = function (match) {
    let replacement = match
      .match(/(?<=import )(.*)(?= from)/g)[0]
      .replace(",", "!")
      .split("!")
      .map(function (each) {
        if (/.+\* as (?<key>\w+).+/.test(each)) return withNsImpt();
        else if (/.?{.*}/.test(each)) return withNamedImpt(each);
        else return withDefImpt(each);
      })
      .join("\n");

    function withNsImpt() {
      const slot = [
        /.*as (?<ns>\w+).*from (?<file>.[.\\\w/:]+.).*/,
        `const $<ns> = Object.entries(require($<file>))\n` +
          ` .reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {})`,
      ];
      return match.replace(...slot);
    }

    function withDefImpt(def) {
      const slot = [
        /.*from (?<name>.[.\\\w/:]+.);?/,
        `const ${def} = require($<name>);`,
      ];
      return match.replace(...slot);
    }

    function withNamedImpt(named) {
      let imported = named
        .match(/(?<={.*)(\w.*\w)(?=.*})/g)[0]
        .split(", ")
        .map(function (module) {
          if (/\w+ as \w+/.test(module)) {
            let regexp = /(?<module>[\w]+) as (?<key>[\w]+)/;
            return module.replace(regexp, "$<module>: $<key>");
          } else return module;
        });
      const slot = [
        /.*from (?<name>.[.\\\w/:]+.);?/,
        `const { ${imported.join(", ")} } = require($<name>);`,
      ];
      return match.replace(...slot);
    }

    return [match, replacement];
  };
  return this.appease(content, regexp, worker);
}

export default { combinedImpt }