// FUTUREPROOF prep-work algo

// complete the function called howManyEvens that takes in an integer and returns (not console.log) how many even numbers are in the array

const isEven = (num) => {
  return num % 2 === 0
}

const howManyEvens = (arr) => {
  return arr.filter((x) => isEven(x)).length
}

ar = [7, 19, 33, -5, -99, 6, 12]
console.log(howManyEvens(ar)) // =? 2
