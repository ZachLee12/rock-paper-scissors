let computerPlay = () => {
    choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection != null) {
        playerSelection = playerSelection.trim().toLowerCase();
        if (playerSelection.length == 0) {
            console.log("You didn't enter anything. You lose this round :)");
        }
    }

    else if (playerSelection === null) {
        console.log("You didn't enter anything. You lose this round :)");
    }

    let playerWins = false;
    if (playerSelection === computerSelection) {
        console.log("Draw!");
        return "draw";
    }

    switch (playerSelection) {
        case "rock":
            if (computerSelection === "scissors") {
                playerWins = true;
            } else {
                playerWins = false;
            }
            break;
        case "paper":
            if (computerSelection === "rock") {
                playerWins = true;
            } else {
                playerWins = false;
            }
            break;
        case "scissors":
            if (computerSelection === "paper") {
                playerWins = true;
            } else {
                playerWins = false;
            }
            break;
        default:
            playerWins = false;
    }

    playerWins ? console.log(`You Win! ${playerSelection} beats ${computerSelection}`) :
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
    return playerWins;

}

let game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let playerInput = undefined;
    let playerWins = undefined;

    alert("A game of rock, paper, scissors! Can you beat your own computer in 5 rounds?")

    for (let i = 0; i < 5; i++) {
        (function () {
            playerInput = prompt(`Enter rock, paper, or scissors [round ${i + 1}]: `);

        }())
        playerWins = playRound(playerInput, computerPlay())
        if (playerWins && (typeof playerWins === typeof false)) {//because if "Draw", it returns a string, not boolean
            playerScore++;
        } else if (!playerWins && (typeof playerWins === typeof false)) {
            computerScore++;
        }
    }

    console.log("#########################################");
    console.log(`Your score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log("You won!");
    } else if (playerScore < computerScore) {
        console.log("Computer won!");
    } else {
        console.log("Nobody won!");
    }
    console.log("#########################################");
}

game();



