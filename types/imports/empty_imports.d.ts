/**
 * @description Converts all empty imports to require
 * @param {string} content Initial file content
 * @returns {string} Converted file content
 * @example import 'src/my_lib'; // require("src/my_lib");
 */
export default function empImpt(content: string): any;
