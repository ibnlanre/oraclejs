import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@wessberg/rollup-plugin-ts";
import { terser } from "rollup-plugin-terser";

const banner = `/*!
 * OracleJS-0.0.2
 * Copyright (c) 2021 Ridwan Olanrewaju.
 * Licensed under the MIT license.
 */`;

export default {
  input: "oracle.ts",
  output: [
    {
      banner,
      file: "index.js",
      format: "umd",
      name: "oracle",
      plugins: [terser()],
    },
  ],
  plugins: [typescript(), resolve(), commonjs()],
};
