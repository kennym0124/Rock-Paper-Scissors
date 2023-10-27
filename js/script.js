var playButton = document.querySelector(".playButtonBox");
var gameArea = document.querySelector(".gameArea");
var playerChoice;
var compChoice;
let playerScore = 0;
let compScore = 0;
var buttons = document.querySelectorAll(".btn");
var gameResults = document.querySelector(".gameResults");
var roundResults = document.querySelector(".roundResults");
var playerScoreText = document.querySelector(".playerScoreCounter");
var compScoreText = document.querySelector(".compScoreCounter");
var compChoiceImage = document.getElementById("compChoiceImage");

function playGame(playerChoice, compChoice){
    playRound(playerChoice, compChoice);
    playerScoreText.textContent = "Player Score: " + playerScore;
    compScoreText.textContent = "CPU Score: " + compScore;
    if(playerScore == 5){
        buttons.disabled = "disabled";
        gameResults.textContent = "Congratulations! You won!";
        playerScore = 0;
        compScore = 0;
        playerScoreText.textContent = "Player Score: " + playerScore;
        compScoreText.textContent = "CPU Score: " + compScore;
    }
    else if(compScore == 5){
        buttons.disabled = "disabled";
        gameResults.textContent = "You Lose!";
        playerScore, compScore = 0;
        playerScoreText.textContent = "Player Score: ${playerScore}";
        compScoreText.textContent = "CPU Score: ${compScore}";
    }
}

function playRound(playerChoice, compChoice){    
    if(playerChoice === "rock"){
        if(compChoice === "rock"){
            compChoiceImage.src = "/img/rock.png";
            roundResults.textContent = "You picked: " + playerChoice + ". You both picked " + playerChoice + ". Tie!";
            console.log("tie");
        }
        else if(compChoice === "scissors"){
            compChoiceImage.src = "/img/scissors.png";
            roundResults.textContent = "You picked: " + playerChoice +  ". Rock beats scissors. You won!";
            console.log("player wins");
            playerScore++;
        }
        else if(compChoice === "paper"){
            compChoiceImage.src = "/img/paper.png";
            roundResults.textContent = "You picked: " + playerChoice + ". Paper beats rock. You lose!";
            console.log("comp wins")
            compScore++;
        }
    }
    if(playerChoice === "scissors"){
        if(compChoice === "scissors"){
            compChoiceImage.src = "/img/scissors.png";
            roundResults.textContent = "You picked: " + playerChoice + ". You both picked " + playerChoice + ". Tie!";
            console.log("tie");
        }
        else if(compChoice === "paper"){
            compChoiceImage.src = "/img/paper.png";
            roundResults.textContent = "You picked: " + playerChoice + ". Scissors beats paper. You won!";
            console.log("player wins");
            playerScore++;
        }
        else if(compChoice === "rock"){
            compChoiceImage.src = "/img/rock.png";
            roundResults.textContent = "You picked: " + playerChoice + ". Rock beats scissors. You lose!";
            console.log("comp wins")
            compScore++;
        }
    }
    if(playerChoice === "paper"){
        if(compChoice === "paper"){
            compChoiceImage.src = "/img/paper.png";
            roundResults.textContent = "You picked: " + playerChoice + ". You both picked " + playerChoice + ". Tie!";
            console.log("tie");
        }
        else if(compChoice === "rock"){
            compChoiceImage.src = "/img/rock.png";
            roundResults.textContent = "You picked: " + playerChoice + ". Paper beats rock. You won!";
            console.log("player wins");
            playerScore++;
        }
        else if(compChoice === "scissors"){
            compChoiceImage.src = "/img/scissors.png";
            roundResults.textContent = "You picked: " + playerChoice + ". Scissors beats paper. You lose!";
            console.log("comp wins")
            compScore++;
        }
    }
}

playButton.addEventListener("click", () => {
    playButton.classList.add("elementToFadeOut");
    setTimeout(() => playButton.remove(), 1000);
    gameArea.style.height = "100%";
    setTimeout(() => gameArea.style.visibility = "visible", 1000);
})

buttons.forEach((button) => {button.addEventListener('click', () => {
    console.log("button pressed");
    playerChoice = button.id;
    console.log(playerChoice);
    compChoice = generateComputerChoice(compChoice);
    console.log(compChoice);
    playGame(playerChoice, compChoice);
})})

function generateComputerChoice(compChoice){
    let choiceNum = Math.floor(Math.random() * 3);
    if (choiceNum == 0){
        compChoice = "rock";
    }
    else if (choiceNum == 1){
        compChoice = "paper";
    }
    else if(choiceNum == 2){
        compChoice = "scissors";
    }
    return compChoice;
}
