// FUTUREPROOF prep-work algo

// complete the avg function that takes in an array
// and returns (not console.log) the average (2 rounded digits)

// Complete the function below
const avg = (arr) => {
  const qty = arr.length
  const sum = arr.reduce((a, b) => a + b)

  return sum / qty
}

ar = [7, 19, 33, -5, -99, 6, 12]
console.log(avg(ar)) // => -3.86 (number)
