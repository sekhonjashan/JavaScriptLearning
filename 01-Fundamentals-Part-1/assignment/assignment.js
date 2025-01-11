// // let country = 'United Arab Emirates'
// // let continent = 'MEA'
// // let population = '4 Million'


// // console.log(country)
// // console.log(continent)
// // console.log(population)


// // let javascriptIsFun = true;
// // console.log(javascriptIsFun);


// // console.log(typeof javascriptIsFun);
// // console.log(typeof country)
// // console.log(typeof 23)
// // console.log(typeof "faizan")
// // console.log(typeof faizan)

// // let year;
// // console.log(typeof year)
// // year = 1991;
// // console.log(typeof year)

// // console.log(typeof null)

// // const now = new Date().getUTCFullYear();

// // console.log(now)
// // const ageFaizan = now - 1984;
// // const ageSoubia = now - 1986;

// // console.log(ageFaizan, ageSoubia)
// // let x = 10 + 15 // answer will be 15
// // console.log(x)

// // x += 10  // x=x+10  current x value is 25
// // console.log(x)


// // console.log(typeof x)

// // console.log(ageFaizan > ageSoubia)


// let massMark;
// let heightMark;
// let massJohn;
// let heightJohn;




// massMark = 78;
// heightMark = 1.69;
// massJohn = 92;
// heightJohn = 1.95;

// let bmiMark = massMark / (heightMark * heightMark)

// let bmiJohn = massJohn / (heightJohn * heightMark)


// let markHigherBMI = bmiMark > bmiJohn;
// console.log(bmiMark);
// console.log(bmiJohn);

// console.log(markHigherBMI)


// const firstName = "Faizan"
// const job = "Senior Manager"
// const birthYear = 1984;
// const year = new Date().getUTCFullYear();

// const faizan = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
// console.log(faizan)


// console.log(`This is a template literal example \n\with multiple lines`)

// console.log(`we can do 
//     multiple lines l
//     ike this also. 
//     it does not need that \ n  way of 
//     moving to next line.`)




// const age = 17;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//     console.log(`Sarah can start driving lesson 🚗`)
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is still young to drive. wait another ${yearsLeft} years ❌`)
// }

// // if (!isOldEnough) {
// //     console.log(`Sarah cannot start driving yet ❌`)
// // }


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let score = getRandomInt(1000)

console.log(score)