// Get a random choice for "Computer"
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}
// Capitalize first letter in a String
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
// Single round of Rock Paper Scissors
function playRound(playerSelection, computerChoice) {
    let text;
    let isWinner;
    let isTie = false;
    playerSelection = playerSelection.toLowerCase();
    // Rock
    if (playerSelection === 'rock') {
        if (computerChoice === 'scissors') {
            text = 'You won! Rock totally beats Scissors';
            isWinner = true;
        }
        else {
            text = `You lost :( ! Rock loses to ${capitalize(computerChoice)}`;
            isWinner = false;
        }
    }
    // Paper
    if (playerSelection === 'paper') {
        if (computerChoice === 'rock') {
            text = 'You won! Paper totally beats Rock';
            isWinner = true;
        }
        else {
            isWinner = false;
            text = `You lost :( ! Paper loses to ${capitalize(computerChoice)}`;
        }
    }
    // Scissors
    if (playerSelection === 'scissors') {
        if (computerChoice === 'paper') {
            text = 'You won! Scissors totally beats Paper';
            isWinner = true;
        }
        else {
            isWinner = false;
            text = `You lost :( ! Scissors loses to ${capitalize(computerChoice)}`;
        }
    }
    // Tie
    if (playerSelection === computerChoice) {
        isTie = true;
        text = `You tied! ${capitalize(playerSelection)} vs ${capitalize(computerChoice)} wouldn't work :(`;
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
const playAgain = document.querySelector('.playAgain');
const resultText = document.querySelector('.resultText');
const playerScore = document.querySelector('.scorePlayer');
const cpuScore = document.querySelector('.scoreComputer');
let currentPlayerScore = parseInt(playerScore.textContent.split('--')[1]);
let currentComputerScore = parseInt(cpuScore.textContent.split('--')[1]);
function updateScore(winOrLose, isTie) {
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
weaponsWrapper.forEach((weapon) => {
    weapon.addEventListener('click', (e) => {
        if (parseInt(playerScore.textContent.split('--')[1]) >= 5 ||
            parseInt(cpuScore.textContent.split('--')[1]) >= 5)
            return;
        const { target } = e;
        const playerSelection = target.className;
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
playAgain.addEventListener('click', (e) => {
    location.reload();
});
