/// <reference types="cypress" />

describe('Funcionalidade: Login', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.visit('https://conexaoqa.herokuapp.com/login');
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('lorenz@teste.com.br');
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('lorenz123');
        cy.get('[data-test="login-submit"]').click();

        cy.get('.large').should('contain', 'Dashboard');
        cy.contains('Bem-vindo').should('exist');
    });
});