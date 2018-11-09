function renderIndex() {
  return `
    <div class="welcome">
      <h2>Bem-vindo(a) ao Future Bank, abra a sua conta on-line e confie na gente para cuidar de seus investimentos.</h2>
    </div>
  `
}

function renderNewUser() {
  return `
    <div class="container">
      <ul class="progressbar">
          <li class="active">cpf</li>
          <li>infos</li>
          <li>endereço</li>
          <li>trabalho</li>
          <li>docs</li>
          <li>ok!</li>
      </ul>
    </div>
    <div class="form-container">
      <h3>Junte-se a nós!</h3>
      <form class="#">
        <label>Nome: </label>
        <br>
        <input type="text" name="Name" placeholder="Nome completo">
        <br>
        <label>CPF: </label>
        <br>
        <input id="cpf" type="text" name="CPF" placeholder="CPF" maxlength="15" OnKeyPress="format('###.###.###-##', this)">
        <br>
        <button class="form-button" type="button" placeholder="Submit" onclick="verifyCPF(event)">Consultar</button>
      </form>
    </div>
  `;
}

function renderMyInformations() {
  return `
    <div class="container">
      <ul class="progressbar">
          <li class="active">cpf</li>
          <li class="active">infos</li>
          <li>endereço</li>
          <li>trabalho</li>
          <li>docs</li>
          <li>ok!</li>
      </ul>
    </div>
    <div class="form-container">
      <form class="#">
        <label>Nascimento: </label>
        <br>
        <input type="date" placeholder="">
        <br>
        <label>Estado Civil: </label>
        <br>
        <select>
        <option value="casado">CASADO(A)</option>
        <option value="solteiro">SOLTEIRO(A)</option>
        <option value="solteiro">DIVORCIADO(A)</option>
        <option value="solteiro">OUTROS(A)</option>
        </select>
        <br>
        <label>Celular: </label>
        <br>
        <input type="text" maxlength="13" OnKeyPress="format('##-#####-####', this)">
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
        <button class="form-button" type="button" onClick="changeToAdressForm(event)">Prosseguir</button>
      </form>
    </div>
  `;
}
function renderMyAdress() {
  return `
  <div class="container">
    <ul class="progressbar">
        <li class="active">cpf</li>
        <li class="active">infos</li>
        <li class="active">endereço</li>
        <li>trabalho</li>
        <li>docs</li>
        <li>ok!</li>
    </ul>
  </div>
  <div class="form-container">
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
      <button class="form-button" type="button" onClick="changeToIncome(event)">Prosseguir</button>
    </form>
  </div>
  `;
}

function renderMyIncome() {
  return `
  <div class="container">
    <ul class="progressbar">
        <li class="active">cpf</li>
        <li class="active">infos</li>
        <li class="active">endereço</li>
        <li class="active">trabalho</li>
        <li>docs</li>
        <li>ok!</li>
    </ul>
  </div>
  <div class="form-container">
    <p>Informe sua renda</p>
    <form>
      <label>Salário(R$): </label>
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
      <button class="form-button" type="button" onClick="changeToDocValidation(event)">Prosseguir</button>
    </form>
  </div>
  `;
}

function renderDocValidation() {
  return `
  <div class="container">
    <ul class="progressbar">
        <li class="active">cpf</li>
        <li class="active">infos</li>
        <li class="active">endereço</li>
        <li class="active">trabalho</li>
        <li class="active">docs</li>
        <li>ok!</li>
    </ul>
  </div>
  <div class="form-container">
    <p class="align">Para que validemos suas informações solicitamos que fotografe seus documentos em ambientes iluminados e fora do plástico de proteção. Além disso, pedimos que nos envie uma selfie com um de seus documentos em mãos.</p>
    <form>
      <label>RG: </label>
      <br>
      <input class="add-image" type="file" accept="image/*" capture="camera" value=""/>
      <br>
      <label>CPF: </label>
      <br>
      <input class="add-image" type="file" accept="image/*" capture="camera" value=""/>
      <br>
      <label>Selfie com documento: </label>
      <br>
      <input class="add-image" type="file" accept="image/*" capture="camera" value=""/>
      <br>
      <button class="form-button" type="button" onClick="changeToLimit(event)" href='/newuser/docvalidation'>Prosseguir</button>
    </form>
  </div>
  `
}

function rederLimitAccount() {
  return `
  <div class="container">
    <ul class="progressbar">
        <li class="active">cpf</li>
        <li class="active">infos</li>
        <li class="active">endereço</li>
        <li class="active">trabalho</li>
        <li class="active">docs</li>
        <li class="active">ok!</li>
    </ul>
  </div>
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
function deniedAccount() {
  return `
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


function renderLogin() {
return `
<div class="form-container">
  <h3>Login</h3>
  <form>
    <label>E-mail: </label>
    <br>
    <input type="email">
    <br>
    <label>Senha: </label>
    <br>
    <input type="password">
    <button class="form-button" type="button" onClick="changeToClientsSituation(event)">Entrar</button>
  </form>
</div>
` 
}