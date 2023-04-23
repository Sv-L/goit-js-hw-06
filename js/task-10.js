function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('#controls input');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const containerEl = document.querySelector('#boxes');
const boxesFragment = document.createDocumentFragment();

function startMakeBoxes() {
  const amount = Number(inputEl.value);
  createBoxes(amount);
}

btnCreateEl.addEventListener('click', startMakeBoxes);

function createBoxes(amount) {
  for (let i = 1; i <= amount; i++){
    const boxCreate = document.createElement('div');
    boxCreate.style.backgroundColor = `${getRandomHexColor()}`;
    let size = 20 + i * 10;
    boxCreate.style.width = `${size}px`;
    boxCreate.style.height = `${size}px`;
    boxesFragment.appendChild(boxCreate);
  } containerEl.append(boxesFragment);
};
function destroyBoxes() {
  containerEl.innerHTML = '';
}

btnDestroyEl.addEventListener('click', destroyBoxes);
