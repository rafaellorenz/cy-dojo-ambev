/// <reference types="cypress" />

describe('Funcionalidade de cadastrar usuário via API', () => {
    it('Deve realizar o cadastro com sucesso', () => {
        var email = `rafael${Math.floor(Math.random() * 100000)}@teste.com.br`
        cy.request({
            method: 'POST',
            url: '/api/users',
            body: {
                "name": "Rafael Lorenz",
                "email": email,
                "password": "lorenz@123"
            }
        }).then((response) => {
            expect(response.status).to.be.equal(201);
            expect(response.body).to.have.property('jwt');
            expect(response.duration).to.be.lessThan(500);
        });
    });
});