// Preston Gaymon
function greet (name) {
  return console.log(`Hello, ${name}!`)
}

function add (num1, num2) {
  return num1 + num2
}

greet("Preston")
console.log(add (5,8))
console.log(add (9,10))


function double(num) {
  return num * 2;
}
function triple(num) {
  return num * 3;
}
function apply(num, func) {
  return func(num);
}
console.log(apply(5,double))