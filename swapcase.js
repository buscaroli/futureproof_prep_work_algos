// FUTUREPROOF prep-work algo

// complete the function swapcase that takes in a word and returns a swapcased string
// the lowercase letters will be uppercased and vice versa

const swapLetter = (x) => {
  return x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()
}

const swapcase = (word) =>
  word
    .split('')
    .map((x) => swapLetter(x))
    .join('')

console.log(swapcase('hELLo')) // "HellO"
console.log(swapcase('betH')) // "BETh"
console.log(swapcase('jaGaN')) // "JAgAn"
console.log(swapcase('sergI')) // "SERGi"
