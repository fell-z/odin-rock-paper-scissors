const resultsContainer = document.querySelector(".results div");
const newGameButton = document.querySelector("#new-game");
const scoreboard = document.querySelector(".scoreboard");

const playerButtons = document.querySelectorAll(".player-buttons button");

let playerScore = 0,
  computerScore = 0,
  roundCounter = 0;

scoreboard.textContent = `Player: ${playerScore} || Computer: ${computerScore}`;

playerButtons.forEach((button) =>
  button.addEventListener("click", (event) => {
    if (computerScore < 5 && playerScore < 5) {
      game(event);
    }
  })
);

newGameButton.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  roundCounter = 0;
  resultsContainer.innerHTML = "";
  scoreboard.textContent = `Player: ${playerScore} || Computer: ${computerScore}`;
  document.body.querySelector("h3").remove();
});

/*
* this is the function called by the player buttons,
* the "playerRound" function returns the text containing
* the winner from the round previously played.

* it makes the ground by creating an paragraph element with the declared winner of the round and,
* if one of the scores counter reach "5", create a "h4" element with the winner of the game.

*/
function game(event) {
  const result = document.createElement("p");
  result.textContent = playRound(event.target.dataset.choice, computerSelection());

  scoreboard.textContent = `Player: ${playerScore} || Computer: ${computerScore}`;

  roundCounter++;
  result.textContent = `${roundCounter}. ${result.textContent}`;

  resultsContainer.appendChild(result);

  if (playerScore === 5) {
    const winnerDeclaration = document.createElement("h3");
    winnerDeclaration.textContent = "The player is the winner!";

    document.body.insertBefore(winnerDeclaration, scoreboard);
  } else if (computerScore === 5) {
    const winnerDeclaration = document.createElement("h3");
    winnerDeclaration.textContent = "The computer is the winner!";

    document.body.insertBefore(winnerDeclaration, scoreboard);
  }
}

function computerSelection() {
  const COMPUTER_CHOICES = ["rock", "paper", "scissors"];
  return COMPUTER_CHOICES[Math.floor(Math.random() * 3)]; // obs: random number between 0 and 2
}

//* this code plays one single round of the game
function playRound(playerChoice, computerChoice) {
  switch (computerChoice) {
    case "rock":
      if (playerChoice === "paper") {
        playerScore++;
        return "Player wins! Paper beats Rock.";
      } else if (playerChoice === "scissors") {
        computerScore++;
        return "Computer wins! Rock beats Scissors.";
      } else {
        return "Draw!";
      }

    case "paper":
      if (playerChoice === "scissors") {
        playerScore++;
        return "Player wins! Scissors beats Paper.";
      } else if (playerChoice === "rock") {
        computerScore++;
        return "Computer wins! Paper beats Rock.";
      } else {
        return "Draw!";
      }

    case "scissors":
      if (playerChoice === "rock") {
        playerScore++;
        return "Player wins! Rock beats Scissors.";
      } else if (playerChoice === "paper") {
        computerScore++;
        return "Computer wins! Scissors beats Paper.";
      } else {
        return "Draw!";
      }

    default:
      break;
  }
}
