let choices = ["rock", "paper", "scissors"];
let computerPlay = () => {
    return choices[Math.floor(Math.random() * 3)];
}

let playRound = (playerSelection, computerSelection) => {
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

    playerSelection = playerSelection.trim().toLowerCase();
    computerSelection = computerSelection.trim().toLowerCase();
    playerWins ? console.log(`You Win! ${playerSelection} beats ${computerSelection}`) :
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
    return playerWins;

}

let check = (input) => {
    if (input === null) {
        console.log("Invalid input. Enter rock, paper or scissors!")
        return false;
    }

    if (!choices.includes(input.trim().toLowerCase())) {
        console.log("Invalid input. Enter rock, paper or scissors!")
        return false;
    }

    return true
}

let game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let playerWins = undefined;
    let validInput = false;
    let playerInput = "";

    alert("A game of rock, paper, scissors! Can you beat your own computer in 5 rounds?")

    for (let i = 0; i < 5; i++) {
        (function () {
            playerInput = prompt(`Enter rock, paper or scissors [round ${i + 1}]!`)
        }())
        
        validInput = check(playerInput);
        while (!validInput) {
            (function () {
                playerInput = prompt(`Enter rock, paper or scissors [round ${i + 1}]!`)
            }())
            validInput = check(playerInput);
        }

        playerWins = playRound(playerInput, computerPlay())
        
        if (typeof playerWins === typeof false) {
            playerWins ? playerScore++ : computerScore++;
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



