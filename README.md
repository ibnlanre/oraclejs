# OracleJS

[![TypeScript][typescript-badge]][typescript]
[![code style: prettier][prettier-badge]][prettier]
![version][version-badge]

```markdown
require("packages") in the browser without the need to compile first.
```

---

OracleJS can fetch packages using either of the following patterns:

- its name (`pkg`), to get the latest version
- a fixed version (`pkg@3.2.1`)
- a [semver][semver] range (`pkg^2`)
- or a [tag][tag] (`pkg@2.0.1-beta`)

To learn more about how to do this, visit [www.unpkg.com][unpkg]. Alternatively, you may specify the address to the JS file directly, whether hosted on your personal website, [GitHub][github] or a [Content Delivery Network (CDN)][cdn].

---

## Install

```bash
npm i oraclejs
```

## Browser

```javascript
<script src="https://unpkg.com/oraclejs"></script>
<script>window.test = { }; // dummy object</script>
```

Oracle returns a promise, therefore it can be used with `.then()` and `.catch()` methods

```javascript
<script>
  oracle({
    deepObject: "deep-object",
    setValue: "set-value@3.0.2",
  }).then(function (imports) {
    const { deepObject, setValue } = imports;
    deepObject.set(test, "a", 1)
    setValue(test, "b", 2)
  })
</script>
```

Also, rather than using the default CDN, you may specify another as a replacement for fetching named packages. The formula is `CDN + package_name`, so make sure to cross-check the URL resolution result in a browser before using.

```javascript
<script>
  oracle(
    {
      lodash_set: "lodash.set@4.3.2/index.js",
      setPath:
        "https://raw.githubusercontent.com/skratchdot/object-path-set/master/index.js",
    },
    "https://cdn.jsdelivr.net/npm/"
  ).then((imports) => {
    const { lodash_set, setPath } = imports;
    lodash_set(test, "c", 3)
    setPath(test, "d", 4)
  })
</script>
```

Alternatively, it can be run using async-await

```javascript
<script>
  (async () => {
    const imports = await oracle({ deepProp: "deep-property" })
    imports.deepProp.set(test, "e", 5)
  })()
</script>
```

## Import

```javascript
// For strict browser use
import oracle from "oraclejs/browser";

// ES6 Import
import oracle from "oraclejs";
import { convertExports, convertImports } from "oraclejs";

// NodeJS Require
const oracle = require("oraclejs");
const { convertAll } = require("oraclejs");
```

## API

```javascript
oracle({ typeOf: "@ibnlanre/typeof" })
  .then(() => { typeOf(null) } // "null"
```

### `.convertAll(code)`

This converts all static imports and exports to NodeJS requires

```javascript
import { convertAll } from "oraclejs";
```

---

### `.convertExports(code)`

This converts all static `export` syntax to `module.exports` and it comes with three methods.

```javascript
import { convertExports } from "oraclejs";
```

`.defaultExports(code)`

```javascript
const { defaultExports } = convertExports;

// module.exports = function* myGenFunc() {}
defaultExports("export function* myGenFunc() {}");
```

`.namedExports(code)`

```javascript
const { namedExports } = convertExports;

// module.exports.myGenFunc = function* myGenFunc() {}
namedExports("export function* myGenFunc() {}");
```

`.reExports(code)`

```javascript
const { reExports } = convertExports;

// const { foo: default } = require('src/other_module');
// module.exports.default = default;
reExports("export { foo as default } from 'src/other_module'");
```

---

### `.convertImports(code)`

This converts all static `import` syntax to `require` and it comes with the following methods.

```javascript
import { convertImports } from "oraclejs";
```

`.combinedImports(code)`

```javascript
const { combinedImports } = convertImports;

// const theDefault = require('src/my_lib');
// const my_lib = Object.entries(require('src/my_lib'))
//  .reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {})
combinedImports("import theDefault, * as my_lib from 'src/my_lib'");
```

`.defaultImports(code)`

```javascript
const { defaultImports } = convertImports;

// const localName = require('src/my_lib');
combinedImports("import localName from 'src/my_lib'");
```

`.emptyImports(code)`

```javascript
const { emptyImports } = convertImports;

// new Function("require('src/my_lib')")()
emptyImports("import 'src/my_lib'");
```

`.namedImports(code)`

```javascript
const { namedImports } = convertImports;

// const { name1, name2 } = require('src/my_lib');
namedImports("import { name1, name2 } from 'src/my_lib'");
```

`.namespaceImports(code)`

```javascript
const { namespaceImports } = convertImports;

// const my_lib = Object.entries(require('src/my_lib'))
//   .reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {})
namespaceImports("import * as my_lib from 'src/my_lib'");
```

[cdn]: https://www.cloudflare.com/learning/cdn/what-is-a-cdn/
[github]: https://github.com/
[prettier]: https://github.com/prettier/prettier
[prettier-badge]: https://img.shields.io/badge/code_style-prettier-f8bc45.svg
[semver]: https://semver.npmjs.com/
[tag]: https://docs.npmjs.com/cli/v6/commands/npm-dist-tag
[typescript]: http://www.typescriptlang.org/
[typescript-badge]: https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg
[unpkg]: https://www.unpkg.com/
[version-badge]: https://img.shields.io/badge/version-0.1.1-orange
