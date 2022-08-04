import readlineSync from 'readline-sync';

export function greeting() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
}

// Цикл-счётчик вопрос-ответ
export function threeTry(run, name) {
  for (let i = 0; i < 3; i += 1) {
    const [answer, rightAnswer] = run();
    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    console.log('Correct!');
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
}

export function getRandIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
