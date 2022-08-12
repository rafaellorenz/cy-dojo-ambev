/// <reference types="cypress" />

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
});

/*
Funcionalidade: Cadastro

Cenário: Cadastro com sucesso
Dado (prérequisito): Que eu esteja na tela de cadastro
Quando (ações): Eu preencher os campos obrigatórios
Então (resultado esperado, comportamento, objetivo):  Deve ser cadastrado com sucesso e direcionar para o dashboard

Cenário: Cadastro com pessoa jurídica
Cenário: Cadastro com e-mail inválido
*/