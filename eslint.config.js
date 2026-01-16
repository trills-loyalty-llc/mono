import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import unicorn from "eslint-plugin-unicorn";
import storybook from "eslint-plugin-storybook";
import prettier from "eslint-plugin-prettier/recommended";
import testingLibrary from "eslint-plugin-testing-library";
import jestDom from "eslint-plugin-jest-dom";
import react from "eslint-plugin-react";
import sonar from "eslint-plugin-sonarjs";
import promise from "eslint-plugin-promise";
import compat from "eslint-plugin-compat";

export default tseslint.config(
  {
    ignores: [
      "dist",
      "vitest.config.ts",
      "cypress.config.ts",
      ".storybook/**",
      "src/vite-env.d.ts",
      "src/data/api-client.ts",
    ],
  },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.strictTypeChecked,
      unicorn.configs["recommended"],
      sonar.configs.recommended,
      promise.configs["flat/recommended"],
      compat.configs["flat/recommended"],
      react.configs.flat.recommended,
      react.configs.flat["jsx-runtime"],
      testingLibrary.configs["flat/react"],
      jestDom.configs["flat/recommended"],
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
        ...react.configs.flat.recommended.languageOptions,
      },
    },
    plugins: { "react-hooks": reactHooks, "react-refresh": reactRefresh },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "unicorn/prevent-abbreviations": ["error", { allowList: { e2e: true } }],
      "unicorn/consistent-function-scoping": [
        "error",
        { checkArrowFunctions: false },
      ],
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/member-ordering": "error",
      "no-magic-numbers": "off",
      "@typescript-eslint/no-magic-numbers": ["error", { ignoreEnums: true }],
    },
    settings: { react: { version: "detect" } },
  },
  {
    extends: [
      ...storybook.configs["flat/recommended"],
      { files: ["**/*.stories.*"] },
    ],
  },
);
