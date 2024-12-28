import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import unicorn from "eslint-plugin-unicorn";
import storybook from "eslint-plugin-storybook";
import prettier from "eslint-plugin-prettier/recommended";

export default tseslint.config(
  {
    ignores: [
      "dist",
      "vitest.config.ts",
      "cypress.config.ts",
      ".storybook/**",
      "src/vite-env.d.ts",
    ],
  },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.strictTypeChecked,
      unicorn.configs["flat/recommended"],
      prettier,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: [
          "./tsconfig.json",
          "./tsconfig.app.json",
          "./tsconfig.node.json",
          "./cypress/tsconfig.json",
        ],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "unicorn/prevent-abbreviations": [
        "error",
        {
          allowList: {
            e2e: true,
          },
        },
      ],
    },
  },
  {
    extends: [
      ...storybook.configs["flat/recommended"],
      {
        files: ["**/*.stories.*"],
      },
    ],
  },
);
