"use strict";

let y;
// i+= 0.3 => i = i + 0.3;
for (let x = -3; x <= 3; x += 0.3) {
   if (x >= -2 && x <= 2) {
      y = Math.pow(x, 2);
   } else if (x > 2) {
      y = 0;
   } else if (x < -2) {
      y = 4 * Math.cos(x);
   }

   console.log(y);
}