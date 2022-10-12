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

function win(player, computer) {
    return "You win: " + player.toLowerCase() + " beats " + computer
};

function lose(player, computer) {
    return "You lose: " + computer + " beats " + player.toLowerCase()
};

function tie() {
    return "It's a tie!"
};

function playRound(playerChoice, computerChoice) {
    if (playerChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
        return win(playerChoice, computerChoice)
    } else if (playerChoice.toLowerCase() === "rock" && computerChoice === "paper") {
        return lose(playerChoice, computerChoice)
    } else if (playerChoice.toLowerCase() === "rock" && computerChoice === "rock") {
        return tie()
    } else if (playerChoice.toLowerCase() === "paper" && computerChoice === "rock") {
        return win(playerChoice, computerChoice)
    } else if (playerChoice.toLowerCase() === "paper" && computerChoice === "scissors") {
        return lose(playerChoice, computerChoice)
    } else if (playerChoice.toLowerCase() === "paper" && computerChoice === "paper") {
        return tie()
    } else if (playerChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
        return win(playerChoice, computerChoice)
    } else if (playerChoice.toLowerCase() === "scissors" && computerChoice === "rock") {
        return lose(playerChoice, computerChoice)
    } else if (playerChoice.toLowerCase() === "scissors" && computerChoice === "scissors") {
        return tie()
    } else {
        return "Please input rock, paper or scissors ^^"
    }
}

let score = 0
let wins = 0
let loses = 0
for (let i = 0; i < 5; i++) {
    let playerSel = prompt("What do you play?")
    result = playRound(playerSel, getComputerChoice())
    if (result.search('You win: ') !== -1) {
        wins += 1
        score += 1
    } else if (result.search('You lose: ') !== -1) {
        loses += 1
        score += 1
    } else if (result.search("It's a tie!") !== -1) {
        score += 1
    } else {
        i -= 1
    }
    console.log(result, "\nRound:", score, "Wins:", wins, "Loses:", loses)
}

if (wins > loses) {
    console.log("You win the game!")
} else if (loses > wins) {
    console.log("You lose the game...")
} else {
    console.log ("The game is tied!")
}