/**
 * @description Converts all namespace imports to require
 * @param {string} content Initial file content
 * @returns {string} Converted file content
 * @example import * as my_lib from "src/my_lib";
 * // const my_lib = Object.entries(require(src/my_lib))
 * //   .reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {})
 */
export function namespaceImpt(content: string) {
  const regexp = /import \* as \w+ from .*/g;
  const slot = [
    /.*as (?<ns>\w+).*from (?<file>.[.\\\w/:]+.).*/,
    `const $<ns> = Object.entries(require($<file>))\n` +
      ` .reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {})`,
  ];
  const worker = (match) => [match, match.replace(...slot)];
  return this.appease(content, regexp, worker);
}

export default { namespaceImpt }
