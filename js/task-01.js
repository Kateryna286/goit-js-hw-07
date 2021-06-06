const list = document.querySelector('#categories');

console.log(`В списке ${list.childElementCount} категории`); 

const items = document.querySelectorAll('.item');

items.forEach(el => {console.log(`Категория: ${el.firstElementChild.textContent}
Количество элементов: ${el.lastElementChild.childElementCount}`)});

// // Первый элемент

// const firstItem = mainList.firstElementChild;
// const firstItemTitle = firstItem.querySelector('h2');
// const firstItemTitleText = firstItemTitle.textContent;
// const firstItemList = firstItem.lastElementChild;
// const firstItemListElQuantity = firstItemList.children.length;

// console.log(`Категория: ${firstItemTitleText}
// Количество элементов: ${firstItemListElQuantity}`);

// // Второй элемент

// const secondItem = firstItem.nextElementSibling;
// const secondItemTitle = secondItem.querySelector('h2');
// const secondItemTitleText = secondItemTitle.textContent;
// const secondItemList = secondItem.lastElementChild;
// const secondItemListElQuantity = secondItemList.children.length;

// console.log(`Категория: ${secondItemTitleText}
// Количество элементов: ${secondItemListElQuantity}`);

// // Последний элемент

// const lastItem = mainList.lastElementChild;
// const lastItemTitle = lastItem.querySelector('h2');
// const lastItemTitleText = lastItemTitle.textContent;
// const lastItemList = lastItem.lastElementChild;
// const lastItemListElQuantity = lastItemList.children.length;

// console.log(`Категория: ${lastItemTitleText}
// Количество элементов: ${lastItemListElQuantity}`);


// const ulEL = document.querySelector('ul');

// console.log(`В списке ${ulEL.childElementCount} категории.`);

// const itemEl = document.querySelectorAll('.item');
// itemEl.forEach(elem => {
//     console.log(`Категория: ${elem.firstElementChild.textContent}, Количество элементов: ${elem.lastElementChild.childElementCount}`);
// });