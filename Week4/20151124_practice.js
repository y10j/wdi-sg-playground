// Learning about the weird things about Javascript's assign function

var person = {
  name: 'Seb',
  address: {
    street: 'Keong Saik',
    no: 12
  }
}

var clone = Object.assign({}, person)

clone.name = 'Cheryl'
console.log(clone.name, person.name)
console.log(clone.address, person.address)

clone.address.street = 'East Coast Road'
console.log(clone.address, person.address)  // This will output something bizarre. The person's address is modified along with the clone's.


// Exercise: Implement your own version of Object.assign()

// Spec:
// http://exploringjs.com/es6/ch_oop-besides-classes.html#Object_assign

// Hint: Object.keys()

function objectAssign (target, ...overrides) {
  overrides.forEach(override => {
    Object.keys(override).forEach(key => {
        target[key] = override[key]
      })
      return target
  })}

// cheat: return Object.assign(target, ...overrides)
// GREAT LESSON: ARRAYS ARE ALSO OBJECTS, just that you don't see their keys

for (const expectation of [
  // Test: Return target
  () => {
    const target = {}
    const result = objectAssign(target)
    console.log(result === target)
  },

  // Test: Target should be modified
  () => {
    const target = {}
    const override = { foo: 123 }
    const result = objectAssign(target, override)
    console.log(typeof result.foo !== 'undefined')
  },

  // Test: Overrides should not be modified
  () => {
    const target = { foo: 123 }
    const override = { bar: 123 }
    const result = objectAssign(target, override)
    console.log(typeof override.foo === 'undefined')
  },

  // Test: Sequentially copy from first to last override
  () => {
    const target = {}
    const first = { foo: 123 }
    const second = { foo: 456 }
    const result = objectAssign(target, first, second)
    console.log(result.foo === second.foo)
  }
]) expectation()
