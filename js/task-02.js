const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const list = document.querySelector('#ingredients');
    
const markup = ingredients.reduce((string, item) => string + `<li>${item}</li>`, "");
    
list.innerHTML = markup;

console.log(list);

    