"use strict";

for(let i = 0; i < 100; i++) {
    console.log(i);
}
// i = i + 1;

let i = 0;

while(i < 100) {
    console.log(i);
    i++;
}



/*while(true) {
    let n = +prompt("Введите число:");

    if (n == 0) {
        break;
    }
}*/

i = 0;

do {
    console.log(i);
    i++;
} while(i < 100);

// i = i + h;

let a = +prompt("Введите a");
let b = +prompt("Введите b");
let h = +prompt("Введите h");


let y;
for(let x = a; x <= b; x += h) {
    y = elemelFunc(x)
    console.log(y);
}


function elemelFunc(x) {
    return 34 * x - 25;
}