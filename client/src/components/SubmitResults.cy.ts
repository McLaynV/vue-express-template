import SubmitResults from "./SubmitResults.vue";
import { createTestingPinia } from "@pinia/testing";

describe("<SubmitResults />", () => {
  it("renders", () => {
    // see: https://test-utils.vuejs.org/guide/
    const props = { totalTime: 666 };
    const global = { plugins: [createTestingPinia({ createSpy: cy.spy })] };
    cy.mount(SubmitResults, { global: global, props: props });
    cy.get("h2").should("contain.text", "Complete!");
    cy.get("input.input")
      .should("be.empty")
      .click()
      .type("Ben")
      .should("have.value", "Ben");
  });
});
