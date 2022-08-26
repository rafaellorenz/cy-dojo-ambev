/// <reference types="cypress" />

describe('Funcionalidade: Login', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.visit('https://conexaoqa.herokuapp.com/login');
        cy.realizarLogin('lorenz@teste.com.br', 'lorenz123');

        cy.get('.large').should('contain', 'Dashboard');
        cy.contains('Bem-vindo').should('exist');
    });

    it.only('Deve realizar o login com sucesso usando App Actions', () => {
        cy.loginApp('lorenz@teste.com.br', 'lorenz123');
    });
});