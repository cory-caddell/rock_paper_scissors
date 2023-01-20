/* Program to play the age old classic, Rock, Paper, Scissors against computer */


const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
let compScore = 0;
let playerScore = 0;
// play game
    // play round of game
        // get comp choice
        let computerSelection = getComputerChoice();
        // get player choice
        let playerSelection = getPlayerChoice();
        // display choices to console
        console.log("Computer selection: " + computerSelection);
        console.log("Player selection: " + playerSelection);
        
        // determine results of round, if any
        // display winner of rounds, if any
        // increment variable of winner by 1
    // repeat above steps 5 times
// if player score variable is > comp score variable, display player wins message
// else if player score variable is < comp score variable, display player loses message
// else display draw message

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
        // if playerChoice = compChoice, round is a draw
        // else if playerChoice = rock and compChoice = scissors, player wins
        // else if playerChoice = paper and compChoice = rock, player wins
        // else if playerChoice = scissors and compChoice = paper, player wins
        // else player loses

        /******* How to return change player score???? ****/
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