import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

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
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
});
