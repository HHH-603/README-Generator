const inquirer = require(`inquirer`);
const fs = require(`fs`);
const util = require(`util`);
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
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
            name: `github`,
            message: `What is your GitHub username?`,
        },
        {
            type: `input`,
            name: `email`,
            message: `What is your email address?`,
        },
    ]);


const generateMarkdown = (answers) =>
`# Title
${answers.title}

## License
${answers.license}

## Description
${answers.description}

## Table of Contents
Installation
Usage
License
Contributing
Tests
Questions

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you have any questions for me about my README generator, please reach out to me via GitHub at ${answers.github} or send me an email at ${answers.email}.`



promptUser()
    .then((answers) => writeFileAsync(`README.md`, generateMarkdown(answers)))
    .then(() => console.log(`Successfully wrote to README.md`))
    .catch((err) => console.error(err));


// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();