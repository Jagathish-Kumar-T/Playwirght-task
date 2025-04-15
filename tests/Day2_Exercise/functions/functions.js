// 1. Write a function that calculates the area of a circle given its radius.
function calculateAreaOfACircle(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    return area;
}
var radius = 5;
console.log("Area of the circle having radius ".concat(radius, " is ").concat(calculateAreaOfACircle(radius)));
console.log("-----------------------------");
// 2. Create a function to check if a number is positive, negative, or zero.
function checkNumberType(num) {
    if (num > 0) {
        return "".concat(num, " is a positive number");
    }
    else if (num < 0) {
        return "".concat(num, " is a negative number");
    }
    else {
        return "Given number is zero (0)";
    }
}
console.log(checkNumberType(2)); // positive number
console.log(checkNumberType(-12)); // negative number
console.log(checkNumberType(0)); //  0
console.log("-----------------------------");
// 3. Write a function that takes an array of numbers and returns the sum of all the numbers.
var scores = [10, 20, 30];
var sum = 0;
function sumOfAllNumbers(scores) {
    for (var i = 0; i < scores.length; i++) {
        sum = sum + scores[i];
    }
    return sum;
}
sumOfAllNumbers(scores);
console.log("Sum of the given array is ".concat(sum));
console.log("-----------------------------");
// 4. Implement a function to find the maximum value in an array.
function findMaxValue(numbers) {
    var max = numbers[0];
    for (var i = 0; i <= numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
var values = [5, 12, 7, 3, 19, 21];
console.log("The maximum value in the given array is: ".concat(findMaxValue(values)));
console.log("-----------------------------");
// 5. Create a function that reverses the words in a given sentence.
function reverseWordsInASentence(sentence) {
    return sentence.split(" ").reverse().join(" ");
}
var sentence = "The sun rises in the east";
console.log("Reversed sentence: ".concat(reverseWordsInASentence(sentence)));
