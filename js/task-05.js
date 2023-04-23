const userNameEl = document.querySelector('h1 #name-output');
const inputEl = document.querySelector('#name-input');

const handleAddressByUserNameInput = () =>
    (inputEl.value === '') ? 
        userNameEl.textContent = 'Anonymous':
        userNameEl.textContent = inputEl.value;

inputEl.addEventListener('input', handleAddressByUserNameInput);