describe('Funcionalidade: Login', () => {
    context('Dado que eu esteja na página de login', () => {
        before(() => {
            cy.visit('login');
        });        
    });

    context('Quando eu inserir usuário e senha', () => {
        beforeEach(() => {
            cy.realizarLogin('lorenz@teste.com.br', 'lorenz123'); 
        });

        it('Então deve exibir a mensagem de boas vindas no dashboard', () => {
            cy.get('.large').should('contain', 'Dashboard');
            cy.contains('Bem-vindo').should('exist');
        });
    });
});