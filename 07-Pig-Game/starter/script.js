'use strict';
/* Did this on my own */
// Selecting elements
/*
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore0 = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // Generate number between 1 and 6
  let diceRoll = Math.trunc(Math.random() * 6) + 1;

  // Show correct dice image
  if (diceEl.classList.contains('hidden')) {
    diceEl.classList.remove('hidden');
  }
  diceEl.src = `dice-${diceRoll}.png`;

  if (diceRoll === 1) {
    currentScore0 = 0;
    currentScore0El.textContent = currentScore0;
    player1El.classList.add('player--active');
    player0El.classList.remove('player--active');
  } else {
    currentScore0 += diceRoll;
    currentScore0El.textContent = currentScore0;
  }
});

// Hold dice functionality
btnHold.addEventListener('click', function () {
  // 1. Add score in currentScore to the score variable of the active player
  if (player0El.classList.contains('player--active')) {
    if (scorePlayer0 < 20) {
      scorePlayer0 += currentScore;

      // 2. Show the score in the scorebox on the FE
      score0El.textContent = scorePlayer0;

      // 3. Reset the currentScore variable
      currentScore = 0;
      current0El.textContent = currentScore;

      // 5. Switch to the next player
      activePlayer = activePlayer === 0 ? 1 : 0;
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
    } else {
      player0El.classList.toggle('player--winner');
      btnRoll.disabled = true;
      btnHold.disabled = true;
    }
  } else {
    if (scorePlayer0) scorePlayer1 += currentScore;

    score1El.textContent = scorePlayer1;

    // 3. Reset the currentScore variable
    currentScore = 0;
    current1El.textContent = currentScore;

    // 5. Switch to the next player
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');

    // 4. Check if the player has won, if true: toggle some bitches
    if (scorePlayer1 >= 20) {
      player1El.classList.toggle('player--winner');
      btnRoll.disabled = true;
      btnHold.disabled = true;
    }
  }
});
*/

/*
When you click "Roll dice", this should happen:
- Gerenate a random number between 1 and 6
- If the random number is 1, the turn should go to the other user and the number in "current" becomes 0 again
- Dice image should show with the random number
- Random number is added to "current"
 

*/

/* Did this following the video */
// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  player0El.classList.add('player--active');
  player0El.classList.remove('player--active');

  diceEl.classList.add('hidden');
};

const switchPlayer = function () {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');

  // diceEl.classList.add('hidden');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;

    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  } else {
  }
});

btnNew.addEventListener('click', init);

/*
When you click "New game":
- current score to 0
- Global score to 0
- Hide dice roll
- player 0 becomes the first player 
- remove player--winner from winner
- give player 0 the player--active styles
*/
