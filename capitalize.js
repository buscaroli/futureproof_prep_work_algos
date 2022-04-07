// FUTUREPROOF prep-work algo

// complete the function capitalize that takes in a word and returns a capitalised string

// Complete the function below
const capitalize = (word) => {
  const lowercasedArr = word.split('').map((x) => x.toLowerCase())
  const lowercasedStr = lowercasedArr.join('')
  return word[0].toUpperCase() + lowercasedStr.slice(1)
}

console.log(capitalize('hELLo')) // => Hello
console.log(capitalize('betH')) // => Beth
console.log(capitalize('jaGaN')) // => Jagan
console.log(capitalize('sergI')) // => Sergi
