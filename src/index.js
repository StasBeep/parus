"use strict";

// Входные переменные
let c = +prompt("Введите c:");
let y = +prompt("Введите y:");
let x = +prompt("Введите x:");
let z = +prompt("Введите z:");

// Выходные переменные
let result = Variant31(c, y, x, z);

// Функция условий
function Variant31(C, Y, X, Z) {
   // Переменная для хранения результата
   let p;
   // Если с логическим "И"
   if(Y*Z > 0 && X > 0){
      let minEl2 = Math.min(C+Y, Math.sqrt(x));
      p = Math.max(minEl2, Y, X + Z);
      // Если с уловием и логическим "И"
   } else if(Y*Z < 0 && X > 0) {
      p = Math.min(Math.sin(X), Math.pow(Z, 3));
      // В противном случае
   } else {
      p = 1;
   }
   // Возврат результата
   return p;
}
// Вывод в консоль
console.log(result);