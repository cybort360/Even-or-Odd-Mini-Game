'use strict';

const optionEven = document.querySelector('.even');
const optionOdd = document.querySelector('.odd');
const result = document.querySelector('.result');
const scoreDisplay = document.querySelector('.score');
const body = document.querySelector('body');
const playAgain = document.querySelector('.again');
const messageDisplay = document.querySelector('.message');
const highscoreDisplay = document.querySelector('.highscore');
// const button = document.querySelector('.active');

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 0;
let highScore = 0;

const changeBackground = function (color) {
  body.style.backgroundColor = color;
};

const changeScore = function (score) {
  scoreDisplay.textContent = score;
};

const changeMessage = function (message) {
  messageDisplay.textContent = message;
};

const changeHighscore = function (highscore) {
  highscoreDisplay.textContent = highscore;
};

const disableButton = function () {
  optionEven.disabled = true;
  optionOdd.disabled = true;
};

const enableButton = function () {
  optionEven.disabled = false;
  optionOdd.disabled = false;
};

const generateNumber = function () {
  secretNumber = Math.trunc(Math.random() * 100) + 1;
};

const isEven = function () {
  optionEven.addEventListener('click', () => {
    if (secretNumber % 2 === 0) {
      score++;
      changeScore(score);
      generateNumber();
      changeBackground('#27ae60');
      changeMessage('You guessed right ✅');
      if (score > highScore) {
        highScore = score;
        changeHighscore(highScore);
      }
    } else {
      changeBackground('#e74c3c');
      changeMessage('You are wrong 🚫');
      disableButton();
    }
  });
};

isEven();

const isOdd = function () {
  optionOdd.addEventListener('click', () => {
    if (secretNumber % 2 === 1) {
      score++;
      changeScore(score);
      generateNumber();
      changeBackground('#27ae60');
      changeMessage('You guessed right ✅');
      if (score > highScore) {
        highScore = score;
        changeHighscore(highScore);
      }
    } else {
      changeBackground('#e74c3c');
      changeMessage('You are wrong 🚫');
      disableButton();
    }
  });
};

isOdd();

playAgain.addEventListener('click', () => {
  generateNumber();
  result.textContent = 'Guess if the random number is even or odd';
  changeBackground('white');
  changeMessage('Start guessing...');
  score = 0;
  changeScore(score);
  enableButton();
});
