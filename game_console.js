
/* 
    Function to produce a random integer number.
    User need to provide an integer number.
    
    Example: If user provides 3, the function will produce an integer: 0 / 1 / 2
*/

const GetRandomNumber = input => {

    const result = Math.floor(Math.random() * input);

    return result;
};

const choice = {
    0: 'Rock',
    1: 'Paper',
    2: 'Scissor'
}

/* Computer Choice */

function ComputerChoice() {

    const num = GetRandomNumber(3);

    return choice[num];
};


/* Player Choice */

function PlayerChoice() {
       
    let input = prompt("Please choose a number." + '\n' +
        " 0 => Rock, 1 => Paper, 2 => Scissor."
    );

    input = (input === '') ? PlayerChoice() : Number(input)

    return choice[input];
};


/* 
    Score Tracker => Keep tracks of score for computer and player
*/

let score = {
    'computer': 0,
    'player': 0
};


/* 
    Play the game.
    Player input an integer that translate to Rock, Paper or Scissor.
    Computer make a choice based on random integer number that translate to Rock, Paper or Scissor.
    Compare the result and announce the winner / loser.
*/

function playRound(PlayerChoice, ComputerChoice) {

    const player = PlayerChoice;
    const computer = ComputerChoice;

    console.log(`Player < ${player} > vs Computer < ${computer} >`);

    let result = null;

    if (player === computer) {
        result = 'DRAW'
    }

    /* Scenarios where Player wins the game */
    else if (player === 'Rock' && computer === 'Scissor') {
        result = 'You WIN! Rock beats Scissor.'
        score.player += 1;
    }
    else if (player === 'Paper' && computer === 'Rock') {
        result = 'You WIN! Paper beats Rock.'
        score.player += 1;
    }
    else if (player === 'Scissor' && computer === 'Paper') {
        result = 'You WIN! Scissor beats Paper.'
        score.player += 1;
    }

    /* Scenarios where Computer wins the game */
    else if (player === 'Scissor' && computer === 'Rock') {
        result = 'You LOSE! Rock beats Scissor'
        score.computer += 1;
    }
    else if (player === 'Rock' && computer === 'Paper') {
        result = 'You LOSE! Rock beats Scissor'
        score.computer += 1;
    }
    else if (player === 'Paper' && computer === 'Scissor') {
        result = 'You LOSE! Scissor beats Paper'
        score.computer += 1;
    }

    console.log(result);
}


/*
    Play the game 5 rounds.
*/

function playGame() {

    console.log('Welcome to the Rock, Paper & Scissor Game.');
    console.log('\n')

    let round = 1;

    while (round <= 5) {

        console.log(`Round ${round}`)
        console.log('\n')

        playRound(PlayerChoice(), ComputerChoice());
        round += 1;

        console.log('\n')
    };

    console.log(score);

    let text = null;

    if (score.player > score.computer) {
        text = `Player Score: ${score.player}` + '\n' +
        `Computer Score: ${score.computer}` + '\n' +
        'You WIN !!'
    }
    else if (score.player < score.computer) {
        text = `Player Score: ${score.player}` + '\n' +
        `Computer Score: ${score.computer}` + '\n' +
        'You LOSE !!'
    }
    else {
        text = `Player Score: ${score.player}` + '\n' +
        `Computer Score: ${score.computer}` + '\n' +
        'DRAW GAME !!'
    }

    console.log(text);

}

// Call the function to play the game 5 rounds.
// playGame();