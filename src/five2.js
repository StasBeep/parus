let b = [-7.35, 0.12, -7, 3.12, 2.87, -4.12, 5.32, 0, 6, 5]

let result = maxElement(b);

let mas = masiv(b);
console.log(mas);

console.log(result);

console.log("Максимальный элемен " + result.maxEl);
console.log ("Номермаксэлемента " + result.numMaxElement);

function masiv(array){
    for(let b = 0; b <  array.length; b++) {
        if (array[b] < 0) {
           array[b] = Math.abs(array[b]);
        }
    }
    return array;
}

function maxElement(array) {
    let maxEl = array[0];
    let numMaxElement = 0;

    for (let b = 1; b < array.length; b++) {
        if (maxEl < array[b]) {
            maxEl = array[b];
            numMaxElement = b;
        }
    }

    return {maxEl, numMaxElement};
}