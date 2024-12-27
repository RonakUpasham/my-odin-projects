console.log("Hello World!");

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const gameArea = document.getElementById('game-area');
const newGameArea = document.getElementById('new-game-area');
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const playerChoiceElement = document.getElementById('player-choice');
const computerChoiceElement = document.getElementById('computer-choice');
const resultElement = document.getElementById('result');
let humanScore = 0;
let computerScore = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
function getComputerChoice(){
    let choice = "";
    let randomInt = getRandomInt(3);

    if(randomInt == 0){
        choice = "rock";
    }
    else if(randomInt == 1){
        choice = "paper";
    }
    else{
        choice = "scissors";
    }

    return choice;
}

function playRound(humanChoice, computerChoice){
    console.log(humanChoice, computerChoice);
    let roundWinner = "";
    if(humanChoice == computerChoice){
        console.log("Tie");
        roundWinner = "Tie";
        update(roundWinner, humanChoice, computerChoice);
    }
    else if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log("Human");
        roundWinner = "Human";
        humanScore++;
        update(roundWinner, humanChoice, computerChoice);
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        console.log("Human");
        roundWinner = "Human";
        humanScore++;
        update(roundWinner, humanChoice, computerChoice);
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        console.log("Human");
        roundWinner = "Human";
        humanScore++;
        update(roundWinner, humanChoice, computerChoice);
    }
    else{
        console.log("Computer");
        roundWinner = "Computer";
        computerScore++;
        update(roundWinner, humanChoice, computerChoice);
    }

    checkResult(humanScore, computerScore);
}

function update(result, playerChoice, computerChoice)
{
    playerChoiceElement.innerHTML = `You Picked ${playerChoice}`
    computerChoiceElement.innerHTML = `CPU Picked ${computerChoice}`
    resultElement.innerHTML = result;
    
    if (result === "Computer")
    {
        playerScoreElement.innerHTML = `Player Score - ${humanScore}`;
        computerScoreElement.innerHTML = `CPU Score - ${computerScore}`;
        document.body.style.backgroundColor = '#ffb9ca';
    }
    else if (result === "Human")
    {
        playerScoreElement.innerHTML = `Player Score - ${humanScore}`;
        computerScoreElement.innerHTML = `CPU Score - ${computerScore}`;
        document.body.style.backgroundColor = '#a4fe9b';
    }
    else 
    {
        document.body.style.backgroundColor = 'white';
    }


}

function getHumanChoice(){
    rockButton.addEventListener('click', (e) => {
        let computerChoice = getComputerChoice();
        return playRound("rock", computerChoice);
    })
    paperButton.addEventListener('click', (e) => {
        let computerChoice = getComputerChoice();
        return playRound("paper", computerChoice);
    })
    scissorsButton.addEventListener('click', (e) => {
        let computerChoice = getComputerChoice();
        return playRound("scissors", computerChoice);
    })
}

function checkResult(humanScore, computerScore){
    if(humanScore >= 5 || computerScore >= 5){
        let gameWinner = "";
        if(humanScore >= 5){
            gameWinner = "Human"
        }
        else{
            gameWinner = "Computer"
        }

        gameArea.style.display = 'none';
        newGameArea.innerHTML = `
            <h1>${gameWinner} Wins!</h1>
            <p>Player Score - ${humanScore}</p>
            <p>CPU Score - ${computerScore}</p>
            <button id="play-again"> Play Again? </button>
        `;

        const playAgain = document.getElementById('play-again');
        playAgain.addEventListener('click', () => {
            newGameArea.innerHTML = ``;
            gameArea.style.display = 'flex';
            resetGameArea();
        })
    }
}

function resetGameArea(){
    humanScore = 0;
    computerScore = 0;
    playerChoiceElement.innerHTML = '';
    computerChoiceElement.innerHTML = '';
    resultElement.innerHTML = '';
    playerScoreElement.innerHTML = 'Player Score - 0';
    computerScoreElement.innerHTML = 'CPU Score - 0';
    document.body.style.backgroundColor = 'white';
}

window.onload = getHumanChoice();
// console.log(getComputerChoice());