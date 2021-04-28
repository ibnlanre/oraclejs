/**
 * @description Converts all namespace imports to require
 * @param {string} content Initial file content
 * @returns {string} Converted file content
 * @example import * as my_lib from "src/my_lib";
 * // const my_lib = Object.entries(require(src/my_lib))
 * //   .reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {})
 */
export default function namespaceImpt(content: string): any;
