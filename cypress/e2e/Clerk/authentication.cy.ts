/// <reference types="cypress" />

describe("ACT001", () => {
  beforeEach(() => {
    cy.session("signed-in", () => {
      cy.signInTeacher();
    });
  });

  it("SSR: navigate to the ssr dashboard", () => {
    // open dashboard page
    cy.visit("http://localhost:3000/", {
      failOnStatusCode: false,
    });

    // check h1 says signed in
    cy.get(
      ".grid-cols-1 > :nth-child(1) > :nth-child(2) > .font-medium"
    ).contains("In Progress");
  });
});

describe("ACT002", () => {
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

    cy.get(
      ".grid-cols-1 > :nth-child(1) > :nth-child(2) > .font-medium"
    ).contains("In Progress");
  });
});

describe("ACT003", () => {
  beforeEach(() => {
    cy.signOut();
  });

  it("navigate to the dashboard signed in", () => {
    cy.signInTeacher();

    // open dashboard page
    cy.visit("http://localhost:3000/", {
      failOnStatusCode: false,
    });
    // check h1 says signed in
    cy.get(
      ".grid-cols-1 > :nth-child(1) > :nth-child(2) > .font-medium"
    ).contains("In Progress");
  });

  it("should navigate to the sign-in in a signed out state", () => {
    cy.visit("http://localhost:3000/", {
      failOnStatusCode: false,
    });

    // check h1 says signed im
    cy.get(".cl-headerTitle").contains("Sign in");
  });
});
