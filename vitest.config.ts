import { fileURLToPath } from "node:url";
import { mergeConfig, defineConfig, configDefaults } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      coverage: {
        enabled: true,
        thresholds: {
          branches: 100,
        },
        exclude: ["main.tsx", "app/**", "**/*.container.tsx", "vite-env.d.ts"],
      },
      globals: true,
      setupFiles: ["./src/SetupTests.ts"],
      exclude: [...configDefaults.exclude],
      environment: "jsdom",
      root: fileURLToPath(new URL("./src", import.meta.url)),
    },
  })
);
