const inputText = document.querySelectorAll(".input_text")
const radios = document.querySelectorAll(".radio");
const form = document.querySelector('form');
const dropdown = document.querySelector('.dropdown');
const submitBt = form.querySelector(".submitBt");
let isValid = false;
for(input of inputText){
    input.addEventListener("change", creatValidity)
}

function creatValidity (){
    if (this.validity.patternMismatch) {
        this.classList.add("invalid");
      } else {
        this.classList.remove("invalid");
      }
}

function checkRadios(){
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
          isValid = true;
          break
      }
    }
}

form.addEventListener('input', function () {
    checkRadios()
    if (form.checkValidity()) {
        if(!isValid) return
        submitBt.classList.remove("submitDisabled");
        submitBt.removeAttribute('disabled');
    } else {
        submitBt.classList.add("submitDisabled")
        submitBt.setAttribute('disabled', true);
    }
  });
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = form.querySelector('input[name="Username"]').value;
    const password = form.querySelector('input[name="Password"]').value;
    const textLabel = form.querySelector('input[name="textLabel"]').value;
    const radio = form.querySelector('input[name="radio"]').value;
    const select = dropdown.value;    
    const message = {
        userName : username,
        Password : password,
        inputTextLabel : textLabel, 
        radioSelection : radio,
        dropdownTitle : select

    }
    alert(JSON.stringify(message))
  });
