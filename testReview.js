// 1) Which statement about scope is TRUE?
// A. <-
`'var' and 'const' are block-scoped; 'let' is function-scoped.`
// B.
`Only 'var' is block-scoped; 'let' and 'const' are global.`
// C.
`'let' and 'const' are block-scoped; 'var' is function-scoped.`
// D.
`All of 'var', 'let', and 'const' are block-scoped.`


// 2) What happens when you access a block-scoped variable outside its block?
// A. <-
`It throws a ReferenceError.`
// B.
`It becomes undefined but not an error.`
// C.
`It returns null.`
// D.
`It silently coerces to 0.`


// 3) Given:
//   var h = 180;
//   {
//     var w = 70;
//   }
//   console.log(h, w);
// What is logged?
// A.
`ReferenceError ReferenceError`
// B.
`180 ReferenceError`
// C. <-
`180 70`
// D.
`undefined 70`


// 4) Which snippet logs 1 inside a nested block and then throws when logging outside?
// A.<- 
`{
  let x = 1;
  { console.log(x); }
}
console.log(x);`
// B.
`{
  var x = 1;
  { console.log(x); }
}
console.log(x);`
// C.
`{
  const x = 1;
}
console.log(1);`
// D.
`{
  let x = 1;
}
{ console.log(1); }`


// 5) In an if / else-if ladder, when does a later branch run?
// A. <-
`Only if all earlier conditions were false.`
// B.
`If its condition is true, regardless of earlier matches.`
// C.
`Always at the end as a default.`
// D.
`Only if the first condition was true.`


// 6) In a switch statement, forgetting break causes...
// A.
`A syntax error.`
// B.<-
`Fall-through into the next case(s).`
// C.
`Automatic default execution only.`
// D.
`The switch to restart from the top.`


// 7) The key difference between while and do...while is:
// A.
`while runs its body at least once.`
// B.<-
`do...while runs its body at least once.`
// C.
`do...while cannot have a condition.`
// D.
`while has no curly braces.`


// 8) In a classic for loop, the three parts are:
// A.<-
`initialization; condition; increment`
// B.
`increment; initialization; condition`
// C.
`condition; increment; initialization`
// D.
`initialization; increment; condition`


// 9) Which for loop iterates an array in reverse?
// A.
`for (let i = arr.length; i > 0; i++) { console.log(arr[i]); }`
// B.<-
`for (let i = arr.length - 1; i >= 0; i--) { console.log(arr[i]); }`
// C.
`for (let i = 0; i < arr.length; i++) { console.log(arr[i]); }`
// D.
`for (let i = 0; i <= arr.length; i++) { console.log(arr[i]); }`


// 10) Best match: for...of vs for...in
// A.
`for...of → object keys; for...in → array values`
// B.<-
`for...of → values of iterables (arrays/strings)`
// C.
`for...in → values of arrays only`
// D.
`for...in → object keys`


// 11) Access the key "age-2025" on object user:
// A.
`user.age-["2025"]`
// B.
`user.age["2025"]`
// C.<-
`user["age-2025"]`
// D.
`user.age-2025`


// 12) What does Object.keys(user) return?
// A.
`An array of the user's property values.`
// B.
`A shallow-cloned user object.`
// C.
`An array of [key, value] pairs.`
// D.<-
`An array of the user's property names.`


// 13) Regarding Object.freeze on a shallow object:
// A.<-
`All nested objects are deeply frozen.`
// B.
`Nested objects remain mutable unless frozen separately.`
// C.
`You can still add new top-level keys.`
// D.
`Top-level values can always be reassigned.`


// 14) Object.assign(target, source) does what?
// A.
`Deletes keys from target not found in source.`
// B.
`Seals target against new properties.`
// C.<-
`Copies enumerable properties from source(s) into target (mutates target).`
// D.
`Creates a deep clone by default.`


// 15) Object.seal(user) means:
// A.
`Deep-freezes all nested structures.`
// B.<-
`Cannot add/remove keys; can change existing values.`
// C.
`Cannot add keys; can remove keys; cannot change values.`
// D.
`Prevents reading properties.`


// 16) In this loop, which keyword skips "Felix" only?
// A.<-
`continue`
// B.
`break`
// C.
`throw`
// D.
`return`


// 17) typeof null evaluates to:
// A.
`"null"`
// B.
`"undefined"`
// C.<-
`"object"`
// D.
`"boolean"`


// 18) Which set contains only falsy values?
// A.<-
`false, 0, "", null, undefined, NaN, 0n`
// B.
`false, 0, "0", null, []`
// C.
`"", " ", 0, {}`
// D.
`NaN, "NaN", 0, true`


// 19) Template literals allow:
// A.
`Automatic JSON formatting.`
// B.<-
`Multiline strings and ${expression} interpolation.`
// C.
`Only single-line strings.`
// D.
`Implicit variable declarations.`


// 20) Which statement about == vs === is correct?
// A.
`Both always coerce types.`
// B.<-
`== allows type coercion; === compares without coercion.`
// C.
`Both never coerce types.`
// D.
`=== allows coercion; == does not.`


// 21) What does [] instanceof Array evaluate to?
// A.<-
`false`
// B.
`"object"`
// C.
`true`
// D.
`Throws TypeError`


// 22) Choose the correct ternary syntax that sets parity based on number % 2:
// A.<-
`const parity = (number % 2 === 0) ? "Even" : "Odd";`
// B.
`const parity = "Even" ? (number % 2 === 0) : "Odd";`
// C.
`const parity = (number % 2 === 0) : "Even" ? "Odd";`
// D.
`const parity = ? (number % 2 === 0) "Even" : "Odd";`


// 23) Strings and arrays both have:
// A.
`splice`
// B.<-
`length`
// C.
`pop`
// D.
`push`


// 24) What does indexOf return when a value is not found?
// A.
`null`
// B.
`-1`
// C.
`0`
// D.<-
`undefined`


// 25) What is logged by: console.log("Hello " + 5);
// A.
`"Hello"`
// B.
`NaN`
// C.<-
`"Hello 5"`
// D.
`5`


// 26) What is the result of 11 - "2"?
// A.
`"9"`
// B.<-
`9`
// C.
`"112"`
// D.
`NaN`


// 27) Which line shows a BigInt literal correctly?
// A.
`bigint 9007199254740993`
// B.
`BigInt(9007199254740993nN)`
// C.<-
`9007199254740993n`
// D.
`9007199254740993N`


// 28) Given: const user = { name: "Alice", age: 36 }; delete user.age; user.age now is:
// A.
`""`
// B.<-
`undefined`
// C.
`null`
// D.
`0`


// 29) Using || to provide a default:
// A.
`const displayName = usernameInput && "Guest";`
// B.<<-
`const displayName = usernameInput || "Guest";`
// C.
`const displayName = "Guest" || usernameInput;`
// D.
`const displayName = usernameInput ?? "Guest";`


// 30) Which comparison is TRUE based on lexicographic rules in JS?
// A.<-
`"b" > "a"`
// B.
`"a" === "A"`
// C.
`"A" > "z"`
// D.
`"a" > "b"`


// 31) What will be the output of: console.log(typeof NaN);
// A.
`"number"`
// B.
`"NaN"`
// C.
`"undefined"`
// D.<-
`"object"`


// 32) Which of the following variables is declared in global scope?
// A.
`var color = "red";`
// B.
`let color = "red";`
// C.
`const color = "red";`
// D.<-
`All of them if written outside a block`


// 33) Which comparison returns true?
// A.<-
`"5" == 5`
// B.
`"5" === 5`
// C.
`5 === "5"`
// D.<-
`"5" !== 5`


// 34) Which logical operator returns its first truthy value?
// A.<-
`|| (OR)`
// B.
`&& (AND)`
// C.
`! (NOT)`
// D.
`== (EQUAL)`


// 35) Which value is NOT falsy in JavaScript?
// A.<-
`"0"`
// B.
`0`
// C.
`NaN`
// D.
`""`


// 36) What does console.log([] == false) output?
// A.<-
`true`
// B.
`false`
// C.
`undefined`
// D.
`NaN`


// 37) Which line creates an empty array?
// A.
`let list = {};`
// B.<-
`let list = [];`
// C.
`let list = new Object();`
// D.
`let list = "";`


// 38) In a for loop, where do you usually update your counter?
// A.
`Before the loop begins.`
// B.<-
`In the increment section (third part).`
// C.
`Outside the loop entirely.`
// D.
`In the condition section.`


// 39) Which of the following loops guarantees at least one execution?
// A.
`for...of`
// B.<-
`do...while`
// C.
`while`
// D.
`for`


// 40) What does the break keyword do in a loop?
// A.<-
`Stops the loop immediately.`
// B.
`Skips current iteration only.`
// C.
`Continues until next condition.`
// D.
`Jumps back to start of loop.`


// 41) Which of the following creates a block scope?
// A.
`if (true) { let x = 5; }`
// B.
`for (let i = 0; i < 3; i++) { }`
// C.
`{ const y = 2; }`
// D.<-
`All of the above.`


// 42) Which statement about const variables is true?
// A.
`Their reference cannot be reassigned.`
// B.<-
`They can never be changed at all.`
// C.
`They are automatically global.`
// D.
`They must store numbers only.`


// 43) What will be logged?
// let a = 10;
// {
//   let a = 5;
//   console.log(a);
// }
// console.log(a);
// A.
`10 then 5`
// B.<-
`5 then 10`
// C.
`ReferenceError`
// D.
`5 then 5`


// 44) Which operator in JS performs exponentiation (power)?
// A.<-
`**`
// B.
`^`
// C.
`pow()`
// D.
`*`


// 45) What happens if you run: delete x; when x is a let variable?
// A.
`SyntaxError`
// B.<-
`It deletes successfully.`
// C.
`ReferenceError`
// D.
`It returns undefined.`


// 46) Which statement about arrays is TRUE?
// A.<-
`They can hold values of mixed data types.`
// B.
`They are immutable.`
// C.
`They must contain the same type.`
// D.
`They automatically sort elements.`


// 47) What does Object.values(obj) return?
// A.
`An array of property names.`
// B.<-
`An array of [key, value] pairs.`
// C.
`A new frozen object.`
// D.
`An array of all property values.`


// 48) The expression !0 evaluates to:
// A.
`false`
// B.<-
`true`
// C.
`undefined`
// D.
`"0"`


// 49) What is the output of: console.log(1 + "2" + 3);
// A.<- X
`6`
// B.
`"123"`
// C.
`"15"`
// D.
`NaN`


// 50) What does "short-circuiting" mean in logical operations?
// A.<-
`Stops evaluating once the result is known.`
// B.
`Runs both sides regardless.`
// C.
`Repeats conditions until false.`
// D.
`Throws an exception if false.`


// 51) Which method adds an element to the end of an array?
// A.
`shift()`
// B.<-
`push()`
// C.
`unshift()`
// D.
`pop()`


// 52) Which method removes the first element of an array?
// A.
`unshift()`
// B.<-
`pop()`
// C.
`shift()`
// D.
`slice()`


// 53) What will console.log(typeof []) output?
// A.
`"object"`
// B.<-
`"array"`
// C.
`"list"`
// D.
`"undefined"`


// 54) Which operator checks both value AND type equality?
// A.
`==`
// B.<-
`===`
// C.
`=`
// D.<-
`!==`


// 55) What is returned by Object.entries({a:1,b:2}); ?
// A.
`["a","b"]`
// B.
`[["a",1],["b",2]]`
// C.<-
`[1,2]`
// D.
`{a:1,b:2}`


// 56) What keyword declares a variable limited to its block and re-assignable?
// A.
`const`
// B.
`block`
// C.
`var`
// D.<-
`let`


// 57) What is the result of: Boolean(" ") ?
// A.
`false`
// B.<-
`true`
// C.
`undefined`
// D.
`NaN`


// 58) In JS, NaN === NaN evaluates to:
// A.<-
`true`
// B.
`undefined`
// C.
`false`
// D.
`Throws an error`


// 59) Which operator would you use to concatenate two strings?
// A.
`-`
// B.<-
`+`
// C.
`*`
// D.
`concat`


// 60) What will be logged?
// let i = 0;
// while (i < 3) { console.log(i); i++; }
// A.<-
`0 1 2`
// B.
`0 1 2 3`
// C.
`1 2 3`
// D.
`Infinite loop`
