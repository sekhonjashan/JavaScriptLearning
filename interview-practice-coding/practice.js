/*
// write a function to check if a given number is prime
const isPrime = (number) => {
  if (number <= 1 || number % 2 === 0) {
    return false;
  } else {
    return true;
  }

}

console.log(isPrime(3));
console.log(isPrime(0));
console.log(isPrime(30));
console.log(isPrime(33));
*/

/*
// write a function that returns the largest number in an array

const largestNum = (nums) => {
  let largestNum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largestNum) {
      largestNum = nums[i];
    }
  }
  return largestNum;
};


console.log(largestNum([2, 39, 804, 4200]));
*/

/*
// write a function to reverse a string in JS
function revString(str) {
  const reversedString = str.split('').reverse().join('');
  return reversedString;
};

console.log(revString('hello'));
revString('onion');
revString('jam');

function revString(str) {
  let newString = '';
  
  for (i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
  
}

console.log(revString('hello'));
*/

/*

//  write a function to remove duplicates from any array

// The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
// A JavaScript Set is a collection of unique values. Each value can only occur once in a Set. A Set can hold any value of any data type.

function removeDuplicates(arr) {
  const newSet = new Set(arr);
  console.log(Array.from(newSet));
}

removeDuplicates(['a', 'a', 'c', 'd', 'a']);
*/

/*
// write a function to check if two strings are anagrams in js
// anagram
// The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted.
function compare(word1, word2) {
  const sortedW1 = word1.split('').sort().join('');
  const sortedW2 = word2.split('').sort().join('');

  if (sortedW1 === sortedW2) {
    console.log(`${word1} and ${word2} are anagrams`);
  } else {
    console.log(`${word1} and ${word2} are not anagrams`);
  }
}


compare('iceman', 'cinema')
*/

/*
// write a function to find the factorial of a given number in js
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  let result = num;
  for (let i = num - 1; i >= 1; i--) {
    result *= i;
    console.log(result, i);
  }
  return result;
}

console.log(factorial(5));
*/

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(`i: ${i}`);
//   }, i * 1000)
// };

// for (let j = 0; j < 5; j++) {
//   setTimeout(() => {
//     console.log(`j: ${j}`);
//   }, j * 1000)
// };


// for (let a = 1; a < 200; a++) {
//   if (a % 3 === 0) {
//     console.log(a)
//   }
// }

/*
function timeConversion(str) {
  const timeOnly = str.substring(0, str.length - 2);
  const modifier = str.substring(str.length - 2,);
  let [hours, mins, secs] = timeOnly.split(':');

  if (hours === '12') {
    hours = '00';
  }

  if (modifier.toUpperCase() === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }

  return `${hours}:${mins}:${secs}`;

};

console.log(timeConversion('12:05:45PM'));
console.log(timeConversion('01:05:45PM'));
console.log(timeConversion('08:05:45PM'));
*/

/*
//Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function diagonalDifference(arr) {
  let rightLeftDiag = 0;
  let leftRightDiag = 0;
  let j = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    rightLeftDiag += arr[i][i];
    leftRightDiag += arr[i][j];
    j--;
  }

  return Math.abs(rightLeftDiag - leftRightDiag);
}

console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));
*/

// Given a list of integers, count and return the number of times each value appears as an array of integers.

function countingSort(arr) {
  const zeroArray = new Array(100).fill(0);
  for (const num of arr) {
    if (arr.includes(num)) {
      zeroArray[num] = zeroArray[num] + 1;
    }
  }
  return console.log(zeroArray);
}


countingSort([63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67, 99, 12, 83, 89, 80, 91, 39, 86, 76, 85, 74, 39, 25, 90, 59, 10, 94, 32, 44, 89]);


// Given an array of integers, where all elements but one occur twice, find the unique element.

const lonelyInteger = (arr) => {

}

// lonelyInteger([1, 2, 3, 4, 3, 2, 1]);