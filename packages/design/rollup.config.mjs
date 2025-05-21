import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import dts from "rollup-plugin-dts";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import pkg from "./package.json" with { type: "json" };

const generateConf = (input, esm, cjs) => {
  return {
    input,
    output: [
      {
        file: esm,
        format: "esm",
        sourcemap: true,
        // preserveModules: true,
      },
      {
        file: cjs,
        format: "cjs",
        sourcemap: true,
        // preserveModules: true,
      }
    ],
    external: ["react-dom"],
    plugins: [peerDepsExternal(), resolve(), commonjs(), typescript(), terser()]
  };
}

export default [
  generateConf("src/index.ts", pkg.module, pkg.main),
  // ...(['bold', 'bold_duotone', 'broken', 'line_duotone', 'linear', 'outline']).map(variant => generateConf(`src/icons/${variant}/index.ts`,
  //   `dist/icons/${variant}/index.esm.js`,
  //   `dist/icons/${variant}/index.js`
  // )),
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