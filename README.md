# FutureProof prep-work algo challenges

April 2022 - Auguste cohort
[futureproof github link to the algos](https://github.com/getfutureproof/fp_prep-work/blob/main/02_algo/instructions.md)

## Warm-up exercises before starting the bootcamp

The exercises are very simple, this is an example:

```
// how_many_evens.js

const isEven = (num) => {
  return num % 2 === 0
}

const howManyEvens = (arr) => {
  return arr.filter((x) => isEven(x)).length
}

ar = [7, 19, 33, -5, -99, 6, 12]
console.log(howManyEvens(ar)) // => 2
```

## List of files included

A list of files and their corresponding categories follows:

1. _Starter_

- **even.js** check if a number is even
- **odd.js**: check if a number is odd
- **how_many_evens.js**: check how many letters of a string are even
- **how_many_odds.js**: check how many letters of a string are odd

2. _String_

- **capitalize.js**: capitalise a string
- **swapcase.js**: switch lowercased letters of a string to uppercased and viceversa
- **camelcase.js**: convert a string to camelCase
- **snakecase.js**: convert a string to snake_case
- **swap2.js**: same as swapcase but returns an object with both the original and the converted string
- **capit2.js**: same as capitalize but returns an object with both the original and the converted string

3. _Array_

- **sum.js**: calculate the sum of a given array of numbers
- **avg.js**: calculate the average of a given array of numbers

4. _Object_

- **about_you.js**: simply create a javascript object with a few properties
- **array_info.js**: return an array containing different info about a given array
- **diffTypes.js**: given an array of mixed types returns an object with the total quantity of each type
