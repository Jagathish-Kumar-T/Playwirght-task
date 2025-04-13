// Write a named function to convert a temperature from Celsius to Fahrenheit.
function convertCelsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}
var celsius = 25;
var fahrenheit = convertCelsiusToFahrenheit(celsius);
console.log("".concat(celsius, "\u00B0C is equal to ").concat(fahrenheit, "\u00B0F"));
console.log("----------------------------------------------");
// Create a named function that finds the factorial of a number.
function calculateFactorialOfANumber(input) {
    for (var i = 1; i <= input; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
var factorial = 1;
var input = 5;
console.log("Factorial of ".concat(input, " is ").concat(calculateFactorialOfANumber(input)));
console.log("----------------------------------------------");
// Implement a named function that checks if a given string contains vowels.
function containsVowels(input) {
    var convertedString = input.toLowerCase(); // converting the string to lowercase
    if (convertedString.includes('a') || convertedString.includes('e') || convertedString.includes('i') ||
        convertedString.includes('o') || convertedString.includes('u')) // checking the string contains vowels
     {
        return true;
    }
    return false;
}
var vowelString = "Apple";
var nonVowelString = "Rhythm";
console.log("Is the word ".concat(vowelString, " contains vowels ? : ").concat(containsVowels("Apple"), " , it contains vowels")); // contains vowels
console.log("Is the word ".concat(nonVowelString, " contains vowels ? : ").concat(containsVowels("Rhythm"), " , it does not contains vowels")); // does not contains vowels
console.log("----------------------------------------------");
// Write a named function to determine if a given year is a leap year.
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return "".concat(year, " is a Leap year");
    }
    else {
        return "".concat(year, " is not a Leap year");
    }
}
console.log(isLeapYear(2024)); // Leap year
console.log(isLeapYear(2025)); // Not a Leap year
console.log("----------------------------------------------");
// Create a named function that returns the greatest common divisor (GCD) of two numbers.
function findGCDOfTwonumbers(a, b) {
    while (b !== 0) {
        var temp = b;
        b = a % b;
        a = temp;
    }
    return Math.abs(a); // Returns only the positive number
}
var a = 5;
var b = 15;
console.log("GCD of ".concat(a, " and ").concat(b, " is ").concat(findGCDOfTwonumbers(a, b)));
