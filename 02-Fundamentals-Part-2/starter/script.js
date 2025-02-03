function logger() {
   console.log("My name is Wilfed");
}

// calling / running/ invoking function
logger();

function fruitProcessor(apples, oranges) {
   console.log(apples, oranges);
   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

   return juice;
}

function fruitProcessorOutput(apples, oranges) {
   console.log(apples, oranges);
   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

   return juice;
}

fruitProcessor(5, 0); // these actual values here of the parameters are called the arguments.

const showJuices = fruitProcessorOutput(5, 0);

console.log(showJuices);

// ============ my own function ======================
function carBrands(Toyota, Ford) {
   const cars = `Top notches cars are ${Toyota} & ${Ford}`;
   return cars;
}

const displayCars = carBrands("Lexus", "Tesla");
console.log(displayCars);

const displayCars2nd = carBrands("Bogatti", "Honda");
console.log(displayCars2nd);

//  create a generic function that will reusable
//  benefit in craeting a function is reusable
//  not all the time a function return a function
// example ani na use case naa sa mga component like sa styling karon mao akoang na notice
// importante kaayo masabatan nako ang detailed ani concept sa function
//  DRY code  = dont repeat yourself
