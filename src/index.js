"use strict";

// Первый вид цикла
for(let i = 0; i < 100; i++) {
   // i++ => i = i + 1;
   console.log('Привет, мир!');
}


// Второй вид цикла
let i = 0;

while(i < 100) {
   console.log('Привет, мир!');
   i++;
}

// Третий вид цикла

i = 100;

do {
   console.log('Привет, мир!');
   i++;
} while (i < 100)