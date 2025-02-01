'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
console.log(typeof secretNumber, secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // If there is no input
    document.querySelector('.message').textContent = '😱No number!';
  } else if (guess === secretNumber) {
    // If the player Wins
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '😎Correct number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    // If the guess is above the secret number
    if (score > 1) {
      document.querySelector('.message').textContent = '😴Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😂You lost!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    // If the guess is below the secret number
    if (score > 1) {
      document.querySelector('.message').textContent = '😣Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😂You lost!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // Handle Again btn click resetting the game
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
});
