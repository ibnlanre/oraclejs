const browser_builtins = [
  "child_process",
  "cluster",
  "dgram",
  "dns",
  "fs",
  "module",
  "net",
  "querystring",
  "readline",
  "repl",
  "stream",
  "sys",
  "timers",
  "tls",
  "url",
  "util",
  "_shims",
  "_stream_duplex",
  "_stream_readable",
  "_stream_writable",
  "_stream_transform",
  "_stream_passthrough",
];

const modules = {
  assert: "assert",
  buffer: "buffer",
  console: "console-browserify",
  constants: "constants-browserify",
  crypto: "crypto-browserify",
  domain: "domain-browser",
  events: "events",
  http: "http-browserify",
  https: "https-browserify",
  os: "os-browserify/browser.js",
  path: "path-browserify",
  process: "process/browser.js",
  punycode: "punycode",
  string_decoder: "string_decoder",
  tty: "tty-browserify",
  vm: "vm-browserify",
  zlib: "zlib-browserify",
};

const domain = "http://www.unpkg.com/";
const node_modules = Object.fromEntries(
  Object.entries(modules).map(([name, value]) => [name, domain + value])
);

export { node_modules, browser_builtins };
