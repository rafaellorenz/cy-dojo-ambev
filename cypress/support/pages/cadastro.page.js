class CadastroPage {
    cadastro(nome, email, senha, confirmarSenha) {
        cy.get('[data-test="register-name"]').type(nome);
        cy.get('[data-test="register-email"]').type(email);
        cy.get('[data-test="register-password"]').type(senha);
        cy.get('[data-test="register-password2"]').type(confirmarSenha);
        cy.get('[data-test="register-submit"]').click();
    }

    cadastroPj() {

    }

    cadastroPf() {

    }
}

export default new CadastroPage();