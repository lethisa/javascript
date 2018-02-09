/////////////////////////////////////////////////////// CHALLENGE
/*1. a player looses his entire score when rolls two 6 in a row. after thar, it's the next player's turn
(hint: always save the previous dice roll in a separate variable)
2. add an input field to the html where player can set the winning score, so that they can change the predefined score of 100.
(hint: you can read that value with the value property in javascript, this is a good opportuity to use google to figure this out)
3. add another dice to the game, so that there are two dice now. the player looses his current score when one them is a 1.
(hint: you will need css to position the second dice, so take a look at the css code for the first one)
*/

/////////////////////////////////////////////////////// VARIABLE
var scores, roundScore, activePlayer, gamePlaying/*, lastDice*/;

/////////////////////////////////////////////////////// INITIALIZE
init();
document.querySelector(".btn-new").addEventListener("click", init);

/////////////////////////////////////////////////////// BUTTON ROLL
document.querySelector(".btn-roll").addEventListener("click", function() {

  if (gamePlaying) {

    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice-1").style.display = "block";
    document.getElementById("dice-2").style.display = "block";
    document.getElementById("dice-1").src = "dice-" + dice1 + ".png";
    document.getElementById("dice-2").src = "dice-" + dice2 + ".png";

    /*  if (dice === 6 && lastDice === 6) {
        scores[activePlayer] = 0;
        document.querySelector("#score-" + activePlayer).textContent = 0;
        nextPlayer1();
      } else if (dice !== 1) {
        roundScore += dice;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
      } else {
        nextPlayer();
      }
      lastDice = dice;*/

    if (dice1 !== 1 && dice2 !== 1) {
      roundScore += (dice1 + dice2);
      document.querySelector("#current-" + activePlayer).textContent = roundScore;
    } else {
      nextPlayer();
    }
  }
});

/////////////////////////////////////////////////////// BUTTON HOLD
document.querySelector(".btn-hold").addEventListener("click", function() {
  if (gamePlaying) {

    scores[activePlayer] += roundScore;
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

    var input = document.querySelector(".final-score").value;
    var winningScore;

    if (input) {
      winningScore = input;
    } else {
      winningScore = 100;
    }
    if (scores[activePlayer] >= winningScore) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      document.getElementById("dice-1").style.display = "none";
      document.getElementById("dice-2").style.display = "none";
      document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
      document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

/////////////////////////////////////////////////////// NEXT PLAYER
function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  document.getElementById("dice-1").style.display = "none";
  document.getElementById("dice-2").style.display = "none";
}

/////////////////////////////////////////////////////// FUNCTION INITIALIZE
function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  document.getElementById("dice-1").style.display = "none";
  document.getElementById("dice-2").style.display = "none";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}
