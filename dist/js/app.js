
const cpfValidate = require('validar-cpf');
const numberCPF = $('#cpf');

// function validator(numberCPF) {
//   return cpfValidate(numberCPF);
// }

<<<<<<< HEAD
function cpfRequest() {
  return fetch('https://talent-fest-e8129.firebaseio.com/consultaCPF.json')
    .then(response => response.json())
    .then(json => json)
    .catch(error => handleError(error));
};

function loadCPF(data) {
  $.each(data, function(index, value) {

  });
=======
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

function formatar(mascara, documento){
  var i = documento.value.length;
  var saida = mascara.substring(0,1);
  var texto = mascara.substring(i);

  if (texto.substring(0,1) != saida){
            documento.value += texto.substring(0,1);
  }

>>>>>>> a54435da95921f8134a4385dd6731cd8ec0a8a76
}
