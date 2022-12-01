"use strict";
// Подключение функций
import {operationCalculate} from "./_functions.js";

// Привязываем кнопки к переменным
let add = document.querySelector('#add');
let diff = document.querySelector('#diff');
let composition = document.querySelector('#composition');
let division = document.querySelector('#division');

// Переменная-ссылка для вывода результата
let resultElement = document.querySelector('#result');
let result = 0;

// Навязываем слушателя на кнопки (клик)
add.addEventListener('click', () => {
   result = operationCalculate('+');
   resultElement.innerHTML = `${result}`
});
diff.addEventListener('click', () => {
    result = operationCalculate('-');
    resultElement.innerHTML = `${result}`
 });
composition.addEventListener('click', () => {
    result = operationCalculate('*');
    resultElement.innerHTML = `${result}`
 });
division.addEventListener('click', () => {
    result = operationCalculate('/');
    resultElement.innerHTML = `${result}`
 });