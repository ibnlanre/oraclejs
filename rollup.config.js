import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@wessberg/rollup-plugin-ts";
import { terser } from "rollup-plugin-terser";

const banner = `/*!
 * OracleJS-0.1.1
 * Copyright (c) 2021 Ridwan Olanrewaju.
 * Licensed under the MIT license.
 */`;

export default [
  {
    input: "index.ts",
    output: [
      {
        banner,
        file: "./index.js",
        format: "umd",
        name: "oracle",
        plugins: [terser()],
      },
    ],
    plugins: [typescript(), resolve(), commonjs()],
  },
  {
    input: "browser.ts",
    output: [
      {
        banner,
        file: "./browser.js",
        format: "umd",
        name: "oracle",
        plugins: [terser()],
      },
    ],
    plugins: [typescript(), resolve(), commonjs()],
  },
];
