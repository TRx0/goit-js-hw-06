const inputEl = document.querySelector(`#font-size-control`);
const textEl = document.querySelector(`#text`)

inputEl.addEventListener(`input`, onChangeSpanText);
textEl.addEventListener(`input`, onChangeSpanText);

function onChangeSpanText(event){
    textEl.style.fontSize = `${inputEl.value}px`;
}
