// FUTUREPROOF prep-work algo

// write an object that describes you
// the object could include your name, your age etc.

const now = new Date()
const currentYear = now.getFullYear()
const age = currentYear - 1978

const matt = {
  name: 'Matteo',
  age,
  sex: 'M',
  adult: true,
  nickname: 'Matt',
  languages: ['Italian', 'English'],
  roles: ['frontend', 'backend', 'fullstack', 'mobile'],
}

console.log(matt)
