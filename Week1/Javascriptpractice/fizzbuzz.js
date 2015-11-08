var numberofNumbers = parseInt(prompt('How many numbers do you want?'))

var array = []
for (var i = 0; i < numberofNumbers; i++) {
  array.push(i)
}

for (var i = 0; i <= array.length; i++) {
  if ((i%3 == 0) && (i%5 == 0)) {
    console.log('fizzbuzz')
  } else if (i % 3 == 0) {
    console.log('fizz')
  } else if (i % 5 == 0) {
    console.log('buzz')
  } else {
    console.log(i)
  }
}


// recursive function
function fizzBuzz(num){
    if (num % 3 === 0 && num % 5 === 0 ){
    console.log("FizzBuzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 5 === 0){
    console.log("Buzz");
  } else {
    console.log(num);
  }

  if (num < 100){
  var newNumber = num + 1;
  fizzBuzz(newNumber);
  }
}

fizzBuzz(1);

// https://gist.github.com/jaysonrowe/1592432
// using ternary operators
var output = number
