
// Write a program to print the first 10 numbers in the Fibonacci sequence.

let num: number = 10;
let firstNumber: number = 0, secondNumber: number = 1, thirdNumber;
let count: string;

for (let i = 1; i <= num; i++) {
    if (i === 1)
        count = `${i}st`;
    else if (i === 2)
        count = `${i}nd`;
    else if (i === 3)
        count = `${i}rd`;
    else
        count = `${i}th`;


    console.log(`${firstNumber} is the ${count} number of Fibbonacci series`);

    thirdNumber = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = thirdNumber;
}

console.log("----------------------------------------------");

// Create a program that prints all prime numbers between 1 and 100.

function isPrimeNumber(num1: number): boolean {
    for (let i = 2; i <= Math.sqrt(num1); i++) {
        if (num1 % i === 0) {
            return false;
        }
    }

    return true;

}

let limit: number = 100;


for (let i = 2; i <= limit; i++) // Starting the iteration from 2 , because 1 is neither a prime number nor a composite number
{
    if (isPrimeNumber(i))
        console.log(`${i} is a prime number`);
}

console.log("----------------------------------------------");

// Write a program to reverse a string using a loop.

let fullname: string = "JagathishKumar";
let reversedString: string = "";
let lastIndex = (fullname.length) - 1; // identifying the last index of the string

while (lastIndex >= 0) {
    reversedString = reversedString + fullname[lastIndex];
    lastIndex--; // decrementing the index value from in descending order untill the index 0
}
console.log(`Reversed string value of the given string ${fullname} is ${reversedString}`);

console.log("----------------------------------------------");

// Implement a program to calculate the factorial of a given number using a loop.

let calculateFactorial: number = 10;
let factorial: number = 1;
for (let i = 1; i <= calculateFactorial; i++) {
    factorial = factorial * i;
}
console.log(`Factorial of ${calculateFactorial} is ${factorial}`);

console.log("----------------------------------------------");

// Write a program to generate a multiplication table for numbers 1 to 10.

let tableLimit: number = 10;
function printMultiplicationTable(tableLimit: number): void {
    for (let i = 1; i <= tableLimit; i++) {
        console.log(`Multiplication Table for number ${i}`);
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
        console.log(`End of Table ${i}`);
    }
}

// Run the function
printMultiplicationTable(tableLimit);