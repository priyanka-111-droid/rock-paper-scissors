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
    // for(let i=1;i<=5;i++){
    //     userSelection = prompt("Enter choice: rock/paper/scissors");
    //     userSelection = userSelection.toLowerCase();
    //     computerSelection = getComputerChoice();
    //     console.log(`Round ${i}:${playRound(userSelection,computerSelection)}`);
    // }
    // console.log(`Winner is ${playerScore>computerScore?"User":"Computer"}`);
    let i=1;
    // while(playerScore!=5||computerScore!=5){
        
    const result = document.querySelector('#result');
    const p = document.createElement('p');
    
        const btnList = document.querySelectorAll('button');
        btnList.forEach((button)=>{
            computerSelection = getComputerChoice();
            button.addEventListener('click',function(e){
                // playRound(e.target,computerSelection)
                // console.log(`Round ${i}:${playRound(e.target.id,computerSelection)} :${playerScore},${computerScore}`);
                p.textContent+=`Round ${i}:${playRound(e.target.id,computerSelection)} :${playerScore},${computerScore}\n`;
                p.style.whiteSpace = 'pre-line';
                result.appendChild(p);

                i+=1;
                // console.log(e.target);
                if(playerScore==5||computerScore==5){
                    // console.log(`Winner is ${playerScore>computerScore?"User":"Computer"}`);
                    if(playerScore==5){
                        p.textContent=`Winner is user`;
                    }else{
                        p.textContent=`Winner is computer`;
                    }
                    result.appendChild(p);
                    return;
                }
            });
        });
}
game();