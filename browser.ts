import { node_modules, browser_builtins } from "./builtins";
import { convertAll, convertImports, convertExports } from "./convert";
import is_json from "./is_json";

const stringy = (value) => typeof value === "string";
const { log } = console;

const environ = typeof window !== "undefined" && window;
const globe = environ || (typeof global !== "undefined" && global) || {};
const CDN = "http://wzrd.in/standalone/";

function createPath(url, dir) {
  url = url.split(/(?<=\w)\//);
  dir.split("/").forEach((path) => {
    if (path === ".") return --url.length;
    else if (path === "..") return url.splice(-2);
    url.push(path);
  });
  return url.filter(Boolean).join("/");
}

function quest(url: string, path: string, key?): [string, string] {
  return path.startsWith(".")
    ? [path, createPath(url, path)]
    : path.endsWith("/")
    ? [path, path + path.split("/").filter(Boolean).pop()]
    : node_modules.hasOwnProperty(path)
    ? [path, node_modules[path]]
    : [key || path, path];
}

function refresh(match, url: string): [string, string] {
  return match
    .map((path) => {
      const find = /.*require\([`'"](?<module>.*)["'`]\).*/;
      return path.replace(find, "$<module>");
    })
    .map((dir) => quest(url, dir));
}

const globalObject = (function async() {
  return { aforolagba: new Map(), track: [], deps: {} };
})();

function sandbox(src, dependency?) {
  const module = { exports: {}, __esModule: true };
  const context = Object.fromEntries(globalObject.aforolagba);
  const args = [globe, module.exports, module, window, context];

  try {
    new Function(
      "global",
      "exports",
      "module",
      "window",
      "aforolagba",
      src
    ).apply(context, args);

    return module.exports;
  } catch (err) {
    console.log(dependency, err);
    console.log(src);
  }
}

async function fetch_retry(url, options?, n = 3) {
  return fetch(url, options).catch(async function (err) {
    if (!n) throw err;
    return fetch_retry(url, options, --n);
  });
}

async function promise(hrefs: [string, any][], domain: string) {
  return await Promise.all(
    hrefs.map(async ([name, href]) => {
      const isHTTP = href.startsWith("http");
      const unsecure = isHTTP ? href.replace("https", "http") : "";
      const desert = href.startsWith("@") || href.indexOf("^") != -1;
      const prefix = desert ? "http://unpkg.com/" : domain;
      const resource = isHTTP ? unsecure : `${prefix}${href}`;
      const data = await fetch_retry(resource);
      return { name, url: data.url, value: await data.text() };
    }) as Promise<{ name: string; url: string; value: string }>[]
  ).catch((err) => {
    console.log(err);
    return Promise.reject(err);
  });
}

async function request(hrefs: [string, string][], domain = CDN) {
  const { aforolagba, track, deps } = globalObject;
  hrefs = hrefs.filter(([name]) => !aforolagba.has(name));
  await promise(hrefs, domain).then(async function (data) {
    await Promise.all(
      data.map(async function ({ value, name, url }) {
        const requirement = /require\([`'"](?<mod>[^`'"]+)[`'"]\)/;
        const regex = /(?<=.*[\s(])require\([`'"](?<mod>[^`'"]+)[`'"]\)/g;
        const unstrict = (src) => src.replace(/.use strict.;?[\s]*/, "");
        const req = (item) => item.replace(requirement, "$<mod>");

        if (stringy(value)) {
          value = convertAll(unstrict(value));
          aforolagba.set(name, value.replace(regex, `aforolagba['$<mod>']`));

          if (
            !browser_builtins.includes(name) &&
            /.*[\s(]require\([`'"][^`'"]+["'`]\).*/.test(value)
          ) {
            deps[name] = Array.from(new Set(value.match(regex).map(req)));
            track.push(refresh(value.match(regex), url));
          } else if (is_json(value)) aforolagba.set(name, JSON.parse(value));
          else aforolagba.set(name, sandbox(value, name));
        } else aforolagba.set(name, value);
      })
    ).catch((err) => (log(err), Promise.reject()));
  });
}

async function getDependencies(href, domain = CDN) {
  await request(href, domain);
  const { track, deps } = globalObject;
  if (track.length) return getDependencies(track.pop());
  return Array.from(new Set(Object.values(deps).flat())).filter(
    (key: string) => !globe.hasOwnProperty(key)
  );
}

async function fetcher(
  search: { [namespace: string]: string },
  domain = CDN
) {
  const { aforolagba, deps } = globalObject;
  const change = ([key, path]) => quest(domain, path, key);
  const href = Object.entries(search).map(change);
  let store = <Array<string>>await getDependencies(href, domain);

  for (let i = 0; i < store.length; i++) {
    store = store.filter((key) => {
      const getValue = (name) => aforolagba.get(name);
      if (stringy(getValue(key))) {
        if (
          deps.hasOwnProperty(key) &&
          deps[key].some((child) => stringy(getValue(child)))
        )
          return true;
        return aforolagba.set(key, sandbox(getValue(key), key)), false;
      } else return false;
    });
  }

  // for cases of cyclic dependencies
  if (store.length) await request(store.map((e) => [e, CDN + e]));
  Array.from(aforolagba).forEach(function ([name, value]) {
    if (stringy(value)) aforolagba.set(name, sandbox(value, name));
  });

  for (let module in search) search[module] = aforolagba.get(module);
  return search;
}

/**
 * Fetches NPM packages from the web
 * @param href - key-value pair of module name and namespace
 * @param domain - CDN for fetching modules
 */
export default async function oracle(
  pattern: { [namespace: string]: string },
  domain?: string
) {
  return (await fetcher(pattern, domain || CDN)) as {
    [namespace: string]: any;
  };
}

oracle.convertImports = convertImports;
oracle.convertExports = convertExports;
oracle.convertAll = convertAll;
