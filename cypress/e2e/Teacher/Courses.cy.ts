describe("ACT005", () => {
  beforeEach(() => {
    cy.session("signed-in", () => {
      cy.signInTeacher();
    });
  });

  it("Create a new course", () => {
    // open dashboard page
    cy.visit("http://localhost:3000/", {
      failOnStatusCode: false,
    });

    cy.get(".teacher-mode-btn").click();
    cy.get(".justify-between > a > .inline-flex").click();
    cy.get(".course-title-page")
      .type("Test course")
      .should("have.value", "Test course");
    cy.get(".bg-primary").click();
  });
});

describe("ACT006", () => {
  beforeEach(() => {
    cy.session("signed-in", () => {
      cy.signInTeacher();
    });
  });

  it("Delete a course", () => {
    // open dashboard page
    cy.visit("http://localhost:3000/", {
      failOnStatusCode: false,
    });

    cy.get(".teacher-mode-btn").click();
    cy.get(".btn-create-course").click();
    cy.get(".course-title-page")
      .type("Test course")
      .should("have.value", "Test course");
    cy.get(".bg-primary").click();
    cy.get(".delete-course").click();
    cy.get(".btn-confirmundefined").click();
  });
});

describe("ACT007", () => {
  beforeEach(() => {
    cy.session("signed-in", () => {
      cy.signInTeacher();
    });
    cy.visit("http://localhost:3000/", {
      failOnStatusCode: false,
    });

    cy.get(".teacher-mode-btn").click();
    cy.get("table.table-course")
      .find("tbody tr:first-child td:last-child button")
      .click();
    cy.get(".relative").click();
  });

  it("Edit title", () => {
    cy.get(".edit-title-course").click();
    cy.get(".title-editor")
      .type(" updated")
      .should("have.value", "Test course updated");
    cy.get(".title-save").click();
  });

  it("Edit description", () => {
    cy.get(".edit-description").click();
    cy.get(".text-description")
      .type("test description")
      .should("have.value", "test description");
    cy.get(".confirm-description").click();
  });

  it("Edit category", () => {
    cy.get(".edit-description").click();
    cy.get(".text-description")
      .type("test description")
      .should("have.value", "test description");
    cy.get(".confirm-description").click();
  });
});
