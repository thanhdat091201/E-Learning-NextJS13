import { ClerkProvider } from "@clerk/nextjs";
/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add(`signOut`, () => {
  cy.log(`sign out by clearing all cookies.`);
  cy.clearCookies();
});

Cypress.Commands.add(`signInTeacher`, () => {
  cy.log(`Signing in.`);
  cy.visit(`/sign-in`, { failOnStatusCode: false });

  cy.window()
    .should((window: any) => {
      expect(window).to.not.have.property(`Clerk`, undefined);
      expect(window.Clerk.isReady()).to.eq(true);
    })
    .then(async (window: any) => {
      cy.clearCookies({ domain: window.location.domain });
      const res = await window.Clerk.client.signIn.create({
        identifier: Cypress.env(`TEST_TEACHER_EMAIL`),
        password: Cypress.env(`TEST_TEACHER_PASSWORD`),
      });

      await window.Clerk.setActive({
        session: res.createdSessionId,
      });

      cy.log(`Finished Signing in.`);
    });
});

Cypress.Commands.add(`signInStudent`, () => {
  cy.log(`Signing in.`);
  cy.visit(`/sign-in`, { failOnStatusCode: false });

  cy.window()
    .should((window: any) => {
      expect(window).to.not.have.property(`Clerk`, undefined);
      expect(window.Clerk.isReady()).to.eq(true);
    })
    .then(async (window: any) => {
      cy.clearCookies({ domain: window.location.domain });
      const res = await window.Clerk.client.signIn.create({
        identifier: Cypress.env(`TEST_STUDENT_EMAIL`),
        password: Cypress.env(`TEST_STUDENT_PASSWORD`),
      });

      await window.Clerk.setActive({
        session: res.createdSessionId,
      });

      cy.log(`Finished Signing in.`);
    });
});

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Initialize auth to a state where you're
       * logged in as the test user.
       *
       * @example cy.initializeAuth()
       */
      signOut(): Chainable<void>;
      signInTeacher(): Chainable<void>;
      signInStudent(): Chainable<void>;
    }
  }
}

export {};
