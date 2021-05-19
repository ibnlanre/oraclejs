const { convertAll } = require("../public/index");
const assert = require("assert");

assert.strictEqual(
  convertAll(
    "export * from 'src/other_module';"),
    `Object.entries(require('src/other_module')).forEach(
 ([name, exported]) => (module.exports[name] = exported)
);`
  )


assert.strictEqual(
  convertAll(
    "export { foo as myFoo, bar } from 'src/other_module';"),
    `const { foo: myFoo, bar } = require('src/other_module');
module.exports.myFoo = myFoo;
module.exports.bar = bar;`
  )


assert.strictEqual(
  convertAll(
    "export { default } from 'src/other_module';"),
    `const { default } = require('src/other_module');
module.exports.default = default;`
  )

assert.strictEqual(
  convertAll(
    "export { default as foo } from 'src/other_module';"),
    `const { default: foo } = require('src/other_module');
module.exports.foo = foo;`
  )

assert.strictEqual(
  convertAll(
    "export { foo as default } from 'src/other_module';"),
    `const { foo: default } = require('src/other_module');
module.exports.default = default;`
  )

assert.strictEqual(
  convertAll(
    "export { MY_CONST as FOO, myFunc };"),
    `module.exports.FOO = MY_CONST
module.exports.myFunc = myFunc;`
  )

assert.strictEqual(
  convertAll("export { foo as default };"), `module.exports.default = foo;`)

assert.strictEqual(convertAll("export var foo;"), `module.exports.foo = undefined;`)
assert.strictEqual(convertAll("export let foo;"), `module.exports.foo = undefined;`)
assert.strictEqual(convertAll("export const foo;"), `module.exports.foo = undefined;`)

assert.strictEqual(convertAll("export const PI = 3.142;"), `module.exports.PI = 3.142;`)
assert.strictEqual(convertAll("export var foo= 'bar';"), `module.exports.foo= 'bar';`)

assert.strictEqual(
  convertAll(
    "export function myFunc() {}"),
    `module.exports.myFunc = function myFunc() {}`
  )

assert.strictEqual(
  convertAll(
    "export function* myGenFunc() {}"),
    `module.exports.myGenFunc = function* myGenFunc() {}`
);

assert.strictEqual(
  convertAll(
    "export class MyClass {}"),
    `module.exports.MyClass = class MyClass {}`
);

assert.strictEqual(
  convertAll(
    "export default function myFunc() {}"),
    `module.exports = function myFunc() {}`
);

assert.strictEqual(
  convertAll("export default function () {}"), `module.exports = function () {}`)

assert.strictEqual(
  convertAll(
    "export default function* myGenFunc() {}"),
    `module.exports = function* myGenFunc() {}`
);

assert.strictEqual(
  convertAll(
    "export default function* () {}"),
    `module.exports = function* () {}`
);

assert.strictEqual(
  convertAll(
    "export default class MyClass {}"),
    `module.exports = class MyClass {}`
);
assert.strictEqual(convertAll("export default class {}"), `module.exports = class {}`)
assert.strictEqual(convertAll("export default foo;"), `module.exports = foo;`)

assert.strictEqual(
  convertAll(
    "export default 'Hello world!';"),
    `module.exports = 'Hello world!';`
);

assert.strictEqual(convertAll("export default 3 * 7;"), `module.exports = 3 * 7;`)

assert.strictEqual(
  convertAll(
    "export default (function () {});"),
    `module.exports = (function () {});`
);

assert.strictEqual(
  convertAll(
    "import localName from 'src/my_lib';"),
    `const localName = require('src/my_lib');`
);

assert.strictEqual(
  convertAll(
    "import * as my_lib from 'src/my_lib';"),
    `const my_lib = Object.entries(require('src/my_lib'))
 .reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {})`
);

assert.strictEqual(
  convertAll(
    "import { name1, name2 } from 'src/my_lib';"),
    `const { name1, name2 } = require('src/my_lib');`
);

assert.strictEqual(
  convertAll(
    "import { name1 as localName1, name2 } from 'src/my_lib';"),
    `const { name1: localName1, name2 } = require('src/my_lib');`
);

assert.strictEqual(
  convertAll(
    "import { default as foo } from 'src/my_lib';"),
    `const { default: foo } = require('src/my_lib');`
);

assert.strictEqual(
  convertAll("import 'src/my_lib';"), `new Function("require('src/my_lib')")()`
);

assert.strictEqual(
  convertAll(
    "import theDefault, * as my_lib from 'src/my_lib';"),
    `const theDefault = require('src/my_lib');
const my_lib = Object.entries(require('src/my_lib'))
 .reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {})`
);

assert.strictEqual(
  convertAll("import theDefault, { name1, name2 } from 'src/my_lib';"),
  `const theDefault = require('src/my_lib');
const { name1, name2 } = require('src/my_lib');`
);