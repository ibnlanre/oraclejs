const oracle = require("../public/index")
oracle({
  js_yaml: "js-yaml",
  setValue: "set-value",
  kindOf: "kind-of",
  typeOf: "@ibnlanre/typeof",
  benchmark: "benchmark",
  _: "lodash",
  dbcs: "https://www.unpkg.com/iconv-lite@0.6.2/encodings/dbcs-data.js",
  nodeFetch: "https://unpkg.com/node-fetch@2.6.1/lib/index.js",
}).then((module) => {
  console.log(module);
});
