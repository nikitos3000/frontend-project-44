import { getRandomNum } from '../random.js'
import gamestarter from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".'
let rangemin = 1;
let rangemax = 100;


const isprime = (number) => {

    if (number === 1)  {
      return false;
    }
    else if(number === 2)  {
      return true;
    } else   {
      for(let i = 2; i < number; i++)  {
        if(number % i === 0) {
          return false;
        }
      }
      return true;  
    }
  }

  const game = () =>{
    let number = getRandomNum(rangemin, rangemax)
  const correctanswer = isprime(number) ? 'yes' : 'no';
    const Quest = number;
    return [ correctanswer, Quest ];


  }

  const gamestarterprime = () =>{
    gamestarter(game, rule);
  };
gamestarterprime()
export default gamestarterprime

