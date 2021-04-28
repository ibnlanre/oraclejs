/**
 * @description Converts all exported variable declarations to module.exports
 * @param {string} content Initial file content
 * @returns {string} Converted file content
 * @example
 * export let foo // module.exports.foo
 * export const bar = "qaz" // module.exports.bar = "qaz"
 */
function varConv(content: string) {
  const regexp = /export (let|var|const) .*/g
  const slot = [
    /.*(let|var|const) (?<variable>.*)/,
    "module.exports.$<variable> = undefined",
  ]
  const worker = match => [match, match.replace(...slot)]
  return this.appease(content, regexp, worker)
}

/**
 * @description Converts all exported function declarations to module.exports
 * @param {string} content Initial file content
 * @returns {string} Converted file content
 * @example
 * export function* myGenFunc() {} // module.exports.myGenFunc = function* ...
 * export function funky() { return "hello world" } // module.exports.funky ...
 * export async function wow() { return "damn" } // module.exports.wow = async...
 */
function fnConv(content: string) {
  const regexp = /export (async )?function.*/g
  const slot = [
    /export (?<initial>.*)(?<main>function\*? )(?<name>\w+)(?<rest>.*)/,
    "module.exports.$<name> = $<initial>$<main>$<name>$<rest>",
  ] // name is retained in front of the function so it isn't anonymous
  const worker = match => [match, match.replace(...slot)]
  return this.appease(content, regexp, worker)
}

/**
 * @description Converts all exported class declarations to module.exports
 * @param {string} content Initial file content
 * @returns {string} Converted file content
 * @example
 * export class MyClass {}
 */
function classConv(content: string) {
  const regexp = /export class .*/g
  const slot = [
    /export class (?<name>\w+)(?<rest>.*)/,
    "module.exports.$<name> = class $<name>$<rest>",
  ]
  const worker = match => [match, match.replace(...slot)]
  return this.appease(content, regexp, worker)
}

export default { varConv, fnConv, classConv }