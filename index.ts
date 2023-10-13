#!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';

const secretNumber = Math.floor(Math.random() * 100) + 1;

const rainbow = chalkAnimation.rainbow('\n _________________ NUMBER GUESS GAME _________________ \n');
rainbow.start();

function startGame() {
    inquirer
        .prompt({
            type: 'input',
            name: 'guess',
            message: 'Guess the secret Number [1-100]: ',
            validate: (input) => {
                const number = parseInt(input);
                if (isNaN(number) || number < 1 || number > 100) {
                    return 'Please enter a number between 1 to 100.';
                }
                return true;
            }
        })
        .then((answer) => {
            const userGuess = parseInt(answer.guess);

            if (userGuess === secretNumber) {
                console.log(chalk.blue(`\nCongratulations! You have guessed the Secret Number ${secretNumber}.`));
            } else if (userGuess < secretNumber) {
                console.log(chalk.grey('Please try a higher number.'));
                startGame();
            } else {
                console.log(chalk.grey('Please try a lower number.'));
                startGame();
            }
        });
}

setTimeout(() => {
    rainbow.stop();
    startGame();
}, 2000);
