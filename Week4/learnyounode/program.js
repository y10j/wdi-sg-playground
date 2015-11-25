// Exercise 1:
// console.log('HELLO WORLD');

// Exercise 2:
// console.log(Number(process.argv[2]) + Number(process.argv[3]) + Number(process.argv[4]))

// official answer:
// var result = 0
//      for (var i = 2; i < process.argv.length; i++)
//        result += Number(process.argv[i])
//      console.log(result)


// Exercise 3: Callbacks and asynchronous functions
// var fs = require('fs')
//
// var x = fs.readFileSync(process.argv[2])
//
// var y = x.toString()
//
// var z = y.split('\n')
//
// var answer = z.length - 1    // note that length here is a property, not a method
//
// console.log(answer)
//

// Official solution:
// var fs = require('fs')
//
// var contents = fs.readFileSync(process.argv[2])
// var lines = contents.toString().split('\n').length - 1
// console.log(lines)

// Exercise 4 (also read https://github.com/maxogden/art-of-node#callbacks)
// Callbacks are just functions that get executed at some later time. The key to understanding callbacks is to realize that they are used when you don't know when some async operation will complete, but you do know where the operation will complete — the last line of the async function! The top-to-bottom order that you declare callbacks does not necessarily matter, only the logical/hierarchical nesting of them. First you split your code up into functions, and then use callbacks to declare if one function depends on another function finishing.

// var fs = require('fs')
// fs.readFile(process.argv[2], function (err, data) {
//   if (err) throw err
//   var lines = data.toString().split('\n').length - 1
//   console.log(lines)
// })
//
// // official solution:
// var fs = require('fs')
// var file = process.argv[2]
// fs.readFile(file, function (err, contents) {
//   // fs.readFile(file, 'utf8', callback) can also be used
//   var lines = contents.toString().split('\n').length - 1
//   console.log(lines)
// })

// Exercise 5: Filtered LS

// var fs = require('fs')
// var path = require('path')
// var fileDirectory = process.argv[2]
// var fileExtension = process.argv[3]
//
// fs.readdir(fileDirectory, function (err, list) {
//   if (err) throw err
//   list.forEach(file => {
//     if (path.extname(file) === '.' + fileExtension)
//       console.log(file);
//   })
// })

// official solution:
// var fs = require('fs')
//     var path = require('path')
//     fs.readdir(process.argv[2], function (err, list) {
      // list.forEach(function (file) {
      //   if (path.extname(file) === '.' + process.argv[3])
      //     console.log(file)
      // })
//     })


// Exercise 6: Making it modular

// var mymodule = require('./mymodule.js')
//
// mymodule(process.argv[2], process.argv[3], (err, list) => {
//   if (err) return console.log('oops');
//   for(var file of list) { console.log(file) }
// }
// )
// //
// // official solution (also check mymodule.js)
// var filterFn = require('./mymodule.js')
// var dir = process.argv[2]
// var filterStr = process.argv[3]
//
// filterFn(dir, filterStr, function (err, list) {
//   if (err)
//     return console.error('There was an error:', err)
//
//   list.forEach(function (file) {      // at this point, only the filtered list is sent here to be console logged. THis is the beauty of async callbacks
//     console.log(file)
//   })
// })

// note that "foreach" doesn't "return" anything! You'll have to use map or other things

// ***Exercise 7: HTTP Client***
// var http = require('http')
// var url = process.argv[2]
//
// var answer = http.get(url, function (response) {
//   response.on('data', function(data) {
//     console.log(data.toString());
//   })
// })

// official solution. This solution is more correct than my solution, as I define what happens when there is an error:
// var http = require('http')
// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// })

// ***Exercise 8: HTTP collect***
// var bl = require('bl')
// var http = require('http')
//
// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.pipe(bl(function (err, data) {
//     if (err) return console.error(err)
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }
// ))
// })
//   response.on('data', console.log(response.length))
//   response.on('data', console.log(response.toString()))
//   response.on('error', console.error)
// })
// //
// firstLine = firstlinefromserver.length
// secondLine = secondlinefromserver.toString()

// ***Exercise 9: Juggling Async

var bl = require('bl')
var http = require('http')
var async = require('async')

// async.map([process.argv[2], process.argv[3], process.argv[4]], http.get, function (err, response) {
//   response.setEncoding('utf8')
//     response.pipe(bl(function (err, data) {
//     if (err) return console.error(err)
//     data = data.toString()
//     console.log(data)
//   }
// ))})

for (i = 2; i < 5; i++) {
http.get(process.argv[i], function (response) {
  response.setEncoding('utf8')
    response.pipe(bl(function (err, data) {
    if (err) return console.error(err)
    data = data.toString()
    console.log(data)
  }
))}
)}
