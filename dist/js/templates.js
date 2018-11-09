function renderIndex(){
  return `
    <div class="#">
      <h2>Bem-vindo(a) ao Future Bank, abra a sua conta on-line e confie na gente para cuidar de seus investimentos.</h2>
    </div>
  `
}

function renderNewUser(){
  return `
    <div class="form-container">
      <h3>Junte-se a nós</h3>
      <form class="#">
        <p>Crie sua conta</p>
        <label>Nome: </label>
        <br>
        <input type="text" name="Name" placeholder="Nome completo">
        <br>
        <label>CPF: </label>
        <br>
        <input id="cpf" type="text" name="CPF" placeholder="CPF" maxlength="15" OnKeyPress="format('###.###.###-##', this)">
        <br>
        <a class="form-button" onclick="verifyCPF()">Consultar</a>
      </form>
    </div>
  `
}

function renderMyInformations(){
  return `
    <div class="form-container">
      <p>Complete seu cadastro</p>
      <form class="#">
        <label>Nascimento: </label>
        <br>
        <input type="date" placeholder="">
        <br>
        <label>Estado Civil: </label>
        <br>
        <input type="text" placeholder="">
        <br>
        <label>Celular: </label>
        <br>
        <input type="text" maxlength="13" OnKeyPress="format('##-####-####', this)">
        <br>
        <label>RG: </label>
        <br>
        <input type="text" placeholder="" maxlength="14">
        <br>
        <label>Órgão Emissor: </label>
        <br>
        <input type="text" placeholder="">
        <br>
        <label>Estado Emissor: </label>
        <br>
        <input type="text" placeholder="">
        <br>
        <a class="form-button" href='/newuser/myadress'>Prosseguir</a>
      </form>
    </div>
  `
}
function renderMyAdress (){
  return`
  <div class="progress">point</div>
  <div class="form-container">
    <p>Meu Endereço</p>
    <form class="#">
      <label>CEP: </label>
      <br>
      <input type="text" name="cep" maxlength="9" OnKeyPress="format('#####-###', this)">
      <br>
      <label>Rua: </label>
      <br>
      <input type="text" placeholder="Av, Rua...">
      <br>
      <label>Número: </label>
      <br>
      <input type="text">
      <br>
      <label>Complemento: </label>
      <br>
      <input type="text" placeholder="ap, bloco...">
      <br>
      <label>Bairro: </label>
      <br>
      <input type="text">
      <br>
      <label>Cidade: </label>
      <br>
      <input type="text">
      <br>
      <label>Estado: </label>
      <br>
      <input type="text">
      <br>
      <a class="form-button" href='/newuser/myincome'>Prosseguir</a>
    </form>
  </div>
  `
}

function renderMyIncome(){
  return `
  <div>
    <p>Informe sua renda</p>
    <form>
      <label>Salario(R$): </label>
      <br>
      <input type="text" OnKeyPress="format('##,##', this)">
      <br>
      <label>Empresa: </label>
      <br>
      <input type="text">
      <br>
      <label>Cargo: </label>
      <br>
      <input type="text">
      <br>
      <a class="form-button" href='/newuser/docvalidation'>Prosseguir</a>
    </form>
  </div>
  `
}

function renderDocValidation(){
  return `

  `
}

function rederLimitAccount(){
  return `
  <div class="">
    <div class="">
      <i class="fas fa-check-circle"></i>
      <p>A criação da sua conta foi aprovada!</p>
    </div>
    <p>Seu limite é de R$ ${value}</p>
    <p>Crie seu acesso a conta:</p>
    <form class="">
      <label>E-mail</label>
      <br>
      <input type="email">
      <br>
      <label>Senha</label>
      <br>
      <input type="password">
      <br>
      <label>Confirmar Senha</label>
      <br>
      <input type="password">
      <br>
      <a onclick="sendNewUser()">Enviar</a>
    </form>
  </div>
  `
}
function deniedAccount(){
  return`
    <div class="">
      <div class="">
        <i class="fas fa-times-circle"></i>
        <p>A criação da conta foi negada.</p>
      </div>
      <p>Informe seu e-mail para que nossa equipe entre em contato para outra tentativa:</p>
      <input type="email" placeholder="e-mail">
      <button type="button" name="button">Enviar</button>
    </div>
  `
}
