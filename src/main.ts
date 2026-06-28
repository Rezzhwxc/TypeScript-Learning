// КОМПИЛЛИРОВАТЬ ЧЕРЕЗ tsc

let test: string = 'it works!!';
alert(test);

// Составные типы

interface User{
    name: string;
    nickname: string;
    age?: number;
}

type Adress = {
    city: string;
    street?: string;
    whoLives: User;
}

const adress: Adress = {
    whoLives: {
        name: 'Oleg',
        nickname: 'ZXC'
    },
    city: 'Alyaska'
}