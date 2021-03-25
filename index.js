const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "title",
    },
    {
        type: "input",
        message: "What does your project do?",
        name: "description",
    },
    {
        type: "input",
        message: "How do you want to install this?",
        name: "installation",
    },
    {
        type: "input",
        message: "How will you use this?",
        name: "usage",
    },
    {
        type: "list",
        message: "What license will you use?",
        name: "license",
        choices: ["Apache", "MIT", "CC"],
      },
      {
        type: "input",
        message: "Who contributed to this?",
        name: "contributing",
      },
      {
        type: "input",
        message: "How will you test this?",
        name: "tests",
      },
      {
        type: "input",
        message: "What is your Github user name??",
        name: "github",  
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
    ];



// function to write README file
function writeToFile(fileName, data) {
    const content = generateMarkdown(data);

    fs.writeFile(fileName, content, (err) => {
		if (err) throw err;
		console.log('README file generated!');
	});
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {
		console.log(response);

		writeToFile('New_README.md', response);
	});

}

// function call to initialize program
init();
