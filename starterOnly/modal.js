function editNav() {
  let x = document.getElementById("myTopnav");
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


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  if (window.matchMedia('(min-width: 751px)').matches){
    modalbg.style.backgroundColor = "white";
  }
  if (window.matchMedia('(max-width: 750px)').matches){
    modalbg.style.top = "2em"
    modalbg.style.backgroundColor = "transparent"
  }
  
}

// close modal event
document.getElementById("close_modal").addEventListener("click" , hideModal)

// close modal function
function hideModal(){
  modalbg.style.display = "none";
}

// get input values
let firstName = document.getElementById("first").value;
let lastName = document.getElementById("last").value;
let emailAdress = document.getElementById("email").value;
let birthDate = document.getElementById("birthdate").value;
let numberOfEvents = document.getElementById("quantity").value;


// regex 
let regexName = /^\D{2,}$/;
let regexEmail = /^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]­{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/;
let regexBirthdate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
let regexQuantity= /^\d{1,2}$/;

//test regex
let testFirst = regexName.test(firstName)
let testLast = regexName.test(lastName)
let testEmail = regexEmail.test(emailAdress)
let testBirthdate = regexBirthdate.test(birthDate)
let testQuantity = regexQuantity.test(numberOfEvents)

// listen for changes 
document.getElementById("first").addEventListener("change" , validate);
document.getElementById("last").addEventListener("change" , validate)
document.getElementById("email").addEventListener("change", validate)
document.getElementById("birthdate").addEventListener("change" , validate)
document.getElementById("quantity").addEventListener("change", validate);

//validate form fuction 

 
function validate (){
  
  if (testFirst == false){
    document.getElementById("errorFirst").style.display = "block";
    document.getElementById("errorFirst").innerHTML = "Veuillez entrer un prénom valide";
    document.getElementById("first").style.border = "2px solid red";
  }
  if (testLast == false){
    document.getElementById("errorLast").style.display = "block";
    document.getElementById("errorLast").innerHTML = "Veuillez entrer un nom valide";
    document.getElementById("last").style.border = "2px solid red";
  }
  if (testEmail == false){
    document.getElementById("errorEmail").style.display = "block";
    document.getElementById("errorEmail").innerHTML = "Veuillez entrer une adresse e-mail valide";
    document.getElementById("email").style.border = "2px solid red";
  }
  if (testBirthdate == false){
    document.getElementById("errorBirthdate").style.display = "block";
    document.getElementById("errorBirthdate").innerHTML = "Veuillez entrer une date valide";
    document.getElementById("birthdate").style.border = "2px solid red";
  }
  if (testQuantity == false){
    document.getElementById("errorQuantity").style.display = "block";
    document.getElementById("errorQuantity").innerHTML = "Veuillez entrer un nombre valide";
    document.getElementById("quantity").style.border = "2px solid red";
  }
  if (document.getElementById("checkbox1").checked == false){
    document.getElementById("checkboxRequired").style.display = "block";
    document.getElementById("checkboxRequired").innerHTML = "Veuillez accepter les conditions générales";
  }
  if (testFirst == false || testLast == false || testEmail == false || testQuantity == false || testBirthdate == false || document.getElementById("checkbox1").checked == false){
    return false
  }
  if (testFirst == true && testLast == true && testEmail == true && testQuantity == true && testBirthdate == true && document.getElementById("checkbox1").checked == true){
    return true
  }
}
 
//success message 
function hideSuccess(){
  document.getElementById("form_success").style.display = "none"
}

