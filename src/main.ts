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


// Сужение типов Narrowing

function fnc(arg: number | string | null){
    if(typeof arg === "number"){
        arg.toString
        return
    } else if(typeof arg === "string"){
        arg.toUpperCase
        return
    }
}

// 

function fnc2(arg: number | string | null){
    if(arg === null){
    arg
    }
    if(arg === 5){
        arg++
    }
    return arg
}

// 
const num = 24;
type color = 'blue' | 'red' | 'yellow';

interface VocalName{
    namev: string;
    age: number;
    color: color;
}

interface VocalTracks{
    name?: VocalName;
    count: number;
}

function fnc3(arg: VocalName | VocalTracks){
    if('namev' in arg){
        return arg
    }
    if('count' in arg){
        console.log('Count tracks - ' + num)
    }
}
fnc3({
    count: num
});

// type guards

function isVocal(value: User | VocalName): value is User{
     return 'username' in value;
}

//

interface car{
    maxSpeed: number;
    width: number;
    cost: number;
}

interface driver{
    name: string;
    age?: number;
}

function isCar(value: car | driver): value is car{
    return 'MaxSpeed' in value && 'width' in value;
}

function isDriver(value: car | driver): value is driver{
    return 'name' in value;
}

// TypeOf

const obj = {
    name: 'bebeeb',
    age: 25,
}

type Obj0 = typeof obj;

const obj1: Obj0 = {
    name: 'ebebe',
    age: 23,
}

// Перечисления Enum

enum ColorVoc {
    RED = 'red',
    BLUE = 'blue',
    YELLOW = 'yellow',
    WHITE = 'white'
}

const butt = document.getElementById('butt') as HTMLElement;
let flag: number = 0;

function setColor(color: ColorVoc){
    if(butt){
    butt.style.backgroundColor = color;
    }
}

butt.addEventListener('click', () => {
    if(flag === 0){
        setColor(ColorVoc.YELLOW)
    flag = 1;
    console.log(flag)
}
    else if(flag === 1){
        setColor(ColorVoc.WHITE)
    flag = 0;
}
})
