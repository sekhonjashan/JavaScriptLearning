'use strict';

// Data needed for a later exercise
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Destructuring object as a parameters.
  orderDelivery({ time = '20:00', address, mainIndex = 0, starterIndex = 1 }) {
    console.log(
      `Order recieved! ${this.mainMenu[mainIndex]} & ${this.starterMenu[starterIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here's your declicious pasta with ${ing1}, ${ing2} & ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(
      `Here's your delicious ${mainIngredient} pizza with ${otherIngredients.join(
        ', '
      )}`
    );
  },
};

/*
////////////////////////////////////////////////////////////////////////////////////
// Destructuring Arrays
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
[secondary, main] = [main, secondary];
console.log(main, secondary);

// Recieving 2return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [3, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [k, j]] = nested;
console.log(i, k, j);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// Practicing
const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];
const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);

const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
console.log(fiveStarRatings, oneStarRatings, threeStarRatings);
*/

/*
////////////////////////////////////////////////////////////////////////////////////////////////
// Destructuring Objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a,
  b = [111, 999];
let obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: fridayOpen, close: fridayClose },
} = restaurant.openingHours;
console.log(fridayOpen, fridayClose);

// Playing with methods
restaurant.orderDelivery({
  time: '22:30',
  address: 'Baron City',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Baron City',
});

// Practicing
// const { title, author, ISBN } = books;
// // const {keywords : tags} = books[1];
// const { language, programmingLanguage = 'unknown' } = books[6];
// let bookTitle = 'unknown';
// let bookAuthor = 'unknown';
// ({ bookTitle, bookAuthor } = books[0]);
// const {
//   thirdParty: {
//     goodreads: { rating: bookRating },
//   },
// } = books[0];
// const printBookInfo = function ({ title, author, year = 'year unknown' }) {
//   console.log(`${title} by ${author}, ${year}`);
// };
// printBookInfo(book[0]);
*/

/*
//////////////////////////////////////////////////////////
// Spread Operator
const arr = [7, 8, 9];
const arr2 = [1, 2, 3, 4, 5, 6, ...arr];
console.log(arr2);

arr[2] = 10;
console.log(arr2);
console.log(...arr2);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Joining 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// For Iterables: Arrays, strings, maps, sets, NOT objects
const str = 'Youssef';
console.log(...str);
const letters = [...str, ' ', 'S.'];
console.log(...letters);
// console.log(`${...str} Shaker`); // unexpected Token '...'

// Playing with functions
// const ingredients = [
//   prompt("Let's make pasta Igredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'ME' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Hussien';
console.log(restaurant.name);
console.log(restaurantCopy.name);

const bookAuthors = [...books[0].authors, ...books[1].authors];
*/

/*
////////////////////////////////////////////////////////////////////////////////////////////////////
// REST Patterns and Parameters

// 1. DeStructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST beacuse on LEFT side of =
const [a, b, ...other] = [1, 2, 3, 4, 5];
console.log(a, b, other);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// 2. Functions
const add = function (...numbers) {
  console.log(numbers.reduce((a, b) => a + b, 0));
};
add(2, 3, 4, 5);
add(1, 2, 3, 4);
add(1, 2, 3, 4, 6, 7, 8, 9, 10);

const x = [23, 7, 10];
add(...x);

restaurant.orderPizza(
  'Margherita',
  'Mozzarella',
  'Tomatoes',
  'Basil',
  'Olives',
  'Grated Parmesan'
);
restaurant.orderPizza('Margherita');

// Practicing
const [mainkeyword, ...rest] = books[0].keywords;
const { publisher: bookPublisher, ...restOfTheBook } = books[1].keywords;

const printBookAuthorsCount = function (book, ...authors) {
  console.log(`${book} has ${authors.length} authors.`);
};
printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');
*/

/*
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Short Circuiting (&& and ||)

// Use ANY data type, return ANY data type,
// short circuiting "short circuit evaluation"

console.log('------ OR -------');
// in OR operator, means if the first value is a truth value, it will immediately return that first value.
console.log(3 || 'JOE');
console.log('' || 'JOE');
console.log(false || 'JOE');
console.log(true || 0);
console.log(undefined || null); // there is no short circuiting
let x;
console.log(x || null);
console.log(undefined || 0 || '' || 'JOE' || 23 || null);

// restaurant.numGuest s = 23;
const guests1 = restaurant.numGuests || 10;
console.log(guests1);

console.log('------ AND -------');
// in AND short circuits, when the first value is falsy and then immediately returns the falsy one without even evaluating the second operand
console.log(0 && 'JOE');
// when it is truthy, ot means that the evaluation continues and then simply returns the last operand
console.log(3 && 'JOE');
console.log('' && 'JOE');
console.log(false && 'JOE');
console.log(true && 0);
console.log(undefined && null); // there is no short circuiting
console.log(undefined && 0 && '' && 'JOE' && 23 && null);

// Practical example
console.log(
  restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'mushrooms3')
)
*/

/*
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/* */

///////////////////////////////////////
// Coding Challenge #1

/*
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

/*
// 1. Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;
console.log(players1, players2);

// 2. The first player in any player array is the goalkeeper and the others are field players.
// For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and
// one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players1];
console.log(allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players.
// So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5. Based on the game.odds object, create one variable for each odd
// (called 'team1', 'draw' and 'team2')
const { team1, x: odd, team2 } = game.odds;
console.log(team1, odd, team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array)
// and prints each of them to the console,
// along with the number of goals that were scored in total (number of player names passed in)
const printGoals = function (...playernames) {
  const goals = {};
  // console.log(playernames);
  for (let i = 0; i < playernames.length; i++) {
    if (goals[playernames[i]]) goals[playernames[i]] += 1;
    else goals[playernames[i]] = 1;
  }
  console.log(goals);
};
printGoals(...game.scored);

// 7. The team with the lower odd is more likely to win.
// Print to the console which team is more likely to win,
// WITHOUT using an if/else statement or the ternary operator.
console.log(
  (game.odds.team1 < game.odds.team2 && 'Team 1 is more likely to win') ||
    'Team 2 is more likely to win'
);
*/

/*
///////////////////////////////////
// for-of Loop
console.log('---- FOR OF ----');
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) console.log(i, el);
*/

/*
/////////////////////////////////////////
// Optional Chaining (?.)
console.log('---- OPTIONAL CHAINING ----');
// console.log(restaurant.openingHours.mon.open); // TypeError
console.log(restaurant.openingHours.mon?.open); // TypeError
console.log(restaurant.openingHours?.mon); // undefined
console.log(restaurant.openingHours?.sat); // { start: '09:00', end: '17:00' }

// Methods
console.log(restaurant.orderPizza?.('mushrooms', 'onions')); // undefined
console.log(restaurant.orderPizza?.('mushrooms', 'onions')?.cost); // 10

// Arrays
// const users = [
//   { name: 'John', age: 30 },
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 35 },
// ];
const users = [];

console.log(users[0]?.name ?? 'User array empty');
*/
/*
////////////////////////////////////////////////////////////////
// Looping Objects

// Property Names
for (const day of Object.keys(openingHours)) console.log(day);

const properties = Object.keys(openingHours);
console.log(properties);

// Property Values
const values = Object.values(openingHours);
console.log(values);

// Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries)
  console.log(`${key}: ${open} - ${close}`);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
/*
// 1.
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2.
let sum = 0;
for (const value of Object.values(game.odds)) {
  sum += value;
}
// console.log(Object.values(game.odds).length);
const avgOdds = sum / Object.values(game.odds).length;
console.log(
  `${avgOdds}. We already studied how to calculate averages, you can go check if you don't remember`
);

// 3.
for (const [key, value] of Object.entries(game.odds)) {
  const teamStr = key === 'x' ? 'draw' : `victory ${game[key]}`;
  console.log(`Odd of ${teamStr}: ${value}`);
}
// Bonus
const scorers = {};
for (const [, player] of game.scored.entries())
  scorers[player] = scorers[player] + 1 || 1;
console.log(scorers);
*/

/*
///////////////////////////////////////////////
// SETS
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet);

console.log(new Set('JOE'));

console.log(orderSet.size);

console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));

orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
// orderSet.clear();

console.log(orderSet);
// In Sets, There is no indexes.
console.log(orderSet[0]);

for (const order of orderSet) console.log(order);

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

// ES5 Set new Methods
// New Operations to Make Sets Useful!

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const commonFood = italianFoods.intersection(mexicanFoods);
console.log([...commonFood]);

const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log([...italianMexicanFusion]);

const uniqueItalianFood = italianFoods.difference(mexicanFoods);
console.log(uniqueItalianFood);

const uniqueMexicanFood = mexicanFoods.difference(italianFoods);
console.log(uniqueMexicanFood);

const uniqueItalianMexicanFood = italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianMexicanFood);

console.log(italianFoods.isDisjointFrom(mexicanFoods));
*/

/*
////////////////////////////////////////////////////////////////
// MAPS
// In the map, the keys can be any type and this can be huge
// obj keys are usually always strings
const rest = new Map();
rest.set('name', 'Classical Italiano');
rest.set(1, 'Cairo');
rest.set(2, 'Alex');
rest
  .set('categories', ['Italian', 'Pizzeria', 'Fateer'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are close :(');

console.log(rest);
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));
console.log(rest.get('1'));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));

rest.delete(2);
console.log(rest.has(2));
console.log(rest.size);
// rest.clear();
rest.set([1, 2], 'Test');
console.log(rest);

// the reason is that [1, 2] is not the same array that is in the map
console.log(rest.get([1, 2]));

// to make it work
const arr = [2, 3];
rest.set(arr, 'Test2');
console.log(rest.get(arr));

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

// Iteration
const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'CORRECT!'],
  [false, 'Try Again!'],
]);
console.log(question);

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get('question'));
for (const [key, value] of question)
  console.log(typeof key === 'number' ? `Answer ${key}: ${value}` : '');

// const answer = Number(prompt('Your answer'));
// console.log(answer);
// console.log(question.get(answer === question.get('correct')));

// Convert map to array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

/*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
console.log([...new Set(gameEvents.values())]);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);
// 4.
for (const [minute, event] of gameEvents) {
  const whichHalfStr = minute <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
  console.log(`${whichHalfStr} ${minute}: ${event}`);
}
*/

/*
/////////////////////////////////////////////////
// WORKING WITH STRINGS
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(1, -2));
console.log(airline.slice(-1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  console.log(s === 'B' || s === 'E');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('JOE'));
console.log(typeof new String('JOE'));
console.log(typeof new String('JOE').slice(1));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// FIX CApitalization in string
const passenger = 'jOnAs';
const passengerCorrect =
  passenger[0].toUpperCase() + passenger.slice(1).toLowerCase();
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@joe.io';
const loginEmail = ' Hello@Joe.IO \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(normalizedEmail === email);

// Replacing
const priceGB = '288,97E';
const priceUS = priceGB.replace('E', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate')); // using regular expression

// Booleans
const plane2 = 'A320neo';
console.log(plane2.includes('A'));
console.log(plane2.startsWith('A32'));

console.log('joe+ayman+shaker'.split('+'));
console.log(['joe', 'shaker'].join(' '));

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(846352984758934));

// Repeat
console.log('joeshak'.repeat(5));
*/

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;

  const lines = text.split('\n');
  for (const [i, line] of lines.entries()) {
    const [first, second] = line.toLowerCase().trim().split('_');
    const output = `${first}${second[0].toUpperCase() + second.split(1)}`;
    console.log(output.padEnd(20) + `${'✅'.repeat(i + 1)}`);
  }
});
*/
/*
//////////////////////////////////////////////////////////////////////////////
// String Practices
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(45);
  console.log(output);
}

// for (const flight of flights.split('+')) {
//   const [type, from, to, time] = flight.split(';');
//   const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
//     '_',
//     ' '
//   )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
//   console.log(output);
// }
*/
