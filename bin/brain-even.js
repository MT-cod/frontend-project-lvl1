#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

function greeting() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
}

// Если переданное число чётное, то возвращаем 'yes', иначе 'no'
function checkEven(num) {
  return (num % 2 === 0) ? 'yes' : 'no';
}

// Вопрос-ответ по логике игры "Проверка на чётность". Возвращает ответ юзера и правльный ответ.
function runBrainEven() {
  const randomNum = Math.floor(Math.random() * 100);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question: ${randomNum}`);
  const answer = readlineSync.question('Your answer: ');
  const rightAnswer = checkEven(randomNum);

  return [answer, rightAnswer];
}

const name = greeting();

// Цикл-счётчик вопрос-ответ
function threeTry() {
  for (let i = 0; i < 3; i += 1) {
    const [answer, rightAnswer] = runBrainEven();
    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      return false;
    }
    console.log('Correct!');
  }
  return true;
}

console.log(threeTry() ? `Congratulations, ${name}!` : `Let's try again, ${name}!`);
