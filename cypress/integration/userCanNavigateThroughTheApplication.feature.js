describe("User can navigate the app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
});

describe("to About tab and it", () => {
  beforeEach(() => {
    cy.get("#about-tab").click();
  });

  it("displays About Me header", () => {
    cy.get("#about-header").should("contain", "About Me");
  });

  it("displays component name in url", () => {
    cy.url().should("contain", "about");
  });

  it("does not display My Projects header", () => {
    cy.get("#projects-header").should("not.exist");
  });

  it("does not display Hello world", () => {
    cy.get("#hello").should("not.exist");
  });
});

it("My Projects tab", () => {
  cy.get("projects-tab").click();

  cy.get("#projects-header").should("contain", "My Projects");

  cy.get("#about-header").should("not.exist");
  cy.get("#hello").should("not.exist");
});

describe("back to My Portfolio/Hello tab and it", () => {
  beforeEach(() => {
    cy.get("#about-tab").click();
    cy.get("#header").click();
  });

  it("displays Hello world", () => {
    cy.get("#hello").should("contain", "Hello");

    it("displays correct url", () => {
      cy.url().should("not.contain", "projects").and("not.contain", "about");
    });

    it("does not display About Me header", () => {
      cy.get("about-header").should("not.exist");
    });

    it("does not display My Projects header", () => {
      cy.get("#projects-header").should("not.exist");
    });
  });
});
