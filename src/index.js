"use strict";

let operand1 = +prompt("Введите число:");
let operand2 = +prompt("Введите второе число:");
let operand3 = +prompt("Введите второе число:");
let operand4 = +prompt("Введите второе число:");
let operand5 = +prompt("Введите второе число:");

console.log(operand1, operand2, operand3);

// Преположение
let minEl = minElement(operand1, operand2, operand3);

//let minEl = Math.min(operand1, operand2, operand3);

alert(`Минимальное число: ${minEl} дорогой пользователь`);

// Преположение
minEl = minElement(operand2, operand3, operand4);

//let minEl = Math.min(operand1, operand2, operand3);

alert(`Минимальное число: ${minEl} дорогой пользователь`);


function minElement(op1, op2, op3) {
    let minEl = op1;

    if (minEl > op2) {
        minEl = op2;
    }

    if (minEl > op3) {
        minEl = op3;
    }

    return minEl;
}