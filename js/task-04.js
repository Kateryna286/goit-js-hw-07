// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const decBtn = document.querySelector("[data-action='decrement']");

const incBtn = document.querySelector("[data-action='increment']");

const dataCounter = document.querySelector("#value");

let counterValue = +dataCounter.textContent;

decBtn.addEventListener('click', decrement);

incBtn.addEventListener('click', increment);

function decrement () {
    counterValue -= 1;
    dataCounter.textContent = counterValue;
};


function increment () {
    counterValue += 1;
    dataCounter.textContent = counterValue;
};


