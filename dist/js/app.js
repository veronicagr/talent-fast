
const database = firebase.database();

function verifyCPF(event) {
  event.preventDefault();
  let numberCPF = $('#cpf').val();
  let status = validarCpf(numberCPF);
  if (status === false) {
    $('#cpf').before('<p style="color:red">CPF inválido</p>');
  } else {
    cpfRequest(numberCPF);
    page.redirect('/newuser/myinformations');
  }
}
const validarCpf = input => {
  const cpf = input.replace(/\D/g, '');
  if (cpf === '' || cpf.length !== 11 || !/^\d{11}$/.test(cpf)) {
  	return false;
  }
  const digits = cpf.split('').map(x => parseInt(x));
  for (let j = 0; j < 2; j++) {
    	let sum = 0;
    	for (let i = 0; i < 9 + j; i++) {
    		sum += digits[i] * (10 + j - i);
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


function cpfRequest(numberCPF) {
  // return fetch('https://talent-fest-e8129.firebaseio.com/consultaCPF.json')
  //   .then(response => response.json())
  //   .then(json => json)
  database.ref('/consultaCPF/').once('value')
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
      let childKey = childSnapshot.key;
      console.log(childSnapshot.key);
      let childData = childSnapshot.val();
      console.log(childSnapshot.val());
      // childSnapshot.forEach(function(d) {
      //   movies.push(d.val())
      // })
      });
    })

    .catch(error => handleError(error));
};

<<<<<<< HEAD

function handleError(event) {
  console.log(event);
=======
function loadCPF(data) {
  $.each(data, function(index, value) {
  });
>>>>>>> ce5b25e38fc9cb76a3bbf3d369be4ac0b6695a4f
}


function format(mask, doc) {
  let i = doc.value.length;
  let out = mask.substring(0,1);
  let txt = mask.substring(i);

  if (txt.substring(0,1) != out){
      doc.value += txt.substring(0,1);
  }
}
