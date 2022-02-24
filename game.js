const resultsContainer = document.querySelector(".results div");
const newGameButton = document.querySelector("#new-game");

const playerButtons = document.querySelectorAll(".player-buttons button");

let playerScore = 0,
  computerScore = 0,
  roundCounter = 0;

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

  roundCounter++;
  result.textContent = `${roundCounter}. ${result.textContent}`;

  resultsContainer.appendChild(result);

  //* in the lines containing "forEach" in playerButtons, it just removes the event listener
  //* to prevent the player from playing a game who's already over.
  if (playerScore === 5) {
    const winnerDeclaration = document.createElement("h3");
    winnerDeclaration.textContent = "The player is the winner!";

    resultsContainer.insertBefore(winnerDeclaration, resultsContainer.firstChild);
  } else if (computerScore === 5) {
    const winnerDeclaration = document.createElement("h3");
    winnerDeclaration.textContent = "The computer is the winner!";

    resultsContainer.insertBefore(winnerDeclaration, resultsContainer.firstChild);
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
