"use strict";

console.log("Привет");

let elem = document.getElementById('sum');

console.log(elem);

elem.addEventListener('click', () => {
    // Сохранение в переменные значения полей
    // + перед document - это перевод значения поля в число (по умолчанию это строка)
    // .value - это прочитать поле input и в этом input взять всё, что лежит в value, то есть число
    let oprand1 = +document.querySelector('#op1').value;
    let oprand2 = +document.querySelector('#op2').value;

    // Суммируем значения
    let result = oprand1 + oprand2;

    // Получаем тег span с id result
    // С помощью функции innerHTML вывод результат в этот тег (по умолчанию в теге span ничего не лежит)
    document.querySelector('#result').innerHTML = `${result}`;
});

