function massDelit3(array) {
    let arrayDel3 = [];
    let n = 0;

    for(let i = 0; i < array.length; i++) {
        if(array[i] % 3 === 0) {
            arrayDel3[n] = array[i];
            n++;
        }
    }

    let prois = _proisvedenie(arrayDel3);

    return prois;
}

function _proisvedenie(array) {
    let a = 1;

    for(let i = 0; i < array.length; i++) {
        a *= array[i];
    }

    return a;
}

export {massDelit3};