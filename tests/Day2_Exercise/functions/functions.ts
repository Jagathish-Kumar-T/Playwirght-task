// Write a function that calculates the area of a circle given its radius.

function calculateAreaOfACircle(radius: number): number {
    const area = Math.PI * Math.pow(radius, 2);
    return area;
}

let radius: number = 5;
console.log(`Area of the circle having radius ${radius} is ${calculateAreaOfACircle(radius)}`);

console.log("-----------------------------");

// Create a function to check if a number is positive, negative, or zero.

function checkNumberType(num: number): string {
    if (num > 0) {
        return `${num} is a positive number`;
    } else if (num < 0) {
        return `${num} is a negative number`;
    } else {
        return `Given number is zero (0)`;
    }
}

console.log(checkNumberType(2)); // positive number
console.log(checkNumberType(-12)); // negative number
console.log(checkNumberType(0)); //  0

console.log("-----------------------------");

// Write a function that takes an array of numbers and returns the sum of all the numbers.

let scores: number[] = [10, 20, 30];
let sum: number = 0;
for (let i = 0; i < scores.length; i++) {
    sum = sum + scores[i];
}

console.log(`Sum of the given scores array is ${sum}`);

console.log("-----------------------------");

// Implement a function to find the maximum value in an array.

function findMaxValue(numbers: number[]): number {

    let max: number = numbers[0];
    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}


let values: number[] = [5, 12, 7, 3, 19, 21];
console.log(`The maximum value in the given array is: ${findMaxValue(values)}`);

console.log("-----------------------------");

// Create a function that reverses the words in a given sentence.

function reverseWordsInASentence(sentence: string): string {
    return sentence.split(" ").reverse().join(" ");
}

let sentence: string = "The sun rises in the east";
console.log(`Reversed sentence: ${reverseWordsInASentence(sentence)}`);