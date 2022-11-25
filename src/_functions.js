
/**
 * Нахождение минимального значения
 * @param {Number} op1 // оператор 1
 * @param {Number} op2 // оператор 2
 * @param {Number} op3 // оператор 3
 * @returns { Number }
 */
function minElement(op1, op2, op3) {
    let minEl = op1;

    minEl = _sravnenieNaMin(minEl, op2);

    minEl = _sravnenieNaMin(minEl, op3);

    return minEl;
}

/**
 * Сравнение двух чисел (вывод наименьшего из них)
 * @param {Number} minEl 
 * @param {Number} el 
 * @returns { Number } // наименьший элемент
 */
function _sravnenieNaMin (minEl, el) {
    if( minEl > el) {
        return el;
    } else {
        return minEl
    }
}

export { minElement };