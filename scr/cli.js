import readlineSync from 'readline-sync';

const username = () =>{
  console.log('Welcome to the Brain Games!');
  let name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name

}

export default username