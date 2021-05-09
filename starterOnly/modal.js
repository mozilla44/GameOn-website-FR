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
let regexBirthdate = /\d/;
let regexQuantity= /^\d{1,2}$/;

//test regex
let testFirst = regexName.test(firstName)
let testLast = regexName.test(lastName)
let testEmail = regexEmail.test(emailAdress)
let testBirthdate = regexBirthdate.test(birthDate)
let testQuantity = regexQuantity.test(numberOfEvents)


//validate form fuction 

 
function validate (){
  
  if (testFirst == false){
    let inputFirst = document.getElementById("input_first");
    	let errorMsgFirst = document.createElement("p");
      errorMsgFirst.innerHTML= "veuillez entrer un prénom valide"
      errorMsgFirst.setAttribute("class" , "error_mssg")
			inputFirst.appendChild(errorMsgFirst);
      return false;
  }
  if (testLast == false){
    let inputLast = document.getElementById("input_last");
    let errorMsgLast = document.createElement("p");
    errorMsgLast.innerHTML= "veuillez entrer un nom valide"
    errorMsgLast.setAttribute("class" , "error_mssg")
		inputLast.appendChild(errorMsgLast);
    return false;
  }
  if (testEmail == false){
    let inputEmail = document.getElementById("input_email");
    let errorMsgEmail = document.createElement("p");
    errorMsgEmail.innerHTML= "veuillez entrer une adresse email valide"
    errorMsgEmail.setAttribute("class" , "error_mssg")
		inputEmail.appendChild(errorMsgEmail);
    return false;
  }
}
 

/* function validate (){
  if (firstName == ""){
      let inputFirst = document.getElementById("input_first");
    	let errorMsgFirst = document.createElement("p");
      errorMsgFirst.innerHTML= "veuillez entrer un prénom valide"
      errorMsgFirst.setAttribute("class" , "error_mssg")
			inputFirst.appendChild(errorMsgFirst);
    }
  if (lastName == ""){
    let inputLast = document.getElementById("input_last");
    let errorMsgLast = document.createElement("p");
    errorMsgLast.innerHTML= "veuillez entrer un nom valide"
    errorMsgLast.setAttribute("class" , "error_mssg")
		inputLast.appendChild(errorMsgLast);
  }
  if (emailAdress == ""){
    let inputEmail = document.getElementById("input_email");
    let errorMsgEmail = document.createElement("p");
    errorMsgEmail.innerHTML= "veuillez entrer une adresse email valide"
    errorMsgEmail.setAttribute("class" , "error_mssg")
		inputEmail.appendChild(errorMsgEmail);
  }
  if (firstName == "" || lastName == "" || emailAdress == "" ){
    return false
  }
} */
// validation reussie 


//success message 
function hideSuccess(){
  document.getElementById("form_success").style.display = "none"
}

