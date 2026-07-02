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

interface Vocaloid<T>{
    id: number;
    name: string;
    team?: T; 
}

const VocaloidNode: Vocaloid<string | number | boolean> = {
    id: 1,
    name: 'Miku',
    team: 'Crypton'
}


// Взаимодействия с внеш обьектами на странице

const button: any = document.getElementById('butt')
