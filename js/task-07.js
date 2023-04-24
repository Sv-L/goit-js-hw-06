const inputEl = document.querySelector('#font-size-control');
const spanTextEl = document.querySelector('#text');

spanTextEl.style.fontSize = `${inputEl.value}px`;

function handleleFontSizeTextInput () {
   return spanTextEl.style.fontSize = `${inputEl.value}px`
};

inputEl.addEventListener('input', handleleFontSizeTextInput);