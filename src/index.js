let b= [7.35, 0.12,  -7,  3.12, 2.87 , -4.12, 5.32, 6.5,12]
console.log(b);
let S = 0;
let a = [];
let c = [];
k = 0;
p = 0;

for (let i = 0; i < b.length; i++){
    if(b[i] > 0) {
        S= S+b[i];
    }
}

for(let i = 0; i < b.length; i++){
    if(Math.abs(b[i]) < 4) {
        a[k] = b[i];
        k++;
    } else {
        c[p] = b[i];
        p++;
    }
}

p = 0;

for(let i = a.length; p < c.length; i++) {
    a[i] = c[p];
    p++;
}

console.log(a);
console.log(c);