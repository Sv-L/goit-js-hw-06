const inputEl = document.querySelector('#font-size-control');
const spanTextEl = document.querySelector('#text');

const handleleFontSizeTextInput = () =>
    spanTextEl.style.fontSize = `${inputEl.value}px`;

inputEl.addEventListener('input', handleleFontSizeTextInput);