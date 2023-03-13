"use strict";

let X = +prompt("Введите x");
let A = +prompt("Введите a");

let result = vetvlenia(A, X);

console.log(result);

function vetvlenia(a, x) {
    let y;
    
    if(a > x) {
        let minEl = firstElement(a, x);
        y = Math.min(minEl, Math.pow(Math.sin(x), 2));
    } else if(a == x) {
        y = expElement(a, x);
    } else {
        y = 1;
    }

    return y;
}



function firstElement(a, x) {
    return Math.sqrt(Math.abs(Math.cos(a*x)));
}

function expElement(a, x) {
    return Math.exp(a * x);
}