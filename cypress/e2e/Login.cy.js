describe("LoginStateCheck", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("checking the logged in state", () => {
    cy.contains("Login").click();
    cy.contains("Email").click();
    cy.get("input[name=email]").type("nune1998@gmail.com");
    cy.get("input[name=password]").type("Nune123.");
    cy.get("button[type=submit]").click();
    cy.wait(10000);
    cy.get("header.css-ha7lwh").should("not.contain", "Login");
  });
});
