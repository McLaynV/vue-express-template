import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
    video: true, // TODO: without video recording, NotFound.cy.ts fails with: ERR_FAILED (-2) loading 'http://localhost:3001/__/#/specs/runner?file=src\views\NotFound.cy.ts'
  },
});
