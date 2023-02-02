describe("Game", () => {
  it("Win", () => {
    cy.visit("/");
    /* ==== Generated with Cypress Studio ==== */
    cy.get(
      ".game-board > :nth-child(1) > :nth-child(1) > :nth-child(1)"
    ).click();
    cy.get(
      ".game-board > :nth-child(1) > :nth-child(1) > :nth-child(2)"
    ).click();
    cy.get(
      ".game-board > :nth-child(1) > :nth-child(2) > :nth-child(1)"
    ).click();
    cy.get(
      ".game-board > :nth-child(1) > :nth-child(2) > :nth-child(2)"
    ).click();
    cy.get(":nth-child(1) > :nth-child(3) > :nth-child(1)").click();
    cy.get(".game-info > div").should("have.text", "Winner: X");
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("Draw", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("/");
    cy.get(
      ".game-board > :nth-child(1) > :nth-child(1) > :nth-child(1)"
    ).click();
    cy.get(
      ".game-board > :nth-child(1) > :nth-child(2) > :nth-child(1)"
    ).click();
    cy.get(
      ".game-board > :nth-child(1) > :nth-child(2) > :nth-child(2)"
    ).click();
    cy.get(":nth-child(3) > :nth-child(3)").click();
    cy.get(":nth-child(3) > :nth-child(2)").click();
    cy.get(
      ".game-board > :nth-child(1) > :nth-child(1) > :nth-child(2)"
    ).click();
    cy.get(":nth-child(1) > :nth-child(3) > :nth-child(1)").click();
    cy.get(
      ".game-board > :nth-child(1) > :nth-child(1) > :nth-child(3)"
    ).click();
    cy.get(":nth-child(1) > :nth-child(2) > :nth-child(3)").click();
    cy.get(".game-info > div").should("have.text", "Draw!");
    /* ==== End Cypress Studio ==== */
  });
});
