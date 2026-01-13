function getComputerChoice() {
  const a = Math.random();
  if (a <= 0.33) return 'rock';

  if (a > 0.33 && a <= 0.66) return 'paper';

  if (a > 0.66) return 'scissors';
}

let humanScore = 0;
let computerScore = 0;
let gameOver = false;
function playRound(humanChoice, computerChoice) {
  console.log('humanChoice', humanChoice);
  console.log('computerChoice', computerChoice);
  if (humanChoice === computerChoice) {
    return `Draw! Your choice is ${humanChoice}, computer choice is ${computerChoice}`;
  }

  if (humanChoice === 'rock' && computerChoice === 'scissors') {
    humanScore++;
    return 'You win! Rock beats scissors';
  }
  if (humanChoice === 'scissors' && computerChoice === 'paper') {
    humanScore++;
    return 'You win! Scissors beats paper';
  }
  if (humanChoice === 'paper' && computerChoice === 'rock') {
    humanScore++;
    return 'You win! Paper beats rock';
  }
  if (humanChoice === 'rock' && computerChoice === 'paper') {
    computerScore++;
    return 'You lose! Paper beats rock';
  }
  if (humanChoice === 'scissors' && computerChoice === 'rock') {
    computerScore++;
    return 'You lose! Rock beats scissors';
  }
  if (humanChoice === 'paper' && computerChoice === 'scissors') {
    computerScore++;
    return 'You lose! Scissors beats paper';
  }

  return 'Your input was not correct.';
}
function playGame(humanChoice) {
  if (gameOver) return;
  const computerChoice = getComputerChoice();
  const roundResult = playRound(humanChoice, computerChoice);
  let result = document.querySelector('.result');
  result.textContent = ` ${roundResult} | You ${humanScore}, Computer ${computerScore} `;
  let win = document.querySelector('.win');
  if (humanScore === 5) {
    win.textContent = 'You win!!!!';
    gameOver = true;
  } else if (computerScore === 5) {
    win.textContent = 'Computer win((((((';
    gameOver = true;
  }
}
let rock = document.querySelector('#rock');
rock.addEventListener('click', () => playGame('rock'));
let paper = document.querySelector('#paper');
paper.addEventListener('click', () => playGame('paper'));
let scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => playGame('scissors'));
