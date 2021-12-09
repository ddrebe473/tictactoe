var turn = true;
var winner = false;
var winindicator = document.getElementById("winindicator");
var turnIndicator = document.getElementById("Your_turn");
var scoreIndicator = document.getElementById("Your_score");
var resetButton = document.getElementById("Reset_button");
var player1wins = 0;
var player2wins = 0;
var turnstaken = 0;

function resetgame() {
  winner = false;
  turn = true;
  turnstaken = 0;
  winindicator.style.display = "none";
  turnIndicator.style.display = "block";
  resetButton.style.display = "none";
  for (let i = 2; i <= 10; i++) {
    var box = document.getElementById("tictactoe_" + i);
    box.style.backgroundColor = "#FFFFFF";

    var text = document.getElementById("ind" + i);
    text.innerHTML = "";
  }
}

var winningboxes = [
  [1, 2, 3],
  [1, 5, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [4, 5, 6],
  [7, 8, 9],
  [7, 5, 3],
];
function checkforwinner() {
  winningboxes.forEach((table) => {
    var box1 = document.getElementById("ind" + (table[0] + 1));
    var box2 = document.getElementById("ind" + (table[1] + 1));
    var box3 = document.getElementById("ind" + (table[2] + 1));

    if (
      box1.innerHTML == box2.innerHTML &&
      box1.innerHTML == box3.innerHTML &&
      box1.innerHTML != ""
    ) {
      box1.parentElement.style.backgroundColor = "#0080FF";
      box2.parentElement.style.backgroundColor = "#0080FF";
      box3.parentElement.style.backgroundColor = "#0080FF";
      turn = 0;
      winner = true;
      resetButton.style.display = "block";
      winindicator.style.display = "block";
      turnIndicator.style.display = "none";
      turnIndicator.innerHTML = "It is player 1 (X) turn";
      if (box1.innerHTML == "X") {
        winindicator.innerHTML = "Player 1 wins";
        player1wins += 1;
      } else {
        winindicator.innerHTML = "Player 2 wins";
        player2wins += 1;
      }
      scoreIndicator.innerHTML = `Player 1 wins: ${player1wins}, Player 2 wins: ${player2wins}`;
    }
  });
  if (turnstaken === 9 && winner == false) {
    turn = 0;
    winner = true;
    resetButton.style.display = "block";
    winindicator.style.display = "block";
    turnIndicator.style.display = "none";
    turnIndicator.innerHTML = "It is player 1 (X) turn";
    winindicator.innerHTML = "Tie game!";
  }
}
function selectsquare(square) {
  if (winner == true) {
    return;
  }
  var box = document.getElementsByClassName("tictactoe_" + square);
  var indicator = document.getElementById("ind" + square);

  if (indicator.innerHTML != "") {
    // thingy will be the check to see if the div image has a source or not
    return;
  } // check if the div image has already been replaced and stop the function if so
  if (turn == true) {
    indicator.innerHTML = "X";
    turnIndicator.innerHTML = "It is player 2 (O) turn";
    //Above is player 1 turn
    turn = false;
  } else {
    indicator.innerHTML = "O";
    turnIndicator.innerHTML = "It is player 1 (X) turn";
    // above is player 2 turn:
    turn = true;
  }
  turnstaken += 1;
  checkforwinner();
}
