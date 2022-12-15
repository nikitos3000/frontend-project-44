import { getRandomNum } from '../random.js'
import run from '../index.js';
import gamestarter from '../index.js';

const rule ='Answer "yes" if the number is even, otherwise answer "no".';
let number = getRandomNum()
const iseven = (number) => number % 2 === 0;

const game = () =>{
    const correctanswer = iseven(number) ? 'yes' : 'no';
    const question = number;
    console.log(question)
    return [question, correctanswer];
 

};
 const gamestart = () => {
    gamestarter(game, rule);
  };
  gamestart()
export default gamestart