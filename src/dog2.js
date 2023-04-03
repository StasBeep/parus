"use strict";

let a = +prompt("Введите a");
let b = +prompt("Введите b");
let c = +prompt("Введите c");

let result = bissectrisa(a,b,c);


console.log(result);


function bissectrisa(a,b,c) {
    let  L = Math.sqrt(b*c*Math.pow(b+c,2)-Math.pow(a,2)) / (b+c);
     
    return L;
 }