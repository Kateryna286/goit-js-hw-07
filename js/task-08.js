// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
// после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов 
// очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px

// Создай функцию destroyBoxes(), которая очищает div#boxes.

const controlSet = document.querySelector('#controls');
const input = controlSet.firstElementChild;
const createBtn = controlSet.children[1];
const destroyBtn = controlSet.lastElementChild;
const divSet = document.querySelector('#boxes');

divSet.style.display = 'grid';
divSet.style.marginTop = '10px';
divSet.style.gap = '10px';

const randomizer = max => {
    return Math.floor(Math.random() * max);
};

function colorCreator(count) {
    const red = randomizer(count);
    const green = randomizer(count);
    const blue = randomizer(count);
    return `rgb(${red},${green},${blue})`;
}

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    destroyBoxes();
    amount = input.value;
    console.log(amount);

    for ( let i = 0; i <= amount - 1; i += 1) {
        const div = document.createElement('div');

        const rgb = colorCreator(255);
        div.style.backgroundColor = `${rgb}`;

        let size = 30 + 10 * i;

        div.style.width = `${size}px`;
        div.style.height = `${size}px`;

        divSet.appendChild(div);
    }
};

function destroyBoxes() {
    divSet.innerHTML = "";
};
