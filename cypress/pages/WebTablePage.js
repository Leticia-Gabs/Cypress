class WebTablePage {
  validarUsuarioNaTabela(usuario) {
    cy.get('.rt-tbody').should('contain', usuario.firstName);
    cy.get('.rt-tbody').should('contain', usuario.lastName);
    cy.get('.rt-tbody').should('contain', usuario.email);
  }

  clicarEditarUsuario(nome) {
    cy.contains('.rt-tr-group', nome)
      .find('[title="Edit"]')
      .click();
  }

  clicarExcluirUsuario(nome) {
    cy.contains('.rt-tr-group', nome)
      .find('[title="Delete"]')
      .click();
  }

  validarUsuarioRemovido(nome) {
    cy.get('.rt-tbody').should('not.contain', nome);
  }
}

module.exports = new WebTablePage();
