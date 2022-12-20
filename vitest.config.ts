import { defineConfig } from "vitest/config";
import { mergeConfig } from "vite";
import viteConfig from "./client/vite.config";

// https://vitest.dev/config/
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      coverage: {
        reportsDirectory: "./test/vitest/coverage",
      },
    },
  })
);
