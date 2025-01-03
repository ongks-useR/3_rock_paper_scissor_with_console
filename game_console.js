
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

const ComputerChoice = () => {

    const num = GetRandomNumber(3);

    return choice[num];
};


/* Player Choice */

const PlayerChoice = () => {

    const input = Number(prompt('Player to choose a number: '));
    const num = GetRandomNumber(input);

    return choice[num];
};

console.log(`Player: ${PlayerChoice()}`);