const { convertAll } = require("../index");

console.log(
  convertAll(`
export * from 'src/other_module';

export { foo as myFoo, bar } from 'src/other_module';

export { default } from 'src/other_module';

export { default as foo } from 'src/other_module';

export { foo as default } from 'src/other_module';

export { MY_CONST as FOO, myFunc };

export { foo as default };

export var foo;

export let foo;

export const foo;

export function myFunc() {}

export function* myGenFunc() {}

export class MyClass {}

export default function myFunc() {}

export default function () {}

export default function* myGenFunc() {}

export default function* () {}

export default class MyClass {}

export default class {}

export default foo;

export default 'Hello world!';

export default 3 * 7;

export default (function () {});

import localName from 'src/my_lib';

import * as my_lib from 'src/my_lib';

import { name1, name2 } from 'src/my_lib';

import { name1 as localName1, name2 } from 'src/my_lib';

import { default as foo } from 'src/my_lib';

import 'src/my_lib';

import theDefault, * as my_lib from 'src/my_lib';

import theDefault, { name1, name2 } from 'src/my_lib';
`)
);
