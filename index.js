"use strict";


let button1 = document.querySelector('#sum');
let button2 = document.querySelector('#dev');
let button3 = document.querySelector('#div');

button1.addEventListener('click', () => {
    let operator1 = Number(document.querySelector('#op1').value);
    let operator2 = +document.querySelector('#op2').value;

    let result = operator1 + operator2;

    let elementResult = document.querySelector('#result');

    elementResult.innerHTML = `${result}`;
});

button2.addEventListener('click', () => {
    let operator1 = Number(document.querySelector('#op1').value);
    let operator2 = +document.querySelector('#op2').value;

    let result = operator1 - operator2;
    let elementResult = document.querySelector('#result');

    elementResult.innerHTML = `${result}`;



});



button3.addEventListener('click', () => {
    let operator1 = Number(document.querySelector('#op1').value);
    let operator2 = +document.querySelector('#op2').value;

    if (operator2 == 0) {
        let elementResult = document.querySelector('#result');
        elementResult.innerHTML = `Ошибка`;
    } else if(operator1 == 2){
        let elementResult = document.querySelector('#result');
        elementResult.innerHTML = `Привет`;
    } else {
        let result = operator1 / operator2;

        let elementResult = document.querySelector('#result');

        elementResult.innerHTML = `${result}`;
    }
});
console.log(button1);