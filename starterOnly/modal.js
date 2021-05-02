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

//validate form fuction 

/* document.querySelectorAll(".text-control").addEventListener("input" , validate)
 */


function validate (){
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
}


// validation reussie 

//success message 
function hideSuccess(){
  document.getElementById("form_success").style.display = "none"
}

append ()
