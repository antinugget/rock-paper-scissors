function getComputerChoice() {
    choice = Math.floor(Math.random()*3)
    if (choice === 0) { 
        return "rock"
    } else if (choice === 1) {
        return "paper"
    } else {
        return "scissors"
    }
};

const content = document.querySelector('.results');
const contentResults = document.querySelector('.score')

function win(player, computer) {
    return `You win: ${player} beats ${computer}`
};

function lose(player, computer) {
    return `You lose: ${computer} beats ${player}`
};

function tie() {
    return "It's a tie!"
};

let score = 0;
let wins = 0;
let loses = 0;

function playRound(playerChoice, computerChoice) {
    let result
    if (playerChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
        result = win(playerChoice, computerChoice)
    } else if (playerChoice.toLowerCase() === "rock" && computerChoice === "paper") {
        result = lose(playerChoice, computerChoice)
    } else if (playerChoice.toLowerCase() === "rock" && computerChoice === "rock") {
        result = tie()
    } else if (playerChoice.toLowerCase() === "paper" && computerChoice === "rock") {
        result = win(playerChoice, computerChoice)
    } else if (playerChoice.toLowerCase() === "paper" && computerChoice === "scissors") {
        result = lose(playerChoice, computerChoice)
    } else if (playerChoice.toLowerCase() === "paper" && computerChoice === "paper") {
        result = tie()
    } else if (playerChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
        result = win(playerChoice, computerChoice)
    } else if (playerChoice.toLowerCase() === "scissors" && computerChoice === "rock") {
        result = lose(playerChoice, computerChoice)
    } else if (playerChoice.toLowerCase() === "scissors" && computerChoice === "scissors") {
        result = tie()
    } else {
        result = "Please input rock, paper or scissors ^^"
    }
    content.textContent = `Computer picks ${computerChoice}. ${result}`;
    if (result.search('You win: ') !== -1) {
        wins += 1
        score += 1
    } else if (result.search('You lose: ') !== -1) {
        loses += 1
        score += 1
    } else if (result.search("It's a tie!") !== -1) {
        score += 1
    }

    if (loses < 5 && wins < 5) {
        contentResults.textContent = `Running score ${wins} : ${loses}`
    } else if (loses > wins) {
        contentResults.textContent = `Score ${wins} : ${loses}. You lose the game...`
        score = 0;
        wins = 0;
        loses = 0;
    } else if (loses < wins) {
        contentResults.textContent = `Score ${wins} : ${loses}. You win the game!`
        score = 0;
        wins = 0;
        loses = 0;
}}

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    playRound("rock", getComputerChoice());
});
const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    playRound("paper", getComputerChoice());
});
const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    playRound("scissors", getComputerChoice());
})