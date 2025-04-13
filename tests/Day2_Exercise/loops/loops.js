//Answer 1 
var num = 10;
var firstNumber = 0, secondNumber = 1, thirdNumber;
var count;
for (var i = 1; i <= num; i++) {
    if (i === 1)
        count = "".concat(i, "st");
    else if (i === 2)
        count = "".concat(i, "nd");
    else if (i === 3)
        count = "".concat(i, "rd");
    else
        count = "".concat(i, "th");
    console.log("".concat(firstNumber, " is the ").concat(count, " number of Fibbonacci series"));
    thirdNumber = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = thirdNumber;
}
console.log("----------------------------------------------");
//Answer : 2
function isPrimeNumber(num1) {
    for (var i = 2; i <= Math.sqrt(num1); i++) {
        if (num1 % i === 0) {
            return false;
        }
    }
    return true;
}
var limit = 100;
for (var i = 2; i <= limit; i++) // Starting the iteration from 2 , because 1 is neither a prime number nor a composite number
 {
    if (isPrimeNumber(i))
        console.log("".concat(i, " is a prime number"));
}
console.log("----------------------------------------------");
// Answer : 3
var fullname = "JagathishKumar";
var reversedString = "";
var lastIndex = (fullname.length) - 1; // identifying the last index of the string
while (lastIndex >= 0) {
    reversedString = reversedString + fullname[lastIndex];
    lastIndex--; // decrementing the index value from in descending order untill the index 0
}
console.log("Reversed string value of the string ".concat(fullname, " is ").concat(reversedString));
console.log("----------------------------------------------");
// Answer : 4
var calculateFactorial = 10;
var factorial = 1;
for (var i = 1; i <= calculateFactorial; i++) {
    factorial = factorial * i;
}
console.log("Factorial of ".concat(calculateFactorial, " is ").concat(factorial));
console.log("----------------------------------------------");
// Answer : 5
var tableLimit = 10;
function printMultiplicationTable(tableLimit) {
    for (var i = 1; i <= tableLimit; i++) {
        console.log("Multiplication Table for number ".concat(i));
        for (var j = 1; j <= 10; j++) {
            console.log("".concat(i, " x ").concat(j, " = ").concat(i * j));
        }
        console.log("End of Table ".concat(i));
    }
}
// Run the function
printMultiplicationTable(tableLimit);
