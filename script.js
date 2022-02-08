'use strict';

let secetNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayGuessMessage = function (message) {
  document.querySelector('.guess-message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);

  // No input
  if (!guessingNumber) {
    displayGuessMessage('Введите число!');

    // Player won
  } else if (guessingNumber === secetNumber) {
    displayGuessMessage('Правильно!');
    document.querySelector('.question').textContent = secetNumber;
    document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
    document.querySelector('.question').style.width = '50rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // Number from input is wrong
  } else if (guessingNumber !== secetNumber) {
    if (score > 1) {
      displayGuessMessage(
        guessingNumber > secetNumber ? 'Слишком много!' : 'Слишком мало!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayGuessMessage('Игра окончена!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // Too high
  //  else if (guessingNumber > secetNumber) {
  //   if (score > 1) {
  //     document.querySelector('.guess-message').textContent = 'Слишком много!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.guess-message').textContent = 'Игра окончена!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // Too low
  // } else if (guessingNumber < secetNumber) {
  //   if (score > 1) {
  //     document.querySelector('.guess-message').textContent = 'Слишком мало!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.guess-message').textContent = 'Игра окончена!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secetNumber = Math.trunc(Math.random() * 20) + 1;
  displayGuessMessage('Начни угадывать!');
  document.querySelector('.question').textContent = '???';
  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
  document.querySelector('.question').style.width = '25rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number-input').value = '';
});
