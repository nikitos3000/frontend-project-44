import { getRandomNum } from '../random.js'
import gamestarter from '../index.js';

const rule ='What number is missing in the progression?';
const rangemin = 5;
const rangemax = 10;
const minstep = 1;
const maxstep = 5;
const minlength = 6;
const maxlength = 10;
 
const getProgression = (start, step, length) => {
    const progression = [];
    for (let i = 1; i < length; i += 1) {
      progression.push(start + (step * i));
    }
    return progression;
  };

  const game = () => {
    const lengthprogression = getRandomNum(5, 10);
    const stepprogression = getRandomNum(1, 5);
    const startpoint = getRandomNum(1, 10);
    const finishpoint = getRandomNum(0, lengthprogression);
    const progression = getProgression(startpoint, stepprogression, lengthprogression);
    const correctanswer = progression[finishpoint].toString();
    progression.splice(finishpoint, 1, '..');
    const Quest = progression.join(' ');
    return [ correctanswer, Quest ];
  }
   
  const gamestarterprogression = () => { gamestarter(game, rule); };
  gamestarterprogression()
export default gamestarterprogression;