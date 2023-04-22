const valueCounterEl = document.querySelector('#value');
const btnDecrementEl = document.querySelector('button[data-action]');
const btnIncrementEl = document.querySelector('button[data-action=increment]');

let counterValue = 0;
valueCounterEl.textContent = counterValue;

const handleBtnDecrementClick = () => valueCounterEl.textContent = counterValue -= 1;
btnDecrementEl.addEventListener("click", handleBtnDecrementClick);

const handleBtnIncrementClick = () => valueCounterEl.textContent = counterValue += 1;
btnIncrementEl.addEventListener("click", handleBtnIncrementClick);