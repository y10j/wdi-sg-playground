
// var fs = require('fs')
// var path = require('path')
//
// module.exports = function (directoryName, fileNameExtension, callback) {
//   fs.readdir(directoryName, function (err, list) {
//     if (err) return callback(err)
//     var filtered = list.forEach(file => {
//       if (path.extname(file) === '.' + fileNameExtension)
//         console.log(file)
//       })
//       callback(null, filtered)
//     })
//     }

// official solution:
var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {

  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err)

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}


// Seb's answer:

// import fs from 'fs'
//
// export default function (directory, extension, callback) {
//   fs.readdir(directory, (err, files) => {
//     if (err) return callback(err)
//     const hasExtension = file => file.endsWith('.' + extension)
//     const filtered = files.filter(hasExtension)
//     callback(null, filtered)
//   })
// }
//
// import mymodule from './mymodule.js'
// const [, , directory, extension] = process.argv
//
// mymodule(directory, extension, (err, list) => {
// if (err) return console.log("oops!")
// for (const file of list) console.log(file)
// })
