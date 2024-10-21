// Mapping the choices to their corresponding emojis
const emojiMap = {
    rock: '🪨',
    paper: '📃',
    scissors: '✂️'
};

const choices = ["rock", "paper", "scissors"];
const yourDisplay = document.getElementById("yourDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

// Score display section
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

// Function to play the game
function play(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(computerChoice);

    let result = "";

    // Determine the result
    if (playerChoice === computerChoice) {
        result = "It's a tie! 👔";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        result = "You win! 🌟";
        playerScore++;
    } else {
        result = "You lose 😔";
        computerScore++;
    }

    // Display the player and computer choice as emojis
    yourDisplay.textContent = `You: ${emojiMap[playerChoice]}`;
    computerDisplay.textContent = `Computer: ${emojiMap[computerChoice]}`;
    resultDisplay.textContent = result;

    // Update the score display and colors
    resultDisplay.classList.remove("greenText", "redText");
    if (result.includes("win")) {
        resultDisplay.classList.add("greenText");
    } else if (result.includes("lose")) {
        resultDisplay.classList.add("redText");
    }

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}
