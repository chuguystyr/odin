let userScore = 0;
let computerScore = 0;
let roundCounter = 0;
let buttons = document.getElementsByTagName('button');
let div = document.getElementsByTagName('div')[0];
for (let button of buttons) {
    button.addEventListener('click', (event) => {
        roundCounter++;
        game(event);
        if (roundCounter === 5) {
            telltheWinner(userScore, computerScore);
            userScore = 0;
            computerScore = 0;
            setTimeout(() => div.replaceChildren(), 3000); 
        }
    });
}
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
function game(event) {
        let userSelection = event.target.innerText;
        let computerSelection = getComputerChoice();
        let text = play(userSelection, computerSelection);
        let paragraph = document.createElement('p');
        paragraph.innerText = text;
        div.appendChild(paragraph);
        if (text.includes('win')) {
            userScore++;
        } else if (text.includes('lose')) computerScore++;
}
function telltheWinner (userScore, computerScore) {
    let text = '';
    if (userScore > computerScore) {
        text = 'You\'re the absolute winner!';
    } else if (userScore < computerScore) {
        text =  'Ha-ha-ha you lost to computer!';
    } else {
        text = 'It\'s a draw!';
    }
    let paragraph = document.createElement('p');
    paragraph.innerText = text;
    div.appendChild(paragraph);
}