console.log("Hello World");
//CREATE FUNCTION getComputerChoice which returns one of the three options(Rock,..)
    //CREATE variable random which generates decimal numbers from 0 to 1
    //IF the no. is less than 0.33333:
    //RETURN Rock
    //ELSE IF the no. is more than 0.33333 but less than 0.66666:
    //RETURN paper
    //ELSE:
    //RETURN scissors
    //END IF
//END FUNCTION
//TEST the function through console.log
//CREATE FUNCTION getHumanChoice
    //CREATE the variable userInput and give it a value of a prompt asking it to write one of the three options
    //RETURN the result
//END FUNCTION
//TEST the function through console.log
//CREATE variable humanSelection and set its value to getHumanChoice
//CREATE variable computerSelection and set its value to getComputerChoice
//CREATE FUNCTION playGame
  //CREATE variable rounds and set its initial value to 0
  //CREATE variable humanScore and set its initial value to 0
  //CREATE variable computerScore and set its initial value to 0
  //CREATE FUNCTION playRound and give it the parameters humanChoice and computerChoice
    //CREATE FUNCTION caseInsensitive
        //CREATE variable toRightCase which turns the humanSelection to lowercase
        //RETURN toRightCase
    //END FUNCTION
        //IF humanChoice is equal to rock and computerChoice is equal to paper:
        //PRINT "you lose! paper beats rock!"
        //Increment computerScore(1)
        //ELSE IF humanChoice is equal to paper and computerChoice is equal to rock:
        //PRINT "you win! paper beats rock!"
        //increment humanScore(2)
        //ELSE IF humanChoice is equal to Scissors and computerChoice is euqal to Rock:
        //PRINT "you lose! rock beats scissors!"
        //(1)
        //ELSE IF its vice versa of the prevoius case:
        //PRINT "you win! rock beats scissors!"
        //(2)
        //ELSE IF humanChoice is equal to paper and computerChoice is equal to scissors:
        //PRINT "you lose! scissors beats paper!"
        //(1)
        //ELSE IF vice versa:
        //PRINT "you win! scissors beats paper"
        //(2)
    //END IF
  //END FUNCTION
  //INCREMENT rounds
  //IF rounds is less than 5:
  //CALL playRound with parameters replaced with humanSelection and computerSelection
  //ELSE IF rounds is equal to 5:
    //IF humanScore is less than computerScore:
    //PRINT "Computer wins!"
    //ELSE print "you win!"
  //END IF
//END FUNCTION


