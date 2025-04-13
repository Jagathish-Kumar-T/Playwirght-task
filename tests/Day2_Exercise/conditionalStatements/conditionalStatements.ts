// Write a program to check if a given number is odd or even.

let num: number = 21;

if (num % 2 === 0) {
    console.log(`${num} is an even number`);
}
else {
    console.log(`${num} is an odd number`);
}

console.log("----------------------------------------------");

// Create a function that takes a grade and returns whether it is "Pass" or "Fail" based on a threshold value.

let threshold: number = 35;
let grade: number = 5;

if (grade >= threshold) {
    console.log(` Congratulations , ${grade} is a PASS mark !!!`);
}
else {
    console.log(`Sorry ${grade} is a FAIL mark`);
}

console.log("----------------------------------------------");

// Write a program to determine the type of triangle (equilateral, isosceles, or scalene) based on its sides.

function determineTriangleType(a: number, b: number, c: number): string {

    // First checking it is a valid triangle or not , if it is an invalid triangle means , the execution will be completed on the first if condition itself. 

    if (a + b <= c || b + c <= a || c + a <= b) {
        return "It is an invalid triangle";
    }

    // If it is not an invalid triangle , then checking the type of the triangle

    if (a === b && b === c) {
        return "It is an Equilateral triangle"; // All three sides are equal 
    }

    else if (a === b || b === c || c === a) {
        return "It is an Isosceles triangle"; // Any two sides are equal
    }

    else {
        return "It is a Scalene triangle"; // All three sides are different
    }

}

console.log(determineTriangleType(0, 1, 0)); // Invalid Triangle
console.log(determineTriangleType(8, 8, 8)); // Equilateral Triangle
console.log(determineTriangleType(7, 7, 4)); // Isosceles triangle
console.log(determineTriangleType(7, 8, 9)); // Scalene triangle

console.log("----------------------------------------------");

// Implement a program to check if a string is a palindrome or not.

function isPalindrome(value: string): string {
    let reversedString: string;
    reversedString = value.split("").reverse().join(""); // converting the string to array , then reversing the array , again converting that reversed array to string
    if (value.toLowerCase() === reversedString.toLowerCase()) // converting both the strings to lower case to ignore case sensitivity and comparing they are equal or not
    {
        return `${value} is a palindrome string`
    }
    else {
        return `${value} is not a palindrome string`
    }
}
console.log(isPalindrome("raceCAR")); // palindrome string
console.log(isPalindrome("adam")); // Not a palindrome string

console.log("----------------------------------------------");

// Write a program that checks if a given year is a leap year.

function isLeapYear(year: number): string {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} is a Leap year`
    }
    else {
        return `${year} is not a Leap year`
    }
}
console.log(isLeapYear(2024)); // Leap year
console.log(isLeapYear(2025)); // Not a Leap year