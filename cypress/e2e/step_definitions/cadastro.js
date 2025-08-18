const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");


Given("que estou na página de WebTables", () => {
  cy.visit("/webtables");
});

When("acesso o formulário de cadastro", () => {
  cy.get("#addNewRecordButton").click();
});

When("preencho todos os campos obrigatórios com dados válidos", () => {
  cy.get("#firstName").type("João");
  cy.get("#lastName").type("Silva");
  cy.get("#userEmail").type("joao@email.com");
  cy.get("#age").type("30");
  cy.get("#salary").type("5000");
  cy.get("#department").type("TI");
});

When("submeto o formulário", () => {
  cy.get("#submit").click();
});

Then("os dados devem aparecer corretamente na tabela", () => {
  cy.get(".rt-tbody").should("contain", "João");
  cy.get(".rt-tbody").should("contain", "Silva");
  cy.get(".rt-tbody").should("contain", "joao@email.com");
});

When("edito o cadastro com novos dados", () => {
  cy.get(".rt-tr-group").first().find("[title='Edit']").click();
  cy.get("#department").clear().type("RH");
  cy.get("#submit").click();
});

Then("os dados atualizados devem aparecer na tabela", () => {
  cy.get(".rt-tbody").should("contain", "RH");
});

When("excluo o cadastro", () => {
  cy.get(".rt-tr-group").first().find("[title='Delete']").click();
});

Then("o usuário não deve mais estar na tabela", () => {
  cy.get(".rt-tbody").should("not.contain", "João");
});
