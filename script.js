/* Program to play the age old classic, Rock, Paper, Scissors against computer */

game();

/**
 * Function to play game of Rock, Paper, Scissors
 */
function game () {
    const SELECTIONS = ["Rock", "Paper", "Scissors"];
    const ROUNDS = 5;
    let computerScore = 0;
    let playerScore = 0;
    let computerSelection;
    let playerSelection;
    let playerWin;

    // play round of game
    for (let i = 0; i < ROUNDS; i++ ) {
        console.log(`Round ${i + 1} Go!: `);

        // get player choice
        playerSelection = getPlayerChoice(SELECTIONS);

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
 * Function to ask user their choice
 */
function getPlayerChoice (SELECTIONS) {
    while (true) {
        // ask user for input
        let input = prompt("Enter your selection: Rock, Paper, or Scissors");
        let playerChoice = formatStr(input);

        // validate input
        for (let i = 0; i < SELECTIONS.length; i++) {
            if (playerChoice === SELECTIONS[i]) {
                return playerChoice;
            }
        }

        alert("Invalid entry. Please try again.");
    }
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
 * Function to format selection
 */
function formatStr(str) {
    let strBeg = str.charAt(0).toUpperCase();
    let strEnd = str.slice(1).toLowerCase();
    let strNew = strBeg.concat(strEnd);

    return strNew;
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