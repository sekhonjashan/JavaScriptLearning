'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
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
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Destructuring object as a parameters.
  orderDelivery: function ({
    time = '20:00',
    address,
    mainIndex = 0,
    starterIndex = 1,
  }) {
    console.log(
      `Order recieved! ${this.mainMenu[mainIndex]} & ${this.starterMenu[starterIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here's your declicious pasta with ${ing1}, ${ing2} & ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
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
