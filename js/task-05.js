const userName = document.querySelector('h1 #name-output');
const input = document.querySelector('#name-input');

function makeUserName () {
    if (input.value.length === 0) {
        userName.textContent = 'Anonymous';
    } else {
        userName.textContent = input.value;
    }
}

input.addEventListener('input', makeUserName);