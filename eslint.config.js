import js from "@eslint/js";
import vitest from "@vitest/eslint-plugin";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import unicorn from "eslint-plugin-unicorn";
import storybook from "eslint-plugin-storybook";
import prettier from "eslint-plugin-prettier/recommended";
import testingLibrary from "eslint-plugin-testing-library";
import jestDom from "eslint-plugin-jest-dom-ya";
import sonar from "eslint-plugin-sonarjs";
import compat from "eslint-plugin-compat";
import cypress from "eslint-plugin-cypress";
import jsdoc from "eslint-plugin-jsdoc";
import promise from "eslint-plugin-promise";

export default tseslint.config(
  {
    files: ["**/*.{ts,tsx}"],
    ignores: [
      "dist",
      "vitest.config.ts",
      "cypress.config.ts",
      ".storybook/**",
      "src/vite-env.d.ts",
      "src/data/api-client.ts",
    ],
    extends: [
      js.configs.recommended,
      tseslint.configs.strictTypeChecked,
      promise.configs["flat/recommended"],
      unicorn.configs["recommended"],
      sonar.configs.recommended,
      jsdoc.configs["flat/recommended"],
      compat.configs["flat/recommended"],
      testingLibrary.configs["flat/react"],
      jestDom.configs["flat/recommended"],
      prettier,
    ],
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
    plugins: { "react-hooks": reactHooks, "react-refresh": reactRefresh },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "unicorn/consistent-function-scoping": [
        "error",
        { checkArrowFunctions: false },
      ],
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/member-ordering": "error",
      "@typescript-eslint/no-magic-numbers": ["error", { ignoreEnums: true }],
    },
  },
  {
    files: ["**/*.spec.*", "**/*.test.*"],
    extends: [
      vitest.configs.recommended,
      testingLibrary.configs["flat/react"],
      jestDom.configs["flat/recommended"],
    ],
  },
  {
    files: ["**/*.stories.*"],
    extends: [storybook.configs["flat/recommended"]],
  },
  {
    files: ["**/*.cy.*"],
    extends: [cypress.configs.recommended],
    rules: {
      "sonarjs/assertions-in-tests": ["off"],
    },
  },
);
