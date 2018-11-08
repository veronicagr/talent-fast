const cpfValidate = require('validar-cpf');
const numberCPF = $('#cpf');

function validator(numberCPF) {
  return cpfValidate(numberCPF);
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
