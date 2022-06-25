let playerScore = 0;
let computerScore = 0;
let computerInput;
let playerInput;
let gameMessage;

function computerChoice(computerChoice){
    if(computerChoice == 1){
            
       computerInput = "rock";
    }else if (computerChoice == 2){
        computerInput = "paper"
    }else if (computerChoice = 3) {
        computerInput = "scissors"
    }
    return computerInput
}

function playGame(playerInput, computerInput){

if(playerInput == "rock" && computerInput == "paper"){
    gameMessage = "Computer wins!";
    computerScore ++;
}else if(playerInput == "rock" && computerInput == "scissors"){
    gameMessage = "Player wins!";
    playerScore++;

    
    
}else if(playerInput == "paper" && computerInput == "rock"){
    gameMessage = "Player wins!";
    playerScore++;
    
}
else if(playerInput == "paper" && computerInput == "scissors"){
    gameMessage = "Computer wins!";
    computerScore++;
}else if (playerInput == "scissors" && computerInput == "rock"){
    gameMessage = "Computer wins!";
    computerScore++;
    
}else if (playerInput == "scissors" && computerInput == "paper"){
    gameMessage = "Player wins!";
    playerScore++;
   
}else{
    gameMessage = "Its a tie!";
}
return gameMessage
}



function playRounds(rounds){
    
    
   for (let index = 0; index < rounds; index++) {
    
    let randomNumber = Math.floor(Math.random() * 3 )+1; 
    var valid_ans = false;
    while(!valid_ans) { 
       let playerChoice = window.prompt("Choose rock paper or scissors");
       
      if(playerChoice.toLowerCase() == "rock" || playerChoice.toLowerCase() == "paper" || playerChoice.toLowerCase() == "scissors"){
          playerInput = playerChoice.toLowerCase(); 
          valid_ans = true;
      }
    }
   
    computerChoice(randomNumber);   
    playGame(playerInput, computerInput);
    alert("Player plays:" + playerInput + " Computer plays:" + computerInput);
    alert(gameMessage);
    

       
   }
   console.log("Player score: " + playerScore + "Computer score:" + computerScore);
   if(playerScore > computerScore){
       alert("Player Score:" + playerScore + "Computer Score:" + computerScore);
       alert("Player wins!");
   }else if (computerScore > playerScore){
       
       alert("Player Score:" + playerScore + "Computer Score:" + computerScore);
       alert("Computer wins");
   }else{
        alert("Player Score:" + playerScore + "Computer Score:" + computerScore);
        alert("Its a tie");

   }
   
}
playRounds(4);