class CadastroPage {
  clicarBotaoAdd() {
    cy.get('#addNewRecordButton').click();
  }

  preencherFormulario(usuario) {
    cy.get('#firstName').type(usuario.firstName);
    cy.get('#lastName').type(usuario.lastName);
    cy.get('#userEmail').type(usuario.email);
    cy.get('#age').type(usuario.age);
    cy.get('#salary').type(usuario.salary);
    cy.get('#department').type(usuario.department);
  }

  submeterFormulario() {
    cy.get('#submit').click();
  }
}

module.exports = new CadastroPage();
