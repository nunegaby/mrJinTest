describe("Navigation check", () => {
  it("navigate to casino page", () => {
    cy.login();
    cy.wait(10000);
    cy.get("header").contains("Casino").click();
    cy.wait(20000);
    cy.get(":nth-child(1) > .sl-game-overlay > .css-1kqxmci").trigger(
      "mouseover"
    );
    cy.contains("Demo").click();
    cy.wait(20000);
    cy.url().should("include", "/demo");
    cy.get("a.sl-icon").click();
    cy.url().should(
      "eq",
      "https://mrjin.com/game-catalog/5dce6d74-3fb1-4395-9528-304745941346"
    );
  });
});
