'use strict';

let message = document.querySelector('.message').textContent;
const number = document.querySelector('.number');
let secretNumber = Math.floor(Math.random() * 20);
const winner = document.body;
const btn = document.getElementById('btn');
let currentScore = 10;
let highScore = '';

console.log(secretNumber);

function HighScore() {
  console.log('run 1', currentScore);
  console.log(highScore);

  if (highScore > currentScore) {
    highScore = currentScore;
    console.log('runned');
  }
}

winner.classList.remove('winner');

function userGuess() {
  let guess = document.querySelector('.guess').value;
  let message = document.querySelector('.message');
  let score = document.querySelector('.score');

  if (guess == secretNumber) {
    message.textContent = 'Correct Number!';
    number.textContent = secretNumber;
    winner.classList.add('winner');
    HighScore();
    btn.disabled = true;
  } else if (guess > secretNumber) {
    message.textContent = 'Number is too High';
  } else {
    message.textContent = 'Number is too Low';
    currentScore = currentScore - 1;
    score.textContent = currentScore;
    if (currentScore === 0) {
      message.textContent = 'You Lost, Game Over.';
      btn.disabled = true;
    }
  }
}
