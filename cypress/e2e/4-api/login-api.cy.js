/// <reference types="cypress" />

describe('Funcionalidade de login via API', () => {
    it('Deve fazer o login com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'https://conexaoqa.herokuapp.com/api/auth',
            body: {
                "email": "fabio@teste.com",
                "password": "teste@123"
            }
        }).should((response) => {
            expect(response.status).to.be.equal(200);
            expect(response.body).to.have.property('jwt');
            expect(response.duration).to.be.lessThan(500);
        });
    });
});