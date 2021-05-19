declare function oracle(pattern: {
    [namespace: string]: string;
}, domain?: string): Promise<{
    [namespace: string]: any;
}>;
declare namespace oracle {
    declare function convertImports(str: string): string;
    declare namespace convertImports {
        declare function empImpt(content: string): any;
        declare const _default: {
            empImpt: typeof empImpt;
        };
        var emptyImports: {
            empImpt: typeof empImpt;
        };
        declare function defImpt(content: string): any;
        declare const _default: {
            defImpt: typeof defImpt;
        };
        var defaultImports: {
            defImpt: typeof defImpt;
        };
        declare function namedImpt(content: string): any;
        declare const _default: {
            namedImpt: typeof namedImpt;
        };
        var namedImports: {
            namedImpt: typeof namedImpt;
        };
        declare function namespaceImpt(content: string): any;
        declare const _default: {
            namespaceImpt: typeof namespaceImpt;
        };
        var namespaceImports: {
            namespaceImpt: typeof namespaceImpt;
        };
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
