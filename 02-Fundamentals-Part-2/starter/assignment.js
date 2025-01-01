/*

// Values variables // 

var continent;
var country;
var population;

continent = "Africa";
country = "Somalia";
population = 30;

console.log(continent);
console.log(country);
console.log(population +' ' + "Million");

// Data Type //

var isIsland = true;
console.log(isIsland);
console.log(typeof isIsland);



// let const and var

const language = "English";
console.log(language);

// Basic Operator
population++;
console.log(population / 2 + ' ' + 'Million');
console.log(population);

var popFinland = 6;

console.log(popFinland > population);
console.log(population < 33);

var description;

description = country + ' is in '  + continent + ' and its '  +
population + ' Million people speak ' + language;

console.log(description);

var desSomalia = `${country} is in ${continent} and its ${population} 
Million people speak ${language}`
console.log(desSomalia);

/*
// if & else statement //

if(population > 33){
    console.log("Somalia's Population is above the average");
} else{
    console.log("Somalia's population is 18 million below average");

}



// Type conversion and coercion

console.log('9' - '5');    // 4
console.log('19' - '13' + '17');  // '617'
console.log('19' - '13' + 17);  // 23
console.log('123' < 57);    //true
console.log(5 + 6 + '4' + 9 - 4 - 2);  '1143'



// Equaity Operators //

const numNeighbours =(Number(prompt('How many neighbour countries does your country have?')));

if(numNeighbours === 1){
    console.log('Only 1 border')
} else if(numNeighbours > 1){
    console.log('More than 1 border')
} else {
    console.log('No borders')
}





// Logical Operators //

if(language === "English" && population < 50 &&  isIsland === true) {
    console.log('You should live in Somalia :)');
 } else {
    console.log('Somalia does not meet your criteria :(');
 }




// The switch Statement //

const language = 'arabic';
 
switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log( '2nd place in number of native speakers');
        break;
    case 'english':
        console.log( '3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');

}


// The Conditional(Ternary) Operator //

const population = 13;

const result = population > 33? "Portugal's population is above average":
 "Portugal's population is below average";
 console.log(result);

 console.log(`I want to know ${population > 33? "Portugal's population is above average":
 "Portugal's population is below average"}`);
 

 
 // coding challenge 1 //
// Data 1//
const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark)


const BMIJohn = massJohn / (heightJohn * heightJohn)


var markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
console.log( BMIMark, BMIJohn);




//  Coding challenge 2 // 

if(BMIMark > BMIJohn){
    console.log(`Mark's BMI ${BMIMark} is higher than John's BMI ${BMIJohn}!`);
} else {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's BMI ${BMIMark}!`);
}



Coding Challenge 3 //

const scoreDolphins = (96 + 108 + 89)/3;
const scoreKoalas = (88 + 91 + 10)/3;


if (scoreDolphins > scoreKoalas){
    console.log('Dolpins win the trophy🏆');
} else if (scoreKoalas > scoreDolphins){
    console.log('Koalas win the trophy🏆');
} else if (scoreDolphins === scoreKoalas ){
    console.log("Both win the trophy");
} else {
    console.log('no team win the trophy');
}

// Bonus 1 //

const scoreDolphins = (97 + 112 + 101)/3;
const scoreKoalas = (109 + 95 + 106)/3;


if (scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log('Dolpins win the trophy🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100){
    console.log('Koalas win the trophy🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
    console.log("Both win the trophy");
} else {
    console.log('no team win the trophy');
}

//////// Part Two Coding Challenges ////////////

// Coding challenges //

const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);


// Functions //

function describeCountry(country, population, capitalCity){
    const countryInfo = `${country} has ${population} million people
    and its capital city is ${capitalCity}`;
    return countryInfo;
}

const somIfo = describeCountry('Somalia', 18, 'Mogadishu');
const finIfo = describeCountry('Finland', 6, 'Helsinki');
const palesIfo = describeCountry('Palestine', 4, 'Ghaza');
console.log(somIfo);
console.log(finIfo);
console.log(palesIfo);


// Function Declaration vs Expressions //
function percentageOfWorld1(population){
    return (population/7900)*100;
}
const popChina = percentageOfWorld1(1441);
const popSom = percentageOfWorld1(18);
const popKenya = percentageOfWorld1(30);

console.log(popChina);
console.log(popSom);
console.log(popKenya);


const percentageOfWorld2 = function(population){
return (population/7900)*100;
}

const popChina1 = percentageOfWorld2(1445);
const popSom1 = percentageOfWorld2(19);
const popKenya1 = percentageOfWorld2(33);

console.log(popChina1);
console.log(popSom1);
console.log(popKenya1);


//  Arrow Functions //

const percentageOfWorld3 = population => (population/7900)*100;
console.log(percentageOfWorld3(1441));
console.log(percentageOfWorld3(18));
console.log(percentageOfWorld3(35));

function percentageOfWorld1(worldPercentage){
    return (worldPercentage/7900)*100;
}


function describPopulation(country, population){
 const countryPerctageOfWorld = percentageOfWorld1(population)
    const countryInfo = `${country} has ${population} 
    million people which is about ${countryPerctageOfWorld}% of the world population`
    return countryInfo;
}

console.log(describPopulation('China', 1441));
console.log(describPopulation('Somalia', 18));
console.log(describPopulation('Kenya', 47));




// Code Challenge 1 //

// function calcAverage(teamAverage){
//     return teamAverage / 3;
// }

// const calcAverage = teamAverage => teamAverage / 3; 

// function checkWinner(avgDolphins, avgKoalas){
// const avgDol = calcAverage(avgDolphins);
// const avgKoal = calcAverage(avgKoalas);



// const winDolphins = avgDol;
// const winKoalas = avgKoal;

// if(winDolphins >= avgKoal*2){
//     console.log('Dolphins win')
//     return winDolphins;
// }else if(winKoalas >= avgDol*2){
//     console.log('Koalas win');
//     return winKoalas;
// } else {
//     console.log('Both of them didnt win');
// }
// return winDolphins, winKoalas;
// }

// console.log(checkWinner((44+23+71), (65+54+49)));
// console.log(checkWinner((85+54+41), (23+34+27)));

/////////////////
const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));
 
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);
 
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
};
 
checkWinner(scoreDolphins, scoreKoalas);


// Intorduction to Arrays//



const populationsPer = [18, 30, 108, 25];

function percentageOfWorld2(population){
    return (population/7900)*100;
    }

  

    const pops = [percentageOfWorld2(populationsPer[0]),
     percentageOfWorld2(populationsPer[1]), 
        percentageOfWorld2(populationsPer[2]),
        percentageOfWorld2(populationsPer[populationsPer.length-1])];

        console.log(pops);

       

       // Basic Array Operations //
        const neighbours = ['Djabuti', 'Kenya', 'Euthopia'];
      neighbours.push('Utopia');
      neighbours.pop();
    //   console.log(neighbours);
    
    if (!neighbours.includes('Germany')){
        console.log('Probably dont a central European country :D');
    } 

    neighbours[2] = 'Rowanda';
    console.log(neighbours);

   // Introduction to Objects //

    const myCountry = {
       country: 'Somalia',
       capital: 'Mogadishu',
       language: 'Somali',
       neighbours: ['Djabuti', 'Kenya', 'Euthopia'],
       populaton: 18
    }
    

    
    // Dot vsBracket Notation //
    console.log(`${myCountry.country} has ${myCountry.populaton} Million ${myCountry.language}-speaking people,
    ${myCountry.neighbours.length} neighbouring countries and capital called ${myCountry.capital}`);
    
    myCountry.populaton += 2;
    myCountry['populaton'] -= 2;
    console.log(myCountry)
   


    // Coding Challenge 3 //

    const mark = {
        fullName: 'Mark Miller',
        mass: 78,
        height: 1.69,

        calcBMI: function () {
            this.bmi = this.mass / this.height ** 2;
           return this.bmi;
        }

    }

    const john = {
        fullName: 'John Smith',
        mass: 92,
        height: 1.95,
        // hasHigherBMI: false,

        calcBMI: function () {
            this.bmi = this.mass / this.height ** 2;
           return this.bmi;
        }

        // higherBMI: function(){
        //     return  `${john.fullName}'s BMI (${john.bmi}) ${this.hasHigherBMI ? 'is' : 'is not'} 
        //     higher than ${mark.fullName}'s BMI (${mark.bmi}).`
        // }

    }
    mark.calcBMI();
    john.calcBMI();

    console.log(john.bmi, mark.bmi);
    //  console.log(john.higherBMI());
    // or
    //  mark.calcBMI();
    //  console.log(mark.bmi);

    if(mark.bmi > john.bmi){
        console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
    } else if(john.bmi > mark.bmi){
       console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
    }

     

    //  Assignment- Iteratin: The for  loop //

    for (let i = 1; i <= 50; i++){
        console.log(`Voter number ${i} is currently voting`);
    }

    

    // Looping Arrays, Breaking and Continuing 
    const populations = [18, 30, 108, 25];
     const percentages2 = [];

    for(let i = 0; i < populations.length; i++){  
       console.log(populations[i]);
    
 const perc = percentageOfWorld2(populations[i]);
            percentages2.push(perc);
           
    }

     console.log(percentages2);

// The assignment above didn't work for me //



// Looping Backwardss and loops in loops//

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 
'Russia']];

for(let i = 0; i < listOfNeighbours.length; i++){
    // console.log(listOfNeighbours[i]);

    for(let j = 0; j < listOfNeighbours[i].length; j++){
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    }
}

*/

// Coding Challenge //
const calcTip = function (bill) {
return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];


for(let i = 0; i < bills.length; i++){

const tip = calcTip(bills[i]);
tips.push(tip);
totals.push(tip + bills[i]);

}

console.log(bills, tips, totals);

const calcAverage = function (arr){
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum+=arr[i];

    }
 return sum/arr.length;
}

console.log(calcAverage(totals));
   