type module_name = string;

import node_builtins from "./builtins";
import { convertAll, convertImports, convertExports } from "./convert";

const { log } = console;
const windowExists = typeof window !== "undefined" && window;
const cross =
  (typeof global !== "undefined" &&
    typeof require !== "undefined" &&
    require("cross-fetch")) ||
  fetch;

function destrict(src) {
  return src.replace(/.use strict.;?[\s]*/, "");
}

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
  const find = /.*require\([`'"](?<module>.*)["'`]\).*/;
  path = path.replace(find, "$<module>");
  return path.startsWith(".")
    ? [path, createPath(url, path)]
    : path.endsWith("/")
    ? [path, path + path.split("/").filter(Boolean).pop()]
    : node_builtins.hasOwnProperty(path)
    ? [path, node_builtins[path]]
    : [key || path, path];
}

const globalObject = (function () {
  const aforolagba = new Map();
  for (let index in globalThis) aforolagba.set(index, globalThis[index]);
  return { aforolagba, track: [], exists: {} };
})();

function sandbox(src) {
  const { aforolagba } = globalObject;
  const context = Object.fromEntries(aforolagba);
  try {
    const { window: globe } = windowExists || require("browser-env");
    const module = { exports: {}, __esModule: true };
    const { exports } = module;
    const args = [globalThis, exports, module, globe, context];

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
    console.log(err);
  }
}

async function fetch_retry(url, options?, n = 3) {
  return cross(url, options).catch(async function (err) {
    if (!n) throw err;
    return fetch_retry(url, options, --n);
  });
}

async function promise(hrefs: [string, string][], domain: string) {
  return await Promise.all(
    hrefs.map(async ([name, href]) => {
      const isHTTP = href.startsWith("http");
      const unsecure = isHTTP ? href.replace("https", "http") : "";
      const link = isHTTP ? unsecure : `${domain}${href}`;
      const data = await fetch_retry(link);
      let value = await data.text();
      if (href.endsWith(".json")) value = Function(`return ${value}`)();
      const url = data.url;
      return { name, url, value };
    }) as Promise<{ name: string; url: string; value: string }>[]
  ).catch((err) => {
    log(err);
    return Promise.reject(err);
  });
}

async function request(href: [string, string][], domain: string, note = []) {
  const { aforolagba, track, exists } = globalObject;
  href.forEach(function ([name], i) {
    if (!aforolagba.has(name)) note.push(href[i]);
  });

  if (!note.length) return;
  await promise(note, domain).then(async function (data) {
    await Promise.all(
      data.map(async function (base) {
        let { value, name, url } = base;
        let regexp = /(?<=.*[\s(])require\([`'"](?<mod>[^`'"]+)[`'"]\)/g;
        let requirement = /require\([`'"](?<mod>[^`'"]+)[`'"]\)/;
        let exchange = "aforolagba['$<mod>']";

        const req = (item) => item.replace(requirement, "$<mod>");
        const change = (dir) => quest(url, dir);

        if (typeof value === "string") {
          aforolagba.set(name, (value = convertAll(destrict(value))));
          aforolagba.set(name, value.replace(regexp, exchange));

          if (value.startsWith("Cannot find")) log(`${name}: ${value}`);
          if (/.*[\s(]require\([`'"][^`'"]+["'`]\).*/.test(value)) {
            exists[name] = Array.from(new Set(value.match(regexp).map(req)));
            track.push(value.match(regexp).map(change));
          }
        } else aforolagba.set(name, value);
      })
    ).catch((err) => (log(err), Promise.reject()));
  });
}

async function middleman(href, domain) {
  await request(href, domain);
  const { aforolagba, track } = globalObject;
  const req = async (each) => await request(each, domain);
  while (track.length) {
    await Promise.all(track.splice(0).map(req));
  }
  return aforolagba;
}

function trampoline(key, ref, exists, db = []) {
  let stack = [];

  function query(item) {
    db.push(item);
    const res = exists[item];
    const checkArr = Array.isArray(res);
    if (checkArr)
      res.forEach(function (item) {
        const isStr = typeof ref.get(item) === "string";
        if (isStr) stack.push(item);
      });
  }

  query(key);
  while (stack.length) query(stack.pop());
  return db;
}

async function fetcher(
  search: { [namespace: string]: module_name },
  domain: string
) {
  const change = ([key, path]) => quest(domain, path, key);
  const href = Object.entries(search).map(change);
  await middleman(href, domain);
  const { aforolagba, exists } = globalObject;

  function decipher([key, value]) {
    if (typeof value === "string") {
      if (!exists.hasOwnProperty(key)) {
        aforolagba.set(key, sandbox(value));
      } else {
        const getter = trampoline(key, aforolagba, exists);
        getter.reverse().forEach(get);
      }
    }
  }

  function get(dependency) {
    const depValue = aforolagba.get(dependency);
    if (typeof depValue === "string") {
      aforolagba.set(dependency, sandbox(depValue));
    }
  }

  Array.from(aforolagba)
    .filter(([key, value]) => !globalThis.hasOwnProperty(key))
    .reverse()
    .forEach(decipher);

  for (let module in search) search[module] = aforolagba.get(module);
  return search;
}

/**
 * Fetches NPM packages from the web
 * @param href - key-value pair of module name and namespace
 * @param domain - cdn to get module e.g. https://unpkg.com/
 */
export default async function oracle(
  pattern: { [namespace: string]: module_name },
  domain = "http://www.unpkg.com/"
) {
  const href = await fetcher(pattern, domain);
  for (let key in href) globalThis[key] = href[key];
  return href;
}

oracle.convertImports = convertImports;
oracle.convertExports = convertExports;
oracle.convertAll = convertAll;
