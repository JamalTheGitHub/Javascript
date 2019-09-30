// This is a comment. We can use this to write in the .js extension without worrying if it might affect the code.
// linked to index.html


// Basic Fundamentals
console.log("This is the console section!")
alert("Hello World!");

let message;
message = "I am assigned to the variable message";
alert(message);

let numbers;
numbers = [1,2,3,4,5];
alert(numbers);       // [1,2,3,4,5]

numbers = "Nothing";
console.log(numbers); //Nothing


// boolean
var bigger = 3 > 1;
console.log(bigger);    //true
var smaller = 1 < 3;
console.log(smaller);   // true
var not_true = 6 > 8;
console.log(not_true)   // false


// Backticks example
name = "John";
admin = name;
console.log(`The admin is ${admin}`);
alert(`2 + 2 is ${2 + 2}`);