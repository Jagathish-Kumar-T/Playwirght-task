// Write a named function to convert a temperature from Celsius to Fahrenheit.

function convertCelsiusToFahrenheit(celsius: number): number {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  let celsius:number = 25;
  let fahrenheit:number = convertCelsiusToFahrenheit(celsius);
  console.log(`${celsius}°C is equal to ${fahrenheit}°F`);
  
  console.log("----------------------------------------------");
  
  // Create a named function that finds the factorial of a number.
  
  function calculateFactorialOfANumber (input:number) : number {
  for (let i = 1; i <= input; i++) {
      factorial = factorial * i;
  }
  return factorial;
  }
  
  let factorial: number = 1;
  let input:number = 5;
  
  console.log(`Factorial of ${input} is ${calculateFactorialOfANumber(input)}`);
  
  console.log("----------------------------------------------");
  
  // Implement a named function that checks if a given string contains vowels.
  
  function containsVowels(input: string): boolean {
    let convertedString:string = input.toLowerCase(); // converting the string to lowercase
    if(convertedString.includes('a') || convertedString.includes('e') || convertedString.includes('i') || 
    convertedString.includes('o') || convertedString.includes('u')) // checking the string contains vowels
    {
    return true;
    }
  return false;
  }
  let vowelString:string = "Apple";
  let nonVowelString:string = "Rhythm";
  
  console.log(`Is the word ${vowelString} contains vowels ? : ${containsVowels("Apple")} , it contains vowels`); // contains vowels
  console.log(`Is the word ${nonVowelString} contains vowels ? : ${containsVowels("Rhythm")} , it does not contains vowels`); // does not contains vowels
  
  console.log("----------------------------------------------");
  
  // Write a named function to determine if a given year is a leap year.
  
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
  
  console.log("----------------------------------------------");
  
  // Create a named function that returns the greatest common divisor (GCD) of two numbers.
  
  function findGCDOfTwonumbers(a: number, b: number): number {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return Math.abs(a); // Returns only the positive number
  }
  
  
  let a:number = 5;
  let b:number = 15;
  console.log(`GCD of ${a} and ${b} is ${findGCDOfTwonumbers(a, b)}`);