type module_name = string;
/**
 * Fetches NPM packages from the web
 * @param href - key-value pair of module name and namespace
 * @param domain - cdn to get module e.g. https://unpkg.com/
 */
declare function oracle(pattern: {
    [namespace: string]: module_name;
}, domain?: string): Promise<{
    [namespace: string]: string;
}>;
declare namespace oracle {
    declare function convertImports(str: string): string;
    declare namespace convertImports {
        /**
         * @description Converts all empty imports to require
         * @param {string} content Initial file content
         * @returns {string} Converted file content
         * @example import 'src/my_lib'; // require("src/my_lib");
         */
        declare function empImpt(content: string): any;
        declare const _default: {
            empImpt: typeof empImpt;
        };
        var emptyImports: {
            empImpt: typeof empImpt;
        };
        /**
         * @description Converts all default imports to require
         * @param {string} content Initial file content
         * @returns {string} Converted file content
         * @example
         * import localName from 'src/my_lib';
         * const localName = require("src/my_lib");
         */
        declare function defImpt(content: string): any;
        declare const _default: {
            defImpt: typeof defImpt;
        };
        var defaultImports: {
            defImpt: typeof defImpt;
        };
        /**
         * @description Converts all named imports to require
         * @param {string} content Initial file content
         * @returns {string} Converted file content
         * @example
         * import { name1, name2 as n2 } from 'src/my_lib';
         * // const { name1, name2: n2 } = require("./src/my_lib");
         */
        declare function namedImpt(content: string): any;
        declare const _default: {
            namedImpt: typeof namedImpt;
        };
        var namedImports: {
            namedImpt: typeof namedImpt;
        };
        /**
         * @description Converts all namespace imports to require
         * @param {string} content Initial file content
         * @returns {string} Converted file content
         * @example import * as my_lib from "src/my_lib";
         * // const my_lib = Object.entries(require(src/my_lib))
         * //   .reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {})
         */
        declare function namespaceImpt(content: string): any;
        declare const _default: {
            namespaceImpt: typeof namespaceImpt;
        };
        var namespaceImports: {
            namespaceImpt: typeof namespaceImpt;
        };
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
        declare function combinedImpt(content: string): any;
        declare const _default: {
            combinedImpt: typeof combinedImpt;
        };
        var combinedImports: {
            combinedImpt: typeof combinedImpt;
        };
    }
    declare function convertExports(str: string): string;
    declare namespace convertExports {
        /**
         * @description Converts all default exports to module.exports
         * @param {string} content Initial file content
         * @returns {string} Converted file content
         * @example export default (function () {});
         * // module.exports = (function () {});
         */
        declare function defConv(content: string): any;
        declare const _default: {
            defConv: typeof defConv;
        };
        var defaultExports: {
            defConv: typeof defConv;
        };
        var namedExports: {
            varConv: (content: string) => any;
            fnConv: (content: string) => any;
            classConv: (content: string) => any;
        };
        var reExports: {
            reExpEvConv: (content: string) => any;
            reExpClauseConv: (content: string) => any;
        };
    }
    declare function convertAll(str: string): string;
    var convertImports$0: typeof convertImports;
    var convertExports$0: typeof convertExports;
    var convertAll$0: typeof convertAll;
}
export { oracle as default };
