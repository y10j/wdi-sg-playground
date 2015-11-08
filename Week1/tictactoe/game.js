var currentPlayer ='one'
var body = document.querySelector('body')
var gameStatus = 'gameOn'

// if (
//     (a1.textContent == a2.textContent == a3.textContent != '') ||
//     (b1.textContent == b2.textContent == b3.textContent != '') ||
//     (c1.textContent == c2.textContent == c3.textContent != '') ||
//     (a1.textContent == b1.textContent == c1.textContent != '') ||
//     (a2.textContent == b2.textContent == c2.textContent != '') ||
//     (a3.textContent == b3.textContent == c3.textContent != '') ||
//     (a1.textContent == b2.textContent == c3.textContent != '') ||
//     (a3.textContent == b2.textContent == c1.textContent != '')
//   ) {
//     gameStatus = 'gameOver'
//   } else {
//     gameStatus = 'gameOn'
//   }
//
// if (gameStatus === 'gameOver') {
//   alert("Player" + currentPlayer + "has won")

body.addEventListener('click', event => {
  var tile = event.target
  if (event.target.className !== 'tile') return //note that the 'return' here is to help break out of the loop when the condition is met. We need to make sure we don't insert X/O outside of the table
  if (tile.textContent) return //note that the 'return' here is to help break out of the loop when the condition is met. We need to make sure we cannot overwirite a tile already selected
  if (currentPlayer === 'one') {
    tile.textContent = 'x'
    currentPlayer = 'two'
  } else {
    tile.textContent = 'o'
    currentPlayer = 'one'
  }
})
