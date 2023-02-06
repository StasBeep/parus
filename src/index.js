"use strict";

let n = +prompt("Введите n-угольник");
let R = +prompt("Введите R");

let result = storona(R, n);

console.log(result);

// Функция (метод) входные параметры: R, n
 function storona(R, n) {
    let a = 2 * R * Math.sin(180/n);
    let p = n * a;
    // return - возврат значения p в result (строка 6)
    return p;
 }