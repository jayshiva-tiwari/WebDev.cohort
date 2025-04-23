// primitive data types

let name = "John"; // string
let age = 30; // number
let isStudent = true; // boolean
let height = 5.9; // number (float)
let nulla = null; // object (null value)
let undefinedVar; // undefined (no value assigned)
let symbolVar = Symbol("unique"); // symbol (unique identifier)


// non-primitive data types
let array = [1, 2, 3, 4, 5]; // array (list of values)


let object = { 
    name: "John", 
    age: 30 
}; // object (key-value pairs)


let functionVar = function() {
        return "Hello"; 
}; // function (block of code) , object type

let num ="123"; // string (number in quotes)

let num2 = '123as'; // string (number in quotes with letters)

let str = "123"; // string (number in quotes)

let convertedNum = Number(num2); // convert string to number  (recommended)

let convertedNum2 = +num // convert string to number using unary plus operator

let convertedNum3 = parseInt(num) // convert string to number using parseInt

let convertedStr = String(num); // convert number to string (recommended)




console.log(typeof num); // string

console.log(convertedNum); // 123

console.log(typeof convertedNum); // number

console.log(typeof convertedStr); // string



//operators

let a = 10; // number
let b = 5; // number

let sum = a + b; // addition
let difference = a - b; // subtraction
let product = a * b; // multiplication
let quotient = a / b; // division
let remainder = a % b; // modulus (remainder of division)
let exponent = a ** b; // exponentiation (a raised to the power of b)


//comparison operators
let isEqual = (a == b); // equality (loose comparison) check only the value
let isStrictEqual = (a === b); // strict equality check both value and type
let isNotEqual = (a != b); // inequality (loose comparison) check only the value
let isStrictNotEqual = (a !== b); // strict inequality check both value and type
let isGreaterThan = (a > b); // greater than
let isLessThan = (a < b); // less than
let isGreaterThanOrEqual = (a >= b); // greater than or equal to
let isLessThanOrEqual = (a <= b); // less than or equal to
let isTrue = (a > b && a < 20); // logical AND
let isFalse = (a > b || a < 20); // logical OR



console.log(isLessThan);


//play with Math & DateTime (in js)

// console.log(Math.max(10, 20)); // maximum value
// console.log(Math.min(10, 20)); // minimum value
// console.log(Math.random()); // random number between 0 and 1




function roll() {
    const dice = Math.random() * 6 + 1; // random number between 1 and 6
    console.log(Math.floor(dice)); // print the random number without decimal places console.log(dice); // print the random number
}
roll();

//play with crypto and http (in nodejs) 


//string methods
let str1 = "Hello, World!";

//template literals
let name1 = "John";
let greeting = `hello ${name}`; // template literal (string interpolation)

console.log(str1.length); // length of the string
console.log(str1.toUpperCase()); // convert to uppercase
console.log(str1.toLowerCase()); // convert to lowercase
console.log(str1.indexOf("World")); // index of a substring
console.log(str1.slice(0, 5)); // extract a substring (from index 0 to 5) this method is content start and end index

