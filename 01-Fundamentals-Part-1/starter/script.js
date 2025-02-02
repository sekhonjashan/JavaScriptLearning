const year = "1983"

// NUMBERS
// Type coercion
// + operator will try to convert numbers to string if string is present
console.log(year + 42); // 198342
console.log(1983 + 42); // 2025

// -, * and / operators will try to convert strings to numbers if number is present.
console.log('2025' - 42); // 1983
console.log('two' - 1); // NaN
console.log('21' * 2); // 42
console.log(84 / '2'); // 42



// Type conversion
// NUMBER
console.log(Number(year) + 42);
// STRINGS
console.log(String(42), 42);
