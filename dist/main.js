"use strict";
// КОМПИЛЛИРОВАТЬ ЧЕРЕЗ tsc
const adress = {
    whoLives: {
        name: 'Oleg',
        nickname: 'ZXC'
    },
    city: 'Alyaska'
};
// 
const users = [
    {
        name: 'Plafon',
        nickname: 'PLTN',
        age: 17
    },
    {
        name: 'Yarek',
        nickname: 'Yarohatsune'
    }
];
console.log(users);
const Lang = 'NodeJs';
function talk(language) {
    if (language === 'NodeJs') {
        console.log('NodeJs is so hard');
    }
    else {
        console.log('But nobodys come');
    }
}
talk('NodeJs');
const response = {
    meta: { title: 'Morphosis' },
    data: { title: 'today' },
    requestId: 'bebe12'
};
const VocaloidNode = {
    id: 1,
    name: 'Miku',
    team: 'Crypton'
};
const VocaloidNode2 = {
    id: 1,
    name: 'Teto',
    team: {
        username: 'Deko'
    }
};
const Arr = false;
const Arr2 = true;
const names = { value: 'tetoo' };
// Сужение типов Narrowing
function fnc(arg) {
    if (typeof arg === "number") {
        arg.toString;
        return;
    }
    else if (typeof arg === "string") {
        arg.toUpperCase;
        return;
    }
}
// 
function fnc2(arg) {
    if (arg === null) {
        arg;
    }
    if (arg === 5) {
        arg++;
    }
    return arg;
}
// 
const num = 24;
function fnc3(arg) {
    if ('namev' in arg) {
        return arg;
    }
    if ('count' in arg) {
        console.log('Count tracks - ' + num);
    }
}
fnc3({
    count: num
});
// type guards
function isVocal(value) {
    return 'username' in value;
}
function isCar(value) {
    return 'MaxSpeed' in value && 'width' in value;
}
function isDriver(value) {
    return 'name' in value;
}
// TypeOf
const obj = {
    name: 'bebeeb',
    age: 25,
};
const obj1 = {
    name: 'ebebe',
    age: 23,
};
