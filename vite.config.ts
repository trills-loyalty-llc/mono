import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          "import",
          "slash-div",
          "global-builtin",
          "color-functions",
          "if-function",
        ],
      },
    },
  },
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
});
