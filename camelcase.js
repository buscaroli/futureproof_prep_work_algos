// FUTUREPROOF prep-work algo

// complete the function camelCase that takes in a word and returns a camelCased string
// the underscore will be removed and the letter that used to follow the understore will be capitalised

// I'll be going through the string using Array.prototype.forEach()
// I'll be checking every character and if it is a '_' i will skip it
// and I will convert the following letter (through strArray[index+1])
// to uppercase.
// I also need to check that strArray[index+1] exist to avoid going out of bound.
const camelCase = (str) => {
  const strArray = str.split('')

  const camelcasedArray = []
  strArray.forEach((x, index) => {
    // console.log({x, index})
    if (x === '_') {
      // console.log({ x, index })
      if (strArray[index + 1] === undefined) {
        // console.log({ x, index })
      } else {
        // console.log({ x, index })
        strArray[index + 1] = strArray[index + 1].toUpperCase()
      }
    } else {
      // console.log({ x, index })
      camelcasedArray.push(x)
    }
  })
  // console.log(camelcasedArray)
  return camelcasedArray.join('')
}

console.log(camelCase('snake_case')) // => snakeCase
console.log(camelCase('a_variable')) // => aVariable
console.log(camelCase('a_variable_')) // => aVariable
