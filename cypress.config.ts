import { defineConfig } from "cypress";
import { loadEnvConfig } from "@next/env";

const { combinedEnv } = loadEnvConfig(process.cwd());
export default defineConfig({
  env: combinedEnv,
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
  fixturesFolder: "cypress/fixtures",
  reporter: "junit",
  retries: {
    openMode: 0,
    runMode: 1,
  },
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",
});
