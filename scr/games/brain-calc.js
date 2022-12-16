import { getRandomNum } from '../random.js'
import gamestarter from '../index.js';

const rule = 'What is the result of the expression?';


let rangemin = 1;
let rangemax = 100;
let operators = ['+','-','*']
const getRandomOperator = (operators) => Math.floor(Math.random() * operators.length);





const calculate = (x, y, operator) => {
    switch (operator) {
      case '+':
        return x + y;
      case '-':
        return x - y;
      case '*':
        return x * y;
      default:
       return false
    };
};

const game = () =>{
    let num1 = getRandomNum(rangemin, rangemax);
    let num2 = getRandomNum(rangemin, rangemax);
    const operator = operators[getRandomOperator(operators)];
    const Quest = `${num1} ${operator} ${num2}`;
    const correctanswer = calculate(num1, num2, operator).toString();
    return [correctanswer, Quest]
};

const gamestartercalc = () =>{
    gamestarter(game, rule)
};

export default gamestartercalc