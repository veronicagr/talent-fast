page('/', index);
page('/newuser', newUser);
page('/newuser/refused', userRefused);
page('/newuser/myinformations', myInformations);
page('/newuser/myadress', myAdress);
page('/newuser/myincome', myIncome);
page('/newuser/docvalidation', docValidation);
page('/newuser/limit', limitAccount);
page('/login', loginUser);
page('/useraccount', userAccount);
page('/employees', loginEmployees);
page('/employees/pending', pendingClient);
page('/employees/approved', approvedClient);
page();

$(document).ready(index);

function index() {
  $("#main").html(renderIndex());
}

function newUser() {
  $("#main").html(renderNewUser());
}

function userRefused(){
  $("#main").html(renderDeniedAccount());
}

function myInformations() {
  $("#main").html(renderMyInformations());
}

function myAdress() {
  $("#main").html(renderMyAdress());
}

function myIncome() {
  $("#main").html(renderMyIncome());
}

function docValidation() {
  $("#main").html(renderDocValidation());
}

function limitAccount() {
  $("#main").html(renderLimitAccount());
}

function loginUser() {
  $("#main").html(renderLoginCliente());
}

function loginEmployees() {
  $("#main").html(renderLogin());
}

function pendingClient() {
  $("#main").html(renderLogin());
}

function approvedClient() {
  //retorna os clientes já aprovados pelo gerente
}

function userAccount() {
  $("#main").html(renderUserAccount());
}
