// MORNING LESSON:
// 1. Learning else, else if, else

if (person === 'David') {
  console.log('guy')
} else if (person === 'Jesstern') {
  console.log('man')
} else {
  console.log('who is this?')
}

var person = 'David'

// using 'switch'

switch (person) {
  case 'David': console.log('guy'); break
  case 'Jesstern': console.log('guy'); break
  case 'cheryl': console.log('girl'); break
  default: console.log('who is this?')
}

// We can even trim the code down more
// But, note that if you don't break at the line, all outputs between the case and the break will be executed

switch (person) {
  case 'David':
  case 'Jesstern': console.log('man'); break
  case 'cheryl':
  case 'jane': console.log('girl'); break
  default: console.log('who is this?')
}

// LEARNING: boolean logic || and && and !
// There are truthy values and falsey values
// You can force a string to be true by: !!'seb'.
// objects and arrays are always going to evaluate to true (even empty objects and empty arrays). Zero is false; all others are true
// empty strings evalue to false
// empty objects {} evalueate to true

//LEARNING: TERNARY OPERATOR
// "condition ? abc : xyz"     --> when condition is true, return abc, if false returns xyz

var age = 12
var allowed = (age > 18) ? 'yes' : 'no'

allowed
// -->'no'

// now we have multiple conditions. Note that we can write this in the ternary operator:

var allowed = (age > 51) ? 'wow' :
age > 41 ? 'hey':
age > 31 ? 'what is up':
age > 21 ? 'totally':
age > 18 ? 'yes'
'no';

// using switch for the same problem above isn't ideal. The case/switch operator is applicable if you have discrete values

// LEARNING: "try...catch"
// This helps you trap errors without breaking your code

var name
try {
  name = o.getName()
} catch (error) {
  console.log('that did not work')
}

// But there's an even shorter way to catch errors:
var name = o && o.getName();

// IMPT: "&&" returns whatever is on the right hand side. E.g., if you have true && 25, the console returns 25
true && 'hello'
// --> "hello"

1 && true
// --> true

// Two empty objects are not identical to each other. OBJECTS ARE NOT COMPARED BY VALUES. THEY ARE COMPARED BY INSTANCE
({foo: 123}) === ({foo: 123})
--> false

// LEARNING: it's better practice to put the negating operator '!' in front of the value

xyz != abc
better to put: xyz = !abc

// '++' and '--' is a bad practice. Creates too many bugs
Best practice is to create a new variable and not mutate the old number by:
var anotherNumber = number + 1

// AGAIN, LET'S RECAP ON FOREACH AND '=>' AS WAYS TO REPLACE THE 'WHILE..DO' AND LOOPS
var abc = [1, 2, 3, 4, 5]
abc.forEach(sayhello)

function sayhello(input) {
  console.log(input)
}

abc.forEach(number => console.log(number))



// AFTERNOON LESSON: Document Object Model (DOM)
//read, create and write to elements
var logo = document.querySelector('img')  //this is an instance of the element
--> selects an image as "logo"

logo.src = "[insert new link]"  //this replaces the old link with the new link

//or if you want to specify a specific class/div/image to edit

var logo = document.querySelector('.ga-logo img')  // '.ga-logo img' is the specific image's class

// now let's create an element (a div) using DOM.

var seb = document.createElement('div') // --> we create seb = <div></div>
seb.innerHTML = 'Hello there' // --> seb changes to <div> Hello there</div>
footer.appendChild(seb) // --> we append "Hello there" to the first footer on the page
document.querySelector('footer div') === seb // returns true

// with createElement and appendChild, we can use javascript to stick anything into HTML!!

// There are better ways to insert content than using 'innerHTML'.

var people = ['alice', 'barney', 'charles']
people.forEach (function (person) {
  var element = document.createElement('h1')
  element.textContent = person
  document.querySelector('footer').appendChild(element)
})
//
// in C++ and other languages, you have to clear and free the memory yourself. But in javascript this is done automatically

document.querySelectorAll('header h1:not(#singapore_title)') // selects all headers except for the one tagged singapore_title

Array.from(document.querySelectorAll('header h1'))
  .filter(function (element) {
    return element.id !== 'singapore_title'  //console.log(element.id)
  })
  .forEach (element => element.remove())

//we can also write it in fewer lines:
// let's now remove the elements
Array.from(document.querySelectorAll('header h1'))  //we have to use "Array.from" because we need to able to get the results back in Array, so that we can use 'filter' and 'foreach'. ie., we have to convert a nodelist to an array
  .filter(element => element.id !== 'singapore_title'
  .forEach(element => element.remove())
