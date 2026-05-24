console.log("Hello World");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const roundResult = document.querySelector("#round-result");
const result = document.querySelector("#result");
const roundNo = document.querySelector("#round-no");
const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const playOrReset = document.querySelector("#play-or-reset");
const humanChoiceDisplayed = document.querySelector("#human-choice-displayed");
const computerChoiceDisplayed = document.querySelector("#computer-choice-displayed");

//CREATE FUNCTION gethumanChoice
    //CREATE the variable userInput and give it a value of a prompt asking it to write one of the three options
    //RETURN the result
//END FUNCTION
//TEST the function through console.log

  function playGame(){
  let humanScore = 0;
  let computerScore = 0;
  let rounds = 0; 
  computerScoreDisplay.textContent = "Computer score is: " + computerScore;
  humanScoreDisplay.textContent = "Your score is: " + humanScore;
  roundNo.textContent = "Round: " + rounds;
  roundResult.textContent = "";
  result.textContent = "";
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
  function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock" && computerChoice === "paper"){
    roundResult.textContent = "You lose! Paper beats rock!";
    computerScore++;
    rounds++;
    computerScoreDisplay.textContent = "Computer score is: " + computerScore;
    humanScoreDisplay.textContent = "Your score is: " + humanScore;
    roundNo.textContent = "Round: " + rounds;
  } else if (humanChoice === "paper" && computerChoice === "rock"){
    roundResult.textContent = "you win! Paper beats rock!";
    humanScore++;
    rounds++;
    computerScoreDisplay.textContent = "Computer score is: " + computerScore;
    humanScoreDisplay.textContent = "Your score is: " + humanScore;
    roundNo.textContent = "Round: " + rounds;
  } else if (humanChoice === "scissors" && computerChoice === "rock"){
    roundResult.textContent = "you lose! Rock beats scissors!";
    computerScore++;
    rounds++;
    computerScoreDisplay.textContent = "Computer score is: " + computerScore;
    humanScoreDisplay.textContent = "Your score is: " + humanScore;
    roundNo.textContent = "Round: " + rounds;
  } else if (humanChoice === "rock" && computerChoice === "scissors"){
    roundResult.textContent = "you win! Rock beats scissors!";
    humanScore++;
    rounds++;
    computerScoreDisplay.textContent = "Computer score is: " + computerScore;
    humanScoreDisplay.textContent = "Your score is: " + humanScore;
    roundNo.textContent = "Round: " + rounds;
  } else if (humanChoice === "paper" && computerChoice === "scissors"){
    roundResult.textContent = "you lose! Scissors beats paper!";
    computerScore++;
    rounds++;
    computerScoreDisplay.textContent = "Computer score is: " + computerScore;
    humanScoreDisplay.textContent = "Your score is: " + humanScore;
    roundNo.textContent = "Round: " + rounds;
  } else if (humanChoice === "scissors" && computerChoice === "paper"){
    roundResult.textContent = "you win! Scissors beats paper!";
    humanScore++;
    rounds++;
    computerScoreDisplay.textContent = "Computer score is: " + computerScore;
    humanScoreDisplay.textContent = "Your score is: " + humanScore;
    roundNo.textContent = "Round: " + rounds;
  } else if (humanChoice === computerChoice){
    roundResult.textContent = "It's a draw!";
    rounds++;
    computerScoreDisplay.textContent = "Computer score is: " + computerScore;
    humanScoreDisplay.textContent = "Your score is: " + humanScore;
    roundNo.textContent = "Round: " + rounds;
  }
  if (humanScore > computerScore && rounds === 5){
    result.textContent = "you win!!!";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    humanScore = 0;
    computerScore = 0;
    rounds = 0; 
  } else if (humanScore < computerScore && rounds === 5){
    result.textContent = "you lose :(";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    humanScore = 0;
    computerScore = 0;
    rounds = 0; 
  } else if (humanScore === computerScore && rounds === 5){
    result.textContent = "It's a draw!";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    humanScore = 0;
    computerScore = 0;
    rounds = 0; 
  }
}
 rock.addEventListener("click", (e) => {
    function getHumanChoice () {
      return "rock";
    };
    function getComputerChoice(){
      let random = Math.random()-0.1;
      if (random < 0.3){
        return "scissors";
      } else if (random > 0.3 && random < 0.6){
        return "rock";
      } else {
        return "paper";
      };
};
    humanChoiceDisplayed.textContent = String.fromCodePoint(0x1FAA8);
    if (getComputerChoice() === "rock"){
      computerChoiceDisplayed.textContent = String.fromCodePoint(0x1FAA8);
    } else if (getComputerChoice() === "paper"){
      computerChoiceDisplayed.textContent = String.fromCodePoint(0x1F4C4);
    } else{
      computerChoiceDisplayed.textContent = String.fromCodePoint(0x2702);
    };
    playRound(getHumanChoice(), getComputerChoice());
});

  paper.addEventListener("click", (e) => {
    function getHumanChoice () {
      return "paper";
    };
  function getComputerChoice(){
      let random = Math.random()-0.1;
      if (random < 0.3){
        return "scissors";
      } else if (random > 0.3 && random < 0.6){
        return "rock";
      } else {
        return "paper";
      };
};
    humanChoiceDisplayed.textContent = String.fromCodePoint(0x1F4C4);
    if (getComputerChoice() === "rock"){
      computerChoiceDisplayed.textContent = String.fromCodePoint(0x1FAA8);
    } else if (getComputerChoice() === "paper"){
      computerChoiceDisplayed.textContent = String.fromCodePoint(0x1F4C4);
    } else{
      computerChoiceDisplayed.textContent = String.fromCodePoint(0x2702);
    };
    playRound(getHumanChoice(), getComputerChoice());
});

  scissors.addEventListener("click", (e) => {
    function getHumanChoice () {
      return "scissors";
    };
    function getComputerChoice(){
      let random = Math.random()-0.1;
      if (random < 0.3){
        return "scissors";
      } else if (random > 0.3 && random < 0.6){
        return "rock";
      } else {
        return "paper";
      };
};

    humanChoiceDisplayed.textContent = String.fromCodePoint(0x2702);
    if (getComputerChoice() === "rock"){
      computerChoiceDisplayed.textContent = String.fromCodePoint(0x1FAA8);
    } else if (getComputerChoice() === "paper"){
      computerChoiceDisplayed.textContent = String.fromCodePoint(0x1F4C4);
    } else{
      computerChoiceDisplayed.textContent = String.fromCodePoint(0x2702);
    };
    playRound(getHumanChoice(), getComputerChoice());
});
};
playOrReset.addEventListener("click", playGame);