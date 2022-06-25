let playerScore = 0;
let computerScore = 0;
let playerInput = 0;
let computerInput = Math.floor(Math.random() * 3 )+1;


if(playerInput == "rock".toLowerCase && computerInput == 2){
    console.log("Computer wins");
    computerScore ++;
}else if(playerInput == "rock".toLowerCase && computerInput == 3){
    playerScore++;
    console.log("Player wins");
    
}else if(playerInput == "paper".toLowerCase && computerInput == 1){
    playerScore++;
    console.log("Player wins");
}
else if(playerInput == "paper".toLowerCase && computerInput == 3){
    computerScore++;
    console.log("Computer wins");
}else if (playerInput == "scissors".toLowerCase && computerInput == 1){
    computerScore++;
    console.log("Computer wins");
}else if (playerInput == "scissors".toLowerCase && computerInput == 2){
    playerScore++;
    console.log("Player wins");
}else{
  console.log("Tie game");
}
console.log("Player Score:" + playerScore + "Computer Score:" + computerScore);
console.log("Computer played:" + computerInput);