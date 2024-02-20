describe("Edit personal data", () => {
  it("Navigating to my profile and editing personal data", () => {
    cy.login();
    cy.wait(4000);
    cy.get(".css-1l56u61 > .css-1fpl4p9").click();
    cy.get(".css-1mua9rz > :nth-child(1) > .sl-navlink").click();
    cy.get("input[name=firstName]").type("Nune");
    cy.get("input[name=lastName]").type("Gabrielyan");
    cy.get("input[name=city]").type("Yerevan");
    cy.get(".css-m32ms5").click();
    cy.get("body").should(
      "contain",
      "Your account information has been updated successfully."
    );
    cy.get("input[name=firstName]").clear();
    cy.get("input[name=lastName]").clear();
    cy.get("input[name=city]").clear();
    cy.get(".css-m32ms5").click();
  });
});
