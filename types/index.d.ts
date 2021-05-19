declare function oracle(pattern: {
    [namespace: string]: string;
}, domain?: string): Promise<{
    [namespace: string]: any;
}>;
declare namespace oracle {
    var convertImports: typeof import("./convert").convertImports;
    var convertExports: typeof import("./convert").convertExports;
    var convertAll: typeof import("./convert").convertAll;
}
export default oracle;
