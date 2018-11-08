const validarCpf = require('validar-cpf');

function verifyCPF() {
  let numberCPF = $('#cpf').val();
  console.log(numberCPF);
  console.log(validarCpf(numberCPF));
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


// function cpfRequest() {
//   const url = 'https://raw.githubusercontent.com/adrianosferreira/afrodite.json/master/afrodite.json';
//
//   $.ajax({
//     type: 'GET',
//     dataType: 'json',
//     url,
//     success: loadCPF,
//     error
//   });
// }
//
// function loadCPF(data) {
//   $.each(data, function(index, value) {
//     nameRecipe = data[index].nome;
//     idRecipe = data[index]._id['$oid'];
//     showAllRecipes();
//   });
// }

function format(mask, doc){
  let i = doc.value.length;
  let out = mask.substring(0,1);
  let txt = mask.substring(i);

  if (txt.substring(0,1) != out){
      doc.value += txt.substring(0,1);
  }
}
