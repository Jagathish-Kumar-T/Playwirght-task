// 1. Write an arrow function to find the square of a number.
var squareOfANumber = function (num) { return num * num; };
var input = 5;
console.log("Suquare of ".concat(input, " is ").concat(squareOfANumber(input), " "));
console.log("----------------------------------------------");
// 2. Create an arrow function that filters out even numbers from an array.
var filtersEvenNumbers = function (arr) { return arr.filter(function (num) { return num % 2 === 0; }); };
var arr = [1, 2, 3, 4, 5];
console.log("Even numbers in the array : ".concat(filtersEvenNumbers(arr)));
console.log("----------------------------------------------");
// 3. Implement an arrow function that calculates the average of a list of numbers.
var scores = [1, 2, 3, 4, 5];
var averageOfNumbers = function (scores) {
    var sumOfNumbers = scores.reduce(function (a, b) { return a + b; }, 0);
    return sumOfNumbers / scores.length;
};
console.log("Average of the given array is ".concat(averageOfNumbers(scores)));
console.log("----------------------------------------------");
// 4. Write an arrow function to return the length of the longest string in an array.
var stringArray = ["Selenium", "Cypress", "PlayWright"];
var calculateLengthOfLongestString = function (stringArray) {
    var lengthOfEachString = []; // creating an empty number arry to store each length of the string in an string array
    for (var i = 0; i < stringArray.length; i++) {
        lengthOfEachString.push(stringArray[i].length);
    }
    return Math.max.apply(0, lengthOfEachString); // returns the maximum number in the array;
};
console.log("Length of the longest string is: ".concat(calculateLengthOfLongestString(stringArray)));
console.log("----------------------------------------------");
// 5. Use an arrow function to map over an array and return each number squared.
var numArray = [1, 2, 3, 4, 5];
var eachNumberSquared = function (numArray) { return numArray.map(function (a) { return a * 2; }); };
console.log("Square of each numbers in an array : ".concat(eachNumberSquared(numArray)));
