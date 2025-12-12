function getComputerChoice() {
  const a = Math.random();
  if (a <= 0.33) return 'rock';

  if (a > 0.33 && a <= 0.66) return 'paper';

  if (a > 0.66) return 'scissors';
}

function getHumanChoice() {
  const b = prompt('Write rock, paper or scissors').toLowerCase();
  if (b === 'rock') return 'rock';

  if (b === 'paper') return 'paper';

  if (b === 'scissors') return 'scissors';

  return 'ERROR';
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  console.log('humanChoice', humanChoice);
  console.log('computerChoice', computerChoice);
  if (humanChoice === computerChoice) {
    return `Draft! Your choice is ${humanChoice}, computer choice is ${computerChoice}`;
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

function playGame() {
  console.log(playRound(getHumanChoice(), getComputerChoice()));
  console.log('Human ', humanScore, 'Computer ', computerScore);
}

console.log(playGame());
console.log(playGame());
console.log(playGame());
console.log(playGame());
console.log(playGame());
