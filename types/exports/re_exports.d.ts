/**
 * @description Converts all * re-exports to module.exports
 * @param {string} content Initial file content
 * @returns {string} Converted file content
 * @example export * from '../src/ind3x.js'
 */
declare function reExpEvConv(content: string): any;
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
declare function reExpClauseConv(content: string): any;
declare const _default: {
    reExpEvConv: typeof reExpEvConv;
    reExpClauseConv: typeof reExpClauseConv;
};
export default _default;
