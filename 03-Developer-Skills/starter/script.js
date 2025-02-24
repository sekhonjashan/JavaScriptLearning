// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/* 
4 steps to solve any problem:
1) Ask the right questions
2) Break the problem into smaller sub-problems
3) Research
4) Write pseudo-code
*/

/*
Challenge #1 
1. Create a function called printForecast which takes in an array
2. loop through the array
3. With every iteration, we need to create part of the string containing 3 dots, the temperature and the corresponding # of days. The # increases with every iteration. 
4. If the # of days is 1, it should be "day"
5. At the end of the iteration, the part of the string should be added to the previous parts. 
6. At the end of the loop, we log the full sentence.

const printForecast = function (arr) {
    let fullSentence;
    for (let i = 0; i < arr.length; i++) {
        1. create part of the string
        2. Add it to the fullSentence variable
    }

    console.log(fullSentence);
}
*/

const printForecast = function (arr) {
  let fullSentence = "... ";
  for (let i = 0; i < arr.length; i++) {
    fullSentence += `${arr[i]}C in ${i + 1} days ... `;
  }

  console.log(fullSentence);
};

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

printForecast(arr2);
