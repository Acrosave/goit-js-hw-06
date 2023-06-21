const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let ulList = document.getElementById('ingredients');
for (const iterator of ingredients) {
  let list = document.createElement('li');
  list.classList.add('item');
  list.innerText = iterator;
  ulList.append(list);
}
