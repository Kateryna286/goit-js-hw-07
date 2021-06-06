const dataInput = document.querySelector('#validation-input');

dataInput.addEventListener("focus", event => {
  console.log('Инпут в фокусе');
});

dataInput.addEventListener("blur", event => {
    console.log('Инпут потерял фокус');
    console.log(event);
    const inputValue = event.currentTarget.value;
    console.log(inputValue);
  if (inputValue.length <  dataInput.dataset.length) {
    event.currentTarget.classList.add("invalid");
  } 
  else {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.add("valid");
  };
});

