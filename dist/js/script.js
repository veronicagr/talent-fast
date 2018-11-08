page('/', index);
page('/newuser', newUser);
page('/newuser/myinformations', myInformations);
page('/newuser/myadress', myAdress);
page('/newuser/myincome');
page('/newuser/docvalidation', docValidation);
page('/newuser/limit', limitAccount);
page('/login', loginUser);
page('/employees', loginEmployees);
page('/employees/pending', pendingClient);
page('/employees/approved', approvedClient);
page();

$(document).ready(index);

function index(){
  $("#main").html(renderIndex());
}

function newUser(){
  event.preventDefault();
  $("#main").html(renderNewUser());
}

function myInformations() {
  $("#main").html(renderMyInformations());
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
