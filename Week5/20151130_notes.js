


***1.Promisify demonstration***

function promisify () {

}

fs.readfile('file.txt', 'utf8', function (err, data) {
  if(err) console.warn(err)
  else console.info(data)
})

fs.readfile('file.txt','utf8')   // returns a promise
  .then()


fs.readfile('file.txt','utf8') // returns a promise
  .then(::console.log)
  .catch(::console.warn)

  // behind the scenes these actually happen:
  var promise = new Promise()
  promise.then(onSuccess)
  promise.catch(onError)
  function onSuccess (input) {}
  function onError (input1) {}



***2. Going through context binding, call, apply ***
'sebastiaan'.split('')
  // .forEach(function (letter, index, list) {
  //   console.log(letter, index, list)
  // })
  // .forEach(function (letter, index, list) {
  //   console.log.call(console, letter, index, list)
  // })
  // .forEach(function (letter, index, list) {
  //   var stuff = [letter, index, list]
  //   console.log.apply(console, stuff)
  // })
  // .forEach(function () {
  //   console.log.apply(console, arguments)
  // })
  // .forEach(console.log, console)
  // .forEach(console.log.bind(console))
  // .forEach(console::console.log)
  // .forEach(::console.log)

  You use call or apply when you want to pass a different this value to the function. In essence, this means that you want to execute a function as if it were a method of a particular object. The only difference between the two is that call expects parameters separated by commas, while apply expects parameters in an array.

http://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/


*** 3. Going through the CRUD exercise ***

Note that we can use Object.assign to update the databse
