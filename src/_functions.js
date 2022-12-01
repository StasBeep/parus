export { operationCalculate };

/**
 * Функция запуска вычисления значения в соотвествии с операцией
 * @param { String } operation // Какая кнопка была нажата
 */
function operationCalculate(operation) {

    // Сохранение в переменные значений полей input с конвертацией в число
    let operator1 = +document.querySelector('#op1').value;
    let operator2 = +document.querySelector('#op2').value;

    switch (operation) {
        case '+':
            return _adder(operator1, operator2);
        case '-':
            return _difference(operator1, operator2);
        case '*':
            return _composition(operator1, operator2);
        case '/':
            return _division(operator1, operator2);
    }
}

/**
 * Функция суммы двух переменных
 * @param { Number } op1 // первое число
 * @param { Number } op2 // второе число
 * @returns { Number } // op1 + op2
 */
function _adder(op1, op2) {
    return op1 + op2;
}

/**
 * Функция разности двух переменных
 * @param { Number } op1 // первое число
 * @param { Number } op2 // второе число
 * @returns { Number } // op1 - op2
 */
function _difference(op1, op2) {
    return op1 - op2;
}

/**
 * Функция произведения двух переменных
 * @param { Number } op1 // первое число
 * @param { Number } op2 // второе число
 * @returns { Number } // op1 * op2
 */
function _composition(op1, op2) {
    return op1 * op2;
}

/**
 * Функция деления двух переменных
 * @param { Number } op1 // первое число
 * @param { Number } op2 // второе число
 * @returns { Number } // op1 / op2
 */
function _division(op1, op2) {
    if (op2 === 0) {
        return 'На 0 делить нельзя';
    } else {
        return op1 / op2;
    }
}