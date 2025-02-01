// /*const country = 'Bulgaria';
// const continent = 'Europe';
// let population = '7 milion'
// const isIsland = false;
// const language = 'Bulgarian'

// console.log(country);
// console.log(continent);
// console.log(population);
// console.log(isIsland);*/

// let scoreDolphins = (88 + 91 + 110) / 3;
// let scoreKoalas = (88 + 91 + 110) / 3;

// if (scoreDolphins > scoreKoalas) {
//   console.log(`Dolphins win the trophy`);
// } else if (scoreDolphins < scoreKoalas) {
//   console.log(`Koalas win the trophy`);
// } else {
//   console.log(`Both win the trophy`);
// }

// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
// const total = bill + tip;

// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${total}`
// );

// function logger() {
//   console.log("samo levski");
// }

// logger();
// logger();
// logger();

// const cutPieces = function (fruit) {
//   return fruit * 4;
// };

// const fruitPieces = function (apples, oranges) {
//   const applePieces = cutPieces(apples);
//   const orangePieces = cutPieces(oranges);

//   const juice = `V soka ima ${applePieces} par4eta qbulka i ${orangePieces} par4eta portokal.`;
//   return juice;
// };

// console.log(fruitPieces(2, 3));

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
// };
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);

//  ------ Objects ------

// const jonas = {
//   firstName: "Jonas",
//   friends: ["Michael", "Ivan", "Petkan"],
// };

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`
// );

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
//       john.fullName
//     }'s (${john.calcBMI()})`
//   );
// } else if (mark.calcBMI() < john.calcBMI()) {
//   console.log(
//     `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
//       mark.fullName
//     }'s (${mark.calcBMI()})`
//   );
// } else {
//   console.log("se taq brat");
// }

// let mitko = 0;

// for (let i = 10; i >= mitko; i--) {
//   console.log(i);
// }

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(tips);
console.log(totals);
