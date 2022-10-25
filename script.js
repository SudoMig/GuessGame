'use strict';

let message = document.querySelector('.message');
const number = document.querySelector('.number');
let secretNumber = Math.floor(Math.random(1) * 20);
const winner = document.body;
const btn = document.getElementById('btn');
let currentScore = 20;
let highScore = '';

console.log(secretNumber);

function HighScore() {
  if (highScore < currentScore) {
    highScore = currentScore;
    document.querySelector('.highscore').textContent = highScore;
  }
}

winner.classList.remove('winner');

function userGuess() {
  let guess = document.querySelector('.guess').value;
  let score = document.querySelector('.score');

  if (currentScore === 0) {
    message.textContent = 'You Lost, Game Over.';
    btn.disabled = true;
  } else if (guess == secretNumber) {
    message.textContent = 'Correct Number!';
    number.textContent = secretNumber;
    winner.classList.add('winner');
    HighScore();
    btn.disabled = true;
  } else if (guess > secretNumber) {
    message.textContent = 'Number is too High';
    currentScore = currentScore - 1;
    score.textContent = currentScore;
  } else if (guess < secretNumber) {
    message.textContent = 'Number is too Low';
    currentScore = currentScore - 1;
    score.textContent = currentScore;
  } else {
    console.log('This is a bug');
  }
}

function again() {
  winner.classList.remove('winner');
  number.textContent = '?';
  message.textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  currentScore = 20;
  document.querySelector('.guess').value = 0;
  btn.disabled = false;
}
