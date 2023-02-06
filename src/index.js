"use strict";
let result = document.querySelector("#first");
let x = +prompt("Введите x:");
let y = Number(prompt("Введите y:"));

// Вывод суммы x+y
console.log(x+y);

let t = Math.cos(Math.PI / 7) * Math.pow(Math.sin(x-8*y), 2) / (2,7*(x-Math.PI));

result.innerText = t;

console.log(t);