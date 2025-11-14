// ==================================

// 0.1) Write a simple function statement called sayHello 
//      that logs "Hello World" when called. Call the function.
function sayHello () {
  return "Hello World"
}
console.log(sayHello())
// 0.2) Write a function statement called addTwoNumbers that 
//      takes two numbers and logs their sum. Call it with (3, 4).
function addTwoNumbers (a, b) {
  return a + b
}
console.log(addTwoNumbers(3, 4))
// 0.3) Write a function statement called favoriteColor that 
//      accepts one parameter (color) and logs "My favorite color is X".
function favoriteColor (color) {
  return `My favorite color is ${color}!`
}
console.log(favoriteColor("green"))
// 0.4) Create a function called double that accepts a number and 
//      returns that number multiplied by 2. Save the result to a variable and log it.
function double(num) {
  let doubled = num *= 2
  return doubled
}

console.log(double(6))

// ================= Function Expressions =================

// 1) Write a function expression stored in a variable called addNumbers 
//    that returns the sum of two numbers. Call it with (5, 7).
let addNumbers = (a, b) => a + b
console.log(addNumbers(5, 7)) 
// 2) Convert this function statement into a function expression:
   let greet = function greet(name) {
       return "Hello, " + name;
   }
   console.log(greet("Preston"))

// 3) Why does this code throw an error? Fix it. It is attempting to call a function expression that 
// comes after it. Function expressions are not hoisted therefore to fix this I would need to move
// console.log to the line after the expression OR convert the function expression into a function
// statement. Simple fix
   let square = function(num) {
       return num * num;
   };
   console.log(square(4));


// ================= Synchronous Callbacks =================

// 4) Write a function called doTwice that takes a callback function 
//    and calls it two times.
let welcome = name => `Welcome to the circus ${name}` 
function doTwice (fn) {
  fn()
  fn()
}
doTwice(() => console.log("Hi"))

// 5) Write a function called customLog that accepts a string and a callback. 
//    The callback should decide HOW the string is logged (uppercase, lowercase, etc.).
function customLog (words) {
  return words.toUpperCase()
}
console.log(customLog("I'm a little frustrated right now..."))

// ================= Asynchronous Callbacks =================

// 6) Use setTimeout to log "This shows after 2 seconds" with an arrow function.
setTimeout(() => console.log(customLog("Am i getting it?")), 2000)
// 7) Write a function that logs the numbers 1 through 5 using setInterval. 
//    Stop the interval after 5 seconds.
let second = 0
const  timer = setInterval(() => {
  console.log(++second, "second")
  if (second >= 5) {
    console.log("Time conplete"), clearInterval(timer)
  }
}, 1000)

// 8) Debug: What’s wrong with this code? It needs to be a function. Convert to an arrow function
   setTimeout(() => console.log("Runs later"), 2000);


// ================= Arrow Functions =================

// 9) Rewrite this function expression as an arrow function:
//    let multiply = function(a, b) {
//        return a * b;
//    };
let multiply = (a,b) => a*b
console.log(multiply(7,7))
// 10) Write an arrow function called square that takes one parameter and returns its square.
let squared = (a) => a*a
console.log(squared(5))
// 11) Write an arrow function with no parameters that logs "No parameters here!".
let empty = () => "No parameters here"
console.log(empty())
// 12) Fix the bug: 
    let subtract = (a,b) => {
        return a - b;
    };
    console.log(subtract(10, 5)); // Should log 5


// ================= Mini Project =================
// Create a simple "timer" program with setInterval:
// - Every second, log "Timer: X seconds"
// - After 5 seconds, stop the timer
let seconds = 0;
const timers = setInterval(() => {
  if (seconds >= 5) {
    console.log("Time conplete"), clearInterval(timers);
    return
  }
  console.log(++seconds, "second");
}, 1000);
