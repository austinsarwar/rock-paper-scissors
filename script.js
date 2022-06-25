let playerScore = 0;
let computerScore = 0;
let playerInput = "rock";
let computerInput;
let randomNumber = Math.floor(Math.random() * 3 )+1;

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
computerChoice(randomNumber);


if(playerInput == "rock" && computerInput == "paper"){
    console.log("Computer wins");
    computerScore ++;
}else if(playerInput == "rock" && computerInput == "scissors"){
    playerScore++;
    console.log("Player wins");
    
}else if(playerInput == "paper" && computerInput == "rock"){
    playerScore++;
    console.log("Player wins");
}
else if(playerInput == "paper" && computerInput == "scissors"){
    computerScore++;
    console.log("Computer wins");
}else if (playerInput == "scissors" && computerInput == "rock"){
    computerScore++;
    console.log("Computer wins");
}else if (playerInput == "scissors" && computerInput == "paper"){
    playerScore++;
    console.log("Player wins");
}

console.log("Player PLays: " + playerInput + "/" + " Computer Plays: " + computerInput);