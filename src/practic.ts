// #1
const strTest: string = 'bebbe';

const numTest: number = 0.5;

const boolTest: boolean = true;

// #2
let test1: number = 3;
let test2: string = 'abc';

console.log('sum = ' + test2 + test1)

// #3
let arr: string[] = ['a', 'b', 'c', 'd', 'e'];

let arr2: Array<number> = [0, 1, 2, 3, 4, 5];

// #4
let date = {year: 2025, month: 12, day: 31};
date = {year: 2025, month: 12, day: 7};

console.log(date)

// #5
date.month = 100;

console.log(date)

// #6
let res = 0;

for (let i: number = 0; i < 100; i++) {
	res++;
}

console.log(res);

// #7
function sum(x: string, y: number): string | number {
	return x + y;
}

console.log(sum('bebe', 5))

// #8
let arrAny: any[] = [123, 'abc', true]

// #9
type nullUndefinded = null | undefined;
const errorTest: nullUndefinded = null

type allBool = boolean | null | undefined;
const TruFal: allBool = boolTest

// #10
let answer: 'error' | 'warning' | 'success';

answer = 'success';

// #11
type answer2 = 'error' | 'success';

let bebe: answer2 = 'error'

// #12
type dateTest = [number, number, number];

let userDateBuyer: dateTest = [2033, 8, 8]
console.log(userDateBuyer)

// #13
const user: [string, number] = ['john', 31];
user[0] = 'eric';

console.log(user);

// #14
const userReadOnly: readonly [string, number] = ['john', 31];
// userReadOnly[0] = 'eric'; error

console.log(user);
