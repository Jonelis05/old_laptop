

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

function playGame(playerMove) {

    const computerMove = pickComputermove ();

    console.log(`kompiuteris pasirinko: ${computerMove}`);

    let result = '';
    
if(playerMove === 'paper'){

    if (computerMove === 'scissors') {
           result = 'Pralaimėjai'; 
    }else if (computerMove === 'rock') {
           result = 'Laimėjai';
    }else  if (computerMove === 'paper') {
           result = 'Lygiosios';
    }
}else if(playerMove === 'rock') {
    if (computerMove === 'scissors') {
        result = 'Laimėjai'; 
    }else if (computerMove === 'rock') {
        result = 'Lygiosios';
    }else  if (computerMove === 'paper') {
        result = 'Pralaimėjai!';
}
}else if(playerMove === "scissors") {
    if (computerMove === 'scissors') {
        result = 'Lygiosios'; 
    }else if (computerMove === 'rock') {
        result = 'Pralaimėjai';
    }else  if (computerMove === 'paper') {
        result = 'Laimėjai';
}
}

if (result === 'Laimėjai') {
    score.wins ++;
} else if (result === 'Pralaimėjai') {
    score.losses ++;
} else if (result === 'Lygiosios') {
    score.ties ++;
}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result')
    .innerHTML = result;

document.querySelector('.js-moves')
    .innerHTML = `You
<img src="${playerMove}-emoji.png" class="move-icon">
<img src="${computerMove}-emoji.png" class="move-icon">
Computer`;

        }

function updateScoreElement() {
    
    document.querySelector('.js-score')
    .innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;

}

function pickComputermove () {
    
    const randomNumber = Math.random();
    
    let computerMove = '';

if(randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'scissors';
    
}else if (randomNumber >= 0 && randomNumber > 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'rock';

}else if(randomNumber >= 0 && randomNumber > 2 / 3) {
    computerMove = 'paper';
}

return computerMove;
}
