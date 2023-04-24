const listEl = document.querySelector('#categories');

console.log(`Number of categories: ${listEl.childElementCount}`);

const listElchildrenArr = Array.from(listEl.children);

listElchildrenArr.forEach((element) => {
    console.log(`Category: ${element.firstElementChild.textContent}`)
    console.log (`Elements: ${element.lastElementChild.childElementCount}`)
});