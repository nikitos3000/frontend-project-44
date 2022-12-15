import { getRandomNum } from '../random.js'
import gamestarter from '../index.js';

const rule ='Answer "yes" if the number is even, otherwise answer "no".';
let number = getRandomNum()
let rangemin = 1
let rangemax = 100
const iseven = (number) => number % 2 === 0;

const game = () =>{
  let number = getRandomNum(rangemin, rangemax)
    const correctanswer = iseven(number) ? 'yes' : 'no';
    const Quest = number
    return [correctanswer, Quest];
 

};
 const gamestart = () => {
    gamestarter(game, rule);
  };
  gamestart()
export default gamestart