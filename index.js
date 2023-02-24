const inquirer = require('inquirer');
const fs = require('fs');
// const { generate } = require('rxjs');
const generateMarkdown = require('./utils/generateMarkdown');
const renderLicenseBadge = require('./utils/generateMarkdown');

function init() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a description of your project, remember, this is added to your README so spelling and punctuation matter.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the installation requirements for your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Write a description on how to use your project.',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Write out the contribution guidelines for your project.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Write instructions on how to run all necessary tests.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your project: ',
            choices: ['MIT', 'Apache', 'GPL', 'none'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email.',
        },
    ])
    .then ((data) => {
        const readMeContent = generateMarkdown(data);
        let chosenLicense;

        fs.writeFile('README.md', readMeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md'));
            module.exports.chosenLicense = chosenLicense;
    })
}

init();