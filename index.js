var Counter = require('./counter');
var counter = new Counter();

var inquirer = require('inquirer');

var questions = [{
    type: 'confirm',
    name: 'play',
    message: 'Are you ready for play this game?',
    validate: function(value) {
        if (value) {
            return true;
        }
        return 'Try next time!';
    }
}, {
    type: 'list',
    name: 'choices',
    message: 'Choose! Paper, Rock or Scissors?',
    choices: ['paper', 'rock', 'scissors']
}];

var game = function() {
    inquirer.prompt(questions).then(function(answer) {

        var userChoice = answer.choices;
        console.log('You chose', userChoice);

        var computerChoice = Math.floor(Math.random() * 3);
        if (computerChoice === 0) {
            computerChoice = 'rock';
        } else if (computerChoice === 1) {
            computerChoice = 'paper';
        } else {
            computerChoice = 'scissors';
        }

        console.log('Computer chose', computerChoice);

        if (userChoice == computerChoice) {
            console.log('Tie!');
        } else if ((userChoice === 'rock' && computerChoice === 'paper') ||
            (userChoice === 'paper' && computerChoice === 'scissors') ||
            (userChoice === 'scissors' && computerChoice === 'rock')) {
            console.log('You LOSE!');
        } else {
            console.log('You WIN!');
        }

        console.log('This is the game number ', counter.getNumber());
        counter.increase();
        console.log('O Counter funciona perfeitamente na medida que neste momento o valor aumentou para ', counter.getNumber());

        inquirer.subscribe(game());

        inquirer.prompt({
            type: 'confirm',
            name: 'again',
            message: 'Do you want to play again?',
            validade: function(value) {
                if (value) {
                    counter.increase();
                    return game();
                } else {
                    return false;
                }
            }
        }, game);

    });
}

game();
