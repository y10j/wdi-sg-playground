// Afternoon lesson: TimeOut
// var timeout = setTimeout(function() { console.log('hey!') }, 3000)
// clearTimeout(timeout)
//
// var timer = setInterval(function() { console.log('yo') }, 1000)
// clearInterval(timer)

// setInterval(function() { console.log('yo') }, 1000)

// this is the code without requestAnimationFrame
// var direction = 1
// setInterval(function() {
//   var logo = document.querySelector('div')  // querySelector(.class) for classes
//   var topPos = parseInt(logo.style.top || '0', 10) // 10 is the base of counting. It's just syntax
//   var leftPos = parseInt(logo.style.left || '0', 10) // 10 is the base of counting. It's just syntax
//   if (topPos > 100 || topPos < 0) {
//     direction = direction * -1
//   }
//   logo.style.top =
//     topPos + direction * 10 + 'px'
//   logo.style.left =
//     leftPos + direction * 30 + 'px'
// }, 100)  // change this last number value to change animation speed
//
// We can do the same with requestAnimationFrame, which is the new hot thing in javascript. It prevents useless animations from going on and on (and drain your battery when you switch tab. It calls once

var direction = 1
window.requestAnimationFrame(function step() {
  var logo = document.querySelector('div')  // querySelector(.class) for classes
  var topPos = parseInt(logo.style.top || '0', 10) // 10 is the base of counting. It's just syntax
  var leftPos = parseInt(logo.style.left || '0', 10) // 10 is the base of counting. It's just syntax
  if (topPos > 100 || topPos < 0) {
    direction = direction * -1
  }
  logo.style.top =
    topPos + direction * 1 + 'px'
  logo.style.left =
    leftPos + direction * 3 + 'px'
    window.requestAnimationFrame(step)  // this is recursion. In recursion, the function calls itself, thus creating an infinite loop
}, 100)


// setInterval(function() {
//   var logo = document.querySelector('div')  // querySelector(.class) for classes
//   var distance = parseInt(logo.style.top || '0', 10) // 10 is the base of counting. It's just syntax
//   if (distance > 100 || distance < 0) {
//     direction = direction * -1
//   }
//   logo.style.top =
//   logo.style.left =
//     direction + direction * 30 + 'px'
// }, 100)



// more complex: canvassing. Also, think about how to make circular animations
// http://threejs.org/examples/

// things to use for game: mousemove 
