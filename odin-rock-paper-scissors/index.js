function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    }
}
function play(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    switch (playerSelection) {
        case 'rock':
            switch (computerSelection) {
                case 'rock': return 'Draw!';
                case 'paper': return 'You lose! Paper beats rock!';
                case 'scissors': return 'You win! Rock beats scissors!';
            };
        case 'paper':
            switch (computerSelection) {
                case 'rock': return 'You win! Paper beats rock!';
                case 'paper': return 'Draw!';
                case 'scissors': return 'You lose! Scissors beat paper';
            };
        case 'scissors':
            switch (computerSelection) {
                case 'rock': return 'You lose! Rock beats scissors!';
                case 'paper': return 'You win! Scissors beat paper';
                case 'scissors': return 'Draw!';
                };
    }
}
function game() {
    let userScore = 0
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let userSelection = prompt('Your move: rock, paper, or scissors ?');
        let computerSelection = getComputerChoice();
        console.log(play(userSelection, computerSelection));
        if (play(userSelection, computerSelection).includes('win')) {
            userScore++;
        } else if (play(userSelection, computerSelection).includes('lose')) computerScore++;
    }
    if (userScore > computerScore) {
        console.log('You\'re the absolute winner!');
    } else if (userScore < computerScore) {
        console.log('Ha-ha-ha you lost to computer!');
    } else console.log('Draw!');
}
game();