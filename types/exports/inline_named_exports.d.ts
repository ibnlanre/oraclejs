/**
 * @description Converts all exported variable declarations to module.exports
 * @param {string} content Initial file content
 * @returns {string} Converted file content
 * @example
 * export let foo // module.exports.foo
 * export const bar = "qaz" // module.exports.bar = "qaz"
 */
declare function varConv(content: string): any;
/**
 * @description Converts all exported function declarations to module.exports
 * @param {string} content Initial file content
 * @returns {string} Converted file content
 * @example
 * export function* myGenFunc() {} // module.exports.myGenFunc = function* ...
 * export function funky() { return "hello world" } // module.exports.funky ...
 * export async function wow() { return "damn" } // module.exports.wow = async...
 */
declare function fnConv(content: string): any;
/**
 * @description Converts all exported class declarations to module.exports
 * @param {string} content Initial file content
 * @returns {string} Converted file content
 * @example
 * export class MyClass {}
 */
declare function classConv(content: string): any;
declare const _default: {
    varConv: typeof varConv;
    fnConv: typeof fnConv;
    classConv: typeof classConv;
};
export default _default;
