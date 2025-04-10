// Answer : 1
let username : string = "Jagathish";
console.log(`username is ${username}`);

//Answer : 2
let union : number | string;
union = 2;
console.log(`Printing the number ${union}`);

union = "India";
console.log(`Printing the string ${union}`);

//Answer : 3
let arrayofnumbers : number [] = [1,2,3,4,5,6];
for(let i=0;i<arrayofnumbers.length;i++)
{
console.log(`Number on the ${i} index is ${arrayofnumbers[i]}`);
}

//Answer : 4
let num1 : number = 20;
let num2 : number = 15;
let difference : number = num1 - num2;
console.log(`Difference of ${num1} and ${num2} is ${difference}`);

//Answer : 5
let scores : number [] = [10,20,30];
let sum : number = 0;
for(let i=0;i<scores.length;i++)
{
sum = sum + scores[i];
}
let average : number = (sum / scores.length);
console.log(`Average for the given array is ${average}`);

//Answer : 6
let radius : number = 5;
let area = Math.PI * Math.pow(radius, 2);
console.log(`Area of the circle having the radius ${radius} is ${area}`);



