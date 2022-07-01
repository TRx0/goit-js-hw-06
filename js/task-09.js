const buttonEl = document.querySelector(`.change-color`);
const colorEl = document.querySelector(`.color`);

buttonEl.addEventListener(`click`, () =>{
  document.body.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = getRandomHexColor();
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
