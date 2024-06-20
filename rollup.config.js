import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import path from "path";

const createConfig = ({ inputFile, pathToLib }) => {
  return {
    input: {
      [`${inputFile.split(".")[0].toLowerCase()}`]: path.resolve(
        pathToLib,
        inputFile
      ),
    },
    output: {
      dir: path.resolve("dist"),
      format: "es",
    },
    plugins: [
      replace({
        preventAssignment: true,
        "process.env.NODE_ENV": JSON.stringify("production"),
      }),
      nodeResolve({
        extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"],
      }),
      commonjs({}),
    ],
  };
};

export default [
  createConfig({
    inputFile: "withSlotAlways.scenario.js",
    pathToLib: "lib",
  }),
  createConfig({
    inputFile: "withoutSlotAlways.scenario.js",
    pathToLib: "lib",
  }),
];
