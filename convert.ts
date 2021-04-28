// EXPORTS

import defExports from "./exports/default_exports";
import namedExports from "./exports/inline_named_exports";
import reExports from "./exports/re_exports";

// IMPORTS

import combImports from "./imports/combined_imports";
import defImports from "./imports/default_imports";
import emptyImports from "./imports/empty_imports";
import namedImports from "./imports/named_imports";
import nsImports from "./imports/namespace_imports";

function appease(
  content: string,
  regexp: RegExp,
  worker: (value: string) => [string, string]
) {
  function transform(content: string, changes) {
    changes.forEach(([original, replacement]) => {
      content = content.replace(original, replacement);
    });
    return content;
  }

  if (regexp.test(content)) {
    const convert = content.match(regexp).map(worker);
    return transform(content, convert);
  } else return content;
}

export function convertImports(str: string): string {
  return [
    emptyImports,
    defImports,
    namedImports,
    nsImports,
    combImports,
  ]
    .map((consult) => Object.values(consult))
    .flat()
    .reduce((acc, fn) => fn.call({ appease }, acc), str);
}

convertImports.emptyImports = emptyImports;
convertImports.defaultImports = defImports;
convertImports.namedImports = namedImports;
convertImports.namespaceImports = nsImports;
convertImports.combinedImports = combImports;

export function convertExports(str: string): string {
  return [defExports, namedExports, reExports]
    .map((consult) => Object.values(consult))
    .flat()
    .reduce((acc, fn) => fn.call({ appease }, acc), str);
}

convertExports.defaultExports = defExports;
convertExports.namedExports = namedExports;
convertExports.reExports = reExports;

export function convertAll(str: string): string {
  return [
    defExports,
    namedExports,
    reExports,
    emptyImports,
    defImports,
    namedImports,
    nsImports,
    combImports,
  ]
    .map((consult) => Object.values(consult))
    .flat()
    .reduce((acc, fn) => fn.call({ appease }, acc), str);
}
