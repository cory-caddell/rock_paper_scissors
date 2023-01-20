/* Program to play the age old classic, Rock, Paper, Scissors against computer */


const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
const ROUNDS = 5;
let compScore = 0;
let playerScore = 0;

// play game
    // play round of game
    for (let i = 0; i < ROUNDS; i++ ) {
        // get comp choice
        let computerSelection = getComputerChoice();
        
        // get player choice
        let playerSelection = getPlayerChoice();
        
        // display round to console
        console.log(`Round ${i + 1} Go!: `);
        console.log(`  Computer chooses ${computerSelection}`);
        console.log(`  Player chooses ${playerSelection}`);
        
        // display round results and increment scores accordingly
        let playerWin = calcRoundResults(computerSelection, playerSelection);
        if (playerWin) {
            playerScore += 1;
            console.log("  You win!")
        } else if (playerWin == false) {
            compScore += 1;
            console.log("  You lose!")
        } else {
            console.log("  Draw!");
        }
    }

    // display game results
    console.log(`Score: ${playerScore} to ${compScore}`)

    if (playerScore > compScore) {
        console.log("Winner!!!");
    } else if (playerScore < computerScore) {
        console.log("Loser!!!");
    } else {
        console.log("What are the odds?!?!? Draw!!!");
    }

/**
 * Function that randomly generates computer player choice
 */
function getComputerChoice () {
    let numRand = Math.floor(Math.random() * 3) + 1;
    
    let computerChoice;
    if (numRand === 1) {
        return computerChoice = ROCK;
    } else if (numRand === 2) {
        return computerChoice = PAPER;
    } else {
        return computerChoice = SCISSORS;
    }    
}

/**
 * Function to ask user their choice
 */
function getPlayerChoice () {
    while (true) {
        // ask user for input
        let input = prompt("Enter your selection: Rock, Paper, or Scissors");
        let playerChoice = formatStr(input);

        // validate input
        if (playerChoice === ROCK || playerChoice === PAPER || playerChoice === SCISSORS) {
            return playerChoice;
        } else {
            alert("Invalid entry.  Please try again.");
        }
    }
}

/**
 * Function to determine results of round
 */
function calcRoundResults (computerSelection, playerSelection) {
        if (playerSelection === computerSelection) {
            return;
        } else if (playerSelection === ROCK && computerSelection === SCISSORS) {
            return true;
        } else if (playerSelection === PAPER && computerSelection === ROCK) {
            return true;
        } else if (playerSelection === SCISSORS && computerSelection === PAPER) {
            return true;
        } else {
            return false;
        }
}

/**
 * Function to play one round of game
 */
function playRound () {

}

/**
 * Function to play game
 */
function game () {

}

/**
 * Function to format selection
 */
function formatStr(str) {
    let strBeg = str.charAt(0).toUpperCase();
    let strEnd = str.slice(1).toLowerCase();
    let strNew = strBeg.concat(strEnd);

    return strNew;
}