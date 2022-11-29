function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";

  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll("#close1");
const formElt = document.getElementById("form1");

const closeModalBtnConfirmation = document.querySelectorAll("#close2");
const validationBtn = document.getElementById("validationBtn");
const confirmDiv = document.getElementById("confirmDiv");
console.log(validationBtn);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event

closeModalBtn.forEach(elt => elt.addEventListener("click", closeModal));

closeModalBtnConfirmation.forEach(elt => elt.addEventListener("click", closeModal));



// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// close modal form
function closeModal() {
  modalbg.style.display = "none";
}


validationBtn.addEventListener('click', ($event) => {

  $event.preventDefault();

  if (passValidation()) {
    showSuccess();
  }
});



const lastInput = document.getElementById("last");

function passValidation() {

  let isValid = true;

  if (!validateInputById('first')) {
    isValid = false;
  }

  if (!validateInputById('last')) {
    isValid = false;
  }
  if (!validateInputById('email')) {
    isValid = false;
  }
  if (!validateInputById('birthdate')) {
    isValid = false;
  }
  if (!validateInputById('quantity')) {
    isValid = false;
  }
  if (!validateInputById('checkbox1')) {
    isValid = false;
  }
  // if (document.querySelector('#checkbox1:checked') === null) {
  //   isValid = false;
  // }

  return isValid;
}

function showSuccess() {
  confirmDiv.style.display = "block";
  formElt.style.display = "none";
}

function validateInputById(id) {

  const input = document.getElementById(id);
  const inputError = document.getElementById(`${id}Error`);

  if (input.type === "checkbox") {
    if (input.checked) {

      inputError.style.display = "none";
      return true;
    }

    inputError.style.display = "block";
    return false;
  }

  if (!input.checkValidity()) {
    inputError.style.display = "block";
    return false;
  }

  inputError.style.display = "none";
  return true;
}




// form elements 

const firstElt = document.getElementById('first');
const lastElt = document.getElementById('last');
const quantityElt = document.getElementById('quantity');
const radioButton = document.getElementsByName('location');

const checked = document.querySelector('#checkbox1:checked') !== null;
console.log(checked);

