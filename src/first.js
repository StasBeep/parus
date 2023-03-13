"use strict";

let x = +prompt("Введите x");
let y = +prompt("Введите y");

let c = x * Math.log10(Math.abs(x - 6) - (Math.sign(Math.pow(x, 2))) / (y - Math.pow(x, 3)));

console.log(c);