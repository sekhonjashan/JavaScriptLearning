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
*/