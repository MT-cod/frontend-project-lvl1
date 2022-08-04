import readlineSync from 'readline-sync';
import { getRandIntFromInterval } from '../src/index.js';

// Возвращаем случайную операцию для калькулятора
function getRandOperationForCalc() {
  const randomNum = getRandIntFromInterval(1, 3);
  let operation = '';
  switch (randomNum) {
    case 1:
      operation = '+';
      break;
    case 2:
      operation = '-';
      break;
    case 3:
      operation = '*';
      break;
    default:
      //
  }

  return operation;
}

export default function run() {
  const randomNum1 = getRandIntFromInterval(1, 100);
  const randomNum2 = getRandIntFromInterval(1, 100);
  const operation = getRandOperationForCalc();
  let rightAnswer;

  console.log('What is the result of the expression?');
  console.log(`Question: ${randomNum1} ${operation} ${randomNum2}`);
  const answer = readlineSync.question('Your answer: ');

  switch (operation) {
    case '+':
      rightAnswer = randomNum1 + randomNum2;
      break;
    case '-':
      rightAnswer = (randomNum1 - randomNum2);
      break;
    case '*':
      rightAnswer = randomNum1 * randomNum2;
      break;
    default:
      //
  }

  return [answer, rightAnswer.toString()];
}
