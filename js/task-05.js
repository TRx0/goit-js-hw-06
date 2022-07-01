let inputEl = document.querySelector(`#name-input`);
let nameEl = document.querySelector(`#name-output`)

inputEl.addEventListener(`input`, onInputChange);
nameEl.addEventListener(`input`, onInputChange);


function onInputChange(event){
    if (event.currentTarget.value === "") {
 
        nameEl.textContent = "Anonymous";
       
      } else{
    nameEl.textContent = event.currentTarget.value;
      }
  
    
    }

