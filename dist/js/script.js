page('/', index);
page('/newuser', newUser);
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
  //aproved??
  // if(aproved){

    $("#main").html(renderLimitAccount());


  // }else{
  //   $("#main").html(deniedAccount());
  // }
}

function loginUser() {
  $("#main").html(renderLoginCliente());
}

function loginEmployees() {
  $("#main").html(renderLogin());
  //pagina de login de acesso ao gerente
}

function pendingClient() {
  $("#main").html(renderLogin());
  //depois de ja logado a pagina exibe os clientes que estão pendentes para a aprovação
}

function approvedClient() {
  //retorna os clientes já aprovados pelo gerente
}

function userAccount() {
  $("#main").html(renderUserAccount());  
}