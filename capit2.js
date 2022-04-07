// FUTUREPROOF prep-work algo

// complete the function capit2 that takes in a word and returns an object returning the original string and the capitalised string

// Complete the function below
const capitalize = (str) => {
  const lowercasedArr = str.split('').map((x) => x.toLowerCase())
  const lowercasedStr = lowercasedArr.join('')
  return str[0].toUpperCase() + lowercasedStr.slice(1)
}

const capit2 = (word) => {
  return { original: word, capitalised: capitalize(word) }
}

console.log(capit2('hELLo'))
// => { original: 'hELLo', capitalised: 'Hello' }
console.log(capit2('betH'))
// => { original: 'betH', capitalised: 'Beth' }
console.log(capit2('jaGaN'))
// => { original: 'jaGaN', capitalised: 'Jagan' }
console.log(capit2('sergI'))
// => { original: 'sergI', capitalised: 'Sergi' }
