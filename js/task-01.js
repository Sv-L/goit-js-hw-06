const listEl = document.querySelector('#categories');

console.log(`Number of categories: ${listEl.childElementCount}`);

const ListElchildrenArr = Array.from(listEl.children);

ListElchildrenArr.forEach((element) => {
    console.log(`Category: ${element.firstElementChild.textContent}`)
    console.log (`Elements: ${element.children[1].childElementCount}`)
});