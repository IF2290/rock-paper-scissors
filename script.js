//CREATE FUNCTION getcomputerChoice which returns one of the three options(Rock,..)
    //CREATE variable random which generates decimal numbers from 0 to 1 and subtract it by 0.1 to make it fully fair
    //IF the no. is less than 0.3:
    //RETURN Rock
    //ELSE IF the no. is more than 0.3 but less than 0.6:
    //RETURN paper
    //ELSE:
    //RETURN scissors
    //END IF
//END FUNCTION
function getComputerChoice(){
  let random = Math.random()-0.1;
  if (random < 0.3){
    return "scissors";
  } else if (random > 0.3 && random < 0.6){
    return "rock";
  } else {
    return "paper";
  }
}
//CREATE FUNCTION gethumanChoiceRightCase
    //CREATE the variable userInput and give it a value of a prompt asking it to write one of the three options
    //RETURN the result
//END FUNCTION
function getHumanChoice(){
  let userInput = prompt("enter your choice");
  return userInput;
}
//TEST the function through console.log
//CREATE variable humanSelection and set its value to gethumanChoiceRightCase
const humanSelection = getHumanChoice;
//CREATE variable computerSelection and set its value to getcomputerChoice
const computerSelection = getComputerChoice;
//CREATE FUNCTION playGame
  //CREATE variable rounds and set its initial value to 0
  //CREATE variable humanScore and set its initial value to 0
  //CREATE variable computerScore and set its initial value to 0
  //CREATE FUNCTION playRound and give it the parameters humanChoice and computerChoice
    //CREATE FUNCTION caseInsensitive
        //CREATE variable humanChoiceRightCase which turns the humanChoice to lowercase
        //RETURN humanChoiceRightCase
    //END FUNCTION
        //IF humanChoiceRightCase is equal to rock and computerChoice is equal to paper:
        //PRINT "you lose! paper beats rock!"
        //Increment computerScore(1)
        //INCREMENT rounds(e)
        //ELSE IF humanChoiceRightCase is equal to paper and computerChoice is equal to rock:
        //PRINT "you win! paper beats rock!"
        //increment humanScore(2)
        //(e)
        //ELSE IF humanChoiceRightCase is equal to Scissors and computerChoice is equal to Rock:
        //PRINT "you lose! rock beats scissors!"
        //(1)(e)
        //ELSE IF its vice versa of the prevoius case:
        //PRINT "you win! rock beats scissors!"
        //(2)(e)
        //ELSE IF humanChoiceRightCase is equal to paper and computerChoice is equal to scissors:
        //PRINT "you lose! scissors beats paper!"
        //(1)(e)
        //ELSE IF vice versa:
        //PRINT "you win! scissors beats paper"
        //(2)(e)
    //END IF
  //END FUNCTION
  //INCREMENT rounds
  //IF rounds is less than 5:
  //CALL playRound with parameters replaced with humanChoiceRightCase and computerChoice
  //ELSE IF rounds is equal to 5:
    //IF humanScore is less than computerScore:
    //PRINT "Computer wins!"
    //ELSE print "you win!"
  //END IF
//END FUNCTION
function playGame(){
  let humanScore = 0;
  let computerScore = 0;
  let rounds = 0; 
  function playRound(humanChoice, computerChoice){
    function caseInsensitive(){
      let toRightCase = humanChoice.toLowerCase();
      return toRightCase;
    }
    let humanChoiceRightCase = caseInsensitive();
  if (humanChoiceRightCase === "rock" && computerChoice === "paper"){
    console.log("you lose! paper beats rock!");
    computerScore++;
    rounds++;
  } else if (humanChoiceRightCase === "paper" && computerChoice === "rock"){
    console.log("you win! Paper beats rock!");
    humanScore++;
    rounds++;
  } else if (humanChoiceRightCase === "scissors" && computerChoice === "rock"){
    console.log("you lose! rock beats scissors!");
    computerScore++;
    rounds++;
  } else if (humanChoiceRightCase === "rock" && computerChoice === "scissors"){
    console.log("you win! rock beats scissors!");
    humanScore++;
    rounds++;
  } else if (humanChoiceRightCase === "paper" && computerChoice === "scissors"){
    console.log("you lose! scissors beats paper!");
    computerScore++;
    rounds++;
  } else if (humanChoiceRightCase === "scissors" && computerChoice === "paper"){
    console.log("you win! scissors beats paper!");
    humanScore++;
    rounds++;
  } else if (humanChoiceRightCase === computerChoice){
    console.log("it's a draw!");
    rounds++;
  }
  }
  playRound(humanSelection, computerSelection);
}
playGame(humanSelection, computerSelection);
