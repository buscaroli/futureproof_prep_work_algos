// FUTUREPROOF prep-work algo

// Using the modulo operator
// write a function called odd that takes in an integer
// and returns (not console.log) a boolean

// Write your function below

const odd = (num) => {
  return !(num % 2 === 0)
}

console.log(odd(3)) // => true
console.log(odd(4)) // => false
