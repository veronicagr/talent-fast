function renderIndex(){

}

function renderNewUser(){
  return `
    <div>
      <h3>Junte-se a nós</h3>
      <div class="#">
        <p>Crie sua conta</p>
        <input type="text" name="Name" placeholder="Nome completo">
        <input type="text" name="CPF" placeholder="CPF" maxlength="11">
        <button type="submit" value="Submit"><a href="/newuser/myinformations">Consultar</a></button>
      </div>
    </div>
  `
}

function renderMyInformations(){
  return `
    <div class="#">
      <p>Complete seu cadastro</p>
      <form class="#">
        Nascimento: <input type="date" value="date">
        Estado Civil: <input type="text" value="estado civil">
        Numero de Celular: <input type="number" value="" maxlength="10">
        RG: <input type="text" value="rg number" maxlength="14">
        Orgão Emissor: <input type="text" value="Orgão Emissor do RG">
        Estado Emissor: <input type="text" value="Estado Emissor">
        <button type="submit" name="button"><a href='/newuser/myadress'>Prosseguir</a></button>
      </form>
    </div>
  `
}
function renderMyAdress (){
  return`
    <div class="#">
      <p>Meu Endereço</p>
      <form class="#">
        CEP: <input type="number" maxlength="8" placeholder="00000000" onblur="verifyCPF()">
        Rua: <input type="text" placeholder="Av, Rua...">
        Numero: <input type="text">
        Complemento: <input type="text" placeholder="ap, bloco...">
        Bairro: <input type="text">
        Cidade: <input type="text">
        Estado: <input type="text">
        <button type="submit" name="button"><a href='/newuser/myadress'>Prosseguir</a></button>
      </form>
    </div>
  `
}
