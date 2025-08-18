# language: pt

Funcionalidade: Gerenciar usuários na WebTable

  Cenário: Cadastrar novo usuário com sucesso
    Dado que estou na página de WebTables
    Quando acesso o formulário de cadastro
    E preencho todos os campos obrigatórios com dados válidos
    E submeto o formulário
    Então os dados devem aparecer corretamente na tabela

  Cenário: Editar um usuário existente
    Dado que existe um usuário cadastrado
    Quando edito o cadastro com novos dados
    Então os dados atualizados devem aparecer na tabela

  Cenário: Excluir um usuário
    Dado que existe um usuário cadastrado
    Quando excluo o cadastro
    Então o usuário não deve mais estar na tabela
