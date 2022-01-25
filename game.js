/* 
xxxxxxxxxxxxxxxxxxxxxxxxxxxxx Already Done
FUNCTION computerPlay
START

    Pick randomly "Rock" or "Paper" or "Scissors".
    Return the picked Choice.

END
FUNC_END
xxxxxxxxxxxxxxxxxxxxxxxxxxxxx Already Done


xxxxxxxxxxxxxxxxxxxxxxxxxxxxx Already Done
FUNCTION playerSelection
START

    Request the human his choice, whether be "Rock" or "Paper" or "Scissors".
    Return the picked Choice.

END
FUNC_END
xxxxxxxxxxxxxxxxxxxxxxxxxxxxx Already Done


FUNCTION compareChoices
START

  Call the function "computerPlay" and store the returned choice into a var named "computerChoice".
  Call the function "humanPlay" and store the returned choice into a var named "humanChoice"

  IF computerChoice === "Rock" THEN
    IF humanChoice === "Paper" THEN
      DISPLAY "Human Wins!".

    ELSE IF humanChoice === "Scissors" THEN
      DISPLAY "Computer Wins!".

    ELSE THEN
      DISPLAY "Draw!".
  END

  ELSE IF computerChoice === "Paper" THEN
    IF humanChoice === "Scissors" THEN
      DISPLAY "Human Wins!".

    ELSE IF humanChoice === "Rock" THEN
      DISPLAY "Computer Wins!".

    ELSE THEN
      DISPLAY "Draw!".
  END
  
  ELSE IF computerChoice === "Scissors" THEN
    IF humanChoice === "Rock" THEN
      DISPLAY "Human Wins!".

    ELSE IF humanChoice === "Paper" THEN
      DISPLAY "Computer Wins!".

    ELSE THEN
      DISPLAY "Draw!".
  END

END
FUNC_END
*/

function computerPlay() {
  const CHOICES = ["rock", "paper", "scissors"];
  return CHOICES[Math.floor(Math.random() * 3)]; // obs: random number between 0 and 2
}

function playerSelection() {
  let playerChoice;
  while (true) {
    playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
      break;
    }
  }
  return playerChoice;
}
