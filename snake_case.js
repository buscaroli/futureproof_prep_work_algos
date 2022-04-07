// FUTUREPROOF prep-work algo

// Convert a camelCase or PascalCase string to snake_case
const snakeCase = (str) => {
  const strArray = str.split('')
  console.log(strArray)
  const snakeCasedArray = strArray.map((ltr) => {
    if (ltr === ltr.toUpperCase()) {
      return `_${ltr.toLowerCase()}`
    } else {
      return ltr
    }
  })
  console.log(snakeCasedArray)
  return snakeCasedArray.join('')
}

console.log(snakeCase('snakeCase'))
console.log(snakeCase('aVariable'))
