/**
 * @description Converts all named imports to require
 * @param {string} content Initial file content
 * @returns {string} Converted file content
 * @example
 * import { name1, name2 as n2 } from 'src/my_lib';
 * // const { name1, name2: n2 } = require("./src/my_lib");
 */
export default function namedImpt(content: string) {
  const regexp = /import {.*} from .*/g
  const worker = function (match) {
    const imported = match
      .match(/(?<={.*)(\w.*\w)(?=.*})/g)[0]
      .split(", ")
      .map(function (module) {
        if (/\w+ as \w+/.test(module)) {
          let regexp = /(?<module>[\w]+) as (?<key>[\w]+)/
          return module.replace(regexp, "$<module>: $<key>")
        } else return module
      })
    const slot = [
      /.* from (?<name>.[.\\\w/:]+.);?/,
      `const { ${imported.join(", ")} } = require($<name>);`,
    ]
    return [match, match.replace(...slot)]
  }
  return this.appease(content, regexp, worker)
}
