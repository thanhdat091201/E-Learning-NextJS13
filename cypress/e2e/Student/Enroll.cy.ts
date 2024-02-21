/// <reference types="cypress" />

describe("ACT010", () => {
  beforeEach(() => {
    cy.session("signed-in", () => {
      cy.signInTeacher();
    });
  });

  it("Search for course", () => {
    // open dashboard page
    cy.visit("http://localhost:3000/", {
      failOnStatusCode: false,
    });

    cy.get(".btn-Browse").click();
    cy.get(".search-field").type("Next").should("have.value", "Next");
  });
});

describe("ACT014", () => {
  beforeEach(() => {
    cy.session("signed-in-student", () => {
      cy.signInStudent();
    });
  });

  it("SSR: navigate to the ssr dashboard", () => {
    // open dashboard page
    cy.visit("http://localhost:3000/", {
      failOnStatusCode: false,
    });

    cy.get(".btn-Browse").click();
    cy.get(`[href="/courses/653b4d8f3782fcbc8ae705fb"] > .group`).click();
  });
});

describe("ACT014", () => {
  beforeEach(() => {
    cy.session("signed-in-student", () => {
      cy.signInStudent();
    });
  });

  it("SSR: navigate to the ssr dashboard", () => {
    // open dashboard page
    cy.visit("http://localhost:3000/", {
      failOnStatusCode: false,
    });

    cy.get(".btn-Browse").click();
    cy.get(`[href="/courses/653b4d8f3782fcbc8ae705fb"] > .group`).click();
  });
});
