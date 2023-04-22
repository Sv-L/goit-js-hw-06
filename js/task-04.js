const value = document.querySelector('#value')
let counterValue = 0;

function handleBtnDecrementClick() {
    counterValue -= 1;
    return value.textContent = counterValue;
};

function handleBtnIncrement() {
    counterValue += 1;
    return value.textContent = counterValue;
};

const btnDecrement = document.querySelector('button[data-action]')
btnDecrement.addEventListener("click", handleBtnDecrementClick);

const btnIncrement = document.querySelector('button[data-action=increment]');
btnIncrement.addEventListener("click", handleBtnIncrement);
