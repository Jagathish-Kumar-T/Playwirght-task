// Write an arrow function to find the square of a number.

const squareOfNumbers = (num: number): number => num * num;
let input: number = 5;
console.log(`Suquare of ${input} is ${squareOfNumbers(input)} `);

console.log("----------------------------------------------");

// Create an arrow function that filters out even numbers from an array.

const filtersEvenNumbers = (arr: number[]): number[] => arr.filter((num) => num % 2 === 0)

let arr: number[] = [1, 2, 3, 4, 5];
console.log(`Even numbers in the array : ${filtersEvenNumbers(arr)}`);

console.log("----------------------------------------------");

// Implement an arrow function that calculates the average of a list of numbers.

let scores: number[] = [1, 2, 3, 4, 5];
const averageOfNumbers = (scores: number[]): number => {
    let sumOfNumbers: number = scores.reduce((a, b) => a + b, 0);
    return sumOfNumbers / scores.length;
}
console.log(`Average of the given array is ${averageOfNumbers(scores)}`);

console.log("----------------------------------------------");

// Write an arrow function to return the length of the longest string in an array.

let stringArray: string[] = ["Selenium", "Cypress", "PlayWright"];

const calculateLengthOfLongestString = (stringArray: string[]): number => {
    let lengthOfEachstring: number[] = []; // creating an empty number arry to store each length of the string in an string array
    for (let i = 0; i < stringArray.length; i++) {
        lengthOfEachstring.push(stringArray[i].length);
    }
    return Math.max.apply(0, lengthOfEachstring); // returns the maximum number in the array;
}

console.log(`Length of the longest string is: ${calculateLengthOfLongestString(stringArray)}`);

console.log("----------------------------------------------");


// Use an arrow function to map over an array and return each number squared.

let numArray: number[] = [1, 2, 3, 4, 5];

const eachNumberSquared = (numArray: number[]): number[] => numArray.map((a) => a * 2);

console.log(`Square of each numbers in an array : ${eachNumberSquared(numArray)}`);