// FUTUREPROOF pre-work algorithms

// given an array of primitive types, i.e. int, string, number, booleans and numbers
// Write a function diffTypes that will return an object (see example below)
// => { string: 1, array: 1, boolean: 2, object: 1, number: 1 }

function diffTypes(arr) {
  let result = {}

  arr.forEach((x) => {
    let val = typeof x
    console.log(val)
    console.log(result[val])
    //
    {
      result[val] === undefined ? (result[val] = 1) : ++result[val]
    }
  })
  console.log(result)
  return result
}

const ar = [
  1,
  'str',
  false,
  { name: 'Romeo', age: 77 },
  ['a', 'e', 'i', 'o', 'u'],
  true,
]
console.log(diffTypes(ar))
// => { string: 1, array: 1, boolean: 2, object: 1, number: 1 }
