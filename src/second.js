"use strict";


let a = +prompt("Введите a");
let b = +prompt("Введите b");

let y = ((b - a) / 6) * (oprIntegral(a) + 4 * oprIntegral((a + b)/6) + oprIntegral(b));

console.log(y);

function oprIntegral(x) {
    let f = Math.sqrt(2 * x + 1);
    return f;
    // return Math.sqrt(2 * x + 1);
} 