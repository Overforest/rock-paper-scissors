console.log("Rock, Paper, Scissors!");

// A function that gets a random choice from the computer => getComputerChoice() 

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const choice = options[Math.floor(Math.random() * options.length + 1)];
    return choice;
}

// A function that checks the winner => checkWinner()

function checkWinner(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return 'Tie';
    } else if((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'rock')) {
        return 'Player';
    } else {
        return 'Computer';
    }
}

// A function that plays a single round => playRound()

function playRound(playerSelection, computerSelection) {
    const matchResult = checkWinner(playerSelection, computerSelection);
    if(matchResult == 'Tie') {
        return "It's a Tie Game!";
    } else if(matchResult == 'Player') {
        return `Player wins! ${playerSelection} beats ${computerSelection}` 
    } else {
        return `Computer wins! ${computerSelection} beats ${playerSelection}`
    }
}

// A function that gets an input choice from the player => getPlayerChoice()

function getPlayerChoice() {
    let validInput = false;
    while(validInput == false) {
        const options = ['rock', 'paper', 'scissors'];
        const choice = prompt('Rock, Paper or Scissors?');
        if (choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)) {
            validInput = true;
            return choiceInLower;
        }
    }
}

// => game()

