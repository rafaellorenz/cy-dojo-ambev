/// <reference types="cypress" />

describe('Teste de API', () => {

    var dojo = {
        aula: "API",
        duracao: 3,
        professor: "Fábio"
    }

    var numero = [0, 2, 4, 6, 8, 10];

    var usuarios = [
        {
            "usuario": "rafael@teste.com.br",
            "senha": "332614"
        },
        {
            "usuario": "lorenz@teste.com.br",
            "senha": "985674",
            "perfil": "admin"
        },
        {
            "usuario": "rafael.lorenz@teste.com.br",
            "senha": "12345123"
        }
    ];

    it('Teste dojo', () => {
        expect(dojo.aula).to.be.equal("API");
        expect(dojo.duracao).to.be.equal(3);
        expect(dojo.professor).to.be.equal("Fábio");
    });

    it.only('Teste usuarios', () => {
        cy.log(usuarios[0].usuario);
        expect(usuarios[0].usuario).to.be.equal("rafael@teste.com.br");
        expect(usuarios[0].senha).to.be.equal("332614");
        cy.log(usuarios[1].usuario);
        expect(usuarios[1].usuario).to.be.equal("lorenz@teste.com.br");
        expect(usuarios[1].senha).to.be.equal("985674");
        expect(usuarios[1].perfil).to.be.equal("admin");
        cy.log(usuarios[2].usuario);
        expect(usuarios[2].usuario).to.be.equal("rafael.lorenz@teste.com.br");
        expect(usuarios[2].senha).to.be.equal("12345123");
    });
});