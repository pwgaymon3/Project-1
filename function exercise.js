// ========== Function Basics ==========

// 1) Write a function sayHello that logs "Hello, world!" to the console. Call it.
function sayHello() {
  console.log("Hello, world!");
}

sayHello();

// 2) Write a function greet(name) that takes one parameter and logs "Hello, <name>!".
function greet(name) {
  return `Hello, ${name}`;
}

console.log(greet("Preston"));
// 3) Write a function add(a, b) that returns the sum of two numbers.
//    Call it with arguments 5 and 7, and log the result.
function add(a, b) {
  return a + b;
}

console.log(add(5, 7));
// 4) Write a function square(num) that returns the square of a number.
//    Test it with 4 and log the result.
function square(num) {
  return num * num;
}
console.log(square(4));
// 5) Write a function getLength(arr) that takes an array and returns its length.
const newArr = [2, 3, 4, 5, 5, 6, 17];

function getLength(arr) {
  return arr.length;
}

console.log(getLength(newArr));
// ========== Parameters & Arguments ==========

// 6) Write a function getFullName(firstName, lastName) that returns a full name string.
//    Example: getFullName("Alice", "Smith") → "Alice Smith"
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(getFullName("Alice", "Smith"));
// 7) Write a function multiply(x, y, z) that multiplies three numbers and returns the product.
function multiply(x, y, z) {
  return x * y * z
}
console.log(multiply(4, 6, 8))
// 8) Fix the code:
   function showMessage(msg) {
       console.log(msg);
   }
   showMessage("Hi there");

// ========== Return & Scope ==========

// 9) Write a function isEven(n) that returns true if the number is even, false otherwise.
function isEven(n) {
  return Number(n) % 2 === 0
}
console.log(isEven(8))
// 10) Write a function getDiscount(cartValue) that returns cartValue * 0.9
//     if cartValue is greater than 100. Otherwise return cartValue.
function getDiscount(cartValue) {
  if (cartValue >= 100) {
    return cartValue * 0.9
  } else return cartValue
}
console.log(getDiscount(100))
// 11) Inside a function, declare a local variable secret = "hidden".
//     Try logging secret outside the function. What happens? Reference Error
function secretWord() {
  const secret = "hidden"
}
console.log(secret)
// ========== Loops + Functions ==========

// 12) Write a function sumArray(arr) that loops through an array and returns the total sum.
const numArr = [6, 5, 15, 20, 4]
function sumArray(arr) {
  let arrTotaler = 0;
  for (let sum of arr) {
     arrTotaler += sum
  }
  return arrTotaler
}
console.log(sumArray(numArr));  
// 13) Write a function findMax(arr) that loops through an array and returns the largest number.
function findMax(arr) {
arr.sort((a,b) => b - a)
return arr[0]
}
console.log(findMax(numArr))
// 14) Write a function printOdds(limit) that logs all odd numbers up to that limit.
const oddArr = [7, 0, 2, 1, 4, 3, 5, 7]
function printOdds(limit) {
  return limit.filter(limit => limit % 2 !== 0).sort((a,b) => a-b)
}
console.log(printOdds(oddArr))
// ========== Debugging (Find & Fix Errors) ==========

// 15) What’s wrong here? No second parameter
//     function addTwo(a, b) {
//         return a + b;
//     }
//     console.log(addTwo(5));

// 16) What happens here and why? Test returns nothing in the console because the function stops at the return skipping the console.log
//     function test() {
//         return;
//         console.log("After return");
//     }
//     test();

// 17) Fix the bug:
//     function greetUser(name) {
//         console.log("Hello " + name);
//     }
//     greetUser("Martin");

// ========== Mini Project ==========
// Write a function getAverageScore(scores) that:
//   - Accepts an array of numbers
//   - Loops through the array to find the total
//   - Returns the average
//   - If the array has a 0, return "Error: invalid score"
// Call it with [80, 90, 100] and log the result.
const numArray = [80, 90, 100]

function getAverageScore(score) {
  if (score.find(n => n === 0) === 0) {
    return "Error: Invalid Score Found"
  } 
  let total = 0
  for (let avg of score) {
    total += avg
  }
  return total /= score.length
  
}

console.log(getAverageScore(numArray))