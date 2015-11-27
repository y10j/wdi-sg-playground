// Morning lesson for the day: why map is better than object constructor

class Person {
  construction (name, score) {
    this.name = name
    this.score = score
  }
}

const alice_foo = ('Alice', 10)
const alice_bar = ('Alice', 50)

const people_object = {}
people_object[alice_foo.name] = alice_foo.score
people_object[alice_bar.name] = alice_bar.score
console.log(people_object[alice_foo.name] === alice_bar.score) // Oops! true. This returns true because the computer reads it as people_object['Alice'] as the same!


const people_map = new Map()
people_map.set(alice_foo, alice_foo.score)
people_map.set(alice_bar, alice_bar.score)
console.log(people_map.get(alice_foo) === alice_foo.score) // Correct! true


// *** LESSON: using node to talk to server

// refer to other notes


// *** AFTERNOON LESSON: code coverage ***
// recommended: codecov.io
// get Eddie Moore's set up at: https://github.com/eddiemoore/testcoverage


// import xyz {abc} from '../src'      ---> note that you put braces around abc to import specific functions. The one with no braces is the default exported function

// describe('wait' () => {
//   it('should resole the promise', done => {
//     wait().then(res => {
//       expect(res).to.be.true
//       done()
//     }))
//   })
// })


// XHR vs fetch method
const address = 'https://api.mig.me/location'

    // XHR request method
function getLocation (cb) {
  const client = new XMLHttpRequest()
  client.onload = () => {
    //console.log(client)
    if (client.status >= 400) {
      cb(client.response)
    } else {
      cb(null, client.response)
    }
  }
  client.onerror = err => {
    ///console.error('err', err)
    cb(err)
  }
  client.open('GET', address)
  client.send()
}

getLocation((err, res) => {
  if (err) {
    //console.error(err)
    return
  }
  console.log('xhr', res)
})

    // fetch method
fetch(address)
  .then(res => res.json())
  .then(res => {
    console.log(res.country)
  })
  .catch(err => {
    console.error(err)
  })

  // alternate fetch method:
  fetch(address)
    .then(res => {
      console.log(res)
      if (res.ok) {
        return res.json()
      } else {
        throw new Error('GAH!!')
      }
    })
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.error(err)
    })

    // Async await method
async function getIt() {
  const res = await fetch(address)
  if (condition === true) {
    const res = await fetch(address)
  } else {
    throw err
  }
}

    // Class practice: getting the first line from Jesstern's JSON file:

    const address1= 'https://jsstrn.github.io/ga-wdi-class/js/data.json'

    fetch(address1)
      .then(res => {
        console.log(res)
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('GAH!!')
        }
      })
      .then(res => {
        console.log(res.instructors[1])
      })
      .catch(err => {
        console.error(err)
      })


export async function getStuff() {
  const res = await fetch('https:// XYZ')
  return res.json()
}


// TASK: to make an app that returns a "done" screen when you have loaded everything in your profile pulled from a few URLs

const urls = [
  'url1',
  'url2',
  'url3',
  'url4'
]

          //version 1
let apis = []
urls.forEach(url => {
  return fetch(url).then(res => res.json())
})

          // version 2
Promise.all(apis).then(responses => {
  console.log(responses[0])
  console.log(responses[1])
})

        // version 3
async function getAll (urls) {
  const apis = urls.map(url => {
    return fetch(url).then(res => res.json())
  })
  return await* apis   // await* means "await for many promises"
}


        // version 4
async function getAll (urls) {
  return await* urls.map(url => fetch(url).then(res.json()))
}

      // common last para for all 4 versions
getAll(urls).then(responses => {
  console.log(responses[0])
})


http://codepen.io/edmoore/pen/gaJEdw?editors=001

        // Eddie Moore's babel:
const urls = [
  'https://api.mig.me/location',
  'https://api.mig.me/location/ip',
  'https://api.mig.me/meta?url=https://www.youtube.com/watch?v=qNOY1qPRSUM',
  'https://api.mig.me/meta?url=https://www.google.com'
]

// let apis = []
// urls.forEach(url => {
//   apis.push(fetch(url).then(res => res.json()))
// })

// const apis = urls.map(url => {
//   return fetch(url).then(res => res.json())
// })

// Promise.all(apis).then(responses => {
//   console.log(responses[0])
//   console.log(responses[1])
// })

// async function getAll (urls) {
//   const apis = urls.map(url => {
//     return fetch(url).then(res => res.json())
//   })
//   return await* apis
// }

async function getAll (urls) {
  return await* urls.map(url => fetch(url).then(res => res.json()))
}


getAll(urls).then(responses => {
  console.log(responses[0])
}))
