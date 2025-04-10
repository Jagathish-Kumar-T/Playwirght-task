// Answer : 1
var username = "Jagathish";
console.log("username is ".concat(username));
//Answer : 2
var union;
union = 2;
console.log("Printing the number ".concat(union));
union = "India";
console.log("Printing the string ".concat(union));
//Answer : 3
var arrayofnumbers = [1, 2, 3, 4, 5, 6];
for (var i = 0; i < arrayofnumbers.length; i++) {
    console.log("Number on the ".concat(i, " index is ").concat(arrayofnumbers[i]));
}
//Answer : 4
var num1 = 20;
var num2 = 15;
var difference = num1 - num2;
console.log("Difference of ".concat(num1, " and ").concat(num2, " is ").concat(difference));
//Answer : 5
var scores = [10, 20, 30];
var sum = 0;
for (var i = 0; i < scores.length; i++) {
    sum = sum + scores[i];
}
var average = (sum / scores.length);
console.log("Average for the given array is ".concat(average));
//Answer : 6
var radius = 5;
var area = Math.PI * Math.pow(radius, 2);
console.log("Area of the circle having the radius ".concat(radius, " is ").concat(area));
