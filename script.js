let playerScore=0;
let computerScore=0;
function getComputerChoice(){
    let choices=['rock','paper','scissors'];
    let randomIndex = Math.floor(Math.random()*choices.length);
    return  choices[randomIndex];
}
// console.log(getComputerChoice());
function playRound(playerSelection,computerSelection){
    if(playerSelection==computerSelection){
        return 'No one wins!';
    }
    else if(playerSelection=='rock'){
        if(computerSelection=='scissors'){
            playerScore+=1;
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
        else {
            computerScore+=1;
            return `You loose! ${computerSelection} beats ${playerSelection}`;
        }
    }
    else if(playerSelection=='scissors'){
        if(computerSelection=='rock'){
            computerScore+=1;
            return `You loose! ${computerSelection} beats ${playerSelection}`;
        }
        else {
            playerScore+=1;
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
    }
    else{
        if(computerSelection=='rock'){
            playerScore+=1;
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
        else{
            computerScore+=1;
            return `You loose! ${computerSelection} beats ${playerSelection}`;
        }
    }
        
}

function game(){
    let userSelection,computerSelection;
    for(let i=1;i<=5;i++){
        userSelection = prompt("Enter choice: rock/paper/scissors");
        userSelection = userSelection.toLowerCase();
        computerSelection = getComputerChoice();
        console.log(`Round ${i}:${playRound(userSelection,computerSelection)}`);
    }
    console.log(`Winner is ${playerScore>computerScore?"User":"Computer"}`);
}

game();