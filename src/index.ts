// Get a random choice for "Computer"
function getComputerChoice(): string {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Capitalize first letter in a String

function capitalize(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Single round of Rock Paper Scissors

function playRound(playerSelection: string, computerChoice: string) {
  let text: string;
  let isWinner: boolean;
  let isTie: boolean = false;

  playerSelection = playerSelection.toLowerCase();

  // Rock
  if (playerSelection === 'rock') {
    if (computerChoice === 'scissors') {
      text = 'You won! Rock totally beats Scissors';
      isWinner = true;
    } else {
      text = `You lost :( ! Rock loses to ${capitalize(computerChoice)}`;
      isWinner = false;
    }
  }

  // Paper

  if (playerSelection === 'paper') {
    if (computerChoice === 'rock') {
      text = 'You won! Paper totally beats Rock';
      isWinner = true;
    } else {
      isWinner = false;
      text = `You lost :( ! Paper loses to ${capitalize(computerChoice)}`;
    }
  }

  // Scissors

  if (playerSelection === 'scissors') {
    if (computerChoice === 'paper') {
      text = 'You won! Scissors totally beats Paper';
      isWinner = true;
    } else {
      isWinner = false;
      text = `You lost :( ! Scissors loses to ${capitalize(computerChoice)}`;
    }
  }

  // Tie

  if (playerSelection === computerChoice) {
    isTie = true;
    text = `You tied! ${capitalize(playerSelection)} vs ${capitalize(
      computerChoice
    )} wouldn't work :(`;
  }

  return {
    results: {
      text,
      isWinner,
      isTie,
    },
  };
}

// A game of Rock Paper Scissors with 5 rounds

function game() {
  let playerWon: number = 0;
  let computerWon: number = 0;
  let ties: number = 0;
  for (let i = 1; i <= 5; i++) {
    const playerSelection = prompt('Rock, Paper, Scissors');
    const computerChoice = getComputerChoice();
    const currentRound = playRound(playerSelection, computerChoice);
    if (currentRound.results.isWinner) {
      playerWon++;
    } else if (!currentRound.results.isTie) {
      computerWon++;
    }

    if (currentRound.results.isTie) {
      ties++;
    }
    console.log(currentRound.results.text);
  }

  if (playerWon === computerWon)
    return console.log(
      `YOU TIED THE ROUND!! Results: \n\tWins: ${playerWon}\n\tLoses: ${computerWon}\n\tTies:${ties}`
    );
  if (playerWon > computerWon) {
    return console.log(
      `YOU WON THE ROUND!! Results: \n\tWins: ${playerWon}\n\tLoses: ${computerWon}\n\tTies:${ties}`
    );
  } else {
    return console.log(
      `YOU LOST THE ROUND!! Results: \n\tWins: ${playerWon}\n\tLoses: ${computerWon}\n\tTies:${ties}`
    );
  }
}

game();
