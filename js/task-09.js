function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body');
const nameColorEl = document.querySelector('.color');

const btnChangeColorEl = document.querySelector('.change-color');
btnChangeColorEl.addEventListener('click', handleChangeBgColorBodyClick);

function handleChangeBgColorBodyClick() {
  body.style.backgroundColor = `${getRandomHexColor()}`;
  nameColorEl.textContent = `${getRandomHexColor()}`;
} ;