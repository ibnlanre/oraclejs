/**
 * @description Converts all default imports to require
 * @param {string} content Initial file content
 * @returns {string} Converted file content
 * @example
 * import localName from 'src/my_lib';
 * const localName = require("src/my_lib");
 */
export function defImpt(content: string) {
  const regexp = /import \w+ from .*/g
  const slot = [
    /import (?<variable>\w+) from (?<file>.[.\\\w/:]+["'`]).*/,
    "const $<variable> = require($<file>);",
  ]
  const worker = match => [match, match.replace(...slot)]
  return this.appease(content, regexp, worker)
}

export default { defImpt }
