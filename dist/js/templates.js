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
