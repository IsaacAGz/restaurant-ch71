// --- this is a comment
// console.log(10 + 2)
/*
this is a multi-line comment
*/

/* ---- String ---- (Data Type)
A string is text, always wrapped in single or double quotes
To create a ariable we habe to:
1. Declare it with a name
2. Initialize it with value (optional)
*/

let firstName = "Isaac";
let lastName = "Angulo";
let thisIsAnExampleForAVariable;
thisIsAnExampleForAVariable = "Example";

let city = "San Diego";

console.log("Hello World from variables.js");
console.log(city);
console.log("First Name:", firstName, thisIsAnExampleForAVariable);

// Changing value for the variables that have already been declared.

firstName = "Vania"
console.log("First Name:", firstName);

// Numbers (Data Type)

let age = 30;
console.log(firstName, "is", age, "years old");

// Booleans (Data Type)

//let isStudent = true;
let isLoggedIn = false;
//console.log(isStudent);
console.log(isLoggedIn);

// Arithmetic Operators

let num1 = 10;
let num2 = 3;

let sum = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;

console.log("Summation: " + sum);
console.log("Subtraction: " + sub);
console.log("Multiplication: " + mul);
console.log("Division: " + div);

// Building strings with variables
console.log("My name is : " + firstName + " and I live in " + city);

// we use backtick for template literals
console.log(`My name is ${firstName} and I line in ${city}`);

//Constants
const DAYSINWEEK = 7;
const PI = 3.14;

console.log(DAYSINWEEK);
console.log(PI);


// Use const by defautl
// switch to let only if you need to change the value

// Prompt
// prompt() asks the user a question and gives you their answer
// casting Number() converts a string to a number (int)
let userAge = Number(prompt("How old are you"));
console.log("I am " + userAge + " years old.");
console.log(`${userAge} + 30 =`, userAge + 30);

console.log("====================== THIS IS THE END OF THE SESSION ======================");

/* Challenge 1.
Declare three variables using const and let that describe 
your name, your age and wether you are a student.
Print all three to the console in one line using a template literal.
*/

const MYNAME = "Isaac";
let myAge = 28;
let isStudent = true;

console.log(`My name is ${MYNAME}, I am ${myAge} years old. Student: ${isStudent}`);
