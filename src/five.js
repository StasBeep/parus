let x = [-1.5, 0.1, 12,  0, -2.2, 0.5, -1, 0.3, -10];

let minEEL = minElement(x);

x = otrElement(x, minEEL)

console.log(x);
console.log(minEEL);


function minElement(array) {
    // Предположение
    let minEl = array[0];

    for(let i = 1; i < array.length; i++) {
       if(minEl > array[i]) {
            minEl = array[i];
       }
    }
    
    return minEl;
}

function otrElement(array, minEl) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] < 0) {
            array[i] = minEl; 
        }
    }

    return array;
}