import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import resolve from "@rollup/plugin-node-resolve";
import smelte from "smelte/rollup-plugin-smelte";
import svelte from "rollup-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;

function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      server = require("child_process").spawn(
        "npm",
        ["run", "start", "--", "--dev"],
        {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true,
        }
      );

      process.on("SIGTERM", toExit);
      process.on("exit", toExit);
    },
  };
}

export default {
  input: "src/main.ts",
  output: {
    sourcemap: !production,
    format: "iife",
    name: "app",
    file: "public/build/bundle.js",
  },
  plugins: [
    svelte({
      compilerOptions: { dev: !production },
      preprocess: sveltePreprocess(),
    }),
    smelte({
      purge: production,
      output: "public/build/bundle.css",
      postcss: [],
      whitelist: [],
      whitelistPatterns: [],
      tailwind: {
        theme: {
          extend: {
            spacing: {
              72: "18rem",
              84: "21rem",
              96: "24rem",
            },
          },
        },
        colors: {
          primary: "#b027b0",
          secondary: "#009688",
          error: "#f44336",
          success: "#4caf50",
          alert: "#ff9800",
          blue: "#2196f3",
          dark: "#212121",
        },
        darkMode: true,
      },
    }),
    resolve({ browser: true, dedupe: ["svelte"] }),
    commonjs(),
    typescript({ sourceMap: !production }),

    !production && serve(),
    !production && livereload("public"),
    production && terser(),
  ],
  watch: { clearScreen: false },
};
