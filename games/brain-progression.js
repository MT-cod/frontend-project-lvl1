import readlineSync from 'readline-sync';
import { getRandIntFromInterval } from '../src/index.js';

export default function run() {
  const randomStartNum = getRandIntFromInterval(1, 100);
  const randomProgressionPosNum = getRandIntFromInterval(1, 10);
  const randomProgressorVal = getRandIntFromInterval(1, 10);
  const rightAnswer = randomStartNum + randomProgressorVal * (randomProgressionPosNum - 1);

  const progressLine = [];
  for (let i = 0; i < 10; i += 1) {
    if (i === randomProgressionPosNum - 1) {
      progressLine.push('..');
    } else {
      progressLine.push(randomStartNum + randomProgressorVal * i);
    }
  }
  const progressLineText = progressLine.join(' ');

  console.log('What number is missing in the progression?');
  console.log(`Question: ${progressLineText}`);
  const answer = readlineSync.question('Your answer: ');

  return [answer, rightAnswer.toString()];
}
