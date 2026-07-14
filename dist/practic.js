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
let arrAny = [123, 'abc', true];
const errorTest = null;
const TruFal = boolTest;
// #10
let answer;
answer = 'success';
let bebe = 'error';
let userDateBuyer = [2033, 8, 8];
console.log(userDateBuyer);
// #13
const user = ['john', 31];
user[0] = 'eric';
console.log(user);
// #14
const userReadOnly = ['john', 31];
// userReadOnly[0] = 'eric'; error
console.log(user);
function ValidCheck(value) {
    return value !== null && value.trim() !== '';
}
function dialoge() {
    const ask = confirm('Готовы ввести данные?');
    if (ask) {
        const emailInput = prompt('Введите вашу почту') ?? '';
        const passInput = prompt('Введите пароль') ?? '';
        const nameInput = prompt('Введите ваше настоящее имя') ?? '';
        const nicknameInput = prompt('Введите ваш никнейм') ?? '';
        if (!ValidCheck(emailInput) || !ValidCheck(passInput) || !ValidCheck(nameInput)) {
            alert('Ошибка! Все обязательные поля должны быть заполнены.');
            return dialoge();
        }
        const guest = {
            email: emailInput,
            password: passInput,
            firstname: nameInput,
            nickname: nicknameInput || undefined,
        };
        console.log('Данные пользователя: ', guest);
    }
    else {
        alert('Лана че..');
        return;
    }
}
// dialoge()
// #16 operation Rest(...)
let tpl;
tpl = ['bebebe', 1, 21, 2, 4];
console.log(tpl);
// #17
var Months;
(function (Months) {
    Months[Months["september"] = 0] = "september";
    Months[Months["october"] = 1] = "october";
    Months[Months["november"] = 2] = "november";
    Months[Months["december"] = 3] = "december";
    Months[Months["JULY"] = 4] = "JULY"; //
})(Months || (Months = {}));
console.log(Months[4]);
let current = Months.JULY;
console.log(current);
// #18
var keys;
(function (keys) {
    keys[keys["door1"] = 1] = "door1";
    keys[keys["door2"] = 2] = "door2";
    keys[keys["door3"] = 3] = "door3";
})(keys || (keys = {}));
console.log(keys[1]);
// #19
let newDate = new Date(2033, 11, 31);
console.log(newDate);
// #19.5
const firstPromis = new Promise((resolve, reject) => {
    setTimeout(() => {
        const random = Math.random();
        if (random > 0.5) {
            resolve("bebebe");
        }
        else {
            reject("nene");
        }
    }, 1500);
});
// #20 !!!
let elem = document.getElementById('butt');
