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

// Selecting button

const maxRounds = 5;

const weaponsWrapper = document.querySelectorAll('.weaponsWrapper > *');
const playAgain: HTMLButtonElement = document.querySelector('.playAgain');
const resultText: HTMLParagraphElement = document.querySelector('.resultText');
const playerScore: HTMLParagraphElement =
  document.querySelector('.scorePlayer');
const cpuScore: HTMLParagraphElement = document.querySelector('.scoreComputer');

let currentPlayerScore = parseInt(playerScore.textContent.split('--')[1]);
let currentComputerScore = parseInt(cpuScore.textContent.split('--')[1]);

function updateScore(winOrLose: boolean, isTie: boolean) {
  currentPlayerScore = parseInt(playerScore.textContent.split('--')[1]);
  currentComputerScore = parseInt(cpuScore.textContent.split('--')[1]);
  if (winOrLose === true) {
    playerScore.textContent = `Player -- ${currentPlayerScore + 1}`;
  }
  if (winOrLose === false && !isTie) {
    cpuScore.textContent = `Computer -- ${currentComputerScore + 1}`;
  }
  if (parseInt(playerScore.textContent.split('--')[1]) === 5)
    return (resultText.textContent = 'You won this round');
  if (parseInt(cpuScore.textContent.split('--')[1]) === 5)
    return (resultText.textContent = 'You lost this round');
}
weaponsWrapper.forEach((weapon: HTMLButtonElement) => {
  weapon.addEventListener('click', (e: PointerEvent) => {
    if (
      parseInt(playerScore.textContent.split('--')[1]) >= 5 ||
      parseInt(cpuScore.textContent.split('--')[1]) >= 5
    )
      return;
    const { target } = e;
    const playerSelection = (target as HTMLButtonElement).className;
    const computerChoice = getComputerChoice();
    const currentRound = playRound(playerSelection, computerChoice).results;
    console.log({
      isWinner: currentRound.isWinner,
      isTie: currentRound.isTie,
      currentComputerScore,
      currentPlayerScore,
    });
    resultText.textContent = currentRound.text;
    updateScore(currentRound.isWinner, currentRound.isTie);
  });
});

playAgain.addEventListener('click', (e: PointerEvent) => {
  location.reload();
});
