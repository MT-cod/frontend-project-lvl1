import readlineSync from 'readline-sync';
import { getRandIntFromInterval } from '../src/index.js';

// Если переданное число чётное, то возвращаем 'yes', иначе 'no'
function checkEven(num) {
  return (num % 2 === 0) ? 'yes' : 'no';
}

// Вопрос-ответ по логике игры "Проверка на чётность". Возвращает ответ юзера и правльный ответ.
export default function run() {
  const randomNum = getRandIntFromInterval(1, 100);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question: ${randomNum}`);
  const answer = readlineSync.question('Your answer: ');
  const rightAnswer = checkEven(randomNum);

  return [answer, rightAnswer];
}
