/* 
FUNCTION computerPlay
START

    Pick randomly "Rock" or "Paper" or "Scissors".
    Return the picked Choice.

END
FUNC_END


FUNCTION humanPlay
START

    Request the human his choice, whether be "Rock" or "Paper" or "Scissors".
    Return the picked Choice.

END
FUNC_END


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
