const value = document.querySelector('#value');
const btnDecrement = document.querySelector('button[data-action]');
const btnIncrement = document.querySelector('button[data-action=increment]');

let counterValue = 0;
value.textContent = counterValue;

const handleBtnDecrementClick = () => value.textContent = counterValue -= 1;
btnDecrement.addEventListener("click", handleBtnDecrementClick);

const handleBtnIncrement = () => value.textContent = counterValue += 1;
btnIncrement.addEventListener("click", handleBtnIncrement);