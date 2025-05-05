import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import dts from "rollup-plugin-dts";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import pkg from "./package.json" with { type: "json" };

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true,
        // preserveModules: true,
      },
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
        // preserveModules: true,
      }
    ],
    external: ["react-dom"],
    plugins: [peerDepsExternal(), resolve(), commonjs(), typescript(), terser()]
  },
  {
    // Types
    input: "src/index.ts",
    output: {
      file: pkg.types,
      format: "es",
      // preserveModules: true,
    },
    plugins: [dts()],
    external: [/\.css$/]
  }
];