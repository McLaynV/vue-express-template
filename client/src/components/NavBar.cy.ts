import NavBar from "./NavBar.vue";

describe("<NavBar />", () => {
  it("renders", () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(NavBar);
    cy.get("h1").should("contain.text", "Vue App");
    cy.get("a.burger")
      .should("not.have.class", "is-active")
      .click()
      .should("have.class", "is-active")
      .click()
      .should("not.have.class", "is-active");
  });
});
