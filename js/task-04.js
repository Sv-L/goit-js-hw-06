let counterValue = 0;

const value = document.querySelector('#value')
value.textContent = counterValue;

function handleBtnDecrementClick() {
    return value.textContent = counterValue-=1;
};

function handleBtnIncrement() {
    return value.textContent = counterValue += 1;
};

const btnDecrement = document.querySelector('button[data-action]')
btnDecrement.addEventListener("click", handleBtnDecrementClick);

const btnIncrement = document.querySelector('button[data-action=increment]');
btnIncrement.addEventListener("click", handleBtnIncrement);