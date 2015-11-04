var checkerboard = [[null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null]];

// function setSquare(player, row, col) {
//     var player = [player1name, player2name]
// }

// function getPieceAt(row, col) {
//     // Your Code Here
// }
//
// function clearboard() {
//     for (i = 0; i < 9; i++) {
//         checkerboard[i] = [null,null,null,null,null,null,null,null]
//     }
// }

function clearboard() {
  checkerboard = checkerboard.map(row => row.map(column => "hello"));
}

console.log(clearboard)
console.log(checkerboard)

//
// function setUpRed() {
//     for (var i = 1; i <= 3; i++) {
//         if (row % 2 = 0) {
//             getpiece = [[2, 2], [2, 4], [2, 6], [2, 8]]
//         } else {
//             getpiece = [[1, 1], [1, 3], [1, 5], [1, 7], [3, 1], [3, 3],[3,5],[3,7]]
//         }
//         }
// }
//
// function setUpBlack {
//    for (var i = 6; i <= 8; i++) {
//         if (row % 2 = 0) {
//             getpiece = [[6, 1], [6, 3], [6, 5], [6, 7], [8, 1], [8, 3],[8,5],[8,7]]
//         } else {
//             getpiece = [[1, 1], [1, 3], [1, 5], [1, 7]]
//         }
//         }
// }
//
// var player1name = prompt("Please enter player 1's name")
// var player2name = prompt("Please enter player 2's name")
//
// var pieces = [row, col]
//
// pieces['red'].map(function(piece){
//     var row = piece[0];
//     var col = piece[1];
//     return checkerboard[row][col] === 'R';
//
// });
//
// pieces['black'].map(function(piece){
//     var row = piece[0];
//     var col = piece[1];
//     return checkerboard[row][col] === 'B';
//
// });
