/* Program to play the age old classic, Rock, Paper, Scissors, against computer */

/**
 * Start game once player makes a selection
 */
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.textContent);
    });
});

/**
 * Function to play game of Rock, Paper, Scissors
 */
function game (playerSelection) {
    const SELECTIONS = ["Rock", "Paper", "Scissors"];
    const WINNING_SCORE = 5;
    let computerScore = 0;
    let playerScore = 0;
    let computerSelection;
    let playerWin;

    // get comp choice
    computerSelection = getComputerChoice(SELECTIONS);

    // increment scores accordingly
    playerWin = playRound(computerSelection, playerSelection);

    if (playerWin) {
        playerScore += 1;
    } else if (playerWin == false) {
        computerScore += 1;
    } else {
    }

    // display game results
    displayGameResults(playerScore, computerScore, computerSelection, playerSelection);
}

/**
 * Function that randomly generates computer player choice
 */
function getComputerChoice (SELECTIONS) {
    return SELECTIONS[Math.floor(Math.random() * 3)]; 
}


/**
 * Function to determine results of round
 */
function playRound (computerSelection, playerSelection) {

    if (playerSelection === computerSelection) {
        return;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return true;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return true;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return true;
    } else {
        return false;
    }
}

/**
 * Function to display game results
 */
function displayGameResults(playerScore, computerScore, computerSelection, playerSelection, WINNING_SCORE) {
    
    const results = document.querySelector('#results');
    results.classList.add('result');
    
    results.textContent = `Player chooses ${playerSelection}`
        + `\nComputer chooses ${computerSelection}`
        + `\nScore: ${playerScore} to ${computerScore}`
        + (playerScore > WINNING_SCORE) ? '\nWinner!' :
            (computerScore > WINNING_SCORE) ? '\nLoser!' : '';
}