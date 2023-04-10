"use strict";

let b = [7.35, 0.12, -7, 3.12, 2.87, -4.12, 5.32,0, 6.5, 12];

console.log(b);

// Предположение
let max = b[0];
let n = 0;

// Бегаем по массиву
for(let i = 0; i < b.length; i++) {
   if(max < b[i]) {
      max = b[i];
      n = i;
   }
}

// Вывод массива
console.log(n, max);