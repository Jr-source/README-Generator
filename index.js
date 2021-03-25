const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

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
    message: "What is your GitHub username",
    name: "github",
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
    message: "What is your email address?",
    name: "email",
  },
];

function writeToFile(fileName, data) {
  const content = generateMarkdown(data);

  fs.writeFile(fileName, content, (err) => {
    if (err) throw err;
    console.log("README file generated!");
  });
}

function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);

    writeToFile("New_README.md", response);
  });
}

init();
