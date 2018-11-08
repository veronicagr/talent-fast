function renderIndex(){
  return `
    <div class="#">
      <p>Bem Vind@ ao Future Bank, abra a sua conta on-line e confie em nós para cuidar de seus investimentos.</p>
    </div>
  `
}

function renderNewUser(){
  return `
    <div>
      <h3>Junte-se a nós</h3>
      <div class="#">
        <p>Crie sua conta</p>
        <input type="text" name="Name" placeholder="Nome completo">
        <input id="cpf" type="text" name="CPF" placeholder="CPF" maxlength="14" OnKeyPress="format('###.###.###-##', this)">
        <button onclick="verifyCPF()" type="submit" value="Submit"><a href="/newuser/myinformations">Consultar</a></button>
      </div>
    </div>
  `
}

function renderMyInformations(){
  return `
    <div class="#">
      <p>Complete seu cadastro</p>
      <form class="#">
        Nascimento: <input type="date">
        Estado Civil: <input type="text">
        Numero de Celular: <input type="number" maxlength="12" OnKeyPress="format('##-####-####', this)">
        RG: <input type="text" maxlength="14">
        Orgão Emissor: <input type="text">
        Estado Emissor: <input type="text">
        <button type="submit" name="button"><a href='/newuser/myadress'>Prosseguir</a></button>
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
    </form>
  </div>
  `
}
