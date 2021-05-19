export declare function convertImports(str: string): string;
export declare namespace convertImports {
    var emptyImports: {
        empImpt: typeof import("./imports/empty_imports").empImpt;
    };
    var defaultImports: {
        defImpt: typeof import("./imports/default_imports").defImpt;
    };
    var namedImports: {
        namedImpt: typeof import("./imports/named_imports").namedImpt;
    };
    var namespaceImports: {
        namespaceImpt: typeof import("./imports/namespace_imports").namespaceImpt;
    };
    var combinedImports: {
        combinedImpt: typeof import("./imports/combined_imports").combinedImpt;
    };
}
export declare function convertExports(str: string): string;
export declare namespace convertExports {
    var defaultExports: {
        defConv: typeof import("./exports/default_exports").defConv;
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
export declare function convertAll(str: string): string;
