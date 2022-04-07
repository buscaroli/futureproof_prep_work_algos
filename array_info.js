// FUTUREPROOF pre-work algorithms

// Time to combine all the efforts made in starter and array.
// Complete the info function that takes in an array
// and returns information about the array

const isEven = (num) => {
  return num % 2 === 0
}

const isOdd = (num) => {
  return !isEven(num)
}

const howManyEvens = (arr) => {
  return arr.filter((x) => isEven(x)).length
}

const howManyOdds = (arr) => {
  return arr.filter((x) => isOdd(x)).length
}

const info = (arr) => {
  const elements = arr.length
  const sum = arr.reduce((a, b) => a + b)
  const avg = sum / elements
  const howManyEvenNumbers = howManyEvens(arr)
  const howManyOddNumbers = howManyOdds(arr)

  return {
    array: [...arr],
    elements,
    avg,
    sum,
    howManyEvenNumbers,
    howManyOddNumbers,
  }
}

// When passed the array above the result should like it does below
console.log(info([1, 2, 3, 4, 5, 6, 7, 8, 9]))

// {
//   array: [
//     1, 2, 3, 4, 5,
//     6, 7, 8, 9
//   ],
//   elements: 9,
//   avg: 5,
//   sum: 45,
//   howManyEvenNumbers: 4,
//   howManyOddNumbers: 5
// }
