let x = +prompt("Введите x");
let y = +prompt("Введите y");
let z = +prompt("Введите z");
let a = +prompt("Введите a");
let b = +prompt("Введите b");

let result = variant5(x, y, z, a, b);

function variant5(x, y, z, a, b) {

    let g;

    if (y > 0 && x * Math.pow(y,2) > 0) {
        
        let MaxEl = Math.sqrt(1 + Math.pow(z * x, 2));
       
        g = Math.max(MaxEl, Math.pow(y, 3));

    } else if (y > 0 && x * Math.pow(y,2) <= 0) {
        
        let MaxEl = Math.max(y, z);
       
        g = Math.min(MaxEl, a + x);

    } else {
        g = -b* Math.exp(y);

    }

    return g;
    
}

console.log(result);