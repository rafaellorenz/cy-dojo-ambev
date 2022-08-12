/// <reference types="cypress" />

describe('Funcionalidade de perfil via API', () => {
    let token;
    beforeEach(() => {
        cy.gerarToken("fabio@teste.com", "teste@123").then((tkn) => {
            token = tkn;
        });
    });
    /*
    it('Deve consultar o perfil do usuário', () => {
        cy.request({
            method: 'POST',
            url: 'https://conexaoqa.herokuapp.com/api/auth',
            body: {
                "email": "fabio@teste.com",
                "password": "teste@123"
            }
        }).then((response) => {
            let token = response.body.jwt;
            cy.request({
                method: 'GET',
                url: '/api/profile/me',
                headers: {
                    Cookie: token
                }
            }).then((response) => {
                expect(response.body.company).to.be.equal("Via");
            });
        });
    });
    */
   
    i.only('Deve consultar o perfil do usuário usando token dinâmico', () => {

        cy.request({
            method: 'POST',
            url: 'https://conexaoqa.herokuapp.com/api/auth',
            body: {
                "email": "fabio@teste.com",
                "password": "teste@123"
            }
        });
    });
});