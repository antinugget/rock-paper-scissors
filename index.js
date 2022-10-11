function getComputerChoice() {
    choice = Math.floor(Math.random()*(Math.floor(4)-Math.ceil(1))+Math.ceil(1))
    if (choice === 1) { 
        return "rock"
    } else if (choice === 2) {
        return "paper"
    } else {
        return "scissors"
    }
};

function win(player, computer) {
    return "You win: " + player + " beats " + computer;
};

function lose(player, computer) {
    return "You lose: " + computer + " beats " + player;
};

function tie() {
    return "It's a tie!"
};

function playRound(playerChoice, computerChoice) {
    if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            lose(playerChoice, computerChoice)
        } else if (computerChoice === "scissors") {
            win(playerChoice, computerChoice)
        } else {
            tie()
        };
    } else if (playerChoice === "paper") {
        if (computerChoice === "paper") {
            tie()
        } else if (computerChoice === "scissors") {
            lose(playerChoice, computerChoice)
        } else {
            win(playerChoice, computerChoice)
        };
    } else if (playerChoice === "scissors") {
        if (computerChoice === "paper") {
            win(playerChoice, computerChoice)
        } else if (computerChoice === "scissors") {
            tie()
        } else {
            lose(playerChoice, computerChoice)
        };
    } else {
        alert("Please submit rock, paper or scissors.")
    };
};

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection,computerSelection));