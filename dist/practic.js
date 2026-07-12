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
dialoge();
