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
// Перечисления Enum
var ColorVoc;
(function (ColorVoc) {
    ColorVoc["RED"] = "red";
    ColorVoc["BLUE"] = "blue";
    ColorVoc["YELLOW"] = "yellow";
    ColorVoc["WHITE"] = "white";
})(ColorVoc || (ColorVoc = {}));
// 
var ColorVoc2;
(function (ColorVoc2) {
    ColorVoc2[ColorVoc2["RED"] = 0] = "RED";
    ColorVoc2[ColorVoc2["BLUE"] = 1] = "BLUE";
    ColorVoc2[ColorVoc2["YELLOW"] = 2] = "YELLOW";
    ColorVoc2[ColorVoc2["WHITE"] = 3] = "WHITE";
})(ColorVoc2 || (ColorVoc2 = {}));
console.log(ColorVoc2[0]);
// 
const butt = document.getElementById('butt');
let flag = 0;
function setColor(color) {
    if (butt) {
        butt.style.backgroundColor = color;
    }
}
butt.addEventListener('click', () => {
    if (flag === 0) {
        setColor(ColorVoc.YELLOW);
        flag = 1;
        console.log(flag);
    }
    else if (flag === 1) {
        setColor(ColorVoc.WHITE);
        flag = 0;
        console.clear();
    }
});
const tupple = ['Tetotism', 'C/users/mucis', 2];
const ColorsArray = {
    red: ['123'],
    black: ['123'],
    white: ['123']
};
// Asserts
function assertIsUser(data) {
    if (typeof data !== "object" || data === null) {
        throw new Error("Object expected!");
    }
    if (typeof data.username !== 'string') {
        throw new Error("Property `name` must be a string");
    }
    if (typeof data.age !== 'number') {
        throw new Error("Property `age` must be a number");
    }
}
// 
function assert(condition, msg) {
    if (!condition)
        throw new Error(msg);
}
let age = 25;
assert(age !== null, 'age не может быть null');
age.toFixed(2);
