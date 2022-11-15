"use strict";

let operand1 = +prompt("Введите число:");
let operand2 = +prompt("Введите второе число:");
let operand3 = +prompt("Введите второе число:");

console.log(operand1, operand2, operand3);

// Преположение
let minEl = operand1;

if(minEl > operand2) {
    minEl = operand2;
}

if(minEl > operand3) {
    minEl = operand3;
}

alert(`Минимальное число: ${minEl} дорогой пользователь`);