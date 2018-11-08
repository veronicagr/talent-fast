function renderIndex(){
  return `
    <div class="#">
      <p>Bem Vind@ ao Future Bank, abra a sua conta on-line e confie em nós para cuidar de seus investimentos.</p>
    </div>
  `
}

function renderNewUser(){
  return `
    <div form-container>
      <h3>Junte-se a nós</h3>
      <form class="#">
        <p>Crie sua conta</p>
        <label>Nome: </label>
        <br>
        <input type="text" name="Name" placeholder="Nome completo">
<<<<<<< HEAD
        <br>
        <label>CPF: </label>
        <br>
        <input id="cpf" type="text" name="CPF" placeholder="CPF" maxlength="12" OnKeyPress="formatar('##-####-####', this)">
        <br>
        <button class="form-button" type="submit" placeholder="Submit"><a href="/newuser/myinformations">Consultar</a></button>
      </form>
=======
        <input id="cpf" type="text" name="CPF" placeholder="CPF" maxlength="14" OnKeyPress="format('###.###.###-##', this)">
        <button onclick="verifyCPF()" type="submit" value="Submit"><a href="/newuser/myinformations">Consultar</a></button>
      </div>
>>>>>>> cd41a1c3876eab7036aa84652163df8751bef448
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
        <input type="number" maxlength="12" OnKeyPress="formatar('##-####-####', this)">
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
        <button class="form-button" type="submit" name="button"><a href='/newuser/myadress'>Prosseguir</a></button>
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
      <input type="number" name="cep" maxlength="9" OnKeyPress="format('#####-###', this)" onblur="verifyCPF(this)">
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
      <button class="form-button" type="submit" name="button"><a href='/newuser/myadress'>Prosseguir</a></button>
    </form>
  </div>
  `
}
