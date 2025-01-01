'use strict';
/*
// Functions //

function logger(){
    console.log('My name is Hamda');
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and 
    ${oranges} oranges.`;
    return juice;

}

const appleJuice = fruitProcessor(8, 7);
const orangeJuice = fruitProcessor(0,9)
console.log(appleJuice, orangeJuice);
*

// Function declaration //

function calcAge1(birthYear){
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);

// Function Expression //

const calcAge2 = function(birthYear){
    return 2037 - birthYear;
}
 const age2 = calcAge2(1991);
 console.log(age2);



// Arrow Function //

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearRetirement(1991, 'Maryama'));
console.log(yearRetirement(2000, 'Hamda'));


// Functions calling other function //

function cutFruitPieces(fruit){
    return fruit * 4;
}


function fruitProcessor(apples, oranges){
   const applePieces = cutFruitPieces(apples);
   const orangePieces = cutFruitPieces(oranges);


    const juice = `Juice with ${applePieces} pieces of apple and 
    ${orangePieces} pieces of orange.`;
    return juice;

}

console.log(fruitProcessor(2, 3));
 

// Review FUnctions //

const cageAge = function(birthYear){
    return 2023 - birthYear;
}

const yearRetirement = function(birthYear, firstName){
    const age = cageAge(birthYear);
    const retirement = 65 - age;
    
    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else{
        console.log(`${firstName} has already retired 🎊`)
        return -1;
    }

    return retirement;
}

console.log(yearRetirement(1955, 'Aisha'));
console.log(yearRetirement(2000, 'Hamda'));


// Introduction to Arrays //

const friends = ['Ramla', 'Aisha', 'Faiza'];
console.log(friends);

// const years = new Array(2020, 2021, 2022, 2023);
// console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'Amira';
console.log(friends);

// Exercise //

function calcAge1(birthYear){
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge1(years[0]);
const age2 = calcAge1(years[1]);
const age3 = calcAge1(years[years.length-1]);
console.log(age1, age2, age3);

const ages = [calcAge1(years[0]), calcAge1(years[1]), 
calcAge1(years[years.length-1])];
console.log(ages);



// Basic Array Operations //

const friends = ['Ramla', 'Aisha', 'Faiza'];

// Add elements //

const newLength = friends.push('Amira');
console.log(friends);
console.log(newLength);

friends.unshift('Anisa');
console.log(friends);

// Remove elements

friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Aisha'));
console.log(friends.indexOf('Ramla'));

friends.push(23);
console.log(friends.includes('Ramla'));
console.log(friends.includes('Siham'));


if(friends.includes('Ramla')){
    console.log('You have a friend called Ramla');
}


// Object Operation //

const hamda = {
    firstName: 'Hamdi',
    lastName: 'Abdikarim',
    age:     2037-2000,
    job: 'Intern',
    friend: ['Aisha', 'Ramla', 'Amira'],
    study: 'Programming'
};

console.log(hamda);

console.log(hamda.job);
console.log(hamda['firstName']);

const nameKey = 'Name';
console.log(hamda['first' + nameKey]);
console.log(hamda['last' + nameKey]);

// const interestedIn = prompt('what do you want to know about Hamda? choose between  firstName, lastName,age, job, and friends');
// console.log(hamda[interestedIn]);

//Challenge//
console.log(hamda.firstName, 'has ' +  hamda.friend.length, 
 'and her best friend is called ' + hamda.friend[1]);
 
 console.log(`${hamda.firstName} has ${hamda.friend.length} friends, and her best friend is ${hamda.friend[0]}`);


// Object Method //

const hamda = {
    firstName: 'Hamdi',
    lastName: 'Abdikarim',
    birthYear: 2000,
    job: 'Programmer',
    friend: ['Aisha', 'Ramla', 'Amira'],
    study: 'Programming',
    hasDriversLicense: false,

    // calcAge: function(birthYear){
    //     return 2037 - birthYear;
    // }

    calcAge: function(){
         this.age = 2036 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and she has 
        ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }

};
console.log(hamda.getSummary());
console.log(hamda.calcAge());

console.log(hamda.age);

// console.log(`${hamda.firstName} is a ${hamda.age}-years old inter, 
// and she has a ${hamda.hasDriversLicense} a drive license`);



// Looping Arrays, Breaking and continuing //


const hamda = [
     'Hamdi',
    'Abdikarim',
    2037 - 2000,
    'Intern',
    ['Aisha', 'Ramla', 'Amira'],
    true

];
const types = [];
for(let i = 0; i<hamda.length; i++){
    console.log(hamda[i], typeof hamda[i]);
    types.push(typeof hamda[i]);
}
console.log(types);



const years = [1990, 1967, 2002, 2010, 2018];
const ages = [];

for(let i = 0; i < years.length; i++){
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break 

console.log('---ONLY STRINGS ---')
for(let i = 0; i < hamda.length; i++){
    if(typeof hamda[i] !== 'string') continue;

    console.log(hamda[i], typeof hamda[i]);
}


console.log('---BREAK WITH NUMBER ---')
for(let i = 0; i < hamda.length; i++){
    if(typeof hamda[i] === 'number') break;

    console.log(hamda[i], typeof hamda[i]);
}

// Looping Backwards and Loops in Loops //

for (let i = hamda.length - 1; i >=0; i--){
console.log(hamda[i]);
}

for (let exercise = 1; exercise < 4; exercise++){
    console.log(`-----Starting Exercise ${exercise}`);

    for(let rep = 1; rep < 6; rep++){
        console.log(`Exercise ${exercise}: lifting Weight repetitaion ${rep} 🏋🏾‍♀️`)
    }
}



let rep = 1;

while (rep <= 10){
// console.log(`lifting Weight repetitaion ${rep} 🏋🏾‍♀️`)
 rep++;
}

let dice = Math.trunc(Math.random()*6) + 1;

while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random()*6) + 1;

    if (dice === 6) console.log('Loop is about to end..');
}
*/