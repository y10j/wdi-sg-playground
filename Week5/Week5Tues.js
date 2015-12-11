Dec 1, 2015

***1. Flat file database***

fs.

fs.writeFileSync
fs.write

http://stackoverflow.com/questions/2496710/writing-files-in-node-js


JSON.stringify   is a cheat code

// SEB's code for flat file database (based o Jesstern's files)
// You can do readFile asynchronously, and then writeFile synchronously

const path = require('path')

app.use((req, res, next) => {
  if(req.method === 'GET') {
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) console.warn.('Faile to read file')
      else scorboard = JSON.parse(data)
      next()
    })
  } else {
    const fin = res.end
    res.end = function() {
      fs.writeFileSync(
        filepath,
        JSON.stringify(scoreboard, null, '  ')
      )
      return fin.apply(this, arguments)
    }
  }
})


***2. Mongo ***

mongolab  (we will use this)
compose.io

changed things in .bash_profile on home directory
