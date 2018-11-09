function verifyCPF(event) {
  event.preventDefault();
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
}

function changeToAdressForm(event) {
  event.preventDefault();
  page.redirect('/newuser/myadress')  
}

function changeToIncome(event) {
  event.preventDefault();
  page.redirect('/newuser/myincome')  
}

function changeToDocValidation(event) {
  event.preventDefault();
  page.redirect('/newuser/docvalidation')  
}

function changeToLimit(event) {
  event.preventDefault();
  page.redirect('/newuser/limit')  
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
