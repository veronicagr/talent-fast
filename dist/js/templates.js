function renderIndex() {
  return `
    <div class="#">
      <h2>Bem-vindo(a) ao Future Bank, abra a sua conta on-line e confie na gente para cuidar de seus investimentos.</h2>
    </div>
  `
}

function renderNewUser() {
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
        <a class="form-button" type="submit" placeholder="Submit" onclick="verifyCPF()">Consultar</a>
      </form>
    </div>
  `
}

function renderMyInformations() {
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
        <select>
        <option value="casado">CASADO(A)</option>
        <option value="solteiro">SOLTEIRO(A)</option>
        <option value="solteiro">DIVORCIADO(A)</option>
        <option value="solteiro">OUTROS(A)</option>
        </select>
        <br>
        <label>Celular: </label>
        <br>
        <input type="number" maxlength="13" OnKeyPress="formatar('(##)####-####', this)">
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
function renderMyAdress() {
  return `
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
