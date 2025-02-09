/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Torben");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let torben_ana = "TA";
let $function = 27;

// Variable name conventions
let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 12);
// console.log(typeof "Torben");

javascriptIsFun = "Yes!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 31;
age = 32;

const birthYear = 1993;
// birthYear = 1990;

// const job;

var job = "programmer";
job = "teacher";

lastName = "Peper";
console.log(lastName);
*/

// Math operators
const now = 2025;
const ageTorben = now - 1993;
const ageSarah = now - 2018;
console.log(ageTorben, ageSarah);

console.log(ageTorben * 2, ageTorben / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Torben";
const lastName = "Peper";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x +10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
console.log(x);

// Comparion operators
console.log(ageTorben > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1993 > now - 2018);
