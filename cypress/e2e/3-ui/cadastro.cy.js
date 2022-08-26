/// <reference types="cypress" />
import cadastroPage from "../../support/pages/cadastro.page";

describe('Funcionalidade: Cadastro', () => {
    it('Cadastro com sucesso', () => {
        //Pré requisito: Visitar o site
        cy.visit('https://conexaoqa.herokuapp.com/cadastrar');

        //Ação: Preencher os campos
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type('Rafael Lorenz');
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type('lorenzz@teste.com.br');
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('lorenz123');
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('lorenz123');
        cy.get('[data-test="register-submit"]').click();

        //Resultado esperado: Validar se cadastrou
        cy.get('.large').should('contain', 'Dashboard');
        cy.contains('Bem-vindo').should('exist');
    });    

    it.only('Deve realizar o cadastro com sucesso - Usando o Pages', () => {
        cy.visit('https://conexaoqa.herokuapp.com/cadastrar');

        cadastroPage.cadastro('Lorenz, Rafael', 'teste@rafael.com.br', 'lorenz@123', 'lorenz@123');

        cy.get('.large').should('contain', 'Dashboard');
        cy.contains('Bem-vindo').should('exist');
    });
});