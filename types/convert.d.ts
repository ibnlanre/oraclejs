import defExports from "./exports/default_exports";
import combImports from "./imports/combined_imports";
import defImports from "./imports/default_imports";
import nsImports from "./imports/namespace_imports";
export declare function convertImports(str: string): string;
export declare namespace convertImports {
    var emptyImports: typeof import("./imports/empty_imports").default;
    var defaultImports: typeof defImports;
    var namedImports: typeof import("./imports/named_imports").default;
    var namespaceImports: typeof nsImports;
    var combinedImports: typeof combImports;
}
export declare function convertExports(str: string): string;
export declare namespace convertExports {
    var defaultExports: typeof defExports;
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
