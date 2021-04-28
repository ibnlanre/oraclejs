/**
 * @description Converts all * re-exports to module.exports
 * @param {string} content Initial file content
 * @returns {string} Converted file content
 * @example export * from '../src/ind3x.js'
 */
function reExpEvConv(content: string) {
  const regexp = /export \* from .*/g
  const slot = [
    /export \* from (?<name>.[.\\\w/:]+.)/,
    "Object.entries(require($<name>)).forEach(\n" +
      " ([name, exported]) => (module.exports[name] = exported)\n" +
      ")",
  ]
  const worker = match => [match, match.replace(...slot)]
  return this.appease(content, regexp, worker)
}

/**
 * @description Converts all re-exports and named exports   with clause to module.exports
 * @param {string} content Initial file content
 * @returns {string} Converted file content
 * @example
 * export { foo as myFoo, bar } from 'src/other_module';
 * // const { foo: myFoo, bar } = require('src/other_module')
 * // module.exports.myFoo = myFoo;
 * // module.exports.bar = bar;
 */
function reExpClauseConv(content: string) {
  const regexp = /export {.*}( from .*)?/g
  const worker = function (match) {
    const hasFrom = match.includes("from")
    const exported = match
      .match(/(?<={.*)(\w.*\w)(?=.*})/g)[0]
      .split(", ")
      .map(function (module) {
        if (/\w+ as \w+/.test(module)) {
          let regexp = /(?<module>[\w]+) as (?<key>[\w]+)/
          return module.replace(regexp, "$<module>: $<key>")
        } else return module
      })
    const next = exported.map(function (each) {
      return hasFrom ? each.split(": ").pop() : each.split(": ")
    })
    const copy = next
      .map(function (each) {
        return hasFrom
          ? `module.exports.${each} = ${each};`
          : `module.exports.${each[1] || each[0]} = ${each[0]}`
      })
      .join("\n")
    const slot = hasFrom
      ? [
          /.* from (?<name>.[.\\\w/:]+.);?/,
          `const { ${exported.join(", ")} } = require($<name>);\n` + copy,
        ]
      : [/.*/, copy]
    return [match, match.replace(...slot)]
  }
  return this.appease(content, regexp, worker)
}

export default { reExpEvConv, reExpClauseConv };
