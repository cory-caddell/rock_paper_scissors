/* Program to play the age old classic, Rock, Paper, Scissors against computer */

let playerSelection;
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.textContent;
        game(playerSelection);
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

    // display round results and increment scores accordingly
    playerWin = playRound(computerSelection, playerSelection);

    if (playerWin) {
        playerScore += 1;
        console.log("  You win!")
    } else if (playerWin == false) {
        computerScore += 1;
        console.log("  You lose!")
    } else {
        console.log("  Draw!");
    }

    // display game results
    displayGameResults(playerScore, computerScore);
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
    console.log(`  Player chooses ${playerSelection}`);
    console.log(`  Computer chooses ${computerSelection}`);

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
function displayGameResults(playerScore, computerScore) {
    console.log(`Score: ${playerScore} to ${computerScore}`)

    if (playerScore > computerScore) {
        console.log("Winner!!!");
    } else if (playerScore < computerScore) {
        console.log("Loser!!!");
    } else {
        console.log("What are the odds?!?!? Draw!!!");
    }
}