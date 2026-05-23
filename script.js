console.log("Hello World");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const roundResult = document.querySelector("#round-result");
const result = document.querySelector("#result");
//CREATE FUNCTION gethumanChoice
    //CREATE the variable userInput and give it a value of a prompt asking it to write one of the three options
    //RETURN the result
//END FUNCTION
//TEST the function through console.log
function playGame(){
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
  let humanScore = 0;
  let computerScore = 0;
  let rounds = 0; 
  function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock" && computerChoice === "paper"){
    roundResult.textContent = "You lose! Paper beats rock!";
    computerScore++;
    rounds++;
  } else if (humanChoice === "paper" && computerChoice === "rock"){
    roundResult.textContent = "you win! Paper beats rock!";
    humanScore++;
    rounds++;
  } else if (humanChoice === "scissors" && computerChoice === "rock"){
    roundResult.textContent = "you lose! Rock beats scissors!";
    computerScore++;
    rounds++;
  } else if (humanChoice === "rock" && computerChoice === "scissors"){
    roundResult.textContent = "you win! Rock beats scissors!";
    humanScore++;
    rounds++;
  } else if (humanChoice === "paper" && computerChoice === "scissors"){
    roundResult.textContent = "you lose! Scissors beats paper!";
    computerScore++;
    rounds++;
  } else if (humanChoice === "scissors" && computerChoice === "paper"){
    roundResult.textContent = "you win! Scissors beats paper!";
    humanScore++;
    rounds++;
  } else if (humanChoice === computerChoice){
    roundResult.textContent = "It's a draw!";
  }
  if (humanScore > computerScore && rounds === 5){
    result.textContent = "you win!!!";
  } else if (humanScore < computerScore && rounds === 5){
    result.textContent = "you lose :(";
  };
}
 rock.addEventListener("click", (e) => {
    function getHumanChoice () {
      return "rock";
    }
    playRound(getHumanChoice(), getComputerChoice());
});

  paper.addEventListener("click", (e) => {
    function getHumanChoice () {
      return "paper";
    }
    playRound(getHumanChoice(), getComputerChoice());
});

  scissors.addEventListener("click", (e) => {
    function getHumanChoice () {
      return "scissors";
    }
    playRound(getHumanChoice(), getComputerChoice());
});
}
playGame();