/**
 * @description Converts all named imports to require
 * @param {string} content Initial file content
 * @returns {string} Converted file content
 * @example
 * import { name1, name2 as n2 } from 'src/my_lib';
 * // const { name1, name2: n2 } = require("./src/my_lib");
 */
export default function namedImpt(content: string): any;
