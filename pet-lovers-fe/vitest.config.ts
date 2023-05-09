import react from "@vitejs/plugin-react";
import type { UserConfig } from "vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import type { InlineConfig } from "vitest";

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    include: ["./src/tests/vitest/**/*.{test,spec}.{ts,tsx}"],
    globals: true,
    coverage: {
      all: true,
      include: ["src/helpers/methods/", "src/common/components/"],
      reporter: ["text", "html", "lcov"],
    },
    reporters: ["default"],
    outputFile: "",
    environment: "jsdom",
    setupFiles: "./src/tests/vitest/setup.ts",
  },
} as VitestConfigExport);
