"use strict";
let x = +prompt("Введите x:");
let y = Number(prompt("Введите y:"));

console.log(x+y);

let t = Math.cos(Math.PI / 7) * Math.pow(Math.sin(x-8*y), 2) / (2,7*(x-Math.PI));

alert("Результа t: " + t);

console.log(t);