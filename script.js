/* Program to play the age old classic, Rock, Paper, Scissors, against computer */

game();


/**
 * Function to play game of Rock, Paper, Scissors
 */
function game () {
    const SELECTIONS = ["Rock", "Paper", "Scissors"];
    const WINNING_SCORE = 5;
    let computerScore = 0;
    let playerScore = 0;
    let playerSelection;
    let computerSelection;
    let playerWin;
    
    const results = document.querySelector('#results');
    results.classList.add('result');
    
    // play a round
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            
            //get player choice
            playerSelection = button.textContent;

            //get computer choice
            computerSelection = SELECTIONS[Math.floor(Math.random() * SELECTIONS.length)];      
            
            //determine winner of round
            playerWin = playRound(computerSelection, playerSelection);

            // increment scores accordingly
            if (playerWin) {
                playerScore += 1;
            } else if (playerWin == false) {
                computerScore += 1;
            } else {
                //draw
            }

            // display round results
            const results = document.querySelector('#results');
            results.classList.add('result');
    
            results.textContent = `Player chooses ${playerSelection}`
                + `\nComputer chooses ${computerSelection}`
                + `\nScore: ${playerScore} to ${computerScore}`;

            // display game winner. reset score.
            if (playerScore == WINNING_SCORE) {
                results.textContent += '\nPlayer is Winner!';
                playerScore = 0;
                computerScore = 0;
            }

            if (computerScore == WINNING_SCORE) {
                results.textContent += '\nPlayer is Loser!';
                playerScore = 0;
                computerScore = 0;
            }

        });
    });

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
