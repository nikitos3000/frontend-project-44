import readlineSync from 'readline-sync';


const round = 3

const gamestarter = (game, rule) => {
    console.log('Welcome to the Brain Games!');
    const username = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${username}!`);
    console.log(rule);
    for (let i = 0; i < round; i += 1) {
     const  [correctanswer, Quest] = game();
     console.log(`Question: ${Quest}`);
     const playeranswer = readlineSync.question('Your answer: ');
     if (correctanswer !== playeranswer) {
        console.log(`'${playeranswer}' is wrong answer ;(. Correct answer was '${correctanswer}'.`);
        console.log(`Let's try again, ${username}!`);
        return;
      }else
      console.log('Correct!');
    }
    console.log(`Congratulations, ${username}!`);
  };


export default gamestarter