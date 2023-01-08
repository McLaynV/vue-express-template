import TosGame from "./TosGame.vue";

describe("<TosGame />", () => {
  it("renders", () => {
    // see: https://test-utils.vuejs.org/guide/
    const submitSpy = cy.spy().as("submitSpy");
    cy.mount(TosGame, { props: { onSubmitTime: submitSpy } });
    cy.get("h2").should("contain.text", "Welcome!");

    cy.get("form input.button").should("be.disabled");
    cy.get("div.tos").scrollTo("center");
    cy.get("form input.button").should("be.disabled");
    cy.get("div.tos").scrollTo("top");
    cy.get("form input.button").should("be.disabled");
    cy.get("div.tos").scrollTo("center");
    cy.get("form input.button").should("be.disabled");
    cy.get("div.tos").scrollTo("bottom");
    cy.get("form input.button").should("be.enabled");
    cy.get("div.tos").scrollTo("center");
    cy.get("form input.button").should("be.enabled");
    cy.get("div.tos").scrollTo("top");
    cy.get("form input.button").should("be.enabled");

    cy.get("@submitSpy").should("not.have.been.called");
    cy.get("form input.button").click();
    cy.get("@submitSpy").should("have.been.calledOnce");
  });
});
