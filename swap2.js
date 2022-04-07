// FUTUREPROOF prep-work algo

// complete the function swap2 that takes in a word and returns an object returning the original string and the swpacased string

const swapLetter = (x) => {
  return x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()
}

const swapcase = (word) =>
  word
    .split('')
    .map((x) => swapLetter(x))
    .join('')

const swap2 = (word) => {
  return { original: word, swapcased: swapcase(word) }
}
console.log(swap2('hELLo'))
// => { original: 'hELLo', swapcased: 'HellO' }
console.log(swap2('betH'))
// => { original: 'betH', swapcased: 'BETh' }
console.log(swap2('jaGaN'))
// => { original: 'jaGaN', swapcased: 'JAgAn' }
console.log(swap2('sergI'))
// => { original: 'sergI', swapcased: 'SERGi' }
