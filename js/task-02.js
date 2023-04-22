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
  return itemEl
});

listIngredientsEl.append(...itemsForIngridientsList);