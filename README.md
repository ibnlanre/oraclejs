# OracleJS

[![TypeScript][typescript-badge]][typescript]
[![code style: prettier][prettier-badge]][prettier]
![version][version-badge]
[![Twitter][twitter-badge]][twitter]

```markdown
require("packages") in the browser without the need to compile first.
```

---

Since OracleJS relies on the search pattern of [unpkg][unpkg], you can fetch packages using either only its name (to get the latest version), a fixed version (`pkg@0.0.3`), a [semver][semver] range (`pkg^2`) or a [tag][tag]. To learn more about how to do this, visit [www.unpkg.com][unpkg]. Alternatively, you may specify the address to the JS file directly, whether hosted on your personal website, [GitHub][github] or a [Content Delivery Network (CDN)][cdn].

Note:

1. that this version can only correctly parse **_required_** JS/JSON files, and no other.
2. that heavy packages with lots of dependencies would eventually consume the heap.

---

## Install

```bash
npm i oraclejs
```

## Browser

Oracle returns a promise, so it can be used with `.then()` and `.catch()` methods

```javascript
<script src="https://unpkg.com/oraclejs"></script>
<script defer>
  oracle({
    deepObject: "deep-object",
    setValue: "set-value@3.0.2",
    lodash_set: "https://cdn.jsdelivr.net/npm/lodash.set@4.3.2/index.js"
  }).then((module) => {
    const obj = { a: 2, b: 1, c: 4 };
    const { lodash_set } = module; // employ a destructuring assignment

    module.setValue(obj, "a", 5) // can be accessed from the module object
    deepObject.set(obj, "b", 3) // automatically attached to the window object
    lodash_set(obj, "c", 9) // function becomes local overriding the global

    console.log(obj) // {a: 5, b: 3, c: 9}
  })
</script>
```

Alternatively, it can be run using async-await

```javascript
<script>
  (async () => {
    const module = await oracle({ deepProp: "deep-property" })
    module.deepProp.set({ c: 20 }, "c", 6) // { c: 6 }
  })()
</script>
```

## Usage

```javascript
// ES6 Import
import oracle from "oraclejs";
import { convertExports, convertImports } from "oraclejs";

// NodeJS Require
const oracle = require("oraclejs");
const { convertAll } = require("oraclejs");
```

## API

OracleJS also exposes other internal APIs for converting ES6 modules to CommonJS modules

### `.convertAll()`

This converts all static imports and exports to NodeJS requires

```javascript
import { convertAll } from "oraclejs";
```

### `.convertExports()`

This converts all static `export` syntax to `module.exports` and it comes with three methods.

```javascript
import { convertExports } from "oraclejs";
```

- `.defaultExports()`

  ```javascript
  const { defaultExports } = convertExports;

  // module.exports = function* myGenFunc() {}
  defaultExports("export function* myGenFunc() {}");
  ```

- `.namedExports()`

  ```javascript
  const { namedExports } = convertExports;

  // module.exports.myGenFunc = function* myGenFunc() {}
  namedExports("export function* myGenFunc() {}");
  ```

- `.reExports()`

  ```javascript
  const { reExports } = convertExports;

  // const { foo: default } = require('src/other_module');
  // module.exports.default = default;
  reExports("export { foo as default } from 'src/other_module'");
  ```

### `.convertImports()`

This converts all static `import` syntax to `require` and it comes with the following methods.

```javascript
import { convertImports } from "oraclejs";
```

- `.combinedImports()`

  ```javascript
  const { combinedImports } = convertImports;

  // const theDefault = require('src/my_lib');
  // const my_lib = Object.entries(require('src/my_lib'))
  //  .reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {})
  combinedImports("import theDefault, * as my_lib from 'src/my_lib'");
  ```

- `.defaultImports()`

  ```javascript
  const { defaultImports } = convertImports;

  // const localName = require('src/my_lib');
  combinedImports("import localName from 'src/my_lib'");
  ```

- `.emptyImports()`

  ```javascript
  const { emptyImports } = convertImports;

  // new Function("require('src/my_lib')")()
  emptyImports("import 'src/my_lib'");
  ```

- `.namedImports()`

  ```javascript
  const { namedImports } = convertImports;

  // const { name1, name2 } = require('src/my_lib');
  namedImports("import { name1, name2 } from 'src/my_lib'");
  ```

- `.namespaceImports()`

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
[twitter]: https://twitter.com/intent/follow?screen_name=ibnlanre
[twitter-badge]: https://img.shields.io/twitter/follow/ibnlanre?style=social&label=Follow
[typescript]: http://www.typescriptlang.org/
[typescript-badge]: https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg
[unpkg]: https://www.unpkg.com/
[version-badge]: https://img.shields.io/badge/version-0.0.3-orange
