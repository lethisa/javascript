/*GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

/////////////////////////////////////////////////////// VARIABLE

var scores, roundScore, activePlayer, gamePlaying; // => global scope variable
// dice = Math.floor(Math.random() * 6) + 1;

/////////////////////////////////////////////////////// EXECUTION

// set value
// document.querySelector('#current-' + activePlayer).textContent = dice; => textContent - plain text only
// document.querySelector('#current-' + activePlayer).innerHTML = '<b>' + dice + '</b>'; // include html code
init();
// store/ get value example
// var x = document.querySelector('#score-1').textContent;
// console.log(x);

// set value by default 0
/*document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';*/

// change css - dice invisible
document.querySelector('.dice').style.display = 'none';
// event handler - even listener

/*function btn () {
  // body... => exsternal function - reusable
}*/

// event button click
document.querySelector('.btn-roll').addEventListener('click', function() { // anonymous function -cannot reusable - internal function
  // check game state
  if (gamePlaying) {
    // 1. random number
    var dice = Math.floor(Math.random() * 6) + 1; // => local scope
    // 2. display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    // 3. update the round score IF the rolled number was NOT a 1
    if (dice !== 1) { // => not perfform type coercion
      // add score to player
      roundScore += dice; // roundScore = roundScore + dice
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
      // next player
      nextPlayer();
    }
  }
});

// event button hold
document.querySelector('.btn-hold').addEventListener('click', function() {
  if (gamePlaying) {
    // add current score to global scores
    scores[activePlayer] += roundScore;

    // update user interface
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    // check player won the game
    if (scores[activePlayer] >= 20) {
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    } else {
      // next player
      nextPlayer();
    }
  }
});

function nextPlayer() {
  // next player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // => ternary operator
  roundScore = 0;

  // set interface score to 0 if 1 dice
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  // toggle - if there add, remove it - if there no, add it
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  // set interface active player background

  // document.querySelector('.player-0-panel').classList.remove('active');
  // document.querySelector('.player-1-panel').classList.add('active');

  document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
}

// state variable = tell codition of system
