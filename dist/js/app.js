const cpfValidate = require('validar-cpf');
const numberCPF = $('#cpf');

function validator(numberCPF) {
  return cpfValidate(numberCPF);
}

function cpfRequest() {
  return fetch('https://talent-fest-e8129.firebaseio.com/consultaCPF.json')
    .then(response => response.json())
    .then(json => json)
    .catch(error => handleError(error));
};

function loadCPF(data) {
  $.each(data, function(index, value) {

  });
}
