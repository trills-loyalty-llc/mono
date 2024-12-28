import { defineConfig } from "cypress";

/**
 * This file is .js currently due to a bug with cypress.
 */
export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:4173",
  },
});
