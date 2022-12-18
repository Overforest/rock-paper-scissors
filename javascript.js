console.log("Rock, Paper, Scissors!");

// A function that gets a random choice from the computer => getComputerChoice() 

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const choice = options[Math.floor(Math.random() * options.length + 1)];
    return choice;
}

// A function that checks the winner => checkWinner()

// A function that plays a single round => playRound()

// => game()

