function igrek(a, b, h) {

    for (let x = a; x <= b; x += h) {
        if (x > 2) {
            console.log(Math.exp(x));

        } else if (x >= -2 && x <= 2) {
            console.log(x + 4);

        } else {
            console.log(0);
        }
    }

}

let a = +prompt("Введите a");
let b = +prompt("Введите b");
let h = +prompt("Введите h");

igrek(a,b,h);

