


// Learning Javascript promise



// Learning asynchronous callbacks

var fs = require('fs')

function getBears (filepath, done) {
  fs.readFile(filepath, function (err, bears) {
    if (err) return done(err)

    fs.readFile('bears.dictionary', function (err, bears) {
      if (err) return done(err)
      compareBears(bear, dict)
    })
  })
  function compareBears (bear, dict) {
    dict = dict.toString()
    blah blah blah
  } done(null, bears)
  }
}
