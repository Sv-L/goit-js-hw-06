function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('#controls input');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const containerEl = document.querySelector('#boxes');

btnCreateEl.addEventListener('click', startMakeBoxes);
btnDestroyEl.addEventListener('click', destroyBoxes);

const min = inputEl.min;
const max = inputEl.max;

function startMakeBoxes() {
  const amount = Number(inputEl.value);
  if (amount >= min && amount <= max) {
    createBoxes(amount);
  } else {
    alert(`Please, enter a number from ${min} to ${max}`);
  }
};

function createBoxes(amount) {
  let boxesHtml = '';
  for (let i = 1; i <= amount; i++){
    const color = `${getRandomHexColor()}`;
    const size = 20 + i * 10;
   const boxHtml = `<div style="background-color: ${color}; width: ${size}px; height: ${size}px;"></div>`;
    boxesHtml += boxHtml;
  }
  containerEl.insertAdjacentHTML('beforeend', boxesHtml);
};

function destroyBoxes() {
  inputEl.value = '';
  containerEl.innerHTML = '';
};