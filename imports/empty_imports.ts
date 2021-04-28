/**
 * @description Converts all empty imports to require
 * @param {string} content Initial file content
 * @returns {string} Converted file content
 * @example import 'src/my_lib'; // require("src/my_lib");
 */

export default function empImpt(content: string) {
  const regexp = /import .[.\\\w/:]+["'`];?/g
  const slot = [
    /import (?<name>.[.\\\w/:]+["'`]).*/,
    `new Function("require($<name>)")()`,
  ]
  const worker = match => [match, match.replace(...slot)]
  return this.appease(content, regexp, worker)
}
