import readlineSync from 'readline-sync';
import { getRandIntFromInterval } from '../src/index.js';

// Возвращаем наибольший общий делитель двух чисел
function getGcd(a, b) {
  if (a % b === 0) {
    return Math.abs(b);
  }

  return getGcd(b, a % b);
}

export default function run() {
  const randomNum1 = getRandIntFromInterval(1, 100);
  const randomNum2 = getRandIntFromInterval(1, 100);
  const rightAnswer = getGcd(randomNum1, randomNum2);

  console.log('Find the greatest common divisor of given numbers.');
  console.log(`Question: ${randomNum1} ${randomNum2}`);
  const answer = readlineSync.question('Your answer: ');

  return [answer, rightAnswer.toString()];
}
