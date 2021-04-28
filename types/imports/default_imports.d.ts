/**
 * @description Converts all default imports to require
 * @param {string} content Initial file content
 * @returns {string} Converted file content
 * @example
 * import localName from 'src/my_lib';
 * const localName = require("src/my_lib");
 */
export default function defImpt(content: string): any;
