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
    const data = new FormData(form)
    const message = {
        userName : data.get("Username"),
        Password : data.get("Password"),
        inputTextLabel : data.get("textLabel"), 
        radioSelection : data.get("radio"),
        dropdownTitle : dropdown.value
    }
    alert(JSON.stringify(message))
  });
