'use strict';

/*
////////////////////////////////////////
// Default Parameters
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //   numPassengers ||= 1;
  //   price ||= 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
// To skip the arguments
createBooking('LH123', undefined, 1000);
*/

/*
//////////////////////////////////////////////
// Passing by Value vs. by Reference
const flight = 'LH123';
const joe = {
  name: 'Youssef Shaker',
  passport: 24254356344,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = `Mr.${passenger.name}`;

  if (passenger.passport === 24254356344) console.log('CHECK IN');
  else console.log('WRONG PASSPORT');
};

checkIn(flight, joe);
console.log(flight);
console.log(joe);

// Is same as doing that ...
let flightNum = flight;
const passenger = joe;

flightNum = 'LH999';
passenger.name = `Mrs. & ${passenger.name}`;

console.log(flight);
console.log(joe);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(joe);
console.log(joe);
checkIn(flight, joe );
*/

/*
////////////////////////////////////////////////
// Higher-Order Functions: Accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [firstWord, ...remainingWords] = str.split(' ');
  return [firstWord.toUpperCase(), ...remainingWords].join(' ');
};

// Higher Order Functions
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};
transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

// JS uses callbacks all the Time
const high5 = function () {
  console.log('High FIVE!');
};
document.body.addEventListener('click', high5);
['joe', 'martha', 'hussein'].forEach(high5);

// High Order Functions: Returning Functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
console.log(greeterHey);
greeterHey('Joe');
greeterHey('Jonas');
greet('HELLO')('JOE');

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
greetArrow('HELLO =>')('JOE');
*/

/*
/////////////////////////////////////////////////////////////////
// The Call and Apply ... & Bind Methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function( )
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'JOE');
lufthansa.book(443, 'Shaker');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// book(23, 'Sarah'); // TypeError: Cannot read properties of undefined (reading 'airline')

// Solution: CALL Method
book.call(eurowings, 23, 'Sara'); // Works Fine
console.log(eurowings);
book.call(lufthansa, 23, 'Sara'); // Works Fine

const swiss = {
  airline: 'Swiss AirLine',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 23, 'Sara'); // Works Fine

// Apply Method
const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData); // we do not use this in modern JS
console.log(swiss);

book.call(swiss, ...flightData);
// The Bind Method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');
console.log(eurowings);
bookLH(23, 'Steven Williams LH');
console.log(lufthansa);
bookLX(23, 'Steven Williams LX');
console.log(swiss);

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Youssef Shaker2');
console.log(eurowings);

// Bind Method with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane); // <button class="buy">Buy new plane 🛩</button>, NaN
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // Works Fine !

// Bind Method with partial applications
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(1000));

const addTax2 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTax2(0.23);
console.log(addVAT2(1000));
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀

const poll = {
  answers: Array(4).fill(0),

  registerNewAnswer() {
    const option = Number(
      prompt(`What is your favourite programming language?
          0: JavaScript
          1: Python
          2: Rust
          3: C++
          (Write option number)`)
    );
    typeof option === 'number' && option < 4 && this.answers[option]++;
    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') console.log(this.answers);
    if (type === 'string') console.log(this.answers.join(', '));
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

const testDisplay = poll.displayResults.bind({ answers: [5, 2, 3] }, 'string');
testDisplay();
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
*/

/*
///////////////////////////////////////////////////
// IIFE
const runOnce = function () {
  console.log('This will never run again!');
  const isPrivate = 23;
};
runOnce();
console.log(isPrivate );

// function () { // Error: Function statements require a function name
// console.log('This will never run again!');
// };

(function () {
  console.log('This will never run again!');
})();

(() => console.log('This will ALSO never run again!'))();
*/

/*
/////////////////////////////////////////////////////////////////////
// Closures
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);

// Example 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
// Re-assigning the f
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000); // milliseconds

  console.log(`Will start boarding in ${wait} seconds`);
};
boardPassengers(180, 3);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
*/
