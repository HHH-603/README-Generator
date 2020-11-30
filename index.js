const inquirer = require(`inquirer`);
const fs = require(`fs`);

const questions = () =>
    inquirer.prompt([
        {
            type: `input`,
            name: `description`,
            message: `Describe your README generator`,
        },
        {
            type: `input`,
            name: `installation instructions`,
            message: `Describe your instructions for installing your README generator`,
        },
        {
            type: `input`,
            name: `usage information`,
            message: `Describe how your README generator works`,
        },
        {
            type: `input`,
            name: `contributing`,
            message: `Who contributed to your README generator?`,
        },
        {
            type: `input`,
            name: `tests`,
            message: `How did you test your README generator?`,
        },
        {
            type: `checkbox`,
            name: `license`,
            message: `What type of license do you want to use with your README generator?`,
            choices: [
                `Public Domain (Unlicensed)`,
                `Apache License`,
                `GPL License`,
            ]
        },
        {
            type: `input`,
            name: `github username`,
            message: `What is your GitHub username?`,
        },
        {
            type: `input`,
            name: `email`,
            message: `What is your email address?`,
        },
    ]);

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();