// exercise 1: typing a function

function concatenate (greeting, name) {
  if (typeof greeting === 'undefined') {
    greeting = 'Hello'
  }
  if (typeof name === 'undefined') {
    name = 'David'
  }
  return greeting + ' ' + name
}

console.log(concatenate('yo', 'jess') === 'yo jess')
console.log(concatenate() === 'Hello David')

// end of exercise 1.
// To test if something is a string, we can write: if(typeof greeting !== string)  and so on

// exercise 2: using "forEach" instead of for loops
var message = ['hey', 'there']

message.forEach(function (word) { console.log(word) })

// end of exercise 2
// other things in addition to forEach: "every", "some", "filter" and "map". forEach doesn't really return anything. "Map" can return array.

var person = 'David Sng'.split('')

// now let's try to filter so that we only return the A's
person.filter(function (letter) { return letter === 'a' }) // the function only returns the results you define

// now let's try "some". "Some" will return a boolean value
person.some(function (letter) { return letter === 'a' })

// or you can write two lines of code to make your code easier to read:
// function isAllowedCharacter (character) { return character === 'a' }
// person.some(isAllowedCharacter)

// Quick quiz

var q1 = ['image1.png', 'image2.png', 'image3.png']

var q2 = q1[0]

var q3 = q1.length

var q4 = q1[q3 - 1]

// end of quick quiz

// quick quiz 2

var question1 = [1, 2, 3, 4]

var question2 = question1.map(addOne)
function addOne (input) { return input + 1 }

// The forEach solution is trickier and because we have to write it in the way below, we actually mutate the q1 variable. i.e., q1 is changed to [2,3,4,5]
// question1.forEach(function (number, index) { q1[index] = number + 1 })
// good practice to always define a separate function, so you can isolate any bugs/problems much faster

var question3 = question1.reduce(function (a, b) { return a + b }) / (question1.length)

console.log(question1)
console.log(question2)
console.log(question3)

// be aware that your functions have to be pure. Don't try to do too much.
// functional programming: keep logic apart from the iterating

// Lesson after lunch: learning about objects, keys, and values
// object oriented programming -- you can both read and write to them. Entering person.name = "Justin" will change the person's name from David to Justin

var person = {
  name: 'David Sng',
  city: 'Singapore',
  age: 27,
  hobbies: ['running', 'soccer', 'baseball'],
  address: {
    town: 'Tampines',
    street: 44,
    unit: 08190
  },
  greeting: function (name) {
    console.log('hi ' + name)
    return {
      luckyNumber: Math.random()
    }
  }
}

console.log(person.name)

//In object oriented programming, constructor is the best way

function person {
  this.age: 27
  this.city: 'singapore'
  this.luckyNumber: Math.random()
}

// when we type: Person.prototype.name = "David", even seb.name returns "David".

var seb = new Person()
console.log(seb.luckyNumber); //0.345678
console.log(seb.luckyNumber); //0.345678. Note that you get the same luckyNumber as we only did a lucky draw for Seb once
console.log(seb.luckyNumber); //0.345678
seb.age = 37
seb.city = 'Taipei'

var cheryl = new Person()
console.log(cheryl.luckyNumber); //0.9999
console.log(cheryl.luckyNumber); //0.9999. Note that you get the same luckyNumber as we only did a lucky draw for cheryl once
console.log(cheryl.luckyNumber); //0.9999

//old way: var cheryl = new Person()

// In new ES6 Javascript, we can write things more neatly:
class Person {
  constructor () {
    this.luckyNumber = Math.random()
  }
  greeting () {
    console.log('hello' + name);
  }
}

// old version:
// Person.prototype.greeting = function (name) {
//   console.log('hello' + name)
// }

var seb = new Person()
seb.greeting('Derek')

// But not all browsers support ES6. Thus we have to transpile our code using Babel. 
