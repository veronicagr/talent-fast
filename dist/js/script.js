page('/', index);
page('/newuser', newuser);
page('/newuser/myinformations', myInformations);
page('/newuser/myadress', myAdress);
page('/newuser/docvalidation', docValidation);
page('/newuser/limit', limitAccount);
page('/login', loginUser);
page('/employees', loginEmployees);
page('/employees/pending', pendingClient);
page('/employees/approved', approvedClient);
page();

function index() {
  //vai retornar um bem-vindo!
}

function newuser() {
  //o input de nome e cpf
}

function myInformations() {
  //mais dados são requisitados do usuario, como nascimento, estado civil...
}

function myAdress() {
  //input do endereço
}

function docValidation() {
  //validação do documento com foto
}

function limitAccount() {
  //retorna o limite aprovado
}

function loginUser() {
  //retorna uma pagina para os clientes entrarem
}

function loginEmployees() {
  //pagina de login de acesso ao gerente
}

function pendingClient() {
  //depois de ja logado a pagina exibe os clientes que estão pendentes para a aprovação
}

function approvedClient() {
  //retorna os clientes já aprovados pelo gerente
}
