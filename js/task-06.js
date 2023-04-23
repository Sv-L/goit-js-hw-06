const inputEl = document.querySelector('#validation-input');

const handleInputsBorderStyleBlur = () =>
    (inputEl.value.length === Number(inputEl.dataset.length)) ?
        inputEl.classList = 'valid':
        inputEl.classList = 'invalid';

inputEl.addEventListener('blur', handleInputsBorderStyleBlur);