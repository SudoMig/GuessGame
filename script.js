'use strict';

let message = document.querySelector('.message');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;
let highScore = '';

const number = document.querySelector('.number');
const btn = document.getElementById('btn');

//  Checks for new highscore
function HighScore() {
  if (highScore < currentScore) {
    highScore = currentScore;
    document.querySelector('.highscore').textContent = highScore;
  }
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function displayWinner(color) {
  document.querySelector('body').style.backgroundColor = color;
}

// Checks Player guesses
function playerGuess() {
  let guess = document.querySelector('.guess').value;
  let score = document.querySelector('.score');

  // Checks if player guessed
  if (!guess || guess == 0) {
    displayMessage('⛔ No number!');

    // Checks if guess is correct ---> win
  } else if (guess == secretNumber) {
    message.textContent = '🎉 Correct Number!';
    number.textContent = secretNumber;
    displayWinner('#50C878');
    HighScore();
    btn.disabled = true;

    // checks if guess is greater or lower
  } else if (guess !== secretNumber) {
    if (currentScore > 1) {
      displayMessage(
        guess > secretNumber ? '📈 Number is too High' : '📉 Number is too Low'
      );
      currentScore = currentScore - 1;
      score.textContent = currentScore;
    //   Check if player out of guesses ---> lost
    } else {
      displayMessage('😱 You lost the game!');
      btn.disabled = true;
    }
  }
}

// Resets game but keeps highScore
function again() {
  currentScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  number.textContent = '?';
  displayMessage('Start guessing...');
  displayWinner('#222');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = null;
  btn.disabled = false;
}
