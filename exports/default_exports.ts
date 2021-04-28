/**
 * @description Converts all default exports to module.exports
 * @param {string} content Initial file content
 * @returns {string} Converted file content
 * @example export default (function () {});
 * // module.exports = (function () {});
 */
export function defConv(content: string) {
  const regexp = /export default .*/g
  const slot = [
    /export default (?<module>.*)/,
    "module.exports = $<module>",
  ]
  const worker = match => [match, match.replace(...slot)]
  return this.appease(content, regexp, worker)
}

export default { defConv }
