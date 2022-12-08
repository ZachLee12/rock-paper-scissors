let choices = ["rock", "paper", "scissors"];
let playerChoice = "";
let computerChoice = "";
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

    return playerWins;
}

let restartButton = document.querySelector("#restartButton")
let announcement = document.querySelector(".announcement>div")
let playerScore = 0;
let computerScore = 0;
let modalWinner = document.querySelector(".winner")
let modal = document.getElementById("myModal");

document.querySelectorAll("figure").forEach((figure) => {
    figure.addEventListener("click", () => {
        playerChoice = figure.id;
        computerChoice = computerPlay();
        playerWin = playRound(playerChoice, computerChoice)
        updateResults(playerWin, playerChoice, computerChoice)
        if (playerScore == 5) {
            modalWinner.innerText = "You Win!"
            modal.style.display = "block";

        } else if (computerScore == 5) {
            modalWinner.innerText = "You Lose!"
            modal.style.display = "block";
        }
    })
})

function updateResults(playerWin, playerChoice, computerChoice) {
    //capitalize first letter of player and computer choices for formatting!
    let playerStr1 = playerChoice;
    let playerStr2 = playerStr1.charAt(0).toUpperCase() + playerStr1.slice(1);
    let comStr1 = computerChoice;
    let comStr2 = comStr1.charAt(0).toUpperCase() + comStr1.slice(1);
    //
    if (typeof playerWin == typeof false) {
        if (playerWin) {
            playerScore++
            document.querySelector("td.playerScore").innerText = playerScore;
            announcement.innerText = `You win! ${playerChoice} beats ${computerChoice}`
        } else {
            computerScore++;
            document.querySelector("td.computerScore").innerText = computerScore
            announcement.innerText = `You lose! ${comStr2} beats ${playerStr2}`
        }
    } else {
        announcement.innerText = "Draw!";
    }
}

restartButton.addEventListener("click", () => {
    modal.style.display = "none";
    playerScore = 0;
    computerScore = 0;
    document.querySelector("td.playerScore").innerText = playerScore
    document.querySelector("td.computerScore").innerText = computerScore
    announcement.innerText = "First to 5 points wins!"
})




