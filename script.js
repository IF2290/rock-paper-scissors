console.log("Hello World");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
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
    console.log("you lose! paper beats rock!");
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock"){
    console.log("you win! Paper beats rock!");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock"){
    console.log("you lose! rock beats scissors!");
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors"){
    console.log("you win! rock beats scissors!");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors"){
    console.log("you lose! scissors beats paper!");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper"){
    console.log("you win! scissors beats paper!");
    humanScore++;
  } else if (humanChoice === computerChoice){
    console.log("it's a draw!");
  }else {
    console.log("wuz")
  }
  }
  if (humanScore > computerScore){
    console.log("you win!!!")
  } else {
    console.log("you lose :(")
  };
  
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