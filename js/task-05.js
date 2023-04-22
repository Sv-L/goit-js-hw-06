const userName = document.querySelector('h1 #name-output');
const input = document.querySelector('#name-input');

const makeUserName = () =>
    (input.value.length === 0) ? 
        userName.textContent = 'Anonymous':
        userName.textContent = input.value;

input.addEventListener('input', makeUserName);