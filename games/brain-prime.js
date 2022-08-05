import readlineSync from 'readline-sync';
import { getRandIntFromInterval } from '../src/index.js';

// Если переданное число простое, то возвращаем 'yes', иначе 'no'
function isPrime(num) {
  if (num < 2) {
    return 'no';
  }

  for (let i = 2; i <= (num / 2); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }

  return 'yes';
}

export default function run() {
  const randomNum = getRandIntFromInterval(1, 100);
  const rightAnswer = isPrime(randomNum);

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  console.log(`Question: ${randomNum}`);
  const answer = readlineSync.question('Your answer: ');

  return [answer, rightAnswer.toString()];
}
