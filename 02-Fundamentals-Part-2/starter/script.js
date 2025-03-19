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

/* Write your code below. Good luck! 🙂 */
const calcBMI = (mass, height) => mass / (height * height);

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
};
mark.bmi = calcBMI(mark.mass, mark.height)

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
};
john.bmi = calcBMI(john.mass, john.height)

if (mark.bmi > john.bmi) console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
else if (mark.bmi < john.bmi) console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi}`);
else console.log(`They're equal (${john.bmi}) (${mark.bmi})`);


const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

const calcAverage = arr => {
  let sum = 0;
  arr.forEach(num => sum += num);
  console.log(arr);
  return sum / arr.Length;
}
calcAverage(totals);