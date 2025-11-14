function isLarger(num1, num2) {
  if(num1 > num2) {
    return num1 + " is larger."
  } else if(num2 > num1) {
    return num2 + " is larger."
  } else {
    return "The numbers are equal."
  }
}

console.log(isLarger(7, 8))
console.log(isLarger(20,6))
console.log(isLarger(5,5))

function isSafeAirspeed(speed) {
  if(speed >= 184 && speed <= 583) {
    return true
  } else return false
}

console.log(isSafeAirspeed(186))
console.log(isSafeAirspeed(70))
console.log(isSafeAirspeed(588))

function confirmAge(age) {
  if(age <= 0){
    return "Invalid age"
  } else if(age < 13) {
    return "You're too young to participate."
  } else if(age >= 13 && age <=17) {
    return "You are allowed to participate."
  } else return "You're too old to participate."
}
console.log(confirmAge(-1))
console.log(confirmAge(21))
console.log(confirmAge(13))
console.log(confirmAge(12))
console.log(typeof []);