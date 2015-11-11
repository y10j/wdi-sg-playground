var currentPlayer ='one'
var body = document.querySelector('body')
var gameStatus = 'gameOn'
var changeText = document.querySelector('.turnAlert')
var reset = document.getElementById('clearButton')
var reload = document.getElementById("reloadButton")
var entries = document.getElementsByClassName('tile')

var playerOneName = prompt('Please enter player 1\'s name!', '')
if (playerOneName === '') {
  alert('Since you\'re too shy to reveal your name, I will assign your name to be \'Player 1\'!')
  playerOneName = 'Player 1'
} else if (playerOneName !== '') {
  playerOneName + ' is ready to play!'
} else {
  confirm('Are you sure you want to quit?')
  gameStatus = 'gameOver'
}

var playerTwoName = prompt('Please enter player 2\'s name!', '')
if (playerTwoName === '') {
  alert('Since you\'re too shy to reveal your name, I will assign your name to be \'Player 2\'!')
  playerTwoName = 'Player 2'
  alert('Let the game begin!\n' + playerOneName + ' will be \'X\'\n' + playerTwoName + ' will be \'O\'')
} else if (playerTwoName !== '') {
  playerTwoName + ' is ready to play!'
  alert('Let the game begin!\n' + playerOneName + ' will be \'X\'\n' + playerTwoName + ' will be \'O\'')
} else {
  confirm('Are you sure you want to quit?')
  gameStatus = 'gameOver'
}

body.addEventListener('click', event => {
  var tile = event.target
  if (gameStatus === 'gameOver') return
  if (event.target.className !== 'tile') return // note that the 'return' here is to help break out of the loop when the condition is met. We need to make sure we don't insert X/O outside of the table
  if (tile.textContent) return // note that the 'return' here is to help break out of the loop when the condition is met. We need to make sure we cannot overwirite a tile already selected
  if (currentPlayer === 'one') {
    tile.textContent = 'x'
    currentPlayer = 'two'
    changeText.innerHTML = 'It is now ' + playerTwoName + '\'s turn with \'O\''
  } else {
    tile.textContent = 'o'
    currentPlayer = 'one'
    changeText.innerHTML = 'It is now ' + playerOneName + '\'s turn with \'X\''
  }
  if (
    (a1.textContent === a2.textContent && a2.textContent === a3.textContent && a2.textContent !== '') ||
    (b1.textContent === b2.textContent && b2.textContent === b3.textContent && b2.textContent !== '') ||
    (c1.textContent === c2.textContent && c2.textContent === c3.textContent && c2.textContent !== '') ||
    (a1.textContent === b1.textContent && b1.textContent === c1.textContent && b1.textContent !== '') ||
    (a2.textContent === b2.textContent && b2.textContent === c2.textContent && b2.textContent !== '') ||
    (a3.textContent === b3.textContent && b3.textContent === c3.textContent && b3.textContent !== '') ||
    (a1.textContent === b2.textContent && b2.textContent === c3.textContent && b2.textContent !== '') ||
    (a3.textContent === b2.textContent && a3.textContent === c1.textContent && a3.textContent !== '')
  ) {
    if (currentPlayer === 'one') {
      var winner = playerTwoName
    } else {
      var winner = playerOneName
    }
    alert('We have a winner!\n' + winner + ' wins!')
    gameStatus = 'gameOver'
  }
  else {
    gameStatus = 'gameOn'
  }
  if (((a1.textContent + a2.textContent + a3.textContent + b1.textContent + b2.textContent + b3.textContent + c1.textContent + c2.textContent + c3.textContent).length == 9) && (gameStatus == 'gameOn')) {
    alert('We have a tie game!')
    gameStatus = 'gameOver'
  }
})

reset.addEventListener('click', event => {
  a1.innerHTML = ''
  a2.innerHTML = ''
  a3.innerHTML = ''
  b1.innerHTML = ''
  b2.innerHTML = ''
  b3.innerHTML = ''
  c1.innerHTML = ''
  c2.innerHTML = ''
  c3.innerHTML = ''
  changeText.innerHTML = 'It is now ' + playerOneName + '\'s turn with \'X\''
}
)

reload.addEventListener('click', event => location.reload())
