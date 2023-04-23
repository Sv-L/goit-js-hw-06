const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredientsEl = document.querySelector('#ingredients');

const itemsForIngridientsList = ingredients.map(ingredient => {
  const itemEl = document.createElement('li')
  itemEl.classList.add('item')
  itemEl.textContent = `${ingredient}`
  console.log(typeof(itemEl))
  return itemEl
});
console.log(typeof(itemsForIngridientsList))
listIngredientsEl.append(...itemsForIngridientsList);
console.log(typeof(ingredients))