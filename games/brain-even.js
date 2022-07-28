import readlineSync from 'readline-sync';

// Если переданное число чётное, то возвращаем 'yes', иначе 'no'
export function checkEven(num) {
  return (num % 2 === 0) ? 'yes' : 'no';
}

// Вопрос-ответ по логике игры "Проверка на чётность". Возвращает ответ юзера и правльный ответ.
export function run() {
  const randomNum = Math.floor(Math.random() * 100);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question: ${randomNum}`);
  const answer = readlineSync.question('Your answer: ');
  const rightAnswer = checkEven(randomNum);

  return [answer, rightAnswer];
}
