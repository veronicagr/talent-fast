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
        <a class="form-button" type="button" placeholder="Submit" onclick="verifyCPF()">Consultar</a>
      </form>
    </div>
  `
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
        <a class="form-button" href='/newuser/myadress'>Prosseguir</a>
      </form>
    </div>
  `
}
function renderMyAdress (){
  return`
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
      <a class="form-button" href='/newuser/myincome'>Prosseguir</a>
    </form>
  </div>
  `
}

function renderMyIncome(){
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
      <input type="text">
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
  return`
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
      <a class="form-button" href='/newuser/docvalidation'>Prosseguir</a>
    </form>
  </div>
  `
}
