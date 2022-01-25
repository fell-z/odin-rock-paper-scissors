function computerSelection() {
  const computerChoices = ["rock", "paper", "scissors"];
  return computerChoices[Math.floor(Math.random() * 3)]; // obs: random number between 0 and 2
}

function playerSelection() {
  let playerChoice;
  while (true) {
    //* This make a comparison as a safety measure to make sure "choice" is always a valid value.
    playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
      break;
    }
  }
  return playerChoice;
}

function game() {
  let playerScore = 0,
    computerScore = 0;

  function playRound(playerChoice, computerChoice) {
    //! Case compChoice == "ROCK"
    if (computerChoice === "rock") {
      if (playerChoice === "paper") {
        playerScore++;
        console.log("Player wins! Paper beats Rock.");
      } else if (playerChoice === "scissors") {
        computerScore++;
        console.log("Computer wins! Rock beats Scissors.");
      } else {
        console.log("Draw!");
      }
      //! Case compChoice == "PAPER"
    } else if (computerChoice === "paper") {
      if (playerChoice === "scissors") {
        playerScore++;
        console.log("Player wins! Scissors beats Paper.");
      } else if (playerChoice === "rock") {
        computerScore++;
        console.log("Computer wins! Paper beats Rock.");
      } else {
        console.log("Draw!");
      }
      //! Case compChoice == "SCISSORS"
    } else if (computerChoice === "scissors") {
      if (playerChoice === "rock") {
        playerScore++;
        console.log("Player wins! Rock beats Scissors.");
      } else if (playerChoice === "paper") {
        computerScore++;
        console.log("Computer wins! Scissors beats Paper.");
      } else {
        console.log("Draw!");
      }
    }
  }

  for (let i = 0; i < 5; i++) {
    const computerChoice = computerSelection();
    const playerChoice = playerSelection();

    playRound(playerChoice, computerChoice);
  }

  console.log(`Player: ${playerScore}\nComputer: ${computerScore}\n`);
  if (playerScore > computerScore) {
    console.log("The player is the winner!");
  } else if (playerScore < computerScore) {
    console.log("The computer is the winner!");
  } else {
    console.log("Draw! Nobody wins!");
  }
}

game();
