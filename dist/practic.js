"use strict";
// #1
const strTest = 'bebbe';
const numTest = 0.5;
const boolTest = true;
// #2
let test1 = 3;
let test2 = 'abc';
console.log('sum = ' + test2 + test1);
// #3
let arr = ['a', 'b', 'c', 'd', 'e'];
let arr2 = [0, 1, 2, 3, 4, 5];
// #4
let date = { year: 2025, month: 12, day: 31 };
date = { year: 2025, month: 12, day: 7 };
console.log(date);
// #5
date.month = 100;
console.log(date);
// #6
let res = 0;
for (let i = 0; i < 100; i++) {
    res++;
}
console.log(res);
// #7
function sum(x, y) {
    return x + y;
}
console.log(sum('bebe', 5));
// #8
let test12 = 123;
let test22 = 'abc';
let test32;
test32 = test12;
console.log(test32);
test32 = test22;
console.log(test32);
