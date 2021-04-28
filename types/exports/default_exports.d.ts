/**
 * @description Converts all default exports to module.exports
 * @param {string} content Initial file content
 * @returns {string} Converted file content
 * @example export default (function () {});
 * // module.exports = (function () {});
 */
export default function defConv(content: string): any;
