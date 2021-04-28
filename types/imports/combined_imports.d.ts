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
export default function combinedImpt(content: string): any;
