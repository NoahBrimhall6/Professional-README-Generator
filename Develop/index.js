// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Include packages needed for this application
const inquirer = requier('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const messages = [
  'What is the title of your README?',
  'Provide a short description explaining the what, why, and how of your project',
  'What are the steps required to install your project?',
  'Provide instructions and examples for use.',
  'Who contributed to your project and what technologies did you use?',
  'What is your Github username?',
  'What is your email address?'
];

const names = [
  'title',
  'description',
  'installation',
  'usage',
  'contribution',
  'github',
  'email'
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  const questions = [];

  for (let i = 0; i < messages.length; i++) {
    let question = {
      type: 'input',
      message: messages[i],
      name: names[i]
    };

    questions.push(question);
  }

  inquirer
    .prompt(questions)
    .then((answers) => writeToFile(names[0], generateMarkdown(answers)))
    .catch((error) => (error.isTtyError ? console.error('Prompt could not be rendered in the current environment') : console.error('Something went wrong')));
}

// Function call to initialize app
init();
