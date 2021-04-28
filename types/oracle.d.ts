declare type module_name = string;
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
    var convertImports: typeof import("./convert").convertImports;
    var convertExports: typeof import("./convert").convertExports;
    var convertAll: typeof import("./convert").convertAll;
}
export default oracle;
