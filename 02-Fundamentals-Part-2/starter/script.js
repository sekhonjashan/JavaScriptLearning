'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}
console.log(calcAge2(2000));

const calcAge3 = (birthYear) => 2037 - birthYear;
console.log(calcAge3(2000));

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge3(birthYear);
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(2000, "Youssef"))

const years = [1990, 1967, 2002, 2010, 2018];
const ages = new Array();

years.forEach(year => ages.push(calcAge3(year)));

console.log(years)
console.log(ages)

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: false,
  calcAge4: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  }
};

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)

console.log(jonas.calcAge4())
console.log(jonas.age)

console.log(`${jonas.firstName} is a ${jonas.age}-year old teacher and he has ${jonas.hasDriversLicense ? "a" : "no"} driver's license.`)