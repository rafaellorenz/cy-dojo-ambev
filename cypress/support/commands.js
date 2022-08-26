// ***********************************************
// This example commands.js shows you how to
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

Cypress.Commands.add('realizarLogin', (user, password) => {
    cy.get('[name="email"]').type(user);
    cy.get('[name="password"]').type(password);
    cy.get('[data-test="login-submit"]').click();
});

Cypress.Commands.add('gerarToken', (email, senha) => {
    cy.request({
        method: 'POST',
        url: '/api/auth',
        body: {
            "email": email,
            "password": senha
        }
    }).then((response) => {
        return response.body.jwt;
    });
});

Cypress.Commands.add('loginApp', (email, senha) => {
    cy.request({
        method: 'POST',
        url: '/api/auth',
        body: {
            "email": email,
            "password": senha
        }
    }).then((response) => {
        //return response.body.jwt;
        cy.setCookie('jwt', response.body.jwt);
    });
});