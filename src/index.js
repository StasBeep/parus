"use strict";

let n = +prompt("Введите n-угольник");
let R = +prompt("Введите R");

let result = storona(R, n);

console.log(result);

 function storona(R, n) {
    let a = 2 * R * Math.sin(180/n);
    let p = n * a;
    return p;
 }