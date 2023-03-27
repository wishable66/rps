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
