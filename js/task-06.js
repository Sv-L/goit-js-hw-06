const inputEl = document.querySelector('#validation-input');

const handleleInputsBorderStyleBlur = () =>
    (inputEl.value.length === Number(inputEl.dataset.length)) ?
        inputEl.classList = 'valid':
        inputEl.classList = 'invalid';

inputEl.addEventListener('blur', handleleInputsBorderStyleBlur);