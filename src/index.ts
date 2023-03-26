function getComputerChoice(): string {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function capitalize(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(playerSelection: string, computerChoice: string) {
  let result: string;
  let isWinner: boolean;

  playerSelection = playerSelection.toLowerCase();

  // Rock
  if (playerSelection === 'rock') {
    if (computerChoice === 'scissors') {
      result = 'You won! Rock totally beats Scissors';
      isWinner = true;
    } else {
      result = `You lost :( ! Rock loses to ${capitalize(computerChoice)}`;
      isWinner = false;
    }
  }

  // Paper

  if (playerSelection === 'paper') {
    if (computerChoice === 'rock') {
      result = 'You won! Paper totally beats Rock';
      isWinner = true;
    } else {
      isWinner = false;
      result = `You lost :( ! Paper loses to ${capitalize(computerChoice)}`;
    }
  }

  // Scissors

  if (playerSelection === 'scissors') {
    if (computerChoice === 'paper') {
      result = 'You won! Scissors totally beats Paper';
      isWinner = true;
    } else {
      isWinner = false;
      result = `You lost :( ! Scissors loses to ${capitalize(computerChoice)}`;
    }
  }

  // Tie

  if (playerSelection === computerChoice) {
    isWinner = false;
    result = `You tied! ${capitalize(playerSelection)} vs ${capitalize(
      computerChoice
    )} wouldn't work :(`;
  }

  return { result, playerSelection, computerChoice, isWinner };
}
