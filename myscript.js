let getUserchoice = userInput => {
    userInput = userInput.toLowerCase();
    userInput = prompt('');
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log("Error, please type: rock,paper or scissors.");
    }
}

let getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

let determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'This game is a tie';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return "You lost. Paper beats rock.";
        } else {
            return "Congrats, you won!";
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return "You lost. Scissors beats paper.";
        } else {
            return "Congrats, you won!";
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return "You lost. Rock beats scissors."
        } else {
            return "Congrats, you won!";
        }
    }
}

let playGame = () => {
    const userChoice = getUserchoice('paper');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw ' + computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
}

 playGame()
