const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const list = document.querySelector('#ingredients');

const elements = ingredients.map(element => {
    const item = document.createElement('li');
    item.textContent = element;
    return item;
});

list.append(...elements); 
console.log(list);

// const markup = ingredients.reduce((string, item) => string + `<li>${item}</li>`, "");
// console.log(markup);

//list.innerHTML = markup;