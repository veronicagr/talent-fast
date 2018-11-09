<<<<<<< HEAD
const validarCpf = require('validar-cpf');

<<<<<<< HEAD
const cpfValidate = require('validar-cpf');
const numberCPF = $('#cpf');

function validator(numberCPF) {
  return cpfValidate(numberCPF);
=======
function verifyCPF() {
  let numberCPF = $('#cpf').val();
  console.log(numberCPF);
  console.log(validarCpf(numberCPF));
>>>>>>> cd41a1c3876eab7036aa84652163df8751bef448
=======
function verifyCPF() {
  let numberCPF = $('#cpf').val();
  let status = validarCpf(numberCPF);
  if(status == false){
    $('#cpf').before('<p style="color:red">CPF inválido</p>');
  }else{
    page.redirect('/newuser/myinformations')
  }
}
const validarCpf = input => {
  const cpf = input.replace(/\D/g, '');
  if (cpf === '' || cpf.length !== 11 || !/^\d{11}$/.test(cpf)) {
  	return false;
  }
  const digits = cpf.split('').map(x => parseInt(x))
  for (let j = 0; j < 2; j++) {
    	let sum = 0;
    	for (let i = 0; i < 9 + j; i++) {
    		sum += digits[i] * (10 + j - i)
    }
    let checkDigit = 11 - sum % 11;
    if (checkDigit === 10 || checkDigit === 11) {
    	checkDigit = 0;
    }
    if (checkDigit !== digits[9 + j]) {
    	return false;
    }
  }
  return true;
>>>>>>> 396e9f720ceebcd0a3f0c655c1e42982a360b18e
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
