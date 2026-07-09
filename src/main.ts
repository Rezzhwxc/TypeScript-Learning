// КОМПИЛЛИРОВАТЬ ЧЕРЕЗ tsc

// let test: string = 'it works!!';
// alert(test);

// Составные типы

interface User{
    readonly name: string;
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

// 
const users: User[] = [
    {
        name: 'Plafon',
        nickname: 'PLTN',
        age: 17
    },
    {
        name: 'Yarek',
        nickname: 'Yarohatsune'
    }
]
console.log(users)

// Литералы

type lang = 'Js' | 'Ts' | 'NodeJs';
const Lang: lang = 'NodeJs'

function talk(language: lang){
    if(language === 'NodeJs'){
        console.log('NodeJs is so hard')
    }else{
        console.log('But nobodys come')
    }
}
talk('NodeJs')

type EventName = 'click' | 'add' | 'delete'; 

// Джинерики

interface Users{
    username: string;
}

interface Article{
    title: string;
}

interface ApiResp<Meta, Data>{
    stasus?: 'error' | 'success'
    meta?: Meta;
    requestId: string;
    data: Data;
}

const response: ApiResp<Article, Article> = {
    meta: {title: 'Morphosis'} ,
    data: {title: 'today'},

    requestId: 'bebe12'
}

// Джинерик пример2

interface Vocaloid<T = number>{
    id: number;
    name: string;
    team?: T; 
}

const VocaloidNode: Vocaloid<string | number | boolean> = {
    id: 1,
    name: 'Miku',
    team: 'Crypton'
}

const VocaloidNode2: Vocaloid<Users> = {
    id: 1,
    name: 'Teto',
    team: {
        username: 'Deko'
    }
}

// Условные типы

type isType<T> = T extends any[] ? true: false;

const Arr: isType<string> = false;
const Arr2: isType<string[]> = true;

// 

type RandomName<T> = T extends Users ? {value: number} : {value: string}

const names: RandomName<number> = {value: 'tetoo'}
