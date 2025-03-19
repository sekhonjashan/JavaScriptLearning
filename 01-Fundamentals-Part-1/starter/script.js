let countryName = "Canada";
let continentName = "North America";
let countryPopulation = 37.59;
console.log(countryName);
console.log(continentName);
console.log(countryPopulation+" million");

const isIsland = false;
const language = "English";

console.log("is it a Island "+isIsland);
console.log("language is "+language);
console.log("If the country is split in half the value of the population is "+countryPopulation/ 2);
countryPopulation += 1;
console.log("new population is "+countryPopulation);

let finlandPopulation = 6;

console.log("if the population is more than Finland , the answer is " +  (countryPopulation > finlandPopulation));

let averagePopulation = 33;

console.log("if the population is less than average population , the answer is " +  (countryPopulation < averagePopulation));

let description = countryName + " is in " + continentName + ", and its " + countryPopulation + " million people speak " + language;
console.log(description);


