import Navbar from "./Navbar.vue";

describe("<Navbar />", () => {
  it("renders", () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(Navbar);
    cy.get("h1").should("contain.text", "Vue App");
    cy.get("a.burger").should("not.have.class", "is-active");
    cy.get("a.burger").click().should("have.class", "is-active");
    cy.get("a.burger").click().should("not.have.class", "is-active");
  });
});
