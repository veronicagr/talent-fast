const database = firebase.database();
const USER_ID = localStorage.getItem("userId");

$(document).ready(function() {
  $("#login-button").click(loginClick);
  $("#sign-up-button").click(signUpClick);
});

function registerNewUser(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(response) {
      const userId = response.user.uid;
      database.ref("users/" + userId).set({
        email: email
      });
      redirectToProfile(userId);
    })
    .catch(function(error) {
      handleError(error);
    });
}

function handleError(error) {
  const errorMessage = error.message;
  alert(errorMessage);
}

function redirectToProfile(userId) {
  localStorage.setItem("userId", userId)
  window.location = "/login";
}

function signUpClick(event) {
  event.preventDefault();
  const email = $(".sign-up-email").val();
  const password = $(".sign-up-password").val();
  registerNewUser(email, password);
}

function loginClick(event) {
  event.preventDefault();
  const email = $(".login-email").val();
  const password = $(".login-password").val();
  signInUser(email, password);
}

function signInUser(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(response) {
      const userId = response.user.uid;
      redirectToProfile(userId);
    })
    .catch(function(error) {
      handleError(error)
    });
}

function verifyCPF(event) {
  event.preventDefault();
  let numberCPF = $('#cpf').val();
  let status = validarCpf(numberCPF);
  if (status === false) {
    $('#cpf').before('<p style="color:red">CPF inválido</p>');
  } else {
    cpfRequest(numberCPF);
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
  let numberCPF = sessionStorage.getItem('CPF');
  calcLimit(numberCPF);
  page.redirect('/newuser/limit');
}

function changeToClientsSituation(event) {
  event.preventDefault();
  page.redirect('/useraccount');
}

function cpfRequest(numberCPF) {
  let nCPF = numberCPF.replace(/\.|\-/g, '');
  database.ref('/consultaCPF/' + nCPF).once('value')
    .then(function(snapshot) {
      if (snapshot.val().blacklist === true || snapshot.val().totalOcorrencias > 0) {
        $('#request-answer').append(`<h3 class="request-answer red">Consulta realizada. Infelizmente, seu CPF não foi aprovado.</h3>`);
        setTimeout(() => {
          page.redirect('/newuser/refused');
        },2500)
      } else {
        $('#request-answer').append(`<h3 class="request-answer green">Consulta realizada, CPF aprovado!</h3>`);
        sessionStorage.setItem('CPF', nCPF);
        setTimeout(() => {
          page.redirect('/newuser/myinformations');
        },2000)
      }
    })
}

function calcLimit(numberCPF) {
  database.ref('/consultaCPF/' + numberCPF).once('value')
    .then(function(snapshot) {
      if (snapshot.val().score > 0 && snapshot.val().score < 100) {
        console.log("Seu limite é de R$ 500,00");
      } else if (snapshot.val().score >= 100 && snapshot.val().score < 500) {
        console.log("Seu limite é de R$ 2000,00");
      } else if (snapshot.val().score >= 500 && snapshot.val().score <= 1000) {
        console.log("Seu limite é de R$ 4000,00");
      }
    })
}

function format(mask, doc) {
  let i = doc.value.length;
  let out = mask.substring(0,1);
  let txt = mask.substring(i);

  if (txt.substring(0,1) != out){
      doc.value += txt.substring(0,1);
  }
}

function sendNewUser(event) {
  event.preventDefault();
  $('#request-answer').append(`<h3 class="request-answer">Cadastro efetuado! Faça <a href="/login" class="login-link">login</a></h3>`);
}
