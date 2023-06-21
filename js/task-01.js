let category = document.getElementById('categories');
let categoryAnimal = document.getElementById('categoriesAnimal');
let categoryProducts = document.getElementById('categoriesProducts');
let categoryTechnologies = document.getElementById('categoriesTechnologies');
category.append('Number of categories: ' + category.children.length);
category.insertAdjacentHTML(
  'beforeend',
  '<li>Category: Animals</li>' +
    '<span>Elements:</span> ' +
    categoryAnimal.children.length,
);
category.insertAdjacentHTML(
  'beforeend',
  '<li>Category: Products</li>' +
    '<span>Elements:</span> ' +
    categoryProducts.children.length,
);
category.insertAdjacentHTML(
  'beforeend',
  '<li>Category: Technologies</li>' +
    '<span>Elements:</span> ' +
    categoryTechnologies.children.length,
);
