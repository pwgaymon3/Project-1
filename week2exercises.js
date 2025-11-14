/* =========================
   🧠 PRACTICE EXERCISES: Scope, Conditionals, Switch, Loops
   =========================
   ⚙️ Instructions:
   - Fill in the blanks (_____) in the warm-ups before each section.
   - The SWITCH section is ONLY fill-in-the-blank.
   - Complete the full coding tasks below each section.
   - Use console.log() often to test your results!
*/


/* ================
   1) SCOPE PRACTICE
   ================ */

// 🔹 Warm-Up (Fill in the blanks)
{
  let outer = "Global";
  {
    let inner = "Block";
    console.log("Inside block →", outer); // should log "Global"
    console.log("Inside block →", inner); // should log "Block"
  }
  console.log(inner) // should cause ReferenceError if uncommented
}

{
  let leaked = "I can escape my block!";
  console.log("Inside block →", leaked);
}
console.log("Outside block →", leaked); // still works because var is function-scoped


// ✅ Task 1: Create a variable called "outsideVar" in the global scope and set it to "Global".
// Inside a block { }, create a variable "insideVar" set to "Block".
// Log both variables inside the block.
// Then, try logging "insideVar" outside the block — what happens?

{
  const outsideVar = "Global"
  {
    const insideVar = 'Block'
    console.log(insideVar)
    console.log(outsideVar)
  }
  console.log(insideVar)
}

// ✅ Task 2: Create a variable with 'var' inside a block and log it both inside and outside.
// Observe how 'var' behaves differently from 'let' and 'const'.

{
  {
    var leaked = 'I leaked'
  }
  console.log(leaked)
}


/* ==============================
   2) IF / ELSE & ELSE-IF PRACTICE
   ============================== */

// 🔹 Warm-Up (Fill in the blanks)
let number = 8;
if (number > 10) {
  console.log("Greater than 10");
} else if (number === 10) {
  console.log("Equal to 10");
} else {
  console.log("Less than 10");
}


// ✅ Task 3: Create a variable "temperature".
// Write an if...else if...else chain:
// - If > 90 → "It's hot"
// - Else if between 70 and 90 → "It's nice out"
// - Else → "It's cold"
{
const temperature = 69
if (temperature >= 90) {
  console.log('Its kind of burning out here innit')
} else if (temperature >= 70) {
  console.log("You know what? ...It's alright out here today")
} else if (temperature === 69) {
  console.log("NICE!")
} else {
  console.log('Aye homie its cold out there...be careful')
}


}


// ✅ Task 4: Create a variable called "score" with a value between 0–100.
// Print a letter grade using if...else if...else:
// A (90+), B (80–89), C (70–79), D (60–69), F (below 60).
const score = 59
if (score >= 90) {
  console.log('A')
} else if (score >= 80) {
  console.log('B')
} else if (score >= 70) {
  console.log('C')
} else if (score >=60) {
  console.log('D')
} else {
  console.log('You AND your teacher need to come see me in my office.')
}

// ✅ Task 5: Create variables "cartTotal" and "points".
// If the cartTotal is >= 100 OR points >= 500, log "You qualify for free shipping!"
// Otherwise, log "No free shipping."
const cartTotal = 120
const points = 450

if (cartTotal >= 100 || points >= 500) {
  console.log("You qualify for free shipping")
} else {
  console.log("No free shipping for you!")
}



/* ======================
   3) SWITCH STATEMENT (Only Fill in the Blanks)
   ====================== */

// 🧩 Fill in the missing pieces so this switch statement runs correctly.
let grade = "B";

switch (grade) {
  case "A":
    console.log("Excellent!");
    break;
  case "B":
    console.log("Good job!");
    break;
  default:
    console.log("Try harder next time.");
}

// ✅ Hint: Use the proper keywords for starting the switch, stopping a case, and the “else” section.




/* ======================
   4) LOOP PRACTICE
   ====================== */

// 🔹 Warm-Up (Fill in the blanks)
let i = 0;
while (i < 3) {
  console.log("Counting:", i);
  i++;
}

let fruits = ["apple", "pear", "mango"];
for (let i of fruits) {
  console.log("Fruit:", i);
}


// ✅ Task 8: Create a while loop that counts from 1 to 5 and logs each number.
let o = 0
while (o <= 5) {
  console.log(o)
  o++
}

// ✅ Task 9: Create a do...while loop that logs "Loop running" 3 times.
let u = 0
do {
  console.log("Loop running")
  u++
} while (u < 3)

// ✅ Task 10: Use a for loop to log the even numbers between 2 and 10.
for (let t = 2; t <= 10; t += 2) {
  console.log(t)
}

// ✅ Task 11: Create an array called "names" with at least 4 strings.
// Use a for loop to log each name.
let names = ['Jeremy', 'Dobson', 'Basarios', "Tyrique"]
for (let name of names) {
  console.log('Name:', name)
}

// ✅ Task 12: Using the same "names" array, use a for...of loop to log each name in uppercase.
for(let name of names) {
  console.log('Name:', name.toUpperCase())
}

// ✅ Task 13: Create an array called "numbers" with values [5, 10, 15, 20].
// Use a for...of loop to calculate and log the total sum.
let numbers = [5, 10, 15, 20]
let total = 0
for (let sum of numbers) {
  total += sum
}

console.log(total)

// ✅ Task 14: Create an object called "person" with keys: name, age, and city.
// Use a for...in loop to log each key and value in this format:
// name: "Alice"
// age: 30
// city: "New York"

let person = {
  name: 'Alice',
  age: 30,
  city: 'New York'
}

for (let key in person) {
  // console.log(key, person[key] )
  console.log(`${key}: ${person[key]}`)
}





// ✅ Task 15 (Challenge):
// Create a nested loop that prints out a multiplication table from 1–5.
// Example output:
// 1 x 1 = 1
// 1 x 2 = 2
// ...
// 5 x 5 = 25
