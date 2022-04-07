// FUTUREPROOF prep-work algo

// write a function called howManyOdds that takes in an integer and returns (not console.log) how many odd numbers are in the array

const isOdd = (num) => {
  return !(num % 2 === 0)
}

const howManyOdds = (arr) => {
  return arr.filter((x) => isOdd(x)).length
}

ar = [7, 19, 33, -5, -99, 6, 12]

console.log(howManyOdds(ar)) // => 5
