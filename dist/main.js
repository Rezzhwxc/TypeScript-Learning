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
